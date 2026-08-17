// discord_app/modules/share/native/ShareFooterLayout.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4115 from "../../reanimated/ReanimatedRexport.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { CONFIG_NEVER_ANIMATE } from "../../../design/animation/reanimated/spring/spring.tsx";
import { SUBTLE_SPRING } from "../../../design/animation/reanimated/spring/springPresets.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { footer: null, footerSeparator: null, warningWrapper: null, chatRow: null };
createCacheKey = { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginHorizontal: -ThemesDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[2] = { display: "flex", flexDirection: "column", gap: 8 };
let obj1 = { marginHorizontal: -ThemesDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[3] = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_12, alignItems: "flex-end" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function ShareFooterLayoutTsx1(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};}" };
let obj2 = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_12, alignItems: "flex-end" };
const result = require("set").fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default function ShareFooterLayout(arg0) {
  ({ preview, warningText } = arg0);
  let _require;
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = callback2();
  const sum = tmp.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  _require = sum;
  let obj = _ReanimatedRexport;
  const fn = function f() {
    const obj = { paddingBottom: _undefined(closure_1_2[7]).withSpring(_undefined, _undefined(closure_1_2[8]).ON_PRESS_SPRING, "respect-motion-settings") };
    return obj;
  };
  obj = { withSpring: _CONFIG_NEVER_ANIMATE.withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: _SUBTLE_SPRING.ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 2871405301293;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.footer, animatedStyle];
  let tmp6Result = null;
  if (null != preview) {
    obj1 = { children: null };
    const items1 = [preview, ];
    const obj2 = { style: null };
    obj2[0] = tmp.footerSeparator;
    items1[1] = callback(View, obj2);
    obj1[0] = items1;
    tmp6Result = tmp6(closure_5, obj1);
  }
  const items2 = [tmp6Result, ];
  const obj3 = { style: tmp.warningWrapper, children: null };
  const items3 = [chatInput, sendButton];
  const items4 = [closure_6(View, { style: tmp.chatRow, children: items3 }), ];
  let tmp12 = null != warningText;
  if (tmp12) {
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
    obj5[2] = warningText;
    tmp12 = callback(_Text.Text, obj5);
  }
  items4[1] = tmp12;
  obj3[1] = items4;
  items2[1] = closure_6(View, obj3);
  obj[1] = items2;
  return closure_6(_modDef4115.View, obj);
};