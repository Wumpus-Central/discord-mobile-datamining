// === Module 10290: MuteSettingsActionSheet ===

// Module 10290 (MuteSettingsActionSheet)
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import Text_Text from "Text/Text" /* 4636 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9211 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx");

export default function MuteSettings(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const onOptionPress = guildId.onOptionPress;
  let channel;
  GuildStore = undefined;
  const guild = GuildStore.getGuild(guildId);
  channel = channel.getChannel(channelId);
  const items = [channelId];
  const memo = guild.useMemo(() => MuteSettingsUtils.getMuteSettings(channelId), items);
  const items1 = [channelId, guildId, onOptionPress];
  ({ muteConfig, muted } = memo);
  GuildStore = guild.useCallback((muteDurationSeconds) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = MuteSettingsUtils.handleMuteSettingPress({ channelId, guildId, muteDurationSeconds, onOptionPress });
  }, items1);
  const items2 = [channelId, guildId];
  const items3 = [channel, guild];
  const callback = guild.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    MuteSettingsUtils.handleUnmutePress(channelId, guildId);
  }, items2);
  const items4 = [channel, guild];
  const memo1 = guild.useMemo(() => MuteSettingsUtils.getMuteSettingLabel(channel, guild), items3);
  const memo2 = guild.useMemo(() => MuteSettingsUtils.getMuteSettingSublabel(channel, guild), items4);
  if (null != channel) {
    if (muted) {
      let obj = { hasIcons: true, children: null };
      const obj3 = { icon: null, label: null, onPress: null };
      const obj4 = { disableColor: true, source: channelId(onOptionPress[14]) };
      obj3.icon = closure_9(guildId(onOptionPress[13]).Icon, obj4);
      const intl = guildId(onOptionPress[8]).intl;
      const obj5 = { name: null };
      const obj8 = guildId(onOptionPress[15]);
      obj5.name = obj8.computeChannelName(channel, UserStore, RelationshipStore, true);
      obj3.label = intl.format(guildId(onOptionPress[8]).t["eC+9rj"], obj5);
      obj3.onPress = callback;
      obj.children = closure_9(guildId(onOptionPress[12]).TableRow, obj3);
      const items5 = [closure_9(guildId(onOptionPress[11]).TableRowGroup, obj), ];
      let obj6 = { muteConfig, type: null };
      const tmp20 = channelId(onOptionPress[16]);
      guildId(onOptionPress[16]).MuteSettingType;
      const isPrivateResult = channel.isPrivate();
      const MuteSettingType = { children: null };
      obj6.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
      obj6 = closure_9(tmp20, obj6);
      items5[1] = obj6;
      MuteSettingType.children = items5;
      closure_11(closure_10, MuteSettingType);
      const tmp22 = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
    }
  }
  const muteOptions = guildId(onOptionPress[9]).getMuteOptions();
  const obj2 = guildId(onOptionPress[9]);
  const obj7 = {
    hasIcons: false,
    children: muteOptions.map((item) => {
      ({ label, duration: guildId } = item);
      return closure_1_9(guildId(onOptionPress[12]).TableRow, {
        label,
        onPress() {
          return closure_5(guildId);
        }
      }, label);
    })
  };
  const obj9 = { children: null };
  const items6 = [
    closure_9(guildId(onOptionPress[18]).BottomSheetTitleHeader, { title: memo1, subtitle: memo2 }),
    closure_9(guildId(onOptionPress[11]).TableRowGroup, {
      hasIcons: false,
      children: muteOptions.map((item) => {
        ({ label, duration: guildId } = item);
        return closure_1_9(guildId(onOptionPress[12]).TableRow, {
          label,
          onPress() {
            return closure_5(guildId);
          }
        }, label);
      })
    })
  ];
  obj9.children = items6;
  return closure_11(guildId(onOptionPress[17]).ActionSheet, obj9);
};
export const MuteSettingsHint = function MuteSettingsHint(guildMessageNotifications) {
  guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
  if (guildMessageNotifications.isMuted) {
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl5 = util.intl;
    obj2.children = intl5.string(util.t.t0mEt2);
    let tmp3 = React7(Text_Text.Text, obj2);
  } else if (tmp) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = util.intl;
    const obj4 = {
      mutedHook(children, arg1) {
          return closure_1_9(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children }, arg1);
        }
    };
    obj3.children = intl4.format(util.t.O34r15, obj4);
    tmp3 = React7(Text_Text.Text, obj3);
  } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj6 = {
      notificationHook(children, arg1) {
          return closure_1_9(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-warning", children }, arg1);
        }
    };
    obj5.children = intl3.format(util.t.nRwUIL, obj6);
    tmp3 = React7(Text_Text.Text, obj5);
  } else {
    if (guildMessageNotifications !== UserNotificationSettings.ALL_MESSAGES) {
      tmp3 = null;
    }
    let obj = dependencyMap;
    if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.mUbulW);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.GGAdHV);
    }
    obj = { variant: "text-sm/medium", color: "text-default", children: stringResult };
    React7(Text_Text.Text, obj);
  }
  return tmp3;
};