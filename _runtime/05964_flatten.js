// === Module 5964: flatten ===

// Module 5964 (flatten)
import baseFlatten from "baseFlatten" /* 5965 */;


export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};