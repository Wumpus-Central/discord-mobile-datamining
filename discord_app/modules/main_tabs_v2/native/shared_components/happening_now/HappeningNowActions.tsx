// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../guild_settings/GuildSettingsActionCreators.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../../actions/native/CreateChannelModalActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../../../instant_invite/native/InstantInviteUtils.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "../../../../directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx";
import _modDef12908 from "../../../../../../_runtime/metro/12908__.js";
import HappeningNowCardDefault from "HappeningNowCard.tsx";
import _modDef16202 from "../../../../../../_runtime/metro/16202__.js";
import _modDef16203 from "../../../../../../_runtime/metro/16203__.js";
import _modDef16204 from "../../../../../../_runtime/metro/16204__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const HappeningNowConstants = fn(15390);
({ HappeningNowCardTrackingType: closure_9, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
const Constants = fn(1074);
({ AnalyticEvents: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4639);
let obj = {
  actionCard: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
    height: HAPPENING_NOW_CARD_HEIGHT,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  actionCardImage: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  height: 44,
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 4,
  borderRadius: nativeDefault.radii.sm,
};
obj.actionCardImage = size;
let closure_14 = createStyles.createStyles(obj);
let closure_15 = noop.memo((panelVariant) => {
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_14();
  const obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: null };
  const obj2 = { style: tmp.actionCardImage, children: closure_1_12(hasOwnProperty, { source: imageSource }) };
  const items = [
    closure_1_12(React4, obj2),
    closure_1_12(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text }),
  ];
  obj.children = items;
  return map1(HappeningNowCardDefault, obj);
});
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx",
);

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, {
      type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD,
      order: 0,
      guild_id: guildId,
    });
    const obj2 = { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    CreateChannelModalActionCreatorsDefault.open(null, guildId, null, null);
  }, items);
  obj.imageSource = _modDef16202;
  obj.onPress = callback;
  const intl = guildId(1115).intl;
  obj.text = intl.string(guildId(1115).t["fUYU+j"]);
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
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, {
      type: constants.GUILD_ACTION_CUSTOMIZE_CARD,
      order: 0,
      guild_id: guildId,
    });
    const obj2 = { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    GuildSettingsActionCreatorsDefault.open(guildId);
  }, items);
  obj.imageSource = _modDef16203;
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
      const obj2 = { type: constants.GUILD_ACTION_INVITE_CARD, order: 0, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj3 = instant_invite_InstantInviteUtils;
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, constants3.SERVER_PROFILE);
    }
  }, items);
  obj.imageSource = _modDef16204;
  obj.onPress = callback;
  const intl = guildId(1115).intl;
  obj.text = intl.string(guildId(1115).t.VINpSK);
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
      const obj2 = { type: constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
      ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
      obj6.directoryChannelId = defaultChannel.id;
      GuildDirectoryAddModalActionCreatorsDefault.open(obj6);
    }
    tmp4 = null != guild && null != defaultChannel;
  }, items);
  obj.imageSource = _modDef12908;
  obj.onPress = callback;
  const intl = guildId(1115).intl;
  obj.text = intl.string(guildId(1115).t.emRpdS);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};
