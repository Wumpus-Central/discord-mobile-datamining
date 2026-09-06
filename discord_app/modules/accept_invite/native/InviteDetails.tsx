// discord_app/modules/accept_invite/native/InviteDetails.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildBadgeDefault from "../../guild/native/GuildBadge.tsx";
import InviteTypeUtils from "../../instant_invite/InviteTypeUtils.tsx";
import GuildInviteIconDefault from "../../guild/native/GuildInviteIcon.tsx";
import InviteRolesListDefault from "InviteRolesList.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import MultiAccountStore from "../../multi_account/MultiAccountStore.tsx";
import UserRecord from "../../../records/UserRecord.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function shouldShowInviter(invite, isGuildMember) {
  let tmp = null != invite.inviter;
  if (tmp) {
    let tmp2 = isGuildMember;
    if (isGuildMember) {
      tmp2 = invite.state !== constants2.ACCEPTED;
    }
    tmp = !tmp2;
  }
  if (tmp) {
    let num = invite.approximate_presence_count;
    if (num == null) {
      num = 0;
    }
    const obj = { onlineCount: num, memberCount: null };
    let num2 = invite.approximate_member_count;
    if (num2 == null) {
      num2 = 0;
    }
    obj.memberCount = num2;
    let tmp4 = null;
    if (0 !== obj.memberCount) {
      tmp4 = obj;
    }
    let num4;
    if (tmp4 != null) {
      num4 = tmp4.memberCount;
    }
    if (num4 == null) {
      num4 = 0;
    }
    tmp = num4 <= 100;
  }
  return tmp;
}
function InviteDestinationIcon(invite) {
  invite = invite.invite;
  const tmp = closure_15();
  let obj = { style: null, children: null };
  const items = [tmp.avatarContainer];
  obj.style = items;
  if (obj2.isGroupDMInvite(invite)) {
    if (null != invite.inviter) {
      let tmp2Result = null;
      if (null != invite.inviter) {
        obj = { avatarStyle: tmp.avatar, user: null, guildId: "Array", size: false };
        const tmp14 = new UserRecord(invite.inviter);
        obj.user = tmp14;
        obj.size = tmp4(1178).AvatarSizes.XLARGE;
        tmp2Result = tmp2(tmp4(1178).Avatar, obj);
      }
    }
    obj.children = tmp2Result;
    return tmp2(View, obj);
  }
  tmp2Result = null;
  if (null != invite.guild) {
    obj = { style: tmp.avatar, guild: invite.guild, size: GuildInviteIconDefault.Sizes.LARGE, textScale: 2 };
    tmp2Result = tmp2(GuildInviteIconDefault, obj);
  }
}
function InviteHeader(invite) {
  invite = invite.invite;
  const tmp = closure_15();
  let obj = InviteTypeUtils;
  if (obj.isGroupDMInvite(invite)) {
    const channel = invite.channel;
    let name;
    if (channel != null) {
      name = channel.name;
    }
    if (name == null) {
      let obj1 = UserUtilsDefault;
      name = obj1.getFormattedName(invite.inviter);
    }
  } else {
    const guild = invite.guild;
    if (guild != null) {
      name = guild.name;
    }
  }
  if (tmp2Result.isFriendInvite(invite)) {
    const intl = tmp2(1114).intl;
    obj = { username: UserUtilsDefault.getFormattedName(invite.inviter) };
    name = intl.formatToPlainString(tmp2(1114).t["4aF92R"], obj);
  }
  let tmp9 = null;
  if (null != name) {
    obj = { style: tmp.guildNameContainer, children: null };
    obj1 = { guild: invite.guild, style: tmp.featureIcon, disableColor: true };
    const items = [closure_1_12(GuildBadgeDefault, obj1)];
    const obj2 = {
      style: tmp.guildNameText,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: name,
    };
    items[1] = closure_1_12(tmp2(4556).Heading, obj2);
    obj.children = items;
    tmp9 = map1(View, obj);
  }
  return tmp9;
}
function InviteJoinContext(invite) {
  invite = invite.invite;
  const isGuildMember = invite.isGuildMember;
  const tmp = closure_15();
  const items = [invite, isGuildMember];
  const memo = noop.useMemo(() => {
    if (obj.isStreamInvite(invite)) {
      if (null != tmp2.target_user) {
        let userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(tmp2.target_user);
      }
      return userAvatarSource;
    }
    userAvatarSource = null;
    if (shouldShowInviter(invite, isGuildMember)) {
      userAvatarSource = null;
      if (null != tmp2.inviter) {
        userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(tmp2.inviter);
      }
    }
  }, items);
  const intl = invite(1114).intl;
  let obj = invite(7735);
  if (obj.isFriendInvite(invite)) {
    const intl7 = tmp3(1114).intl;
    obj = { username: isGuildMember(4404).getFormattedName(invite.inviter) };
    let formatResult = intl7.format(tmp3(1114).t.Quj7HX, obj);
    const obj11 = isGuildMember(4404);
  } else {
    let tmp3Result = tmp3(7735);
    if (tmp3Result.isGroupDMInvite(invite)) {
      if (null != invite.channel) {
        if (null != invite.inviter) {
          const intl6 = tmp3(1114).intl;
          obj = { username: isGuildMember(4404).getFormattedName(invite.inviter) };
          let formatResult1 = intl6.format(tmp3(1114).t.Lu4h18, obj);
          const obj9 = isGuildMember(4404);
        }
        formatResult = formatResult1;
      }
      const intl5 = tmp3(1114).intl;
      formatResult1 = intl5.string(tmp3(1114).t.OsdY8B);
    } else {
      tmp3Result = tmp3(7735);
      if (tmp3Result.isStreamInvite(invite)) {
        if (null != invite.target_user) {
          const intl4 = tmp3(1114).intl;
          const obj1 = { username: null };
          let obj6 = isGuildMember(4404);
          obj1.username = obj6.getFormattedName(invite.target_user);
          formatResult = intl4.formatToPlainString(tmp3(1114).t.x2L32Q, obj1);
        }
      }
      let tmp7 = isGuildMember;
      if (isGuildMember) {
        tmp7 = invite.state !== constants2.ACCEPTED;
      }
      if (tmp7) {
        const intl3 = tmp3(1114).intl;
        const string = intl3.string;
        const t = tmp3(1114).t;
        if (invite.isRegistration) {
          let stringResult1 = string(t.jpwYbt);
        } else {
          stringResult1 = string(t["FDsl+J"]);
        }
        formatResult = stringResult1;
      } else {
        let tmp10 = shouldShowInviter(invite, isGuildMember);
        if (tmp10) {
          tmp10 = null != invite.inviter;
        }
        formatResult = stringResult;
        if (tmp10) {
          const intl2 = tmp3(1114).intl;
          let obj2 = { username: null };
          let obj4 = isGuildMember(4404);
          obj2.username = obj4.getFormattedName(invite.inviter);
          formatResult = intl2.format(tmp3(1114).t.spU2mI, obj2);
        }
      }
    }
  }
  let obj3 = { style: tmp.inviteJoinContainer, children: null };
  let tmp22 = null;
  if (null != memo) {
    tmp22 = null;
    if (!tmp3Result1.isFriendInvite(invite)) {
      obj4 = { style: tmp.inviterIconWrapper, children: null };
      const obj5 = { source: memo, style: tmp.inviterIcon };
      obj4.children = closure_12(isGuildMember(5587), obj5);
      tmp22 = closure_12(tmp21, obj4);
    }
    tmp3Result1 = tmp3(7735);
  }
  const items1 = [tmp22];
  obj6 = { style: tmp.inviteJoinText, variant: "text-sm/normal", color: "text-default", children: formatResult };
  items1[1] = closure_12(invite(4556).Text, obj6);
  obj3.children = items1;
  return closure_13(View, obj3);
}
function InviteMemberCounts(invite) {
  invite = invite.invite;
  const tmp = closure_15();
  let num = invite.approximate_presence_count;
  if (num == null) {
    num = 0;
  }
  let obj = { onlineCount: num, memberCount: null };
  let num2 = invite.approximate_member_count;
  if (num2 == null) {
    num2 = 0;
  }
  obj.memberCount = num2;
  let tmp2 = null;
  if (0 !== obj.memberCount) {
    tmp2 = obj;
  }
  let tmp17Result1 = null;
  if (null != tmp2) {
    tmp17Result1 = null;
    if (!shouldShowInviter(invite, invite.isGuildMember)) {
      let id;
      if (invite != null) {
        const guild = invite.guild;
        if (guild != null) {
          id = guild.id;
        }
      }
      tmp17Result1 = null;
      if (id !== closure_11) {
        obj = { style: tmp.memberInfo, children: null };
        let tmp17Result = null;
        if (null != tmp2.onlineCount) {
          obj = { children: null };
          const obj1 = { style: tmp.dotOnline };
          const items = [closure_1_12(tmp18, obj1)];
          const obj2 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl = util.intl;
          const obj3 = { membersOnline: tmp2.onlineCount };
          obj2.children = intl.format(util.t["LC+S+m"], obj3);
          items[1] = closure_1_12(Text_Text.Text, obj2);
          obj.children = items;
          tmp17Result = tmp17(closure_1_14, obj);
        }
        const items1 = [tmp17Result];
        tmp17Result = null;
        if (null != tmp2.memberCount) {
          const obj4 = { children: null };
          const obj5 = { style: tmp.dotOffline };
          const items2 = [closure_1_12(tmp18, obj5)];
          const obj6 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl2 = util.intl;
          const obj7 = { count: tmp2.memberCount };
          obj6.children = intl2.format(util.t.zRl6XR, obj7);
          items2[1] = closure_1_12(Text_Text.Text, obj6);
          obj4.children = items2;
          tmp17Result = tmp17(closure_1_14, obj4);
        }
        items1[1] = tmp17Result;
        obj.children = items1;
        tmp17Result1 = tmp17(tmp18, obj);
      }
    }
  }
  return tmp17Result1;
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, InviteStates: c10 } = Constants);
let closure_11 = fn(12719).INVITE_ROUTING_HUB_GUILD_ID;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  avatar: null,
  avatarContainer: null,
  inviteJoinContainer: null,
  inviteJoinText: null,
  inviterIconWrapper: null,
  inviterIcon: null,
  guildNameContainer: null,
  guildNameText: null,
  featureIcon: null,
  memberInfo: null,
  rolesList: null,
  dotOnline: null,
  dotOffline: null,
  embedDetailsCard: null,
};
let size = { height: 64, width: 64, margin: 0, borderRadius: nativeDefault.radii.lg };
createStyles.avatar = size;
const size1 = { borderRadius: nativeDefault.radii.none, height: 64, width: 64, marginBottom: 24, marginTop: 24 };
createStyles.avatarContainer = size1;
createStyles.inviteJoinContainer = {
  flexDirection: "row",
  alignItems: "flex-start",
  marginBottom: 8,
  marginLeft: 16,
  marginRight: 16,
};
createStyles.inviteJoinText = { textAlign: "center" };
createStyles = { borderRadius: nativeDefault.radii.none, marginRight: 8 };
createStyles.inviterIconWrapper = createStyles;
const size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.md };
createStyles.inviterIcon = size2;
createStyles.guildNameContainer = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
createStyles.guildNameText = { textAlign: "center" };
createStyles.featureIcon = { flexGrow: 0, marginRight: 8, opacity: fn(5441).DARK_1_LIGHT_04 };
createStyles.memberInfo = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
createStyles.rolesList = { marginTop: 8, marginBottom: 8, alignItems: "center" };
const size3 = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 4,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
};
createStyles.dotOnline = size3;
const size4 = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 4,
  marginLeft: 16,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400,
};
createStyles.dotOffline = size4;
let obj1 = { flexGrow: 0, marginRight: 8, opacity: fn(5441).DARK_1_LIGHT_04 };
createStyles.embedDetailsCard = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: 16,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 16,
  marginBottom: 8,
};
let closure_15 = createStyles.createStyles(createStyles);
const constants3 = { ACCEPT: 0, [0]: "ACCEPT", DECLINE: 1, [1]: "DECLINE" };
size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteDetails.tsx");

