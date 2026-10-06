// === Module 10116: GIFPickerItemView ===

// Module 10116 (GIFPickerItemView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10106 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((height) => {
  const obj = { container: size, gifImage: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 }, gifImageSelected: { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND } };
  size = { paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, paddingHorizontal: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING / 2, borderRadius: nativeDefault.radii.xs, width: "100%", height, flex: 1 };
  ({ backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 });
  ({ borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND });
  return obj;
});
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = closure_6(height.height);
  if (cResult[0] !== tmp2.gifImage) {
    const tmp6 = <View style={tmp2.gifImage} />;
    cResult[0] = tmp2.gifImage;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.container) {
    let tmp7;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = <View style={tmp2.container}>{tmp3}</View>;
  cResult[2] = tmp2.container;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((height) => {
  const tmp = closure_6(height.height);
  return <View style={tmp.container}>{null}</View>;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemView.tsx");

export default function GIFPickerItemView(onPressGIF) {
  let gifImage;
  onPressGIF = onPressGIF.onPressGIF;
  const item = onPressGIF.item;
  const index = onPressGIF.index;
  const selected = onPressGIF.selected;
  const tmp = closure_6(onPressGIF.height);
  const items = [item, index, onPressGIF];
  const items1 = [item];
  const callback = react.useCallback(() => {
    onPressGIF(item, index);
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
  }, items);
  const items2 = [index, item.src];
  const callback1 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { item };
    obj.openLazy(asyncRequire(10117, dependencyMap.paths), "GIFPickerItemActionSheet", obj2, "stack");
    const obj3 = KeyboardManagerUtils;
    const result = obj3.dismissGlobalKeyboard();
  }, items1);
  const memo = react.useMemo(() => {
    const str = item.src;
    const parts = str.split("/");
    const str2 = parts.pop();
    let first;
    if (str2 != null) {
      first = str2.split(".")[0];
    }
    if (null == first) {
      const intl = intl2.intl;
      const obj = { index: index + 1 };
      first = intl.formatToPlainString(intl2.t["5iIGZI"], obj);
    }
    return first;
  }, items2);
  let tmp7;
  const PressableOpacity = onPressGIF(index[13]).PressableOpacity;
  const tmp6 = index;
  if (null != selected) {
    let obj2 = { selected };
    tmp7 = obj2;
  }
  item(tmp6[14]);
  if (true === selected) {
    const items3 = [, ];
    ({ gifImage: arr4[0], gifImageSelected: arr4[1] } = tmp);
    gifImage = items3;
  } else {
    gifImage = tmp.gifImage;
  }
  let obj3 = { style: gifImage, source: { uri: item.src } };
  return <PressableOpacity style={tmp.container} accessibilityRole="button" accessibilityLabel={memo} accessibilityState={tmp7} onPress={callback} onLongPress={callback1}>{null}</PressableOpacity>;
};
export const GIFPickerItemPlaceholder = memoResult;