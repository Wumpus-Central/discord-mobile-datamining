// discord_app/modules/panels/morphable/native/AppFreezer.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import obj132Default from "../../../core/native/NativeView.tsx";
import closure_2 from "../AppFreezeStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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