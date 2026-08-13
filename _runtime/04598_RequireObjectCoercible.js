// _runtime/04598_RequireObjectCoercible.js
import { 00541__ } from "metro/00541__.js";

export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    let tmp3 = 00541__;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    tmp3 = new tmp3(text);
    throw tmp3;
  } else {
    return arg0;
  }
};