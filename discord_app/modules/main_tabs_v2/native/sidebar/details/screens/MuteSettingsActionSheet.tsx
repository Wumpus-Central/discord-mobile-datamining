// === Module 10144: MuteSettingsActionSheet ===

// Module 10144 (MuteSettingsActionSheet)
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9057 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

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
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { channelId, guildId, muteDurationSeconds, onOptionPress };
    const result = MuteSettingsUtils.handleMuteSettingPress(obj);
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
      obj = { icon: null, label: null, onPress: null };
      let obj1 = { disableColor: true, source: channelId(onOptionPress[14]) };
      obj.icon = closure_9(guildId(onOptionPress[13]).Icon, obj1);
      const intl = guildId(onOptionPress[8]).intl;
      const obj2 = { name: null };
      const obj8 = guildId(onOptionPress[15]);
      obj2.name = obj8.computeChannelName(channel, UserStore, RelationshipStore, true);
      obj.label = intl.format(guildId(onOptionPress[8]).t["eC+9rj"], obj2);
      obj.onPress = callback;
      obj.children = closure_9(guildId(onOptionPress[12]).TableRow, obj);
      const items5 = [closure_9(guildId(onOptionPress[11]).TableRowGroup, obj), ];
      let obj3 = { muteConfig, type: null };
      const tmp10 = closure_11;
      const tmp11 = closure_10;
      const tmp20 = channelId(onOptionPress[16]);
      guildId(onOptionPress[16]).MuteSettingType;
      const isPrivateResult = channel.isPrivate();
      const MuteSettingType = { children: null };
      obj3.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
      obj3 = tmp12(tmp20, obj3);
      items5[1] = obj3;
      MuteSettingType.children = items5;
      tmp10(tmp11, MuteSettingType);
      const tmp22 = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
    }
  }
  obj1 = guildId(onOptionPress[9]);
  const muteOptions = obj1.getMuteOptions();
  const obj4 = {
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
  const tmp8 = closure_9;
  const obj5 = { children: null };
  const items6 = [
    tmp8(guildId(onOptionPress[18]).BottomSheetTitleHeader, { title: memo1, subtitle: memo2 }),
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
  obj5.children = items6;
  return closure_11(guildId(onOptionPress[17]).ActionSheet, obj5);
};
export const MuteSettingsHint = function MuteSettingsHint(guildMessageNotifications) {
  guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
  if (guildMessageNotifications.isMuted) {
    let obj = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl5 = util.intl;
    obj.children = intl5.string(util.t.t0mEt2);
    let tmp3 = React7(Text_Text.Text, obj);
  } else if (tmp) {
    obj = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = util.intl;
    const obj1 = {
      mutedHook(children, arg1) {
          return closure_1_9(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children }, arg1);
        }
    };
    obj.children = intl4.format(util.t.O34r15, obj1);
    tmp3 = React7(Text_Text.Text, obj);
  } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj3 = {
      notificationHook(children, arg1) {
          return closure_1_9(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-warning", children }, arg1);
        }
    };
    obj2.children = intl3.format(util.t.nRwUIL, obj3);
    tmp3 = React7(Text_Text.Text, obj2);
  } else {
    if (guildMessageNotifications !== tmp2.ALL_MESSAGES) {
      tmp3 = null;
    }
    obj = dependencyMap;
    if (guildMessageNotifications === tmp2.ALL_MESSAGES) {
      const intl2 = tmp5(1114).intl;
      let stringResult = intl2.string(tmp5(1114).t.mUbulW);
    } else {
      const intl = tmp5(1114).intl;
      stringResult = intl.string(tmp5(1114).t.GGAdHV);
    }
    obj = { variant: "text-sm/medium", color: "text-default", children: stringResult };
    React7(Text_Text.Text, obj);
  }
  return tmp3;
};