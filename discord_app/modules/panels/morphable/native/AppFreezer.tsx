// discord_app/modules/panels/morphable/native/AppFreezer.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import setDefault from "../../../core/native/NativeView.tsx";
import closure_2 from "../AppFreezeStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
let closure_4 = jsx(setDefault, { style: { flex: 1 } });
const result = require("set").fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

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
      let someResult = lockKeys.some((arg0) => lockKeys.has(arg0));
    } else {
      someResult = lockKeys.size > 0;
    }
    return someResult;
  });
  if (!freeze) {
    freeze = flag;
  }
  return jsx(lockKeys(4923).Freeze, { freeze, placeholder, children: children.children });
}
