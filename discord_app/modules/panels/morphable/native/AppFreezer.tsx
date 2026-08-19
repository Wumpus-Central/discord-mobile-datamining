// === Module 15778: jsx ===

// Module 15778 (jsx)
import noopAll from "noop" /* 19 */;
import obj132Default from "obj132" /* 7190 */;
import closure_2 from "module_9010" /* 9010 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
let closure_4 = jsx(obj132Default, { style: { flex: 1 } });
const result = require("obj132").fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default function AppFreezer(children) {
  let flag = children.manualFreeze;
  if (flag === undefined) {
    flag = false;
  }
  let placeholder = children.placeholder;
  if (placeholder === undefined) {
    placeholder = closure_4;
  }
  let lockKeys = children.lockKeys;
  let freeze = callback((lockKeys) => {
    lockKeys = lockKeys.lockKeys;
    if (null != lockKeys) {
      let someResult = lockKeys.some((item, index) => lockKeys.has(item));
    } else {
      someResult = lockKeys.size > 0;
    }
    return someResult;
  });
  if (!freeze) {
    freeze = flag;
  }
  return jsx(lockKeys(4681).Freeze, { freeze, placeholder, children: children.children });
};