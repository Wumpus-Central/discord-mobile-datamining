// discord_app/modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildBadgeV2Default from "../../../guild/native/GuildBadgeV2.tsx";
import useIsGameCommunityServerPreviewDefault from "../../../lurker_mode/native/useIsGameCommunityServerPreview.tsx";
import useStickyServerHeaderSubtitleDefault from "../hooks/useStickyServerHeaderSubtitle.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { JoinGuildSources } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
({ View: c4, Pressable } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = importDefaultResult.createAnimatedComponent(Pressable);
let closure_9 = createCacheKey.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let obj = {
    chevron: { flexShrink: 0, flexGrow: 0 },
    container: null,
    divider: null,
    guildBadge: null,
    flex: null,
    header: null,
    headerRow: null,
    headerRowTitle: null,
    headerRowInset: null,
    headerIcon: null,
    subheader: null,
    ellipse: null,
    joinButton: null,
  };
  obj = { gap: ThemesDefault.space.PX_8, paddingTop: ThemesDefault.space.PX_16, paddingBottom: null, zIndex: 1 };
  let num = 0;
  if (!flag) {
    num = tmp(709).space.PX_12;
  }
  obj[2] = num;
  obj[1] = obj;
  obj = { height: 1, backgroundColor: tmp(709).colors.BORDER_SUBTLE, marginHorizontal: tmp(709).space.PX_16 };
  obj[2] = obj;
  obj[3] = { margin: 0 };
  obj[4] = { flexShrink: 1 };
  obj[5] = {
    alignItems: "center",
    flexDirection: "row",
    gap: ThemesDefault.space.PX_4,
    paddingHorizontal: ThemesDefault.space.PX_16,
  };
  obj1 = {
    alignItems: "center",
    flexDirection: "row",
    gap: ThemesDefault.space.PX_4,
    paddingHorizontal: ThemesDefault.space.PX_16,
  };
  obj[6] = { alignItems: "center", flexDirection: "row", gap: ThemesDefault.space.PX_8 };
  obj[7] = { flexGrow: 1, flexShrink: 1 };
  const obj2 = { alignItems: "center", flexDirection: "row", gap: ThemesDefault.space.PX_8 };
  obj[8] = { paddingEnd: ThemesDefault.space.PX_16 };
  const obj3 = { paddingEnd: ThemesDefault.space.PX_16 };
  obj[9] = { marginRight: ThemesDefault.space.PX_4 };
  const obj4 = { marginRight: ThemesDefault.space.PX_4 };
  obj[10] = {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ThemesDefault.space.PX_16,
    gap: ThemesDefault.space.PX_8,
  };
  const obj5 = {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ThemesDefault.space.PX_16,
    gap: ThemesDefault.space.PX_8,
  };
  obj[11] = {
    width: 4,
    height: 4,
    backgroundColor: ThemesDefault.colors.TEXT_SUBTLE,
    borderRadius: ThemesDefault.radii.round,
  };
  const obj6 = {
    width: 4,
    height: 4,
    backgroundColor: ThemesDefault.colors.TEXT_SUBTLE,
    borderRadius: ThemesDefault.radii.round,
  };
  obj[12] = { marginHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_8 };
  return obj;
});
const result = require("set").fileFinishedImporting(
  "modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx",
);

