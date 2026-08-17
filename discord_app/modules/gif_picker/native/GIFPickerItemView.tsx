// discord_app/modules/gif_picker/native/GIFPickerItemView.tsx
import ThemesDefault from "Themes" /* 712 */;
import transformFavoriteGifUrl from "transformFavoriteGifUrl" /* 10198 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles((height) => {
  let obj = { container: null, gifImage: null, gifImageSelected: null };
  obj = { paddingBottom: transformFavoriteGifUrl.GIF_PICKER_GUTTER_SPACING, paddingHorizontal: transformFavoriteGifUrl.GIF_PICKER_GUTTER_SPACING / 2, borderRadius: ThemesDefault.radii.xs, width: "100%", height, flex: 1 };
  obj[0] = obj;
  obj = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.xs, flex: 1 };
  obj[1] = obj;
  obj[2] = { borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
  return obj;
});
const memoResult = importAllResult.memo((height) => {
  const tmp = callback(height.height);
  obj = { style: tmp.container, children: <View {...obj} /> };
  obj = { style: tmp.gifImage };
  return <View style={tmp.gifImage} />;
});
let result = require("set").fileFinishedImporting("modules/gif_picker/native/GIFPickerItemView.tsx");

export default function GIFPickerItemView(onPressGIF) {
  onPressGIF = onPressGIF.onPressGIF;
  const item = onPressGIF.item;
  const index = onPressGIF.index;
  const selected = onPressGIF.selected;
  const tmp = callback(onPressGIF.height);
  const items = [item, index, onPressGIF];
  const items1 = [item];
  callback = importAllResult.useCallback(() => {
    onPressGIF(item, index);
    const result = onPressGIF(index[6]).dismissGlobalKeyboard();
  }, items);
  const items2 = [index, item.src];
  const callback1 = importAllResult.useCallback(() => {
    let obj = item(index[7]);
    obj = { item };
    obj.openLazy(onPressGIF(index[9])(index[8], index.paths), "GIFPickerItemActionSheet", obj, "stack");
    const result = onPressGIF(index[6]).dismissGlobalKeyboard();
  }, items1);
  const memo = importAllResult.useMemo(() => {
    const parts = item.src.split("/");
    const str2 = parts.pop();
    let first;
    if (str2 != null) {
      first = str2.split(".")[0];
    }
    if (null == first) {
      const intl = onPressGIF(index[10]).intl;
      const obj = { index: null };
      obj[0] = index + 1;
      first = intl.formatToPlainString(onPressGIF(index[10]).t["5iIGZI"], obj);
    }
    return first;
  }, items2);
  let obj = { style: tmp.container, accessibilityRole: "button", accessibilityLabel: memo, accessibilityState: null, onPress: null, onLongPress: null, children: null };
  let tmp7;
  if (null != selected) {
    obj = { selected: null };
    obj[0] = selected;
    tmp7 = obj;
  }
  obj[3] = tmp7;
  obj[4] = callback;
  obj[5] = callback1;
  if (true === selected) {
    const items3 = [, ];
    ({ gifImage: arr4[0], gifImageSelected: arr4[1] } = tmp);
    let gifImage = items3;
  } else {
    gifImage = tmp.gifImage;
  }
  obj = { uri: item.src };
  obj[6] = jsx(item(index[12]), { style: gifImage, source: obj });
  return jsx(onPressGIF(index[11]).PressableOpacity, { uri: item.src });
};
export const GIFPickerItemPlaceholder = memoResult;