// discord_app/modules/guild_profile/native/components/GuildProfileHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import BadgeCategory from "../../../guild_badge/BadgeCategory.tsx";
import GuildTraits from "../../../guild_badge/GuildTraits.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

require = fn;
const View = fn(17).View;
const getBadgeTooltip = fn(10105).getBadgeTooltip;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 },
  avatarBackground: null,
  members: null,
  memberCount: null,
  dot: null,
  dotOnline: null,
  established: null,
  nameRow: null,
  guildName: null,
  guildIcon: null,
};
let size = {
  width: 86,
  height: 86,
  borderRadius: 28.666666666666668,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
obj2.avatarBackground = size;
obj2.members = { display: "flex", flexDirection: "row", gap: 8 };
obj2.memberCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
const size1 = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
obj2.dot = size1;
const size2 = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj2.dotOnline = size2;
obj2.established = { display: "flex" };
obj2.nameRow = { marginTop: 4, display: "flex", flexDirection: "row", alignItems: "center" };
obj2.guildName = { flexShrink: 1 };
obj2.guildIcon = { marginLeft: 8, height: 24, width: 24 };
const styles = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileHeader.tsx");

export default function GuildProfileHeader(icon) {
  const profile = icon.profile;
  let id;
  let stateFromStores1;
  const tmp = styles();
  const items = [LocaleStore];
  const stateFromStores = profile(stateFromStores1[9]).useStateFromStores(items, () => locale.locale);
  let obj = profile(stateFromStores1[9]);
  let obj2 = profile(stateFromStores1[10]);
  let tmp5 = id;
  const establishedDate = obj2.getEstablishedDate(
    id(stateFromStores1[11]).extractTimestamp(profile.id),
    stateFromStores,
  );
  let obj3 = id(stateFromStores1[11]);
  const items1 = [profile];
  let obj4 = profile(stateFromStores1[12]);
  id = profile.id;
  const callback = noop.useCallback(() => {
    const fromGuildProfileResult = GuildRecordUtils.fromGuildProfile(profile);
    const guildTraits = GuildTraits.getGuildTraits(fromGuildProfileResult);
    ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(
      BadgeCategory.getBadgeCategory(guildTraits),
      guildTraits.visibility,
    ));
    if (!tmp5) {
      if (tooltipSubtitle == null) {
        tooltipSubtitle = tooltipTitle;
      }
      const obj5 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
      ToastActionCreatorsDefault.open(obj5);
    }
    const tmp4 = getBadgeTooltip(BadgeCategory.getBadgeCategory(guildTraits), guildTraits.visibility);
    tmp5 = null == tooltipTitle && null == tooltipSubtitle;
  }, items1);
  let fromGuildProfileResult = profile(stateFromStores1[12]).fromGuildProfile(profile);
  const items2 = [GuildMemberStore, AuthenticationStore];
  const items3 = [id];
  stateFromStores1 = profile(stateFromStores1[9]).useStateFromStores(
    items2,
    () => {
      const member = GuildMemberStore.getMember(id, AuthenticationStore.getId());
      let joinedAt;
      if (member != null) {
        joinedAt = member.joinedAt;
      }
      return null != joinedAt;
    },
    items3,
  );
  const items4 = [id, stateFromStores1];
  const obj6 = { style: tmp.header, children: null };
  const obj7 = { style: tmp.avatarBackground, children: null };
  const callback1 = noop.useCallback(() => {
    if (stateFromStores1) {
      const _HermesInternal = HermesInternal;
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + id);
      transitionToGuild.transitionToGuild(id);
    }
  }, items4);
  const obj8 = { icon: icon.guildIconSource, size: null, animate: true, value: null, selected: false };
  let obj5 = profile(stateFromStores1[9]);
  obj8.size = profile(stateFromStores1[18]).GuildIconSizes.XXLARGE;
  obj8.value = profile.name;
  obj7.children = closure_9(id(stateFromStores1[18]), obj8);
  const items5 = [closure_9(View, obj7), , ,];
  const obj9 = { style: tmp.nameRow, children: null };
  let tmp15;
  if (stateFromStores1) {
    tmp15 = callback1;
  }
  const items6 = [
    closure_9(profile(stateFromStores1[19]).Text, {
      onPress: tmp15,
      style: tmp.guildName,
      accessibilityRole: "header",
      variant: "heading-xl/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: profile.name,
    }),
  ];
  const obj11 = {
    onPress: callback,
    children: closure_9(tmp5(stateFromStores1[21]), { guild: fromGuildProfileResult, style: tmp.guildIcon }),
  };
  items6[1] = closure_9(profile(stateFromStores1[20]).PressableHighlight, obj11);
  obj9.children = items6;
  items5[1] = closure_10(View, obj9);
  const obj13 = { style: tmp.members, children: null };
  const obj14 = { style: tmp.memberCount, children: null };
  const items7 = [closure_9(View, { style: tmp.dotOnline })];
  const obj16 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = tmp2(tmp3[22]).intl;
  obj16.children = intl.format(profile(stateFromStores1[22]).t["LC+S+m"], { membersOnline: profile.onlineCount });
  items7[1] = closure_9(profile(stateFromStores1[19]).Text, obj16);
  obj14.children = items7;
  const items8 = [closure_10(View, obj14)];
  const obj18 = { style: tmp.memberCount, children: null };
  const items9 = [closure_9(View, { style: tmp.dot })];
  const obj20 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp2(tmp3[22]).intl;
  obj20.children = intl2.format(profile(stateFromStores1[22]).t.zRl6XR, { count: profile.memberCount });
  items9[1] = closure_9(profile(stateFromStores1[19]).Text, obj20);
  obj18.children = items9;
  items8[1] = closure_10(View, obj18);
  obj13.children = items8;
  items5[2] = closure_10(View, obj13);
  const obj22 = { style: tmp.established, children: null };
  const obj23 = { variant: "text-md/medium", color: "text-muted", children: null };
  const intl3 = tmp2(tmp3[22]).intl;
  obj23.children = intl3.format(profile(stateFromStores1[22]).t.zb2Q56, { createdAtDate: establishedDate });
  obj22.children = closure_9(profile(stateFromStores1[19]).Text, obj23);
  items5[3] = closure_9(View, obj22);
  obj6.children = items5;
  return closure_10(View, obj6);
}
export const useStyles = styles;
