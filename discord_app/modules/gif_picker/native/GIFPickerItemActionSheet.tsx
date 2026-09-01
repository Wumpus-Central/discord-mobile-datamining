// === Module 10372: GIFPickerItemActionSheet ===

// Module 10372 (GIFPickerItemActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { contentWrapper: null, gifContainer: null, gifImage: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "column", alignItems: "center" };
createCacheKey[2] = { borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default function GIFPickerItemActionSheet(item) {
  item = item.item;
  let isFavoriteGIF;
  let width;
  let height;
  let callback;
  let callback1;
  const tmp = callback2();
  let obj = item(width[5]);
  obj1 = item(width[6]);
  isFavoriteGIF = obj.useIsFavoriteGIF(obj1.gifUrlKey(item.url));
  const size = isFavoriteGIF(width[7])();
  width = size.width;
  height = size.height;
  const items = [, , , ];
  ({ width: arr[0], height: arr[1] } = item);
  items[2] = width;
  items[3] = height;
  const memo = height.useMemo(() => {
    const bound = Math.min((width - 2 * isFavoriteGIF(width[4]).space.PX_16) / item.width, 0.5 * height / item.height);
    return { width: item.width * bound, height: item.height * bound };
  }, items);
  callback = height.useCallback(() => {
    isFavoriteGIF(width[8]).hideActionSheet();
  }, []);
  const items1 = [callback, isFavoriteGIF, item];
  callback1 = height.useCallback(() => {
    callback();
    let obj = item(width[6]);
    if (isFavoriteGIF) {
      obj.removeFavoriteGIF(item.url);
      obj = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
      const intl2 = item(width[10]).intl;
      obj[1] = intl2.string(item(width[10]).t.in1rga);
      obj[2] = item(width[11]).GifIcon;
      isFavoriteGIF(width[9]).open(obj);
      const obj4 = isFavoriteGIF(width[9]);
    } else {
      obj.addFavoriteGIF(item);
      obj = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
      const intl = item(width[10]).intl;
      obj[1] = intl.string(item(width[10]).t.okQonm);
      obj[2] = item(width[11]).GifIcon;
      isFavoriteGIF(width[9]).open(obj);
      const obj2 = isFavoriteGIF(width[9]);
    }
  }, items1);
  const items2 = [callback, item.url];
  const items3 = [callback1, isFavoriteGIF];
  callback2 = height.useCallback(() => {
    callback();
    item(width[12]).copy(item.url, item(width[13]).presentLinkCopied);
  }, items2);
  const callback3 = height.useCallback(() => {
    let str = "primary";
    if (isFavoriteGIF) {
      str = "destructive";
    }
    const obj = { variant: str, onPress: callback1, text: null, grow: true };
    const intl = tmp2(tmp3[10]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[10]).t;
    if (isFavoriteGIF) {
      let stringResult = string(t["5/NS74"]);
    } else {
      stringResult = string(t.nIH0v8);
    }
    obj[2] = stringResult;
    return callback1(item(width[14]).Button, obj);
  }, items3);
  obj = { startExpanded: true, children: null };
  obj = { style: tmp.contentWrapper, children: null };
  obj1 = { style: tmp.gifContainer, children: null };
  const items4 = [tmp.gifImage, memo];
  const items5 = [callback1(isFavoriteGIF(width[16]), { style: items4, source: { uri: item.src } }), ];
  const obj3 = { children: null };
  const items6 = [callback3(), ];
  let obj4 = { variant: "secondary", onPress: callback2, text: null, grow: true };
  let intl = item(width[10]).intl;
  obj4[2] = intl.string(item(width[10]).t.WqhZss);
  items6[1] = callback1(item(width[14]).Button, obj4);
  obj3[0] = items6;
  items5[1] = callback(item(width[17]).ButtonGroup, obj3);
  obj1[1] = items5;
  obj[1] = callback(callback, obj1);
  obj[1] = callback1(callback, obj);
  return callback1(item(width[15]).BottomSheet, obj);
};