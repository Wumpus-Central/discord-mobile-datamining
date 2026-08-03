// === Module 14396: ActivityCardItem ===

// Module 14396 (ActivityCardItem)
import "noop";
import get_ActivityIndicator from "set";
import _getSystemLocale from "_getSystemLocale";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4116";

let HAPPENING_NOW_BADGE_SIZE;
let HAPPENING_NOW_CARD_HEIGHT;
let HAPPENING_NOW_CARD_MARGIN_RIGHT;
let HAPPENING_NOW_CARD_PADDING;
let HAPPENING_NOW_CARD_PADDING_RIGHT;
let HAPPENING_NOW_CONTENT_HEIGHT;
let StyleSheet;
let c3;
let c5;
let closure_6;
const require = arg1;
({ View: c3, StyleSheet } = get_ActivityIndicator);
({ HAPPENING_NOW_BADGE_SIZE, HAPPENING_NOW_CONTENT_HEIGHT, HAPPENING_NOW_CARD_HEIGHT, HAPPENING_NOW_CARD_MARGIN_RIGHT, HAPPENING_NOW_CARD_PADDING, HAPPENING_NOW_CARD_PADDING_RIGHT } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = require("module_4116").createAnimatedComponent(require("Button").Icon);
let obj = { card: null, cardBadgeWrapper: null, cardImage: null, cardBadge: null, cardImageAssetContainer: null, cardImageAssetBackground: null, cardImageAsset: null, shiftedAvatar: null, userCounter: null };
obj = { borderRadius: require("Themes").radii.lg, borderWidth: StyleSheet.hairlineWidth, padding: HAPPENING_NOW_CARD_PADDING, paddingRight: HAPPENING_NOW_CARD_PADDING_RIGHT, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height: HAPPENING_NOW_CARD_HEIGHT, flexDirection: "row", alignItems: "center" };
obj[0] = obj;
obj[1] = { position: "absolute", top: 0, right: 0 };
createCacheKey = { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: require("Themes").space.PX_12, borderRadius: require("Themes").radii.md, position: "relative" };
obj[2] = createCacheKey;
obj[3] = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE, borderTopRightRadius: 15, borderBottomLeftRadius: require("Themes").radii.md };
const obj2 = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE, borderTopRightRadius: 15, borderBottomLeftRadius: require("Themes").radii.md };
obj[4] = { height: "100%", backgroundColor: require("Themes").colors.CARD_SECONDARY_BG, borderRadius: require("Themes").radii.sm };
let obj3 = { height: "100%", backgroundColor: require("Themes").colors.CARD_SECONDARY_BG, borderRadius: require("Themes").radii.sm };
obj[5] = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("Themes").radii.sm };
let obj4 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("Themes").radii.sm };
obj[6] = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE };
obj[7] = { marginLeft: -4 };
let obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -4, height: null, minWidth: null, borderRadius: null, paddingHorizontal: 4, paddingTop: 1 };
obj6[4] = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL_20];
obj6[5] = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL_20];
obj6[6] = require("Themes").radii.round;
obj[8] = obj6;
let closure_8 = createCacheKey.createStyles(obj);
let obj5 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE };
const result = require("_getSystemLocale").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx");

