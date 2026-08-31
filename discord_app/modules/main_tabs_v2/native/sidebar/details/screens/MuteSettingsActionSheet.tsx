// === Module 10186: MuteSettings ===

// Module 10186 (MuteSettings)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4444 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import closure_5 from "createGuildRecordFromRust" /* 1909 */;
import closure_6 from "markAllUserIdListsStale" /* 4100 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx");

export default function MuteSettings(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const onOptionPress = guildId.onOptionPress;
  let guild;
  let channel;
  guild = undefined;
  guild = guild.getGuild(guildId);
  channel = channel.getChannel(channelId);
  const items = [channelId];
  const memo = guild.useMemo(() => guildId(onOptionPress[9]).getMuteSettings(channelId), items);
  const items1 = [channelId, guildId, onOptionPress];
  ({ muteConfig, muted } = memo);
  guild = guild.useCallback((muteDurationSeconds) => {
    let obj = channelId(onOptionPress[10]);
    obj.hideActionSheet();
    obj = { channelId, guildId, muteDurationSeconds, onOptionPress };
    const result = guildId(onOptionPress[9]).handleMuteSettingPress(obj);
  }, items1);
  const items2 = [channelId, guildId];
  const items3 = [channel, guild];
  const callback = guild.useCallback(() => {
    channelId(onOptionPress[10]).hideActionSheet();
    const obj = channelId(onOptionPress[10]);
    guildId(onOptionPress[9]).handleUnmutePress(channelId, guildId);
  }, items2);
  const items4 = [channel, guild];
  const memo1 = guild.useMemo(() => guildId(onOptionPress[9]).getMuteSettingLabel(channel, guild), items3);
  const memo2 = guild.useMemo(() => guildId(onOptionPress[9]).getMuteSettingSublabel(channel, guild), items4);
  if (null != channel) {
    if (muted) {
      let obj = { hasIcons: true, children: null };
      obj = { icon: null, label: null, onPress: null };
      obj1 = { disableColor: true, source: null };
      obj1[1] = channelId(onOptionPress[14]);
      obj[0] = callback(guildId(onOptionPress[13]).Icon, obj1);
      const intl = guildId(onOptionPress[8]).intl;
      const obj2 = { name: null };
      const obj8 = guildId(onOptionPress[15]);
      obj2[0] = obj8.computeChannelName(channel, closure_7, closure_6, true);
      obj[1] = intl.format(guildId(onOptionPress[8]).t["eC+9rj"], obj2);
      obj[2] = callback;
      obj[1] = callback(guildId(onOptionPress[12]).TableRow, obj);
      const items5 = [callback(guildId(onOptionPress[11]).TableRowGroup, obj), ];
      let obj3 = { muteConfig: null, type: null };
      obj3[0] = muteConfig;
      const tmp10 = callback2;
      const tmp11 = closure_10;
      const tmp13 = guildId;
      const tmp14 = onOptionPress;
      const tmp20 = channelId(onOptionPress[16]);
      let MuteSettingType = guildId(onOptionPress[16]).MuteSettingType;
      const isPrivateResult = channel.isPrivate();
      MuteSettingType = { children: null };
      obj3[1] = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
      obj3 = tmp12(tmp20, obj3);
      items5[1] = obj3;
      MuteSettingType[0] = items5;
      tmp10(tmp11, MuteSettingType);
      const tmp22 = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
    }
  }
  obj1 = guildId(onOptionPress[9]);
  const muteOptions = obj1.getMuteOptions();
  const obj4 = {
    hasIcons: false,
    children: muteOptions.map((arg0) => {
      ({ label, duration: guildId } = arg0);
      return closure_1_9(guildId(onOptionPress[12]).TableRow, {
        label,
        onPress() {
          return closure_1_5(closure_0);
        }
      }, label);
    })
  };
  const tmp8 = callback;
  const obj5 = { children: null };
  const items6 = [
    tmp8(guildId(onOptionPress[18]).BottomSheetTitleHeader, { title: memo1, subtitle: memo2 }),
    callback(guildId(onOptionPress[11]).TableRowGroup, {
      hasIcons: false,
      children: muteOptions.map((arg0) => {
        ({ label, duration: guildId } = arg0);
        return closure_1_9(guildId(onOptionPress[12]).TableRow, {
          label,
          onPress() {
            return closure_1_5(closure_0);
          }
        }, label);
      })
    })
  ];
  obj5[0] = items6;
  return callback2(guildId(onOptionPress[17]).ActionSheet, obj5);
};
export const MuteSettingsHint = function MuteSettingsHint(guildMessageNotifications) {
  guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
  if (guildMessageNotifications.isMuted) {
    let obj = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl5 = getSystemLocale.intl;
    obj[2] = intl5.string(getSystemLocale.t.t0mEt2);
    let tmp3 = callback(Text.Text, obj);
  } else if (tmp) {
    obj = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = getSystemLocale.intl;
    obj1 = { mutedHook: null };
    obj1[0] = function mutedHook(children) {
      return callback2(callback(4444).Text, { variant: "text-sm/medium", color: "text-feedback-critical", children }, arg1);
    };
    obj[2] = intl4.format(getSystemLocale.t.O34r15, obj1);
    tmp3 = callback(Text.Text, obj);
  } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = getSystemLocale.intl;
    const obj3 = { notificationHook: null };
    obj3[0] = function notificationHook(children) {
      return callback2(callback(4444).Text, { variant: "text-sm/medium", color: "text-feedback-warning", children }, arg1);
    };
    obj2[2] = intl3.format(getSystemLocale.t.nRwUIL, obj3);
    tmp3 = callback(Text.Text, obj2);
  } else {
    if (guildMessageNotifications !== tmp2.ALL_MESSAGES) {
      tmp3 = null;
    }
    obj = dependencyMap;
    if (guildMessageNotifications === tmp2.ALL_MESSAGES) {
      const intl2 = tmp5(1236).intl;
      let stringResult = intl2.string(tmp5(1236).t.mUbulW);
    } else {
      const intl = tmp5(1236).intl;
      stringResult = intl.string(tmp5(1236).t.GGAdHV);
    }
    obj = { variant: "text-sm/medium", color: "text-default", children: null };
    obj[2] = stringResult;
    callback(Text.Text, obj);
    const tmp4 = callback;
  }
  return tmp3;
};