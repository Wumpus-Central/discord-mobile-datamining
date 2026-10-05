// discord_app/modules/guild_invite/native/InviteSettingsModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../design/components/Navigator/native/Navigator.native.tsx";
import CreateInviteModalActionCreatorsDefault from "../../../actions/CreateInviteModalActionCreators.tsx";
import CreateInstantInviteUtils from "../../../utils/CreateInstantInviteUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import CreateInviteModalStore from "../../../stores/CreateInviteModalStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ InviteModalScenes: closure_9, Permissions: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = {
  formContainer: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 },
  formContent: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj2.formContent = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = navigation(576).c(33);
      closure_12();
      let obj = navigation(576);
      navigation = navigation(1490).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, CreateInviteModalStore, GuildStore];
        const fn = function f() {
          const pendingSettings = CreateInviteModalStore.getPendingSettings();
          channel(38)(null != pendingSettings, "Received null pending invite settings");
          const inviteSettings = CreateInviteModalStore.getInviteSettings();
          channel(38)(null != inviteSettings, "Received null invite settings");
          channel = channel.getChannel(pendingSettings.channelId);
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          return { settings: pendingSettings, inviteSettings, channel, guild: guild.getGuild(guildId) };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj2 = navigation(1490);
      const stateFromStoresObject = navigation(504).useStateFromStoresObject(tmp6, tmp7);
      ({ settings, inviteSettings, channel } = stateFromStoresObject);
      const tmp12 = _slicedToArray(noop.useState(channel), 2);
      let tmp13 = null != channel;
      if (tmp13) {
        tmp13 = channel !== tmp12[0];
      }
      if (tmp13) {
        tmp12[1](channel);
      }
      if (cResult[2] === inviteSettings) {
        if (cResult[3] === settings) {
          let tmp15 = cResult[4];
        }
        dependencyMap = tmp17;
        if (cResult[5] !== channel) {
          class D {
            constructor() {
              if (null == channel) {
                tmp7 = closure_6;
                guildId = closure_6.getGuildId();
                invitableChannelForGuild = null;
                if (null != guildId) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[16]);
                  invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
                }
                if (null != invitableChannelForGuild) {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj2 = closure_1(closure_2[17]);
                  obj1 = { channelId: null };
                  obj1.channelId = invitableChannelForGuild.channel.id;
                  updateSettingsResult = obj2.updateSettings(obj1);
                } else {
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj4 = closure_1(closure_2[18]);
                  obj6 = { title: null, body: null, onConfirm: null, isDismissable: false };
                  tmp11 = closure_0;
                  intl = closure_0(closure_2[19]).intl;
                  obj6.title = intl.string(closure_0(closure_2[19]).t.VINpSK);
                  intl2 = closure_0(closure_2[19]).intl;
                  obj6.body = intl2.string(closure_0(closure_2[19]).t.kQ6fit);
                  obj6.onConfirm = closure_1(closure_2[17]).close;
                  showResult = obj4.show(obj6);
                }
              }
              return;
            }
          }
          const items1 = [channel];
          cResult[5] = channel;
          cResult[6] = D;
          cResult[7] = items1;
          let tmp19 = items1;
        } else {
          class D {
            constructor() {
              if (null == channel) {
                tmp7 = closure_6;
                guildId = closure_6.getGuildId();
                invitableChannelForGuild = null;
                if (null != guildId) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[16]);
                  invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
                }
                if (null != invitableChannelForGuild) {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj2 = closure_1(closure_2[17]);
                  obj1 = { channelId: null };
                  obj1.channelId = invitableChannelForGuild.channel.id;
                  updateSettingsResult = obj2.updateSettings(obj1);
                } else {
                  tmp9 = closure_1;
                  tmp10 = closure_2;
                  obj4 = closure_1(closure_2[18]);
                  obj6 = { title: null, body: null, onConfirm: null, isDismissable: false };
                  tmp11 = closure_0;
                  intl = closure_0(closure_2[19]).intl;
                  obj6.title = intl.string(closure_0(closure_2[19]).t.VINpSK);
                  intl2 = closure_0(closure_2[19]).intl;
                  obj6.body = intl2.string(closure_0(closure_2[19]).t.kQ6fit);
                  obj6.onConfirm = closure_1(closure_2[17]).close;
                  showResult = obj4.show(obj6);
                }
              }
              return;
            }
          }
          tmp19 = cResult[7];
        }
        const effect = noop.useEffect(D, tmp19);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor() {
              obj = channel(closure_2[20]);
              waitResult = obj.wait(channel(closure_2[17]).resetSettings);
              return;
            }
          }
          cResult[8] = V;
        } else {
          class V {
            constructor() {
              obj = channel(closure_2[20]);
              waitResult = obj.wait(channel(closure_2[17]).resetSettings);
              return;
            }
          }
        }
        const unmountEffect = tmp(5590).useUnmountEffect(V);
        if (cResult[9] !== channel) {
          class G {
            constructor() {
              if (null != channel) {
                tmp2 = closure_8;
                tmp3 = Permissions;
                if (closure_8.can(Permissions.CREATE_INSTANT_INVITE, tmp)) {
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj3 = closure_1(closure_2[17]);
                  str = "IOS Regenerate";
                  invite = obj3.createInvite("IOS Regenerate");
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj4 = closure_1(closure_2[17]);
                  closeResult = obj4.close();
                }
                return;
              }
              obj = closure_1(closure_2[18]);
              obj1 = { title: null, body: null, onConfirm: null, isDismissable: false };
              intl = closure_0(closure_2[19]).intl;
              obj1.title = intl.string(closure_0(closure_2[19]).t.VINpSK);
              intl2 = closure_0(closure_2[19]).intl;
              obj1.body = intl2.string(closure_0(closure_2[19]).t.RiiKV0);
              obj1.onConfirm = closure_1(closure_2[17]).close;
              showResult = obj.show(obj1);
              return;
            }
          }
          cResult[9] = channel;
          cResult[10] = G;
        } else {
          class G {
            constructor() {
              if (null != channel) {
                tmp2 = closure_8;
                tmp3 = Permissions;
                if (closure_8.can(Permissions.CREATE_INSTANT_INVITE, tmp)) {
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj3 = closure_1(closure_2[17]);
                  str = "IOS Regenerate";
                  invite = obj3.createInvite("IOS Regenerate");
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj4 = closure_1(closure_2[17]);
                  closeResult = obj4.close();
                }
                return;
              }
              obj = closure_1(closure_2[18]);
              obj1 = { title: null, body: null, onConfirm: null, isDismissable: false };
              intl = closure_0(closure_2[19]).intl;
              obj1.title = intl.string(closure_0(closure_2[19]).t.VINpSK);
              intl2 = closure_0(closure_2[19]).intl;
              obj1.body = intl2.string(closure_0(closure_2[19]).t.RiiKV0);
              obj1.onConfirm = closure_1(closure_2[17]).close;
              showResult = obj.show(obj1);
              return;
            }
          }
        }
        _slicedToArray = G;
        if (cResult[11] === !tmp15) {
          class G {
            constructor() {
              if (null != channel) {
                tmp2 = closure_8;
                tmp3 = Permissions;
                if (closure_8.can(Permissions.CREATE_INSTANT_INVITE, tmp)) {
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj3 = closure_1(closure_2[17]);
                  str = "IOS Regenerate";
                  invite = obj3.createInvite("IOS Regenerate");
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj4 = closure_1(closure_2[17]);
                  closeResult = obj4.close();
                }
                return;
              }
              obj = closure_1(closure_2[18]);
              obj1 = { title: null, body: null, onConfirm: null, isDismissable: false };
              intl = closure_0(closure_2[19]).intl;
              obj1.title = intl.string(closure_0(closure_2[19]).t.VINpSK);
              intl2 = closure_0(closure_2[19]).intl;
              obj1.body = intl2.string(closure_0(closure_2[19]).t.RiiKV0);
              obj1.onConfirm = closure_1(closure_2[17]).close;
              showResult = obj.show(obj1);
              return;
            }
          }
        }
        class M {
          constructor() {
            obj = {
              headerRight() {
                let tmp;
                if (dependencyMap) {
                  const obj = { onPress, text: null };
                  const intl = navigation(1126).intl;
                  obj.text = intl.string(navigation(1126).t["R3BPH+"]);
                  tmp = jsx(navigation(6880).HeaderActionButton, { onPress, text: null });
                }
                return tmp;
              },
            };
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
        const items2 = [navigation, !tmp15, G];
        cResult[11] = !tmp15;
        cResult[12] = G;
        cResult[13] = navigation;
        cResult[14] = M;
        cResult[15] = items2;
        const tmpResult3 = tmp(5590);
      }
      const tmpResult = navigation(504);
      const isEqualResult = navigation(12).isEqual(settings, inviteSettings);
      cResult[2] = inviteSettings;
      cResult[3] = settings;
      cResult[4] = isEqualResult;
      tmp15 = isEqualResult;
      const tmpResult4 = navigation(12);
    }
  : () => {
      let tmp = closure_12();
      navigation = navigation(1490).useNavigation();
      let obj = navigation(1490);
      const items = [ChannelStore, CreateInviteModalStore, GuildStore];
      const stateFromStoresObject = navigation(504).useStateFromStoresObject(items, () => {
        const pendingSettings = CreateInviteModalStore.getPendingSettings();
        channel(38)(null != pendingSettings, "Received null pending invite settings");
        const inviteSettings = CreateInviteModalStore.getInviteSettings();
        channel(38)(null != inviteSettings, "Received null invite settings");
        channel = channel.getChannel(pendingSettings.channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        return { settings: pendingSettings, inviteSettings, channel, guild: guild.getGuild(guildId) };
      });
      ({ settings, channel } = stateFromStoresObject);
      ({ inviteSettings, guild } = stateFromStoresObject);
      const tmp6 = callback(noop.useState(channel), 2);
      const first = tmp6[0];
      let tmp8 = null != channel;
      if (tmp8) {
        tmp8 = channel !== first;
      }
      if (tmp8) {
        tmp6[1](channel);
      }
      let obj2 = navigation(504);
      const tmp10 = !navigation(12).isEqual(settings, inviteSettings);
      dependencyMap = tmp10;
      const items1 = [channel];
      const effect = noop.useEffect(() => {
        if (null == channel) {
          const guildId = CreateInviteModalStore.getGuildId();
          let invitableChannelForGuild = null;
          if (null != guildId) {
            invitableChannelForGuild = CreateInstantInviteUtils.getInvitableChannelForGuild(guildId);
          }
          if (null != invitableChannelForGuild) {
            const obj3 = { channelId: invitableChannelForGuild.channel.id };
            CreateInviteModalActionCreatorsDefault.updateSettings(obj3);
          } else {
            const obj5 = { title: null, body: null, onConfirm: null, isDismissable: false };
            const intl = util.intl;
            obj5.title = intl.string(util.t.VINpSK);
            const intl2 = util.intl;
            obj5.body = intl2.string(util.t.kQ6fit);
            obj5.onConfirm = CreateInviteModalActionCreatorsDefault.close;
            AlertActionCreatorsDefault.show(obj5);
          }
        }
      }, items1);
      const tmp2Result = navigation(12);
      const unmountEffect = navigation(5590).useUnmountEffect(() => {
        channel(584).wait(channel(9487).resetSettings);
      });
      const items2 = [channel];
      callback = noop.useCallback(() => {
        if (null != channel) {
          if (PermissionStore.can(constants2.CREATE_INSTANT_INVITE, tmp)) {
            const invite = CreateInviteModalActionCreatorsDefault.createInvite("IOS Regenerate");
            CreateInviteModalActionCreatorsDefault.close();
          }
        }
        const obj2 = { title: null, body: null, onConfirm: null, isDismissable: false };
        const intl = util.intl;
        obj2.title = intl.string(util.t.VINpSK);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.RiiKV0);
        obj2.onConfirm = CreateInviteModalActionCreatorsDefault.close;
        AlertActionCreatorsDefault.show(obj2);
      }, items2);
      const items3 = [navigation, tmp10, callback];
      const effect1 = noop.useEffect(() => {
        navigation.setOptions({
          headerRight() {
            let tmp;
            if (dependencyMap) {
              const obj = { onPress, text: null };
              const intl = navigation(1126).intl;
              obj.text = intl.string(navigation(1126).t["R3BPH+"]);
              tmp = jsx(navigation(6880).HeaderActionButton, { onPress, text: null });
            }
            return tmp;
          },
        });
      }, items3);
      const callback1 = noop.useCallback((maxUses) => {
        channel(9487).updateSettings({ maxUses });
      }, []);
      const callback2 = noop.useCallback((maxAge) => {
        channel(9487).updateSettings({ maxAge });
      }, []);
      const callback3 = noop.useCallback((temporary) => {
        channel(9487).updateSettings({ temporary });
      }, []);
      const callback4 = noop.useCallback((flags) => {
        channel(9487).updateSettings({ flags });
      }, []);
      const callback5 = noop.useCallback((roleIds) => {
        channel(9487).updateSettings({ roleIds });
      }, []);
      let obj4 = { contentContainerStyle: tmp.formContainer, children: null };
      let obj5 = {
        style: tmp.formContent,
        channel: first,
        guild,
        maxAge: settings.maxAge,
        maxUses: settings.maxUses,
        maxUsesOptions: null,
        temporary: null,
        flags: null,
        roleIds: null,
        onChangeMaxAge: null,
        onChangeMaxUses: null,
        onChangeTemporary: null,
        onChangeFlags: null,
        onChangeRoleIds: null,
      };
      const tmp2Result2 = navigation(5590);
      obj5.maxUsesOptions = channel(9483).getMaxUsesOptions;
      ({ temporary: obj7.temporary, flags: obj7.flags, roleIds: obj7.roleIds } = settings);
      obj5.onChangeMaxAge = callback2;
      obj5.onChangeMaxUses = callback1;
      obj5.onChangeTemporary = callback3;
      obj5.onChangeFlags = callback4;
      obj5.onChangeRoleIds = callback5;
      obj4.children = jsx(channel(17991), {
        style: tmp.formContent,
        channel: first,
        guild,
        maxAge: settings.maxAge,
        maxUses: settings.maxUses,
        maxUsesOptions: null,
        temporary: null,
        flags: null,
        roleIds: null,
        onChangeMaxAge: null,
        onChangeMaxUses: null,
        onChangeTemporary: null,
        onChangeFlags: null,
        onChangeRoleIds: null,
      });
      return jsx(navigation(8895).Form, { contentContainerStyle: tmp.formContainer, children: null });
    };
ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        const obj3 = {
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE_LINK_SETTINGS,
          title: null,
          headerLeft: null,
          render: null,
        };
        const intl = util.intl;
        obj3.title = intl.string(util.t.Yx4IiC);
        obj3.headerLeft = NavigatorHeader.getHeaderCloseButton(CreateInviteModalActionCreatorsDefault.close);
        obj3.render = function render() {
          return closure_1_11(closure_1_13, {});
        };
        obj2[constants.ADVANCED] = obj3;
        cResult[0] = obj2;
        let first = obj2;
        const tmpResult = NavigatorHeader;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { screens: first, initialRouteName: constants.ADVANCED };
        const tmp10 = jsx(Navigator.Navigator, { screens: first, initialRouteName: constants.ADVANCED });
        cResult[1] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      const memo = noop.useMemo(() => {
        const obj = {};
        const obj2 = {
          impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_INVITE_LINK_SETTINGS,
          title: null,
          headerLeft: null,
          render: null,
        };
        const intl = require("util").intl;
        obj2.title = intl.string(require("util").t.Yx4IiC);
        obj2.headerLeft = require("NavigatorHeader").getHeaderCloseButton(CreateInviteModalActionCreatorsDefault.close);
        obj2.render = function render() {
          return closure_1_11(closure_1_13, {});
        };
        obj[constants.ADVANCED] = obj2;
        return obj;
      }, []);
      return jsx(Navigator.Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
    };
