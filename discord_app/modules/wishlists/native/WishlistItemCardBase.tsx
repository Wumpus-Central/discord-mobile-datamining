// === Module 9467: WishlistItemCardBase ===

// Module 9467 (WishlistItemCardBase)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import native from "native" /* 5080 */;
import useToken from "useToken" /* 5596 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import LockIcon from "LockIcon" /* 8667 */;
import useUserProfileColors from "useUserProfileColors" /* 8811 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 9285 */;
import useWishlistHooks from "useWishlistHooks" /* 9470 */;
import IndicatorDot from "IndicatorDot" /* 9491 */;
import noop from "module_19" /* 19 */;

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
    children: closure_5(toastText(9468).HeartIcon, { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" })
  };
  return closure_5(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
const createStyles = fn(5014);
let obj = { card: { borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" }, overlayContainer: null, previewWrap: null, dimmedPreview: null, sourceIcon: null, newContentDot: null, lockBadge: null };
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
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(arg0) {
  ({ onPress, size } = arg0);
  ({ accessibilityLabel, renderPreview, source } = arg0);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden, isNew, recipientName } = arg0);
  if (isNew === undefined) {
    isNew = false;
  }
  const tmp = closure_8();
  const themeContext = native.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  const obj2 = useUserProfileColors;
  let containerBackground = useToken.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  if (null != primaryColor) {
    containerBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  }
  const items = [tmp.card, { backgroundColor: containerBackground }, ];
  if (typeof size === "object") {
    const size1 = { width: null, height: null };
    ({ width: obj4.width, height: obj4.height } = size);
    let obj5 = size1;
  } else {
    obj5 = { width: size, aspectRatio: 1 };
  }
  items[2] = obj5;
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.p3RmJF, { username: recipientName });
  const items1 = [accessibilityLabel, , ];
  if (obj8.OWNED === overlay) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["6cfuDj"]);
  } else {
    stringResult = null;
    if (tmp7.LOCKED === overlay) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.wu4gyV);
    }
  }
  let tmp15Result4 = source === useWishlistHooks.WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp10 = null;
  if (tmp15Result4) {
    tmp10 = formatToPlainStringResult;
  }
  items1[2] = tmp10;
  const found = items1.filter(GlobalUtils.isNotNullish);
  const joined = found.join(", ");
  let formatToPlainStringResult1 = joined;
  if (isNew) {
    const intl4 = util.intl;
    const obj6 = { label: joined };
    formatToPlainStringResult1 = intl4.formatToPlainString(util.t.s9RZ1r, obj6);
  }
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp7.OWNED;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React4, { style: items2, "aria-hidden": true, children: renderPreview() }), , , , ];
  let tmp15Result = overlay === tmp7.OWNED;
  if (tmp15Result) {
    obj8 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj9 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    obj8.children = hasOwnProperty(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj9);
    tmp15Result = hasOwnProperty(React4, obj8);
  }
  items3[1] = tmp15Result;
  let tmp15Result3 = overlay === tmp7.LOCKED;
  if (tmp15Result3) {
    const obj10 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj11 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    obj10.children = hasOwnProperty(LockIcon.LockIcon, obj11);
    tmp15Result3 = hasOwnProperty(React4, obj10);
  }
  items3[2] = tmp15Result3;
  if (tmp15Result4) {
    const obj12 = { toastText: formatToPlainStringResult };
    tmp15Result4 = hasOwnProperty(SourceIcon, obj12);
  }
  items3[3] = tmp15Result4;
  if (isNew) {
    const obj13 = { style: tmp.newContentDot, pointerEvents: "none", children: hasOwnProperty(IndicatorDot.IndicatorDot, {}) };
    isNew = hasOwnProperty(React4, obj13);
  }
  items3[4] = isNew;
  const tmp13Result = React5(timestampProducer, { children: items3 });
  if (null == onPress) {
    const obj14 = { style: items, accessible: "" !== formatToPlainStringResult1 || undefined, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    let tmp23;
    if ("" !== formatToPlainStringResult1) {
      tmp23 = formatToPlainStringResult1;
    }
    obj14.accessibilityLabel = tmp23;
    obj14.accessibilityElementsHidden = accessibilityHidden;
    let str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    obj14.importantForAccessibility = str3;
    obj14.children = tmp13Result;
    return hasOwnProperty(React4, obj14);
  } else {
    const obj15 = { accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: null, children: null };
    let str = "auto";
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    obj15.importantForAccessibility = str;
    obj15.children = tmp13Result;
    return hasOwnProperty(React3, obj15);
  }
  const obj7 = { style: items2, "aria-hidden": true, children: renderPreview() };
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj8;