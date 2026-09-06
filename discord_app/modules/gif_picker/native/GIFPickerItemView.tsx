// discord_app/modules/gif_picker/native/GIFPickerItemView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import gif_picker_GIFPickerUtils from "GIFPickerUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((height) => {
  let obj = { container: null, gifImage: null, gifImageSelected: null };
  const size = {
    paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING,
    paddingHorizontal: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING / 2,
    borderRadius: nativeDefault.radii.xs,
    width: "100%",
    height,
    flex: 1,
  };
  obj.container = size;
  obj = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, flex: 1 };
  obj.gifImage = obj;
  obj = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.gifImageSelected = obj;
  return obj;
});
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
    const obj = { item };
    obj.openLazy(asyncRequireImpl(10380, dependencyMap.paths), "GIFPickerItemActionSheet", obj, "stack");
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
  let obj = {
    style: tmp.container,
    accessibilityRole: "button",
    accessibilityLabel: memo,
    accessibilityState: null,
    onPress: null,
    onLongPress: null,
    children: null,
  };
  let tmp7;
  if (null != selected) {
    obj = { selected };
    tmp7 = obj;
  }
  obj.accessibilityState = tmp7;
  obj.onPress = callback;
  obj.onLongPress = callback1;
  if (true === selected) {
    const items3 = [,];
    ({ gifImage: arr4[0], gifImageSelected: arr4[1] } = tmp);
    let gifImage = items3;
  } else {
    gifImage = tmp.gifImage;
  }
  obj = { style: gifImage, source: { uri: item.src } };
  obj.children = jsx(item(index[12]), { style: gifImage, source: { uri: item.src } });
  return jsx(onPressGIF(index[11]).PressableOpacity, { style: gifImage, source: { uri: item.src } });
}
export const GIFPickerItemPlaceholder = noop.memo((height) => {
  const tmp = closure_6(height.height);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.gifImage };
  obj.children = <View style={tmp.gifImage} />;
  return <View style={tmp.gifImage} />;
});
