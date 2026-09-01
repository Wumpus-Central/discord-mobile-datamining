// discord_app/modules/stickers/native/StickerPackHeader.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import getStickerExtensionFromFormatType from "../StickersUtils.tsx";
import registerAssetDefault from "../../../../_runtime/10389_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/10390_registerAsset.js";
import StickerPackBannerDefault from "StickerPackBanner.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import PADDING_HORIZONTAL from "StickerPickerConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
({ PADDING_VERTICAL, PADDING_HORIZONTAL } = PADDING_HORIZONTAL);
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
let result = 2 * PADDING_VERTICAL;
let obj = {
  section: null,
  label: null,
  header: null,
  bannerContainer: null,
  banner: null,
  headline: null,
  iconContainer: null,
  icon: null,
  animatedIcon: null,
  premiumIcon: null,
};
obj = {
  paddingTop: PADDING_VERTICAL,
  paddingHorizontal: PADDING_HORIZONTAL,
  height: 36 + result,
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj[0] = obj;
obj[1] = { flex: -1 };
obj[2] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj[3] = { aspectRatio: 3.824074074074074, marginVertical: -8, width: "100%" };
obj[4] = { height: "100%" };
obj[5] = { height: 20, flex: 1, flexDirection: "row", alignItems: "center" };
createCacheKey = {
  marginLeft: 8,
  height: 16,
  width: 16,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
obj[6] = createCacheKey;
obj[7] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj[8] = { position: "relative", left: 1 };
obj[9] = { position: "relative", left: -1 };
let closure_7 = createCacheKey.createStyles(obj);
let obj2 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const memoResult = importAllResult.memo((withDescription) => {
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
  obj = {
    style: tmp.label,
    lineClamp: 1,
    variant: "text-md/bold",
    color: "mobile-text-heading-primary",
    children: stickerPack.name,
  };
  const items = [callback(Text.Text, obj), ,];
  let obj3 = getStickerExtensionFromFormatType;
  let result = obj3.isStickerPackAnimated(stickerPack);
  if (result) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.iconContainer;
    const obj2 = { source: null, style: null, size: null, color: null };
    obj2[0] = registerAssetDefault;
    obj2[1] = tmp.animatedIcon;
    obj2[2] = tmp6(1297).Icon.Sizes.EXTRA_SMALL;
    obj2[3] = tmp.icon.color;
    obj1[1] = tmp4(tmp6(1297).Icon, obj2);
    result = tmp4(tmp5, obj1);
  }
  items[1] = result;
  obj3 = {
    style: tmp.iconContainer,
    children: callback(Button.Icon, {
      source: registerAssetDefault2,
      style: tmp.premiumIcon,
      size: Button.Icon.Sizes.EXTRA_SMALL,
      color: tmp.icon.color,
    }),
  };
  items[2] = callback(View, obj3);
  obj[1] = items;
  obj[1] = closure_5(View, obj);
  const items1 = [callback(View, obj), ,];
  if (flag) {
    flag = null != stickerPack.description;
  }
  if (flag) {
    const obj5 = { variant: "text-sm/medium", children: null };
    obj5[1] = stickerPack.description;
    flag = tmp4(tmp6(4474).Text, obj5);
  }
  const obj6 = { children: null };
  items1[1] = flag;
  const obj7 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: null };
  const intl = tmp6(1236).intl;
  obj7[3] = intl.format(getSystemLocale.t["0S3JpO"], { numStickers: stickerPack.stickers.length });
  items1[2] = callback(Text.Text, obj7);
  obj6[0] = items1;
  const tmp2Result = closure_5(closure_6, obj6);
  if (withBanner) {
    const obj9 = { stickerPack: null, containerStyle: null, style: null };
    obj9[0] = stickerPack;
    ({ bannerContainer: obj13[1], banner: obj13[2] } = tmp);
    withBanner = tmp4(StickerPackBannerDefault, obj9);
  }
  const children = [withBanner];
  if (null != onPress) {
    const obj10 = { style: null, onPress: null, accessibilityRole: "header", children: null };
    const items3 = [tmp.section, style];
    obj10[0] = items3;
    obj10[1] = onPress;
    obj10[3] = tmp2Result;
    let tmp4Result = tmp4(tmp6(5068).PressableOpacity, obj10);
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
const result1 = require("set").fileFinishedImporting("modules/stickers/native/StickerPackHeader.tsx");

export default memoResult;