export default function InviteDetails(invite) {
  invite = invite.invite;
  ({ isGuildMember, onPressJoin: importDefault, onPressClose: dependencyMap } = invite);
  _slicedToArray = undefined;
  let stateFromStores;
  const tmp = closure_15();
  [tmp3, c3] = _slicedToArray(stateFromStores.useState(), 2);
  let obj = { invite, isGuildMember, isRegistration: invite.isRegistration };
  const guild_scheduled_event = invite.guild_scheduled_event;
  let obj1 = invite(504);
  const items = [UserStore];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = invite(504);
  const items1 = [MultiAccountStore];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  obj = {};
  const merged = Object.assign(obj);
  const items2 = [closure_12(InviteDestinationIcon, obj), , , , , ,];
  obj = {};
  const merged1 = Object.assign(obj);
  items2[1] = closure_12(InviteJoinContext, obj);
  obj1 = {};
  const merged2 = Object.assign(obj);
  items2[2] = closure_12(InviteHeader, obj1);
  obj2 = {};
  const merged3 = Object.assign(obj);
  items2[3] = closure_12(InviteMemberCounts, obj2);
  items2[4] = closure_12(InviteRolesListDefault, { invite, style: tmp.rolesList });
  let tmp8Result = null != guild_scheduled_event;
  if (tmp8Result) {
    const obj4 = { style: tmp.embedDetailsCard, children: null };
    const obj5 = { event: guild_scheduled_event };
    const items3 = [tmp10(tmp4(9772).GuildEventCardHeader, obj5), ,];
    const obj6 = { event: guild_scheduled_event };
    items3[1] = tmp10(tmp4(9772).GuildEventCardMetaInfo, obj6);
    const obj7 = { event: guild_scheduled_event };
    items3[2] = tmp10(tmp4(9772).GuildEventCardGuildInfo, obj7);
    obj4.children = items3;
    tmp8Result = tmp8(View, obj4);
  }
  items2[5] = tmp8Result;
  if (isGuildMember) {
    isGuildMember = invite.state !== constants2.ACCEPTED;
  }
  let userAvatarSource = null;
  if (null != stateFromStores) {
    userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(stateFromStores, false, 20);
    const tmp15Result = AvatarUtilsDefault;
  }
  let tmp10Result;
  if (null != userAvatarSource) {
    const obj8 = { source: userAvatarSource, variant: "entity" };
    tmp10Result = tmp10(tmp4(4975).Button.Icon, obj8);
  }
  if (null != stateFromStores) {
    const intl = tmp4(1114).intl;
    const obj9 = {
      usernameHook() {
        let str = "";
        if (!stateFromStores.hasUniqueUsername()) {
          const _HermesInternal = HermesInternal;
          str = "#" + stateFromStores.discriminator;
        }
        return "" + stateFromStores.username + str;
      },
    };
    const formatToPlainStringResult = intl.formatToPlainString(tmp4(1114).t["9sWQNT"], obj9);
  }
  const intl2 = tmp4(1114).intl;
  if (isGuildMember) {
    const intl3 = tmp4(1114).intl;
    let stringResult = intl3.string(tmp4(1114).t.IRoQXr);
    let tmp24 = stringResult;
  } else {
    if (stateFromStores1) {
      stateFromStores1 = null != formatToPlainStringResult;
    }
    stringResult = formatToPlainStringResult;
    tmp24 = tmp22;
    if (stateFromStores1) {
      stringResult = formatToPlainStringResult;
      tmp24 = formatToPlainStringResult;
    }
  }
  function handleAcceptInvitePress() {
    _undefined(constants.ACCEPT);
    importDefault();
  }
  const items4 = [
    closure_12(invite(4975).Button, {
      icon: tmp10Result,
      variant: "primary",
      size: "lg",
      text: tmp24,
      accessibilityLabel: stringResult,
      onPress: handleAcceptInvitePress,
      loading: tmp3 === constants3.ACCEPT,
      disabled: tmp3 === constants3.ACCEPT,
    }),
  ];
  const intl4 = tmp4(1114).intl;
  const string = intl4.string;
  const t = tmp4(1114).t;
  if (isGuildMember) {
    let stringResult1 = string(t.WAI6xu);
  } else {
    stringResult1 = string(t.ndsK4Z);
  }
  const obj11 = { children: null };
  const obj12 = { children: null };
  items4[1] = closure_12(invite(4975).Button, {
    variant: "secondary",
    size: "lg",
    text: stringResult1,
    onPress: function handleCancelPress() {
      _undefined(constants.DECLINE);
      const obj = { invite_code: invite.code, guild_id: null };
      const guild = invite.guild;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj.guild_id = id;
      obj.track(constants.INVITE_ACCEPT_DISMISSED, obj);
      dependencyMap();
    },
    loading: tmp3 === constants3.DECLINE,
    disabled: tmp3 === constants3.DECLINE,
  });
  obj12.children = items4;
  items2[6] = closure_13(invite(5433).ButtonGroup, obj12);
  obj11.children = items2;
  return closure_13(closure_14, obj11);
}
