// === Module 10655: MediaKeyboardFooter ===

// Module 10655 (MediaKeyboardFooter)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import DeviceMediaDefault from "DeviceMedia" /* 10644 */;
import _modDef10656 from "module_10656" /* 10656 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let obj = { container: null, label: null, buttonWrapper: null, loadingSpinner: null };
obj = { padding: nativeDefault.space.PX_16, height: 280, alignItems: "center" };
obj.container = obj;
obj.label = { textAlign: "center", marginBottom: 16 };
const createStyles = { marginBottom: nativeDefault.space.PX_32, height: nativeDefault.space.PX_48 };
obj.buttonWrapper = createStyles;
obj.loadingSpinner = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let obj2 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, margin: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default noop.memo(function MediaKeyboardFooter(arg0) {
  ({ disabled, onViewAll } = arg0);
  const tmp = closure_8();
  let obj = DeviceMediaDefault;
  if (obj.useHasReachedEnd()) {
    obj = { style: tmp.container, children: null };
    obj = { variant: "text-sm/normal", style: tmp.label, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.mKSwAW);
    const items = [timestampProducer(Text_Text.Text, obj), , ];
    const obj1 = { style: tmp.buttonWrapper, children: null };
    const obj2 = { variant: "primary", size: "sm", onPress: onViewAll, text: null, disabled: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(util.t.ZT24In);
    obj2.disabled = disabled;
    obj1.children = timestampProducer(components_Button_Button.Button, obj2);
    items[1] = timestampProducer(React3, obj1);
    const obj3 = { source: _modDef10656 };
    items[2] = timestampProducer(React4, obj3);
    obj.children = items;
    let tmp6 = React5(React3, obj);
  } else {
    const obj4 = { style: tmp.loadingSpinner, size: "large", color: tmp.loadingSpinner.color };
    tmp6 = timestampProducer(hasOwnProperty, obj4);
  }
  return tmp6;
});
export const FOOTER_HEIGHT = 280;