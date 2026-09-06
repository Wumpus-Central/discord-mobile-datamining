// discord_app/modules/contact_sync/native/components/ContactSyncError.tsx
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({
  container: { justifyContent: "center" },
  error: { paddingHorizontal: 16, textAlign: "center" },
});
const __initData = {
  code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  error = error.error;
  _require = undefined;
  const tmp = closure_4();
  let tmp2 = null != error;
  if (tmp2) {
    tmp2 = "" !== error;
  }
  _require = tmp2;
  require("ReanimatedRexport");
  const fn = function l() {
    let obj = timing;
    let num = 0;
    if (closure_0) {
      num = 44;
    }
    obj = { height: obj.withTiming(num) };
    return obj;
  };
  let obj = { withTiming: require("timing").withTiming, hasError: tmp2, ERROR_HEIGHT: 44 };
  fn.__closure = obj;
  fn.__workletHash = 14558247431913;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = {
    style: null,
    children: jsx(require("Text/Text").Text, {
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      style: tmp.error,
      children: error,
    }),
  };
  const items = [tmp.container, error.style, animatedStyle];
  obj.style = items;
  return jsx(ReanimatedRexportDefault.View, {
    style: null,
    children: jsx(require("Text/Text").Text, {
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      style: tmp.error,
      children: error,
    }),
  });
}
