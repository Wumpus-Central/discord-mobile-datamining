// === Module 5794: flatten ===

// Module 5794 (flatten)
import baseFlatten from "baseFlatten" /* 5795 */;


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