export default function ActivityCardItem(arg0) {
  let animatedStyles;
  let avatars;
  let image;
  let kind;
  let subtitle;
  let title;
  ({ avatars, animatedStyles } = arg0);
  let _require;
  let substr;
  let num3;
  ({ kind, title, subtitle, image } = arg0);
  let obj = _require(num3[9]);
  let items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp4 = callback2();
  _require = tmp4;
  substr = undefined;
  if (avatars != null) {
    substr = avatars.slice(0, 3);
  }
  if (substr == null) {
    substr = [];
  }
  num3 = 0;
  if (null != avatars) {
    num3 = avatars.length - substr.length;
  }
  let mapped = null;
  if (null != avatars) {
    mapped = substr.map((source) => {
      const diff = substr.length - 1;
      let obj = { source, size: null };
      obj[1] = _undefined(num3[6]).AvatarSizes.XSMALL_20;
      const tmp5 = outer1_5(_undefined(num3[6]).Avatar, obj);
      let shiftedAvatar;
      if (0 !== arg1) {
        shiftedAvatar = _undefined.shiftedAvatar;
      }
      obj = { style: shiftedAvatar, children: null };
      if (arg1 !== diff) {
        obj = { cutouts: null, children: null };
        const obj1 = { shape: null, x: null, y: -2, size: null };
        obj1[0] = tmp3(tmp4[10]).CutoutShape.Circle;
        obj1[1] = tmp3(tmp4[6]).AVATAR_SIZE_MAP[tmp3(undefined, tmp4[6]).AvatarSizes.XSMALL_20] - 4 - 2;
        obj1[3] = tmp3(tmp4[6]).AVATAR_SIZE_MAP[tmp3(undefined, tmp4[6]).AvatarSizes.XSMALL_20] + 4;
        const items = [obj1];
        obj[0] = items;
        obj[1] = tmp5;
        let tmp2Result = tmp2(substr(tmp4[10]), obj);
        const tmp12 = substr(tmp4[10]);
      } else {
        tmp2Result = tmp5;
      }
      obj[1] = tmp2Result;
      return outer1_5(outer1_3, obj, arg1);
    });
  }
  obj = { style: items1, children: null };
  items1 = [tmp4.card, , ];
  ({ borderStrong: arr3[1], bgRaised: arr3[2] } = animatedStyles);
  obj = { style: items2, children: null };
  items2 = [, ];
  ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp4);
  let obj1 = { style: tmp4.cardImageAssetBackground, children: null };
  obj1[1] = callback(substr(num3[11]), { style: tmp4.cardImageAsset, source: image });
  obj[1] = callback(closure_3, obj1);
  const items3 = [callback(closure_3, obj), , ];
  const obj3 = { style: { flexDirection: "row" }, children: null };
  const items4 = [callback(closure_3, { style: { flexDirection: "row" }, children: mapped }), ];
  let tmp8Result = null;
  if (num3 > 0) {
    const obj4 = { style: null, children: null };
    const items5 = [tmp4.userCounter, animatedStyles.bgModStrong];
    obj4[0] = items5;
    const obj5 = { animated: true, variant: "text-xxs/semibold", allowFontScaling: false, style: null, children: null };
    obj5[3] = animatedStyles.textNormal;
    const items6 = ["+", tmp(tmp2[13]).humanizeValue(num3, stateFromStores)];
    obj5[4] = items6;
    obj4[1] = tmp6(tmp(tmp2[12]).Text, obj5);
    tmp8Result = tmp8(tmp7(tmp2[5]).View, obj4);
    const tmpResult = tmp(tmp2[13]);
  }
  const obj6 = { children: null };
  items4[1] = tmp8Result;
  obj3[1] = items4;
  const items7 = [closure_6(closure_3, obj3), callback(_require(num3[14]).HappeningNowCardHeader, { animated: true, style: animatedStyles.headerPrimary, children: title }), callback(_require(num3[14]).HappeningNowCardSubtitle, { animated: true, style: animatedStyles.headerSecondary, children: subtitle })];
  obj6[0] = items7;
  items3[1] = closure_6(closure_3, obj6);
  const obj9 = { style: tmp4.cardBadgeWrapper, children: null };
  const obj10 = { style: items8, children: null };
  items8 = [tmp4.cardBadge, animatedStyles.bgModSubtle];
  const obj11 = { style: animatedStyles.activityIcon, size: null, resizeMode: "stretch", source: null };
  obj11[1] = _require(num3[6]).Icon.Sizes.REFRESH_SMALL_16;
  obj11[3] = substr("activity" === kind ? num3[15] : num3[16]);
  obj10[1] = callback(closure_7, obj11);
  obj9[1] = callback(substr(num3[5]).View, obj10);
  items3[2] = callback(closure_3, obj9);
  obj[1] = items3;
  return closure_6(substr(num3[5]).View, obj);
};