// discord_app/modules/contact_sync/native/components/ContactSyncError.tsx
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1655 = _mod1655;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_4 = createStyles.createStyles({
  container: { justifyContent: "center" },
  error: { paddingHorizontal: 16, textAlign: "center" },
});
let closure_5 = {
  code: "(function ContactSyncErrorTsx1(){let[withTiming,hasError,ERROR_HEIGHT]=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  error = error.error;
  const tmp = closure_4();
  items = [closure_5, timing_timing.withTiming, ,];
  let tmp4 = null != error;
  if (tmp4) {
    tmp4 = "" !== error;
  }
  items[2] = tmp4;
  items[3] = 44;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class ContactSyncErrorTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = closure_2;
      }
      obj = { height: tmp(num) };
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  ContactSyncErrorTsx1.__closure = items1;
  ContactSyncErrorTsx1.__workletHash = 13817117600464;
  ContactSyncErrorTsx1.__initData = tmp5;
  const animatedStyle = _mod1655.useAnimatedStyle(ContactSyncErrorTsx1);
  const obj2 = {
    style: null,
    children: jsx(Text_Text.Text, {
      variant: "body-sm/medium",
      color: "text-feedback-critical",
      style: tmp.error,
      children: error,
    }),
  };
  const items2 = [tmp.container, error.style, animatedStyle];
  obj2.style = items2;
  return jsx(_modDef1655.View, {
    style: null,
    children: jsx(Text_Text.Text, {
      variant: "body-sm/medium",
      color: "text-feedback-critical",
      style: tmp.error,
      children: error,
    }),
  });
}
