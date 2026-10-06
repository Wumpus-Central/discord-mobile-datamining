// === Module 7956: computeGlobalSpoilerDisplay ===

// Module 7956 (computeGlobalSpoilerDisplay)
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Permissions: c3, SpoilerRenderSetting: closure_4 } = Constants);
function computeGlobalSpoilerDisplay(arg0, arg1) {
  if (constants2.ALWAYS === arg0) {
    return true;
  } else if (constants2.IF_MODERATOR === arg0) {
    return arg1;
  } else {
    const ON_CLICK = constants2.ON_CLICK;
    return false;
  }
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return PermissionStore.can(constants.MANAGE_MESSAGES, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const RenderSpoilers = tmp(2028).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  if (cResult[3] === stateFromStores) {
    let tmp9;
    if (cResult[4] === setting) {
      tmp9 = cResult[5];
    }
    return !tmp9;
  }
  let flag = true;
  if (constants2.ALWAYS !== setting) {
    flag = stateFromStores;
    if (constants2.IF_MODERATOR !== setting) {
      const ON_CLICK = constants2.ON_CLICK;
      flag = false;
    }
  }
  cResult[3] = stateFromStores;
  cResult[4] = setting;
  cResult[5] = flag;
  tmp9 = flag;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_MESSAGES, closure_0));
  const RenderSpoilers = require("UserSettings").RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  let flag = true;
  if (constants2.ALWAYS !== setting) {
    flag = stateFromStores;
    if (constants2.IF_MODERATOR !== setting) {
      const ON_CLICK = constants2.ON_CLICK;
      flag = false;
    }
  }
  return !flag;
});
const result = size.fileFinishedImporting("modules/messages/computeGlobalSpoilerDisplay.tsx");

export default computeGlobalSpoilerDisplay;
export const useShouldDisplaySpoilerObscurity = tmp3;