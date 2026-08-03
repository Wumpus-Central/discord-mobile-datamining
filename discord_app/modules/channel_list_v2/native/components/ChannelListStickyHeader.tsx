// === Module 15140: ChannelListStickyHeader ===

// Module 15140 (ChannelListStickyHeader)
import Text from "Text";
import get_ActivityIndicator from "MobileLurkerServerPreviewExperiment";
import initialize from "initialize";
import { JoinGuildSources } from "ME";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4054";

let Pressable;
let c4;
let error;
let metroImportAll;
const require = arg1;
({ View: c4, Pressable } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = require("module_4054").createAnimatedComponent(Pressable);
let closure_10 = createCacheKey.createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = { chevron: { flexShrink: 0, flexGrow: 0 }, container: null, divider: null, guildBadge: null, flex: null, header: null, headerRow: null, headerRowTitle: null, headerRowInset: null, headerIcon: null, subheader: null, ellipse: null, joinButton: null };
  obj = { gap: importDefault(712).space.PX_8, paddingTop: importDefault(712).space.PX_16, paddingBottom: null };
  if (flag) {
    let num = 0;
    if (!arg0) {
      num = tmp(712).space.PX_8;
    }
    let PX_12 = num;
  } else {
    PX_12 = tmp(712).space.PX_12;
  }
  obj[2] = PX_12;
  if (arg0) {
    obj = {};
  } else {
    obj = { borderBottomColor: null, borderBottomWidth: 1 };
    obj[0] = tmp(712).colors.BORDER_SUBTLE;
  }
  const merged = Object.assign(obj);
  obj.zIndex = 1;
  obj[1] = obj;
  obj[2] = { height: 1, backgroundColor: importDefault(712).colors.BORDER_SUBTLE, marginHorizontal: importDefault(712).space.PX_16 };
  obj[3] = { margin: 0 };
  obj[4] = { flexShrink: 1 };
  const obj1 = { height: 1, backgroundColor: importDefault(712).colors.BORDER_SUBTLE, marginHorizontal: importDefault(712).space.PX_16 };
  obj[5] = { alignItems: "center", flexDirection: "row", gap: importDefault(712).space.PX_4, paddingHorizontal: importDefault(712).space.PX_16 };
  const obj2 = { alignItems: "center", flexDirection: "row", gap: importDefault(712).space.PX_4, paddingHorizontal: importDefault(712).space.PX_16 };
  obj[6] = { alignItems: "center", flexDirection: "row", gap: importDefault(712).space.PX_8 };
  obj[7] = { flexGrow: 1, flexShrink: 1 };
  const obj3 = { alignItems: "center", flexDirection: "row", gap: importDefault(712).space.PX_8 };
  obj[8] = { paddingEnd: importDefault(712).space.PX_16 };
  const obj4 = { paddingEnd: importDefault(712).space.PX_16 };
  obj[9] = { marginRight: importDefault(712).space.PX_4 };
  const obj5 = { marginRight: importDefault(712).space.PX_4 };
  obj[10] = { flexDirection: "row", alignItems: "center", paddingHorizontal: importDefault(712).space.PX_16, gap: importDefault(712).space.PX_8 };
  const colors = tmp(712).colors;
  const obj6 = { flexDirection: "row", alignItems: "center", paddingHorizontal: importDefault(712).space.PX_16, gap: importDefault(712).space.PX_8 };
  obj[11] = { width: 4, height: 4, backgroundColor: arg0 ? colors.TEXT_SUBTLE : colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(712).radii.round };
  const obj7 = { width: 4, height: 4, backgroundColor: arg0 ? colors.TEXT_SUBTLE : colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(712).radii.round };
  obj[12] = { marginHorizontal: importDefault(712).space.PX_16, marginVertical: importDefault(712).space.PX_4 };
  return obj;
});
let result = require("initialize").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

