// === Module 11258: SlideoutButton ===

// Module 11258 (SlideoutButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Pressables from "Pressables" /* 5123 */;
import noop from "module_19" /* 19 */;

require = fn;
class SlideoutButton {
  constructor(arg0) {
    ({ title, height } = global);
    ({ onPress, color, IconComponent } = global);
    if (height === undefined) {
      height = 60;
    }
    tmp = closure_6();
    obj = { accessibilityRole: "button", onPress, children: null };
    obj = { style: null, children: null };
    items = [, ];
    items[0] = tmp.button;
    items[1] = { backgroundColor: color, width: 72, height };
    obj.style = items;
    obj1 = { color: closure_1(closure_2[6]).colors.WHITE };
    items1 = [, ];
    items1[0] = jsx(IconComponent, obj1);
    obj2 = { style: tmp.buttonText, children: title.toUpperCase() };
    items1[1] = jsx(closure_0(closure_2[8]).LegacyText, obj2);
    obj.children = items1;
    obj.children = jsxs(View, obj);
    return jsx(closure_0(closure_2[7]).PressableOpacity, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { button: { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }, buttonText: null };
createStyles = { color: null, fontSize: 12, fontFamily: null, marginTop: 2, marginHorizontal: 2, textAlign: "center" };
const ColorUtils = fn(4409);
createStyles.color = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.6);
createStyles.fontFamily = fn(1074).Fonts.PRIMARY_SEMIBOLD;
createStyles.buttonText = createStyles;
const timestampProducer = createStyles.createStyles(createStyles);
SlideoutButton.width = 72;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default SlideoutButton;