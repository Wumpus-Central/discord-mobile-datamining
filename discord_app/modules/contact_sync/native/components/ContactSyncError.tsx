// === Module 12322: ContactSyncError ===

// Module 12322 (ContactSyncError)
import noopAll from "noop" /* 19 */;
import _modDef4184 from "module_4184" /* 4184 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { justifyContent: "center" }, error: { paddingHorizontal: 16, textAlign: "center" } });
let closure_5 = { code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}" };
const result = require("set").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  error = error.error;
  let _require;
  const tmp = callback();
  let tmp2 = null != error;
  if (tmp2) {
    tmp2 = "" !== error;
  }
  _require = tmp2;
  let obj = _require(4184);
  const fn = function l() {
    let obj = callback(closure_1_2[4]);
    let num = 0;
    if (callback) {
      num = 44;
    }
    obj = { height: obj.withTiming(num) };
    return obj;
  };
  obj = { withTiming: _require(4445).withTiming, hasError: tmp2, ERROR_HEIGHT: 44 };
  fn.__closure = obj;
  fn.__workletHash = 14558247431913;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: jsx(_require(4440).Text, obj1) };
  items = [tmp.container, error.style, animatedStyle];
  return jsx(_modDef4184.View, { style: items, children: jsx(_require(4440).Text, obj1) });
};