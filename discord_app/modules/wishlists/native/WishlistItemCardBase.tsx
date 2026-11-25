// discord_app/modules/wishlists/native/WishlistItemCardBase.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import CheckmarkLargeBoldIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeBoldIcon.tsx";
import IndicatorDot from "../../../design/components/IndicatorDot/native/IndicatorDot.native.tsx";
import useUserProfileColors from "../../user_profile/hooks/native/useUserProfileColors.tsx";
import useWishlistHooks from "../hooks/useWishlistHooks.tsx";
import WishlistShopUnpublishUtils from "../WishlistShopUnpublishUtils.tsx";
import WishlistShopUnpublishLabelDefault from "WishlistShopUnpublishLabel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function SourceIcon(toastText) {
  toastText = toastText.toastText;
  const obj = {
    style: closure_8().sourceIcon,
    onPress() {
      ToastActionCreatorsDefault.open("WISHLIST_SOURCE_ICON", { text: toastText });
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: closure_5(toastText(9746).HeartIcon, {
      color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT,
      size: "md",
    }),
  };
  return closure_5(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
const createStyles = fn(5012);
let obj = {
  card: {
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  overlayContainer: null,
  previewWrap: null,
  dimmedPreview: null,
  sourceIcon: null,
  newContentDot: null,
  lockBadge: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj4.zIndex = 2;
obj4.shadowOpacity = 0.5;
obj4.shadowRadius = 6;
obj4.elevation = 6;
obj.overlayContainer = obj4;
obj.previewWrap = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" };
obj.dimmedPreview = { opacity: 0.5 };
const obj5 = {};
const merged1 = Object.assign(rect);
obj5.zIndex = 1;
obj.sourceIcon = obj5;
let obj6 = {};
const merged2 = Object.assign(rect);
obj6.zIndex = 2;
obj.newContentDot = obj6;
let obj7 = {};
const merged3 = Object.assign(rect);
obj7.zIndex = 2;
obj7.width = 32;
obj7.height = 32;
obj7.borderRadius = nativeDefault.radii.round;
obj7.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj.lockBadge = obj7;
let closure_8 = createStyles.createStyles(obj);
let obj8 = { OWNED: "owned", LOCKED: "locked" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(shopUnpublishCountdown) {
  ({ onPress, size } = shopUnpublishCountdown);
  ({ accessibilityLabel, renderPreview, source } = shopUnpublishCountdown);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden, isNew, recipientName } = shopUnpublishCountdown);
  if (isNew === undefined) {
    isNew = false;
  }
  shopUnpublishCountdown = shopUnpublishCountdown.shopUnpublishCountdown;
  const tmp = closure_8();
  const themeContext = native.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  let containerBackground = useUserProfileColors.useUserProfileColors({
    theme,
    primaryColor,
    secondaryColor,
  }).containerBackground;
  const token = useToken.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  let token1 = useToken.useToken(shopUnpublishCountdown.backgroundColor);
  if (null == primaryColor) {
    if (token1 == null) {
      token1 = token;
    }
    containerBackground = token1;
  }
  items = [tmp.card, { backgroundColor: containerBackground }];
  if (typeof size === "object") {
    const size1 = { width: null, height: null };
    ({ width: obj5.width, height: obj5.height } = size);
    let obj6 = size1;
  } else {
    obj6 = { width: size, aspectRatio: 1 };
  }
  items[2] = obj6;
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.p3RmJF, { username: recipientName });
  const items1 = [accessibilityLabel, , ,];
  if (obj8.OWNED === overlay) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["6cfuDj"]);
  } else {
    stringResult = null;
    if (tmp9.LOCKED === overlay) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.wu4gyV);
    }
  }
  let tmp18Result6 = source === useWishlistHooks.WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp12 = null;
  if (tmp18Result6) {
    tmp12 = formatToPlainStringResult;
  }
  items1[2] = tmp12;
  let result = null;
  if (null != shopUnpublishCountdown) {
    result = WishlistShopUnpublishUtils.formatWishlistShopUnpublishLabel(shopUnpublishCountdown, "expanded");
    const tmp2Result = WishlistShopUnpublishUtils;
  }
  items1[3] = result;
  const found = items1.filter(GlobalUtils.isNotNullish);
  const joined = found.join(", ");
  let formatToPlainStringResult1 = joined;
  if (isNew) {
    const intl4 = util.intl;
    const obj7 = { label: joined };
    formatToPlainStringResult1 = intl4.formatToPlainString(util.t.s9RZ1r, obj7);
  }
  const items2 = [tmp.previewWrap];
  let dimmedPreview = overlay === tmp9.OWNED;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  obj8 = { style: items2, "aria-hidden": true, children: renderPreview() };
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React4, obj8), , , , ,];
  let tmp18Result = null != shopUnpublishCountdown;
  if (tmp18Result) {
    const obj9 = { countdown: shopUnpublishCountdown };
    tmp18Result = hasOwnProperty(WishlistShopUnpublishLabelDefault, obj9);
  }
  items3[1] = tmp18Result;
  let tmp18Result4 = overlay === tmp9.OWNED;
  if (tmp18Result4) {
    const obj10 = {
      style: tmp.overlayContainer,
      pointerEvents: "none",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const obj11 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    obj10.children = hasOwnProperty(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj11);
    tmp18Result4 = hasOwnProperty(React4, obj10);
  }
  items3[2] = tmp18Result4;
  let tmp18Result5 = overlay === tmp9.LOCKED;
  if (tmp18Result5) {
    const obj12 = {
      style: tmp.lockBadge,
      pointerEvents: "none",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const obj13 = {
      color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
      size: "custom",
      style: { width: 18, height: 18 },
    };
    obj12.children = hasOwnProperty(LockIcon.LockIcon, obj13);
    tmp18Result5 = hasOwnProperty(React4, obj12);
  }
  items3[3] = tmp18Result5;
  if (tmp18Result6) {
    const obj14 = { toastText: formatToPlainStringResult };
    tmp18Result6 = hasOwnProperty(SourceIcon, obj14);
  }
  items3[4] = tmp18Result6;
  if (isNew) {
    const obj15 = {
      style: tmp.newContentDot,
      pointerEvents: "none",
      children: hasOwnProperty(IndicatorDot.IndicatorDot, {}),
    };
    isNew = hasOwnProperty(React4, obj15);
  }
  items3[5] = isNew;
  const tmp16Result = metroImportDefault(timestampProducer, { children: items3 });
  if (null == onPress) {
    const obj16 = {
      style: items,
      accessible: "" !== formatToPlainStringResult1 || undefined,
      accessibilityLabel: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    let tmp27;
    if ("" !== formatToPlainStringResult1) {
      tmp27 = formatToPlainStringResult1;
    }
    obj16.accessibilityLabel = tmp27;
    obj16.accessibilityElementsHidden = accessibilityHidden;
    let str4 = "auto";
    if (accessibilityHidden) {
      str4 = "no-hide-descendants";
    }
    obj16.importantForAccessibility = str4;
    obj16.children = tmp16Result;
    return hasOwnProperty(React4, obj16);
  } else {
    const obj17 = {
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainStringResult1,
      style: items,
      onPress,
      accessibilityElementsHidden: accessibilityHidden,
      importantForAccessibility: null,
      children: null,
    };
    let str2 = "auto";
    if (accessibilityHidden) {
      str2 = "no-hide-descendants";
    }
    obj17.importantForAccessibility = str2;
    obj17.children = tmp16Result;
    return hasOwnProperty(React3, obj17);
  }
}
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj8;
