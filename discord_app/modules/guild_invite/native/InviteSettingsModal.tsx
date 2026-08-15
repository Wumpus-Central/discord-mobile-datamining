// discord_app/modules/guild_invite/native/InviteSettingsModal.tsx
import _slicedToArray from "_slicedToArray";
import dispatcher from "dispatcher";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateWithLatestInvite from "updateWithLatestInvite";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { jsx } from "Form";
import createCacheKey from "createCacheKey";
import { NavigationStack } from "../../../design/components/Navigator/native/Navigator.native.tsx";

let c10;
let c9;
const require = arg1;
function AdvancedInstantInviteScreen() {
  let channel;
  let guild;
  let inviteSettings;
  let settings;
  let tmp = createCacheKey();
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [ensureGuildLoaded, updateWithLatestInvite, createGuildRecordFromRust];
  const stateFromStoresObject = navigation(589).useStateFromStoresObject(items, () => {
    const pendingSettings = store.getPendingSettings();
    channel(tmp10[12])(null != pendingSettings, "Received null pending invite settings");
    const inviteSettings = store.getInviteSettings();
    channel(tmp10[12])(null != inviteSettings, "Received null invite settings");
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
  const dependencyMap = tmp10;
  const items1 = [channel];
  const effect = obj3.useEffect(() => {
    if (null == channel) {
      const guildId = outer1_6.getGuildId();
      let invitableChannelForGuild = null;
      if (null != guildId) {
        let obj = navigation(tmp10[14]);
        invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
      }
      if (null != invitableChannelForGuild) {
        obj = { channelId: null };
        obj[0] = invitableChannelForGuild.channel.id;
        channel(tmp10[15]).updateSettings(obj);
        const obj2 = channel(tmp10[15]);
      } else {
        obj = { title: null, body: null, onConfirm: null };
        const intl = navigation(tmp10[17]).intl;
        obj[0] = intl.string(navigation(tmp10[17]).t.VINpSK);
        const intl2 = navigation(tmp10[17]).intl;
        obj[1] = intl2.string(navigation(tmp10[17]).t.kQ6fit);
        obj[2] = channel(tmp10[15]).close;
        channel(tmp10[16]).show(obj);
        const obj4 = channel(tmp10[16]);
      }
    }
  }, items1);
  tmp2Result = tmp2(4761);
  const unmountEffect = tmp2Result.useUnmountEffect(() => {
    channel(tmp10[19]).wait(channel(tmp10[15]).resetSettings);
  });
  const items2 = [channel];
  callback = obj3.useCallback(() => {
    if (null != channel) {
      if (outer1_8.can(outer1_10.CREATE_INSTANT_INVITE, tmp)) {
        const invite = channel(tmp10[15]).createInvite("IOS Regenerate");
        const obj3 = channel(tmp10[15]);
        channel(tmp10[15]).close();
        const obj4 = channel(tmp10[15]);
      }
    }
    let obj = channel(tmp10[16]);
    obj = { title: null, body: null, onConfirm: null };
    const intl = navigation(tmp10[17]).intl;
    obj[0] = intl.string(navigation(tmp10[17]).t.VINpSK);
    const intl2 = navigation(tmp10[17]).intl;
    obj[1] = intl2.string(navigation(tmp10[17]).t.RiiKV0);
    obj[2] = channel(tmp10[15]).close;
    obj.show(obj);
  }, items2);
  const items3 = [navigation, tmp10, callback];
  const effect1 = obj3.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        let tmp;
        if (closure_2) {
          const obj = { onPress: null, text: null };
          obj[0] = _slicedToArray;
          const intl = outer1_0(outer1_2[17]).intl;
          obj[1] = intl.string(outer1_0(outer1_2[17]).t["R3BPH+"]);
          tmp = outer1_11(outer1_0(outer1_2[20]).HeaderActionButton, obj);
        }
        return tmp;
      }
    });
  }, items3);
  const callback1 = obj3.useCallback((maxUses) => {
    let obj = channel(tmp10[15]);
    obj = { maxUses };
    obj.updateSettings(obj);
  }, []);
  const callback2 = obj3.useCallback((maxAge) => {
    let obj = channel(tmp10[15]);
    obj = { maxAge };
    obj.updateSettings(obj);
  }, []);
  const callback3 = obj3.useCallback((temporary) => {
    let obj = channel(tmp10[15]);
    obj = { temporary };
    obj.updateSettings(obj);
  }, []);
  const callback4 = obj3.useCallback((flags) => {
    let obj = channel(tmp10[15]);
    obj = { flags };
    obj.updateSettings(obj);
  }, []);
  const callback5 = obj3.useCallback((roleIds) => {
    let obj = channel(tmp10[15]);
    obj = { roleIds };
    obj.updateSettings(obj);
  }, []);
  obj = { contentContainerStyle: tmp.formContainer, children: null };
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
createCacheKey = { formContainer: null, formContent: null };
createCacheKey = { paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default function InviteSettingsModal() {
  const memo = React.useMemo(() => {
    let obj = {};
    obj = { impressionName: callback(503).ImpressionNames.GUILD_INVITE_LINK_SETTINGS, title: null, headerLeft: null, render: null };
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