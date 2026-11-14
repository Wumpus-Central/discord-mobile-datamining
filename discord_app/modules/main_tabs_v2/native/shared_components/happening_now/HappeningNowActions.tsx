// === Module 18812: HappeningNowActions ===

// Module 18812 (HappeningNowActions)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import Text_Text from "Text/Text" /* 5929 */;
import FastImageDefault from "FastImage" /* 6020 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8143 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8404 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8460 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 14705 */;
import _modDef15138 from "module_15138" /* 15138 */;
import HappeningNowCardDefault from "HappeningNowCard" /* 17916 */;
import _modDef18813 from "module_18813" /* 18813 */;
import _modDef18814 from "module_18814" /* 18814 */;
import _modDef18815 from "module_18815" /* 18815 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import GuildStore from "GuildStore" /* 5177 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;

require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(17915);
({ HappeningNowCardTrackingType: closure_8, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_9, InstantInviteSources: closure_10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5306);
let obj = { actionCard: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE }, actionCardImage: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: nativeDefault.radii.sm };
obj.actionCardImage = size;
let closure_13 = createStyles.createStyles(obj);
let closure_14 = noop.memo(function ActionCard(panelVariant) {
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_13();
  const obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: null };
  const obj2 = { style: tmp.actionCardImage, children: closure_1_11(FastImageDefault, { source: imageSource }) };
  items = [closure_1_11(View, obj2), closure_1_11(Text_Text.Text, { variant: "body-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  obj.children = items;
  return application_id(HappeningNowCardDefault, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId });
    const obj2 = { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    CreateChannelModalActionCreatorsDefault.open(null, guildId, null, null);
  }, items);
  obj.imageSource = _modDef18813;
  obj.onPress = callback;
  const intl = guildId(1113).intl;
  obj.text = intl.string(guildId(1113).t["fUYU+j"]);
  obj.panelVariant = flag;
  return closure_11(closure_14, obj);
}
export function HappeningNowCardCustomizeGuild(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  items = [guildId];
  let obj = { text: "Customize", imageSource: null, onPress: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId });
    const obj2 = { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    GuildSettingsActionCreatorsDefault.open(guildId);
  }, items);
  obj.imageSource = _modDef18814;
  obj.onPress = callback;
  obj.panelVariant = flag;
  return closure_11(closure_14, obj);
}
export function HappeningNowCardInvite(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    guild = GuildStore.getGuild(guildId);
    const channels = GuildChannelStore.getChannels(guildId);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    if (null != guild) {
      const obj2 = { type: constants.GUILD_ACTION_INVITE_CARD, order: 0, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj3 = instant_invite_InstantInviteUtils;
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, constants3.SERVER_PROFILE);
    }
  }, items);
  obj.imageSource = _modDef18815;
  obj.onPress = callback;
  const intl = guildId(1113).intl;
  obj.text = intl.string(guildId(1113).t.VINpSK);
  obj.panelVariant = flag;
  return closure_11(closure_14, obj);
}
export function HappeningNowStudentHubAddServer(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    guild = GuildStore.getGuild(guildId);
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    if (tmp4) {
      const obj2 = { type: constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
      ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
      obj6.directoryChannelId = defaultChannel.id;
      GuildDirectoryAddModalActionCreatorsDefault.open(obj6);
    }
    tmp4 = null != guild && null != defaultChannel;
  }, items);
  obj.imageSource = _modDef15138;
  obj.onPress = callback;
  const intl = guildId(1113).intl;
  obj.text = intl.string(guildId(1113).t.emRpdS);
  obj.panelVariant = flag;
  return closure_11(closure_14, obj);
}