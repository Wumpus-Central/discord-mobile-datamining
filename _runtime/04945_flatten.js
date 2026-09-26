// === Module 4945: flatten ===

// Module 4945 (flatten)
import baseFlatten from "baseFlatten" /* 4946 */;


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