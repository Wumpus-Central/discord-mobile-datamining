// === Module 15354: HappeningNowCardCreateChannel ===

// Module 15354 (HappeningNowCardCreateChannel)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import _modDef8849 from "module_8849" /* 8849 */;
import _modDef8874 from "module_8874" /* 8874 */;
import _modDef11475 from "module_11475" /* 11475 */;
import registerAssetDefault from "registerAsset" /* 11948 */;
import HAPPENING_NOW_CARD_MARGIN_RIGHTDefault from "HAPPENING_NOW_CARD_MARGIN_RIGHT" /* 14641 */;
import registerAssetDefault2 from "registerAsset" /* 15355 */;
import registerAssetDefault3 from "registerAsset" /* 15356 */;
import registerAssetDefault4 from "registerAsset" /* 15357 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import comparator from "comparator" /* 1980 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 14640 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ HappeningNowCardTrackingType: c9, HAPPENING_NOW_CARD_HEIGHT } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ AnalyticEvents: c10, InstantInviteSources: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[0] = obj;
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: ThemesDefault.radii.sm };
obj[1] = createCacheKey;
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = importAllResult.memo((panelVariant) => {
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  const obj = { style: tmp.actionCardImage, children: callback(closure_5, { source: imageSource }) };
  const items = [callback(closure_4, obj), callback(Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  obj[4] = items;
  return callback2(HAPPENING_NOW_CARD_MARGIN_RIGHTDefault, obj);
});
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = importAllResult.useCallback(() => {
    const obj = { type: closure_1_9.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
    _modDef8849.open(null, guildId, null, null);
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
    const obj = { type: closure_1_9.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
    _modDef8874.open(guildId);
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
      const obj = { type: null, order: 0, guild_id: null };
      obj[0] = closure_1_9.GUILD_ACTION_INVITE_CARD;
      obj[2] = guildId;
      obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
      const obj3 = guildId(dependencyMap[16]);
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
      let obj = { type: null, order: 0, guild_id: null };
      obj[0] = closure_1_9.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
      obj[2] = guildId;
      obj.track(closure_1_10.ACTIVITY_CARD_CLICKED, obj);
      obj = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
      ({ id: obj4[0], name: obj4[1] } = guild);
      obj[2] = defaultChannel.id;
      _modDef11475.open(obj);
    }
    tmp4 = null != guild && null != defaultChannel;
  }, items);
  obj[0] = registerAssetDefault;
  obj[1] = callback;
  const intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t.emRpdS);
  obj[3] = flag;
  return callback(closure_15, obj);
};