"use client";

import { useEffect, useRef, useState } from "react";

function mud(str: string, seed: number) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += String.fromCharCode(str.charCodeAt(i) ^ seed);
  }
  return result;
}

export function Reveal(props: {
  value: string;
  seed: number;
  mailto?: boolean;
  className?: string;
}) {
  const [text, setText] = useState(props.value);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  function reveal() {
    if (started.current) {
      return;
    }
    started.current = true;

    const to = mud(props.value, props.seed);
    const ratio = 48 / to.length;
    const interval = to.length * ratio;
    const accel = 0.75 * ratio;
    let i = 0;

    (function loop() {
      setText(to.slice(0, i) + props.value.slice(i));
      if (i < to.length) {
        setTimeout(loop, interval - i * accel);
        i++;
      } else {
        setDone(true);
      }
    })();
  }

  useEffect(() => {
    if (!matchMedia("(pointer: coarse)").matches) {
      return;
    }
    window.addEventListener("click", reveal, { once: true });
    return () => window.removeEventListener("click", reveal);
  });

  const href =
    props.mailto && done
      ? "mailto:" + mud(props.value, props.seed)
      : undefined;

  return (
    <a
      href={href}
      className={props.className}
      onMouseEnter={reveal}
      onClick={reveal}
      data-nosnippet
    >
      {text}
    </a>
  );
}
