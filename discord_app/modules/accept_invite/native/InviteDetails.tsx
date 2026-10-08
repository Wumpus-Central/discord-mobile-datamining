// === Module 12495: InviteDetails ===

// Module 12495 (InviteDetails)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ButtonGroup from "ButtonGroup" /* 5963 */;
import FastImageDefault from "FastImage" /* 6164 */;
import GuildBadgeDefault from "GuildBadge" /* 6167 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7417 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12497 */;
import InviteRolesListDefault from "InviteRolesList" /* 12498 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MultiAccountStore from "MultiAccountStore" /* 12144 */;
import UserRecord from "UserRecord" /* 1403 */;
import UserStore from "UserStore" /* 1389 */;

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
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_9, InviteStates: c10 } = Constants);
let closure_11 = fn(12496).INVITE_ROUTING_HUB_GUILD_ID;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5090);
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
obj2.featureIcon = { flexGrow: 0, marginRight: 8, opacity: fn(5974).DARK_1_LIGHT_04 };
obj2.memberInfo = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
obj2.rolesList = { marginTop: 8, marginBottom: 8, alignItems: "center" };
const size3 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj2.dotOnline = size3;
const size4 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.dotOffline = size4;
let obj4 = { flexGrow: 0, marginRight: 8, opacity: fn(5974).DARK_1_LIGHT_04 };
obj2.embedDetailsCard = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 8 };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteDestinationIcon(invite) {
  const cResult = invite(576).c(8);
  invite = invite.invite;
  const tmp2 = closure_15();
  const user = tmp2;
  if (cResult[0] === invite) {
    if (cResult[1] === tmp2.avatar) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] !== tmp3) {
      const tmp3Result = tmp3();
      cResult[3] = tmp3;
      cResult[4] = tmp3Result;
      let tmp4 = tmp3Result;
    } else {
      tmp4 = cResult[4];
    }
    if (cResult[5] === tmp2.avatarContainer) {
      if (cResult[6] === tmp4) {
        let tmp6 = cResult[7];
      }
      return tmp6;
    }
    let obj2 = { style: tmp2.avatarContainer, children: tmp4 };
    const tmp9 = closure_12(View, obj2);
    cResult[5] = tmp2.avatarContainer;
    cResult[6] = tmp4;
    cResult[7] = tmp9;
    tmp6 = tmp9;
  }
  function renderDestinationIcon() {
    if (obj.isGroupDMInvite(invite)) {
      if (null != invite.inviter) {
        let tmp10 = null;
        if (null != invite.inviter) {
          const obj2 = { avatarStyle: user.avatar, user: null, guildId: "Array", size: true };
          const tmp16 = new UserRecord(invite.inviter);
          obj2.user = tmp16;
          obj2.size = native.AvatarSizes.XLARGE;
          tmp10 = __initData(native.Avatar, obj2);
        }
        let tmp5 = tmp10;
      }
      return tmp5;
    }
    tmp5 = null;
    if (null != invite.guild) {
      const obj3 = { style: user.avatar, guild: invite.guild, size: GuildInviteIconDefault.Sizes.LARGE, textScale: 2 };
      tmp5 = __initData(GuildInviteIconDefault, obj3);
    }
    obj = InviteTypeUtils;
  }
  cResult[0] = invite;
  cResult[1] = tmp2.avatar;
  cResult[2] = renderDestinationIcon;
  tmp3 = renderDestinationIcon;
  let obj = invite(576);
}) : (function InviteDestinationIcon(invite) {
  invite = invite.invite;
  const tmp = closure_15();
  const obj = { style: tmp.avatarContainer, children: null };
  if (obj2.isGroupDMInvite(invite)) {
    if (null != invite.inviter) {
      let tmp2Result = null;
      if (null != invite.inviter) {
        const obj3 = { avatarStyle: tmp.avatar, user: null, guildId: "Array", size: true };
        const tmp14 = new UserRecord(invite.inviter);
        obj3.user = tmp14;
        obj3.size = native.AvatarSizes.XLARGE;
        tmp2Result = __initData(native.Avatar, obj3);
      }
      let tmp2Result2 = tmp2Result;
    }
    obj.children = tmp2Result2;
    return __initData(View, obj);
  }
  tmp2Result2 = null;
  if (null != invite.guild) {
    const obj4 = { style: tmp.avatar, guild: invite.guild, size: GuildInviteIconDefault.Sizes.LARGE, textScale: 2 };
    tmp2Result2 = __initData(GuildInviteIconDefault, obj4);
  }
  obj2 = InviteTypeUtils;
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteHeader(invite) {
  const cResult = c.c(14);
  invite = invite.invite;
  let guildNameContainer = closure_15();
  if (cResult[0] !== invite) {
    if (tmpResult.isGroupDMInvite(invite)) {
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
      guild = invite.guild;
      if (guild != null) {
        name = guild.name;
      }
    }
    cResult[0] = invite;
    cResult[1] = name;
    tmpResult = InviteTypeUtils;
  } else {
    if (!tmpResult2.isFriendInvite(invite)) {
      if (null == tmp4) {
        return null;
      } else {
        if (cResult[4] === invite.guild) {
          if (cResult[5] === guildNameContainer.featureIcon) {
            let tmp15 = cResult[6];
          }
          if (cResult[7] === guildNameContainer.guildNameText) {
            if (cResult[8] === tmp4) {
              let tmp19 = cResult[9];
            }
            if (cResult[10] === guildNameContainer.guildNameContainer) {
              if (cResult[11] === tmp15) {
              }
            }
            const obj2 = { style: guildNameContainer.guildNameContainer, children: null };
            const items = [tmp15, tmp19];
            obj2.children = items;
            const tmp25 = __initData2(View, obj2);
            guildNameContainer = guildNameContainer.guildNameContainer;
            cResult[10] = guildNameContainer;
            cResult[11] = tmp15;
            cResult[12] = tmp19;
            cResult[13] = tmp25;
          }
          const obj4 = { style: guildNameContainer.guildNameText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp4 };
          const tmp21 = __initData(Text_Text.Heading, obj4);
          cResult[7] = guildNameContainer.guildNameText;
          cResult[8] = tmp4;
          cResult[9] = tmp21;
          tmp19 = tmp21;
        }
        const obj5 = { guild: invite.guild, style: guildNameContainer.featureIcon, disableColor: true };
        const tmp18 = __initData(GuildBadgeDefault, obj5);
        cResult[4] = invite.guild;
        cResult[5] = guildNameContainer.featureIcon;
        cResult[6] = tmp18;
        tmp15 = tmp18;
      }
    } else if (cResult[2] !== invite.inviter) {
      const intl = util.intl;
      const obj7 = { username: UserUtilsDefault.getFormattedName(invite.inviter) };
      const formatToPlainStringResult = intl.formatToPlainString(util.t["4aF92R"], obj7);
      cResult[2] = invite.inviter;
      cResult[3] = formatToPlainStringResult;
    }
    tmpResult2 = InviteTypeUtils;
  }
}) : (function InviteHeader(invite) {
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
    guild = invite.guild;
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
    const items = [__initData(GuildBadgeDefault, obj6), ];
    const obj7 = { style: tmp.guildNameText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: name };
    items[1] = __initData(Text_Text.Heading, obj7);
    obj4.children = items;
    tmp9 = __initData2(View, obj4);
  }
  return tmp9;
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteJoinContext(isRegistration) {
  const cResult = c.c(28);
  ({ invite, isGuildMember } = isRegistration);
  const tmp4 = closure_15();
  if (obj2.isStreamInvite(invite)) {
    if (null != invite.target_user) {
      if (cResult[0] !== invite.target_user) {
        const userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(invite.target_user);
        cResult[0] = invite.target_user;
        cResult[1] = userAvatarSource;
      }
    }
  }
  let tmp6 = null;
  if (shouldShowInviter(invite, isGuildMember)) {
    tmp6 = null;
    if (null != invite.inviter) {
      if (cResult[2] !== invite.inviter) {
        const userAvatarSource1 = AvatarUtilsDefault.getUserAvatarSource(invite.inviter);
        cResult[2] = invite.inviter;
        cResult[3] = userAvatarSource1;
        let tmp7 = userAvatarSource1;
      } else {
        tmp7 = cResult[3];
      }
      tmp6 = tmp7;
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["3rE1P8"]);
    cResult[4] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[4];
  }
  obj2 = InviteTypeUtils;
  if (tmpResult.isFriendInvite(invite)) {
    if (cResult[5] !== invite.inviter) {
      const intl8 = util.intl;
      const obj5 = { username: UserUtilsDefault.getFormattedName(invite.inviter) };
      const formatResult = intl8.format(util.t.Quj7HX, obj5);
      cResult[5] = invite.inviter;
      cResult[6] = formatResult;
    }
  } else {
    if (tmpResult4.isGroupDMInvite(invite)) {
      if (null != invite.channel) {
        if (null != invite.inviter) {
          if (cResult[7] !== invite.inviter) {
            const intl7 = util.intl;
            const obj6 = { username: UserUtilsDefault.getFormattedName(invite.inviter) };
            const formatResult1 = intl7.format(util.t.Lu4h18, obj6);
            cResult[7] = invite.inviter;
            cResult[8] = formatResult1;
            let tmp35 = formatResult1;
          } else {
            tmp35 = cResult[8];
          }
          tmp14 = tmp35;
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = util.intl;
        const stringResult1 = intl6.string(util.t.OsdY8B);
        cResult[9] = stringResult1;
        let tmp33 = stringResult1;
      } else {
        tmp33 = cResult[9];
      }
      tmp14 = tmp33;
    } else {
      if (tmpResult5.isStreamInvite(invite)) {
        if (null != invite.target_user) {
          if (cResult[10] !== invite.target_user) {
            const intl5 = util.intl;
            const obj7 = { username: UserUtilsDefault.getFormattedName(invite.target_user) };
            const formatToPlainStringResult = intl5.formatToPlainString(util.t.x2L32Q, obj7);
            cResult[10] = invite.target_user;
            cResult[11] = formatToPlainStringResult;
            let tmp29 = formatToPlainStringResult;
          } else {
            tmp29 = cResult[11];
          }
          tmp14 = tmp29;
        }
      }
      let tmp17 = isGuildMember;
      if (isGuildMember) {
        tmp17 = invite.state !== constants2.ACCEPTED;
      }
      if (tmp17) {
        if (isRegistration.isRegistration) {
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult2 = intl4.string(util.t.jpwYbt);
            cResult[12] = stringResult2;
            let tmp27 = stringResult2;
          } else {
            tmp27 = cResult[12];
          }
          tmp14 = tmp27;
        } else {
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = util.intl;
            const stringResult3 = intl3.string(util.t["FDsl+J"]);
            cResult[13] = stringResult3;
            let tmp25 = stringResult3;
          } else {
            tmp25 = cResult[13];
          }
          tmp14 = tmp25;
        }
      } else {
        let tmp20 = shouldShowInviter(invite, isGuildMember);
        if (tmp20) {
          tmp20 = null != invite.inviter;
        }
        if (tmp20) {
          if (cResult[14] !== invite.inviter) {
            const intl2 = util.intl;
            const obj8 = { username: UserUtilsDefault.getFormattedName(invite.inviter) };
            const formatResult2 = intl2.format(util.t.spU2mI, obj8);
            cResult[14] = invite.inviter;
            cResult[15] = formatResult2;
            let tmp22 = formatResult2;
          } else {
            tmp22 = cResult[15];
          }
          tmp14 = tmp22;
        }
      }
      tmpResult5 = InviteTypeUtils;
    }
    if (cResult[16] === invite) {
      if (cResult[17] === tmp6) {
        if (cResult[18] === tmp4.inviterIcon) {
          if (cResult[19] === tmp4.inviterIconWrapper) {
            let tmp42 = cResult[20];
          }
          if (cResult[21] === tmp14) {
            if (cResult[22] === tmp4.inviteJoinText) {
              let tmp48 = cResult[23];
            }
            if (cResult[24] === tmp4.inviteJoinContainer) {
              if (cResult[25] === tmp42) {
                if (cResult[26] === tmp48) {
                  let tmp51 = cResult[27];
                }
                return tmp51;
              }
            }
            const obj10 = { style: tmp4.inviteJoinContainer, children: null };
            const items = [tmp42, tmp48];
            obj10.children = items;
            const tmp54 = __initData2(View, obj10);
            cResult[24] = tmp4.inviteJoinContainer;
            cResult[25] = tmp42;
            cResult[26] = tmp48;
            cResult[27] = tmp54;
            tmp51 = tmp54;
          }
          const obj12 = { style: tmp4.inviteJoinText, variant: "text-sm/normal", color: "text-default", children: tmp14 };
          const tmp50 = __initData(Text_Text.Text, obj12);
          cResult[21] = tmp14;
          cResult[22] = tmp4.inviteJoinText;
          cResult[23] = tmp50;
          tmp48 = tmp50;
        }
      }
    }
    let tmp44 = null;
    if (null != tmp6) {
      tmp44 = null;
      if (!tmpResult6.isFriendInvite(invite)) {
        const obj14 = { style: tmp4.inviterIconWrapper, children: null };
        const obj16 = { source: tmp6, style: tmp4.inviterIcon };
        obj14.children = __initData(FastImageDefault, obj16);
        tmp44 = __initData(View, obj14);
      }
      tmpResult6 = InviteTypeUtils;
    }
    cResult[16] = invite;
    cResult[17] = tmp6;
    cResult[18] = tmp4.inviterIcon;
    cResult[19] = tmp4.inviterIconWrapper;
    cResult[20] = tmp44;
    tmp42 = tmp44;
    tmpResult4 = InviteTypeUtils;
  }
  tmpResult = InviteTypeUtils;
}) : (function InviteJoinContext(invite) {
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
  const intl = invite(1126).intl;
  const stringResult = intl.string(invite(1126).t["3rE1P8"]);
  if (obj.isFriendInvite(invite)) {
    const intl7 = tmp3(1126).intl;
    let obj2 = { username: isGuildMember(4922).getFormattedName(invite.inviter) };
    let formatResult = intl7.format(tmp3(1126).t.Quj7HX, obj2);
    const obj11 = isGuildMember(4922);
  } else {
    if (tmp3Result.isGroupDMInvite(invite)) {
      if (null != invite.channel) {
        if (null != invite.inviter) {
          const intl6 = tmp3(1126).intl;
          let obj3 = { username: isGuildMember(4922).getFormattedName(invite.inviter) };
          let formatResult1 = intl6.format(tmp3(1126).t.Lu4h18, obj3);
          const obj9 = isGuildMember(4922);
        }
        formatResult = formatResult1;
      }
      const intl5 = tmp3(1126).intl;
      formatResult1 = intl5.string(tmp3(1126).t.OsdY8B);
    } else {
      if (tmp3Result3.isStreamInvite(invite)) {
        if (null != invite.target_user) {
          const intl4 = tmp3(1126).intl;
          const obj4 = { username: isGuildMember(4922).getFormattedName(invite.target_user) };
          formatResult = intl4.formatToPlainString(tmp3(1126).t.x2L32Q, obj4);
          const obj7 = isGuildMember(4922);
        }
      }
      let tmp7 = isGuildMember;
      if (isGuildMember) {
        tmp7 = invite.state !== constants2.ACCEPTED;
      }
      if (tmp7) {
        const intl3 = tmp3(1126).intl;
        const string = intl3.string;
        const t = tmp3(1126).t;
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
          const intl2 = tmp3(1126).intl;
          const obj6 = { username: isGuildMember(4922).getFormattedName(invite.inviter) };
          formatResult = intl2.format(tmp3(1126).t.spU2mI, obj6);
          const obj5 = isGuildMember(4922);
        }
      }
      tmp3Result3 = tmp3(7417);
    }
    tmp3Result = tmp3(7417);
  }
  const obj8 = { style: tmp.inviteJoinContainer, children: null };
  let tmp22 = null;
  if (null != memo) {
    tmp22 = null;
    if (!tmp3Result4.isFriendInvite(invite)) {
      const obj10 = { style: tmp.inviterIconWrapper, children: null };
      const obj12 = { source: memo, style: tmp.inviterIcon };
      obj10.children = closure_12(isGuildMember(6164), obj12);
      tmp22 = closure_12(View, obj10);
    }
    tmp3Result4 = tmp3(7417);
  }
  const items1 = [tmp22, closure_12(invite(5086).Text, { style: tmp.inviteJoinText, variant: "text-sm/normal", color: "text-default", children: formatResult })];
  obj8.children = items1;
  return closure_13(View, obj8);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteMemberCounts(arg0) {
  const cResult = c.c(13);
  ({ invite, isGuildMember } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] === invite) {
    if (cResult[1] === isGuildMember) {
      if (cResult[2] === tmp4) {
        let tmp5 = cResult[3];
        let tmp6 = cResult[4];
        let tmp7 = cResult[5];
        let tmp8 = cResult[6];
        let tmp9 = cResult[7];
      }
      const _Symbol = Symbol;
      if (tmp9 !== Symbol.for("react.early_return_sentinel")) {
        return tmp9;
      } else {
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp7) {
            }
          }
        }
        const obj2 = { style: tmp6, children: null };
        const items = [tmp7, tmp8];
        obj2.children = items;
        const tmp31 = __initData2(tmp5, obj2);
        cResult[8] = tmp5;
        cResult[9] = tmp6;
        cResult[10] = tmp7;
        cResult[11] = tmp8;
        cResult[12] = tmp31;
      }
    }
  }
  let num = invite.approximate_presence_count;
  if (num == null) {
    num = 0;
  }
  const obj3 = { onlineCount: num, memberCount: null };
  let num2 = invite.approximate_member_count;
  if (num2 == null) {
    num2 = 0;
  }
  obj3.memberCount = num2;
  let tmp11 = null;
  if (0 !== obj3.memberCount) {
    tmp11 = obj3;
  }
  let tmp12 = null;
  let tmp13;
  let tmp14;
  let memberInfo;
  let tmp16;
  if (null != tmp11) {
    tmp12 = null;
    if (!shouldShowInviter(invite, isGuildMember)) {
      let id;
      if (invite != null) {
        guild = invite.guild;
        if (guild != null) {
          id = guild.id;
        }
      }
      tmp12 = null;
      if (id !== closure_11) {
        let tmp23 = null;
        if (null != tmp11.onlineCount) {
          const obj4 = { children: null };
          const obj5 = { style: tmp4.dotOnline };
          const items1 = [__initData(View, obj5), ];
          const obj6 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl = util.intl;
          const obj7 = { membersOnline: tmp11.onlineCount };
          obj6.children = intl.format(util.t["LC+S+m"], obj7);
          items1[1] = __initData(Text_Text.Text, obj6);
          obj4.children = items1;
          tmp23 = __initData2(state, obj4);
        }
        let tmp24 = null;
        if (null != tmp11.memberCount) {
          const obj8 = { children: null };
          const obj9 = { style: tmp4.dotOffline };
          const items2 = [__initData(View, obj9), ];
          const obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl2 = util.intl;
          const obj11 = { count: tmp11.memberCount };
          obj10.children = intl2.format(util.t.zRl6XR, obj11);
          items2[1] = __initData(Text_Text.Text, obj10);
          obj8.children = items2;
          tmp24 = __initData2(state, obj8);
        }
        tmp13 = tmp24;
        tmp12 = forResult;
        tmp14 = tmp23;
        memberInfo = tmp4.memberInfo;
        tmp16 = View;
      }
    }
  }
  cResult[0] = invite;
  cResult[1] = isGuildMember;
  cResult[2] = tmp4;
  cResult[3] = tmp16;
  cResult[4] = memberInfo;
  cResult[5] = tmp14;
  cResult[6] = tmp13;
  cResult[7] = tmp12;
  tmp9 = tmp12;
  tmp8 = tmp13;
  tmp7 = tmp14;
  tmp6 = memberInfo;
  tmp5 = tmp16;
  forResult = Symbol.for("react.early_return_sentinel");
}) : (function InviteMemberCounts(invite) {
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
        guild = invite.guild;
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
          const items = [__initData(View, obj4), ];
          const obj5 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl = util.intl;
          const obj6 = { membersOnline: tmp2.onlineCount };
          obj5.children = intl.format(util.t["LC+S+m"], obj6);
          items[1] = __initData(Text_Text.Text, obj5);
          obj3.children = items;
          tmp17Result = __initData2(state, obj3);
        }
        const items1 = [tmp17Result, ];
        let tmp17Result3 = null;
        if (null != tmp2.memberCount) {
          const obj7 = { children: null };
          const obj8 = { style: tmp.dotOffline };
          const items2 = [__initData(View, obj8), ];
          const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl2 = util.intl;
          const obj10 = { count: tmp2.memberCount };
          obj9.children = intl2.format(util.t.zRl6XR, obj10);
          items2[1] = __initData(Text_Text.Text, obj9);
          obj7.children = items2;
          tmp17Result3 = __initData2(state, obj7);
        }
        items1[1] = tmp17Result3;
        obj2.children = items1;
        tmp17Result4 = __initData2(View, obj2);
      }
    }
  }
  return tmp17Result4;
});
const constants3 = { ACCEPT: 0, [0]: "ACCEPT", DECLINE: 1, [1]: "DECLINE" };
ReactCompilerGating = fn(558);
let obj5 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InviteDetails(invite) {
  const cResult = invite(onPressJoin[13]).c(43);
  invite = invite.invite;
  const isGuildMember = invite.isGuildMember;
  onPressJoin = invite.onPressJoin;
  const onPressClose = invite.onPressClose;
  const isRegistration = invite.isRegistration;
  const tmp4 = closure_15();
  const tmp5 = onPressClose(first.useState(), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  if (cResult[0] !== onPressJoin) {
    function handleAcceptInvitePress() {
      closure_5(constants.ACCEPT);
      onPressJoin();
    }
    cResult[0] = onPressJoin;
    cResult[1] = handleAcceptInvitePress;
    let tmp7 = handleAcceptInvitePress;
  } else {
    tmp7 = cResult[1];
  }
  MultiAccountStore = tmp7;
  if (cResult[2] === invite.code) {
    guild = invite.guild;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (cResult[3] === id) {
      if (cResult[4] === onPressClose) {
        let tmp10 = cResult[5];
      }
      const onPress2 = tmp10;
      if (cResult[6] === invite) {
        if (cResult[7] === isGuildMember) {
          if (cResult[8] === isRegistration) {
            let tmp12 = cResult[9];
          }
          const guild_scheduled_event = invite.guild_scheduled_event;
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [stateFromStores];
            class O {
              constructor() {
                return closure_8.getCurrentUser();
              }
            }
            cResult[10] = items;
            cResult[11] = O;
            let tmp16 = O;
            let tmp15 = items;
          } else {
            tmp15 = cResult[10];
            tmp16 = cResult[11];
          }
          stateFromStores = tmp(tmp2[24]).useStateFromStores(tmp15, tmp16);
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [MultiAccountStore];
            class Q {
              constructor() {
                return closure_6.getCanUseMultiAccountMobile();
              }
            }
            cResult[12] = items1;
            cResult[13] = Q;
            let tmp20 = Q;
            let tmp19 = items1;
          } else {
            tmp19 = cResult[12];
            tmp20 = cResult[13];
          }
          const tmpResult = tmp(tmp2[24]);
          const stateFromStores1 = tmp(tmp2[24]).useStateFromStores(tmp19, tmp20);
          if (cResult[14] === first) {
            if (cResult[15] === stateFromStores) {
              if (cResult[16] === tmp7) {
                if (cResult[17] === tmp10) {
                  if (cResult[18] === invite) {
                    if (cResult[19] === isGuildMember) {
                      if (cResult[20] === stateFromStores1) {
                        let tmp23 = cResult[21];
                      }
                      if (cResult[22] !== tmp12) {
                        class Q {
                          constructor() {
                            return closure_6.getCanUseMultiAccountMobile();
                          }
                        }
                        const merged = Object.assign(tmp12);
                        const tmp32 = closure_12(closure_17, {});
                        let obj3 = {};
                        const merged1 = Object.assign(tmp12);
                        const tmp37 = closure_12(closure_19, obj3);
                        const obj4 = {};
                        const merged2 = Object.assign(tmp12);
                        const tmp42 = closure_12(closure_18, obj4);
                        let obj5 = {};
                        const merged3 = Object.assign(tmp12);
                        const tmp47 = closure_12(closure_20, obj5);
                        cResult[22] = tmp12;
                        cResult[23] = tmp37;
                        cResult[24] = tmp42;
                        cResult[25] = tmp47;
                        cResult[26] = tmp32;
                        let tmp26 = tmp47;
                        let tmp25 = tmp42;
                        let tmp24 = tmp37;
                        let obj2 = {};
                      } else {
                        tmp24 = cResult[23];
                        tmp25 = cResult[24];
                        tmp26 = cResult[25];
                        class Q {
                          constructor() {
                            return closure_6.getCanUseMultiAccountMobile();
                          }
                        }
                      }
                      if (cResult[27] === invite) {
                        if (cResult[28] === tmp4.rolesList) {
                          let tmp48 = cResult[29];
                        }
                        if (cResult[30] === guild_scheduled_event) {
                          if (cResult[31] === tmp4.embedDetailsCard) {
                            let tmp51 = cResult[32];
                          }
                          if (cResult[33] !== tmp23) {
                            const tmp23Result = tmp23();
                            cResult[33] = tmp23;
                            class Q {
                              constructor() {
                                return closure_6.getCanUseMultiAccountMobile();
                              }
                            }
                            cResult[34] = tmp23Result;
                            let tmp57 = tmp23Result;
                          } else {
                            tmp57 = cResult[34];
                          }
                          if (cResult[35] === tmp24) {
                            if (cResult[36] === tmp25) {
                              if (cResult[37] === tmp26) {
                                if (cResult[38] === tmp48) {
                                  if (cResult[39] === tmp51) {
                                    if (cResult[40] === tmp57) {
                                      if (cResult[41] === tmp27) {
                                        let tmp59 = cResult[42];
                                      }
                                      return tmp59;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          class Q {
                            constructor() {
                              return closure_6.getCanUseMultiAccountMobile();
                            }
                          }
                          const obj6 = { children: null };
                          const items2 = [tmp27, tmp24, tmp25, tmp26, tmp48, tmp51, tmp57];
                          obj6.children = items2;
                          const tmp61 = closure_13(closure_14, obj6);
                          cResult[35] = tmp24;
                          cResult[36] = tmp25;
                          cResult[37] = tmp26;
                          cResult[38] = tmp48;
                          cResult[39] = tmp51;
                          cResult[40] = tmp57;
                          cResult[41] = tmp27;
                          cResult[42] = tmp61;
                          tmp59 = tmp61;
                        }
                        class Q {
                          constructor() {
                            return closure_6.getCanUseMultiAccountMobile();
                          }
                        }
                        if (tmp53) {
                          const obj7 = { style: null, children: null };
                          class Q {
                            constructor() {
                              return closure_6.getCanUseMultiAccountMobile();
                            }
                          }
                          const obj8 = { event: guild_scheduled_event };
                          const items3 = [closure_12(tmp(tmp2[28]).GuildEventCardHeader, obj8), , ];
                          const obj9 = { event: guild_scheduled_event };
                          items3[1] = closure_12(tmp(tmp2[28]).GuildEventCardMetaInfo, obj9);
                          const obj10 = { event: guild_scheduled_event };
                          items3[2] = closure_12(tmp(tmp2[28]).GuildEventCardGuildInfo, obj10);
                          obj7.children = items3;
                          tmp53 = closure_13(closure_5, obj7);
                        }
                        cResult[30] = guild_scheduled_event;
                        cResult[31] = tmp4.embedDetailsCard;
                        cResult[32] = tmp53;
                        tmp51 = tmp53;
                      }
                      class Q {
                        constructor() {
                          return closure_6.getCanUseMultiAccountMobile();
                        }
                      }
                      const obj11 = { invite, style: tmp4.rolesList };
                      const tmp50 = closure_12(isGuildMember(tmp2[27]), obj11);
                      cResult[27] = invite;
                      cResult[28] = tmp4.rolesList;
                      cResult[29] = tmp50;
                      tmp48 = tmp50;
                    }
                  }
                }
              }
            }
          }
          function renderButtons() {
            let tmp = isGuildMember;
            if (isGuildMember) {
              tmp = invite.state !== constants2.ACCEPTED;
            }
            let userAvatarSource = null;
            if (null != stateFromStores) {
              userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(stateFromStores, false, 20);
            }
            let tmp7;
            if (null != userAvatarSource) {
              const obj2 = { source: userAvatarSource, variant: "entity" };
              tmp7 = __initData(components_Button_Button.Button.Icon, obj2);
            }
            if (null != stateFromStores) {
              const intl = util.intl;
              const obj3 = {
                usernameHook() {
                    let str = "";
                    if (!stateFromStores.hasUniqueUsername()) {
                      const _HermesInternal = HermesInternal;
                      str = "#" + stateFromStores.discriminator;
                    }
                    return "" + stateFromStores.username + str;
                  }
              };
              const formatToPlainStringResult = intl.formatToPlainString(util.t["9sWQNT"], obj3);
            }
            const intl2 = util.intl;
            if (tmp) {
              const intl3 = util.intl;
              let stringResult = intl3.string(util.t.IRoQXr);
              let tmp19 = stringResult;
            } else {
              let tmp17 = stateFromStores1;
              if (stateFromStores1) {
                tmp17 = null != formatToPlainStringResult;
              }
              stringResult = formatToPlainStringResult;
              tmp19 = tmp16;
              if (tmp17) {
                stringResult = formatToPlainStringResult;
                tmp19 = formatToPlainStringResult;
              }
            }
            const items = [__initData(components_Button_Button.Button, { icon: tmp7, variant: "primary", size: "lg", text: tmp19, accessibilityLabel: stringResult, onPress, loading: first === constants.ACCEPT, disabled: first === constants.ACCEPT }), ];
            const intl4 = util.intl;
            const string = intl4.string;
            const t = util.t;
            if (tmp) {
              let stringResult1 = string(t.WAI6xu);
            } else {
              stringResult1 = string(t.ndsK4Z);
            }
            const obj5 = { children: null };
            items[1] = __initData(components_Button_Button.Button, { variant: "secondary", size: "lg", text: stringResult1, onPress: onPress2, loading: first === constants.DECLINE, disabled: first === constants.DECLINE });
            obj5.children = items;
            return __initData2(ButtonGroup.ButtonGroup, obj5);
          }
          cResult[14] = first;
          cResult[15] = stateFromStores;
          cResult[16] = tmp7;
          cResult[17] = tmp10;
          cResult[18] = invite;
          cResult[19] = isGuildMember;
          cResult[20] = stateFromStores1;
          cResult[21] = renderButtons;
          tmp23 = renderButtons;
          const tmpResult2 = tmp(tmp2[24]);
        }
      }
      tmp13[0] = invite;
      tmp13[1] = isGuildMember;
      tmp13[2] = isRegistration;
      cResult[6] = invite;
      cResult[7] = isGuildMember;
      cResult[8] = isRegistration;
      cResult[9] = tmp13;
      tmp12 = tmp13;
    }
  }
  ({ code: tmp3[2], guild: guild2 } = invite);
  let id1;
  if (guild2 != null) {
    id1 = guild2.id;
  }
  function handleCancelPress() {
    closure_5(constants.DECLINE);
    const obj2 = { invite_code: invite.code, guild_id: null };
    guild = invite.guild;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    obj2.guild_id = id;
    AnalyticsUtilsDefault.track(constants.INVITE_ACCEPT_DISMISSED, obj2);
    onPressClose();
  }
  cResult[3] = id1;
  cResult[4] = onPressClose;
  cResult[5] = handleCancelPress;
  tmp10 = handleCancelPress;
  let obj = invite(onPressJoin[13]);
}) : (function InviteDetails(invite) {
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
  const items2 = [closure_12(closure_17, {}), , , , , , ];
  const merged1 = Object.assign(obj);
  items2[1] = closure_12(closure_19, {});
  const merged2 = Object.assign(obj);
  items2[2] = closure_12(closure_18, {});
  const merged3 = Object.assign(obj);
  items2[3] = closure_12(closure_20, {});
  items2[4] = closure_12(InviteRolesListDefault, { invite, style: tmp.rolesList });
  let tmp8Result = null != guild_scheduled_event;
  if (tmp8Result) {
    const obj9 = { style: tmp.embedDetailsCard, children: null };
    const obj10 = { event: guild_scheduled_event };
    const items3 = [closure_12(tmp4(8506).GuildEventCardHeader, obj10), , ];
    const obj11 = { event: guild_scheduled_event };
    items3[1] = closure_12(tmp4(8506).GuildEventCardMetaInfo, obj11);
    const obj12 = { event: guild_scheduled_event };
    items3[2] = closure_12(tmp4(8506).GuildEventCardGuildInfo, obj12);
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
    tmp10Result = closure_12(tmp4(5375).Button.Icon, obj13);
  }
  if (null != stateFromStores) {
    const intl = tmp4(1126).intl;
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
    const formatToPlainStringResult = intl.formatToPlainString(tmp4(1126).t["9sWQNT"], obj14);
  }
  const intl2 = tmp4(1126).intl;
  if (isGuildMember) {
    const intl3 = tmp4(1126).intl;
    let stringResult = intl3.string(tmp4(1126).t.IRoQXr);
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
  const items4 = [closure_12(invite(5375).Button, { icon: tmp10Result, variant: "primary", size: "lg", text: tmp24, accessibilityLabel: stringResult, onPress: handleAcceptInvitePress, loading: tmp3 === constants3.ACCEPT, disabled: tmp3 === constants3.ACCEPT }), ];
  const intl4 = tmp4(1126).intl;
  const string = intl4.string;
  const t = tmp4(1126).t;
  if (isGuildMember) {
    let stringResult1 = string(t.WAI6xu);
  } else {
    stringResult1 = string(t.ndsK4Z);
  }
  const obj16 = { children: null };
  const obj17 = { children: null };
  items4[1] = closure_12(invite(5375).Button, {
    variant: "secondary",
    size: "lg",
    text: stringResult1,
    onPress: function handleCancelPress() {
      _undefined(constants.DECLINE);
      const obj2 = { invite_code: invite.code, guild_id: null };
      guild = invite.guild;
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
  items2[6] = closure_13(invite(5963).ButtonGroup, obj17);
  obj16.children = items2;
  return closure_13(closure_14, obj16);
});