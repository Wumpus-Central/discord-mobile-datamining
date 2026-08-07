// discord_app/modules/wishlists/native/WishlistItemCardBase.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { ManaContext } from "../../../../discord_common/js/packages/design/native.tsx";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useUserProfileColors } from "../../user_profile/hooks/native/useUserProfileColors.tsx";

let StyleSheet;
let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function SourceIcon(toastText) {
  toastText = toastText.toastText;
  let obj = {
    style: createCacheKey().sourceIcon,
    onPress() {
      let obj = outer1_1(outer1_2[5]);
      obj = { key: "WISHLIST_SOURCE_ICON", content: toastText };
      obj.open(obj);
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null
  };
  obj = { color: null, size: "md" };
  obj[0] = Themes.colors.INTERACTIVE_ICON_DEFAULT;
  obj[5] = callback(toastText(8707).HeartIcon, obj);
  return callback(closure_3, obj);
}
({ Pressable: c3, View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { card: null, overlayContainer: null, previewWrap: null, dimmedPreview: null, sourceIcon: null, lockBadge: null };
createCacheKey = { borderWidth: 1, borderRadius: require("Themes").radii.lg, borderColor: require("Themes").colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.justifyContent = "center";
obj1.alignItems = "center";
obj1.zIndex = 2;
obj1.shadowOpacity = 0.5;
obj1.shadowRadius = 6;
obj1.elevation = 6;
createCacheKey[1] = obj1;
createCacheKey[2] = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" };
createCacheKey[3] = { opacity: 0.5 };
createCacheKey[4] = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, zIndex: 1 };
let obj2 = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, zIndex: 1 };
createCacheKey[5] = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, zIndex: 2, width: 32, height: 32, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { OWNED: "owned", LOCKED: "locked" };
let obj3 = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, zIndex: 2, width: 32, height: 32, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(username) {
  let accessibilityHidden;
  let accessibilityLabel;
  let onPress;
  let overlay;
  let primaryColor;
  let renderPreview;
  let secondaryColor;
  let size;
  let source;
  let theme;
  ({ onPress, size } = username);
  ({ accessibilityLabel, renderPreview, source } = username);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden } = username);
  const tmp = createCacheKey();
  let obj = ManaContext;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  let obj1 = useUserProfileColors;
  let obj2 = map;
  let containerBackground = obj2.useToken(Themes.colors.BG_SURFACE_RAISED);
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
  let tmp14Result1 = source === tmp2(9291).WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp10 = null;
  if (tmp14Result1) {
    tmp10 = formatToPlainStringResult;
  }
  items1[2] = tmp10;
  const found = items1.filter(tmp2(1351).isNotNullish);
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
    obj2[4] = tmp14(tmp2(9169).CheckmarkLargeBoldIcon, obj3);
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
    obj4[4] = tmp14(tmp2(4821).LockIcon, obj5);
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
export const WishlistItemCardOverlay = obj4;