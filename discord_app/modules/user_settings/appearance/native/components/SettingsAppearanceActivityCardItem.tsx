// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ClipView from "../../../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../LocaleStore.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

const ClipViewDefault = ClipView;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const HappeningNowConstants = fn(15294);
({
  HAPPENING_NOW_BADGE_SIZE,
  HAPPENING_NOW_CONTENT_HEIGHT,
  HAPPENING_NOW_CARD_HEIGHT,
  HAPPENING_NOW_CARD_MARGIN_RIGHT,
  HAPPENING_NOW_CARD_PADDING,
  HAPPENING_NOW_CARD_PADDING_RIGHT,
} = HappeningNowConstants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(1178).Icon);
fn(4560);
let obj = {
  card: null,
  cardBadgeWrapper: null,
  cardImage: null,
  cardBadge: null,
  cardImageAssetContainer: null,
  cardImageAssetBackground: null,
  cardImageAsset: null,
  shiftedAvatar: null,
  userCounter: null,
};
obj = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: StyleSheet.hairlineWidth,
  padding: HAPPENING_NOW_CARD_PADDING,
  paddingRight: HAPPENING_NOW_CARD_PADDING_RIGHT,
  marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT,
  height: HAPPENING_NOW_CARD_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
};
obj.card = obj;
obj.cardBadgeWrapper = { position: "absolute", top: 0, right: 0 };
const createStyles = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  minWidth: HAPPENING_NOW_CONTENT_HEIGHT,
  marginRight: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  position: "relative",
};
obj.cardImage = createStyles;
let size = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: HAPPENING_NOW_BADGE_SIZE,
  height: HAPPENING_NOW_BADGE_SIZE,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: nativeDefault.radii.md,
};
obj.cardBadge = size;
obj.cardImageAssetContainer = {
  height: "100%",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG,
  borderRadius: nativeDefault.radii.sm,
};
const size1 = {
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
};
obj.cardImageAssetBackground = size1;
const size2 = {
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.cardImageAsset = size2;
obj.shiftedAvatar = { marginLeft: -4 };
const obj2 = {
  height: "100%",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG,
  borderRadius: nativeDefault.radii.sm,
};
obj.userCounter = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -4,
  height: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.XSMALL_20],
  minWidth: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.XSMALL_20],
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 4,
  paddingTop: 1,
};
let closure_8 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx",
);

export default function ActivityCardItem(arg0) {
  ({ avatars, animatedStyles } = arg0);
  _require = undefined;
  let num3;
  ({ kind, title, subtitle, image } = arg0);
  let obj = require("useStateFromStores");
  let items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp4 = closure_8();
  _require = tmp4;
  let substr;
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
    mapped = substr.map((source, index) => {
      const diff = substr.length - 1;
      let obj = { source, size: native.AvatarSizes.XSMALL_20 };
      const tmp5 = hasOwnProperty(native.Avatar, obj);
      shiftedAvatar = undefined;
      if (0 !== index) {
        shiftedAvatar = shiftedAvatar.shiftedAvatar;
      }
      obj = { style: shiftedAvatar, children: null };
      if (index !== diff) {
        obj = { cutouts: null, children: null };
        const point = {
          shape: ClipView.CutoutShape.Circle,
          x: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] - 4 - 2,
          y: -2,
          size: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] + 4,
        };
        const items = [point];
        obj.cutouts = items;
        obj.children = tmp5;
        let tmp2Result = hasOwnProperty(ClipViewDefault, obj);
      } else {
        tmp2Result = tmp5;
      }
      obj.children = tmp2Result;
      return hasOwnProperty(React3, obj, index);
    });
  }
  obj = { style: null, children: null };
  const items1 = [tmp4.card, ,];
  ({ borderStrong: arr3[1], bgRaised: arr3[2] } = animatedStyles);
  obj.style = items1;
  obj = { style: null, children: null };
  const items2 = [,];
  ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp4);
  obj.style = items2;
  const obj1 = {
    style: tmp4.cardImageAssetBackground,
    children: closure_5(substr(num3[11]), { style: tmp4.cardImageAsset, source: image }),
  };
  obj.children = closure_5(closure_3, obj1);
  const items3 = [closure_5(closure_3, obj), ,];
  const obj3 = { style: { flexDirection: "row" }, children: null };
  const items4 = [closure_5(closure_3, { style: { flexDirection: "row" }, children: mapped })];
  let tmp8Result = null;
  if (num3 > 0) {
    const obj4 = { style: null, children: null };
    const items5 = [tmp4.userCounter, animatedStyles.bgModStrong];
    obj4.style = items5;
    const obj5 = {
      animated: true,
      variant: "text-xxs/semibold",
      allowFontScaling: false,
      style: animatedStyles.textNormal,
      children: null,
    };
    const items6 = ["+", tmp(tmp2[13]).humanizeValue(num3, stateFromStores)];
    obj5.children = items6;
    obj4.children = closure_6(tmp(tmp2[12]).Text, obj5);
    tmp8Result = closure_5(tmp7(tmp2[5]).View, obj4);
    const tmpResult = tmp(tmp2[13]);
  }
  const obj6 = { children: null };
  items4[1] = tmp8Result;
  obj3.children = items4;
  const items7 = [
    closure_6(closure_3, obj3),
    closure_5(require("HappeningNowCard").HappeningNowCardHeader, {
      animated: true,
      style: animatedStyles.headerPrimary,
      children: title,
    }),
    closure_5(require("HappeningNowCard").HappeningNowCardSubtitle, {
      animated: true,
      style: animatedStyles.headerSecondary,
      children: subtitle,
    }),
  ];
  obj6.children = items7;
  items3[1] = closure_6(closure_3, obj6);
  const obj9 = { style: tmp4.cardBadgeWrapper, children: null };
  const obj10 = {
    style: null,
    children: closure_5(closure_7, {
      style: animatedStyles.activityIcon,
      size: require("native").Icon.Sizes.REFRESH_SMALL_16,
      resizeMode: "stretch",
      source: substr("activity" === kind ? num3[15] : num3[16]),
    }),
  };
  const items8 = [tmp4.cardBadge, animatedStyles.bgModSubtle];
  obj10.style = items8;
  obj9.children = closure_5(substr(num3[5]).View, obj10);
  items3[2] = closure_5(closure_3, obj9);
  obj.children = items3;
  return closure_6(substr(num3[5]).View, obj);
}
