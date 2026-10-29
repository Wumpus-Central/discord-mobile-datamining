// === Module 5832: flatten ===

// Module 5832 (flatten)
import baseFlatten from "baseFlatten" /* 5833 */;


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