// === Module 13638: ShareFooterLayout ===

// Module 13638 (ShareFooterLayout)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5735 */;
import Text_Text from "Text/Text" /* 5751 */;
import spring_spring from "spring/spring" /* 5761 */;
import springPresets from "springPresets" /* 5762 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { footer: { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, footerSeparator: null, warningWrapper: null, chatRow: null };
let obj3 = { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.footerSeparator = { marginHorizontal: -nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.warningWrapper = { display: "flex", flexDirection: "column", gap: 8 };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.chatRow = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = { code: "(function ShareFooterLayoutTsx1(){let[withSpring,footerPaddingBottom,ON_PRESS_SPRING]=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default function ShareFooterLayout(arg0) {
  ({ preview, warningText } = arg0);
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = closure_7();
  const sum = tmp.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  items = [closure_8, spring_spring.withSpring, sum, springPresets.ON_PRESS_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items;
  class ShareFooterLayoutTsx1 {
    constructor() {
      obj = { paddingBottom: closure_0(closure_1, closure_2, "respect-motion-settings") };
      return obj;
    }
  }
  const items1 = [tmp7, tmp8, tmp9];
  ShareFooterLayoutTsx1.__closure = items1;
  ShareFooterLayoutTsx1.__workletHash = 16457312043220;
  ShareFooterLayoutTsx1.__initData = tmp6;
  const animatedStyle = _mod1652.useAnimatedStyle(ShareFooterLayoutTsx1);
  const obj2 = { style: null, children: null };
  const items2 = [tmp.footer, animatedStyle];
  obj2.style = items2;
  let tmp11Result = null;
  if (null != preview) {
    const obj3 = { children: null };
    const items3 = [preview, ];
    const obj4 = { style: tmp.footerSeparator };
    items3[1] = React4(View, obj4);
    obj3.children = items3;
    tmp11Result = timestampProducer(hasOwnProperty, obj3);
  }
  const items4 = [tmp11Result, ];
  const obj5 = { style: tmp.warningWrapper, children: null };
  const obj6 = { style: tmp.chatRow, children: null };
  const items5 = [chatInput, sendButton];
  obj6.children = items5;
  const items6 = [timestampProducer(View, obj6), ];
  let tmp17 = null != warningText;
  if (tmp17) {
    const obj7 = { variant: "body-sm/normal", color: "text-feedback-warning", children: warningText };
    tmp17 = React4(Text_Text.Text, obj7);
  }
  items6[1] = tmp17;
  obj5.children = items6;
  items4[1] = timestampProducer(View, obj5);
  obj2.children = items4;
  return timestampProducer(_modDef1652.View, obj2);
};