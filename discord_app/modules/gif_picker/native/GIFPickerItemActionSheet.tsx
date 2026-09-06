// === Module 10380: GIFPickerItemActionSheet ===

// Module 10380 (GIFPickerItemActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 10366 */;
import GifIcon from "GifIcon" /* 10381 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { contentWrapper: null, gifContainer: null, gifImage: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.contentWrapper = createStyles;
createStyles.gifContainer = { flexDirection: "column", alignItems: "center" };
createStyles.gifImage = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default function GIFPickerItemActionSheet(item) {
  item = item.item;
  let width;
  const tmp = closure_7();
  let obj = item(width[5]);
  let obj1 = item(width[6]);
  const isFavoriteGIF = obj.useIsFavoriteGIF(obj1.gifUrlKey(item.url));
  let size = isFavoriteGIF(width[7])();
  width = size.width;
  const height = size.height;
  const items = [, , , ];
  ({ width: arr[0], height: arr[1] } = item);
  items[2] = width;
  items[3] = height;
  const memo = height.useMemo(() => {
    const bound = Math.min((width - 2 * nativeDefault.space.PX_16) / item.width, 0.5 * height / item.height);
    const size = { width: item.width * bound, height: item.height * bound };
    return size;
  }, items);
  const callback = height.useCallback(() => {
    isFavoriteGIF(width[8]).hideActionSheet();
  }, []);
  const items1 = [callback, isFavoriteGIF, item];
  const callback1 = height.useCallback(() => {
    callback();
    let obj = GIFPickerActionCreators;
    if (isFavoriteGIF) {
      obj.removeFavoriteGIF(item.url);
      obj = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
      const intl2 = util.intl;
      obj.content = intl2.string(util.t.in1rga);
      obj.IconComponent = GifIcon.GifIcon;
      ToastActionCreatorsDefault.open(obj);
    } else {
      obj.addFavoriteGIF(item);
      obj = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
      const intl = util.intl;
      obj.content = intl.string(util.t.okQonm);
      obj.IconComponent = GifIcon.GifIcon;
      ToastActionCreatorsDefault.open(obj);
    }
  }, items1);
  const items2 = [callback, item.url];
  const items3 = [callback1, isFavoriteGIF];
  const callback2 = height.useCallback(() => {
    callback();
    ClipboardUtils.copy(item.url, ToastUtils.presentLinkCopied);
  }, items2);
  const callback3 = height.useCallback(() => {
    let str = "primary";
    if (isFavoriteGIF) {
      str = "destructive";
    }
    const obj = { variant: str, onPress: callback1, text: null, grow: true };
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (isFavoriteGIF) {
      let stringResult = string(t["5/NS74"]);
    } else {
      stringResult = string(t.nIH0v8);
    }
    obj.text = stringResult;
    return hasOwnProperty(components_Button_Button.Button, obj);
  }, items3);
  obj = { startExpanded: true, children: null };
  obj = { style: tmp.contentWrapper, children: null };
  obj1 = { style: tmp.gifContainer, children: null };
  let obj2 = { style: null, source: { uri: item.src } };
  const items4 = [tmp.gifImage, memo];
  obj2.style = items4;
  const items5 = [callback1(isFavoriteGIF(width[16]), obj2), ];
  const obj3 = { children: null };
  const items6 = [callback3(), ];
  let obj4 = { variant: "secondary", onPress: callback2, text: null, grow: true };
  let intl = item(width[10]).intl;
  obj4.text = intl.string(item(width[10]).t.WqhZss);
  items6[1] = callback1(item(width[14]).Button, obj4);
  obj3.children = items6;
  items5[1] = closure_6(item(width[17]).ButtonGroup, obj3);
  obj1.children = items5;
  obj.children = closure_6(callback, obj1);
  obj.children = callback1(callback, obj);
  return callback1(item(width[15]).BottomSheet, obj);
};