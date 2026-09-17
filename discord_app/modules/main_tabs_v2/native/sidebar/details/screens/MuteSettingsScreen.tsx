// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import MuteSettingsUtils from "MuteSettingsUtils.tsx";
import threadActionSheets from "../../../../../threads/native/threadActionSheets.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";

require = fn;
function UnmuteOptions(channel) {
  channel = channel.channel;
  const navigation = channel.navigation;
  const items = [, ,];
  ({ guild_id: arr[0], id: arr[1] } = channel);
  items[2] = navigation;
  const obj = { style: closure_13().options, children: null };
  const callback = noop.useCallback(() => {
    navigation.goBack();
    MuteSettingsUtils.handleUnmutePress(channel.id, channel.guild_id);
  }, items);
  const obj2 = { icon: null, label: null, onPress: null, start: true, end: true };
  const tmp = closure_13();
  obj2.icon = closure_10(channel(1177).Icon, { disableColor: true, source: navigation(10291) });
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = channel(1115).intl;
  const obj5 = { name: null };
  const obj3 = { disableColor: true, source: navigation(10291) };
  obj5.name = channel(4793).computeChannelName(channel, UserStore, RelationshipStore, true);
  obj4.children = intl.format(channel(1115).t["eC+9rj"], obj5);
  obj2.label = closure_10(channel(4636).Text, obj4);
  obj2.onPress = callback;
  const items1 = [closure_10(channel(5693).TableRow, obj2)];
  const obj7 = { muteConfig: channel.muteConfig, type: null };
  const obj6 = channel(4793);
  const tmp6 = navigation(10292);
  const MuteSettingType = channel(10292).MuteSettingType;
  obj7.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
  items1[1] = closure_10(tmp6, obj7);
  obj.children = items1;
  return closure_11(View, obj);
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
    let result = MuteSettingsUtils.handleMuteSettingPress({
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        ({ muted, mute_config } = arg0);
        if (mute_config === undefined) {
          mute_config = null;
        }
        if (undefined !== muted) {
          if (closure_1_0.isThread()) {
            const obj3 = { muted, mute_config: null };
            if (mute_config == null) {
              mute_config = null;
            }
            obj3.mute_config = mute_config;
            const result = applicationId(navigation[10]).setNotificationSettings(closure_1_0, obj3);
            const obj4 = applicationId(navigation[10]);
          } else if (null != closure_1_1) {
            const obj2 = applicationId(navigation[11]);
            const guildId = closure_1_0.getGuildId();
            const id = closure_1_0.id;
            const obj5 = { muted, mute_config: null };
            let tmp14 = mute_config;
            if (mute_config == null) {
              tmp14 = null;
            }
            obj5.mute_config = tmp14;
            const NotificationLabel2 = channel(navigation[12]).NotificationLabel;
            const result1 = obj2.updateAppDMOverrideSettings(
              guildId,
              id,
              closure_1_1,
              obj5,
              NotificationLabel2.muted(muted),
            );
          } else {
            const obj6 = applicationId(navigation[11]);
            const guildId1 = closure_1_0.getGuildId();
            const id2 = closure_1_0.id;
            const obj7 = { muted, mute_config: null };
            let tmp3 = mute_config;
            if (mute_config == null) {
              tmp3 = null;
            }
            obj7.mute_config = tmp3;
            const NotificationLabel = channel(navigation[12]).NotificationLabel;
            const result2 = obj6.updateChannelOverrideSettings(guildId1, id2, obj7, NotificationLabel.muted(muted));
          }
        }
      },
      muteDurationSeconds,
    });
  }, items);
  const tmp = closure_13();
  return closure_10(closure_4, {
    style: closure_13().options,
    children: memo.map((item, index) => {
      ({ label, duration: channel } = item);
      return closure_1_10(
        channel(navigation[14]).TableRow,
        {
          label,
          onPress() {
            return closure_4(channel);
          },
          start: 0 === index,
          end: index === memo.length - 1,
        },
        label,
      );
    }),
  });
}
function NotificationSettingsButton(guildMessageNotifications) {
  const channel = guildMessageNotifications.channel;
  ({ isMuted, isGuildMuted, messageNotifications } = guildMessageNotifications);
  let navigation;
  const tmp = closure_13();
  navigation = channel(navigation[21]).useNavigation();
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
  const obj2 = { label: null, onPress: null, trailing: null, disabled: null, start: true, end: true };
  const intl = channel(navigation[18]).intl;
  obj2.label = intl.string(channel(navigation[18]).t.h850Ss);
  obj2.onPress = callback;
  const obj3 = { style: tmp.trailing, children: null };
  const items2 = [
    closure_10(channel(navigation[17]).Text, { variant: "text-md/medium", color: "text-muted", children: memo }),
    closure_10(channel(navigation[14]).TableRow.Arrow, {}),
  ];
  obj3.children = items2;
  obj2.trailing = closure_11(View, obj3);
  let tmp11 = isMuted;
  if (!isMuted) {
    tmp11 = isGuildMuted;
  }
  const obj4 = { children: null };
  obj2.disabled = tmp11;
  const items3 = [closure_10(channel(navigation[14]).TableRow, obj2)];
  let obj = channel(navigation[21]);
  items3[1] = closure_10(View, {
    style: tmp.hint,
    children: closure_10(channel(navigation[23]).MuteSettingsHint, {
      isMuted,
      isGuildMuted,
      guildMessageNotifications: guildMessageNotifications.guildMessageNotifications,
    }),
  });
  obj4.children = items3;
  return closure_11(closure_12, obj4);
}
const View = fn(17).View;
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4640);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 },
  options: { marginBottom: 16 },
  trailing: { flexDirection: "row", alignItems: "center" },
  hint: { marginTop: 8, paddingHorizontal: 12 },
};
let closure_13 = createStyles.createStyles(obj);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default noop.memo(() => {
  const tmp = closure_13();
  navigation = navigation(stateFromStores[21]).useNavigation();
  const obj = navigation(stateFromStores[21]);
  const route = navigation(stateFromStores[24]).useRoute();
  const channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  const obj2 = navigation(stateFromStores[24]);
  const items = [closure_5];
  stateFromStores = navigation(stateFromStores[25]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj3 = navigation(stateFromStores[25]);
  const items1 = [GuildStore];
  const stateFromStores1 = navigation(stateFromStores[25]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  closure_4 = stateFromStores1.useMemo(
    () => MuteSettingsUtils.getMuteSettingLabel(stateFromStores, stateFromStores1),
    items2,
  );
  const items3 = [stateFromStores, stateFromStores1];
  closure_5 = stateFromStores1.useMemo(
    () => MuteSettingsUtils.getMuteSettingSublabel(stateFromStores, stateFromStores1),
    items3,
  );
  const layoutEffect = stateFromStores1.useLayoutEffect(() => {
    navigation.setOptions({
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        return closure_2_10(navigation(stateFromStores[26]).GenericHeaderTitle, { title, subtitle });
      },
      headerTitleAlign: "center",
    });
  });
  const items4 = [channelId];
  const memo = stateFromStores1.useMemo(() => MuteSettingsUtils.getMuteSettings(channelId), items4);
  const muted = memo.muted;
  ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj4 = { style: null, children: null };
    const items5 = [tmp.container];
    const obj6 = { paddingBottom: tmp7 };
    items5[1] = obj6;
    obj4.style = items5;
    if (muted) {
      const obj7 = { channel: stateFromStores, applicationId, muteConfig, navigation };
      let tmp11Result = closure_10(UnmuteOptions, obj7);
      let tmp14 = closure_10;
    } else {
      const obj8 = { channel: stateFromStores, applicationId, navigation };
      tmp11Result = closure_10(MuteOptions, obj8);
      tmp14 = closure_10;
    }
    const items6 = [tmp11Result];
    const isPrivateResult = stateFromStores.isPrivate();
    let tmp14Result = !isPrivateResult;
    if (!isPrivateResult) {
      const obj9 = {
        isMuted: muted,
        isGuildMuted: guildMuted,
        channel: stateFromStores,
        messageNotifications,
        guildMessageNotifications,
      };
      tmp14Result = tmp14(NotificationSettingsButton, obj9);
    }
    items6[1] = tmp14Result;
    obj4.children = items6;
    tmp9Result = closure_11(closure_4, obj4);
  }
  return tmp9Result;
});