export default function ChannelListStickyHeader(guild) {
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  guild = guild.guild;
  let flag = guild.showExtraButtons;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = guild.canOpenGuildActionSheet;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = guild.showCoachmarks;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let importDefault;
  const tmp3 = importDefault(1348)("ChannelListStickyHeader");
  const tmp4 = callback2(tmp3, flag);
  let obj = React;
  const ref = React.useRef(null);
  let obj1 = guild(1865);
  const isFavoritesGuildIdResult = obj1.isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp6(1236).t;
  const items = [guild, isFavoritesGuildIdResult];
  const callback = obj.useCallback(() => {
    if (_undefined) {
      const result = guild(outer1_2[11]).openFavoritesGuildActionSheet();
      const obj = guild(outer1_2[11]);
    } else {
      _undefined(outer1_2[12])(guild);
    }
  }, items);
  const tmp10 = importDefault(15139)(guild);
  let tmp6Result = tmp6(5229);
  const iOSPressEffects = tmp6Result.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  tmp6Result = tmp6(1865);
  const favoritesAwareGuildName = tmp6Result.getFavoritesAwareGuildName(guild);
  const token = guild(3897).useToken(tmp(712).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp6Result1 = guild(3897);
  const tmp8 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  const token1 = guild(3897).useToken(tmp(712).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  const tmp6Result2 = guild(3897);
  const items1 = [initialize];
  let enabled = guild(589).useStateFromStores(items1, () => outer1_5.isLurking(guild.id));
  const tmp6Result3 = guild(589);
  if (enabled) {
    enabled = tmp6Result4.useMobileLurkerServerPreview("ChannelListStickyHeader").enabled;
  }
  obj = { style: items2, onPress: null, onPressIn: null, onPressOut: null, accessible: true, accessibilityRole: null, accessibilityHint: null, children: null };
  items2 = [pressableStyles, tmp4.headerRowTitle];
  let tmp17;
  if (flag2) {
    tmp17 = callback;
  }
  obj[1] = tmp17;
  let tmp18;
  if (flag2) {
    tmp18 = onPressIn;
  }
  obj[2] = tmp18;
  let tmp19;
  if (flag2) {
    tmp19 = onPressOut;
  }
  obj[3] = tmp19;
  let str = "header";
  if (flag2) {
    str = "button";
  }
  obj[5] = str;
  let stringResult;
  if (flag2) {
    const intl = tmp6(1236).intl;
    stringResult = intl.string(tmp8);
  }
  obj[6] = stringResult;
  obj = { style: tmp4.header, children: null };
  let tmp22 = null;
  if (isFavoritesGuildIdResult) {
    obj1 = { style: null, size: "sm", color: null };
    obj1[0] = tmp4.headerIcon;
    obj1[2] = tmp(712).colors.MOBILE_TEXT_HEADING_PRIMARY;
    tmp22 = callback(tmp6(9430).StarIcon, obj1);
  }
  const items3 = [tmp22, , , ];
  const tmp16 = closure_9;
  tmp6Result4 = guild(6694);
  items3[1] = callback(closure_4, { ref, collapsable: false, style: tmp4.flex, children: callback(guild(4189).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) });
  const obj3 = { guild, size: null, style: null };
  const obj2 = { ref, collapsable: false, style: tmp4.flex, children: callback(guild(4189).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) };
  obj3[1] = guild(1297).Icon.Sizes.REFRESH_SMALL_16;
  obj3[2] = tmp4.guildBadge;
  items3[2] = callback(importDefault(8474), obj3);
  let tmp24Result = null;
  if (flag2) {
    const obj4 = { size: "xxs", color: null, style: null };
    obj4[1] = tmp(712).colors.TEXT_SUBTLE;
    obj4[2] = tmp4.chevron;
    tmp24Result = tmp24(tmp6(5569).ChevronSmallRightIcon, obj4);
  }
  items3[3] = tmp24Result;
  obj[1] = items3;
  const items4 = [closure_8(closure_4, obj), ];
  let tmp15Result = null;
  if (null != tmp10) {
    tmp15Result = null;
    if (tmp10 > 0) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp4.subheader;
      const obj6 = { experimental_useNativeText: true, color: "text-muted", variant: null, lineClamp: 1, children: null };
      obj6[2] = token1;
      const intl2 = tmp6(1236).intl;
      const obj7 = { count: null };
      obj7[0] = tmp10;
      obj6[4] = intl2.format(tmp6(1236).t.zRl6XR, obj7);
      const items5 = [tmp24(tmp6(4189).Text, obj6), , ];
      const obj8 = { style: null };
      obj8[0] = tmp4.ellipse;
      items5[1] = tmp24(tmp21, obj8);
      const obj9 = { experimental_useNativeText: true, color: "text-muted", variant: null, lineClamp: 1, children: null };
      obj9[2] = token1;
      const intl3 = tmp6(1236).intl;
      obj9[4] = intl3.string(tmp6(1236).t["1g9A/f"]);
      items5[2] = tmp24(tmp6(4189).Text, obj9);
      obj5[1] = items5;
      tmp15Result = tmp15(tmp21, obj5);
    }
  }
  items4[1] = tmp15Result;
  obj[7] = items4;
  const obj10 = { style: tmp4.container, children: null };
  const items6 = [tmp4.headerRow, ];
  let headerRowInset = null;
  tmp15Result = tmp15(tmp16, obj);
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp4.headerRowInset;
  }
  const obj11 = { style: items6, children: null };
  items6[1] = headerRowInset;
  const items7 = [tmp15Result, ];
  tmp24Result = null;
  if (isFavoritesGuildIdResult) {
    tmp24Result = tmp24(tmp6(15144).FavoritesGuildHeaderActionButton, {});
  }
  items7[1] = tmp24Result;
  obj11[1] = items7;
  const items8 = [closure_8(closure_4, obj11), , , , ];
  let tmp24Result1 = null;
  if (flag) {
    tmp24Result1 = null;
    if (!enabled) {
      const obj12 = { guild: null, useButtonComponent: true, useEventsButton: true };
      obj12[0] = guild;
      tmp24Result1 = tmp24(tmp(11464), obj12);
    }
  }
  items8[1] = tmp24Result1;
  if (enabled) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp4.joinButton;
    const obj14 = { guildId: null, joinSource: null };
    obj14[0] = guild.id;
    obj14[1] = JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER;
    obj13[1] = tmp24(tmp(11540), obj14);
    enabled = tmp24(tmp21, obj13);
  }
  items8[2] = enabled;
  let tmp24Result2 = null;
  if (tmp3) {
    const obj15 = { style: null };
    obj15[0] = tmp4.divider;
    tmp24Result2 = tmp24(tmp21, obj15);
  }
  items8[3] = tmp24Result2;
  let tmp24Result3 = null;
  if (flag3) {
    const obj16 = { targetRef: null, guild: null };
    obj16[0] = ref;
    obj16[1] = guild;
    tmp24Result3 = tmp24(tmp(15149), obj16);
  }
  items8[4] = tmp24Result3;
  obj10[1] = items8;
  return closure_8(closure_4, obj10);
};