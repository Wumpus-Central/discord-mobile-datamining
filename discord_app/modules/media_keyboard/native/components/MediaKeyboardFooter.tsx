// === Module 10784: MediaKeyboardFooter ===

// Module 10784 (MediaKeyboardFooter)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4632 */;
import components_Button_Button from "components/Button/Button" /* 5056 */;
import _modDef10785 from "module_10785" /* 10785 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
const obj = { container: { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" }, label: { textAlign: "center", marginBottom: 16 }, buttonWrapper: null, loadingSpinner: null };
let obj3 = { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" };
obj.buttonWrapper = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
let obj4 = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
obj.loadingSpinner = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let obj5 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default noop.memo(function MediaKeyboardFooter(arg0) {
  ({ disabled, onViewAll } = arg0);
  const tmp = closure_8();
  if (obj.useHasReachedEnd()) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "text-sm/normal", style: tmp.label, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.mKSwAW);
    const items = [timestampProducer(Text_Text.Text, obj3), , ];
    const obj4 = { style: tmp.buttonWrapper, children: null };
    const obj5 = { variant: "primary", size: "sm", onPress: onViewAll, text: null, disabled: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(util.t.ZT24In);
    obj5.disabled = disabled;
    obj4.children = timestampProducer(components_Button_Button.Button, obj5);
    items[1] = timestampProducer(React3, obj4);
    const obj6 = { source: _modDef10785 };
    items[2] = timestampProducer(React4, obj6);
    obj2.children = items;
    let tmp6 = React5(React3, obj2);
  } else {
    const obj7 = { style: tmp.loadingSpinner, size: "large", color: tmp.loadingSpinner.color };
    tmp6 = timestampProducer(hasOwnProperty, obj7);
  }
  return tmp6;
});
export const FOOTER_HEIGHT = 280;