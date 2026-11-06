// _runtime/06000_flatten.js
import baseFlatten from "06001_baseFlatten.js";

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
}
