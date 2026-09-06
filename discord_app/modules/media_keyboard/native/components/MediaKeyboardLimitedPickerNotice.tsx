// === Module 10657: MediaKeyboardLimitedPickerNotice ===

// Module 10657 (MediaKeyboardLimitedPickerNotice)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
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
  let obj = { style: items1, onLayout: callback, children: null };
  items1[1] = absoluteContainer;
  obj = { style: tmp.text, variant: "text-sm/normal", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["5g7NcN"]);
  const items2 = [React4(Text_Text.Text, obj), ];
  obj = { style: tmp.button, children: null };
  const obj1 = { size: "sm", variant: "tertiary", text: null, onPress: null };
  const intl2 = util.intl;
  obj1.text = intl2.string(util.t.JuXTi6);
  obj1.onPress = onHeightChange.onPress;
  obj.children = React4(components_Button_Button.Button, obj1);
  items2[1] = React4(View, obj);
  obj.children = items2;
  return hasOwnProperty(View, obj);
};