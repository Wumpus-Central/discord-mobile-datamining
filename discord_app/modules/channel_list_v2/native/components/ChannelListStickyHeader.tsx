// === Module 16265: ChannelListStickyHeader ===

// Module 16265 (ChannelListStickyHeader)
import nativeDefault from "native" /* 576 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 8880 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 14013 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 16234 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 16264 */;
import openFavoritesGuildActionSheetDefault from "openFavoritesGuildActionSheet" /* 16266 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4374 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const JoinGuildSources = fn(1074).JoinGuildSources;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(4638);
let closure_9 = createStyles.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const obj = { chevron: { flexShrink: 0, flexGrow: 0 }, container: null, divider: null, guildBadge: null, flex: null, header: null, headerRow: null, headerRowTitle: null, headerRowInset: null, headerIcon: null, subheader: null, ellipse: null, joinButton: null };
  const obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_16, paddingBottom: null, zIndex: 1 };
  let num = 0;
  if (!flag) {
    num = nativeDefault.space.PX_12;
  }
  obj2.paddingBottom = num;
  obj.container = obj2;
  obj.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 };
  obj.guildBadge = { margin: 0 };
  obj.flex = { flexShrink: 1 };
  const obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 };
  obj.header = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
  const obj4 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.headerRow = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  obj.headerRowTitle = { flexGrow: 1, flexShrink: 1 };
  const obj5 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  obj.headerRowInset = { paddingEnd: nativeDefault.space.PX_16 };
  const obj6 = { paddingEnd: nativeDefault.space.PX_16 };
  obj.headerIcon = { marginRight: nativeDefault.space.PX_4 };
  const obj7 = { marginRight: nativeDefault.space.PX_4 };
  obj.subheader = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const size = { width: 4, height: 4, backgroundColor: nativeDefault.colors.TEXT_SUBTLE, borderRadius: nativeDefault.radii.round };
  obj.ellipse = size;
  const obj8 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
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
  let tmp24Result7 = useIsGameCommunityServerPreviewDefault(guild.id);
  const ref = noop.useRef(null);
  const isFavoritesGuildIdResult = guild(1983).isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp6(1115).t;
  const items = [guild, isFavoritesGuildIdResult];
  const callback = noop.useCallback(() => {
    if (c1) {
      openFavoritesGuildActionSheetDefault();
    } else {
      openGuildActionSheetDefault(guild);
    }
  }, items);
  const tmp10 = useStickyServerHeaderSubtitleDefault(guild);
  const obj2 = guild(1983);
  const tmp8 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  const iOSPressEffects = guild(5696).useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const tmp6Result = guild(5696);
  const favoritesAwareGuildName = guild(1983).getFavoritesAwareGuildName(guild);
  const tmp6Result4 = guild(1983);
  const token = guild(4339).useToken(tmp2(576).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp6Result5 = guild(4339);
  const token1 = guild(4339).useToken(tmp2(576).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  const obj3 = { style: null, onPress: null, onPressIn: null, onPressOut: null, accessible: true, accessibilityRole: null, accessibilityHint: null, children: null };
  const items1 = [pressableStyles, tmp.headerRowTitle];
  obj3.style = items1;
  let tmp17;
  if (flag2) {
    tmp17 = callback;
  }
  obj3.onPress = tmp17;
  let tmp18;
  if (flag2) {
    tmp18 = onPressIn;
  }
  obj3.onPressIn = tmp18;
  let tmp19;
  if (flag2) {
    tmp19 = onPressOut;
  }
  obj3.onPressOut = tmp19;
  let str = "header";
  if (flag2) {
    str = "button";
  }
  obj3.accessibilityRole = str;
  let stringResult;
  if (flag2) {
    const intl = tmp6(1115).intl;
    stringResult = intl.string(tmp8);
  }
  obj3.accessibilityHint = stringResult;
  const obj4 = { style: tmp.header, children: null };
  let tmp22 = null;
  if (isFavoritesGuildIdResult) {
    const obj5 = { style: tmp.headerIcon, size: "sm", color: tmp2(576).colors.MOBILE_TEXT_HEADING_PRIMARY };
    tmp22 = closure_6(tmp6(10374).StarIcon, obj5);
  }
  const items2 = [tmp22, , , ];
  const tmp6Result6 = guild(4339);
  items2[1] = closure_6(closure_4, { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(4634).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) });
  const obj7 = { guild, size: null, style: null };
  const obj6 = { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(4634).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) };
  obj7.size = guild(1177).Icon.Sizes.REFRESH_SMALL_16;
  obj7.style = tmp.guildBadge;
  items2[2] = closure_6(GuildBadgeV2Default, obj7);
  let tmp24Result = null;
  if (flag2) {
    const obj8 = { size: "xxs", color: tmp2(576).colors.TEXT_SUBTLE, style: tmp.chevron };
    tmp24Result = closure_6(tmp6(7319).ChevronSmallRightIcon, obj8);
  }
  items2[3] = tmp24Result;
  obj4.children = items2;
  const items3 = [closure_7(closure_4, obj4), ];
  let tmp15Result = null;
  if (null != tmp10) {
    tmp15Result = null;
    if (tmp10 > 0) {
      const obj9 = { style: tmp.subheader, children: null };
      const obj10 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: null };
      const intl2 = tmp6(1115).intl;
      const obj11 = { count: tmp10 };
      obj10.children = intl2.format(tmp6(1115).t.zRl6XR, obj11);
      const items4 = [closure_6(tmp6(4634).Text, obj10), , ];
      const obj12 = { style: tmp.ellipse };
      items4[1] = closure_6(closure_4, obj12);
      const obj13 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: null };
      const intl3 = tmp6(1115).intl;
      obj13.children = intl3.string(tmp6(1115).t["1g9A/f"]);
      items4[2] = closure_6(tmp6(4634).Text, obj13);
      obj9.children = items4;
      tmp15Result = closure_7(closure_4, obj9);
    }
  }
  items3[1] = tmp15Result;
  obj3.children = items3;
  const obj14 = { style: tmp.container, children: null };
  const items5 = [tmp.headerRow, ];
  let headerRowInset = null;
  const tmp2Result = GuildBadgeV2Default;
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp.headerRowInset;
  }
  const obj15 = { style: items5, children: null };
  items5[1] = headerRowInset;
  const items6 = [closure_7(closure_8, obj3), ];
  let tmp24Result5 = null;
  if (isFavoritesGuildIdResult) {
    tmp24Result5 = closure_6(tmp6(16280).FavoritesGuildHeaderActionButton, {});
  }
  items6[1] = tmp24Result5;
  obj15.children = items6;
  const items7 = [closure_7(closure_4, obj15), , , , ];
  let tmp24Result6 = null;
  if (flag) {
    const obj16 = { guild, useButtonComponent: true, useEventsButton: true };
    tmp24Result6 = closure_6(tmp2(12440), obj16);
  }
  items7[1] = tmp24Result6;
  if (tmp24Result7) {
    const obj17 = { style: tmp.joinButton, children: null };
    const obj18 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    obj17.children = closure_6(tmp2(16285), obj18);
    tmp24Result7 = closure_6(closure_4, obj17);
  }
  items7[2] = tmp24Result7;
  items7[3] = closure_6(closure_4, { style: tmp.divider });
  let tmp24Result8 = null;
  if (flag3) {
    const obj20 = { targetRef: ref, guild };
    tmp24Result8 = closure_6(tmp2(16286), obj20);
  }
  items7[4] = tmp24Result8;
  obj14.children = items7;
  return closure_7(closure_4, obj14);
};