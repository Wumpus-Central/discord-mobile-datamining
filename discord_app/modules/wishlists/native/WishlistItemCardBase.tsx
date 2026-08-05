// discord_app/modules/wishlists/native/WishlistItemCardBase.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  obj[0] = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  obj[5] = callback(toastText(8689).HeartIcon, obj);
  return callback(closure_3, obj);
}
({ Pressable: c3, View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { card: null, ownedOverlay: null, previewWrap: null, ownedCard: null, sourceIcon: null };
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
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, zIndex: 1 };
const result = require("jsxProd").fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(username) {
  let accessibilityLabel;
  let onPress;
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
  let flag = username.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const accessibilityHidden = username.accessibilityHidden;
  const tmp = createCacheKey();
  let obj = require(3997) /* ManaContext */;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  let obj1 = require(8754) /* useUserProfileColors */;
  let obj2 = require(3989) /* map */;
  let containerBackground = obj2.useToken(importDefault(712).colors.BG_SURFACE_RAISED);
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
  const formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.p3RmJF, { username: username.recipientName });
  const items1 = [accessibilityLabel, , ];
  let stringResult = null;
  if (flag) {
    const intl2 = tmp2(1236).intl;
    stringResult = intl2.string(tmp2(1236).t["6cfuDj"]);
  }
  let tmp11Result = source === tmp2(9274).WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp9 = null;
  if (tmp11Result) {
    tmp9 = formatToPlainStringResult;
  }
  items1[2] = tmp9;
  const found = items1.filter(tmp2(1351).isNotNullish);
  obj1 = { style: tmp.ownedOverlay, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const joined = found.join(", ");
  obj2 = { color: null, size: "custom", style: null };
  obj2[0] = importDefault(712).colors.WHITE;
  obj2[2] = { width: 40, height: 40 };
  obj1[4] = callback(require(9151) /* CheckmarkLargeBoldIcon */.CheckmarkLargeBoldIcon, obj2);
  const items2 = [tmp.previewWrap, ];
  let ownedCard = flag;
  if (flag) {
    ownedCard = tmp.ownedCard;
  }
  const tmp13 = callback(closure_4, obj1);
  const tmp14 = closure_7;
  const tmp15 = closure_6;
  const tmp5 = importDefault;
  items2[1] = ownedCard;
  const items3 = [callback(closure_4, { style: items2, "aria-hidden": true, children: renderPreview() }), , ];
  if (flag) {
    flag = tmp13;
  }
  items3[1] = flag;
  if (tmp11Result) {
    const obj4 = { toastText: null };
    obj4[0] = formatToPlainStringResult;
    tmp11Result = tmp11(SourceIcon, obj4);
  }
  items3[2] = tmp11Result;
  const tmp14Result = tmp14(tmp15, { children: items3 });
  if (null == onPress) {
    const obj5 = { style: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj5[0] = items;
    obj5[1] = accessibilityHidden;
    let str2 = "auto";
    if (accessibilityHidden) {
      str2 = "no-hide-descendants";
    }
    obj5[2] = str2;
    obj5[3] = tmp14Result;
    tmp11Result = tmp11(tmp12, obj5);
  } else {
    const obj6 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj6[1] = joined;
    obj6[2] = items;
    obj6[3] = onPress;
    obj6[4] = accessibilityHidden;
    let str = "auto";
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    obj6[5] = str;
    obj6[6] = tmp14Result;
    tmp11Result = tmp11(closure_3, obj6);
    const tmp18 = closure_3;
  }
  return tmp11Result;
};
export const DEFAULT_ITEM_SIZE = 170;