// === Module 10396: StickerPackHeader ===

// Module 10396 (StickerPackHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import StickersUtils from "StickersUtils" /* 4899 */;
import Pressables from "Pressables" /* 5123 */;
import _modDef10397 from "module_10397" /* 10397 */;
import _modDef10398 from "module_10398" /* 10398 */;
import StickerPackBannerDefault from "StickerPackBanner" /* 10399 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const StickerPickerConstants = fn(10273);
({ PADDING_VERTICAL, PADDING_HORIZONTAL } = StickerPickerConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
let result = 2 * PADDING_VERTICAL;
fn(4560);
let obj = { section: null, label: null, header: null, bannerContainer: null, banner: null, headline: null, iconContainer: null, icon: null, animatedIcon: null, premiumIcon: null };
obj = { paddingTop: PADDING_VERTICAL, paddingHorizontal: PADDING_HORIZONTAL, height: 36 + result, justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.section = obj;
obj.label = { flex: -1 };
obj.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.bannerContainer = { aspectRatio: 3.824074074074074, marginVertical: -8, width: "100%" };
obj.banner = { height: "100%" };
obj.headline = { height: 20, flex: 1, flexDirection: "row", alignItems: "center" };
let size = { marginLeft: 8, height: 16, width: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.iconContainer = size;
const createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.icon = createStyles;
obj.animatedIcon = { position: "relative", left: 1 };
obj.premiumIcon = { position: "relative", left: -1 };
let closure_7 = createStyles.createStyles(obj);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/stickers/native/StickerPackHeader.tsx");

export default noop.memo((withDescription) => {
  ({ stickerPack, style, onPress, withBanner } = withDescription);
  if (withBanner === undefined) {
    withBanner = false;
  }
  let flag = withDescription.withDescription;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.headline, children: null };
  obj = { style: tmp.label, lineClamp: 1, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stickerPack.name };
  const items = [React4(Text_Text.Text, obj), , ];
  let obj3 = StickersUtils;
  let result = obj3.isStickerPackAnimated(stickerPack);
  if (result) {
    const obj1 = { style: tmp.iconContainer, children: null };
    const obj2 = { source: _modDef10397, style: tmp.animatedIcon, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color };
    obj1.children = React4(native.Icon, obj2);
    result = React4(View, obj1);
  }
  items[1] = result;
  obj3 = { style: tmp.iconContainer, children: React4(native.Icon, { source: _modDef10398, style: tmp.premiumIcon, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color }) };
  items[2] = React4(View, obj3);
  obj.children = items;
  obj.children = hasOwnProperty(View, obj);
  const items1 = [React4(View, obj), , ];
  if (flag) {
    flag = null != stickerPack.description;
  }
  if (flag) {
    const obj5 = { variant: "text-sm/medium", children: stickerPack.description };
    flag = React4(Text_Text.Text, obj5);
  }
  const obj6 = { children: null };
  items1[1] = flag;
  const obj7 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj7.children = intl.format(util.t["0S3JpO"], { numStickers: stickerPack.stickers.length });
  items1[2] = React4(Text_Text.Text, obj7);
  obj6.children = items1;
  const tmp2Result = hasOwnProperty(timestampProducer, obj6);
  if (withBanner) {
    const obj9 = { stickerPack, containerStyle: null, style: null };
    ({ bannerContainer: obj13.containerStyle, banner: obj13.style } = tmp);
    withBanner = React4(StickerPackBannerDefault, obj9);
  }
  const children = [withBanner, ];
  if (null != onPress) {
    const obj10 = { style: null, onPress: null, accessibilityRole: "header", children: null };
    const items3 = [tmp.section, style];
    obj10.style = items3;
    obj10.onPress = onPress;
    obj10.children = tmp2Result;
    let tmp4Result = React4(Pressables.PressableOpacity, obj10);
  } else {
    const obj11 = { style: null, children: null };
    const items4 = [tmp.section, style];
    obj11.style = items4;
    obj11.children = tmp2Result;
    tmp4Result = React4(View, obj11);
  }
  children[1] = tmp4Result;
  return hasOwnProperty(timestampProducer, { children });
});