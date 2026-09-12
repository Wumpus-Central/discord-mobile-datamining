// discord_app/modules/game_profile/native/components/GameProfileCommunity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileSection from "GameProfileSection.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import DisplayedInviteActionCreators from "../../../../actions/native/DisplayedInviteActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_8;
fn(4636);
let obj = {
  card: null,
  guildContent: null,
  guildHeaderRow: null,
  guildIcon: null,
  guildIconImage: null,
  guildIconLoading: null,
  guildInfo: null,
  guildNameDescriptionContainer: null,
  guildNameRow: null,
  memberCountsContainer: null,
  memberCountContainer: null,
  onlineEllipse: null,
  membersEllipse: null,
  skeletonGuildIcon: null,
  skeletonGuildInfo: null,
  skeletonGuildInfoSmall: null,
  skeletonGuildInfoLarge: null,
  skeletonGuildName: null,
  skeletonGuildDescription: null,
  skeletonMemberCounts: null,
};
obj = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj.card = obj;
const createStyles = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj.guildContent = createStyles;
obj.guildHeaderRow = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let size = {
  width: sum,
  height: sum,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: nativeDefault.space.PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginLeft: -nativeDefault.space.PX_4,
};
obj.guildIcon = size;
const size1 = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.none };
obj.guildIconImage = size1;
let obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.guildIconLoading = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.guildInfo = { flex: 1, gap: nativeDefault.space.PX_16 };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj.guildNameDescriptionContainer = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj.guildNameRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.memberCountsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.memberCountContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size2 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
};
obj.onlineEllipse = size2;
const size3 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_DEFAULT,
};
obj.membersEllipse = size3;
const size4 = {
  width: sum,
  height: sum,
  borderRadius: nativeDefault.radii.md,
  borderWidth: nativeDefault.space.PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj.skeletonGuildIcon = size4;
obj.skeletonGuildInfo = { flex: 1, justifyContent: "space-between", marginBottom: 2 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.skeletonGuildInfoSmall = { height: nativeDefault.space.PX_96 + 2 };
let obj9 = { height: nativeDefault.space.PX_96 + 2 };
obj.skeletonGuildInfoLarge = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_8 };
const size5 = { width: "60%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
obj.skeletonGuildName = size5;
const size6 = { width: "90%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
obj.skeletonGuildDescription = size6;
const size7 = { width: "55%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
obj.skeletonMemberCounts = size7;
let closure_7 = createStyles.createStyles(obj);
let closure_8 = noop.memo(() => {
  const tmp = closure_7();
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  let obj = { animationDelayMs: result, showViewAllSkeleton: false, skeletonTitleWidth: 80, children: null };
  obj = { style: tmp.card, children: null };
  obj = { animationDelayMs: result, style: tmp.guildContent, children: null };
  const obj1 = { style: tmp.guildHeaderRow, children: null };
  const items = [hasOwnProperty(GameProfileSkeletonDefault, { style: tmp.skeletonGuildIcon })];
  const items1 = [tmp.skeletonGuildInfo];
  const obj3 = { style: items1, children: null };
  items1[1] = useIsWindowLargeDefault() ? tmp.skeletonGuildInfoLarge : tmp.skeletonGuildInfoSmall;
  const items2 = [
    hasOwnProperty(GameProfileSkeletonDefault, { style: tmp.skeletonGuildName }),
    hasOwnProperty(GameProfileSkeletonDefault, { style: tmp.skeletonGuildDescription }),
    hasOwnProperty(GameProfileSkeletonDefault, { style: tmp.skeletonMemberCounts }),
  ];
  obj3.children = items2;
  items[1] = timestampProducer(View, obj3);
  obj1.children = items;
  const items3 = [timestampProducer(View, obj1), hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonButton, {})];
  obj.children = items3;
  obj.children = timestampProducer(GameProfileSkeleton.GameProfileSkeletonContainer, obj);
  obj.children = hasOwnProperty(View, obj);
  return hasOwnProperty(GameProfileSection.GameProfileSectionSkeleton, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(closeModal) {
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  let invite;
  const tmp = closure_7();
  const tmp4 = closeModal(invite[8])(game, closeModal.onInviteResolved);
  invite = tmp4.invite;
  const isMember = tmp4.isMember;
  let obj = trackAction(invite[8]);
  const items = [invite, isMember, trackAction, closeModal];
  const result = obj.hasGameProfileDiscordWebsite(game);
  if (null != invite) {
    if (null != invite.guild) {
      const fromInviteGuildResult = trackAction(tmp3[12]).fromInviteGuild(invite.guild);
      let approximate_member_count = invite.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = invite.guild.approximate_member_count;
      }
      let approximate_presence_count = invite.approximate_presence_count;
      if (approximate_presence_count == null) {
        approximate_presence_count = invite.guild.approximate_presence_count;
      }
      obj = { title: null, children: null };
      tmp2(tmp3[7]);
      const intl = trackAction(tmp3[13]).intl;
      obj.title = intl.string(trackAction(tmp3[13]).t["U2N+ci"]);
      obj = { style: tmp.card, children: null };
      const obj1 = { style: tmp.guildContent, children: null };
      const obj2 = { style: tmp.guildHeaderRow, children: null };
      const obj3 = { style: tmp.guildIcon, children: null };
      const obj4 = { guild: fromInviteGuildResult, size: null, style: null, loadingStyle: null };
      const tmp2Result = tmp2(tmp3[14]);
      obj4.size = trackAction(tmp3[14]).GuildIconSizes.LARGE;
      ({ guildIconImage: obj7.style, guildIconLoading: obj7.loadingStyle } = tmp);
      obj3.children = closure_5(tmp2Result, obj4);
      const items1 = [closure_5(View, obj3)];
      const obj5 = { style: tmp.guildInfo, children: null };
      const obj6 = { style: tmp.guildNameDescriptionContainer, children: null };
      const obj7 = { style: tmp.guildNameRow, children: null };
      const obj8 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        children: fromInviteGuildResult.name,
      };
      const items2 = [closure_5(trackAction(tmp3[15]).Text, obj8)];
      const obj9 = { guild: fromInviteGuildResult, size: null };
      const tmp5Result = trackAction(tmp3[12]);
      obj9.size = trackAction(tmp3[17]).Icon.Sizes.REFRESH_SMALL_16;
      items2[1] = closure_5(tmp2(tmp3[16]), obj9);
      obj7.children = items2;
      const items3 = [closure_6(View, obj7)];
      const obj10 = {
        variant: "text-sm/medium",
        color: "text-default",
        lineClamp: 2,
        children: fromInviteGuildResult.description,
      };
      items3[1] = closure_5(trackAction(tmp3[15]).Text, obj10);
      obj6.children = items3;
      const items4 = [closure_6(View, obj6)];
      const obj11 = { style: tmp.memberCountsContainer, children: null };
      let tmp11Result = null;
      if (null != approximate_presence_count) {
        const obj12 = { style: tmp.memberCountContainer, children: null };
        const obj13 = { style: tmp.onlineEllipse };
        const items5 = [closure_5(View, obj13)];
        const obj14 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl2 = trackAction(tmp3[13]).intl;
        const obj15 = { membersOnline: approximate_presence_count };
        obj14.children = intl2.formatToPlainString(trackAction(tmp3[13]).t["LC+S+m"], obj15);
        items5[1] = closure_5(trackAction(tmp3[15]).Text, obj14);
        obj12.children = items5;
        tmp11Result = closure_6(View, obj12);
      }
      const items6 = [tmp11Result];
      tmp11Result = null;
      if (null != approximate_member_count) {
        const obj16 = { style: tmp.memberCountContainer, children: null };
        const obj17 = { style: tmp.membersEllipse };
        const items7 = [closure_5(View, obj17)];
        const obj18 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl3 = trackAction(tmp3[13]).intl;
        const obj19 = { count: approximate_member_count };
        obj18.children = intl3.formatToPlainString(trackAction(tmp3[13]).t.zRl6XR, obj19);
        items7[1] = closure_5(trackAction(tmp3[15]).Text, obj18);
        obj16.children = items7;
        tmp11Result = closure_6(View, obj16);
      }
      items6[1] = tmp11Result;
      obj11.children = items6;
      items4[1] = closure_6(View, obj11);
      obj5.children = items4;
      items1[1] = closure_6(View, obj5);
      obj2.children = items1;
      const items8 = [closure_6(View, obj2)];
      const intl4 = trackAction(tmp3[13]).intl;
      const string = intl4.string;
      const t = trackAction(tmp3[13]).t;
      if (isMember) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      const obj20 = { variant: "secondary", size: "md", text: stringResult, onPress: tmp7 };
      items8[1] = closure_5(trackAction(tmp3[18]).Button, obj20);
      obj1.children = items8;
      obj.children = closure_6(View, obj1);
      obj.children = closure_5(View, obj);
      return closure_5(tmp2Result, obj);
    }
  }
  let tmp17 = null;
  if (result) {
    tmp17 = null;
    if (tmp4.isResolving) {
      tmp17 = closure_5(closure_8, {});
    }
  }
  return tmp17;
}
