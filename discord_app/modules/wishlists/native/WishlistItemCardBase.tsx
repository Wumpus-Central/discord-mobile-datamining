// === Module 9394: WishlistItemCardBase ===

// Module 9394 (WishlistItemCardBase)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import native from "native" /* 5314 */;
import useToken from "useToken" /* 5839 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import LockIcon from "LockIcon" /* 8027 */;
import useUserProfileColors from "useUserProfileColors" /* 8535 */;
import useWishlistHooks from "useWishlistHooks" /* 9395 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 9416 */;
import IndicatorDot from "IndicatorDot" /* 9418 */;
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
    children: closure_5(toastText(9389).HeartIcon, { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" })
  };
  return closure_5(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
const createStyles = fn(5243);
let obj = { card: { borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" }, overlayContainer: null, previewWrap: null, dimmedPreview: null, sourceIcon: null, newContentDot: null, lockBadge: null };
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
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(backgroundColor) {
  ({ onPress, size } = backgroundColor);
  ({ accessibilityLabel, renderPreview, source } = backgroundColor);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden, isNew, recipientName } = backgroundColor);
  if (isNew === undefined) {
    isNew = false;
  }
  const tmp = closure_8();
  const themeContext = native.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  let containerBackground = useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  const token = useToken.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  let token1 = useToken.useToken(backgroundColor.backgroundColor);
  if (null == primaryColor) {
    if (token1 == null) {
      token1 = token;
    }
    containerBackground = token1;
  }
  items = [tmp.card, { backgroundColor: containerBackground }, ];
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
  const items1 = [accessibilityLabel, , ];
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
  let tmp17Result4 = source === useWishlistHooks.WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp12 = null;
  if (tmp17Result4) {
    tmp12 = formatToPlainStringResult;
  }
  items1[2] = tmp12;
  const found = items1.filter(GlobalUtils.isNotNullish);
  const joined = found.join(", ");
  let formatToPlainStringResult1 = joined;
  if (isNew) {
    const intl4 = util.intl;
    const obj7 = { label: joined };
    formatToPlainStringResult1 = intl4.formatToPlainString(util.t.s9RZ1r, obj7);
  }
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp9.OWNED;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  obj8 = { style: items2, "aria-hidden": true, children: renderPreview() };
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React4, obj8), , , , ];
  let tmp17Result = overlay === tmp9.OWNED;
  if (tmp17Result) {
    const obj9 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj10 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    obj9.children = hasOwnProperty(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj10);
    tmp17Result = hasOwnProperty(React4, obj9);
  }
  items3[1] = tmp17Result;
  let tmp17Result3 = overlay === tmp9.LOCKED;
  if (tmp17Result3) {
    const obj11 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj12 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    obj11.children = hasOwnProperty(LockIcon.LockIcon, obj12);
    tmp17Result3 = hasOwnProperty(React4, obj11);
  }
  items3[2] = tmp17Result3;
  if (tmp17Result4) {
    const obj13 = { toastText: formatToPlainStringResult };
    tmp17Result4 = hasOwnProperty(SourceIcon, obj13);
  }
  items3[3] = tmp17Result4;
  if (isNew) {
    const obj14 = { style: tmp.newContentDot, pointerEvents: "none", children: hasOwnProperty(IndicatorDot.IndicatorDot, {}) };
    isNew = hasOwnProperty(React4, obj14);
  }
  items3[4] = isNew;
  const tmp15Result = metroImportDefault(timestampProducer, { children: items3 });
  if (null == onPress) {
    const obj15 = { style: items, accessible: "" !== formatToPlainStringResult1 || undefined, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    let tmp25;
    if ("" !== formatToPlainStringResult1) {
      tmp25 = formatToPlainStringResult1;
    }
    obj15.accessibilityLabel = tmp25;
    obj15.accessibilityElementsHidden = accessibilityHidden;
    let str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    obj15.importantForAccessibility = str3;
    obj15.children = tmp15Result;
    return hasOwnProperty(React4, obj15);
  } else {
    const obj16 = { accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: null, children: null };
    let str = "auto";
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    obj16.importantForAccessibility = str;
    obj16.children = tmp15Result;
    return hasOwnProperty(React3, obj16);
  }
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj8;