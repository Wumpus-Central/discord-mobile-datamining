// === Module 5190: flatten ===

// Module 5190 (flatten)
import baseFlatten from "baseFlatten" /* 5191 */;


export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};