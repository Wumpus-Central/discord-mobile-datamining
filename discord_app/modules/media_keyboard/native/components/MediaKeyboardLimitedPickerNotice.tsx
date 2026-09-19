// === Module 10916: MediaKeyboardLimitedPickerNotice ===

// Module 10916 (MediaKeyboardLimitedPickerNotice)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "row", paddingHorizontal: 16, paddingVertical: 16, alignItems: "center" }, absoluteContainer: { position: "absolute" }, text: { flex: 1 }, button: { marginLeft: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx");

export default function MediaKeyboardLimitedPickerNotice(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
  const tmp = closure_6();
  const items = [onHeightChange];
  const items1 = [tmp.container, ];
  let absoluteContainer;
  const callback = noop.useCallback((nativeEvent) => {
    if (onHeightChange != null) {
      tmp(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  if (null != onHeightChange) {
    absoluteContainer = tmp.absoluteContainer;
  }
  const obj = { style: items1, onLayout: callback, children: null };
  items1[1] = absoluteContainer;
  const obj2 = { style: tmp.text, variant: "text-sm/normal", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["5g7NcN"]);
  const items2 = [React4(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.button, children: null };
  const obj4 = { size: "sm", variant: "tertiary", text: null, onPress: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.JuXTi6);
  obj4.onPress = onHeightChange.onPress;
  obj3.children = React4(components_Button_Button.Button, obj4);
  items2[1] = React4(View, obj3);
  obj.children = items2;
  return hasOwnProperty(View, obj);
};