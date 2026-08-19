// === Module 16079: UnmuteOptions ===

// Module 16079 (UnmuteOptions)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { ChannelSettingsSections } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
function UnmuteOptions(channel) {
  channel = channel.channel;
  const navigation = channel.navigation;
  const items = [, , ];
  ({ guild_id: arr[0], id: arr[1] } = channel);
  items[2] = navigation;
  { style: callback3().options, children: null };
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
    channel(dependencyMap[13]).handleUnmutePress(channel.id, channel.guild_id);
  }, items);
  const obj = { disableColor: true, source: navigation(10086) };
  obj[0] = callback(channel(1297).Icon, obj);
  obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = channel(1236).intl;
  const obj2 = { name: null };
  const tmp = callback3();
  const tmp5 = callback;
  obj2[0] = channel(4984).computeChannelName(channel, closure_8, closure_7, true);
  obj1[2] = intl.format(channel(1236).t["eC+9rj"], obj2);
  obj[1] = callback(channel(4734).Text, obj1);
  obj[2] = callback;
  const items1 = [callback(channel(6291).TableRow, obj), ];
  const obj3 = { muteConfig: channel.muteConfig, type: null };
  const obj6 = channel(4984);
  const tmp6 = navigation(10087);
  const MuteSettingType = channel(10087).MuteSettingType;
  obj3[1] = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
  items1[1] = tmp5(tmp6, obj3);
  obj[1] = items1;
  return callback2(View, obj);
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
    channel(navigation[13]);
    let obj = {
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        let obj = closure_0;
        ({ muted, mute_config } = arg0);
        if (mute_config === undefined) {
          mute_config = null;
        }
        if (undefined !== muted) {
          if (obj.isThread()) {
            obj = { muted: null, mute_config: null };
            obj[0] = muted;
            if (mute_config == null) {
              mute_config = null;
            }
            obj[1] = mute_config;
            const result = applicationId(navigation[10]).setNotificationSettings(obj, obj);
            const obj4 = applicationId(navigation[10]);
          } else if (null != closure_1) {
            obj1 = applicationId(navigation[11]);
            const guildId = obj.getGuildId();
            const id = obj.id;
            obj = { muted: null, mute_config: null };
            obj[0] = muted;
            let tmp14 = mute_config;
            if (mute_config == null) {
              tmp14 = null;
            }
            obj[1] = tmp14;
            const NotificationLabel2 = channel(navigation[12]).NotificationLabel;
            const result1 = obj1.updateAppDMOverrideSettings(guildId, id, closure_1, obj, NotificationLabel2.muted(muted));
          } else {
            const obj6 = applicationId(navigation[11]);
            const guildId1 = obj.getGuildId();
            const id2 = obj.id;
            obj1 = { muted: null, mute_config: null };
            obj1[0] = muted;
            let tmp3 = mute_config;
            if (mute_config == null) {
              tmp3 = null;
            }
            obj1[1] = tmp3;
            const NotificationLabel = channel(navigation[12]).NotificationLabel;
            const result2 = obj6.updateChannelOverrideSettings(guildId1, id2, obj1, NotificationLabel.muted(muted));
          }
        }
      },
      muteDurationSeconds
    };
    let result = obj.handleMuteSettingPress(obj);
  }, items);
  const tmp = callback3();
  return callback(closure_4, {
    style: callback3().options,
    children: memo.map((item, index) => {
      ({ label, duration: channel } = item);
      return closure_1_10(channel(navigation[14]).TableRow, {
        label,
        onPress() {
          return closure_1_4(closure_0);
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
  const tmp = callback3();
  let obj = channel(navigation[21]);
  navigation = obj.useNavigation();
  const items = [channel, navigation];
  const items1 = [messageNotifications];
  const callback = importAllResult.useCallback(() => {
    if (channel.isThread()) {
      const result = channel(navigation[22]).showThreadNotificationsBottomSheet(channel);
      const obj = channel(navigation[22]);
    } else {
      navigation.navigate(ChannelSettingsSections.NOTIFICATIONS);
    }
  }, items);
  const memo = importAllResult.useMemo(() => channel(navigation[13]).getMessageNotificationsText(messageNotifications), items1);
  obj = { label: null, onPress: null, trailing: null, disabled: null, start: true, end: true };
  const intl = channel(navigation[18]).intl;
  obj[0] = intl.string(channel(navigation[18]).t.h850Ss);
  obj[1] = callback;
  obj = { style: tmp.trailing, children: null };
  const items2 = [callback(channel(navigation[17]).Text, { variant: "text-md/medium", color: "text-muted", children: memo }), callback(channel(navigation[14]).TableRow.Arrow, {})];
  obj[1] = items2;
  obj[2] = callback2(View, obj);
  let tmp11 = isMuted;
  if (!isMuted) {
    tmp11 = isGuildMuted;
  }
  obj1 = { children: null };
  obj[3] = tmp11;
  const items3 = [callback(channel(navigation[14]).TableRow, obj), callback(View, { style: tmp.hint, children: callback(channel(navigation[23]).MuteSettingsHint, { isMuted, isGuildMuted, guildMessageNotifications: guildMessageNotifications.guildMessageNotifications }) })];
  obj1[0] = items3;
  return callback2(closure_12, obj1);
}
let c3 = importAllResult;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj[0] = obj;
obj[1] = { marginBottom: 16 };
obj[2] = { flexDirection: "row", alignItems: "center" };
obj[3] = { marginTop: 8, paddingHorizontal: 12 };
let closure_13 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let obj = navigation(stateFromStores[21]);
  navigation = obj.useNavigation();
  obj1 = navigation(stateFromStores[24]);
  const route = obj1.useRoute();
  const channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  let obj2 = navigation(stateFromStores[25]);
  const items = [closure_5];
  stateFromStores = obj2.useStateFromStores(items, () => channel.getChannel(channelId));
  const tmp = callback3();
  const items1 = [closure_6];
  const stateFromStores1 = navigation(stateFromStores[25]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return closure_1_6.getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  closure_4 = stateFromStores1.useMemo(() => navigation(stateFromStores[13]).getMuteSettingLabel(stateFromStores, stateFromStores1), items2);
  const items3 = [stateFromStores, stateFromStores1];
  closure_5 = stateFromStores1.useMemo(() => navigation(stateFromStores[13]).getMuteSettingSublabel(stateFromStores, stateFromStores1), items3);
  const layoutEffect = stateFromStores1.useLayoutEffect(() => {
    navigation.setOptions({
      title: "" + closure_4 + " (" + closure_5 + ")",
      headerTitle() {
        return closure_1_10(navigation(stateFromStores[26]).GenericHeaderTitle, { title: closure_4, subtitle: closure_5 });
      },
      headerTitleAlign: "center"
    });
  });
  const items4 = [channelId];
  const memo = stateFromStores1.useMemo(() => navigation(stateFromStores[13]).getMuteSettings(channelId), items4);
  const muted = memo.muted;
  ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
  let tmp9Result = null;
  if (null != stateFromStores) {
    const items5 = [tmp.container, ];
    obj = { paddingBottom: null };
    obj[0] = tmp7;
    items5[1] = obj;
    obj[0] = items5;
    if (muted) {
      obj1 = { channel: null, applicationId: null, muteConfig: null, navigation: null };
      obj1[0] = stateFromStores;
      obj1[1] = applicationId;
      obj1[2] = muteConfig;
      obj1[3] = navigation;
      let tmp11Result = callback(UnmuteOptions, obj1);
      let tmp14 = callback;
    } else {
      obj2 = { channel: null, applicationId: null, navigation: null };
      obj2[0] = stateFromStores;
      obj2[1] = applicationId;
      obj2[2] = navigation;
      tmp11Result = callback(MuteOptions, obj2);
      tmp14 = callback;
    }
    const items6 = [tmp11Result, ];
    const isPrivateResult = stateFromStores.isPrivate();
    let tmp14Result = !isPrivateResult;
    if (!isPrivateResult) {
      const obj3 = { isMuted: null, isGuildMuted: null, channel: null, messageNotifications: null, guildMessageNotifications: null };
      obj3[0] = muted;
      obj3[1] = guildMuted;
      obj3[2] = stateFromStores;
      obj3[3] = messageNotifications;
      obj3[4] = guildMessageNotifications;
      tmp14Result = tmp14(NotificationSettingsButton, obj3);
    }
    items6[1] = tmp14Result;
    obj[1] = items6;
    tmp9Result = callback2(closure_4, obj);
  }
  return tmp9Result;
});
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default memoResult;