// discord_app/modules/guild_invite/native/InviteSettingsModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigationStack from "../../../design/components/Navigator/native/Navigator.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import updateWithLatestInvite from "../../../stores/CreateInviteModalStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function AdvancedInstantInviteScreen() {
  let tmp = callback();
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [closure_5, closure_6, closure_7];
  const stateFromStoresObject = navigation(589).useStateFromStoresObject(items, () => {
    const pendingSettings = store.getPendingSettings();
    channel(38)(null != pendingSettings, "Received null pending invite settings");
    const inviteSettings = store.getInviteSettings();
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
  const tmp6 = callback(React.useState(channel), 2);
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
  const effect = React.useEffect(() => {
    if (null == channel) {
      const guildId = closure_1_6.getGuildId();
      let invitableChannelForGuild = null;
      if (null != guildId) {
        let obj = navigation(17015);
        invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
      }
      if (null != invitableChannelForGuild) {
        obj = { channelId: null };
        obj[0] = invitableChannelForGuild.channel.id;
        channel(8925).updateSettings(obj);
        const obj2 = channel(8925);
      } else {
        obj = { title: null, body: null, onConfirm: null };
        const intl = navigation(1236).intl;
        obj[0] = intl.string(navigation(1236).t.VINpSK);
        const intl2 = navigation(1236).intl;
        obj[1] = intl2.string(navigation(1236).t.kQ6fit);
        obj[2] = channel(8925).close;
        channel(4827).show(obj);
        const obj4 = channel(4827);
      }
    }
  }, items1);
  tmp2Result = tmp2(4761);
  const unmountEffect = tmp2Result.useUnmountEffect(() => {
    channel(709).wait(channel(8925).resetSettings);
  });
  const items2 = [channel];
  callback = React.useCallback(() => {
    if (null != channel) {
      if (closure_1_8.can(closure_1_10.CREATE_INSTANT_INVITE, tmp)) {
        const invite = channel(8925).createInvite("IOS Regenerate");
        const obj3 = channel(8925);
        channel(8925).close();
        const obj4 = channel(8925);
      }
    }
    channel(4827);
    const obj = { title: null, body: null, onConfirm: null };
    const intl = navigation(1236).intl;
    obj[0] = intl.string(navigation(1236).t.VINpSK);
    const intl2 = navigation(1236).intl;
    obj[1] = intl2.string(navigation(1236).t.RiiKV0);
    obj[2] = channel(8925).close;
    obj.show(obj);
  }, items2);
  const items3 = [navigation, tmp10, callback];
  const effect1 = React.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        let tmp;
        if (closure_2) {
          const obj = { onPress: null, text: null };
          obj[0] = closure_3;
          const intl = navigation(closure_1_2[17]).intl;
          obj[1] = intl.string(navigation(closure_1_2[17]).t["R3BPH+"]);
          tmp = closure_1_11(navigation(closure_1_2[20]).HeaderActionButton, obj);
        }
        return tmp;
      }
    });
  }, items3);
  const callback1 = React.useCallback((maxUses) => {
    channel(8925);
    const obj = { maxUses };
    obj.updateSettings(obj);
  }, []);
  const callback2 = React.useCallback((maxAge) => {
    channel(8925);
    const obj = { maxAge };
    obj.updateSettings(obj);
  }, []);
  const callback3 = React.useCallback((temporary) => {
    channel(8925);
    const obj = { temporary };
    obj.updateSettings(obj);
  }, []);
  const callback4 = React.useCallback((flags) => {
    channel(8925);
    const obj = { flags };
    obj.updateSettings(obj);
  }, []);
  const callback5 = React.useCallback((roleIds) => {
    channel(8925);
    const obj = { roleIds };
    obj.updateSettings(obj);
  }, []);
  obj = { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null };
  let obj2 = navigation(589);
  obj[5] = channel(8920).getMaxUsesOptions;
  ({ temporary: obj7[6], flags: obj7[7], roleIds: obj7[8] } = settings);
  obj[9] = callback2;
  obj[10] = callback1;
  obj[11] = callback3;
  obj[12] = callback4;
  obj[13] = callback5;
  obj[1] = jsx(channel(17016), { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null });
  return jsx(navigation(8083).Form, { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null });
}
({ InviteModalScenes: c9, Permissions: c10 } = ME);
const createCacheKey = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default function InviteSettingsModal() {
  const memo = React.useMemo(() => {
    const obj = { impressionName: callback(503).ImpressionNames.GUILD_INVITE_LINK_SETTINGS, title: null, headerLeft: null, render: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.Yx4IiC);
    obj[2] = callback(6314).getHeaderCloseButton(callback2(8925).close);
    obj[3] = function render() {
      return callback(closure_13, {});
    };
    obj[constants.ADVANCED] = obj;
    return obj;
  }, []);
  return jsx(NavigationStack.Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
};