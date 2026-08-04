// discord_app/modules/contact_sync/native/components/ContactSyncError.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ container: { justifyContent: "center" }, error: { paddingHorizontal: 16, textAlign: "center" } });
let closure_5 = { code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}" };
const result = require("createCacheKey").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  error = error.error;
  let _require;
  const tmp = callback();
  let tmp2 = null != error;
  if (tmp2) {
    tmp2 = "" !== error;
  }
  _require = tmp2;
  let obj = _require(4054);
  const fn = function l() {
    let obj = _undefined(outer1_2[4]);
    let num = 0;
    if (_undefined) {
      num = 44;
    }
    obj = { height: obj.withTiming(num) };
    return obj;
  };
  obj = { withTiming: _require(4194).withTiming, hasError: tmp2, ERROR_HEIGHT: 44 };
  fn.__closure = obj;
  fn.__workletHash = 14558247431913;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.container, error.style, animatedStyle];
  obj[1] = jsx(_require(4189).Text, { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.error, children: error });
  return jsx(importDefault(4054).View, { style: items, children: null });
};