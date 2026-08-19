// discord_app/modules/contact_sync/native/components/ContactSyncError.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import _modDef4115 from "../../../reanimated/ReanimatedRexport.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

const require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { justifyContent: "center" }, error: { paddingHorizontal: 16, textAlign: "center" } });
let closure_5 = { code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}" };
const result = require("obj132").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  error = error.error;
  let _require;
  const tmp = callback();
  let tmp2 = null != error;
  if (tmp2) {
    tmp2 = "" !== error;
  }
  _require = tmp2;
  ReanimatedRexport;
  const fn = function l() {
    let obj = callback(dependencyMap[4]);
    let num = 0;
    if (callback) {
      num = 44;
    }
    obj = { height: obj.withTiming(num) };
    return obj;
  };
  let obj = { withTiming: require("../../../../design/animation/reanimated/timing/timing.tsx").withTiming, hasError: tmp2, ERROR_HEIGHT: 44 };
  fn.__closure = obj;
  fn.__workletHash = 14558247431913;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: jsx(require("../../../../design/components/Text/native/Text.tsx").Text, obj1) };
  items = [tmp.container, error.style, animatedStyle];
  return jsx(_modDef4115.View, { style: items, children: jsx(require("../../../../design/components/Text/native/Text.tsx").Text, obj1) });
};