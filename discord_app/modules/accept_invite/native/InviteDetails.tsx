// discord_app/modules/accept_invite/native/InviteDetails.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl9 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ButtonGroup2 from "../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import LegacyTokens from "../../../design/migrations/native/LegacyTokens.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import GuildBadgeDefault from "../../guild/native/GuildBadge.tsx";
import InviteTypeUtils from "../../instant_invite/InviteTypeUtils.tsx";
import HubConstants from "../../hub/HubConstants.tsx";
import GuildInviteIconDefault from "../../guild/native/GuildInviteIcon.tsx";
import InviteRolesListDefault from "InviteRolesList.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import MultiAccountStore_mod from "../../multi_account/MultiAccountStore.tsx";
import UserRecord from "../../../records/UserRecord.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let size2;
let size3;
let size4;
function shouldShowInviter(invite, isGuildMember) {
  let num2;
  let tmp = null != invite.inviter;
  if (tmp) {
    tmp = !(isGuildMember && invite.state !== constants2.ACCEPTED);
    const tmp2 = isGuildMember && invite.state !== constants2.ACCEPTED;
  }
  if (tmp) {
    let num = invite.approximate_presence_count;
    if (num == null) {
      num = 0;
    }
    const obj = { onlineCount: num, memberCount: num2 };
    num2 = invite.approximate_member_count;
    if (num2 == null) {
      num2 = 0;
    }
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
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
let MultiAccountStore = MultiAccountStore_mod;
({ AnalyticEvents: c9, InviteStates: c10 } = Constants);
let closure_11 = HubConstants.INVITE_ROUTING_HUB_GUILD_ID;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  avatar: size,
  avatarContainer: size1,
  inviteJoinContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  inviteJoinText: { textAlign: "center" },
  inviterIconWrapper: obj2,
  inviterIcon: size2,
  guildNameContainer: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  guildNameText: { textAlign: "center" },
  featureIcon: obj3,
  memberInfo: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  rolesList: { marginTop: 8, marginBottom: 8, alignItems: "center" },
  dotOnline: size3,
  dotOffline: size4,
  embedDetailsCard: obj4,
};
size = { height: 64, width: 64, margin: 0, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size1 = { borderRadius: nativeDefault.radii.none, height: 64, width: 64, marginBottom: 24, marginTop: 24 };
obj2 = { borderRadius: nativeDefault.radii.none, marginRight: 8 };
size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.md };
obj3 = { flexGrow: 0, marginRight: 8, opacity: LegacyTokens.DARK_1_LIGHT_04 };
size3 = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 4,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
};
size4 = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 4,
  marginLeft: 16,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400,
};
obj4 = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: 16,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 16,
  marginBottom: 8,
};
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (invite) => {
      let obj = invite(576);
      const cResult = obj.c(10);
      invite = invite.invite;
      const tmp2 = closure_15();
      const user = tmp2;
      if (cResult[0] === invite) {
        let tmp3;
        let tmp4;
        let tmp5;
        if (cResult[1] === tmp2.avatar) {
          tmp3 = cResult[2];
        }
        if (cResult[3] !== tmp2.avatarContainer) {
          const items = [tmp2.avatarContainer];
          cResult[3] = tmp2.avatarContainer;
          cResult[4] = items;
          tmp4 = items;
        } else {
          tmp4 = cResult[4];
        }
        if (cResult[5] !== tmp3) {
          const tmp3Result = tmp3();
          cResult[5] = tmp3;
          cResult[6] = tmp3Result;
          tmp5 = tmp3Result;
        } else {
          tmp5 = cResult[6];
        }
        if (cResult[7] === tmp4) {
          let tmp7;
          if (cResult[8] === tmp5) {
            tmp7 = cResult[9];
          }
          return tmp7;
        }
        let obj2 = { style: tmp4, children: tmp5 };
        let tmp10 = closure_12(View, obj2);
        cResult[7] = tmp4;
        cResult[8] = tmp5;
        cResult[9] = tmp10;
        tmp7 = tmp10;
      }
      const fn = function n() {
        let tmp14;
        let tmp5;
        const obj = InviteTypeUtils;
        if (obj.isGroupDMInvite(invite)) {
          if (null != invite.inviter) {
            let tmp10 = null;
            if (null != invite.inviter) {
              const self = this;
              const self2 = this;
              const obj2 = { avatarStyle: user.avatar, user: tmp14, guildId: "Array", size: native.AvatarSizes.XLARGE };
              const Avatar = native.Avatar;
              tmp14 = new UserRecord(invite.inviter);
              tmp10 = closure_12(Avatar, obj2);
            }
            tmp5 = tmp10;
          }
          return tmp5;
        }
        tmp5 = null;
        if (null != invite.guild) {
          const obj3 = {
            style: user.avatar,
            guild: invite.guild,
            size: GuildInviteIconDefault.Sizes.LARGE,
            textScale: 2,
          };
          const tmp8 = GuildInviteIconDefault;
          tmp5 = closure_12(tmp8, obj3);
        }
      };
      cResult[0] = invite;
      cResult[1] = tmp2.avatar;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : function (invite) {
      let items;
      let tmp12;
      let tmp2Result2;
      invite = invite.invite;
      const tmp = closure_15();
      const obj = { style: items, children: null };
      items = [tmp.avatarContainer];
      const obj2 = InviteTypeUtils;
      if (obj2.isGroupDMInvite(invite)) {
        if (null != invite.inviter) {
          let tmp2Result = null;
          if (null != invite.inviter) {
            const self = this;
            const self2 = this;
            const obj3 = { avatarStyle: tmp.avatar, user: tmp12, guildId: "Array", size: native.AvatarSizes.XLARGE };
            const Avatar = native.Avatar;
            tmp12 = new UserRecord(invite.inviter);
            tmp2Result = closure_12(Avatar, obj3);
          }
          tmp2Result2 = tmp2Result;
        }
        obj.children = tmp2Result2;
        return closure_12(View, obj);
      }
      tmp2Result2 = null;
      if (null != invite.guild) {
        const obj4 = { style: tmp.avatar, guild: invite.guild, size: GuildInviteIconDefault.Sizes.LARGE, textScale: 2 };
        const tmp9 = GuildInviteIconDefault;
        tmp2Result2 = closure_12(tmp9, obj4);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (invite) => {
      let items;
      let obj6;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(14);
      invite = invite.invite;
      const tmp4 = closure_15();
      if (cResult[0] !== invite) {
        let name;
        const tmpResult = InviteTypeUtils;
        if (tmpResult.isGroupDMInvite(invite)) {
          const channel = invite.channel;
          let name1;
          if (channel != null) {
            name1 = channel.name;
          }
          if (name1 == null) {
            const obj3 = UserUtilsDefault;
            name1 = obj3.getFormattedName(invite.inviter);
          }
          name = name1;
        } else {
          const guild = invite.guild;
          if (guild != null) {
            name = guild.name;
          }
        }
        cResult[0] = invite;
        cResult[1] = name;
        tmp5 = name;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult2 = InviteTypeUtils;
      if (tmpResult2.isFriendInvite(invite)) {
        let tmp10;
        if (cResult[2] !== invite.inviter) {
          const intl = intl9.intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj2 = { username: obj6.getFormattedName(invite.inviter) };
          const v4aF92R = intl9.t["4aF92R"];
          obj6 = UserUtilsDefault;
          const formatToPlainStringResult = formatToPlainString(v4aF92R, obj2);
          cResult[2] = invite.inviter;
          cResult[3] = formatToPlainStringResult;
          tmp10 = formatToPlainStringResult;
        } else {
          tmp10 = cResult[3];
        }
        tmp5 = tmp10;
      }
      let tmp14 = null;
      if (null != tmp5) {
        if (cResult[4] === invite.guild) {
          let tmp15;
          if (cResult[5] === tmp4.featureIcon) {
            tmp15 = cResult[6];
          }
          if (cResult[7] === tmp4.guildNameText) {
            let tmp19;
            if (cResult[8] === tmp5) {
              tmp19 = cResult[9];
            }
            if (cResult[10] === tmp4.guildNameContainer) {
              if (cResult[11] === tmp15) {
                let tmp22;
                if (cResult[12] === tmp19) {
                  tmp22 = cResult[13];
                }
                tmp14 = tmp22;
              }
            }
            const obj4 = { style: tmp4.guildNameContainer, children: items };
            items = [tmp15, tmp19];
            const tmp25 = map1(View, obj4);
            cResult[10] = tmp4.guildNameContainer;
            cResult[11] = tmp15;
            cResult[12] = tmp19;
            cResult[13] = tmp25;
            tmp22 = tmp25;
          }
          const obj5 = {
            style: tmp4.guildNameText,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: tmp5,
          };
          const tmp21 = closure_12(Text_Text.Heading, obj5);
          cResult[7] = tmp4.guildNameText;
          cResult[8] = tmp5;
          cResult[9] = tmp21;
          tmp19 = tmp21;
        }
        const obj7 = { guild: invite.guild, style: tmp4.featureIcon, disableColor: true };
        const tmp18 = closure_12(GuildBadgeDefault, obj7);
        cResult[4] = invite.guild;
        cResult[5] = tmp4.featureIcon;
        cResult[6] = tmp18;
        tmp15 = tmp18;
      }
      return tmp14;
    }
  : (invite) => {
      let items;
      let name;
      let obj5;
      invite = invite.invite;
      const tmp = closure_15();
      const obj = InviteTypeUtils;
      if (obj.isGroupDMInvite(invite)) {
        const channel = invite.channel;
        let name1;
        if (channel != null) {
          name1 = channel.name;
        }
        if (name1 == null) {
          const obj2 = UserUtilsDefault;
          name1 = obj2.getFormattedName(invite.inviter);
        }
        name = name1;
      } else {
        const guild = invite.guild;
        if (guild != null) {
          name = guild.name;
        }
      }
      const tmp2Result = InviteTypeUtils;
      if (tmp2Result.isFriendInvite(invite)) {
        const intl = intl9.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj3 = { username: obj5.getFormattedName(invite.inviter) };
        const v4aF92R = intl9.t["4aF92R"];
        obj5 = UserUtilsDefault;
        name = formatToPlainString(v4aF92R, obj3);
      }
      let tmp10 = null;
      if (null != name) {
        const obj4 = { style: tmp.guildNameContainer, children: items };
        const obj6 = { guild: invite.guild, style: tmp.featureIcon, disableColor: true };
        items = [closure_12(GuildBadgeDefault, obj6)];
        const obj7 = {
          style: tmp.guildNameText,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: name,
        };
        items[1] = closure_12(Text_Text.Heading, obj7);
        tmp10 = map1(View, obj4);
      }
      return tmp10;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isRegistration) => {
      let invite;
      let isGuildMember;
      let items;
      let obj11;
      let obj13;
      let obj15;
      let obj16;
      let obj9;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(28);
      ({ invite, isGuildMember } = isRegistration);
      isRegistration = isRegistration.isRegistration;
      const tmp4 = closure_15();
      const obj2 = InviteTypeUtils;
      if (obj2.isStreamInvite(invite)) {
        let tmp14;
        if (null != invite.target_user) {
          let tmp10;
          if (cResult[0] !== invite.target_user) {
            const obj4 = AvatarUtilsDefault;
            const userAvatarSource = obj4.getUserAvatarSource(invite.target_user);
            cResult[0] = invite.target_user;
            cResult[1] = userAvatarSource;
            tmp10 = userAvatarSource;
          } else {
            tmp10 = cResult[1];
          }
          tmp6 = tmp10;
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl9.intl;
          const stringResult = intl.string(intl9.t["3rE1P8"]);
          cResult[4] = stringResult;
          tmp14 = stringResult;
        } else {
          tmp14 = cResult[4];
        }
        const tmpResult = InviteTypeUtils;
        if (tmpResult.isFriendInvite(invite)) {
          let tmp38;
          if (cResult[5] !== invite.inviter) {
            const intl8 = intl9.intl;
            const format3 = intl8.format;
            const obj5 = { username: obj15.getFormattedName(invite.inviter) };
            const Quj7HX = intl9.t.Quj7HX;
            obj15 = UserUtilsDefault;
            const format3Result = format3(Quj7HX, obj5);
            cResult[5] = invite.inviter;
            cResult[6] = format3Result;
            tmp38 = format3Result;
          } else {
            tmp38 = cResult[6];
          }
          tmp14 = tmp38;
        } else {
          const tmpResult4 = InviteTypeUtils;
          if (tmpResult4.isGroupDMInvite(invite)) {
            let tmp33;
            if (null != invite.channel) {
              if (null != invite.inviter) {
                let tmp35;
                if (cResult[7] !== invite.inviter) {
                  const intl7 = intl9.intl;
                  const format2 = intl7.format;
                  const obj6 = { username: obj13.getFormattedName(invite.inviter) };
                  const Lu4h18 = intl9.t.Lu4h18;
                  obj13 = UserUtilsDefault;
                  const format2Result = format2(Lu4h18, obj6);
                  cResult[7] = invite.inviter;
                  cResult[8] = format2Result;
                  tmp35 = format2Result;
                } else {
                  tmp35 = cResult[8];
                }
                tmp14 = tmp35;
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const intl6 = intl9.intl;
              const stringResult1 = intl6.string(intl9.t.OsdY8B);
              cResult[9] = stringResult1;
              tmp33 = stringResult1;
            } else {
              tmp33 = cResult[9];
            }
            tmp14 = tmp33;
          } else {
            const tmpResult5 = InviteTypeUtils;
            if (tmpResult5.isStreamInvite(invite)) {
              if (null != invite.target_user) {
                let tmp29;
                if (cResult[10] !== invite.target_user) {
                  const intl5 = intl9.intl;
                  const formatToPlainString = intl5.formatToPlainString;
                  const obj7 = { username: obj11.getFormattedName(invite.target_user) };
                  const x2L32Q = intl9.t.x2L32Q;
                  obj11 = UserUtilsDefault;
                  const formatToPlainStringResult = formatToPlainString(x2L32Q, obj7);
                  cResult[10] = invite.target_user;
                  cResult[11] = formatToPlainStringResult;
                  tmp29 = formatToPlainStringResult;
                } else {
                  tmp29 = cResult[11];
                }
                tmp14 = tmp29;
              }
            }
            const tmp17 = isGuildMember && invite.state !== constants2.ACCEPTED;
            if (tmp17) {
              if (isRegistration) {
                let tmp27;
                const _Symbol3 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = intl9.intl;
                  const stringResult2 = intl4.string(intl9.t.jpwYbt);
                  cResult[12] = stringResult2;
                  tmp27 = stringResult2;
                } else {
                  tmp27 = cResult[12];
                }
                tmp14 = tmp27;
              } else {
                let tmp25;
                const _Symbol2 = Symbol;
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = intl9.intl;
                  const stringResult3 = intl3.string(intl9.t["FDsl+J"]);
                  cResult[13] = stringResult3;
                  tmp25 = stringResult3;
                } else {
                  tmp25 = cResult[13];
                }
                tmp14 = tmp25;
              }
            } else {
              const tmp20 = shouldShowInviter(invite, isGuildMember) && null != invite.inviter;
              if (tmp20) {
                let tmp22;
                if (cResult[14] !== invite.inviter) {
                  const intl2 = intl9.intl;
                  const format = intl2.format;
                  const obj8 = { username: obj9.getFormattedName(invite.inviter) };
                  const spU2mI = intl9.t.spU2mI;
                  obj9 = UserUtilsDefault;
                  const formatResult = format(spU2mI, obj8);
                  cResult[14] = invite.inviter;
                  cResult[15] = formatResult;
                  tmp22 = formatResult;
                } else {
                  tmp22 = cResult[15];
                }
                tmp14 = tmp22;
              }
            }
          }
        }
        if (cResult[16] === invite) {
          if (cResult[17] === tmp6) {
            if (cResult[18] === tmp4.inviterIcon) {
              let tmp41;
              if (cResult[19] === tmp4.inviterIconWrapper) {
                tmp41 = cResult[20];
              }
              if (cResult[21] === tmp14) {
                let tmp47;
                if (cResult[22] === tmp4.inviteJoinText) {
                  tmp47 = cResult[23];
                }
                if (cResult[24] === tmp4.inviteJoinContainer) {
                  if (cResult[25] === tmp41) {
                    let tmp50;
                    if (cResult[26] === tmp47) {
                      tmp50 = cResult[27];
                    }
                    return tmp50;
                  }
                }
                const obj10 = { style: tmp4.inviteJoinContainer, children: items };
                items = [tmp41, tmp47];
                const tmp53 = map1(View, obj10);
                cResult[24] = tmp4.inviteJoinContainer;
                cResult[25] = tmp41;
                cResult[26] = tmp47;
                cResult[27] = tmp53;
                tmp50 = tmp53;
              }
              const obj12 = {
                style: tmp4.inviteJoinText,
                variant: "text-sm/normal",
                color: "text-default",
                children: tmp14,
              };
              const tmp49 = closure_12(Text_Text.Text, obj12);
              cResult[21] = tmp14;
              cResult[22] = tmp4.inviteJoinText;
              cResult[23] = tmp49;
              tmp47 = tmp49;
            }
          }
        }
        let tmp43 = null;
        if (null != tmp6) {
          tmp43 = null;
          const tmpResult6 = InviteTypeUtils;
          if (!tmpResult6.isFriendInvite(invite)) {
            const obj14 = { style: tmp4.inviterIconWrapper, children: closure_12(FastImageDefault, obj16) };
            obj16 = { source: tmp6, style: tmp4.inviterIcon };
            tmp43 = closure_12(View, obj14);
          }
        }
        cResult[16] = invite;
        cResult[17] = tmp6;
        cResult[18] = tmp4.inviterIcon;
        cResult[19] = tmp4.inviterIconWrapper;
        cResult[20] = tmp43;
        tmp41 = tmp43;
      }
      tmp6 = null;
      if (shouldShowInviter(invite, isGuildMember)) {
        tmp6 = null;
        if (null != invite.inviter) {
          let tmp7;
          if (cResult[2] !== invite.inviter) {
            const obj3 = AvatarUtilsDefault;
            const userAvatarSource1 = obj3.getUserAvatarSource(invite.inviter);
            cResult[2] = invite.inviter;
            cResult[3] = userAvatarSource1;
            tmp7 = userAvatarSource1;
          } else {
            tmp7 = cResult[3];
          }
          tmp6 = tmp7;
        }
      }
    }
  : (invite) => {
      let format3Result;
      let items1;
      let obj11;
      let obj12;
      let obj5;
      let obj7;
      let obj9;
      invite = invite.invite;
      const isGuildMember = invite.isGuildMember;
      const isRegistration = invite.isRegistration;
      const tmp = closure_15();
      const items = [invite, isGuildMember];
      const memo = react.useMemo(() => {
        let userAvatarSource;
        const obj = InviteTypeUtils;
        if (obj.isStreamInvite(invite)) {
          if (null != invite.target_user) {
            const obj3 = AvatarUtilsDefault;
            userAvatarSource = obj3.getUserAvatarSource(invite.target_user);
          }
          return userAvatarSource;
        }
        userAvatarSource = null;
        if (shouldShowInviter(invite, isGuildMember)) {
          userAvatarSource = null;
          if (null != invite.inviter) {
            const obj2 = AvatarUtilsDefault;
            userAvatarSource = obj2.getUserAvatarSource(invite.inviter);
          }
        }
      }, items);
      const intl = invite(1126).intl;
      const stringResult = intl.string(invite(1126).t["3rE1P8"]);
      let obj = invite(7225);
      if (obj.isFriendInvite(invite)) {
        const intl7 = tmp3(1126).intl;
        const format3 = intl7.format;
        let obj2 = { username: obj11.getFormattedName(invite.inviter) };
        const Quj7HX = tmp3(1126).t.Quj7HX;
        obj11 = isGuildMember(4722);
        format3Result = format3(Quj7HX, obj2);
      } else {
        const tmp3Result = invite(7225);
        if (tmp3Result.isGroupDMInvite(invite)) {
          if (null != invite.channel) {
            let format2Result;
            if (null != invite.inviter) {
              const intl6 = tmp3(1126).intl;
              const format2 = intl6.format;
              let obj3 = { username: obj9.getFormattedName(invite.inviter) };
              const Lu4h18 = tmp3(1126).t.Lu4h18;
              obj9 = isGuildMember(4722);
              format2Result = format2(Lu4h18, obj3);
            }
            format3Result = format2Result;
          }
          const intl5 = tmp3(1126).intl;
          format2Result = intl5.string(tmp3(1126).t.OsdY8B);
        } else {
          const tmp3Result3 = invite(7225);
          if (tmp3Result3.isStreamInvite(invite)) {
            if (null != invite.target_user) {
              const intl4 = tmp3(1126).intl;
              const formatToPlainString = intl4.formatToPlainString;
              const obj4 = { username: obj7.getFormattedName(invite.target_user) };
              const x2L32Q = tmp3(1126).t.x2L32Q;
              obj7 = isGuildMember(4722);
              format3Result = formatToPlainString(x2L32Q, obj4);
            }
          }
          const tmp7 = isGuildMember && invite.state !== constants2.ACCEPTED;
          if (tmp7) {
            let stringResult1;
            const intl3 = tmp3(1126).intl;
            const string = intl3.string;
            const t = tmp3(1126).t;
            if (isRegistration) {
              stringResult1 = string(t.jpwYbt);
            } else {
              stringResult1 = string(t["FDsl+J"]);
            }
            format3Result = stringResult1;
          } else {
            format3Result = stringResult;
            const tmp10 = shouldShowInviter(invite, isGuildMember) && null != invite.inviter;
            if (tmp10) {
              const intl2 = tmp3(1126).intl;
              const format = intl2.format;
              const obj6 = { username: obj5.getFormattedName(invite.inviter) };
              const spU2mI = tmp3(1126).t.spU2mI;
              obj5 = isGuildMember(4722);
              format3Result = format(spU2mI, obj6);
            }
          }
        }
      }
      let tmp22 = null;
      const obj8 = { style: tmp.inviteJoinContainer, children: items1 };
      if (null != memo) {
        tmp22 = null;
        const tmp3Result4 = invite(7225);
        if (!tmp3Result4.isFriendInvite(invite)) {
          const obj10 = { style: tmp.inviterIconWrapper, children: closure_12(isGuildMember(5974), obj12) };
          obj12 = { source: memo, style: tmp.inviterIcon };
          tmp22 = closure_12(View, obj10);
        }
      }
      items1 = [tmp22];
      const obj13 = {
        style: tmp.inviteJoinText,
        variant: "text-sm/normal",
        color: "text-default",
        children: format3Result,
      };
      items1[1] = closure_12(invite(4886).Text, obj13);
      return closure_13(View, obj8);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl;
      let intl2;
      let invite;
      let isGuildMember;
      let items;
      let items1;
      let items2;
      let num2;
      let obj11;
      let obj7;
      const obj = react2;
      const cResult = obj.c(13);
      ({ invite, isGuildMember } = arg0);
      const tmp4 = closure_15();
      if (cResult[0] === invite) {
        if (cResult[1] === isGuildMember) {
          let tmp5;
          let tmp6;
          let tmp7;
          let tmp8;
          let tmp9;
          if (cResult[2] === tmp4) {
            tmp5 = cResult[3];
            tmp6 = cResult[4];
            tmp7 = cResult[5];
            tmp8 = cResult[6];
            tmp9 = cResult[7];
          }
          const _Symbol = Symbol;
          if (tmp9 === Symbol.for("react.early_return_sentinel")) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === tmp6) {
                if (cResult[10] === tmp7) {
                  let tmp29;
                  if (cResult[11] === tmp8) {
                    tmp29 = cResult[12];
                  }
                  tmp9 = tmp29;
                }
              }
            }
            const obj2 = { style: tmp6, children: items };
            items = [tmp7, tmp8];
            const tmp31 = map1(tmp5, obj2);
            cResult[8] = tmp5;
            cResult[9] = tmp6;
            cResult[10] = tmp7;
            cResult[11] = tmp8;
            cResult[12] = tmp31;
            tmp29 = tmp31;
          }
          return tmp9;
        }
      }
      let num = invite.approximate_presence_count;
      const forResult = Symbol.for("react.early_return_sentinel");
      if (num == null) {
        num = 0;
      }
      const obj3 = { onlineCount: num, memberCount: num2 };
      num2 = invite.approximate_member_count;
      if (num2 == null) {
        num2 = 0;
      }
      let tmp11 = null;
      if (0 !== obj3.memberCount) {
        tmp11 = obj3;
      }
      let tmp12 = null;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      if (null != tmp11) {
        tmp12 = null;
        if (!shouldShowInviter(invite, isGuildMember)) {
          let id;
          if (invite != null) {
            const guild = invite.guild;
            if (guild != null) {
              id = guild.id;
            }
          }
          tmp12 = null;
          if (id !== closure_11) {
            let tmp23 = null;
            const memberInfo = tmp4.memberInfo;
            if (null != tmp11.onlineCount) {
              const obj4 = { children: items1 };
              const obj5 = { style: tmp4.dotOnline };
              items1 = [closure_12(View, obj5)];
              const obj6 = {
                variant: "text-xs/medium",
                color: "text-default",
                children: intl.format(intl9.t["LC+S+m"], obj7),
              };
              const Text = Text_Text.Text;
              intl = intl9.intl;
              obj7 = { membersOnline: tmp11.onlineCount };
              items1[1] = closure_12(Text, obj6);
              tmp23 = map1(authStore2, obj4);
            }
            let tmp24 = null;
            if (null != tmp11.memberCount) {
              const obj8 = { children: items2 };
              const obj9 = { style: tmp4.dotOffline };
              items2 = [closure_12(View, obj9)];
              const obj10 = {
                variant: "text-xs/medium",
                color: "text-default",
                children: intl2.format(intl9.t.zRl6XR, obj11),
              };
              const Text2 = Text_Text.Text;
              intl2 = intl9.intl;
              obj11 = { count: tmp11.memberCount };
              items2[1] = closure_12(Text2, obj10);
              tmp24 = map1(authStore2, obj8);
            }
            tmp13 = tmp24;
            tmp12 = forResult;
            tmp14 = tmp23;
            tmp15 = memberInfo;
            tmp16 = View;
          }
        }
      }
      cResult[0] = invite;
      cResult[1] = isGuildMember;
      cResult[2] = tmp4;
      cResult[3] = tmp16;
      cResult[4] = tmp15;
      cResult[5] = tmp14;
      cResult[6] = tmp13;
      cResult[7] = tmp12;
      tmp9 = tmp12;
      tmp8 = tmp13;
      tmp7 = tmp14;
      tmp6 = tmp15;
      tmp5 = tmp16;
    }
  : (invite) => {
      let intl;
      let intl2;
      let items;
      let items1;
      let items2;
      let num2;
      let obj10;
      let obj6;
      invite = invite.invite;
      const isGuildMember = invite.isGuildMember;
      const tmp = closure_15();
      let num = invite.approximate_presence_count;
      if (num == null) {
        num = 0;
      }
      const obj = { onlineCount: num, memberCount: num2 };
      num2 = invite.approximate_member_count;
      if (num2 == null) {
        num2 = 0;
      }
      let tmp2 = null;
      if (0 !== obj.memberCount) {
        tmp2 = obj;
      }
      let tmp17Result4 = null;
      if (null != tmp2) {
        tmp17Result4 = null;
        if (!shouldShowInviter(invite, isGuildMember)) {
          let id;
          if (invite != null) {
            const guild = invite.guild;
            if (guild != null) {
              id = guild.id;
            }
          }
          tmp17Result4 = null;
          if (id !== closure_11) {
            let tmp17Result = null;
            const obj2 = { style: tmp.memberInfo, children: items1 };
            if (null != tmp2.onlineCount) {
              const obj3 = { children: items };
              const obj4 = { style: tmp.dotOnline };
              items = [closure_12(View, obj4)];
              const obj5 = {
                variant: "text-xs/medium",
                color: "text-default",
                children: intl.format(intl9.t["LC+S+m"], obj6),
              };
              const Text = Text_Text.Text;
              intl = intl9.intl;
              obj6 = { membersOnline: tmp2.onlineCount };
              items[1] = closure_12(Text, obj5);
              tmp17Result = map1(authStore2, obj3);
            }
            items1 = [tmp17Result];
            let tmp17Result3 = null;
            if (null != tmp2.memberCount) {
              const obj7 = { children: items2 };
              const obj8 = { style: tmp.dotOffline };
              items2 = [closure_12(View, obj8)];
              const obj9 = {
                variant: "text-xs/medium",
                color: "text-default",
                children: intl2.format(intl9.t.zRl6XR, obj10),
              };
              const Text2 = Text_Text.Text;
              intl2 = intl9.intl;
              obj10 = { count: tmp2.memberCount };
              items2[1] = closure_12(Text2, obj9);
              tmp17Result3 = map1(authStore2, obj7);
            }
            items1[1] = tmp17Result3;
            tmp17Result4 = map1(View, obj2);
          }
        }
      }
      return tmp17Result4;
    };
