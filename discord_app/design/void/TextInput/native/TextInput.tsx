// === Module 9045: TextInput/TextInput ===

// Module 9045 (TextInput/TextInput)
import nativeDefault from "native" /* 575 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import shared from "shared" /* 5016 */;
import noop from "module_19" /* 19 */;

require = fn;
class VoidTextInput {
  constructor(arg0) {
    ({ style, ref } = global);
    merged = Object.assign(global, Object.assign({ style: 0, ref: 0 }));
    tmp2 = closure_6();
    tmp3 = closure_0;
    tmp4 = closure_2;
    obj = closure_0(closure_2[6]);
    theme = obj.useThemeContext().theme;
    obj2 = closure_0(closure_2[6]);
    isThemeDarkResult = obj2.isThemeDark(theme);
    unsafe_rawColors = closure_1(closure_2[5]).unsafe_rawColors;
    tmp6 = isThemeDarkResult ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
    obj1 = { ref, style: null, keyboardAppearance: null, placeholderTextColor: null, selectionColor: null };
    items = [, ];
    items[0] = tmp2.input;
    items[1] = style;
    obj1.style = items;
    tmp7 = jsx;
    tmp8 = TextInput;
    tmp3Result = tmp3(tmp4[6]);
    tmp9 = KeyboardThemes;
    obj1.keyboardAppearance = tmp3Result.isThemeDark(theme) ? tmp9.DARK : tmp9.LIGHT;
    obj1.placeholderTextColor = tmp2.placeholderTextColor.color;
    tmp3Result1 = tmp3(tmp4[7]);
    hexWithOpacityResult = tmp6;
    if (tmp3Result1.isAndroid()) {
      tmp3Result2 = tmp3(tmp4[8]);
      num = 0.5;
      hexWithOpacityResult = tmp3Result2.hexWithOpacity(tmp6, 0.5);
    }
    obj1.selectionColor = hexWithOpacityResult;
    merged1 = Object.assign(merged);
    return tmp7(tmp8, obj1);
  }
}
const TextInput = fn(17).TextInput;
const Constants = fn(1072);
({ KeyboardThemes: closure_4, Fonts } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { input: { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT }, placeholderTextColor: null };
let obj3 = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT };
obj2.placeholderTextColor = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
const timestampProducer = createStyles.createStyles(obj2);
VoidTextInput.displayName = "VoidTextInput";
const size = fn(2);
const result = size.fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default VoidTextInput;