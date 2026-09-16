// === Module 12861: InviteDetails ===

// Module 12861 (InviteDetails)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UserUtilsDefault from "UserUtils" /* 4482 */;
import Text_Text from "Text/Text" /* 4634 */;
import GuildBadgeDefault from "GuildBadge" /* 5676 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7849 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12802 */;
import InviteRolesListDefault from "InviteRolesList" /* 12863 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MultiAccountStore from "MultiAccountStore" /* 12556 */;
import UserRecord from "UserRecord" /* 1386 */;
import UserStore from "UserStore" /* 1372 */;

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
  const obj = { style: null, children: null };
  const items = [tmp.avatarContainer];
  obj.style = items;
  if (obj2.isGroupDMInvite(invite)) {
    if (null != invite.inviter) {
      let tmp2Result = null;
      if (null != invite.inviter) {
        const obj3 = { avatarStyle: tmp.avatar, user: null, guildId: "Array", size: true };
        const tmp14 = new UserRecord(invite.inviter);
        obj3.user = tmp14;
        obj3.size = native.AvatarSizes.XLARGE;
        tmp2Result = closure_1_12(native.Avatar, obj3);
      }
      let tmp2Result2 = tmp2Result;
    }
    obj.children = tmp2Result2;
    return closure_1_12(View, obj);
  }
  tmp2Result2 = null;
  if (null != invite.guild) {
    const obj4 = { style: tmp.avatar, guild: invite.guild, size: GuildInviteIconDefault.Sizes.LARGE, textScale: 2 };
    tmp2Result2 = closure_1_12(GuildInviteIconDefault, obj4);
  }
  obj2 = InviteTypeUtils;
}
function InviteHeader(invite) {
  invite = invite.invite;
  const tmp = closure_15();
  if (obj.isGroupDMInvite(invite)) {
    const channel = invite.channel;
    let name1;
    if (channel != null) {
      name1 = channel.name;
    }
    if (name1 == null) {
      name1 = UserUtilsDefault.getFormattedName(invite.inviter);
    }
    let name = name1;
  } else {
    const guild = invite.guild;
    if (guild != null) {
      name = guild.name;
    }
  }
  obj = InviteTypeUtils;
  if (tmp2Result.isFriendInvite(invite)) {
    const intl = util.intl;
    const obj3 = { username: UserUtilsDefault.getFormattedName(invite.inviter) };
    name = intl.formatToPlainString(util.t["4aF92R"], obj3);
  }
  let tmp9 = null;
  if (null != name) {
    const obj4 = { style: tmp.guildNameContainer, children: null };
    const obj6 = { guild: invite.guild, style: tmp.featureIcon, disableColor: true };
    const items = [closure_1_12(GuildBadgeDefault, obj6), ];
    const obj7 = { style: tmp.guildNameText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: name };
    items[1] = closure_1_12(Text_Text.Heading, obj7);
    obj4.children = items;
    tmp9 = map1(View, obj4);
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
      if (null != invite.target_user) {
        let userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(invite.target_user);
      }
      return userAvatarSource;
    }
    userAvatarSource = null;
    if (shouldShowInviter(invite, isGuildMember)) {
      userAvatarSource = null;
      if (null != invite.inviter) {
        userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(invite.inviter);
      }
    }
    obj = InviteTypeUtils;
  }, items);
  const intl = invite(1115).intl;
  const stringResult = intl.string(invite(1115).t["3rE1P8"]);
  if (obj.isFriendInvite(invite)) {
    const intl7 = tmp3(1115).intl;
    let obj2 = { username: isGuildMember(4482).getFormattedName(invite.inviter) };
    let formatResult = intl7.format(tmp3(1115).t.Quj7HX, obj2);
    const obj11 = isGuildMember(4482);
  } else {
    if (tmp3Result.isGroupDMInvite(invite)) {
      if (null != invite.channel) {
        if (null != invite.inviter) {
          const intl6 = tmp3(1115).intl;
          let obj3 = { username: isGuildMember(4482).getFormattedName(invite.inviter) };
          let formatResult1 = intl6.format(tmp3(1115).t.Lu4h18, obj3);
          const obj9 = isGuildMember(4482);
        }
        formatResult = formatResult1;
      }
      const intl5 = tmp3(1115).intl;
      formatResult1 = intl5.string(tmp3(1115).t.OsdY8B);
    } else {
      if (tmp3Result3.isStreamInvite(invite)) {
        if (null != invite.target_user) {
          const intl4 = tmp3(1115).intl;
          const obj4 = { username: isGuildMember(4482).getFormattedName(invite.target_user) };
          formatResult = intl4.formatToPlainString(tmp3(1115).t.x2L32Q, obj4);
          const obj7 = isGuildMember(4482);
        }
      }
      let tmp7 = isGuildMember;
      if (isGuildMember) {
        tmp7 = invite.state !== constants2.ACCEPTED;
      }
      if (tmp7) {
        const intl3 = tmp3(1115).intl;
        const string = intl3.string;
        const t = tmp3(1115).t;
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
          const intl2 = tmp3(1115).intl;
          const obj6 = { username: isGuildMember(4482).getFormattedName(invite.inviter) };
          formatResult = intl2.format(tmp3(1115).t.spU2mI, obj6);
          const obj5 = isGuildMember(4482);
        }
      }
      tmp3Result3 = tmp3(7849);
    }
    tmp3Result = tmp3(7849);
  }
  const obj8 = { style: tmp.inviteJoinContainer, children: null };
  let tmp22 = null;
  if (null != memo) {
    tmp22 = null;
    if (!tmp3Result4.isFriendInvite(invite)) {
      const obj10 = { style: tmp.inviterIconWrapper, children: null };
      const obj12 = { source: memo, style: tmp.inviterIcon };
      obj10.children = closure_12(isGuildMember(5673), obj12);
      tmp22 = closure_12(View, obj10);
    }
    tmp3Result4 = tmp3(7849);
  }
  const items1 = [tmp22, closure_12(invite(4634).Text, { style: tmp.inviteJoinText, variant: "text-sm/normal", color: "text-default", children: formatResult })];
  obj8.children = items1;
  return closure_13(View, obj8);
}
function InviteMemberCounts(invite) {
  invite = invite.invite;
  const tmp = closure_15();
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
  let tmp2 = null;
  if (0 !== obj.memberCount) {
    tmp2 = obj;
  }
  let tmp17Result4 = null;
  if (null != tmp2) {
    tmp17Result4 = null;
    if (!shouldShowInviter(invite, invite.isGuildMember)) {
      let id;
      if (invite != null) {
        const guild = invite.guild;
        if (guild != null) {
          id = guild.id;
        }
      }
      tmp17Result4 = null;
      if (id !== closure_11) {
        const obj2 = { style: tmp.memberInfo, children: null };
        let tmp17Result = null;
        if (null != tmp2.onlineCount) {
          const obj3 = { children: null };
          const obj4 = { style: tmp.dotOnline };
          const items = [closure_1_12(View, obj4), ];
          const obj5 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl = util.intl;
          const obj6 = { membersOnline: tmp2.onlineCount };
          obj5.children = intl.format(util.t["LC+S+m"], obj6);
          items[1] = closure_1_12(Text_Text.Text, obj5);
          obj3.children = items;
          tmp17Result = map1(closure_1_14, obj3);
        }
        const items1 = [tmp17Result, ];
        let tmp17Result3 = null;
        if (null != tmp2.memberCount) {
          const obj7 = { children: null };
          const obj8 = { style: tmp.dotOffline };
          const items2 = [closure_1_12(View, obj8), ];
          const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl2 = util.intl;
          const obj10 = { count: tmp2.memberCount };
          obj9.children = intl2.format(util.t.zRl6XR, obj10);
          items2[1] = closure_1_12(Text_Text.Text, obj9);
          obj7.children = items2;
          tmp17Result3 = map1(closure_1_14, obj7);
        }
        items1[1] = tmp17Result3;
        obj2.children = items1;
        tmp17Result4 = map1(View, obj2);
      }
    }
  }
  return tmp17Result4;
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, InviteStates: c10 } = Constants);
let closure_11 = fn(12862).INVITE_ROUTING_HUB_GUILD_ID;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { avatar: null, avatarContainer: null, inviteJoinContainer: null, inviteJoinText: null, inviterIconWrapper: null, inviterIcon: null, guildNameContainer: null, guildNameText: null, featureIcon: null, memberInfo: null, rolesList: null, dotOnline: null, dotOffline: null, embedDetailsCard: null };
let size = { height: 64, width: 64, margin: 0, borderRadius: nativeDefault.radii.lg };
obj2.avatar = size;
const size1 = { borderRadius: nativeDefault.radii.none, height: 64, width: 64, marginBottom: 24, marginTop: 24 };
obj2.avatarContainer = size1;
obj2.inviteJoinContainer = { flexDirection: "row", alignItems: "flex-start", marginBottom: 8, marginLeft: 16, marginRight: 16 };
obj2.inviteJoinText = { textAlign: "center" };
obj2.inviterIconWrapper = { borderRadius: nativeDefault.radii.none, marginRight: 8 };
const size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.md };
obj2.inviterIcon = size2;
obj2.guildNameContainer = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
obj2.guildNameText = { textAlign: "center" };
let obj3 = { borderRadius: nativeDefault.radii.none, marginRight: 8 };
obj2.featureIcon = { flexGrow: 0, marginRight: 8, opacity: fn(5527).DARK_1_LIGHT_04 };
obj2.memberInfo = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
obj2.rolesList = { marginTop: 8, marginBottom: 8, alignItems: "center" };
const size3 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj2.dotOnline = size3;
const size4 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.dotOffline = size4;
let obj4 = { flexGrow: 0, marginRight: 8, opacity: fn(5527).DARK_1_LIGHT_04 };
obj2.embedDetailsCard = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 8 };
let closure_15 = createStyles.createStyles(obj2);
const constants3 = { ACCEPT: 0, [0]: "ACCEPT", DECLINE: 1, [1]: "DECLINE" };
size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteDetails.tsx");

