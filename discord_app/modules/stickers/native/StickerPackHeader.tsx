// === Module 10528: StickerPackHeader ===

// Module 10528 (StickerPackHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4635 */;
import StickersUtils from "StickersUtils" /* 4978 */;
import Pressables from "Pressables" /* 5207 */;
import _modDef10529 from "module_10529" /* 10529 */;
import _modDef10530 from "module_10530" /* 10530 */;
import StickerPackBannerDefault from "StickerPackBanner" /* 10531 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const StickerPickerConstants = fn(10404);
({ PADDING_VERTICAL, PADDING_HORIZONTAL } = StickerPickerConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
let result = 2 * PADDING_VERTICAL;
const createStyles = fn(4639);
let obj = { section: { paddingTop: PADDING_VERTICAL, paddingHorizontal: PADDING_HORIZONTAL, height: 36 + result, justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, label: { flex: -1 }, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, bannerContainer: { aspectRatio: 3.824074074074074, marginVertical: -8, width: "100%" }, banner: { height: "100%" }, headline: { height: 20, flex: 1, flexDirection: "row", alignItems: "center" }, iconContainer: null, icon: null, animatedIcon: null, premiumIcon: null };
let size = { marginLeft: 8, height: 16, width: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.iconContainer = size;
let obj3 = { paddingTop: PADDING_VERTICAL, paddingHorizontal: PADDING_HORIZONTAL, height: 36 + result, justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.animatedIcon = { position: "relative", left: 1 };
obj.premiumIcon = { position: "relative", left: -1 };
let closure_7 = createStyles.createStyles(obj);
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
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
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.headline, children: null };
  const items = [React4(Text_Text.Text, { style: tmp.label, lineClamp: 1, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stickerPack.name }), , ];
  let result = StickersUtils.isStickerPackAnimated(stickerPack);
  if (result) {
    const obj5 = { style: tmp.iconContainer, children: null };
    const obj6 = { source: _modDef10529, style: tmp.animatedIcon, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color };
    obj5.children = React4(native.Icon, obj6);
    result = React4(View, obj5);
  }
  items[1] = result;
  const obj7 = { style: tmp.iconContainer, children: null };
  const obj3 = { style: tmp.label, lineClamp: 1, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stickerPack.name };
  obj7.children = React4(native.Icon, { source: _modDef10530, style: tmp.premiumIcon, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color });
  items[2] = React4(View, obj7);
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  const items1 = [React4(View, obj), , ];
  if (flag) {
    flag = null != stickerPack.description;
  }
  if (flag) {
    const obj9 = { variant: "text-sm/medium", children: stickerPack.description };
    flag = React4(Text_Text.Text, obj9);
  }
  const obj10 = { children: null };
  items1[1] = flag;
  const obj11 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj11.children = intl.format(util.t["0S3JpO"], { numStickers: stickerPack.stickers.length });
  items1[2] = React4(Text_Text.Text, obj11);
  obj10.children = items1;
  const tmp2Result = hasOwnProperty(timestampProducer, obj10);
  if (withBanner) {
    const obj14 = { stickerPack, containerStyle: null, style: null };
    ({ bannerContainer: obj13.containerStyle, banner: obj13.style } = tmp);
    withBanner = React4(StickerPackBannerDefault, obj14);
  }
  const children = [withBanner, ];
  if (null != onPress) {
    const obj15 = { style: null, onPress: null, accessibilityRole: "header", children: null };
    const items3 = [tmp.section, style];
    obj15.style = items3;
    obj15.onPress = onPress;
    obj15.children = tmp2Result;
    let tmp4Result = React4(Pressables.PressableOpacity, obj15);
  } else {
    const obj28 = { style: null, children: null };
    const items4 = [tmp.section, style];
    obj28.style = items4;
    obj28.children = tmp2Result;
    tmp4Result = React4(View, obj28);
  }
  children[1] = tmp4Result;
  return hasOwnProperty(timestampProducer, { children });
});