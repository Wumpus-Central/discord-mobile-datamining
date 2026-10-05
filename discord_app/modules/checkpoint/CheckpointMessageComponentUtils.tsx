// === Module 5136: checkpoint/CheckpointMessageComponentUtils ===

// Module 5136 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl8 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import _modDef3011 from "module_3011" /* 3011 */;
import CheckpointExperiment from "CheckpointExperiment" /* 5137 */;
import CheckpointTrait from "CheckpointTrait" /* 5138 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 5139 */;
import CheckpointConstants from "CheckpointConstants" /* 5115 */;
import size from "module_2" /* 2 */;

let importDefault;

let c3;
let closure_4;
({ NATIVE_CHARACTER_LAYER_SIZE: c3, CheckpointVersions: closure_4 } = CheckpointConstants);
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
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp2 = null;
  obj = CheckpointExperiment;
  if (obj.getIsCheckpointEnabled("transformCheckpoint2026CardComponent")) {
    let tmp4;
    if (null != checkpoint_data.character) {
      const obj2 = { version: checkpoint_data.version, character: tmp5, stats: tmp6 };
      tmp5 = undefined;
      if (null != checkpoint_data.character) {
        const obj6 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
        ({ base: obj3.base, shoes: obj3.shoes, outfit: obj3.outfit, face: obj3.face, hat: obj3.hat, wearable: obj3.wearable, aura: obj3.aura } = checkpoint_data.character);
        tmp5 = obj6;
      }
      tmp6 = undefined;
      if (null != checkpoint_data.stats) {
        const stats = checkpoint_data.stats;
        const obj7 = { totalVoiceMinutes: null, numMessagesSent: null, numEmojisSent: null, totalDaysPlayed: null, topEmoji: tmp7, topGuild: tmp10, topGuildNumDaysInteracted: stats.top_guild_num_days_interacted, topGame: tmp11, powerLevel: null, powerLevelPercentile: null };
        ({ total_voice_minutes: obj4.totalVoiceMinutes, num_messages_sent: obj4.numMessagesSent, num_emojis_sent: obj4.numEmojisSent, total_days_played: obj4.totalDaysPlayed } = stats);
        tmp7 = undefined;
        if (null != stats.top_emoji) {
          let emoji_id;
          const obj5 = SnowflakeUtilsDefault;
          if (obj5.isProbablyAValidSnowflake(stats.top_emoji.emoji_id)) {
            emoji_id = stats.top_emoji.emoji_id;
          }
          tmp7 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
          const obj8 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
        }
        tmp10 = undefined;
        if (null != stats.top_guild) {
          tmp10 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
          const obj14 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
        }
        tmp11 = undefined;
        if (null != stats.top_game) {
          tmp11 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
          const obj15 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
        }
        ({ power_level: obj4.powerLevel, power_level_percentile: obj4.powerLevelPercentile } = stats);
        tmp6 = obj7;
      }
      tmp4 = obj2;
    } else {
      tmp4 = null;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData, message) {
  let character;
  let closure_1;
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let items;
  let obj5;
  let result;
  let tmp18;
  let tmp3;
  let tmp4;
  let tmp9;
  let toLocaleStringResult;
  let toLocaleStringResult1;
  let voiceDurationString;
  const tmp = importDefault;
  obj = { version: checkpointData.version, authorId: message.author.id, character: tmp4, stats: tmp9 };
  tmp4 = undefined;
  if (null != checkpointData.character) {
    character = checkpointData.character;
    importDefault = tmp3;
    items = undefined;
    const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = character(tmp2[5]).CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
    const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(character.wearable);
    const tmp7 = character(tmp2[5]);
    const obj2 = { layerUrls: items };
    items = [];
    const arr = hasItem ? tmp7.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : tmp7.CHECKPOINT_LAYER_DEFAULT_ORDERING;
    const item = arr.forEach((item) => {
      let layer;
      if (obj[item][character[item]] != null) {
        layer = tmp.layer;
      }
      const tmp3 = null != layer && "" !== layer;
      if (tmp3) {
        const _HermesInternal = HermesInternal;
        items.push("" + layer + "?height=" + importDefault + "&width=" + importDefault);
      }
    });
    tmp4 = obj2;
  }
  tmp9 = undefined;
  if (null != checkpointData.stats) {
    const stats = checkpointData.stats;
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const numberFormat = new Intl.NumberFormat(character(tmp2[6]).intl.currentLocale, { notation: "compact", compactDisplay: "short" });
    const _Math = Math;
    const rounded = Math.round(stats.totalVoiceMinutes);
    const obj3 = { powerLevel: numberFormat.format(stats.powerLevel), powerLevelUnits: obj5.getCheckpointPowerBarUnits(stats.powerLevelPercentile), messagesString: toLocaleStringResult, voiceString: voiceDurationString, reactionString: toLocaleStringResult1, daysPlayedString: formatToPlainStringResult, topGuildDaysInteractedString: formatToPlainStringResult1, topEmoji: tmp18, topGuild: null, topGame: null };
    obj5 = character(items[7]);
    if (stats.numMessagesSent > 0) {
      const numMessagesSent = stats.numMessagesSent;
      toLocaleStringResult = numMessagesSent.toLocaleString(tmp10(tmp2[6]).intl.currentLocale);
    } else {
      const intl = tmp10(tmp2[6]).intl;
      const obj6 = { count: stats.numMessagesSent };
      toLocaleStringResult = intl.formatToPlainString(tmp(tmp2[8]).foKBCN, obj6);
    }
    if (rounded > 0) {
      const tmp10Result = character(items[7]);
      voiceDurationString = tmp10Result.getVoiceDurationString(rounded);
    } else {
      const intl2 = tmp10(tmp2[6]).intl;
      const obj7 = { minutes: rounded };
      voiceDurationString = intl2.formatToPlainString(tmp10(tmp2[6]).t.iXLF9W, obj7);
    }
    if (stats.numEmojisSent > 0) {
      const numEmojisSent = stats.numEmojisSent;
      toLocaleStringResult1 = numEmojisSent.toLocaleString(tmp10(tmp2[6]).intl.currentLocale);
    } else {
      const intl3 = tmp10(tmp2[6]).intl;
      const obj8 = { count: stats.numEmojisSent };
      toLocaleStringResult1 = intl3.formatToPlainString(tmp(tmp2[8]).RHYx1k, obj8);
    }
    if (stats.totalDaysPlayed > 0) {
      const intl5 = tmp10(tmp2[6]).intl;
      const obj9 = { days: stats.totalDaysPlayed };
      formatToPlainStringResult = intl5.formatToPlainString(tmp10(tmp2[6]).t.GBLpQ8, obj9);
    } else {
      const intl4 = tmp10(tmp2[6]).intl;
      formatToPlainStringResult = intl4.string(tmp(tmp2[8]).mg1NPe);
    }
    if (null != stats.topGuild) {
      const intl7 = tmp10(tmp2[6]).intl;
      const obj10 = { days: stats.topGuildNumDaysInteracted };
      formatToPlainStringResult1 = intl7.formatToPlainString(tmp10(tmp2[6]).t.GBLpQ8, obj10);
    } else {
      const intl6 = tmp10(tmp2[6]).intl;
      formatToPlainStringResult1 = intl6.string(tmp(tmp2[8]).GultYJ);
    }
    tmp18 = undefined;
    if (null != stats.topEmoji) {
      const obj11 = { emojiSurrogateName: result };
      const merged = Object.assign(stats.topEmoji);
      result = undefined;
      if (null == stats.topEmoji.emojiId) {
        const tmpResult = tmp(items[9]);
        result = tmpResult.convertSurrogateToName(stats.topEmoji.emojiName);
      }
      tmp18 = obj11;
    }
    ({ topGuild: obj4.topGuild, topGame: obj4.topGame } = stats);
    tmp9 = obj3;
  }
  return obj;
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
    const intl = intl8.intl;
    return intl.string(_modDef3011.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};