const constants3 = { ACCEPT: 0, [0]: "ACCEPT", DECLINE: 1, [1]: "DECLINE" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (invite) => {
      let closure_5;
      let first;
      let guild2;
      let items2;
      let items3;
      let onPress;
      let onPressJoin;
      let stateFromStores;
      let tmp54;
      let tmp7;
      const tmp = invite;
      const tmp2 = onPressJoin;
      let obj = invite(onPressJoin[13]);
      const cResult = obj.c(43);
      invite = invite.invite;
      const isGuildMember = invite.isGuildMember;
      onPressJoin = invite.onPressJoin;
      const onPressClose = invite.onPressClose;
      const isRegistration = invite.isRegistration;
      const tmp4 = closure_15();
      const tmp5 = onPressClose(first.useState(), 2);
      first = tmp5[0];
      View = tmp5[1];
      if (cResult[0] !== onPressJoin) {
        const fn = function v() {
          closure_5(constants.ACCEPT);
          onPressJoin();
        };
        cResult[0] = onPressJoin;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      MultiAccountStore = tmp7;
      if (cResult[2] === invite.code) {
        let guild = invite.guild;
        let id;
        const tmp8 = cResult[3];
        if (guild != null) {
          id = guild.id;
        }
        if (tmp8 === id) {
          let tmp11;
          if (cResult[4] === onPressClose) {
            tmp11 = cResult[5];
          }
          const onPress2 = tmp11;
          if (cResult[6] === invite) {
            if (cResult[7] === isGuildMember) {
              let tmp13;
              let tmp17;
              let tmp16;
              let tmp21;
              let tmp20;
              if (cResult[8] === isRegistration) {
                tmp13 = cResult[9];
              }
              const guild_scheduled_event = invite.guild_scheduled_event;
              const _Symbol = Symbol;
              let str = "react.memo_cache_sentinel";
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                let items = [stateFromStores];
                const fn2 = function z() {
                  return stateFromStores.getCurrentUser();
                };
                cResult[10] = items;
                cResult[11] = fn2;
                tmp17 = fn2;
                tmp16 = items;
              } else {
                tmp16 = cResult[10];
                tmp17 = cResult[11];
              }
              const tmpResult = tmp(tmp2[24]);
              stateFromStores = tmpResult.useStateFromStores(tmp16, tmp17);
              const _Symbol2 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = [MultiAccountStore];
                class Q {
                  constructor() {
                    return onPress.getCanUseMultiAccountMobile();
                  }
                }
                cResult[12] = items1;
                cResult[13] = Q;
                tmp21 = Q;
                tmp20 = items1;
              } else {
                tmp20 = cResult[12];
                tmp21 = cResult[13];
              }
              const tmpResult2 = tmp(tmp2[24]);
              const stateFromStores1 = tmpResult2.useStateFromStores(tmp20, tmp21);
              if (cResult[14] === first) {
                if (cResult[15] === stateFromStores) {
                  if (cResult[16] === tmp7) {
                    if (cResult[17] === tmp11) {
                      if (cResult[18] === invite) {
                        if (cResult[19] === isGuildMember) {
                          let tmp24;
                          let tmp27;
                          let tmp26;
                          let tmp25;
                          if (cResult[20] === stateFromStores1) {
                            tmp24 = cResult[21];
                          }
                          if (cResult[22] !== tmp13) {
                            let obj2 = {};
                            class Q {
                              constructor() {
                                return onPress.getCanUseMultiAccountMobile();
                              }
                            }
                            const merged = Object.assign(tmp13);
                            let obj3 = {};
                            const tmp33 = closure_12(closure_17, obj2);
                            const merged1 = Object.assign(tmp13);
                            const tmp38 = closure_12(closure_19, obj3);
                            let obj4 = {};
                            const merged2 = Object.assign(tmp13);
                            const tmp43 = closure_12(closure_18, obj4);
                            let obj5 = {};
                            const merged3 = Object.assign(tmp13);
                            const tmp48 = closure_12(closure_20, obj5);
                            cResult[22] = tmp13;
                            cResult[23] = tmp38;
                            cResult[24] = tmp43;
                            cResult[25] = tmp48;
                            class L {
                              constructor() {
                                let id;
                                closure_5(stateFromStores1.DECLINE);
                                const guild = invite.guild;
                                const obj = { invite_code: invite.code, guild_id: id };
                                id = undefined;
                                const track = AnalyticsUtilsDefault.track;
                                const INVITE_ACCEPT_DISMISSED = stateFromStores1.INVITE_ACCEPT_DISMISSED;
                                AnalyticsUtilsDefault;
                                if (guild != null) {
                                  id = guild.id;
                                }
                                track(INVITE_ACCEPT_DISMISSED, obj);
                                onPressClose();
                              }
                            }
                            cResult[26] = tmp33;
                            tmp27 = tmp48;
                            tmp26 = tmp43;
                            tmp25 = tmp38;
                          } else {
                            tmp25 = cResult[23];
                            tmp26 = cResult[24];
                            tmp27 = cResult[25];
                            class Q {
                              constructor() {
                                return onPress.getCanUseMultiAccountMobile();
                              }
                            }
                          }
                          if (cResult[27] === invite) {
                            let tmp49;
                            if (cResult[28] === tmp4.rolesList) {
                              tmp49 = cResult[29];
                            }
                            if (cResult[30] === guild_scheduled_event) {
                              let tmp52;
                              let tmp58;
                              if (cResult[31] === tmp4.embedDetailsCard) {
                                tmp52 = cResult[32];
                              }
                              if (cResult[33] !== tmp24) {
                                const tmp24Result = tmp24();
                                cResult[33] = tmp24;
                                class Q {
                                  constructor() {
                                    return onPress.getCanUseMultiAccountMobile();
                                  }
                                }
                                cResult[34] = tmp24Result;
                                tmp58 = tmp24Result;
                              } else {
                                tmp58 = cResult[34];
                              }
                              if (cResult[35] === tmp25) {
                                if (cResult[36] === tmp26) {
                                  if (cResult[37] === tmp27) {
                                    if (cResult[38] === tmp49) {
                                      if (cResult[39] === tmp52) {
                                        if (cResult[40] === tmp58) {
                                          let tmp60;
                                          if (cResult[41] === tmp28) {
                                            tmp60 = cResult[42];
                                          }
                                          return tmp60;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              class Q {
                                constructor() {
                                  return onPress.getCanUseMultiAccountMobile();
                                }
                              }
                              let obj6 = { children: items2 };
                              items2 = [tmp28, tmp25, tmp26, tmp27, tmp49, tmp52, tmp58];
                              const tmp62 = closure_13(closure_14, obj6);
                              cResult[35] = tmp25;
                              cResult[36] = tmp26;
                              cResult[37] = tmp27;
                              cResult[38] = tmp49;
                              cResult[39] = tmp52;
                              cResult[40] = tmp58;
                              cResult[41] = tmp28;
                              cResult[42] = tmp62;
                              tmp60 = tmp62;
                            }
                            class Q {
                              constructor() {
                                return onPress.getCanUseMultiAccountMobile();
                              }
                            }
                            if (tmp54) {
                              const obj7 = { style: null, children: items3 };
                              class Q {
                                constructor() {
                                  return onPress.getCanUseMultiAccountMobile();
                                }
                              }
                              const obj8 = { event: guild_scheduled_event };
                              items3 = [closure_12(tmp(tmp2[28]).GuildEventCardHeader, obj8), ,];
                              const obj9 = { event: guild_scheduled_event };
                              items3[1] = closure_12(tmp(tmp2[28]).GuildEventCardMetaInfo, obj9);
                              const obj10 = { event: guild_scheduled_event };
                              items3[2] = closure_12(tmp(tmp2[28]).GuildEventCardGuildInfo, obj10);
                              tmp54 = closure_13(View, obj7);
                            }
                            cResult[30] = guild_scheduled_event;
                            cResult[31] = tmp4.embedDetailsCard;
                            cResult[32] = tmp54;
                            tmp52 = tmp54;
                          }
                          class Q {
                            constructor() {
                              return onPress.getCanUseMultiAccountMobile();
                            }
                          }
                          const obj11 = { invite, style: tmp4.rolesList };
                          const tmp51 = closure_12(isGuildMember(tmp2[27]), obj11);
                          cResult[27] = invite;
                          cResult[28] = tmp4.rolesList;
                          cResult[29] = tmp51;
                          tmp49 = tmp51;
                        }
                      }
                    }
                  }
                }
              }
              const fn3 = function j() {
                let formatToPlainStringResult;
                let stringResult;
                let stringResult1;
                let tmp19;
                let userAvatarSource = null;
                if (null != stateFromStores) {
                  const obj = AvatarUtilsDefault;
                  userAvatarSource = obj.getUserAvatarSource(stateFromStores, false, 20);
                }
                let tmp7;
                if (null != userAvatarSource) {
                  const obj2 = { source: userAvatarSource, variant: "entity" };
                  tmp7 = closure_12(components_Button_Button.Button.Icon, obj2);
                }
                if (null != stateFromStores) {
                  const intl = intl9.intl;
                  const obj3 = {
                    usernameHook() {
                      const username = stateFromStores.username;
                      let str = "";
                      if (!stateFromStores.hasUniqueUsername()) {
                        const _HermesInternal = HermesInternal;
                        str = "#" + stateFromStores.discriminator;
                      }
                      return "" + username + str;
                    },
                  };
                  formatToPlainStringResult = intl.formatToPlainString(intl9.t["9sWQNT"], obj3);
                }
                const intl2 = intl9.intl;
                if (isGuildMember && invite.state !== constants.ACCEPTED) {
                  const intl3 = intl9.intl;
                  stringResult = intl3.string(intl9.t.IRoQXr);
                  tmp19 = stringResult;
                } else {
                  stringResult = formatToPlainStringResult;
                  tmp19 = tmp16;
                  const tmp17 = stateFromStores1 && null != formatToPlainStringResult;
                  if (tmp17) {
                    stringResult = formatToPlainStringResult;
                    tmp19 = formatToPlainStringResult;
                  }
                }
                const ButtonGroup = ButtonGroup2.ButtonGroup;
                const items = [,];
                const obj4 = {
                  icon: tmp7,
                  variant: "primary",
                  size: "lg",
                  text: tmp19,
                  accessibilityLabel: stringResult,
                  onPress,
                  loading: first === constants.ACCEPT,
                  disabled: first === constants.ACCEPT,
                };
                items[0] = closure_12(components_Button_Button.Button, obj4);
                const Button = components_Button_Button.Button;
                const intl4 = intl9.intl;
                const string = intl4.string;
                const t = intl9.t;
                if (isGuildMember && invite.state !== constants.ACCEPTED) {
                  stringResult1 = string(t.WAI6xu);
                } else {
                  stringResult1 = string(t.ndsK4Z);
                }
                const obj5 = { children: items };
                const obj6 = {
                  variant: "secondary",
                  size: "lg",
                  text: stringResult1,
                  onPress: onPress2,
                  loading: first === constants.DECLINE,
                  disabled: first === constants.DECLINE,
                };
                items[1] = closure_12(Button, obj6);
                return map1(ButtonGroup, obj5);
              };
              cResult[14] = first;
              cResult[15] = stateFromStores;
              cResult[16] = tmp7;
              cResult[17] = tmp11;
              cResult[18] = invite;
              cResult[19] = isGuildMember;
              cResult[20] = stateFromStores1;
              class L {
                constructor() {
                  let id;
                  closure_5(stateFromStores1.DECLINE);
                  const guild = invite.guild;
                  const obj = { invite_code: invite.code, guild_id: id };
                  id = undefined;
                  const track = AnalyticsUtilsDefault.track;
                  const INVITE_ACCEPT_DISMISSED = stateFromStores1.INVITE_ACCEPT_DISMISSED;
                  AnalyticsUtilsDefault;
                  if (guild != null) {
                    id = guild.id;
                  }
                  track(INVITE_ACCEPT_DISMISSED, obj);
                  onPressClose();
                }
              }
              tmp24 = fn3;
            }
          }
          tmp14[0] = invite;
          tmp14[1] = isGuildMember;
          tmp14[2] = isRegistration;
          cResult[6] = invite;
          cResult[7] = isGuildMember;
          cResult[8] = isRegistration;
          cResult[9] = tmp14;
          tmp13 = tmp14;
        }
      }
      ({ code: tmp3[2], guild: guild2 } = invite);
      let id1;
      if (guild2 != null) {
        id1 = guild2.id;
      }
      class L {
        constructor() {
          let id;
          closure_5(stateFromStores1.DECLINE);
          const guild = invite.guild;
          const obj = { invite_code: invite.code, guild_id: id };
          id = undefined;
          const track = AnalyticsUtilsDefault.track;
          const INVITE_ACCEPT_DISMISSED = stateFromStores1.INVITE_ACCEPT_DISMISSED;
          AnalyticsUtilsDefault;
          if (guild != null) {
            id = guild.id;
          }
          track(INVITE_ACCEPT_DISMISSED, obj);
          onPressClose();
        }
      }
      cResult[3] = id1;
      cResult[4] = onPressClose;
      cResult[5] = L;
      tmp11 = L;
    }
  : (invite) => {
      let _undefined;
      let c3;
      let canUseMultiAccountMobile;
      let currentUser;
      let formatToPlainStringResult;
      let isGuildMember;
      let items3;
      let stringResult;
      let stringResult1;
      let tmp24;
      let tmp3;
      invite = invite.invite;
      ({ isGuildMember, onPressJoin: importDefault, onPressClose: dependencyMap } = invite);
      _slicedToArray = undefined;
      let stateFromStores;
      const isRegistration = invite.isRegistration;
      const tmp = closure_15();
      const tmp2 = _slicedToArray(stateFromStores.useState(), 2);
      [tmp3, c3] = tmp2;
      let obj = { invite, isGuildMember, isRegistration };
      const guild_scheduled_event = invite.guild_scheduled_event;
      const items = [UserStore];
      const obj2 = invite(504);
      stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [MultiAccountStore];
      const obj3 = invite(504);
      let stateFromStores1 = obj3.useStateFromStores(items1, () =>
        canUseMultiAccountMobile.getCanUseMultiAccountMobile(),
      );
      const obj4 = {};
      const merged = Object.assign(obj);
      const items2 = [closure_12(closure_17, obj4), , , , , ,];
      const obj5 = {};
      const merged1 = Object.assign(obj);
      items2[1] = closure_12(closure_19, obj5);
      const obj6 = {};
      const merged2 = Object.assign(obj);
      items2[2] = closure_12(closure_18, obj6);
      const obj7 = {};
      const merged3 = Object.assign(obj);
      items2[3] = closure_12(closure_20, obj7);
      const obj8 = { invite, style: tmp.rolesList };
      items2[4] = closure_12(InviteRolesListDefault, obj8);
      let tmp8Result = null != guild_scheduled_event;
      if (tmp8Result) {
        const obj10 = { event: guild_scheduled_event };
        const obj9 = { style: tmp.embedDetailsCard, children: items3 };
        items3 = [closure_12(invite(9261).GuildEventCardHeader, obj10), ,];
        const obj11 = { event: guild_scheduled_event };
        items3[1] = closure_12(invite(9261).GuildEventCardMetaInfo, obj11);
        const obj12 = { event: guild_scheduled_event };
        items3[2] = closure_12(invite(9261).GuildEventCardGuildInfo, obj12);
        tmp8Result = closure_13(View, obj9);
      }
      items2[5] = tmp8Result;
      if (isGuildMember) {
        isGuildMember = invite.state !== constants2.ACCEPTED;
      }
      let userAvatarSource = null;
      if (null != stateFromStores) {
        const tmp15Result = AvatarUtilsDefault;
        userAvatarSource = tmp15Result.getUserAvatarSource(stateFromStores, false, 20);
      }
      let tmp10Result;
      if (null != userAvatarSource) {
        const obj13 = { source: userAvatarSource, variant: "entity" };
        tmp10Result = closure_12(tmp4(5594).Button.Icon, obj13);
      }
      if (null != stateFromStores) {
        const intl = tmp4(1126).intl;
        const obj14 = {
          usernameHook() {
            const username = stateFromStores.username;
            let str = "";
            if (!stateFromStores.hasUniqueUsername()) {
              const _HermesInternal = HermesInternal;
              str = "#" + stateFromStores.discriminator;
            }
            return "" + username + str;
          },
        };
        formatToPlainStringResult = intl.formatToPlainString(invite(1126).t["9sWQNT"], obj14);
      }
      const intl2 = tmp4(1126).intl;
      if (isGuildMember) {
        const intl3 = tmp4(1126).intl;
        stringResult = intl3.string(tmp4(1126).t.IRoQXr);
        tmp24 = stringResult;
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
      const ButtonGroup = tmp4(5592).ButtonGroup;
      const items4 = [,];
      const obj15 = {
        icon: tmp10Result,
        variant: "primary",
        size: "lg",
        text: tmp24,
        accessibilityLabel: stringResult,
        onPress: handleAcceptInvitePress,
        loading: tmp3 === constants3.ACCEPT,
        disabled: tmp3 === constants3.ACCEPT,
      };
      items4[0] = closure_12(invite(5594).Button, obj15);
      const Button = tmp4(5594).Button;
      const intl4 = tmp4(1126).intl;
      const string = intl4.string;
      const t = tmp4(1126).t;
      if (isGuildMember) {
        stringResult1 = string(t.WAI6xu);
      } else {
        stringResult1 = string(t.ndsK4Z);
      }
      const obj16 = { children: items2 };
      const obj17 = { children: items4 };
      const obj18 = {
        variant: "secondary",
        size: "lg",
        text: stringResult1,
        onPress: function handleCancelPress() {
          let id;
          _undefined(constants.DECLINE);
          const guild = invite.guild;
          const obj = { invite_code: invite.code, guild_id: id };
          id = undefined;
          const track = AnalyticsUtilsDefault.track;
          const INVITE_ACCEPT_DISMISSED = constants.INVITE_ACCEPT_DISMISSED;
          AnalyticsUtilsDefault;
          if (guild != null) {
            id = guild.id;
          }
          track(INVITE_ACCEPT_DISMISSED, obj);
          dependencyMap();
        },
        loading: tmp3 === constants3.DECLINE,
        disabled: tmp3 === constants3.DECLINE,
      };
      items4[1] = closure_12(Button, obj18);
      items2[6] = closure_13(ButtonGroup, obj17);
      return closure_13(closure_14, obj16);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteDetails.tsx");

export default tmp5;
