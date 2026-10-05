// discord_app/modules/guild_invite/native/InviteSettingsModal.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../design/components/Navigator/native/Navigator.native.tsx";
import CreateInviteModalActionCreatorsDefault from "../../../actions/CreateInviteModalActionCreators.tsx";
import CreateInstantInviteUtils from "../../../utils/CreateInstantInviteUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import CreateInviteModalStore from "../../../stores/CreateInviteModalStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import Constants from "../../../Constants.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, getGuild, navigation, setOptionsResult;

let c10;
let c9;
let obj2;
let obj3;
function render() {
  return closure_1_11(closure_1_13, {});
}
({ InviteModalScenes: c9, Permissions: c10 } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { formContainer: obj2, formContent: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let channel;
      let closure_2;
      let inviteSettings;
      let settings;
      let tmp6;
      let tmp7;
      let tmp = navigation;
      let obj = navigation(576);
      const cResult = obj.c(33);
      const tmp4 = closure_12();
      let obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, CreateInviteModalStore, GuildStore];
        const fn = function f() {
          const pendingSettings = CreateInviteModalStore.getPendingSettings();
          channel(closure_2[13])(null != pendingSettings, "Received null pending invite settings");
          const inviteSettings = CreateInviteModalStore.getInviteSettings();
          channel(closure_2[13])(null != inviteSettings, "Received null invite settings");
          channel = channel.getChannel(pendingSettings.channelId);
          let guildId;
          getGuild = getGuild.getGuild;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const obj = { settings: pendingSettings, inviteSettings, channel, guild: getGuild(guildId) };
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp6, tmp7);
      ({ settings, inviteSettings, channel } = stateFromStoresObject);
      const tmp12 = G(react.useState(channel), 2);
      const first = tmp12[0];
      let tmp15 = null != channel;
      const tmp14 = tmp12[1];
      if (tmp15) {
        tmp15 = channel !== first;
      }
      if (tmp15) {
        tmp14(channel);
      }
      if (cResult[2] === inviteSettings) {
        let tmp17;
        let tmp21;
        if (cResult[3] === settings) {
          tmp17 = cResult[4];
        }
        dependencyMap = tmp19;
        if (cResult[5] !== channel) {
          class D {
            constructor() {
              let intl;
              let intl2;
              if (null == channel) {
                const guildId = CreateInviteModalStore.getGuildId();
                let invitableChannelForGuild = null;
                if (null != guildId) {
                  const obj = CreateInstantInviteUtils;
                  invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
                }
                if (null != invitableChannelForGuild) {
                  const obj3 = { channelId: invitableChannelForGuild.channel.id };
                  const obj2 = CreateInviteModalActionCreatorsDefault;
                  obj2.updateSettings(obj3);
                } else {
                  const obj4 = {
                    title: intl.string(intl3.t.VINpSK),
                    body: intl2.string(intl3.t.kQ6fit),
                    onConfirm: CreateInviteModalActionCreatorsDefault.close,
                    isDismissable: false,
                  };
                  const show = AlertActionCreatorsDefault.show;
                  AlertActionCreatorsDefault;
                  intl = intl3.intl;
                  intl2 = intl3.intl;
                  show(obj4);
                }
              }
            }
          }
          const items1 = [channel];
          cResult[5] = channel;
          cResult[6] = D;
          cResult[7] = items1;
          tmp21 = items1;
        } else {
          class D {
            constructor() {
              let intl;
              let intl2;
              if (null == channel) {
                const guildId = CreateInviteModalStore.getGuildId();
                let invitableChannelForGuild = null;
                if (null != guildId) {
                  const obj = CreateInstantInviteUtils;
                  invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
                }
                if (null != invitableChannelForGuild) {
                  const obj3 = { channelId: invitableChannelForGuild.channel.id };
                  const obj2 = CreateInviteModalActionCreatorsDefault;
                  obj2.updateSettings(obj3);
                } else {
                  const obj4 = {
                    title: intl.string(intl3.t.VINpSK),
                    body: intl2.string(intl3.t.kQ6fit),
                    onConfirm: CreateInviteModalActionCreatorsDefault.close,
                    isDismissable: false,
                  };
                  const show = AlertActionCreatorsDefault.show;
                  AlertActionCreatorsDefault;
                  intl = intl3.intl;
                  intl2 = intl3.intl;
                  show(obj4);
                }
              }
            }
          }
          tmp21 = cResult[7];
        }
        const effect = react.useEffect(D, tmp21);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor() {
              const obj = channel(closure_2[20]);
              obj.wait(channel(closure_2[17]).resetSettings);
            }
          }
          cResult[8] = V;
        } else {
          class V {
            constructor() {
              const obj = channel(closure_2[20]);
              obj.wait(channel(closure_2[17]).resetSettings);
            }
          }
        }
        const tmpResult3 = tmp(5590);
        const unmountEffect = tmpResult3.useUnmountEffect(V);
        if (cResult[9] !== channel) {
          class G {
            constructor() {
              let intl;
              let intl2;
              if (null != channel) {
                if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, tmp)) {
                  const obj2 = CreateInviteModalActionCreatorsDefault;
                  const invite = obj2.createInvite("IOS Regenerate");
                  const obj3 = CreateInviteModalActionCreatorsDefault;
                  obj3.close();
                }
              }
              const obj = {
                title: intl.string(intl3.t.VINpSK),
                body: intl2.string(intl3.t.RiiKV0),
                onConfirm: CreateInviteModalActionCreatorsDefault.close,
                isDismissable: false,
              };
              const show = AlertActionCreatorsDefault.show;
              AlertActionCreatorsDefault;
              intl = intl3.intl;
              intl2 = intl3.intl;
              show(obj);
            }
          }
          cResult[9] = channel;
          cResult[10] = G;
        } else {
          class G {
            constructor() {
              let intl;
              let intl2;
              if (null != channel) {
                if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, tmp)) {
                  const obj2 = CreateInviteModalActionCreatorsDefault;
                  const invite = obj2.createInvite("IOS Regenerate");
                  const obj3 = CreateInviteModalActionCreatorsDefault;
                  obj3.close();
                }
              }
              const obj = {
                title: intl.string(intl3.t.VINpSK),
                body: intl2.string(intl3.t.RiiKV0),
                onConfirm: CreateInviteModalActionCreatorsDefault.close,
                isDismissable: false,
              };
              const show = AlertActionCreatorsDefault.show;
              AlertActionCreatorsDefault;
              intl = intl3.intl;
              intl2 = intl3.intl;
              show(obj);
            }
          }
        }
        G = tmp25;
        if (cResult[11] === !tmp17) {
          class G {
            constructor() {
              let intl;
              let intl2;
              if (null != channel) {
                if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, tmp)) {
                  const obj2 = CreateInviteModalActionCreatorsDefault;
                  const invite = obj2.createInvite("IOS Regenerate");
                  const obj3 = CreateInviteModalActionCreatorsDefault;
                  obj3.close();
                }
              }
              const obj = {
                title: intl.string(intl3.t.VINpSK),
                body: intl2.string(intl3.t.RiiKV0),
                onConfirm: CreateInviteModalActionCreatorsDefault.close,
                isDismissable: false,
              };
              const show = AlertActionCreatorsDefault.show;
              AlertActionCreatorsDefault;
              intl = intl3.intl;
              intl2 = intl3.intl;
              show(obj);
            }
          }
        }
        class M {
          constructor() {
            obj = {
              headerRight() {
                let tmp;
                if (closure_1_2) {
                  const HeaderActionButton = navigation(closure_2[22]).HeaderActionButton;
                  const intl = navigation(closure_2[19]).intl;
                  tmp = (
                    <HeaderActionButton onPress={onPress} text={intl.string(navigation(closure_2[19]).t["R3BPH+"])} />
                  );
                }
                return tmp;
              },
            };
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
        const items2 = [navigation, !tmp17, tmp25];
        cResult[11] = !tmp17;
        cResult[12] = tmp25;
        cResult[13] = navigation;
        cResult[14] = M;
        cResult[15] = items2;
      }
      const tmpResult4 = tmp(12);
      const isEqualResult = tmpResult4.isEqual(settings, inviteSettings);
      cResult[2] = inviteSettings;
      cResult[3] = settings;
      cResult[4] = isEqualResult;
      tmp17 = isEqualResult;
    }
  : () => {
      let callback;
      let channel;
      let closure_2;
      let guild;
      let inviteSettings;
      let settings;
      let tmp = closure_12();
      let obj = navigation(1490);
      navigation = obj.useNavigation();
      let obj2 = navigation(504);
      const items = [ChannelStore, CreateInviteModalStore, GuildStore];
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        const pendingSettings = CreateInviteModalStore.getPendingSettings();
        channel(closure_2[13])(null != pendingSettings, "Received null pending invite settings");
        const inviteSettings = CreateInviteModalStore.getInviteSettings();
        channel(closure_2[13])(null != inviteSettings, "Received null invite settings");
        channel = channel.getChannel(pendingSettings.channelId);
        let guildId;
        getGuild = getGuild.getGuild;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        const obj = { settings: pendingSettings, inviteSettings, channel, guild: getGuild(guildId) };
        return obj;
      });
      ({ settings, channel } = stateFromStoresObject);
      ({ inviteSettings, guild } = stateFromStoresObject);
      const tmp6 = callback(react.useState(channel), 2);
      const first = tmp6[0];
      let tmp9 = null != channel;
      const tmp8 = tmp6[1];
      if (tmp9) {
        tmp9 = channel !== first;
      }
      if (tmp9) {
        tmp8(channel);
      }
      const tmp2Result = navigation(12);
      const tmp11 = !tmp2Result.isEqual(settings, inviteSettings);
      dependencyMap = tmp11;
      const items1 = [channel];
      const effect = react.useEffect(() => {
        let intl;
        let intl2;
        if (null == channel) {
          const guildId = CreateInviteModalStore.getGuildId();
          let invitableChannelForGuild = null;
          if (null != guildId) {
            const obj = CreateInstantInviteUtils;
            invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
          }
          if (null != invitableChannelForGuild) {
            const obj3 = { channelId: invitableChannelForGuild.channel.id };
            const obj2 = CreateInviteModalActionCreatorsDefault;
            obj2.updateSettings(obj3);
          } else {
            const obj4 = {
              title: intl.string(intl3.t.VINpSK),
              body: intl2.string(intl3.t.kQ6fit),
              onConfirm: CreateInviteModalActionCreatorsDefault.close,
              isDismissable: false,
            };
            const show = AlertActionCreatorsDefault.show;
            AlertActionCreatorsDefault;
            intl = intl3.intl;
            intl2 = intl3.intl;
            show(obj4);
          }
        }
      }, items1);
      const tmp2Result2 = navigation(5590);
      const unmountEffect = tmp2Result2.useUnmountEffect(() => {
        const obj = channel(closure_2[20]);
        obj.wait(channel(closure_2[17]).resetSettings);
      });
      const items2 = [channel];
      callback = react.useCallback(() => {
        let intl;
        let intl2;
        if (null != channel) {
          if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, tmp)) {
            const obj2 = CreateInviteModalActionCreatorsDefault;
            const invite = obj2.createInvite("IOS Regenerate");
            const obj3 = CreateInviteModalActionCreatorsDefault;
            obj3.close();
          }
        }
        const obj = {
          title: intl.string(intl3.t.VINpSK),
          body: intl2.string(intl3.t.RiiKV0),
          onConfirm: CreateInviteModalActionCreatorsDefault.close,
          isDismissable: false,
        };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl3.intl;
        intl2 = intl3.intl;
        show(obj);
      }, items2);
      const items3 = [navigation, tmp11, callback];
      const effect1 = react.useEffect(() => {
        let onPress;
        const obj = {
          headerRight() {
            let tmp;
            if (closure_1_2) {
              const HeaderActionButton = navigation(closure_2[22]).HeaderActionButton;
              const intl = navigation(closure_2[19]).intl;
              tmp = <HeaderActionButton onPress={onPress} text={intl.string(navigation(closure_2[19]).t["R3BPH+"])} />;
            }
            return tmp;
          },
        };
        navigation.setOptions(obj);
      }, items3);
      const callback1 = react.useCallback((maxUses) => {
        const obj = channel(closure_2[17]);
        const obj2 = { maxUses };
        obj.updateSettings(obj2);
      }, []);
      const callback2 = react.useCallback((maxAge) => {
        const obj = channel(closure_2[17]);
        const obj2 = { maxAge };
        obj.updateSettings(obj2);
      }, []);
      const callback3 = react.useCallback((temporary) => {
        const obj = channel(closure_2[17]);
        const obj2 = { temporary };
        obj.updateSettings(obj2);
      }, []);
      const callback4 = react.useCallback((flags) => {
        const obj = channel(closure_2[17]);
        const obj2 = { flags };
        obj.updateSettings(obj2);
      }, []);
      const callback5 = react.useCallback((roleIds) => {
        const obj = channel(closure_2[17]);
        const obj2 = { roleIds };
        obj.updateSettings(obj2);
      }, []);
      const Form = tmp2(8895).Form;
      ({
        style: tmp.formContent,
        channel: first,
        guild,
        maxAge: settings.maxAge,
        maxUses: settings.maxUses,
        maxUsesOptions: channel(9483).getMaxUsesOptions,
        temporary: null,
        flags: null,
        roleIds: null,
        onChangeMaxAge: callback2,
        onChangeMaxUses: callback1,
        onChangeTemporary: callback3,
        onChangeFlags: callback4,
        onChangeRoleIds: callback5,
      });
      channel(17991);
      ({ temporary: obj7.temporary, flags: obj7.flags, roleIds: obj7.roleIds } = settings);
      return <Form contentContainerStyle={tmp.formContainer}>{null}</Form>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let tmp7;
      let tmpResult;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        const ADVANCED = constants.ADVANCED;
        const obj3 = {
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE_LINK_SETTINGS,
          title: intl.string(intl3.t.Yx4IiC),
          headerLeft: tmpResult.getHeaderCloseButton(CreateInviteModalActionCreatorsDefault.close),
          render,
        };
        intl = intl3.intl;
        obj2[ADVANCED] = obj3;
        cResult[0] = obj2;
        first = obj2;
        tmpResult = NavigatorHeader;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = jsx(Navigator.Navigator, { screens: first, initialRouteName: constants.ADVANCED });
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      const memo = react.useMemo(() => {
        let intl;
        let obj3;
        const obj = {};
        const ADVANCED = constants.ADVANCED;
        const obj2 = {
          impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_INVITE_LINK_SETTINGS,
          title: intl.string(require("intl").t.Yx4IiC),
          headerLeft: obj3.getHeaderCloseButton(CreateInviteModalActionCreatorsDefault.close),
          render,
        };
        intl = require("intl").intl;
        obj[ADVANCED] = obj2;
        obj3 = require("NavigatorHeader");
        return obj;
      }, []);
      return jsx(Navigator.Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
    };
const result = size.fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default tmp4;
