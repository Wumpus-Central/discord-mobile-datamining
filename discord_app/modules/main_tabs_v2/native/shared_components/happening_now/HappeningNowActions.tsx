// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx
import importAllResult from "registerAsset";
import get_ActivityIndicator from "registerAsset";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import ME from "ME";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../_runtime/12036_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/15120_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/15121_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/15122_registerAsset.js";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { HAPPENING_NOW_CARD_MARGIN_RIGHT } from "HappeningNowCard.tsx";

let HAPPENING_NOW_CARD_HEIGHT;
let c10;
let c4;
let c5;
let c9;
let closure_12;
let map1;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ HappeningNowCardTrackingType: c9, HAPPENING_NOW_CARD_HEIGHT } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ AnalyticEvents: c10, InstantInviteSources: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { actionCard: null, actionCardImage: null };
obj = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: require("Themes").radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderColor: require("Themes").colors.BORDER_SUBTLE };
obj[0] = obj;
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: require("Themes").radii.sm };
obj[1] = createCacheKey;
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = importAllResult.memo((panelVariant) => {
  let imageSource;
  let onPress;
  let text;
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: null };
  obj = { style: tmp.actionCardImage, children: null };
  obj[1] = callback(closure_5, { source: imageSource });
  const items = [callback(closure_4, obj), callback(Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  obj[4] = items;
  return callback2(HAPPENING_NOW_CARD_MARGIN_RIGHT, obj);
});
let result = require("comparator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = importAllResult.useCallback(() => {
    let obj = outer1_1(outer1_2[10]);
    obj = { type: outer1_9.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    obj.track(outer1_10.ACTIVITY_CARD_CLICKED, obj);
    outer1_1(outer1_2[11]).open(null, guildId, null, null);
  }, items);
  obj[0] = registerAsset;
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
    let obj = outer1_1(outer1_2[10]);
    obj = { type: outer1_9.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    obj.track(outer1_10.ACTIVITY_CARD_CLICKED, obj);
    outer1_1(outer1_2[14]).open(guildId);
  }, items);
  obj[1] = registerAsset;
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
    const guild = outer1_7.getGuild(guildId);
    const channels = outer1_6.getChannels(guildId);
    const channelId = outer1_8.getChannelId(guildId);
    if (null != guild) {
      let obj = outer1_1(outer1_2[10]);
      obj = { type: null, order: 0, guild_id: null };
      obj[0] = outer1_9.GUILD_ACTION_INVITE_CARD;
      obj[2] = guildId;
      obj.track(outer1_10.ACTIVITY_CARD_CLICKED, obj);
      const obj3 = guildId(outer1_2[16]);
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, outer1_11.SERVER_PROFILE);
    }
  }, items);
  obj[0] = registerAsset;
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
    const guild = outer1_7.getGuild(guildId);
    const defaultChannel = outer1_6.getDefaultChannel(guildId);
    if (tmp4) {
      let obj = outer1_1(outer1_2[10]);
      obj = { type: null, order: 0, guild_id: null };
      obj[0] = outer1_9.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
      obj[2] = guildId;
      obj.track(outer1_10.ACTIVITY_CARD_CLICKED, obj);
      obj = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
      ({ id: obj4[0], name: obj4[1] } = guild);
      obj[2] = defaultChannel.id;
      outer1_1(outer1_2[18]).open(obj);
      const obj3 = outer1_1(outer1_2[18]);
    }
  }, items);
  obj[0] = registerAsset;
  obj[1] = callback;
  const intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t.emRpdS);
  obj[3] = flag;
  return callback(closure_15, obj);
};