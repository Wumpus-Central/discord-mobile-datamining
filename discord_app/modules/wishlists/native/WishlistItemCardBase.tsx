// === Module 8773: WishlistItemCardBase ===

// Module 8773 (WishlistItemCardBase)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import useToken from "useToken" /* 4262 */;
import native from "native" /* 4271 */;
import useUserProfileColors from "useUserProfileColors" /* 8238 */;
import noop from "module_19" /* 19 */;

require = fn;
function SourceIcon(toastText) {
  toastText = toastText.toastText;
  let obj = {
    style: closure_8().sourceIcon,
    onPress() {
      const obj = { key: "WISHLIST_SOURCE_ICON", content: toastText };
      obj.open(obj);
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null
  };
  obj = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
  obj.children = closure_5(toastText(8774).HeartIcon, obj);
  return closure_5(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
fn(4560);
let obj = { card: null, overlayContainer: null, previewWrap: null, dimmedPreview: null, sourceIcon: null, lockBadge: null };
obj = { borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj.card = obj;
const createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.justifyContent = "center";
createStyles.alignItems = "center";
createStyles.zIndex = 2;
createStyles.shadowOpacity = 0.5;
createStyles.shadowRadius = 6;
createStyles.elevation = 6;
obj.overlayContainer = createStyles;
obj.previewWrap = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" };
obj.dimmedPreview = { opacity: 0.5 };
let obj2 = {};
const merged1 = Object.assign(rect);
obj2.zIndex = 1;
obj.sourceIcon = obj2;
let obj3 = {};
const merged2 = Object.assign(rect);
obj3.zIndex = 2;
obj3.width = 32;
obj3.height = 32;
obj3.borderRadius = nativeDefault.radii.round;
obj3.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj.lockBadge = obj3;
let closure_8 = createStyles.createStyles(obj);
let obj4 = { OWNED: "owned", LOCKED: "locked" };
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
  let obj = native;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  let obj1 = useUserProfileColors;
  let obj2 = useToken;
  let containerBackground = obj2.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  if (null != primaryColor) {
    containerBackground = obj1.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  }
  const items = [tmp.card, { backgroundColor: containerBackground }, ];
  if (typeof size === "object") {
    size = { width: null, height: null };
    ({ width: obj4.width, height: obj4.height } = size);
    obj = size;
  } else {
    obj = { width: size, aspectRatio: 1 };
  }
  items[2] = obj;
  const intl = tmp2(1114).intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.p3RmJF, { username: username.recipientName });
  const items1 = [accessibilityLabel, , ];
  if (obj4.OWNED === overlay) {
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp2(1114).t["6cfuDj"]);
  } else {
    stringResult = null;
    if (tmp7.LOCKED === overlay) {
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t.wu4gyV);
    }
  }
  let tmp14Result1 = source === tmp2(8776).WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp10 = null;
  if (tmp14Result1) {
    tmp10 = formatToPlainStringResult;
  }
  items1[2] = tmp10;
  const found = items1.filter(tmp2(1369).isNotNullish);
  const joined = found.join(", ");
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp7.OWNED;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  obj = { style: items2, "aria-hidden": true, children: renderPreview() };
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React4, obj), , , ];
  let tmp14Result = overlay === tmp7.OWNED;
  if (tmp14Result) {
    obj1 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    obj2 = { color: tmp5(576).colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    obj1.children = tmp14(tmp2(8795).CheckmarkLargeBoldIcon, obj2);
    tmp14Result = tmp14(tmp15, obj1);
  }
  items3[1] = tmp14Result;
  tmp14Result = overlay === tmp7.LOCKED;
  if (tmp14Result) {
    const obj3 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    obj4 = { color: tmp5(576).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    obj3.children = tmp14(tmp2(5095).LockIcon, obj4);
    tmp14Result = tmp14(tmp15, obj3);
  }
  items3[2] = tmp14Result;
  if (tmp14Result1) {
    const obj5 = { toastText: formatToPlainStringResult };
    tmp14Result1 = tmp14(SourceIcon, obj5);
  }
  items3[3] = tmp14Result1;
  const tmp12Result = React5(timestampProducer, { children: items3 });
  if (null == onPress) {
    const obj6 = { style: items, accessible: "" !== joined || undefined, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    let tmp22;
    if ("" !== joined) {
      tmp22 = joined;
    }
    obj6.accessibilityLabel = tmp22;
    obj6.accessibilityElementsHidden = accessibilityHidden;
    let str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    obj6.importantForAccessibility = str3;
    obj6.children = tmp12Result;
    return tmp14(tmp15, obj6);
  } else {
    const obj7 = { accessibilityRole: "button", accessibilityLabel: joined, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: null, children: null };
    let str = "auto";
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    obj7.importantForAccessibility = str;
    obj7.children = tmp12Result;
    return tmp14(React3, obj7);
  }
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj4;