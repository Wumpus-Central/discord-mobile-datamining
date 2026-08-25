// discord_app/modules/accept_invite/native/InviteDetails.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import nameFromUserDefault from "../../../utils/UserUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import InviteTypes from "../../instant_invite/InviteTypeUtils.tsx";
import getGuildBadgeSourceDefault from "../../guild/native/GuildBadge.tsx";
import renderDefault from "../../guild/native/GuildInviteIcon.tsx";
import InviteRolesListDefault from "InviteRolesList.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../multi_account/MultiAccountStore.tsx";
import closure_7 from "../../../records/UserRecord.tsx";
import closure_8 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import { INVITE_ROUTING_HUB_GUILD_ID as closure_11 } from "../../hub/HubConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function shouldShowInviter(invite, isGuildMember) {
  let tmp = null != invite.inviter;
  if (tmp) {
    let tmp2 = isGuildMember;
    if (isGuildMember) {
      tmp2 = invite.state !== constants.ACCEPTED;
    }
    tmp = !tmp2;
  }
  if (tmp) {
    let num = invite.approximate_presence_count;
    if (num == null) {
      num = 0;
    }
    const obj = { onlineCount: null, memberCount: null };
    obj[0] = num;
    let num2 = invite.approximate_member_count;
    if (num2 == null) {
      num2 = 0;
    }
    obj[1] = num2;
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
  const tmp = callback4();
  let obj = { style: items, children: null };
  items = [tmp.avatarContainer];
  if (obj2.isGroupDMInvite(invite)) {
    if (null != invite.inviter) {
      let tmp2Result = null;
      if (null != invite.inviter) {
        obj = { avatarStyle: null, user: null, guildId: "Array", size: null };
        obj[0] = tmp.avatar;
        const tmp14 = new closure_7(invite.inviter);
        obj[1] = tmp14;
        obj[3] = tmp4(1297).AvatarSizes.XLARGE;
        tmp2Result = tmp2(tmp4(1297).Avatar, obj);
      }
    }
    obj[1] = tmp2Result;
    return tmp2(View, obj);
  }
  tmp2Result = null;
  if (null != invite.guild) {
    obj = { style: null, guild: null, size: null, textScale: 2 };
    obj[0] = tmp.avatar;
    obj[1] = invite.guild;
    obj[2] = renderDefault.Sizes.LARGE;
    tmp2Result = tmp2(renderDefault, obj);
    const tmp9 = renderDefault;
  }
}
function InviteHeader(invite) {
  invite = invite.invite;
  const tmp = callback4();
  let obj = InviteTypes;
  if (obj.isGroupDMInvite(invite)) {
    const channel = invite.channel;
    let name;
    if (channel != null) {
      name = channel.name;
    }
    if (name == null) {
      obj1 = nameFromUserDefault;
      name = obj1.getFormattedName(invite.inviter);
    }
  } else {
    const guild = invite.guild;
    if (guild != null) {
      name = guild.name;
    }
  }
  if (tmp2Result.isFriendInvite(invite)) {
    const intl = tmp2(1236).intl;
    obj = { username: null };
    obj[0] = nameFromUserDefault.getFormattedName(invite.inviter);
    name = intl.formatToPlainString(tmp2(1236).t["4aF92R"], obj);
    const obj5 = nameFromUserDefault;
  }
  let tmp9 = null;
  if (null != name) {
    obj = { style: null, children: null };
    obj[0] = tmp.guildNameContainer;
    obj1 = { guild: null, style: null, disableColor: true };
    obj1[0] = invite.guild;
    obj1[1] = tmp.featureIcon;
    const items = [callback2(getGuildBadgeSourceDefault, obj1), ];
    const obj2 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.guildNameText;
    obj2[3] = name;
    items[1] = callback2(tmp2(4376).Heading, obj2);
    obj[1] = items;
    tmp9 = callback3(View, obj);
  }
  return tmp9;
}
function InviteJoinContext(invite) {
  invite = invite.invite;
  const isGuildMember = invite.isGuildMember;
  const tmp = callback4();
  const items = [invite, isGuildMember];
  const memo = React.useMemo(() => {
    if (obj.isStreamInvite(invite)) {
      if (null != tmp2.target_user) {
        let userAvatarSource = isGuildMember(tmp[19]).getUserAvatarSource(tmp2.target_user);
        const obj3 = isGuildMember(tmp[19]);
      }
      return userAvatarSource;
    }
    userAvatarSource = null;
    if (closure_1_16(invite, isGuildMember)) {
      userAvatarSource = null;
      if (null != tmp2.inviter) {
        userAvatarSource = isGuildMember(tmp[19]).getUserAvatarSource(tmp2.inviter);
        const obj2 = isGuildMember(tmp[19]);
      }
    }
  }, items);
  const intl = invite(1236).intl;
  let obj = invite(7339);
  if (obj.isFriendInvite(invite)) {
    const intl7 = tmp3(1236).intl;
    obj = { username: null };
    obj[0] = isGuildMember(4224).getFormattedName(invite.inviter);
    let formatResult = intl7.format(tmp3(1236).t.Quj7HX, obj);
    const obj11 = isGuildMember(4224);
  } else {
    let tmp3Result = tmp3(7339);
    if (tmp3Result.isGroupDMInvite(invite)) {
      if (null != invite.channel) {
        if (null != invite.inviter) {
          const intl6 = tmp3(1236).intl;
          obj = { username: null };
          obj[0] = isGuildMember(4224).getFormattedName(invite.inviter);
          let formatResult1 = intl6.format(tmp3(1236).t.Lu4h18, obj);
          const obj9 = isGuildMember(4224);
        }
        formatResult = formatResult1;
      }
      const intl5 = tmp3(1236).intl;
      formatResult1 = intl5.string(tmp3(1236).t.OsdY8B);
    } else {
      tmp3Result = tmp3(7339);
      if (tmp3Result.isStreamInvite(invite)) {
        if (null != invite.target_user) {
          const intl4 = tmp3(1236).intl;
          obj1 = { username: null };
          let obj6 = isGuildMember(4224);
          obj1[0] = obj6.getFormattedName(invite.target_user);
          formatResult = intl4.formatToPlainString(tmp3(1236).t.x2L32Q, obj1);
        }
      }
      let tmp7 = isGuildMember;
      if (isGuildMember) {
        tmp7 = invite.state !== constants.ACCEPTED;
      }
      if (tmp7) {
        const intl3 = tmp3(1236).intl;
        const string = intl3.string;
        const t = tmp3(1236).t;
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
          const intl2 = tmp3(1236).intl;
          let obj2 = { username: null };
          let obj4 = isGuildMember(4224);
          obj2[0] = obj4.getFormattedName(invite.inviter);
          formatResult = intl2.format(tmp3(1236).t.spU2mI, obj2);
        }
      }
    }
  }
  let obj3 = { style: tmp.inviteJoinContainer, children: null };
  let tmp22 = null;
  if (null != memo) {
    tmp22 = null;
    if (!tmp3Result1.isFriendInvite(invite)) {
      obj4 = { style: null, children: null };
      obj4[0] = tmp.inviterIconWrapper;
      const obj5 = { source: null, style: null };
      obj5[0] = memo;
      obj5[1] = tmp.inviterIcon;
      obj4[1] = callback2(isGuildMember(5374), obj5);
      tmp22 = callback2(tmp21, obj4);
    }
    tmp3Result1 = tmp3(7339);
  }
  const items1 = [tmp22, ];
  obj6 = { style: tmp.inviteJoinText, variant: "text-sm/normal", color: "text-default", children: formatResult };
  items1[1] = callback2(invite(4376).Text, obj6);
  obj3[1] = items1;
  return closure_13(View, obj3);
}
function InviteMemberCounts(invite) {
  invite = invite.invite;
  const tmp = callback4();
  let num = invite.approximate_presence_count;
  if (num == null) {
    num = 0;
  }
  let obj = { onlineCount: num, memberCount: null };
  let num2 = invite.approximate_member_count;
  if (num2 == null) {
    num2 = 0;
  }
  obj[1] = num2;
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
        obj = { style: null, children: null };
        obj[0] = tmp.memberInfo;
        let tmp17Result = null;
        if (null != tmp2.onlineCount) {
          obj = { children: null };
          obj1 = { style: null };
          obj1[0] = tmp.dotOnline;
          const items = [callback2(tmp18, obj1), ];
          const obj2 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl = getSystemLocale.intl;
          const obj3 = { membersOnline: null };
          obj3[0] = tmp2.onlineCount;
          obj2[2] = intl.format(getSystemLocale.t["LC+S+m"], obj3);
          items[1] = callback2(Text.Text, obj2);
          obj[0] = items;
          tmp17Result = tmp17(closure_14, obj);
        }
        const items1 = [tmp17Result, ];
        tmp17Result = null;
        if (null != tmp2.memberCount) {
          const obj4 = { children: null };
          const obj5 = { style: null };
          obj5[0] = tmp.dotOffline;
          const items2 = [callback2(tmp18, obj5), ];
          const obj6 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl2 = getSystemLocale.intl;
          const obj7 = { count: null };
          obj7[0] = tmp2.memberCount;
          obj6[2] = intl2.format(getSystemLocale.t.zRl6XR, obj7);
          items2[1] = callback2(Text.Text, obj6);
          obj4[0] = items2;
          tmp17Result = tmp17(closure_14, obj4);
        }
        items1[1] = tmp17Result;
        obj[1] = items1;
        tmp17Result1 = tmp17(tmp18, obj);
      }
    }
  }
  return tmp17Result1;
}
({ AnalyticEvents: c9, InviteStates: c10 } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { avatar: null, avatarContainer: null, inviteJoinContainer: null, inviteJoinText: null, inviterIconWrapper: null, inviterIcon: null, guildNameContainer: null, guildNameText: null, featureIcon: null, memberInfo: null, rolesList: null, dotOnline: null, dotOffline: null, embedDetailsCard: null };
createCacheKey = { height: 64, width: 64, margin: 0, borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.none, height: 64, width: 64, marginBottom: 24, marginTop: 24 };
createCacheKey[2] = { flexDirection: "row", alignItems: "flex-start", marginBottom: 8, marginLeft: 16, marginRight: 16 };
createCacheKey[3] = { textAlign: "center" };
let obj1 = { borderRadius: ThemesDefault.radii.none, height: 64, width: 64, marginBottom: 24, marginTop: 24 };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.none, marginRight: 8 };
let obj2 = { borderRadius: ThemesDefault.radii.none, marginRight: 8 };
createCacheKey[5] = { width: 20, height: 20, borderRadius: ThemesDefault.radii.md };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
createCacheKey[7] = { textAlign: "center" };
let obj3 = { width: 20, height: 20, borderRadius: ThemesDefault.radii.md };
createCacheKey[8] = { flexGrow: 0, marginRight: 8, opacity: require("result").DARK_1_LIGHT_04 };
createCacheKey[9] = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
createCacheKey[10] = { marginTop: 8, marginBottom: 8, alignItems: "center" };
let obj4 = { flexGrow: 0, marginRight: 8, opacity: require("result").DARK_1_LIGHT_04 };
createCacheKey[11] = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm, marginRight: 4, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
let obj5 = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm, marginRight: 4, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
createCacheKey[12] = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
let obj6 = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
createCacheKey[13] = { width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, borderRadius: ThemesDefault.radii.sm, marginTop: 16, marginBottom: 8 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let closure_21 = { ACCEPT: 0, [0]: "ACCEPT", DECLINE: 1, [1]: "DECLINE" };
let obj7 = { width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, borderRadius: ThemesDefault.radii.sm, marginTop: 16, marginBottom: 8 };
const result = require("set").fileFinishedImporting("modules/accept_invite/native/InviteDetails.tsx");

export default function InviteDetails(invite) {
  invite = invite.invite;
  ({ isGuildMember, onPressJoin: importDefault, onPressClose: dependencyMap } = invite);
  let callback;
  let stateFromStores;
  const tmp = callback4();
  [tmp3, c3] = callback(stateFromStores.useState(), 2);
  let obj = { invite, isGuildMember, isRegistration: invite.isRegistration };
  const guild_scheduled_event = invite.guild_scheduled_event;
  obj1 = invite(589);
  const items = [closure_8];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = invite(589);
  const items1 = [closure_6];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  obj = {};
  const merged = Object.assign(obj);
  const items2 = [callback2(InviteDestinationIcon, obj), , , , , , ];
  obj = {};
  const merged1 = Object.assign(obj);
  items2[1] = callback2(InviteJoinContext, obj);
  obj1 = {};
  const merged2 = Object.assign(obj);
  items2[2] = callback2(InviteHeader, obj1);
  obj2 = {};
  const merged3 = Object.assign(obj);
  items2[3] = callback2(InviteMemberCounts, obj2);
  items2[4] = callback2(InviteRolesListDefault, { invite, style: tmp.rolesList });
  let tmp8Result = null != guild_scheduled_event;
  if (tmp8Result) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.embedDetailsCard;
    const obj5 = { event: null };
    obj5[0] = guild_scheduled_event;
    const items3 = [tmp10(tmp4(9104).GuildEventCardHeader, obj5), , ];
    const obj6 = { event: null };
    obj6[0] = guild_scheduled_event;
    items3[1] = tmp10(tmp4(9104).GuildEventCardMetaInfo, obj6);
    const obj7 = { event: null };
    obj7[0] = guild_scheduled_event;
    items3[2] = tmp10(tmp4(9104).GuildEventCardGuildInfo, obj7);
    obj4[1] = items3;
    tmp8Result = tmp8(View, obj4);
  }
  items2[5] = tmp8Result;
  if (isGuildMember) {
    isGuildMember = invite.state !== constants.ACCEPTED;
  }
  let userAvatarSource = null;
  if (null != stateFromStores) {
    userAvatarSource = getAvatarURLDefault.getUserAvatarSource(stateFromStores, false, 20);
    const tmp15Result = getAvatarURLDefault;
  }
  let tmp10Result;
  if (null != userAvatarSource) {
    const obj8 = { source: null, variant: "entity" };
    obj8[0] = userAvatarSource;
    tmp10Result = tmp10(tmp4(4815).Button.Icon, obj8);
  }
  if (null != stateFromStores) {
    const intl = tmp4(1236).intl;
    const obj9 = { usernameHook: null };
    obj9[0] = function usernameHook() {
      let str = "";
      if (!stateFromStores.hasUniqueUsername()) {
        const _HermesInternal = HermesInternal;
        str = "#" + stateFromStores.discriminator;
      }
      return "" + stateFromStores.username + str;
    };
    const formatToPlainStringResult = intl.formatToPlainString(tmp4(1236).t["9sWQNT"], obj9);
  }
  const intl2 = tmp4(1236).intl;
  if (isGuildMember) {
    const intl3 = tmp4(1236).intl;
    let stringResult = intl3.string(tmp4(1236).t.IRoQXr);
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
    _undefined(closure_1_21.ACCEPT);
    callback();
  }
  const items4 = [callback2(invite(4815).Button, { icon: tmp10Result, variant: "primary", size: "lg", text: tmp24, accessibilityLabel: stringResult, onPress: handleAcceptInvitePress, loading: tmp3 === constants2.ACCEPT, disabled: tmp3 === constants2.ACCEPT }), ];
  const intl4 = tmp4(1236).intl;
  const string = intl4.string;
  const t = tmp4(1236).t;
  if (isGuildMember) {
    let stringResult1 = string(t.WAI6xu);
  } else {
    stringResult1 = string(t.ndsK4Z);
  }
  const obj11 = { children: null };
  const obj12 = { children: null };
  items4[1] = callback2(invite(4815).Button, {
    variant: "secondary",
    size: "lg",
    text: stringResult1,
    onPress: function handleCancelPress() {
      _undefined(closure_1_21.DECLINE);
      let obj = closure_1_1(closure_1_2[21]);
      obj = { invite_code: invite.code, guild_id: null };
      const guild = invite.guild;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj[1] = id;
      obj.track(closure_1_9.INVITE_ACCEPT_DISMISSED, obj);
      callback2();
    },
    loading: tmp3 === constants2.DECLINE,
    disabled: tmp3 === constants2.DECLINE
  });
  obj12[0] = items4;
  items2[6] = closure_13(invite(5257).ButtonGroup, obj12);
  obj11[0] = items2;
  return closure_13(closure_14, obj11);
};