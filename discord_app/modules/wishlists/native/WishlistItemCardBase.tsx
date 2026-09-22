// discord_app/modules/wishlists/native/WishlistItemCardBase.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import useUserProfileColors from "../../user_profile/hooks/native/useUserProfileColors.tsx";
import useWishlistHooks from "../hooks/useWishlistHooks.tsx";
import CheckmarkLargeBoldIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeBoldIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function SourceIcon(toastText) {
  toastText = toastText.toastText;
  const obj = {
    style: closure_8().sourceIcon,
    onPress() {
      ToastActionCreatorsDefault.open({ key: "WISHLIST_SOURCE_ICON", content: toastText });
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: closure_5(toastText(9059).HeartIcon, {
      color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT,
      size: "md",
    }),
  };
  return closure_5(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
const createStyles = fn(4757);
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
  lockBadge: null,
};
const obj4 = {};
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
let obj5 = {};
const merged1 = Object.assign(rect);
obj5.zIndex = 1;
obj.sourceIcon = obj5;
let obj6 = {};
const merged2 = Object.assign(rect);
obj6.zIndex = 2;
obj6.width = 32;
obj6.height = 32;
obj6.borderRadius = nativeDefault.radii.round;
obj6.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
obj6.alignItems = "center";
obj6.justifyContent = "center";
obj.lockBadge = obj6;
let closure_8 = createStyles.createStyles(obj);
let obj7 = { OWNED: "owned", LOCKED: "locked" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(username) {
  ({ onPress, size } = username);
  ({ accessibilityLabel, renderPreview, source } = username);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden } = username);
  const tmp = closure_8();
  const themeContext = native.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  const obj2 = useUserProfileColors;
  let containerBackground = useToken.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  if (null != primaryColor) {
    containerBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  }
  const items = [tmp.card, { backgroundColor: containerBackground }];
  if (typeof size === "object") {
    const size1 = { width: null, height: null };
    ({ width: obj4.width, height: obj4.height } = size);
    let obj5 = size1;
  } else {
    obj5 = { width: size, aspectRatio: 1 };
  }
  items[2] = obj5;
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.p3RmJF, { username: username.recipientName });
  const items1 = [accessibilityLabel, ,];
  if (obj7.OWNED === overlay) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["6cfuDj"]);
  } else {
    stringResult = null;
    if (tmp7.LOCKED === overlay) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.wu4gyV);
    }
  }
  let tmp14Result4 = source === useWishlistHooks.WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp10 = null;
  if (tmp14Result4) {
    tmp10 = formatToPlainStringResult;
  }
  items1[2] = tmp10;
  const found = items1.filter(GlobalUtils.isNotNullish);
  const joined = found.join(", ");
  const items2 = [tmp.previewWrap];
  let dimmedPreview = overlay === tmp7.OWNED;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React4, { style: items2, "aria-hidden": true, children: renderPreview() }), , ,];
  let tmp14Result = overlay === tmp7.OWNED;
  if (tmp14Result) {
    obj7 = {
      style: tmp.overlayContainer,
      pointerEvents: "none",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const obj8 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    obj7.children = hasOwnProperty(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj8);
    tmp14Result = hasOwnProperty(React4, obj7);
  }
  items3[1] = tmp14Result;
  let tmp14Result3 = overlay === tmp7.LOCKED;
  if (tmp14Result3) {
    const obj9 = {
      style: tmp.lockBadge,
      pointerEvents: "none",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const obj10 = {
      color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
      size: "custom",
      style: { width: 18, height: 18 },
    };
    obj9.children = hasOwnProperty(LockIcon.LockIcon, obj10);
    tmp14Result3 = hasOwnProperty(React4, obj9);
  }
  items3[2] = tmp14Result3;
  if (tmp14Result4) {
    const obj11 = { toastText: formatToPlainStringResult };
    tmp14Result4 = hasOwnProperty(SourceIcon, obj11);
  }
  items3[3] = tmp14Result4;
  const tmp12Result = React5(timestampProducer, { children: items3 });
  if (null == onPress) {
    const obj12 = {
      style: items,
      accessible: "" !== joined || undefined,
      accessibilityLabel: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    let tmp22;
    if ("" !== joined) {
      tmp22 = joined;
    }
    obj12.accessibilityLabel = tmp22;
    obj12.accessibilityElementsHidden = accessibilityHidden;
    let str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    obj12.importantForAccessibility = str3;
    obj12.children = tmp12Result;
    return hasOwnProperty(React4, obj12);
  } else {
    const obj13 = {
      accessibilityRole: "button",
      accessibilityLabel: joined,
      style: items,
      onPress,
      accessibilityElementsHidden: accessibilityHidden,
      importantForAccessibility: null,
      children: null,
    };
    let str = "auto";
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    obj13.importantForAccessibility = str;
    obj13.children = tmp12Result;
    return hasOwnProperty(React3, obj13);
  }
  const obj6 = { style: items2, "aria-hidden": true, children: renderPreview() };
}
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj7;
