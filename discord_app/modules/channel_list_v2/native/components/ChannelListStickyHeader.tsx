// === Module 16135: ChannelListStickyHeader ===

// Module 16135 (ChannelListStickyHeader)
import nativeDefault from "native" /* 576 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 8740 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 13907 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 16104 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 16134 */;
import openFavoritesGuildActionSheetDefault from "openFavoritesGuildActionSheet" /* 16136 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const JoinGuildSources = fn(1074).JoinGuildSources;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let obj = { chevron: { flexShrink: 0, flexGrow: 0 }, container: null, divider: null, guildBadge: null, flex: null, header: null, headerRow: null, headerRowTitle: null, headerRowInset: null, headerIcon: null, subheader: null, ellipse: null, joinButton: null };
  obj = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_16, paddingBottom: null, zIndex: 1 };
  let num = 0;
  if (!flag) {
    num = nativeDefault.space.PX_12;
  }
  obj.paddingBottom = num;
  obj.container = obj;
  obj = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 };
  obj.divider = obj;
  obj.guildBadge = { margin: 0 };
  obj.flex = { flexShrink: 1 };
  obj.header = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
  const obj1 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.headerRow = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  obj.headerRowTitle = { flexGrow: 1, flexShrink: 1 };
  const obj2 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  obj.headerRowInset = { paddingEnd: nativeDefault.space.PX_16 };
  const obj3 = { paddingEnd: nativeDefault.space.PX_16 };
  obj.headerIcon = { marginRight: nativeDefault.space.PX_4 };
  const obj4 = { marginRight: nativeDefault.space.PX_4 };
  obj.subheader = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const size = { width: 4, height: 4, backgroundColor: nativeDefault.colors.TEXT_SUBTLE, borderRadius: nativeDefault.radii.round };
  obj.ellipse = size;
  const obj5 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  obj.joinButton = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

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
  const tmp = closure_9(flag);
  let tmp24Result2 = useIsGameCommunityServerPreviewDefault(guild.id);
  let obj = noop;
  const ref = noop.useRef(null);
  let obj1 = guild(1982);
  const isFavoritesGuildIdResult = obj1.isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp6(1114).t;
  const items = [guild, isFavoritesGuildIdResult];
  const callback = obj.useCallback(() => {
    if (c1) {
      openFavoritesGuildActionSheetDefault();
    } else {
      openGuildActionSheetDefault(guild);
    }
  }, items);
  const tmp10 = useStickyServerHeaderSubtitleDefault(guild);
  let tmp6Result = tmp6(5610);
  const iOSPressEffects = tmp6Result.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  tmp6Result = tmp6(1982);
  const favoritesAwareGuildName = tmp6Result.getFavoritesAwareGuildName(guild);
  const token = guild(4262).useToken(tmp2(576).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp6Result1 = guild(4262);
  const tmp8 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  const token1 = guild(4262).useToken(tmp2(576).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  obj = { style: null, onPress: null, onPressIn: null, onPressOut: null, accessible: true, accessibilityRole: null, accessibilityHint: null, children: null };
  const items1 = [pressableStyles, tmp.headerRowTitle];
  obj.style = items1;
  let tmp17;
  if (flag2) {
    tmp17 = callback;
  }
  obj.onPress = tmp17;
  let tmp18;
  if (flag2) {
    tmp18 = onPressIn;
  }
  obj.onPressIn = tmp18;
  let tmp19;
  if (flag2) {
    tmp19 = onPressOut;
  }
  obj.onPressOut = tmp19;
  let str = "header";
  if (flag2) {
    str = "button";
  }
  obj.accessibilityRole = str;
  let stringResult;
  if (flag2) {
    const intl = tmp6(1114).intl;
    stringResult = intl.string(tmp8);
  }
  obj.accessibilityHint = stringResult;
  obj = { style: tmp.header, children: null };
  let tmp22 = null;
  if (isFavoritesGuildIdResult) {
    obj1 = { style: tmp.headerIcon, size: "sm", color: tmp2(576).colors.MOBILE_TEXT_HEADING_PRIMARY };
    tmp22 = closure_6(tmp6(10235).StarIcon, obj1);
  }
  const items2 = [tmp22, , , ];
  const tmp6Result2 = guild(4262);
  items2[1] = closure_6(closure_4, { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(4556).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) });
  const obj3 = { guild, size: null, style: null };
  const obj2 = { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(4556).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) };
  obj3.size = guild(1178).Icon.Sizes.REFRESH_SMALL_16;
  obj3.style = tmp.guildBadge;
  items2[2] = closure_6(GuildBadgeV2Default, obj3);
  let tmp24Result = null;
  if (flag2) {
    const obj4 = { size: "xxs", color: tmp2(576).colors.TEXT_SUBTLE, style: tmp.chevron };
    tmp24Result = closure_6(tmp6(7209).ChevronSmallRightIcon, obj4);
  }
  items2[3] = tmp24Result;
  obj.children = items2;
  const items3 = [closure_7(closure_4, obj), ];
  let tmp15Result = null;
  if (null != tmp10) {
    tmp15Result = null;
    if (tmp10 > 0) {
      const obj5 = { style: tmp.subheader, children: null };
      const obj6 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: null };
      const intl2 = tmp6(1114).intl;
      const obj7 = { count: tmp10 };
      obj6.children = intl2.format(tmp6(1114).t.zRl6XR, obj7);
      const items4 = [closure_6(tmp6(4556).Text, obj6), , ];
      const obj8 = { style: tmp.ellipse };
      items4[1] = closure_6(closure_4, obj8);
      const obj9 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: null };
      const intl3 = tmp6(1114).intl;
      obj9.children = intl3.string(tmp6(1114).t["1g9A/f"]);
      items4[2] = closure_6(tmp6(4556).Text, obj9);
      obj5.children = items4;
      tmp15Result = closure_7(closure_4, obj5);
    }
  }
  items3[1] = tmp15Result;
  obj.children = items3;
  const obj10 = { style: tmp.container, children: null };
  const items5 = [tmp.headerRow, ];
  let headerRowInset = null;
  tmp15Result = closure_7(closure_8, obj);
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp.headerRowInset;
  }
  const obj11 = { style: items5, children: null };
  items5[1] = headerRowInset;
  const items6 = [tmp15Result, ];
  tmp24Result = null;
  if (isFavoritesGuildIdResult) {
    tmp24Result = closure_6(tmp6(16150).FavoritesGuildHeaderActionButton, {});
  }
  items6[1] = tmp24Result;
  obj11.children = items6;
  const items7 = [closure_7(closure_4, obj11), , , , ];
  let tmp24Result1 = null;
  if (flag) {
    const obj12 = { guild, useButtonComponent: true, useEventsButton: true };
    tmp24Result1 = closure_6(tmp2(12297), obj12);
  }
  items7[1] = tmp24Result1;
  if (tmp24Result2) {
    const obj13 = { style: tmp.joinButton, children: null };
    const obj14 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    obj13.children = closure_6(tmp2(16155), obj14);
    tmp24Result2 = closure_6(closure_4, obj13);
  }
  items7[2] = tmp24Result2;
  items7[3] = closure_6(closure_4, { style: tmp.divider });
  let tmp24Result3 = null;
  if (flag3) {
    const obj16 = { targetRef: ref, guild };
    tmp24Result3 = closure_6(tmp2(16156), obj16);
  }
  items7[4] = tmp24Result3;
  obj10.children = items7;
  return closure_7(closure_4, obj10);
};