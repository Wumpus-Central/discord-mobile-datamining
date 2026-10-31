// === Module 10552: MediaKeyboardFooter ===

// Module 10552 (MediaKeyboardFooter)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef10553 from "module_10553" /* 10553 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
const obj = { container: { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" }, label: { textAlign: "center", marginBottom: 16 }, buttonWrapper: null, loadingSpinner: null };
let obj3 = { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" };
obj.buttonWrapper = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
let obj4 = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
obj.loadingSpinner = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let obj5 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default noop.memo(function MediaKeyboardFooter(arg0) {
  ({ disabled, onViewAll } = arg0);
  const tmp = closure_7();
  if (obj.useHasReachedEnd()) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "text-sm/normal", style: tmp.label, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.mKSwAW);
    const items = [hasOwnProperty(Text_Text.Text, obj3), , ];
    const obj4 = { style: tmp.buttonWrapper, children: null };
    const obj5 = { variant: "primary", size: "sm", onPress: onViewAll, text: null, disabled: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(util.t.ZT24In);
    obj5.disabled = disabled;
    obj4.children = hasOwnProperty(components_Button_Button.Button, obj5);
    items[1] = hasOwnProperty(React3, obj4);
    const obj6 = { source: _modDef10553 };
    items[2] = hasOwnProperty(FastImageDefault, obj6);
    obj2.children = items;
    let tmp6 = timestampProducer(React3, obj2);
    const tmp2Result = FastImageDefault;
  } else {
    const obj7 = { style: tmp.loadingSpinner, size: "large", color: tmp.loadingSpinner.color };
    tmp6 = hasOwnProperty(React4, obj7);
  }
  return tmp6;
});
export const FOOTER_HEIGHT = 280;