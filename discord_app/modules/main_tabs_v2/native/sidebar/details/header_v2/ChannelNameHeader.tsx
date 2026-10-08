// discord_app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../design/void/native.tsx";
import _modDef3763 from "../../../../../game_invite_channels/GameInviteChannels.messages.js";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import transitionToChannel from "../../../../../routing/transitionToChannel.tsx";
import ChannelUtils from "../../../../../../utils/ChannelUtils.tsx";
import utils_ChannelUtils from "../../../../../../utils/native/ChannelUtils.tsx";
import showUserProfileActionSheetDefault from "../../../../../user_profile/native/showUserProfileActionSheet.tsx";
import GroupDMAvatarDefault from "../../../../../group_dm/native/GroupDMAvatar.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Permissions: c10, StatusTypes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  container: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" },
  channelIcon: { height: 40, width: 40, justifyContent: "center", alignItems: "center" },
  channelTypeBox: null,
  channelData: null,
  statusStyle: null,
};
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
obj.channelTypeBox = {
  borderRadius: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_ICON_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj.channelData = { flex: 1 };
let obj4 = {
  borderRadius: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_ICON_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj.statusStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DirectMessageIcon(channel) {
      const cResult = channel(576).c(16);
      channel = channel.channel;
      closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function t() {
          return UserStore.getUser(channel.getRecipientId());
        };
        cResult[1] = channel;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PresenceStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        class C {
          constructor() {
            tmp = closure_1;
            isMobileOnlineResult = null != closure_1;
            if (isMobileOnlineResult) {
              tmp3 = closure_8;
              isMobileOnlineResult = closure_8.isMobileOnline(tmp.id);
            }
            obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
            isVROnlineResult = null != tmp;
            if (isVROnlineResult) {
              tmp5 = closure_8;
              isVROnlineResult = closure_8.isVROnline(tmp.id);
            }
            obj.isVROnline = isVROnlineResult;
            if (null != tmp) {
              tmp7 = closure_8;
              UNKNOWN = closure_8.getStatus(tmp.id);
            } else {
              tmp6 = StatusTypes;
              UNKNOWN = StatusTypes.UNKNOWN;
            }
            obj.status = UNKNOWN;
            return obj;
          }
        }
        const items2 = [stateFromStores];
        cResult[4] = stateFromStores;
        cResult[5] = C;
        cResult[6] = items2;
        let tmp12 = items2;
      } else {
        class C {
          constructor() {
            tmp = closure_1;
            isMobileOnlineResult = null != closure_1;
            if (isMobileOnlineResult) {
              tmp3 = closure_8;
              isMobileOnlineResult = closure_8.isMobileOnline(tmp.id);
            }
            obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
            isVROnlineResult = null != tmp;
            if (isVROnlineResult) {
              tmp5 = closure_8;
              isVROnlineResult = closure_8.isVROnline(tmp.id);
            }
            obj.isVROnline = isVROnlineResult;
            if (null != tmp) {
              tmp7 = closure_8;
              UNKNOWN = closure_8.getStatus(tmp.id);
            } else {
              tmp6 = StatusTypes;
              UNKNOWN = StatusTypes.UNKNOWN;
            }
            obj.status = UNKNOWN;
            return obj;
          }
        }
        tmp12 = cResult[6];
      }
      const tmpResult = channel(504);
      const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp9, C, tmp12);
      ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
      if (null == stateFromStores) {
        class C {
          constructor() {
            tmp = closure_1;
            isMobileOnlineResult = null != closure_1;
            if (isMobileOnlineResult) {
              tmp3 = closure_8;
              isMobileOnlineResult = closure_8.isMobileOnline(tmp.id);
            }
            obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
            isVROnlineResult = null != tmp;
            if (isVROnlineResult) {
              tmp5 = closure_8;
              isVROnlineResult = closure_8.isVROnline(tmp.id);
            }
            obj.isVROnline = isVROnlineResult;
            if (null != tmp) {
              tmp7 = closure_8;
              UNKNOWN = closure_8.getStatus(tmp.id);
            } else {
              tmp6 = StatusTypes;
              UNKNOWN = StatusTypes.UNKNOWN;
            }
            obj.status = UNKNOWN;
            return obj;
          }
        }
      } else {
        class C {
          constructor() {
            tmp = closure_1;
            isMobileOnlineResult = null != closure_1;
            if (isMobileOnlineResult) {
              tmp3 = closure_8;
              isMobileOnlineResult = closure_8.isMobileOnline(tmp.id);
            }
            obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
            isVROnlineResult = null != tmp;
            if (isVROnlineResult) {
              tmp5 = closure_8;
              isVROnlineResult = closure_8.isVROnline(tmp.id);
            }
            obj.isVROnline = isVROnlineResult;
            if (null != tmp) {
              tmp7 = closure_8;
              UNKNOWN = closure_8.getStatus(tmp.id);
            } else {
              tmp6 = StatusTypes;
              UNKNOWN = StatusTypes.UNKNOWN;
            }
            obj.status = UNKNOWN;
            return obj;
          }
        }
        if (stateFromStores != null) {
          class C {
            constructor() {
              tmp = closure_1;
              isMobileOnlineResult = null != closure_1;
              if (isMobileOnlineResult) {
                tmp3 = closure_8;
                isMobileOnlineResult = closure_8.isMobileOnline(tmp.id);
              }
              obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
              isVROnlineResult = null != tmp;
              if (isVROnlineResult) {
                tmp5 = closure_8;
                isVROnlineResult = closure_8.isVROnline(tmp.id);
              }
              obj.isVROnline = isVROnlineResult;
              if (null != tmp) {
                tmp7 = closure_8;
                UNKNOWN = closure_8.getStatus(tmp.id);
              } else {
                tmp6 = StatusTypes;
                UNKNOWN = StatusTypes.UNKNOWN;
              }
              obj.status = UNKNOWN;
              return obj;
            }
          }
        }
        if (!undefined) {
          class C {
            constructor() {
              tmp = closure_1;
              isMobileOnlineResult = null != closure_1;
              if (isMobileOnlineResult) {
                tmp3 = closure_8;
                isMobileOnlineResult = closure_8.isMobileOnline(tmp.id);
              }
              obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
              isVROnlineResult = null != tmp;
              if (isVROnlineResult) {
                tmp5 = closure_8;
                isVROnlineResult = closure_8.isVROnline(tmp.id);
              }
              obj.isVROnline = isVROnlineResult;
              if (null != tmp) {
                tmp7 = closure_8;
                UNKNOWN = closure_8.getStatus(tmp.id);
              } else {
                tmp6 = StatusTypes;
                UNKNOWN = StatusTypes.UNKNOWN;
              }
              obj.status = UNKNOWN;
              return obj;
            }
          }
        }
        cResult[7] = status;
        cResult[8] = stateFromStores;
        cResult[9] = null;
      }
      const tmpResult2 = channel(504);
    }
  : function DirectMessageIcon(channel) {
      channel = channel.channel;
      const tmp = closure_15();
      const items = [UserStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
      let obj = channel(504);
      const items1 = [PresenceStore];
      const items2 = [stateFromStores];
      const stateFromStoresObject = channel(504).useStateFromStoresObject(
        items1,
        () => {
          let isMobileOnlineResult = null != stateFromStores;
          if (isMobileOnlineResult) {
            isMobileOnlineResult = PresenceStore.isMobileOnline(stateFromStores.id);
          }
          const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          let isVROnlineResult = null != stateFromStores;
          if (isVROnlineResult) {
            isVROnlineResult = PresenceStore.isVROnline(stateFromStores.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != stateFromStores) {
            let UNKNOWN = PresenceStore.getStatus(stateFromStores.id);
          } else {
            UNKNOWN = constants2.UNKNOWN;
          }
          obj.status = UNKNOWN;
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
          size: tmp2(1200).AvatarSizes.NORMAL,
          status: false,
          isMobileOnline: null,
          isVROnline: true,
          statusStyle: null,
        };
        let isSystemUserResult;
        if (stateFromStores != null) {
          isSystemUserResult = stateFromStores.isSystemUser();
        }
        let tmp11 = null;
        if (!isSystemUserResult) {
          tmp11 = tmp7;
        }
        obj2.status = tmp11;
        obj2.isMobileOnline = tmp5;
        obj2.isVROnline = tmp6;
        obj2.statusStyle = tmp.statusStyle;
        tmp9Result = closure_12(tmp2(1200).Avatar, obj2);
      }
      return tmp9Result;
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ThreadParentChannelLink(channel) {
      const cResult = channel(navigation[12]).c(10);
      channel = channel.channel;
      const tmp4 = require("useChannelName")(channel, true);
      importDefault = tmp4;
      const obj = channel(navigation[12]);
      navigation = channel(navigation[16]).useNavigation();
      if (cResult[0] === channel.id) {
        if (cResult[1] === navigation) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const intl = tmp(tmp2[18]).intl;
          const obj3 = {
            channelName: tmp4,
            channelNameHook() {
              return __initData(Text_Text.Text, {
                variant: "text-sm/medium",
                color: "text-brand",
                lineClamp: 1,
                children,
              });
            },
          };
          const formatResult = intl.format(tmp(tmp2[18]).t.YbkB3U, obj3);
          cResult[3] = tmp4;
          cResult[4] = formatResult;
          let tmp7 = formatResult;
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
          const tmp11 = closure_12(tmp(tmp2[19]).Text, obj4);
          cResult[5] = tmp7;
          cResult[6] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp9) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
        const obj5 = { onPress: tmp6, children: tmp9 };
        const tmp14 = closure_12(tmp(tmp2[20]).PressableOpacity, obj5);
        cResult[7] = tmp6;
        cResult[8] = tmp9;
        cResult[9] = tmp14;
        tmp12 = tmp14;
      }
      const fn = function l() {
        navigation.goBack();
        transitionToChannel.transitionToChannel(channel.id, { navigationReplace: true });
      };
      cResult[0] = channel.id;
      cResult[1] = navigation;
      cResult[2] = fn;
      tmp6 = fn;
      const obj2 = channel(navigation[16]);
    }
  : function ThreadParentChannelLink(channel) {
      channel = channel.channel;
      importDefault = undefined;
      let navigation;
      const tmp = require("useChannelName")(channel, true);
      importDefault = tmp;
      navigation = channel(navigation[16]).useNavigation();
      const items = [channel.id, navigation];
      const callback = noop.useCallback(() => {
        navigation.goBack();
        transitionToChannel.transitionToChannel(channel.id, { navigationReplace: true });
      }, items);
      const obj2 = { onPress: callback, children: null };
      const obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
      const intl = channel(navigation[18]).intl;
      obj3.children = intl.format(channel(navigation[18]).t.YbkB3U, {
        channelName: tmp,
        channelNameHook() {
          return __initData(Text_Text.Text, { variant: "text-sm/medium", color: "text-brand", lineClamp: 1, children });
        },
      });
      obj2.children = closure_12(channel(navigation[19]).Text, obj3);
      return closure_12(channel(navigation[20]).PressableOpacity, obj2);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelSubtitle(channel) {
      let Text = channel;
      let tmp = dependencyMap;
      const cResult = channel(576).c(9);
      channel = channel.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function t() {
          let privateChannelUserTagsString = null;
          if (channel.isPrivate()) {
            privateChannelUserTagsString = ChannelUtils.getPrivateChannelUserTagsString(channel.recipients, UserStore);
          }
          return privateChannelUserTagsString;
        };
        const items1 = [channel];
        cResult[1] = channel;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp6 = items1;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      let obj = channel(576);
      const stateFromStores = Text(504).useStateFromStores(first, tmp5, tmp6);
      if (cResult[4] === channel) {
        if (cResult[5] === stateFromStores) {
          let tmp8 = cResult[6];
        }
        let tmp13 = null;
        if (null != tmp8) {
          tmp13 = null;
          if ("" !== tmp8) {
            if (cResult[7] !== tmp8) {
              Text = Text(5086).Text;
              const obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: tmp8 };
              tmp = closure_12(Text, obj2);
              cResult[7] = tmp8;
              cResult[8] = tmp;
            }
          }
        }
        return tmp13;
      }
      if (channel.isPrivate()) {
        cResult[4] = channel;
        cResult[5] = stateFromStores;
        cResult[6] = stateFromStores;
        tmp8 = stateFromStores;
      } else if (channel.isGameInvitesChannel()) {
        const intl = Text(1126).intl;
        let stringResult = intl.string(_modDef3763["D+2/QP"]);
      } else {
        stringResult = Text(5410).channelTypeString(channel);
        const TextResult1 = Text(5410);
      }
      const TextResult = Text(504);
    }
  : function ChannelSubtitle(channel) {
      channel = channel.channel;
      const items = [UserStore];
      const items1 = [channel];
      const stateFromStores = channel(504).useStateFromStores(
        items,
        () => {
          let privateChannelUserTagsString = null;
          if (channel.isPrivate()) {
            privateChannelUserTagsString = ChannelUtils.getPrivateChannelUserTagsString(channel.recipients, UserStore);
          }
          return privateChannelUserTagsString;
        },
        items1,
      );
      if (channel.isPrivate()) {
        let tmp8 = null;
        if (null != stateFromStores) {
          tmp8 = null;
          if ("" !== stateFromStores) {
            const obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: stateFromStores };
            tmp8 = closure_12(tmp(5086).Text, obj2);
          }
        }
        return tmp8;
      } else if (channel.isGameInvitesChannel()) {
        const intl = tmp(1126).intl;
        let stringResult = intl.string(_modDef3763["D+2/QP"]);
      } else {
        stringResult = tmp(5410).channelTypeString(channel);
        const tmpResult = tmp(5410);
      }
      let obj = channel(504);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelNameHeaderContent(channel) {
      const cResult = channel(576).c(48);
      channel = channel.channel;
      closure_15();
      stateFromStores(5417)(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function u() {
          channel = null;
          if (channel.isThread()) {
            channel = ChannelStore.getChannel(channel.parent_id);
          }
          return channel;
        };
        const items1 = [channel];
        cResult[1] = channel;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const obj = channel(576);
      stateFromStores = channel(504).useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [PermissionStore];
        cResult[4] = items2;
        let tmp11 = items2;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== stateFromStores) {
        class D {
          constructor() {
            canResult = null != closure_1;
            if (canResult) {
              tmp3 = closure_7;
              tmp4 = Permissions;
              canResult = closure_7.can(Permissions.VIEW_CHANNEL, tmp);
            }
            return canResult;
          }
        }
        const items3 = [stateFromStores];
        cResult[5] = stateFromStores;
        cResult[6] = D;
        cResult[7] = items3;
        let tmp14 = items3;
      } else {
        class D {
          constructor() {
            canResult = null != closure_1;
            if (canResult) {
              tmp3 = closure_7;
              tmp4 = Permissions;
              canResult = closure_7.can(Permissions.VIEW_CHANNEL, tmp);
            }
            return canResult;
          }
        }
        tmp14 = cResult[7];
      }
      const tmpResult = channel(504);
      const stateFromStores1 = channel(504).useStateFromStores(tmp11, D, tmp14);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            canResult = null != closure_1;
            if (canResult) {
              tmp3 = closure_7;
              tmp4 = Permissions;
              canResult = closure_7.can(Permissions.VIEW_CHANNEL, tmp);
            }
            return canResult;
          }
        }
        const items4 = [GuildStore];
        cResult[8] = items4;
        const tmp16 = items4;
      } else {
        class D {
          constructor() {
            canResult = null != closure_1;
            if (canResult) {
              tmp3 = closure_7;
              tmp4 = Permissions;
              canResult = closure_7.can(Permissions.VIEW_CHANNEL, tmp);
            }
            return canResult;
          }
        }
      }
      if (cResult[9] === channel.guild_id) {
        class D {
          constructor() {
            canResult = null != closure_1;
            if (canResult) {
              tmp3 = closure_7;
              tmp4 = Permissions;
              canResult = closure_7.can(Permissions.VIEW_CHANNEL, tmp);
            }
            return canResult;
          }
        }
        const stateFromStores2 = tmp(504).useStateFromStores(tmp16, A, items5);
        if (cResult[13] === stateFromStores1) {
          class D {
            constructor() {
              canResult = null != closure_1;
              if (canResult) {
                tmp3 = closure_7;
                tmp4 = Permissions;
                canResult = closure_7.can(Permissions.VIEW_CHANNEL, tmp);
              }
              return canResult;
            }
          }
        }
        if (null == stateFromStores) {
          class D {
            constructor() {
              canResult = null != closure_1;
              if (canResult) {
                tmp3 = closure_7;
                tmp4 = Permissions;
                canResult = closure_7.can(Permissions.VIEW_CHANNEL, tmp);
              }
              return canResult;
            }
          }
          const obj2 = { channel };
          let tmp20 = closure_12(closure_18, obj2);
          cResult[13] = stateFromStores1;
          cResult[14] = channel;
          cResult[15] = stateFromStores;
          cResult[16] = tmp20;
        } else {
          class D {
            constructor() {
              canResult = null != closure_1;
              if (canResult) {
                tmp3 = closure_7;
                tmp4 = Permissions;
                canResult = closure_7.can(Permissions.VIEW_CHANNEL, tmp);
              }
              return canResult;
            }
          }
        }
        const obj3 = { channel: stateFromStores };
        tmp20 = closure_12(closure_17, obj3);
        const tmpResult4 = tmp(504);
      }
      class A {
        constructor() {
          tmp = channel;
          guild = closure_6.getGuild(channel.guild_id);
          rulesChannelId = undefined;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          return rulesChannelId === tmp.id;
        }
      }
      items5 = [,];
      ({ id: arr6[0], guild_id: arr6[1] } = channel);
      cResult[9] = channel.guild_id;
      cResult[10] = channel.id;
      cResult[11] = A;
      cResult[12] = items5;
      const tmpResult3 = channel(504);
    }
  : function ChannelNameHeaderContent(channel) {
      channel = channel.channel;
      let stateFromStores;
      const tmp = closure_15();
      importDefault = tmp;
      const tmp4 = require("useChannelName")(channel);
      let items = [ChannelStore];
      const items1 = [channel];
      stateFromStores = channel(stateFromStores[13]).useStateFromStores(
        items,
        () => {
          channel = null;
          if (channel.isThread()) {
            channel = ChannelStore.getChannel(channel.parent_id);
          }
          return channel;
        },
        items1,
      );
      let obj = channel(stateFromStores[13]);
      const tmp2 = importDefault;
      let tmp5 = channel;
      const items2 = [PermissionStore];
      const items3 = [stateFromStores];
      const stateFromStores1 = channel(stateFromStores[13]).useStateFromStores(
        items2,
        () => {
          let canResult = null != stateFromStores;
          if (canResult) {
            canResult = PermissionStore.can(constants.VIEW_CHANNEL, tmp);
          }
          return canResult;
        },
        items3,
      );
      let obj2 = channel(stateFromStores[13]);
      const items4 = [GuildStore];
      const items5 = [,];
      ({ id: arr6[0], guild_id: arr6[1] } = channel);
      const stateFromStores2 = channel(stateFromStores[13]).useStateFromStores(
        items4,
        () => {
          guild = GuildStore.getGuild(channel.guild_id);
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
          if (stateFromStores1) {
            const obj2 = { channel: tmp };
            let tmp3 = __initData(closure_17, obj2);
          }
          return tmp3;
        }
        tmp3 = __initData(closure_18, { channel });
        const obj = { channel };
      }, items6);
      const items8 = [
        stateFromStores1.useMemo(() => {
          if (channel.isDM()) {
            const obj3 = { style: closure_1.channelIcon, children: null };
            const obj4 = { channel };
            obj3.children = __initData(closure_16, obj4);
            return __initData(View, obj3);
          } else if (channel.isGroupDM()) {
            const obj5 = { style: closure_1.channelIcon, children: null };
            const obj6 = { channel, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
            obj5.children = __initData(GroupDMAvatarDefault, obj6);
            return __initData(View, obj5);
          } else {
            const obj7 = { isRulesChannel: stateFromStores2 };
            const channelIconComponent = utils_ChannelUtils.getChannelIconComponent(channel, obj7);
            let tmp5 = null;
            if (null != channelIconComponent) {
              const obj8 = { style: null, children: null };
              const items = [,];
              ({ channelIcon: arr[0], channelTypeBox: arr[1] } = closure_1);
              obj8.style = items;
              obj8.children = __initData(channelIconComponent, { size: "md", color: "mobile-text-heading-primary" });
              tmp5 = __initData(View, obj8);
            }
            return tmp5;
          }
        }, items7),
      ];
      let obj4 = { style: tmp.channelData, children: null };
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
        let tmp13Result = closure_12(tmp2(tmp3[25]), obj5);
        const tmp2Result = tmp2(tmp3[25]);
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
      let obj7 = { children: null };
      const items9 = [tmp13Result, memo];
      obj4.children = items9;
      items8[1] = closure_13(stateFromStores2, obj4);
      obj7.children = items8;
      return closure_13(closure_14, obj7);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DMChannelNameHeader(channel) {
      const cResult = channel(576).c(12);
      channel = channel.channel;
      const containerStyle = channel.containerStyle;
      const tmp4 = closure_15();
      analyticsLocations = analyticsLocations(6841)().analyticsLocations;
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === channel) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === containerStyle) {
          if (cResult[4] === tmp4.container) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] !== channel) {
            const obj2 = { channel };
            const tmp10 = closure_12(closure_19, obj2);
            cResult[6] = channel;
            cResult[7] = tmp10;
            let tmp7 = tmp10;
          } else {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp7) {
                let tmp11 = cResult[11];
              }
              return tmp11;
            }
          }
          const obj3 = { style: tmp6, onPress: tmp5, children: tmp7 };
          const tmp13 = closure_12(tmp(6189).PressableOpacity, obj3);
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
      let obj = channel(576);
      tmp = channel;
    }
  : function DMChannelNameHeader(channel) {
      channel = channel.channel;
      let analyticsLocations;
      analyticsLocations = analyticsLocations(6841)().analyticsLocations;
      const items = [channel, analyticsLocations];
      const callback = noop.useCallback(() => {
        const recipientId = channel.getRecipientId();
        if (null != recipientId) {
          const obj = { userId: recipientId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        }
      }, items);
      let obj = { style: null, onPress: callback, children: closure_12(closure_19, { channel }) };
      const items1 = [closure_15().container, channel.containerStyle];
      obj.style = items1;
      return closure_12(channel(6189).PressableOpacity, obj);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DefaultChannelNameHeader(arg0) {
      const cResult = c.c(8);
      ({ channel, containerStyle } = arg0);
      const tmp2 = closure_15();
      if (cResult[0] === containerStyle) {
        if (cResult[1] === tmp2.container) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] !== channel) {
          const obj2 = { channel };
          const tmp7 = __initData(closure_19, obj2);
          cResult[3] = channel;
          cResult[4] = tmp7;
          let tmp4 = tmp7;
        } else {
          tmp4 = cResult[4];
        }
        if (cResult[5] === tmp3) {
          if (cResult[6] === tmp4) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
        const obj3 = { style: tmp3, children: tmp4 };
        const tmp11 = __initData(View, obj3);
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
  : function DefaultChannelNameHeader(arg0) {
      ({ channel, containerStyle } = arg0);
      const obj = { style: null, children: null };
      const items = [closure_15().container, containerStyle];
      obj.style = items;
      obj.children = __initData(closure_19, { channel });
      return __initData(View, obj);
    };
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelNameHeader(arg0) {
        const cResult = c.c(6);
        ({ channel, containerStyle } = arg0);
        if (channel.isDM()) {
          if (cResult[0] === channel) {
          }
          const obj2 = { channel, containerStyle };
          const tmp9 = __initData(closure_20, obj2);
          cResult[0] = channel;
          cResult[1] = containerStyle;
          cResult[2] = tmp9;
        } else {
          if (cResult[3] === channel) {
            if (cResult[4] === containerStyle) {
              let tmp2 = cResult[5];
            }
            return tmp2;
          }
          const obj3 = { channel, containerStyle };
          const tmp5 = __initData(closure_21, obj3);
          cResult[3] = channel;
          cResult[4] = containerStyle;
          cResult[5] = tmp5;
          tmp2 = tmp5;
        }
      }
    : function ChannelNameHeader(arg0) {
        ({ channel, containerStyle } = arg0);
        if (channel.isDM()) {
          const obj2 = { channel, containerStyle };
          let tmpResult = __initData(closure_20, obj2);
        } else {
          const obj = { channel, containerStyle };
          tmpResult = __initData(closure_21, obj);
        }
        return tmpResult;
      },
);
