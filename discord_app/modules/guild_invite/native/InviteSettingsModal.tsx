// === Module 17793: InviteSettingsModal ===

// Module 17793 (InviteSettingsModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import Navigator from "Navigator" /* 7000 */;
import CreateInviteModalActionCreatorsDefault from "CreateInviteModalActionCreators" /* 9826 */;
import CreateInstantInviteUtils from "CreateInstantInviteUtils" /* 17794 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9821 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function AdvancedInstantInviteScreen() {
  let tmp = closure_12();
  let obj = navigation(1483);
  navigation = obj.useNavigation();
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
  let tmp2Result = tmp2(12);
  const tmp10 = !tmp2Result.isEqual(settings, inviteSettings);
  dependencyMap = tmp10;
  const items1 = [channel];
  const effect = noop.useEffect(() => {
    if (null == channel) {
      const guildId = CreateInviteModalStore.getGuildId();
      let invitableChannelForGuild = null;
      if (null != guildId) {
        let obj = CreateInstantInviteUtils;
        invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
      }
      if (null != invitableChannelForGuild) {
        obj = { channelId: invitableChannelForGuild.channel.id };
        CreateInviteModalActionCreatorsDefault.updateSettings(obj);
      } else {
        obj = { title: null, body: null, onConfirm: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.VINpSK);
        const intl2 = util.intl;
        obj.body = intl2.string(util.t.kQ6fit);
        obj.onConfirm = CreateInviteModalActionCreatorsDefault.close;
        AlertActionCreatorsDefault.show(obj);
      }
    }
  }, items1);
  tmp2Result = tmp2(4992);
  const unmountEffect = tmp2Result.useUnmountEffect(() => {
    channel(573).wait(channel(9826).resetSettings);
  });
  const items2 = [channel];
  callback = noop.useCallback(() => {
    if (null != channel) {
      if (PermissionStore.can(constants2.CREATE_INSTANT_INVITE, tmp)) {
        const invite = CreateInviteModalActionCreatorsDefault.createInvite("IOS Regenerate");
        CreateInviteModalActionCreatorsDefault.close();
      }
    }
    const obj = { title: null, body: null, onConfirm: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.VINpSK);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.RiiKV0);
    obj.onConfirm = CreateInviteModalActionCreatorsDefault.close;
    obj.show(obj);
  }, items2);
  const items3 = [navigation, tmp10, callback];
  const effect1 = noop.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        let tmp;
        if (dependencyMap) {
          const obj = { onPress, text: null };
          const intl = navigation(1114).intl;
          obj.text = intl.string(navigation(1114).t["R3BPH+"]);
          tmp = jsx(navigation(7377).HeaderActionButton, { onPress, text: null });
        }
        return tmp;
      }
    });
  }, items3);
  const callback1 = noop.useCallback((maxUses) => {
    channel(9826);
    const obj = { maxUses };
    obj.updateSettings(obj);
  }, []);
  const callback2 = noop.useCallback((maxAge) => {
    channel(9826);
    const obj = { maxAge };
    obj.updateSettings(obj);
  }, []);
  const callback3 = noop.useCallback((temporary) => {
    channel(9826);
    const obj = { temporary };
    obj.updateSettings(obj);
  }, []);
  const callback4 = noop.useCallback((flags) => {
    channel(9826);
    const obj = { flags };
    obj.updateSettings(obj);
  }, []);
  const callback5 = noop.useCallback((roleIds) => {
    channel(9826);
    const obj = { roleIds };
    obj.updateSettings(obj);
  }, []);
  obj = { contentContainerStyle: tmp.formContainer, children: null };
  obj = { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null };
  let obj2 = navigation(504);
  obj.maxUsesOptions = channel(9822).getMaxUsesOptions;
  ({ temporary: obj7.temporary, flags: obj7.flags, roleIds: obj7.roleIds } = settings);
  obj.onChangeMaxAge = callback2;
  obj.onChangeMaxUses = callback1;
  obj.onChangeTemporary = callback3;
  obj.onChangeFlags = callback4;
  obj.onChangeRoleIds = callback5;
  obj.children = jsx(channel(17795), { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null });
  return jsx(navigation(8593).Form, { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null });
}
const Constants = fn(1074);
({ InviteModalScenes: closure_9, Permissions: c10 } = Constants);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { formContainer: null, formContent: null };
createStyles = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles.formContainer = createStyles;
createStyles.formContent = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default function InviteSettingsModal() {
  const memo = noop.useMemo(() => {
    let obj = {};
    obj = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE_LINK_SETTINGS, title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.Yx4IiC);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(CreateInviteModalActionCreatorsDefault.close);
    obj.render = function render() {
      return closure_1_11(closure_1_13, {});
    };
    obj[constants.ADVANCED] = obj;
    return obj;
  }, []);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
};