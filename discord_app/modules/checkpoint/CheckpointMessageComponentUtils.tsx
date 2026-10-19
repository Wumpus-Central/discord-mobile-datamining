// === Module 5991: checkpoint/CheckpointMessageComponentUtils ===

// Module 5991 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1128 */;
import Server from "Server" /* 2000 */;
import _modDef3046 from "module_3046" /* 3046 */;
import _modDef3078 from "module_3078" /* 3078 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4894 */;
import CheckpointUtils from "CheckpointUtils" /* 5979 */;
import CheckpointTrait from "CheckpointTrait" /* 5993 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 5994 */;
import CheckpointConstants from "CheckpointConstants" /* 5970 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function transformCheckpoint2026StatsToRowGeneratedComponent(stats) {
  obj = { powerLevel: null, powerLevelUnits: null, voice: null, messages: null, topGuildDaysInteracted: null, topGuildName: null, reactions: null, topEmojiName: null, daysPlayed: null, topGameName: null, topEmoji: null, topGuild: null, topGame: null };
  const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  obj.powerLevel = numberFormat.format(stats.powerLevel);
  obj.powerLevelUnits = Math.min(Math.max(Math.round(stats.powerLevelPercentile / 100 * hasOwnProperty), React4), React3);
  const rounded = Math.round(stats.totalVoiceMinutes);
  if (rounded > 0) {
    let voiceDurationString = CheckpointUtils.getVoiceDurationString(rounded);
    const tmpResult = CheckpointUtils;
  } else {
    const intl = util.intl;
    const obj2 = { minutes: rounded };
    voiceDurationString = intl.formatToPlainString(util.t.iXLF9W, obj2);
  }
  const obj3 = { text: voiceDurationString, accessibilityLabel: null };
  const intl2 = util.intl;
  const obj4 = { duration: CheckpointUtils.getAccessibleVoiceDurationString(rounded) };
  obj3.accessibilityLabel = intl2.formatToPlainString(_modDef3078.lw35aH, obj4);
  obj.voice = obj3;
  if (stats.numMessagesSent > 0) {
    const numMessagesSent = stats.numMessagesSent;
    let toLocaleStringResult = numMessagesSent.toLocaleString(util.intl.currentLocale);
  } else {
    const intl3 = util.intl;
    const obj5 = { count: stats.numMessagesSent };
    toLocaleStringResult = intl3.formatToPlainString(_modDef3078.foKBCN, obj5);
  }
  const obj6 = { text: toLocaleStringResult, accessibilityLabel: null };
  const intl4 = util.intl;
  obj6.accessibilityLabel = intl4.formatToPlainString(_modDef3078.IdRUAC, { count: stats.numMessagesSent });
  obj.messages = obj6;
  if (null == stats.topGuild) {
    const intl5 = util.intl;
    const stringResult = intl5.string(_modDef3078.GultYJ);
    const obj8 = { text: stringResult, accessibilityLabel: stringResult };
    let obj9 = obj8;
  } else {
    obj9 = { text: null, accessibilityLabel: null };
    const intl17 = util.intl;
    const obj10 = { days: stats.topGuildNumDaysInteracted };
    obj9.text = intl17.formatToPlainString(util.t.GBLpQ8, obj10);
    const intl18 = util.intl;
    const obj11 = { days: stats.topGuildNumDaysInteracted };
    obj9.accessibilityLabel = intl18.formatToPlainString(_modDef3078.MpSH8v, obj11);
  }
  obj.topGuildDaysInteracted = obj9;
  if (null == stats.topGuild) {
    const intl7 = util.intl;
    const stringResult1 = intl7.string(util.t["52UOf9"]);
    const obj12 = { text: stringResult1, accessibilityLabel: stringResult1 };
    let obj13 = obj12;
  } else {
    obj13 = { text: stats.topGuild.guildName, accessibilityLabel: null };
    const intl6 = util.intl;
    const obj14 = { guildName: stats.topGuild.guildName };
    obj13.accessibilityLabel = intl6.formatToPlainString(_modDef3078["9UTJ+t"], obj14);
  }
  obj.topGuildName = obj13;
  if (stats.numEmojisSent > 0) {
    const numEmojisSent = stats.numEmojisSent;
    let toLocaleStringResult1 = numEmojisSent.toLocaleString(util.intl.currentLocale);
  } else {
    const intl8 = util.intl;
    const obj15 = { count: stats.numEmojisSent };
    toLocaleStringResult1 = intl8.formatToPlainString(_modDef3078.RHYx1k, obj15);
  }
  const obj16 = { text: toLocaleStringResult1, accessibilityLabel: null };
  const intl9 = util.intl;
  obj16.accessibilityLabel = intl9.formatToPlainString(_modDef3078["36qpUG"], { count: stats.numEmojisSent });
  obj.reactions = obj16;
  if (null == stats.topEmoji) {
    const intl11 = util.intl;
    const stringResult2 = intl11.string(util.t.lxsmBd);
    const obj18 = { text: stringResult2, accessibilityLabel: stringResult2 };
    let obj19 = obj18;
  } else {
    if (null == stats.topEmoji.emojiId) {
      let result = UnicodeEmojisDefault.convertSurrogateToName(stats.topEmoji.emojiName);
      const tmp5Result = UnicodeEmojisDefault;
    } else {
      const _HermesInternal = HermesInternal;
      result = ":" + stats.topEmoji.emojiName + ":";
    }
    obj19 = { text: result, accessibilityLabel: null };
    const intl10 = util.intl;
    const obj20 = { emojiName: stats.topEmoji.emojiName };
    obj19.accessibilityLabel = intl10.formatToPlainString(_modDef3078.CcBo8C, obj20);
  }
  obj.topEmojiName = obj19;
  if (stats.totalDaysPlayed > 0) {
    const intl13 = util.intl;
    const obj21 = { days: stats.totalDaysPlayed };
    let formatToPlainStringResult = intl13.formatToPlainString(util.t.GBLpQ8, obj21);
  } else {
    const intl12 = util.intl;
    formatToPlainStringResult = intl12.string(_modDef3078.mg1NPe);
  }
  const obj22 = { text: formatToPlainStringResult, accessibilityLabel: null };
  const intl14 = util.intl;
  obj22.accessibilityLabel = intl14.formatToPlainString(_modDef3078.LYcKX7, { days: stats.totalDaysPlayed });
  obj.daysPlayed = obj22;
  if (null == stats.topGame) {
    const intl16 = util.intl;
    const stringResult3 = intl16.string(util.t["5eYZiW"]);
    const obj24 = { text: stringResult3, accessibilityLabel: stringResult3 };
    let obj25 = obj24;
  } else {
    obj25 = { text: stats.topGame.applicationName, accessibilityLabel: null };
    const intl15 = util.intl;
    const obj26 = { gameName: stats.topGame.applicationName };
    obj25.accessibilityLabel = intl15.formatToPlainString(_modDef3078.kLqpNC, obj26);
  }
  obj.topGameName = obj25;
  ({ topEmoji: obj.topEmoji, topGuild: obj.topGuild, topGame: obj.topGame } = stats);
  return obj;
}
({ CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3, CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4, CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty, NATIVE_CHARACTER_LAYER_SIZE: metroRequire, CheckpointVersions: closure_7 } = CheckpointConstants);
let obj = {};
obj[CheckpointTrait.CheckpointTrait.BASE] = CheckpointCharacterAssets.CHARACTER_BASE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterAssets.CHARACTER_SHOES_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterAssets.CHARACTER_OUTFIT_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.FACE] = CheckpointCharacterAssets.CHARACTER_FACE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterAssets.CHARACTER_HAT_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterAssets.CHARACTER_WEARABLE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAssets.CHARACTER_AURA_TRAIT_ASSETS;
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export const transformCheckpoint2026CardComponent = function transformCheckpoint2026CardComponent(checkpoint_data) {
  let tmp2 = null;
  if (obj.getIsCheckpointCardEnabled("transformCheckpoint2026CardComponent")) {
    if (null != checkpoint_data.character) {
      const obj2 = { version: checkpoint_data.version, character: null, stats: null };
      let tmp5;
      if (null != checkpoint_data.character) {
        ({ base: obj3.base, shoes: obj3.shoes, outfit: obj3.outfit, face: obj3.face, hat: obj3.hat, wearable: obj3.wearable, aura: obj3.aura } = checkpoint_data.character);
        tmp5 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
        const obj6 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
      }
      obj2.character = tmp5;
      let tmp6;
      if (null != checkpoint_data.stats) {
        const stats = checkpoint_data.stats;
        const obj7 = { totalVoiceMinutes: null, numMessagesSent: null, numEmojisSent: null, totalDaysPlayed: null, topEmoji: null, topGuild: null, topGuildNumDaysInteracted: null, topGame: null, powerLevel: null, powerLevelPercentile: null };
        ({ total_voice_minutes: obj4.totalVoiceMinutes, num_messages_sent: obj4.numMessagesSent, num_emojis_sent: obj4.numEmojisSent, total_days_played: obj4.totalDaysPlayed } = stats);
        let tmp7;
        if (null != stats.top_emoji) {
          let emoji_id;
          if (obj5.isProbablyAValidSnowflake(stats.top_emoji.emoji_id)) {
            emoji_id = stats.top_emoji.emoji_id;
          }
          const obj8 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
          tmp7 = obj8;
          obj5 = SnowflakeUtilsDefault;
        }
        obj7.topEmoji = tmp7;
        let tmp10;
        if (null != stats.top_guild) {
          const obj14 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
          tmp10 = obj14;
        }
        obj7.topGuild = tmp10;
        obj7.topGuildNumDaysInteracted = stats.top_guild_num_days_interacted;
        let tmp11;
        if (null != stats.top_game) {
          const obj15 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
          tmp11 = obj15;
        }
        obj7.topGame = tmp11;
        ({ power_level: obj4.powerLevel, power_level_percentile: obj4.powerLevelPercentile } = stats);
        tmp6 = obj7;
      }
      obj2.stats = tmp6;
      let tmp4 = obj2;
    } else {
      tmp4 = null;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const getCharacterLayerUrls = function getCharacterLayerUrls(wearable, arg1) {
  _require = wearable;
  closure_1 = arg1;
  const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = require("CheckpointTraitConfig").CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
  const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(wearable.wearable);
  const tmp2 = require("CheckpointTraitConfig");
  items = [];
  const item = hasItem ? tmp2.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : tmp2.CHECKPOINT_LAYER_DEFAULT_ORDERING.forEach((item) => {
    let layer;
    if (obj[item][character[item]] != null) {
      layer = tmp.layer;
    }
    let tmp3 = null != layer;
    if (tmp3) {
      tmp3 = "" !== layer;
    }
    if (tmp3) {
      const _HermesInternal = HermesInternal;
      items.push("" + layer + "?height=" + closure_1 + "&width=" + closure_1);
    }
  });
  return items;
};
export { transformCheckpoint2026StatsToRowGeneratedComponent };
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
  obj = { version: checkpointData.version, authorId: message.author.id, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor, character: null, stats: null, clickable: null };
  if (null == checkpointData.character) {
    obj.character = undefined;
    let tmp7;
    if (null != checkpointData.stats) {
      tmp7 = transformCheckpoint2026StatsToRowGeneratedComponent(checkpointData.stats);
    }
    obj.stats = tmp7;
    let tmp10;
    if (obj4.getIsCheckpointEnabled("getCheckpointClickable")) {
      const obj3 = { ariaDescription: null };
      const intl = character(tmp2[8]).intl;
      obj3.ariaDescription = intl.string(tmp(tmp2[11]).r8GEbK);
      tmp10 = obj3;
    }
    obj.clickable = tmp10;
    return obj;
  } else {
    character = checkpointData.character;
    importDefault = tmp3;
    let obj2 = character;
    const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = character(tmp2[5]).CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
    const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(character.wearable);
    character(tmp2[5]);
    const obj5 = { layerUrls: null, accessibilityLabel: null };
    const items = [];
    const item = hasItem ? obj5.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : obj5.CHECKPOINT_LAYER_DEFAULT_ORDERING.forEach((item) => {
      let layer;
      if (obj[item][character[item]] != null) {
        layer = tmp.layer;
      }
      let tmp3 = null != layer;
      if (tmp3) {
        tmp3 = "" !== layer;
      }
      if (tmp3) {
        const _HermesInternal = HermesInternal;
        items.push("" + layer + "?height=" + closure_1 + "&width=" + closure_1);
      }
    });
    obj5.layerUrls = items;
    obj2 = obj2(tmp2[6]);
    obj5.accessibilityLabel = obj2.getCheckpointCharacterAccessibilityLabel(character);
    const arr = hasItem ? obj5.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : obj5.CHECKPOINT_LAYER_DEFAULT_ORDERING;
  }
  tmp = importDefault;
};
export const getCheckpointDataFromMessage = function getCheckpointDataFromMessage(contentMessage) {
  const first = contentMessage.components[0];
  let checkpointData = null;
  if (null != first) {
    checkpointData = null;
    if (first.type === Server.ComponentType.CHECKPOINT_CARD) {
      checkpointData = first.checkpointData;
    }
  }
  return checkpointData;
};
export const getCheckpointLabel = function getCheckpointLabel(checkpointDataFromMessage) {
  if (V2025.V2025 === checkpointDataFromMessage.version) {
    const intl = util.intl;
    return intl.string(_modDef3046.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};