export default function InviteDetails(invite) {
  invite = invite.invite;
  ({ isGuildMember, onPressJoin: importDefault, onPressClose: dependencyMap } = invite);
  _slicedToArray = undefined;
  let stateFromStores;
  const tmp = closure_15();
  [tmp3, c3] = stateFromStores.useState();
  const obj = { invite, isGuildMember, isRegistration: invite.isRegistration };
  const guild_scheduled_event = invite.guild_scheduled_event;
  const tmp2 = _slicedToArray(stateFromStores.useState(), 2);
  const items = [UserStore];
  stateFromStores = invite(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = invite(504);
  const items1 = [MultiAccountStore];
  let stateFromStores1 = invite(504).useStateFromStores(items1, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  const merged = Object.assign(obj);
  const items2 = [closure_12(InviteDestinationIcon, {}), , , , , , ];
  const merged1 = Object.assign(obj);
  items2[1] = closure_12(InviteJoinContext, {});
  const merged2 = Object.assign(obj);
  items2[2] = closure_12(InviteHeader, {});
  const merged3 = Object.assign(obj);
  items2[3] = closure_12(InviteMemberCounts, {});
  items2[4] = closure_12(InviteRolesListDefault, { invite, style: tmp.rolesList });
  let tmp8Result = null != guild_scheduled_event;
  if (tmp8Result) {
    const obj9 = { style: tmp.embedDetailsCard, children: null };
    const obj10 = { event: guild_scheduled_event };
    const items3 = [closure_12(tmp4(9912).GuildEventCardHeader, obj10), , ];
    const obj11 = { event: guild_scheduled_event };
    items3[1] = closure_12(tmp4(9912).GuildEventCardMetaInfo, obj11);
    const obj12 = { event: guild_scheduled_event };
    items3[2] = closure_12(tmp4(9912).GuildEventCardGuildInfo, obj12);
    obj9.children = items3;
    tmp8Result = closure_13(View, obj9);
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
    const obj13 = { source: userAvatarSource, variant: "entity" };
    tmp10Result = closure_12(tmp4(5060).Button.Icon, obj13);
  }
  if (null != stateFromStores) {
    const intl = tmp4(1115).intl;
    const obj14 = {
      usernameHook() {
          let str = "";
          if (!stateFromStores.hasUniqueUsername()) {
            const _HermesInternal = HermesInternal;
            str = "#" + stateFromStores.discriminator;
          }
          return "" + stateFromStores.username + str;
        }
    };
    const formatToPlainStringResult = intl.formatToPlainString(tmp4(1115).t["9sWQNT"], obj14);
  }
  const intl2 = tmp4(1115).intl;
  if (isGuildMember) {
    const intl3 = tmp4(1115).intl;
    let stringResult = intl3.string(tmp4(1115).t.IRoQXr);
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
  const items4 = [closure_12(invite(5060).Button, { icon: tmp10Result, variant: "primary", size: "lg", text: tmp24, accessibilityLabel: stringResult, onPress: handleAcceptInvitePress, loading: tmp3 === constants3.ACCEPT, disabled: tmp3 === constants3.ACCEPT }), ];
  const intl4 = tmp4(1115).intl;
  const string = intl4.string;
  const t = tmp4(1115).t;
  if (isGuildMember) {
    let stringResult1 = string(t.WAI6xu);
  } else {
    stringResult1 = string(t.ndsK4Z);
  }
  const obj16 = { children: null };
  const obj17 = { children: null };
  items4[1] = closure_12(invite(5060).Button, {
    variant: "secondary",
    size: "lg",
    text: stringResult1,
    onPress: function handleCancelPress() {
      _undefined(constants.DECLINE);
      const obj2 = { invite_code: invite.code, guild_id: null };
      const guild = invite.guild;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj2.guild_id = id;
      AnalyticsUtilsDefault.track(constants.INVITE_ACCEPT_DISMISSED, obj2);
      dependencyMap();
    },
    loading: tmp3 === constants3.DECLINE,
    disabled: tmp3 === constants3.DECLINE
  });
  obj17.children = items4;
  items2[6] = closure_13(invite(5519).ButtonGroup, obj17);
  obj16.children = items2;
  return closure_13(closure_14, obj16);
};