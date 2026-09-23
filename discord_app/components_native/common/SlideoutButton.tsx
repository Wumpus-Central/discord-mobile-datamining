// discord_app/components_native/common/SlideoutButton.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../design/void/native.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../_runtime/metro/00019__.js";

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
    obj1 = { style: null, children: null };
    items = [,];
    items[0] = tmp.button;
    items[1] = { backgroundColor: color, width: 72, height };
    obj1.style = items;
    obj5 = { color: closure_1(closure_2[6]).colors.WHITE };
    items1 = [,];
    items1[0] = jsx(IconComponent, obj5);
    obj6 = { style: tmp.buttonText, children: title.toUpperCase() };
    items1[1] = jsx(closure_0(closure_2[8]).LegacyText, obj6);
    obj1.children = items1;
    obj.children = jsxs(View, obj1);
    return jsx(closure_0(closure_2[7]).PressableOpacity, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
let obj2 = { button: { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }, buttonText: null };
let obj3 = { color: null, fontSize: 12, fontFamily: null, marginTop: 2, marginHorizontal: 2, textAlign: "center" };
const ColorUtils = fn(4676);
obj3.color = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.6);
obj3.fontFamily = fn(1074).Fonts.PRIMARY_SEMIBOLD;
obj2.buttonText = obj3;
const timestampProducer = createStyles.createStyles(obj2);
SlideoutButton.width = 72;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default SlideoutButton;
