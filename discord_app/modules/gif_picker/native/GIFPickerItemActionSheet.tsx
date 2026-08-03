// === Module 9772: GIFPickerItemActionSheet ===

// Module 9772 (GIFPickerItemActionSheet)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "jsxProd";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: null };
let num = 0;
if (set.isAndroid()) {
  num = require("Themes").space.PX_16;
}
createCacheKey = { contentWrapper: createCacheKey, gifContainer: null, gifImage: null, favoriteButtonContainer: null };
createCacheKey[1] = num;
createCacheKey[1] = { flexDirection: "column", alignItems: "center", marginTop: require("Themes").space.PX_8 };
set = { borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[2] = set;
let obj1 = { flexDirection: "column", alignItems: "center", marginTop: require("Themes").space.PX_8 };
createCacheKey[3] = { flex: 1, flexDirection: "row", alignItems: "stretch", width: "100%", marginTop: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default function GIFPickerItemActionSheet(item) {
  item = item.item;
  let isFavoriteGIF;
  let width;
  let height;
  let callback;
  let callback1;
  const tmp = createCacheKey();
  let obj = item(width[6]);
  let obj1 = item(width[7]);
  isFavoriteGIF = obj.useIsFavoriteGIF(obj1.gifUrlKey(item.url));
  const size = isFavoriteGIF(width[8])();
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
    isFavoriteGIF(width[9]).hideActionSheet();
  }, []);
  const items1 = [callback, isFavoriteGIF, item];
  callback1 = height.useCallback(() => {
    callback();
    let obj = item(width[7]);
    if (isFavoriteGIF) {
      obj.removeFavoriteGIF(item.url);
      obj = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
      const intl2 = item(width[11]).intl;
      obj[1] = intl2.string(item(width[11]).t.in1rga);
      obj[2] = item(width[12]).GifIcon;
      isFavoriteGIF(width[10]).open(obj);
      const obj4 = isFavoriteGIF(width[10]);
    } else {
      obj.addFavoriteGIF(item);
      obj = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
      const intl = item(width[11]).intl;
      obj[1] = intl.string(item(width[11]).t.okQonm);
      obj[2] = item(width[12]).GifIcon;
      isFavoriteGIF(width[10]).open(obj);
      const obj2 = isFavoriteGIF(width[10]);
    }
  }, items1);
  const items2 = [callback1, isFavoriteGIF];
  const callback2 = height.useCallback(() => {
    let str = "primary";
    if (isFavoriteGIF) {
      str = "destructive";
    }
    const obj = { variant: str, onPress: callback1, text: null, grow: true };
    const intl = tmp2(tmp3[11]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[11]).t;
    if (isFavoriteGIF) {
      let stringResult = string(t["5/NS74"]);
    } else {
      stringResult = string(t.nIH0v8);
    }
    obj[2] = stringResult;
    return callback1(item(width[13]).Button, obj);
  }, items2);
  obj = { startExpanded: true, children: null };
  obj = { style: tmp.contentWrapper, children: null };
  obj1 = { style: tmp.gifContainer, children: null };
  const items3 = [tmp.gifImage, memo];
  const items4 = [callback1(isFavoriteGIF(width[15]), { style: items3, source: { uri: item.src } }), callback1(callback, { style: tmp.favoriteButtonContainer, children: callback2() })];
  obj1[1] = items4;
  obj[1] = callback(callback, obj1);
  obj[1] = callback1(callback, obj);
  return callback1(item(width[14]).BottomSheet, obj);
};