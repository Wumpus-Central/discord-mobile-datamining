// === Module 16091: HappeningNowActions ===

// Module 16091 (HappeningNowActions)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9737 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12308 */;
import _modDef12773 from "module_12773" /* 12773 */;
import HappeningNowCardDefault from "HappeningNowCard" /* 15295 */;
import _modDef16092 from "module_16092" /* 16092 */;
import _modDef16093 from "module_16093" /* 16093 */;
import _modDef16094 from "module_16094" /* 16094 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const HappeningNowConstants = fn(15294);
({ HappeningNowCardTrackingType: closure_9, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
const Constants = fn(1074);
({ AnalyticEvents: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4560);
let obj = { actionCard: null, actionCardImage: null };
obj = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.actionCard = obj;
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: nativeDefault.radii.sm };
obj.actionCardImage = size;
let closure_14 = createStyles.createStyles(obj);
let closure_15 = noop.memo((panelVariant) => {
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_14();
  let obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: null };
  obj = { style: tmp.actionCardImage, children: closure_1_12(hasOwnProperty, { source: imageSource }) };
  const items = [closure_1_12(React4, obj), closure_1_12(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  obj.children = items;
  return map1(HappeningNowCardDefault, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    const obj = { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    obj.track(constants2.ACTIVITY_CARD_CLICKED, obj);
    CreateChannelModalActionCreatorsDefault.open(null, guildId, null, null);
  }, items);
  obj.imageSource = _modDef16092;
  obj.onPress = callback;
  const intl = guildId(1114).intl;
  obj.text = intl.string(guildId(1114).t["fUYU+j"]);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};
export const HappeningNowCardCustomizeGuild = function HappeningNowCardCustomizeGuild(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { text: "Customize", imageSource: null, onPress: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    const obj = { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    obj.track(constants2.ACTIVITY_CARD_CLICKED, obj);
    GuildSettingsActionCreatorsDefault.open(guildId);
  }, items);
  obj.imageSource = _modDef16093;
  obj.onPress = callback;
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};
export const HappeningNowCardInvite = function HappeningNowCardInvite(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    const guild = GuildStore.getGuild(guildId);
    const channels = GuildChannelStore.getChannels(guildId);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    if (null != guild) {
      const obj = { type: constants.GUILD_ACTION_INVITE_CARD, order: 0, guild_id: guildId };
      obj.track(constants2.ACTIVITY_CARD_CLICKED, obj);
      const obj3 = instant_invite_InstantInviteUtils;
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, constants3.SERVER_PROFILE);
    }
  }, items);
  obj.imageSource = _modDef16094;
  obj.onPress = callback;
  const intl = guildId(1114).intl;
  obj.text = intl.string(guildId(1114).t.VINpSK);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};
export const HappeningNowStudentHubAddServer = function HappeningNowStudentHubAddServer(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    const guild = GuildStore.getGuild(guildId);
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    if (tmp4) {
      let obj = { type: constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: guildId };
      obj.track(constants2.ACTIVITY_CARD_CLICKED, obj);
      obj = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
      ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
      obj.directoryChannelId = defaultChannel.id;
      GuildDirectoryAddModalActionCreatorsDefault.open(obj);
    }
    tmp4 = null != guild && null != defaultChannel;
  }, items);
  obj.imageSource = _modDef12773;
  obj.onPress = callback;
  const intl = guildId(1114).intl;
  obj.text = intl.string(guildId(1114).t.emRpdS);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};