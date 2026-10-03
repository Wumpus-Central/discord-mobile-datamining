// === Module 10103: GIFPickerItemView ===

// Module 10103 (GIFPickerItemView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10093 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles((height) => {
  const obj = { container: null, gifImage: null, gifImageSelected: null };
  const size = { paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, paddingHorizontal: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING / 2, borderRadius: nativeDefault.radii.xs, width: "100%", height, flex: 1 };
  obj.container = size;
  obj.gifImage = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 };
  const obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 };
  obj.gifImageSelected = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemView.tsx");

export default function GIFPickerItemView(onPressGIF) {
  onPressGIF = onPressGIF.onPressGIF;
  const item = onPressGIF.item;
  const index = onPressGIF.index;
  const selected = onPressGIF.selected;
  const tmp = closure_6(onPressGIF.height);
  const items = [item, index, onPressGIF];
  const items1 = [item];
  const callback = noop.useCallback(() => {
    onPressGIF(item, index);
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, items);
  const items2 = [index, item.src];
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10104, dependencyMap.paths), "GIFPickerItemActionSheet", { item }, "stack");
    const obj2 = { item };
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, items1);
  const memo = noop.useMemo(() => {
    const parts = item.src.split("/");
    const str2 = parts.pop();
    let first;
    if (str2 != null) {
      first = str2.split(".")[0];
    }
    if (null == first) {
      const intl = util.intl;
      const obj = { index: index + 1 };
      first = intl.formatToPlainString(util.t["5iIGZI"], obj);
    }
    return first;
  }, items2);
  let obj = { style: tmp.container, accessibilityRole: "button", accessibilityLabel: memo, accessibilityState: null, onPress: null, onLongPress: null, children: null };
  let tmp7;
  if (null != selected) {
    let obj2 = { selected };
    tmp7 = obj2;
  }
  obj.accessibilityState = tmp7;
  obj.onPress = callback;
  obj.onLongPress = callback1;
  if (true === selected) {
    const items3 = [, ];
    ({ gifImage: arr4[0], gifImageSelected: arr4[1] } = tmp);
    let gifImage = items3;
  } else {
    gifImage = tmp.gifImage;
  }
  obj.children = jsx(item(index[14]), { style: gifImage, source: { uri: item.src } });
  return jsx(onPressGIF(index[13]).PressableOpacity, { style: tmp.container, accessibilityRole: "button", accessibilityLabel: memo, accessibilityState: null, onPress: null, onLongPress: null, children: null });
};
export const GIFPickerItemPlaceholder = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  const cResult = c.c(5);
  const tmp2 = closure_6(height.height);
  if (cResult[0] !== tmp2.gifImage) {
    const obj2 = { style: tmp2.gifImage };
    const tmp6 = <View style={tmp2.gifImage} />;
    cResult[0] = tmp2.gifImage;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.container) {
    if (cResult[3] === tmp3) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = <View style={tmp2.container}>{tmp3}</View>;
  cResult[2] = tmp2.container;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  const obj3 = { style: tmp2.container, children: tmp3 };
}) : ((height) => {
  const tmp = closure_6(height.height);
  const obj = { style: tmp.container, children: <View style={tmp.gifImage} /> };
  return <View style={tmp.container}><View style={tmp.gifImage} /></View>;
}));