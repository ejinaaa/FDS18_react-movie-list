import React from 'react';

export default function Heading({ level, className, children, ...restProps }) {
  return React.createElement(`h${level}`, {
    className,
    children,
    ...restProps,
  });
}
