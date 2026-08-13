// discord_app/modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx
import Button from "Button";
import get_ActivityIndicator from "Text";
import { JoinGuildSources } from "ME";
import jsxProd from "FavoritesGuildHeaderActionButton";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4083";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { GuildBadgeV2 } from "../../../guild/native/GuildBadgeV2.tsx";
import { useIsGameCommunityServerPreview } from "../../../lurker_mode/native/useIsGameCommunityServerPreview.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { useStickyServerHeaderSubtitle } from "../hooks/useStickyServerHeaderSubtitle.tsx";

let Pressable;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c4, Pressable } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = require("module_4083").createAnimatedComponent(Pressable);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = { chevron: { flexShrink: 0, flexGrow: 0 }, container: null, divider: null, guildBadge: null, flex: null, header: null, headerRow: null, headerRowTitle: null, headerRowInset: null, headerIcon: null, subheader: null, ellipse: null, joinButton: null };
  obj = { gap: Themes.space.PX_8, paddingTop: Themes.space.PX_16, paddingBottom: null };
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
  obj[2] = { height: 1, backgroundColor: Themes.colors.BORDER_SUBTLE, marginHorizontal: Themes.space.PX_16 };
  obj[3] = { margin: 0 };
  obj[4] = { flexShrink: 1 };
  const obj1 = { height: 1, backgroundColor: Themes.colors.BORDER_SUBTLE, marginHorizontal: Themes.space.PX_16 };
  obj[5] = { alignItems: "center", flexDirection: "row", gap: Themes.space.PX_4, paddingHorizontal: Themes.space.PX_16 };
  const obj2 = { alignItems: "center", flexDirection: "row", gap: Themes.space.PX_4, paddingHorizontal: Themes.space.PX_16 };
  obj[6] = { alignItems: "center", flexDirection: "row", gap: Themes.space.PX_8 };
  obj[7] = { flexGrow: 1, flexShrink: 1 };
  const obj3 = { alignItems: "center", flexDirection: "row", gap: Themes.space.PX_8 };
  obj[8] = { paddingEnd: Themes.space.PX_16 };
  const obj4 = { paddingEnd: Themes.space.PX_16 };
  obj[9] = { marginRight: Themes.space.PX_4 };
  const obj5 = { marginRight: Themes.space.PX_4 };
  obj[10] = { flexDirection: "row", alignItems: "center", paddingHorizontal: Themes.space.PX_16, gap: Themes.space.PX_8 };
  const colors = tmp(712).colors;
  const obj6 = { flexDirection: "row", alignItems: "center", paddingHorizontal: Themes.space.PX_16, gap: Themes.space.PX_8 };
  obj[11] = { width: 4, height: 4, backgroundColor: arg0 ? colors.TEXT_SUBTLE : colors.BACKGROUND_MOD_STRONG, borderRadius: Themes.radii.round };
  const obj7 = { width: 4, height: 4, backgroundColor: arg0 ? colors.TEXT_SUBTLE : colors.BACKGROUND_MOD_STRONG, borderRadius: Themes.radii.round };
  obj[12] = { marginHorizontal: Themes.space.PX_16, marginBottom: Themes.space.PX_8 };
  return obj;
});
let result = require("ME").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

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
  const tmp3 = useIsMobileVisualRefreshExperimentEnabled("ChannelListStickyHeader");
  const tmp4 = callback2(tmp3, flag);
  let tmp25Result2 = useIsGameCommunityServerPreview(guild.id);
  let obj = React;
  const ref = React.useRef(null);
  let obj1 = guild(1913);
  const isFavoritesGuildIdResult = obj1.isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp7(1236).t;
  const items = [guild, isFavoritesGuildIdResult];
  const callback = obj.useCallback(() => {
    if (_undefined) {
      const result = guild(outer1_2[11]).openFavoritesGuildActionSheet();
      const obj = guild(outer1_2[11]);
    } else {
      _undefined(outer1_2[12])(guild);
    }
  }, items);
  const tmp11 = useStickyServerHeaderSubtitle(guild);
  let tmp7Result = tmp7(5419);
  const iOSPressEffects = tmp7Result.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  tmp7Result = tmp7(1913);
  const favoritesAwareGuildName = tmp7Result.getFavoritesAwareGuildName(guild);
  const token = guild(4065).useToken(tmp(712).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp7Result1 = guild(4065);
  const tmp9 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  const token1 = guild(4065).useToken(tmp(712).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  obj = { style: items1, onPress: null, onPressIn: null, onPressOut: null, accessible: true, accessibilityRole: null, accessibilityHint: null, children: null };
  items1 = [pressableStyles, tmp4.headerRowTitle];
  let tmp18;
  if (flag2) {
    tmp18 = callback;
  }
  obj[1] = tmp18;
  let tmp19;
  if (flag2) {
    tmp19 = onPressIn;
  }
  obj[2] = tmp19;
  let tmp20;
  if (flag2) {
    tmp20 = onPressOut;
  }
  obj[3] = tmp20;
  let str = "header";
  if (flag2) {
    str = "button";
  }
  obj[5] = str;
  let stringResult;
  if (flag2) {
    const intl = tmp7(1236).intl;
    stringResult = intl.string(tmp9);
  }
  obj[6] = stringResult;
  obj = { style: tmp4.header, children: null };
  let tmp23 = null;
  if (isFavoritesGuildIdResult) {
    obj1 = { style: null, size: "sm", color: null };
    obj1[0] = tmp4.headerIcon;
    obj1[2] = tmp(712).colors.MOBILE_TEXT_HEADING_PRIMARY;
    tmp23 = callback(tmp7(8793).StarIcon, obj1);
  }
  const items2 = [tmp23, , , ];
  const tmp17 = closure_8;
  const tmp7Result2 = guild(4065);
  items2[1] = callback(closure_4, { ref, collapsable: false, style: tmp4.flex, children: callback(guild(4338).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) });
  const obj3 = { guild, size: null, style: null };
  const obj2 = { ref, collapsable: false, style: tmp4.flex, children: callback(guild(4338).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) };
  obj3[1] = guild(1297).Icon.Sizes.REFRESH_SMALL_16;
  obj3[2] = tmp4.guildBadge;
  items2[2] = callback(GuildBadgeV2, obj3);
  let tmp25Result = null;
  if (flag2) {
    const obj4 = { size: "xxs", color: null, style: null };
    obj4[1] = tmp(712).colors.TEXT_SUBTLE;
    obj4[2] = tmp4.chevron;
    tmp25Result = tmp25(tmp7(5818).ChevronSmallRightIcon, obj4);
  }
  items2[3] = tmp25Result;
  obj[1] = items2;
  const items3 = [closure_7(closure_4, obj), ];
  let tmp16Result = null;
  if (null != tmp11) {
    tmp16Result = null;
    if (tmp11 > 0) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp4.subheader;
      const obj6 = { experimental_useNativeText: true, color: "text-muted", variant: null, lineClamp: 1, children: null };
      obj6[2] = token1;
      const intl2 = tmp7(1236).intl;
      const obj7 = { count: null };
      obj7[0] = tmp11;
      obj6[4] = intl2.format(tmp7(1236).t.zRl6XR, obj7);
      const items4 = [tmp25(tmp7(4338).Text, obj6), , ];
      const obj8 = { style: null };
      obj8[0] = tmp4.ellipse;
      items4[1] = tmp25(tmp22, obj8);
      const obj9 = { experimental_useNativeText: true, color: "text-muted", variant: null, lineClamp: 1, children: null };
      obj9[2] = token1;
      const intl3 = tmp7(1236).intl;
      obj9[4] = intl3.string(tmp7(1236).t["1g9A/f"]);
      items4[2] = tmp25(tmp7(4338).Text, obj9);
      obj5[1] = items4;
      tmp16Result = tmp16(tmp22, obj5);
    }
  }
  items3[1] = tmp16Result;
  obj[7] = items3;
  const obj10 = { style: tmp4.container, children: null };
  const items5 = [tmp4.headerRow, ];
  let headerRowInset = null;
  tmp16Result = tmp16(tmp17, obj);
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp4.headerRowInset;
  }
  const obj11 = { style: items5, children: null };
  items5[1] = headerRowInset;
  const items6 = [tmp16Result, ];
  tmp25Result = null;
  if (isFavoritesGuildIdResult) {
    tmp25Result = tmp25(tmp7(15356).FavoritesGuildHeaderActionButton, {});
  }
  items6[1] = tmp25Result;
  obj11[1] = items6;
  const items7 = [closure_7(closure_4, obj11), , , , ];
  let tmp25Result1 = null;
  if (flag) {
    const obj12 = { guild: null, useButtonComponent: true, useEventsButton: true };
    obj12[0] = guild;
    tmp25Result1 = tmp25(tmp(11727), obj12);
  }
  items7[1] = tmp25Result1;
  if (tmp25Result2) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp4.joinButton;
    const obj14 = { guildId: null, joinSource: null };
    obj14[0] = guild.id;
    obj14[1] = JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER;
    obj13[1] = tmp25(tmp(15361), obj14);
    tmp25Result2 = tmp25(tmp22, obj13);
  }
  items7[2] = tmp25Result2;
  let tmp25Result3 = null;
  if (tmp3) {
    const obj15 = { style: null };
    obj15[0] = tmp4.divider;
    tmp25Result3 = tmp25(tmp22, obj15);
  }
  items7[3] = tmp25Result3;
  let tmp25Result4 = null;
  if (flag3) {
    const obj16 = { targetRef: null, guild: null };
    obj16[0] = ref;
    obj16[1] = guild;
    tmp25Result4 = tmp25(tmp(15362), obj16);
  }
  items7[4] = tmp25Result4;
  obj10[1] = items7;
  return closure_7(closure_4, obj10);
};