import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { footer: null, footerSeparator: null, warningWrapper: null, chatRow: null };
createCacheKey = { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, gap: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginHorizontal: -require("Themes").space.PX_16, borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[2] = { display: "flex", flexDirection: "column", gap: 8 };
let obj1 = { marginHorizontal: -require("Themes").space.PX_16, borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[3] = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_12, alignItems: "flex-end" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function ShareFooterLayoutTsx1(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};}" };
let obj2 = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_12, alignItems: "flex-end" };
const result = require("jsxProd").fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default function ShareFooterLayout(arg0) {
  let avoidKeyboard;
  let chatInput;
  let preview;
  let sendButton;
  let warningText;
  ({ preview, warningText } = arg0);
  let _require;
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = createCacheKey();
  const sum = tmp.footer.paddingVertical + importDefault(5219)({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  _require = sum;
  let obj = _require(4054);
  const fn = function f() {
    const obj = { paddingBottom: null };
    obj[0] = _undefined(outer1_2[7]).withSpring(_undefined, _undefined(outer1_2[8]).ON_PRESS_SPRING, "respect-motion-settings");
    return obj;
  };
  obj = { withSpring: _require(4603).withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: _require(4607).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 2871405301293;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.footer, animatedStyle];
  let tmp6Result = null;
  if (null != preview) {
    const obj1 = { children: null };
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
    tmp12 = callback(_require(4189).Text, obj5);
  }
  items4[1] = tmp12;
  obj3[1] = items4;
  items2[1] = closure_6(View, obj3);
  obj[1] = items2;
  return closure_6(importDefault(4054).View, obj);
};