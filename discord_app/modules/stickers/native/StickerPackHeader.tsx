// === Module 9641: ? ===

// Module 9641
import { View } from "get ActivityIndicator";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let PADDING_HORIZONTAL;
let PADDING_VERTICAL;
let c4;
let c5;
let closure_6;
const require = arg1;
({ PADDING_VERTICAL, PADDING_HORIZONTAL } = PADDING_HORIZONTAL);
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
let result = 2 * PADDING_VERTICAL;
let obj = { section: null, label: null, header: null, bannerContainer: null, banner: null, headline: null, iconContainer: null, icon: null, animatedIcon: null, premiumIcon: null };
obj = { paddingTop: PADDING_VERTICAL, paddingHorizontal: PADDING_HORIZONTAL, height: 36 + result, justifyContent: "center", overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
obj[1] = { flex: -1 };
obj[2] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj[3] = { aspectRatio: 3.824074074074074, marginVertical: -8, width: "100%" };
obj[4] = { height: "100%" };
obj[5] = { height: 20, flex: 1, flexDirection: "row", alignItems: "center" };
createCacheKey = { marginLeft: 8, height: 16, width: 16, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BORDER_SUBTLE, alignItems: "center", justifyContent: "center" };
obj[6] = createCacheKey;
obj[7] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
obj[8] = { position: "relative", left: 1 };
obj[9] = { position: "relative", left: -1 };
let closure_7 = createCacheKey.createStyles(obj);
let obj2 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const memoResult = importAllResult.memo((withDescription) => {
  let onPress;
  let stickerPack;
  let style;
  let withBanner;
  ({ stickerPack, style, onPress, withBanner } = withDescription);
  if (withBanner === undefined) {
    withBanner = false;
  }
  let flag = withDescription.withDescription;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.headline, children: null };
  obj = { style: tmp.label, lineClamp: 1, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stickerPack.name };
  const items = [callback(require(4189) /* Text */.Text, obj), , ];
  let obj3 = require(4528) /* getStickerExtensionFromFormatType */;
  let result = obj3.isStickerPackAnimated(stickerPack);
  if (result) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.iconContainer;
    const obj2 = { source: null, style: null, size: null, color: null };
    obj2[0] = importDefault(9642);
    obj2[1] = tmp.animatedIcon;
    obj2[2] = tmp6(1297).Icon.Sizes.EXTRA_SMALL;
    obj2[3] = tmp.icon.color;
    obj1[1] = tmp4(tmp6(1297).Icon, obj2);
    result = tmp4(tmp5, obj1);
  }
  items[1] = result;
  obj3 = { style: tmp.iconContainer, children: null };
  const obj4 = { source: null, style: null, size: null, color: null };
  obj4[0] = importDefault(9643);
  obj4[1] = tmp.premiumIcon;
  obj4[2] = require(1297) /* Button */.Icon.Sizes.EXTRA_SMALL;
  obj4[3] = tmp.icon.color;
  obj3[1] = callback(require(1297) /* Button */.Icon, obj4);
  items[2] = callback(View, obj3);
  obj[1] = items;
  obj[1] = closure_5(View, obj);
  const items1 = [callback(View, obj), , ];
  if (flag) {
    flag = null != stickerPack.description;
  }
  if (flag) {
    const obj5 = { variant: "text-sm/medium", children: null };
    obj5[1] = stickerPack.description;
    flag = tmp4(tmp6(4189).Text, obj5);
  }
  const obj6 = { children: null };
  items1[1] = flag;
  const obj7 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: null };
  const intl = tmp6(1236).intl;
  obj7[3] = intl.format(require(1236) /* getSystemLocale */.t["0S3JpO"], { numStickers: stickerPack.stickers.length });
  items1[2] = callback(require(4189) /* Text */.Text, obj7);
  obj6[0] = items1;
  const tmp2Result = closure_5(closure_6, obj6);
  if (withBanner) {
    const obj9 = { stickerPack: null, containerStyle: null, style: null };
    obj9[0] = stickerPack;
    ({ bannerContainer: obj13[1], banner: obj13[2] } = tmp);
    withBanner = tmp4(importDefault(9644), obj9);
  }
  const children = [withBanner, ];
  if (null != onPress) {
    const obj10 = { style: null, onPress: null, accessibilityRole: "header", children: null };
    const items3 = [tmp.section, style];
    obj10[0] = items3;
    obj10[1] = onPress;
    obj10[3] = tmp2Result;
    let tmp4Result = tmp4(tmp6(4721).PressableOpacity, obj10);
  } else {
    const obj11 = { style: null, children: null };
    const items4 = [tmp.section, style];
    obj11[0] = items4;
    obj11[1] = tmp2Result;
    tmp4Result = tmp4(tmp5, obj11);
  }
  children[1] = tmp4Result;
  return closure_5(closure_6, { children });
});
const result1 = require("PADDING_HORIZONTAL").fileFinishedImporting("modules/stickers/native/StickerPackHeader.tsx");

export default memoResult;