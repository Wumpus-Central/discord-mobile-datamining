import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flexDirection: "row", paddingHorizontal: 16, paddingVertical: 16, alignItems: "center" }, absoluteContainer: { position: "absolute" }, text: { flex: 1 }, button: { marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx");

export default function MediaKeyboardLimitedPickerNotice(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
  const tmp = callback2();
  const items = [onHeightChange];
  const items1 = [tmp.container, ];
  let absoluteContainer;
  const callback = React.useCallback((nativeEvent) => {
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
  const intl = onHeightChange(1236).intl;
  obj[2] = intl.string(onHeightChange(1236).t["5g7NcN"]);
  const items2 = [callback(onHeightChange(4281).Text, obj), ];
  obj = { style: tmp.button, children: null };
  const obj1 = { size: "sm", variant: "tertiary", text: null, onPress: null };
  const intl2 = onHeightChange(1236).intl;
  obj1[2] = intl2.string(onHeightChange(1236).t.JuXTi6);
  obj1[3] = onHeightChange.onPress;
  obj[1] = callback(onHeightChange(4695).Button, obj1);
  items2[1] = callback(View, obj);
  obj[2] = items2;
  return closure_5(View, obj);
};