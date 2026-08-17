// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../../_runtime/11948_registerAsset.js";
import HAPPENING_NOW_CARD_MARGIN_RIGHTDefault from "HappeningNowCard.tsx";
import registerAssetDefault2 from "../../../../../../_runtime/15355_registerAsset.js";
import registerAssetDefault3 from "../../../../../../_runtime/15356_registerAsset.js";
import registerAssetDefault4 from "../../../../../../_runtime/15357_registerAsset.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../../stores/GuildChannelStore.tsx";
import closure_7 from "../../../../../stores/GuildStore.tsx";
import closure_8 from "../../../../../stores/SelectedChannelStore.tsx";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HappeningNowConstants.tsx";
import ME from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ HappeningNowCardTrackingType: c9, HAPPENING_NOW_CARD_HEIGHT } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ AnalyticEvents: c10, InstantInviteSources: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { actionCard: null, actionCardImage: null };
obj = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[0] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: ThemesDefault.radii.sm };
obj[1] = createCacheKey;
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = importAllResult.memo((panelVariant) => {
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: null };
  obj = { style: tmp.actionCardImage, children: callback(closure_5, { source: imageSource }) };
  const items = [callback(closure_4, obj), callback(Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  obj[4] = items;
  return callback2(HAPPENING_NOW_CARD_MARGIN_RIGHTDefault, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = importAllResult.useCallback(() => {
    let obj = closure_1_1(closure_1_2[10]);
    obj = { type: closure_1_9.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
    closure_1_1(closure_1_2[11]).open(null, guildId, null, null);
  }, items);
  obj[0] = registerAssetDefault2;
  obj[1] = callback;
  const intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t["fUYU+j"]);
  obj[3] = flag;
  return callback(closure_15, obj);
};
export const HappeningNowCardCustomizeGuild = function HappeningNowCardCustomizeGuild(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { text: "Customize", imageSource: null, onPress: null, panelVariant: null };
  const callback = importAllResult.useCallback(() => {
    let obj = closure_1_1(closure_1_2[10]);
    obj = { type: closure_1_9.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
    closure_1_1(closure_1_2[14]).open(guildId);
  }, items);
  obj[1] = registerAssetDefault3;
  obj[2] = callback;
  obj[3] = flag;
  return callback(closure_15, obj);
};
export const HappeningNowCardInvite = function HappeningNowCardInvite(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = importAllResult.useCallback(() => {
    const guild = closure_1_7.getGuild(guildId);
    const channels = closure_1_6.getChannels(guildId);
    const channelId = closure_1_8.getChannelId(guildId);
    if (null != guild) {
      let obj = closure_1_1(closure_1_2[10]);
      obj = { type: null, order: 0, guild_id: null };
      obj[0] = closure_1_9.GUILD_ACTION_INVITE_CARD;
      obj[2] = guildId;
      obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
      const obj3 = guildId(closure_1_2[16]);
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, closure_1_11.SERVER_PROFILE);
    }
  }, items);
  obj[0] = registerAssetDefault4;
  obj[1] = callback;
  const intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t.VINpSK);
  obj[3] = flag;
  return callback(closure_15, obj);
};
export const HappeningNowStudentHubAddServer = function HappeningNowStudentHubAddServer(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = importAllResult.useCallback(() => {
    const guild = closure_1_7.getGuild(guildId);
    const defaultChannel = closure_1_6.getDefaultChannel(guildId);
    if (tmp4) {
      let obj = closure_1_1(closure_1_2[10]);
      obj = { type: null, order: 0, guild_id: null };
      obj[0] = closure_1_9.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
      obj[2] = guildId;
      obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
      obj = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
      ({ id: obj4[0], name: obj4[1] } = guild);
      obj[2] = defaultChannel.id;
      closure_1_1(closure_1_2[18]).open(obj);
      const obj3 = closure_1_1(closure_1_2[18]);
    }
  }, items);
  obj[0] = registerAssetDefault;
  obj[1] = callback;
  const intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t.emRpdS);
  obj[3] = flag;
  return callback(closure_15, obj);
};