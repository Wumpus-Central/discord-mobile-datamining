// === Module 16863: MuteSettingsScreen ===

// Module 16863 (MuteSettingsScreen)
import nativeDefault from "native" /* 576 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9057 */;
import threadActionSheets from "threadActionSheets" /* 11312 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function UnmuteOptions(channel) {
  channel = channel.channel;
  const navigation = channel.navigation;
  const items = [, , ];
  ({ guild_id: arr[0], id: arr[1] } = channel);
  items[2] = navigation;
  let obj = { style: closure_13().options, children: null };
  const callback = noop.useCallback(() => {
    navigation.goBack();
    MuteSettingsUtils.handleUnmutePress(channel.id, channel.guild_id);
  }, items);
  obj = { icon: null, label: null, onPress: null, start: true, end: true };
  obj = { disableColor: true, source: navigation(10145) };
  obj.icon = closure_10(channel(1178).Icon, obj);
  const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = channel(1114).intl;
  const obj2 = { name: null };
  const tmp = closure_13();
  const tmp3 = closure_11;
  const tmp4 = View;
  const tmp5 = closure_10;
  obj2.name = channel(4713).computeChannelName(channel, UserStore, RelationshipStore, true);
  obj1.children = intl.format(channel(1114).t["eC+9rj"], obj2);
  obj.label = closure_10(channel(4556).Text, obj1);
  obj.onPress = callback;
  const items1 = [closure_10(channel(5605).TableRow, obj), ];
  const obj3 = { muteConfig: channel.muteConfig, type: null };
  const obj6 = channel(4713);
  const tmp6 = navigation(10146);
  const MuteSettingType = channel(10146).MuteSettingType;
  obj3.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
  items1[1] = tmp5(tmp6, obj3);
  obj.children = items1;
  return tmp3(tmp4, obj);
}
function MuteOptions(channel) {
  channel = channel.channel;
  const applicationId = channel.applicationId;
  const navigation = channel.navigation;
  let memo;
  memo = memo.useMemo(() => channel(navigation[13]).getMuteOptions(), []);
  const items = [channel, navigation, applicationId];
  closure_4 = memo.useCallback((muteDurationSeconds) => {
    navigation.goBack();
    let obj = {
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        let obj = closure_1_0;
        ({ muted, mute_config } = arg0);
        if (mute_config === undefined) {
          mute_config = null;
        }
        if (undefined !== muted) {
          if (obj.isThread()) {
            obj = { muted, mute_config: null };
            if (mute_config == null) {
              mute_config = null;
            }
            obj.mute_config = mute_config;
            const result = applicationId(navigation[10]).setNotificationSettings(obj, obj);
            const obj4 = applicationId(navigation[10]);
          } else if (null != tmp) {
            let obj1 = applicationId(navigation[11]);
            const guildId = obj.getGuildId();
            const id = obj.id;
            obj = { muted, mute_config: null };
            let tmp14 = mute_config;
            if (mute_config == null) {
              tmp14 = null;
            }
            obj.mute_config = tmp14;
            const NotificationLabel2 = channel(navigation[12]).NotificationLabel;
            const result1 = obj1.updateAppDMOverrideSettings(guildId, id, tmp, obj, NotificationLabel2.muted(muted));
          } else {
            const obj6 = applicationId(navigation[11]);
            const guildId1 = obj.getGuildId();
            const id2 = obj.id;
            obj1 = { muted, mute_config: null };
            let tmp3 = mute_config;
            if (mute_config == null) {
              tmp3 = null;
            }
            obj1.mute_config = tmp3;
            const NotificationLabel = channel(navigation[12]).NotificationLabel;
            const result2 = obj6.updateChannelOverrideSettings(guildId1, id2, obj1, NotificationLabel.muted(muted));
          }
        }
      },
      muteDurationSeconds
    };
    let result = obj.handleMuteSettingPress(obj);
  }, items);
  const tmp = closure_13();
  return closure_10(closure_4, {
    style: closure_13().options,
    children: memo.map((item, index) => {
      ({ label, duration: channel } = item);
      return closure_1_10(channel(navigation[14]).TableRow, {
        label,
        onPress() {
          return closure_4(channel);
        },
        start: 0 === index,
        end: index === memo.length - 1
      }, label);
    })
  });
}
function NotificationSettingsButton(guildMessageNotifications) {
  const channel = guildMessageNotifications.channel;
  ({ isMuted, isGuildMuted, messageNotifications } = guildMessageNotifications);
  let navigation;
  const tmp = closure_13();
  let obj = channel(navigation[21]);
  navigation = obj.useNavigation();
  const items = [channel, navigation];
  const items1 = [messageNotifications];
  const callback = noop.useCallback(() => {
    if (channel.isThread()) {
      const result = threadActionSheets.showThreadNotificationsBottomSheet(channel);
    } else {
      navigation.navigate(ChannelSettingsSections.NOTIFICATIONS);
    }
  }, items);
  const memo = noop.useMemo(() => MuteSettingsUtils.getMessageNotificationsText(messageNotifications), items1);
  obj = { label: null, onPress: null, trailing: null, disabled: null, start: true, end: true };
  const intl = channel(navigation[18]).intl;
  obj.label = intl.string(channel(navigation[18]).t.h850Ss);
  obj.onPress = callback;
  obj = { style: tmp.trailing, children: null };
  const items2 = [closure_10(channel(navigation[17]).Text, { variant: "text-md/medium", color: "text-muted", children: memo }), closure_10(channel(navigation[14]).TableRow.Arrow, {})];
  obj.children = items2;
  obj.trailing = closure_11(View, obj);
  let tmp11 = isMuted;
  if (!isMuted) {
    tmp11 = isGuildMuted;
  }
  const obj1 = { children: null };
  obj.disabled = tmp11;
  const items3 = [closure_10(channel(navigation[14]).TableRow, obj), closure_10(View, { style: tmp.hint, children: closure_10(channel(navigation[23]).MuteSettingsHint, { isMuted, isGuildMuted, guildMessageNotifications: guildMessageNotifications.guildMessageNotifications }) })];
  obj1.children = items3;
  return closure_11(closure_12, obj1);
}
const View = fn(17).View;
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null, options: null, trailing: null, hint: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj.container = obj;
obj.options = { marginBottom: 16 };
obj.trailing = { flexDirection: "row", alignItems: "center" };
obj.hint = { marginTop: 8, paddingHorizontal: 12 };
let closure_13 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default noop.memo(() => {
  let obj = navigation(stateFromStores[21]);
  navigation = obj.useNavigation();
  let obj1 = navigation(stateFromStores[24]);
  const route = obj1.useRoute();
  const channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  let obj2 = navigation(stateFromStores[25]);
  const items = [closure_5];
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp = closure_13();
  const items1 = [GuildStore];
  const stateFromStores1 = navigation(stateFromStores[25]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  closure_4 = stateFromStores1.useMemo(() => MuteSettingsUtils.getMuteSettingLabel(stateFromStores, stateFromStores1), items2);
  const items3 = [stateFromStores, stateFromStores1];
  closure_5 = stateFromStores1.useMemo(() => MuteSettingsUtils.getMuteSettingSublabel(stateFromStores, stateFromStores1), items3);
  const layoutEffect = stateFromStores1.useLayoutEffect(() => {
    navigation.setOptions({
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        return closure_2_10(navigation(stateFromStores[26]).GenericHeaderTitle, { title, subtitle });
      },
      headerTitleAlign: "center"
    });
  });
  const items4 = [channelId];
  const memo = stateFromStores1.useMemo(() => MuteSettingsUtils.getMuteSettings(channelId), items4);
  const muted = memo.muted;
  ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items5 = [tmp.container, ];
    obj = { paddingBottom: tmp7 };
    items5[1] = obj;
    obj.style = items5;
    if (muted) {
      obj1 = { channel: stateFromStores, applicationId, muteConfig, navigation };
      let tmp11Result = tmp11(UnmuteOptions, obj1);
      let tmp14 = tmp11;
    } else {
      obj2 = { channel: stateFromStores, applicationId, navigation };
      tmp11Result = tmp11(MuteOptions, obj2);
      tmp14 = tmp11;
    }
    const items6 = [tmp11Result, ];
    const isPrivateResult = stateFromStores.isPrivate();
    let tmp14Result = !isPrivateResult;
    if (!isPrivateResult) {
      const obj3 = { isMuted: muted, isGuildMuted: guildMuted, channel: stateFromStores, messageNotifications, guildMessageNotifications };
      tmp14Result = tmp14(NotificationSettingsButton, obj3);
    }
    items6[1] = tmp14Result;
    obj.children = items6;
    tmp9Result = closure_11(closure_4, obj);
  }
  return tmp9Result;
});