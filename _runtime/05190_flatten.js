// _runtime/05190_flatten.js
import baseFlatten from "05191_baseFlatten.js";

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
}
