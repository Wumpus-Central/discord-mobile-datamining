// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import MuteSettingsUtils from "MuteSettingsUtils.tsx";
import threadActionSheets from "../../../../../threads/native/threadActionSheets.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";

const require = globalThis.__r;

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
  obj2.icon = closure_10(channel(1188).Icon, { disableColor: true, source: navigation(11054) });
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = channel(1114).intl;
  const obj5 = { name: null };
  const obj3 = { disableColor: true, source: navigation(11054) };
  obj5.name = channel(5647).computeChannelName(channel, UserStore, RelationshipStore, true);
  obj4.children = intl.format(channel(1114).t["eC+9rj"], obj5);
  obj2.label = closure_10(channel(5619).Text, obj4);
  obj2.onPress = callback;
  const items1 = [closure_10(channel(6969).TableRow, obj2)];
  const obj7 = { muteConfig: channel.muteConfig, type: null };
  const obj6 = channel(5647);
  const tmp6 = navigation(11055);
  const MuteSettingType = channel(11055).MuteSettingType;
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
  memo = memo.useMemo(() => channel(navigation[14]).getMuteOptions(), []);
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
            const result = applicationId(navigation[11]).setNotificationSettings(closure_1_0, obj3);
            const obj4 = applicationId(navigation[11]);
          } else if (null != closure_1_1) {
            const obj2 = applicationId(navigation[12]);
            const guildId = closure_1_0.getGuildId();
            const id = closure_1_0.id;
            const obj5 = { muted, mute_config: null };
            let tmp10 = mute_config;
            if (mute_config == null) {
              tmp10 = null;
            }
            obj5.mute_config = tmp10;
            const NotificationLabel2 = channel(navigation[13]).NotificationLabel;
            const result1 = obj2.updateAppDMOverrideSettings(
              guildId,
              id,
              closure_1_1,
              obj5,
              NotificationLabel2.muted(muted),
            );
          } else {
            const obj7 = { guildId: closure_1_0.getGuildId(), channelId: closure_1_0.id, settings: null, label: null };
            const obj8 = { muted, mute_config: null };
            let tmp3 = mute_config;
            if (mute_config == null) {
              tmp3 = null;
            }
            obj8.mute_config = tmp3;
            obj7.settings = obj8;
            const NotificationLabel = channel(navigation[13]).NotificationLabel;
            obj7.label = NotificationLabel.muted(muted);
            const result2 = applicationId(navigation[12]).updateChannelOverrideSettings(obj7);
            const obj6 = applicationId(navigation[12]);
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
        channel(navigation[15]).TableRow,
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
  navigation = channel(navigation[22]).useNavigation();
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
  const intl = channel(navigation[19]).intl;
  obj2.label = intl.string(channel(navigation[19]).t.h850Ss);
  obj2.onPress = callback;
  const obj3 = { style: tmp.trailing, children: null };
  const items2 = [
    closure_10(channel(navigation[18]).Text, { variant: "text-md/medium", color: "text-muted", children: memo }),
    closure_10(channel(navigation[15]).TableRow.Arrow, {}),
  ];
  obj3.children = items2;
  obj2.trailing = closure_11(View, obj3);
  let tmp11 = isMuted;
  if (!isMuted) {
    tmp11 = isGuildMuted;
  }
  const obj4 = { children: null };
  obj2.disabled = tmp11;
  const items3 = [closure_10(channel(navigation[15]).TableRow, obj2)];
  let obj = channel(navigation[22]);
  items3[1] = closure_10(View, {
    style: tmp.hint,
    children: closure_10(channel(navigation[24]).MuteSettingsHint, {
      isMuted,
      isGuildMuted,
      guildMessageNotifications: guildMessageNotifications.guildMessageNotifications,
    }),
  });
  obj4.children = items3;
  return closure_11(closure_12, obj4);
}
const View = fn(17).View;
const ChannelSettingsSections = fn(1072).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 },
  options: { marginBottom: 16 },
  trailing: { flexDirection: "row", alignItems: "center" },
  hint: { marginTop: 8, paddingHorizontal: 12 },
  headerRightSpacer: { width: fn(9792).MIN_HEADER_HEIGHT },
};
let closure_13 = createStyles.createStyles(obj);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default noop.memo(function ConnectedChannelMuteScreen() {
  const tmp = closure_13();
  _require = tmp;
  const navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const route = require("Link").useRoute();
  channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  const obj2 = require("Link");
  const items = [closure_5];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    ChannelStore.getChannel(channelId),
  );
  const obj3 = require("useStateFromStores");
  const items1 = [closure_6];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  closure_5 = stateFromStores.useMemo(
    () => MuteSettingsUtils.getMuteSettingLabel(stateFromStores, stateFromStores1),
    items2,
  );
  const items3 = [stateFromStores, stateFromStores1];
  closure_6 = stateFromStores.useMemo(
    () => MuteSettingsUtils.getMuteSettingSublabel(stateFromStores, stateFromStores1),
    items3,
  );
  const obj5 = require("useStateFromStores");
  let isIOSResult = require("PlatformUtils").isIOS();
  if (isIOSResult) {
    let isThreadResult;
    if (stateFromStores != null) {
      isThreadResult = stateFromStores.isThread();
    }
    isIOSResult = isThreadResult;
  }
  RelationshipStore = isIOSResult;
  const layoutEffect = obj6.useLayoutEffect(() => {
    const obj = {
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        return closure_2_10(closure_0(channelId[28]).GenericHeaderTitle, { title, subtitle });
      },
      headerRight: null,
      headerTitleAlign: "center",
    };
    let fn;
    if (isIOSResult) {
      fn = () => closure_2_10(stateFromStores1, { style: closure_1_0.headerRightSpacer });
    }
    obj.headerRight = fn;
    navigation.setOptions(obj);
  });
  const items4 = [channelId];
  const memo = obj6.useMemo(() => MuteSettingsUtils.getMuteSettings(channelId), items4);
  const muted = memo.muted;
  ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
  let tmp12Result = null;
  if (null != stateFromStores) {
    const obj4 = { style: null, children: null };
    const items5 = [tmp.container];
    const obj8 = { paddingBottom: tmp10 };
    items5[1] = obj8;
    obj4.style = items5;
    if (muted) {
      const obj9 = { channel: stateFromStores, applicationId, muteConfig, navigation };
      let tmp14Result = closure_10(UnmuteOptions, obj9);
      let tmp17 = closure_10;
    } else {
      const obj10 = { channel: stateFromStores, applicationId, navigation };
      tmp14Result = closure_10(MuteOptions, obj10);
      tmp17 = closure_10;
    }
    const items6 = [tmp14Result];
    const isPrivateResult = stateFromStores.isPrivate();
    let tmp17Result = !isPrivateResult;
    if (!isPrivateResult) {
      const obj11 = {
        isMuted: muted,
        isGuildMuted: guildMuted,
        channel: stateFromStores,
        messageNotifications,
        guildMessageNotifications,
      };
      tmp17Result = tmp17(NotificationSettingsButton, obj11);
    }
    items6[1] = tmp17Result;
    obj4.children = items6;
    tmp12Result = closure_11(stateFromStores1, obj4);
  }
  return tmp12Result;
});
