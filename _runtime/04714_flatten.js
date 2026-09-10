// === Module 4714: flatten ===

// Module 4714 (flatten)
import baseFlatten from "baseFlatten" /* 4715 */;


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