// discord_app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../design/void/native.tsx";
import _modDef3659 from "../../../../../game_invite_channels/GameInviteChannels.messages.js";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import transitionToChannel from "../../../../../routing/transitionToChannel.tsx";
import ChannelUtils from "../../../../../../utils/ChannelUtils.tsx";
import utils_ChannelUtils from "../../../../../../utils/native/ChannelUtils.tsx";
import showUserProfileActionSheetDefault from "../../../../../user_profile/native/showUserProfileActionSheet.tsx";
import GroupDMAvatarDefault from "../../../../../group_dm/native/GroupDMAvatar.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import Constants from "../../../../../../Constants.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, navigation;

let c10;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
({ Permissions: c10, StatusTypes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  channelIcon: { height: 40, width: 40, justifyContent: "center", alignItems: "center" },
  channelTypeBox: obj3,
  channelData: { flex: 1 },
  statusStyle: obj4,
};
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = {
  borderRadius: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_ICON_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let isMobileOnline;
      let isVROnline;
      let status;
      let tmp10;
      let tmp11;
      let tmp7;
      let tmp8;
      let obj = channel(576);
      const cResult = obj.c(16);
      channel = channel.channel;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function t() {
          return UserStore.getUser(channel.getRecipientId());
        };
        cResult[1] = channel;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PresenceStore];
        cResult[3] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const fn2 = function y() {
          let UNKNOWN;
          let isVROnlineResult;
          const obj = {
            isMobileOnline: null != stateFromStores && PresenceStore.isMobileOnline(stateFromStores.id),
            isVROnline: isVROnlineResult,
            status: UNKNOWN,
          };
          isVROnlineResult = null != stateFromStores && PresenceStore.isVROnline(stateFromStores.id);
          if (null != stateFromStores) {
            UNKNOWN = PresenceStore.getStatus(stateFromStores.id);
          } else {
            UNKNOWN = unpackModuleId.UNKNOWN;
          }
          return obj;
        };
        const items2 = [stateFromStores];
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        cResult[6] = items2;
        tmp11 = items2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const tmpResult2 = channel(504);
      const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp8, tmp10, tmp11);
      ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
      let tmp13 = null;
      if (null != stateFromStores) {
        if (cResult[7] === status) {
          let tmp14;
          if (cResult[8] === stateFromStores) {
            tmp14 = cResult[9];
          }
          if (cResult[10] === isMobileOnline) {
            if (cResult[11] === isVROnline) {
              if (cResult[12] === tmp4.statusStyle) {
                if (cResult[13] === tmp14) {
                  let tmp17;
                  if (cResult[14] === stateFromStores) {
                    tmp17 = cResult[15];
                  }
                  tmp13 = tmp17;
                }
              }
            }
          }
          const obj2 = {
            avatarDecoration: stateFromStores.avatarDecoration,
            user: stateFromStores,
            guildId: "Boolean",
            size: channel(1188).AvatarSizes.NORMAL,
            status: tmp14,
            isMobileOnline,
            isVROnline,
            statusStyle: tmp4.statusStyle,
          };
          const Avatar = tmp(1188).Avatar;
          const tmp19 = closure_12(Avatar, obj2);
          cResult[10] = isMobileOnline;
          cResult[11] = isVROnline;
          cResult[12] = tmp4.statusStyle;
          cResult[13] = tmp14;
          cResult[14] = stateFromStores;
          cResult[15] = tmp19;
          tmp17 = tmp19;
        }
        let isSystemUserResult;
        if (stateFromStores != null) {
          isSystemUserResult = stateFromStores.isSystemUser();
        }
        let tmp16 = null;
        if (!isSystemUserResult) {
          tmp16 = status;
        }
        cResult[7] = status;
        cResult[8] = stateFromStores;
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      return tmp13;
    }
  : (channel) => {
      let tmp11;
      channel = channel.channel;
      const tmp = closure_15();
      let obj = channel(504);
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
      const items1 = [PresenceStore];
      const items2 = [stateFromStores];
      const obj3 = channel(504);
      const stateFromStoresObject = obj3.useStateFromStoresObject(
        items1,
        () => {
          let UNKNOWN;
          let isVROnlineResult;
          const obj = {
            isMobileOnline: null != stateFromStores && PresenceStore.isMobileOnline(stateFromStores.id),
            isVROnline: isVROnlineResult,
            status: UNKNOWN,
          };
          isVROnlineResult = null != stateFromStores && PresenceStore.isVROnline(stateFromStores.id);
          if (null != stateFromStores) {
            UNKNOWN = PresenceStore.getStatus(stateFromStores.id);
          } else {
            UNKNOWN = unpackModuleId.UNKNOWN;
          }
          return obj;
        },
        items2,
      );
      let tmp9Result = null;
      if (null != stateFromStores) {
        const obj2 = {
          avatarDecoration: stateFromStores.avatarDecoration,
          user: stateFromStores,
          guildId: "Boolean",
          size: channel(1188).AvatarSizes.NORMAL,
          status: tmp11,
          isMobileOnline: tmp5,
          isVROnline: tmp6,
          statusStyle: tmp.statusStyle,
        };
        const Avatar = tmp2(1188).Avatar;
        let isSystemUserResult;
        if (stateFromStores != null) {
          isSystemUserResult = stateFromStores.isSystemUser();
        }
        tmp11 = null;
        if (!isSystemUserResult) {
          tmp11 = tmp7;
        }
        tmp9Result = closure_12(Avatar, obj2);
      }
      return tmp9Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let children;
      let obj = channel(navigation[12]);
      const cResult = obj.c(10);
      channel = channel.channel;
      const tmp4 = require("useChannelName")(channel, true);
      importDefault = tmp4;
      const obj2 = channel(navigation[16]);
      navigation = obj2.useNavigation();
      if (cResult[0] === channel.id) {
        let tmp6;
        let tmp7;
        let tmp9;
        if (cResult[1] === navigation) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const intl = tmp(tmp2[18]).intl;
          const obj3 = {
            channelName: tmp4,
            channelNameHook() {
              const obj = { variant: "text-sm/medium", color: "text-brand", lineClamp: 1, children };
              return closure_12(Text_Text.Text, obj);
            },
          };
          const formatResult = intl.format(channel(navigation[18]).t.YbkB3U, obj3);
          cResult[3] = tmp4;
          cResult[4] = formatResult;
          tmp7 = formatResult;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] !== tmp7) {
          const obj4 = {
            variant: "text-sm/medium",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            children: tmp7,
          };
          const tmp11 = closure_12(channel(navigation[19]).Text, obj4);
          cResult[5] = tmp7;
          cResult[6] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          let tmp12;
          if (cResult[8] === tmp9) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
        const obj5 = { onPress: tmp6, children: tmp9 };
        const tmp14 = closure_12(channel(navigation[20]).PressableOpacity, obj5);
        cResult[7] = tmp6;
        cResult[8] = tmp9;
        cResult[9] = tmp14;
        tmp12 = tmp14;
      }
      const fn = function l() {
        navigation.goBack();
        const obj = transitionToChannel;
        obj.transitionToChannel(channel.id, { navigationReplace: true });
      };
      cResult[0] = channel.id;
      cResult[1] = navigation;
      cResult[2] = fn;
      tmp6 = fn;
    }
  : (channel) => {
      let Text;
      let children;
      let intl;
      let obj3;
      let obj4;
      channel = channel.channel;
      importDefault = undefined;
      navigation = undefined;
      const tmp = require("useChannelName")(channel, true);
      importDefault = tmp;
      let obj = channel(navigation[16]);
      navigation = obj.useNavigation();
      const items = [channel.id, navigation];
      const callback = react.useCallback(() => {
        navigation.goBack();
        const obj = transitionToChannel;
        obj.transitionToChannel(channel.id, { navigationReplace: true });
      }, items);
      const obj2 = { onPress: callback, children: closure_12(Text, obj3) };
      const PressableOpacity = channel(navigation[20]).PressableOpacity;
      obj3 = {
        variant: "text-sm/medium",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        children: intl.format(channel(navigation[18]).t.YbkB3U, obj4),
      };
      Text = channel(navigation[19]).Text;
      intl = channel(navigation[18]).intl;
      obj4 = {
        channelName: tmp,
        channelNameHook() {
          const obj = { variant: "text-sm/medium", color: "text-brand", lineClamp: 1, children };
          return closure_12(Text_Text.Text, obj);
        },
      };
      return closure_12(PressableOpacity, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let tmp6;
      let tmp7;
      let obj = channel(576);
      const cResult = obj.c(9);
      channel = channel.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function t() {
          let privateChannelUserTagsString = null;
          if (channel.isPrivate()) {
            const obj = ChannelUtils;
            privateChannelUserTagsString = obj.getPrivateChannelUserTagsString(channel.recipients, UserStore);
          }
          return privateChannelUserTagsString;
        };
        const items1 = [channel];
        cResult[1] = channel;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === channel) {
        let tmp9;
        if (cResult[5] === stateFromStores) {
          tmp9 = cResult[6];
        }
        let tmp14 = null;
        if (null != tmp9) {
          tmp14 = null;
          if ("" !== tmp9) {
            let tmp15;
            if (cResult[7] !== tmp9) {
              const obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: tmp9 };
              const tmp17 = closure_12(channel(4886).Text, obj2);
              cResult[7] = tmp9;
              cResult[8] = tmp17;
              tmp15 = tmp17;
            } else {
              tmp15 = cResult[8];
            }
            tmp14 = tmp15;
          }
        }
        return tmp14;
      }
      let tmp10 = stateFromStores;
      if (!channel.isPrivate()) {
        let stringResult;
        if (channel.isGameInvitesChannel()) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(_modDef3659["D+2/QP"]);
        } else {
          const tmpResult2 = channel(5035);
          stringResult = tmpResult2.channelTypeString(channel);
        }
        tmp10 = stringResult;
      }
      cResult[4] = channel;
      cResult[5] = stateFromStores;
      cResult[6] = tmp10;
      tmp9 = tmp10;
    }
  : (channel) => {
      channel = channel.channel;
      let obj = channel(504);
      const items = [UserStore];
      const items1 = [channel];
      let stateFromStores = obj.useStateFromStores(
        items,
        () => {
          let privateChannelUserTagsString = null;
          if (channel.isPrivate()) {
            const obj = ChannelUtils;
            privateChannelUserTagsString = obj.getPrivateChannelUserTagsString(channel.recipients, UserStore);
          }
          return privateChannelUserTagsString;
        },
        items1,
      );
      if (!channel.isPrivate()) {
        let stringResult;
        if (channel.isGameInvitesChannel()) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(_modDef3659["D+2/QP"]);
        } else {
          const tmpResult = channel(5035);
          stringResult = tmpResult.channelTypeString(channel);
        }
        stateFromStores = stringResult;
      }
      let tmp6 = null;
      if (null != stateFromStores) {
        tmp6 = null;
        if ("" !== stateFromStores) {
          const obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: stateFromStores };
          tmp6 = closure_12(tmp(4886).Text, obj2);
        }
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let items5;
      let stateFromStores;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp22;
      let tmp8;
      let tmp9;
      let tmp = channel;
      const obj = channel(576);
      const cResult = obj.c(48);
      channel = channel.channel;
      closure_15();
      stateFromStores(5043)(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function u() {
          const tmp = channel;
          channel = null;
          if (channel.isThread()) {
            channel = ChannelStore.getChannel(tmp.parent_id);
          }
          return channel;
        };
        const items1 = [channel];
        cResult[1] = channel;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [PermissionStore];
        cResult[4] = items2;
        tmp11 = items2;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== stateFromStores) {
        class M {
          constructor() {
            const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
            return canResult;
          }
        }
        const items3 = [stateFromStores];
        cResult[5] = stateFromStores;
        cResult[6] = M;
        cResult[7] = items3;
        tmp14 = items3;
      } else {
        class M {
          constructor() {
            const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
            return canResult;
          }
        }
        tmp14 = cResult[7];
      }
      const tmpResult3 = tmp(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, M, tmp14);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
            return canResult;
          }
        }
        const items4 = [GuildStore];
        cResult[8] = items4;
        tmp16 = items4;
      } else {
        class M {
          constructor() {
            const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
            return canResult;
          }
        }
      }
      if (cResult[9] === channel.guild_id) {
        class M {
          constructor() {
            const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
            return canResult;
          }
        }
        const tmpResult4 = tmp(504);
        const stateFromStores2 = tmpResult4.useStateFromStores(tmp16, A, items5);
        if (cResult[13] === stateFromStores1) {
          class M {
            constructor() {
              const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
              return canResult;
            }
          }
        }
        if (null != stateFromStores) {
          class M {
            constructor() {
              const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
              return canResult;
            }
          }
          cResult[13] = stateFromStores1;
          cResult[14] = channel;
          cResult[15] = stateFromStores;
          cResult[16] = tmp22;
        }
        const obj2 = { channel };
        tmp22 = closure_12(closure_18, obj2);
      }
      class A {
        constructor() {
          const guild = GuildStore.getGuild(channel.guild_id);
          let rulesChannelId;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          return rulesChannelId === channel.id;
        }
      }
      items5 = [,];
      ({ id: arr6[0], guild_id: arr6[1] } = channel);
      cResult[9] = channel.guild_id;
      cResult[10] = channel.id;
      cResult[11] = A;
      cResult[12] = items5;
    }
  : (channel) => {
      let closure_1;
      let items9;
      let tmp13Result;
      channel = channel.channel;
      let stateFromStores;
      let tmp = closure_15();
      importDefault = tmp;
      let tmp3 = stateFromStores;
      const tmp4 = require("useChannelName")(channel);
      let tmp5 = channel;
      let obj = channel(stateFromStores[13]);
      let items = [ChannelStore];
      const items1 = [channel];
      stateFromStores = obj.useStateFromStores(
        items,
        () => {
          const tmp = channel;
          channel = null;
          if (channel.isThread()) {
            channel = ChannelStore.getChannel(tmp.parent_id);
          }
          return channel;
        },
        items1,
      );
      let obj2 = channel(stateFromStores[13]);
      const items2 = [PermissionStore];
      const items3 = [stateFromStores];
      const stateFromStores1 = obj2.useStateFromStores(
        items2,
        () => {
          const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
          return canResult;
        },
        items3,
      );
      let obj3 = channel(stateFromStores[13]);
      const items4 = [GuildStore];
      const items5 = [,];
      ({ id: arr6[0], guild_id: arr6[1] } = channel);
      const stateFromStores2 = obj3.useStateFromStores(
        items4,
        () => {
          const guild = GuildStore.getGuild(channel.guild_id);
          let rulesChannelId;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          return rulesChannelId === channel.id;
        },
        items5,
      );
      const items6 = [channel, stateFromStores, stateFromStores1];
      const items7 = [channel, stateFromStores2, tmp];
      const memo = stateFromStores1.useMemo(() => {
        if (null != stateFromStores) {
          let tmp3;
          if (stateFromStores1) {
            const obj2 = { channel: tmp };
            tmp3 = closure_12(closure_17, obj2);
          }
          return tmp3;
        }
        const obj = { channel };
        tmp3 = closure_12(closure_18, obj);
      }, items6);
      const items8 = [
        stateFromStores1.useMemo(() => {
          let items;
          let obj4;
          let obj6;
          let tmp16;
          if (channel.isDM()) {
            const obj3 = { style: closure_1.channelIcon, children: closure_12(closure_16, obj4) };
            obj4 = { channel };
            return closure_12(View, obj3);
          } else if (channel.isGroupDM()) {
            const obj5 = { style: closure_1.channelIcon, children: closure_12(tmp16, obj6) };
            obj6 = { channel, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
            tmp16 = GroupDMAvatarDefault;
            return closure_12(View, obj5);
          } else {
            const obj7 = { isRulesChannel: stateFromStores2 };
            const obj2 = utils_ChannelUtils;
            const channelIconComponent = obj2.getChannelIconComponent(channel, obj7);
            let tmp5 = null;
            if (null != channelIconComponent) {
              const obj8 = {
                style: items,
                children: closure_12(channelIconComponent, { size: "md", color: "mobile-text-heading-primary" }),
              };
              items = [,];
              ({ channelIcon: arr[0], channelTypeBox: arr[1] } = closure_1);
              tmp5 = closure_12(View, obj8);
            }
            return tmp5;
          }
        }, items7),
      ];
      let obj4 = { style: tmp.channelData, children: items9 };
      const tmp12 = stateFromStores2;
      const tmp2 = importDefault;
      if (channel.isDM()) {
        let obj5 = {
          userId: channel.getRecipientId(),
          guildId: channel.guild_id,
          userName: tmp4,
          variant: "redesign/heading-18/bold",
          defaultColor: "mobile-text-heading-primary",
          lineClamp: 1,
          ellipsizeMode: "tail",
        };
        const tmp2Result = tmp2(tmp3[25]);
        tmp13Result = closure_12(tmp2Result, obj5);
      } else {
        let obj6 = {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          ellipsizeMode: "tail",
          children: tmp4,
        };
        tmp13Result = closure_12(tmp5(tmp3[19]).Text, obj6);
      }
      let obj7 = { children: items8 };
      items9 = [tmp13Result, memo];
      items8[1] = closure_13(tmp12, obj4);
      return closure_13(closure_14, obj7);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let analyticsLocations;
      let obj = channel(576);
      const cResult = obj.c(12);
      const tmp = channel;
      channel = channel.channel;
      const containerStyle = channel.containerStyle;
      const tmp4 = closure_15();
      analyticsLocations = analyticsLocations(6657)().analyticsLocations;
      if (cResult[0] === analyticsLocations) {
        let tmp5;
        if (cResult[1] === channel) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === containerStyle) {
          let tmp6;
          let tmp7;
          if (cResult[4] === tmp4.container) {
            tmp6 = cResult[5];
          }
          if (cResult[6] !== channel) {
            const obj2 = { channel };
            const tmp10 = closure_12(closure_19, obj2);
            cResult[6] = channel;
            cResult[7] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp6) {
              let tmp11;
              if (cResult[10] === tmp7) {
                tmp11 = cResult[11];
              }
              return tmp11;
            }
          }
          const obj3 = { style: tmp6, onPress: tmp5, children: tmp7 };
          const tmp13 = closure_12(tmp(5909).PressableOpacity, obj3);
          cResult[8] = tmp5;
          cResult[9] = tmp6;
          cResult[10] = tmp7;
          cResult[11] = tmp13;
          tmp11 = tmp13;
        }
        const items = [tmp4.container, containerStyle];
        cResult[3] = containerStyle;
        cResult[4] = tmp4.container;
        cResult[5] = items;
        tmp6 = items;
      }
      const fn = function l() {
        const recipientId = channel.getRecipientId();
        if (null != recipientId) {
          const obj = { userId: recipientId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        }
      };
      cResult[0] = analyticsLocations;
      cResult[1] = channel;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (channel) => {
      let items1;
      channel = channel.channel;
      let analyticsLocations;
      const containerStyle = channel.containerStyle;
      const tmp = closure_15();
      analyticsLocations = analyticsLocations(6657)().analyticsLocations;
      const items = [channel, analyticsLocations];
      const callback = react.useCallback(() => {
        const recipientId = channel.getRecipientId();
        if (null != recipientId) {
          const obj = { userId: recipientId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        }
      }, items);
      let obj = { style: items1, onPress: callback, children: closure_12(closure_19, { channel }) };
      items1 = [tmp.container, containerStyle];
      const PressableOpacity = channel(5909).PressableOpacity;
      return closure_12(PressableOpacity, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let containerStyle;
      const obj = react2;
      const cResult = obj.c(8);
      ({ channel, containerStyle } = arg0);
      const tmp2 = closure_15();
      if (cResult[0] === containerStyle) {
        let tmp3;
        let tmp4;
        if (cResult[1] === tmp2.container) {
          tmp3 = cResult[2];
        }
        if (cResult[3] !== channel) {
          const obj2 = { channel };
          const tmp7 = closure_12(closure_19, obj2);
          cResult[3] = channel;
          cResult[4] = tmp7;
          tmp4 = tmp7;
        } else {
          tmp4 = cResult[4];
        }
        if (cResult[5] === tmp3) {
          let tmp8;
          if (cResult[6] === tmp4) {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
        const obj3 = { style: tmp3, children: tmp4 };
        const tmp11 = closure_12(View, obj3);
        cResult[5] = tmp3;
        cResult[6] = tmp4;
        cResult[7] = tmp11;
        tmp8 = tmp11;
      }
      const items = [tmp2.container, containerStyle];
      cResult[0] = containerStyle;
      cResult[1] = tmp2.container;
      cResult[2] = items;
      tmp3 = items;
    }
  : (arg0) => {
      let channel;
      let containerStyle;
      let items;
      ({ channel, containerStyle } = arg0);
      const obj = { style: items, children: closure_12(closure_19, { channel }) };
      items = [closure_15().container, containerStyle];
      return closure_12(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let channel;
        let containerStyle;
        let tmp2;
        const obj = react2;
        const cResult = obj.c(6);
        ({ channel, containerStyle } = arg0);
        if (channel.isDM()) {
          if (cResult[0] === channel) {
            let tmp6;
            if (cResult[1] === containerStyle) {
              tmp6 = cResult[2];
            }
            tmp2 = tmp6;
          }
          const obj2 = { channel, containerStyle };
          const tmp9 = closure_12(closure_20, obj2);
          cResult[0] = channel;
          cResult[1] = containerStyle;
          cResult[2] = tmp9;
          tmp6 = tmp9;
        } else {
          if (cResult[3] === channel) {
            if (cResult[4] === containerStyle) {
              tmp2 = cResult[5];
            }
          }
          const obj3 = { channel, containerStyle };
          const tmp5 = closure_12(closure_21, obj3);
          cResult[3] = channel;
          cResult[4] = containerStyle;
          cResult[5] = tmp5;
          tmp2 = tmp5;
        }
        return tmp2;
      }
    : (arg0) => {
        let channel;
        let containerStyle;
        let tmpResult;
        ({ channel, containerStyle } = arg0);
        if (channel.isDM()) {
          const obj2 = { channel, containerStyle };
          tmpResult = closure_12(closure_20, obj2);
        } else {
          const obj = { channel, containerStyle };
          tmpResult = closure_12(closure_21, obj);
        }
        return tmpResult;
      },
);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx",
);

export default memoResult;
