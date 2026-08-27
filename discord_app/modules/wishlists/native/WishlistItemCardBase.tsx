// === Module 10701: SourceIcon ===

// Module 10701 (SourceIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import map from "map" /* 4165 */;
import ManaContext from "ManaContext" /* 4172 */;
import useUserProfileColors from "useUserProfileColors" /* 8464 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function SourceIcon(toastText) {
  toastText = toastText.toastText;
  let obj = {
    style: callback2().sourceIcon,
    onPress() {
      let obj = closure_1_1(closure_1_2[5]);
      obj = { key: "WISHLIST_SOURCE_ICON", content: toastText };
      obj.open(obj);
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null
  };
  obj = { color: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
  obj[5] = callback(toastText(9124).HeartIcon, obj);
  return callback(closure_3, obj);
}
noopAll;
({ Pressable: c3, View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let obj = { position: "absolute", top: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_8 };
obj = { card: null, overlayContainer: null, previewWrap: null, dimmedPreview: null, sourceIcon: null, lockBadge: null };
obj = { borderWidth: 1, borderRadius: ThemesDefault.radii.lg, borderColor: ThemesDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj[0] = obj;
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.justifyContent = "center";
createCacheKey.alignItems = "center";
createCacheKey.zIndex = 2;
createCacheKey.shadowOpacity = 0.5;
createCacheKey.shadowRadius = 6;
createCacheKey.elevation = 6;
obj[1] = createCacheKey;
obj[2] = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" };
obj[3] = { opacity: 0.5 };
let obj2 = {};
const merged1 = Object.assign(obj);
obj2.zIndex = 1;
obj[4] = obj2;
let obj3 = {};
const merged2 = Object.assign(obj);
obj3.zIndex = 2;
obj3.width = 32;
obj3.height = 32;
obj3.borderRadius = ThemesDefault.radii.round;
obj3.backgroundColor = ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj[5] = obj3;
let closure_8 = createCacheKey.createStyles(obj);
let obj4 = { OWNED: "owned", LOCKED: "locked" };
const result = require("set").fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(username) {
  ({ onPress, size } = username);
  ({ accessibilityLabel, renderPreview, source } = username);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden } = username);
  const tmp = callback2();
  let obj = ManaContext;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  obj1 = useUserProfileColors;
  let obj2 = map;
  let containerBackground = obj2.useToken(ThemesDefault.colors.BG_SURFACE_RAISED);
  if (null != primaryColor) {
    containerBackground = obj1.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  }
  const items = [tmp.card, { backgroundColor: containerBackground }, ];
  if (typeof size === "object") {
    obj = { width: null, height: null };
    ({ width: obj4[0], height: obj4[1] } = size);
  } else {
    obj = { width: null, aspectRatio: 1 };
    obj[0] = size;
  }
  items[2] = obj;
  const intl = tmp2(1236).intl;
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.p3RmJF, { username: username.recipientName });
  const items1 = [accessibilityLabel, , ];
  if (obj4.OWNED === overlay) {
    const intl3 = tmp2(1236).intl;
    let stringResult = intl3.string(tmp2(1236).t["6cfuDj"]);
  } else {
    stringResult = null;
    if (tmp7.LOCKED === overlay) {
      const intl2 = tmp2(1236).intl;
      stringResult = intl2.string(tmp2(1236).t.wu4gyV);
    }
  }
  let tmp14Result1 = source === tmp2(10376).WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp10 = null;
  if (tmp14Result1) {
    tmp10 = formatToPlainStringResult;
  }
  items1[2] = tmp10;
  const found = items1.filter(tmp2(1370).isNotNullish);
  const joined = found.join(", ");
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp7.OWNED;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  obj1 = { style: items2, "aria-hidden": true, children: renderPreview() };
  items2[1] = dimmedPreview;
  const items3 = [closure_5(closure_4, obj1), , , ];
  let tmp14Result = overlay === tmp7.OWNED;
  if (tmp14Result) {
    obj2 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    obj2[0] = tmp.overlayContainer;
    const obj3 = { color: null, size: "custom", style: null };
    obj3[0] = tmp5(712).colors.WHITE;
    obj3[2] = { width: 40, height: 40 };
    obj2[4] = tmp14(tmp2(9780).CheckmarkLargeBoldIcon, obj3);
    tmp14Result = tmp14(tmp15, obj2);
  }
  items3[1] = tmp14Result;
  tmp14Result = overlay === tmp7.LOCKED;
  if (tmp14Result) {
    obj4 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    obj4[0] = tmp.lockBadge;
    const obj5 = { color: null, size: "custom", style: null };
    obj5[0] = tmp5(712).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
    obj5[2] = { width: 18, height: 18 };
    obj4[4] = tmp14(tmp2(4996).LockIcon, obj5);
    tmp14Result = tmp14(tmp15, obj4);
  }
  items3[2] = tmp14Result;
  if (tmp14Result1) {
    const obj6 = { toastText: null };
    obj6[0] = formatToPlainStringResult;
    tmp14Result1 = tmp14(SourceIcon, obj6);
  }
  items3[3] = tmp14Result1;
  const tmp12Result = closure_7(closure_6, { children: items3 });
  if (null == onPress) {
    const obj7 = { style: null, accessible: null, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj7[0] = items;
    obj7[1] = "" !== joined || undefined;
    let tmp22;
    if ("" !== joined) {
      tmp22 = joined;
    }
    obj7[2] = tmp22;
    obj7[3] = accessibilityHidden;
    let str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    obj7[4] = str3;
    obj7[5] = tmp12Result;
    return tmp14(tmp15, obj7);
  } else {
    const obj8 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj8[1] = joined;
    obj8[2] = items;
    obj8[3] = onPress;
    obj8[4] = accessibilityHidden;
    let str = "auto";
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    obj8[5] = str;
    obj8[6] = tmp12Result;
    return tmp14(closure_3, obj8);
  }
  const tmp12 = closure_7;
  const tmp13 = closure_6;
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = obj;
export const WishlistItemCardOverlay = obj4;