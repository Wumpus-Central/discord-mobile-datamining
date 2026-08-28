// discord_app/modules/guild_invite/native/InviteSettingsModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigationStack from "../../../design/components/Navigator/native/Navigator.native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/ChannelStore.tsx";
import closure_6 from "../../../stores/CreateInviteModalStore.tsx";
import closure_7 from "../../../stores/GuildStore.tsx";
import closure_8 from "../../../stores/PermissionStore.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
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
  const effect = obj3.useEffect(() => {
    if (null == channel) {
      const guildId = closure_1_6.getGuildId();
      let invitableChannelForGuild = null;
      if (null != guildId) {
        let obj = navigation(17309);
        invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
      }
      if (null != invitableChannelForGuild) {
        obj = { channelId: null };
        obj[0] = invitableChannelForGuild.channel.id;
        channel(9853).updateSettings(obj);
        const obj2 = channel(9853);
      } else {
        obj = { title: null, body: null, onConfirm: null };
        const intl = navigation(1236).intl;
        obj[0] = intl.string(navigation(1236).t.VINpSK);
        const intl2 = navigation(1236).intl;
        obj[1] = intl2.string(navigation(1236).t.kQ6fit);
        obj[2] = channel(9853).close;
        channel(4822).show(obj);
        const obj4 = channel(4822);
      }
    }
  }, items1);
  tmp2Result = tmp2(4910);
  const unmountEffect = tmp2Result.useUnmountEffect(() => {
    channel(709).wait(channel(9853).resetSettings);
  });
  const items2 = [channel];
  callback = obj3.useCallback(() => {
    if (null != channel) {
      if (closure_1_8.can(closure_1_10.CREATE_INSTANT_INVITE, tmp)) {
        const invite = channel(9853).createInvite("IOS Regenerate");
        const obj3 = channel(9853);
        channel(9853).close();
        const obj4 = channel(9853);
      }
    }
    let obj = channel(4822);
    obj = { title: null, body: null, onConfirm: null };
    const intl = navigation(1236).intl;
    obj[0] = intl.string(navigation(1236).t.VINpSK);
    const intl2 = navigation(1236).intl;
    obj[1] = intl2.string(navigation(1236).t.RiiKV0);
    obj[2] = channel(9853).close;
    obj.show(obj);
  }, items2);
  const items3 = [navigation, tmp10, callback];
  const effect1 = obj3.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        let tmp;
        if (closure_2) {
          const obj = { onPress: null, text: null };
          obj[0] = closure_3;
          const intl = closure_1_0(closure_1_2[17]).intl;
          obj[1] = intl.string(closure_1_0(closure_1_2[17]).t["R3BPH+"]);
          tmp = closure_1_11(closure_1_0(closure_1_2[20]).HeaderActionButton, obj);
        }
        return tmp;
      }
    });
  }, items3);
  const callback1 = obj3.useCallback((maxUses) => {
    let obj = channel(9853);
    obj = { maxUses };
    obj.updateSettings(obj);
  }, []);
  const callback2 = obj3.useCallback((maxAge) => {
    let obj = channel(9853);
    obj = { maxAge };
    obj.updateSettings(obj);
  }, []);
  const callback3 = obj3.useCallback((temporary) => {
    let obj = channel(9853);
    obj = { temporary };
    obj.updateSettings(obj);
  }, []);
  const callback4 = obj3.useCallback((flags) => {
    let obj = channel(9853);
    obj = { flags };
    obj.updateSettings(obj);
  }, []);
  const callback5 = obj3.useCallback((roleIds) => {
    let obj = channel(9853);
    obj = { roleIds };
    obj.updateSettings(obj);
  }, []);
  obj = { contentContainerStyle: tmp.formContainer, children: null };
  obj = { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null };
  let obj2 = navigation(589);
  obj[5] = channel(9849).getMaxUsesOptions;
  ({ temporary: obj7[6], flags: obj7[7], roleIds: obj7[8] } = settings);
  obj[9] = callback2;
  obj[10] = callback1;
  obj[11] = callback3;
  obj[12] = callback4;
  obj[13] = callback5;
  obj[1] = jsx(channel(17310), { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null });
  return jsx(navigation(8309).Form, { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null });
}
({ InviteModalScenes: c9, Permissions: c10 } = ME);
createCacheKey = { formContainer: null, formContent: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const obj1 = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
const result = require("set").fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default function InviteSettingsModal() {
  const memo = React.useMemo(() => {
    let obj = {};
    obj = { impressionName: callback(503).ImpressionNames.GUILD_INVITE_LINK_SETTINGS, title: null, headerLeft: null, render: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.Yx4IiC);
    obj[2] = callback(5460).getHeaderCloseButton(callback2(9853).close);
    obj[3] = function render() {
      return callback(closure_13, {});
    };
    obj[constants.ADVANCED] = obj;
    return obj;
  }, []);
  return jsx(NavigationStack.Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
};