export default function ChannelListStickyHeader(guild) {
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
  importDefault = undefined;
  const tmp = callback2(flag);
  let tmp24Result2 = useIsGameCommunityServerPreviewDefault(guild.id);
  let obj = React;
  const ref = React.useRef(null);
  obj1 = guild(1911);
  const isFavoritesGuildIdResult = obj1.isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp6(1233).t;
  const items = [guild, isFavoritesGuildIdResult];
  const callback = obj.useCallback(() => {
    if (c1) {
      tmp(tmp2[10])();
    } else {
      tmp(tmp2[11])(guild);
    }
  }, items);
  const tmp10 = useStickyServerHeaderSubtitleDefault(guild);
  let tmp6Result = tmp6(5612);
  const iOSPressEffects = tmp6Result.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  tmp6Result = tmp6(1911);
  const favoritesAwareGuildName = tmp6Result.getFavoritesAwareGuildName(guild);
  const token = guild(4197).useToken(tmp2(709).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp6Result1 = guild(4197);
  const tmp8 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  const token1 = guild(4197).useToken(tmp2(709).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  obj = {
    style: items1,
    onPress: null,
    onPressIn: null,
    onPressOut: null,
    accessible: true,
    accessibilityRole: null,
    accessibilityHint: null,
    children: null,
  };
  items1 = [pressableStyles, tmp.headerRowTitle];
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
    const intl = tmp6(1233).intl;
    stringResult = intl.string(tmp8);
  }
  obj[6] = stringResult;
  obj = { style: tmp.header, children: null };
  let tmp22 = null;
  if (isFavoritesGuildIdResult) {
    obj1 = { style: null, size: "sm", color: null };
    obj1[0] = tmp.headerIcon;
    obj1[2] = tmp2(709).colors.MOBILE_TEXT_HEADING_PRIMARY;
    tmp22 = callback(tmp6(9195).StarIcon, obj1);
  }
  const items2 = [tmp22, , ,];
  const tmp16 = closure_8;
  const tmp6Result2 = guild(4197);
  items2[1] = callback(closure_4, {
    ref,
    collapsable: false,
    style: tmp.flex,
    children: callback(guild(4474).Text, {
      experimental_useNativeText: true,
      color: "mobile-text-heading-primary",
      variant: token,
      lineClamp: 1,
      children: favoritesAwareGuildName,
    }),
  });
  const obj3 = { guild, size: null, style: null };
  const obj2 = {
    ref,
    collapsable: false,
    style: tmp.flex,
    children: callback(guild(4474).Text, {
      experimental_useNativeText: true,
      color: "mobile-text-heading-primary",
      variant: token,
      lineClamp: 1,
      children: favoritesAwareGuildName,
    }),
  };
  obj3[1] = guild(1296).Icon.Sizes.REFRESH_SMALL_16;
  obj3[2] = tmp.guildBadge;
  items2[2] = callback(GuildBadgeV2Default, obj3);
  let tmp24Result = null;
  if (flag2) {
    const obj4 = { size: "xxs", color: null, style: null };
    obj4[1] = tmp2(709).colors.TEXT_SUBTLE;
    obj4[2] = tmp.chevron;
    tmp24Result = tmp24(tmp6(6011).ChevronSmallRightIcon, obj4);
  }
  items2[3] = tmp24Result;
  obj[1] = items2;
  const items3 = [closure_7(closure_4, obj)];
  let tmp15Result = null;
  if (null != tmp10) {
    tmp15Result = null;
    if (tmp10 > 0) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.subheader;
      const obj6 = {
        experimental_useNativeText: true,
        color: "text-muted",
        variant: null,
        lineClamp: 1,
        children: null,
      };
      obj6[2] = token1;
      const intl2 = tmp6(1233).intl;
      const obj7 = { count: null };
      obj7[0] = tmp10;
      obj6[4] = intl2.format(tmp6(1233).t.zRl6XR, obj7);
      const items4 = [tmp24(tmp6(4474).Text, obj6), ,];
      const obj8 = { style: null };
      obj8[0] = tmp.ellipse;
      items4[1] = tmp24(tmp21, obj8);
      const obj9 = {
        experimental_useNativeText: true,
        color: "text-muted",
        variant: null,
        lineClamp: 1,
        children: null,
      };
      obj9[2] = token1;
      const intl3 = tmp6(1233).intl;
      obj9[4] = intl3.string(tmp6(1233).t["1g9A/f"]);
      items4[2] = tmp24(tmp6(4474).Text, obj9);
      obj5[1] = items4;
      tmp15Result = tmp15(tmp21, obj5);
    }
  }
  items3[1] = tmp15Result;
  obj[7] = items3;
  const obj10 = { style: tmp.container, children: null };
  const items5 = [tmp.headerRow];
  let headerRowInset = null;
  tmp15Result = tmp15(tmp16, obj);
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp.headerRowInset;
  }
  const obj11 = { style: items5, children: null };
  items5[1] = headerRowInset;
  const items6 = [tmp15Result];
  tmp24Result = null;
  if (isFavoritesGuildIdResult) {
    tmp24Result = tmp24(tmp6(15970).FavoritesGuildHeaderActionButton, {});
  }
  items6[1] = tmp24Result;
  obj11[1] = items6;
  const items7 = [closure_7(closure_4, obj11), , , ,];
  let tmp24Result1 = null;
  if (flag) {
    const obj12 = { guild: null, useButtonComponent: true, useEventsButton: true };
    obj12[0] = guild;
    tmp24Result1 = tmp24(tmp2(12087), obj12);
  }
  items7[1] = tmp24Result1;
  if (tmp24Result2) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.joinButton;
    const obj14 = { guildId: null, joinSource: null };
    obj14[0] = guild.id;
    obj14[1] = JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER;
    obj13[1] = tmp24(tmp2(15975), obj14);
    tmp24Result2 = tmp24(tmp21, obj13);
  }
  items7[2] = tmp24Result2;
  items7[3] = callback(closure_4, { style: tmp.divider });
  let tmp24Result3 = null;
  if (flag3) {
    const obj16 = { targetRef: null, guild: null };
    obj16[0] = ref;
    obj16[1] = guild;
    tmp24Result3 = tmp24(tmp2(15976), obj16);
  }
  items7[4] = tmp24Result3;
  obj10[1] = items7;
  return closure_7(closure_4, obj10);
}
