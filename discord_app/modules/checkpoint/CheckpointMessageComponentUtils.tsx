// === Module 5522: checkpoint/CheckpointMessageComponentUtils ===

// Module 5522 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1128 */;
import Server from "Server" /* 2000 */;
import _modDef3091 from "module_3091" /* 3091 */;
import CheckpointTrait from "CheckpointTrait" /* 5524 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 5525 */;
import CheckpointConstants from "CheckpointConstants" /* 5500 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
  obj = { version: checkpointData.version, authorId: message.author.id, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor, character: null, stats: null, clickable: null };
  if (null == checkpointData.character) {
    obj.character = undefined;
    let tmp8;
    if (null != checkpointData.stats) {
      const stats = checkpointData.stats;
      const _Intl = Intl;
      const numberFormat = new Intl.NumberFormat(character(tmp2[6]).intl.currentLocale, { notation: "compact", compactDisplay: "short" });
      const _Math = Math;
      const rounded = Math.round(stats.totalVoiceMinutes);
      const obj2 = { powerLevel: numberFormat.format(stats.powerLevel), powerLevelUnits: null, messagesString: null, voiceString: null, reactionString: null, daysPlayedString: null, topGuildDaysInteractedString: null, topEmoji: null, topGuild: null, topGame: null };
      const _Math2 = Math;
      const _Math3 = Math;
      const _Math4 = Math;
      obj2.powerLevelUnits = Math.min(Math.max(Math.round(stats.powerLevelPercentile / 100 * closure_5), closure_4), closure_3);
      if (stats.numMessagesSent > 0) {
        const numMessagesSent = stats.numMessagesSent;
        let toLocaleStringResult = numMessagesSent.toLocaleString(tmp9(tmp2[6]).intl.currentLocale);
      } else {
        const intl = tmp9(tmp2[6]).intl;
        const obj3 = { count: stats.numMessagesSent };
        toLocaleStringResult = intl.formatToPlainString(tmp(tmp2[7]).foKBCN, obj3);
      }
      obj2.messagesString = toLocaleStringResult;
      if (rounded > 0) {
        let voiceDurationString = tmp9(tmp2[8]).getVoiceDurationString(rounded);
        const tmp9Result = tmp9(tmp2[8]);
      } else {
        const intl2 = tmp9(tmp2[6]).intl;
        const obj5 = { minutes: rounded };
        voiceDurationString = intl2.formatToPlainString(tmp9(tmp2[6]).t.iXLF9W, obj5);
      }
      obj2.voiceString = voiceDurationString;
      if (stats.numEmojisSent > 0) {
        const numEmojisSent = stats.numEmojisSent;
        let toLocaleStringResult1 = numEmojisSent.toLocaleString(tmp9(tmp2[6]).intl.currentLocale);
      } else {
        const intl3 = tmp9(tmp2[6]).intl;
        const obj6 = { count: stats.numEmojisSent };
        toLocaleStringResult1 = intl3.formatToPlainString(tmp(tmp2[7]).RHYx1k, obj6);
      }
      obj2.reactionString = toLocaleStringResult1;
      if (stats.totalDaysPlayed > 0) {
        const intl5 = tmp9(tmp2[6]).intl;
        const obj7 = { days: stats.totalDaysPlayed };
        let formatToPlainStringResult = intl5.formatToPlainString(tmp9(tmp2[6]).t.GBLpQ8, obj7);
      } else {
        const intl4 = tmp9(tmp2[6]).intl;
        formatToPlainStringResult = intl4.string(tmp(tmp2[7]).mg1NPe);
      }
      obj2.daysPlayedString = formatToPlainStringResult;
      if (null != stats.topGuild) {
        const intl7 = tmp9(tmp2[6]).intl;
        const obj8 = { days: stats.topGuildNumDaysInteracted };
        let formatToPlainStringResult1 = intl7.formatToPlainString(tmp9(tmp2[6]).t.GBLpQ8, obj8);
      } else {
        const intl6 = tmp9(tmp2[6]).intl;
        formatToPlainStringResult1 = intl6.string(tmp(tmp2[7]).GultYJ);
      }
      obj2.topGuildDaysInteractedString = formatToPlainStringResult1;
      let tmp22;
      if (null != stats.topEmoji) {
        const obj9 = {};
        const merged = Object.assign(stats.topEmoji);
        let result;
        if (null == stats.topEmoji.emojiId) {
          result = tmp(tmp2[9]).convertSurrogateToName(stats.topEmoji.emojiName);
          const tmpResult = tmp(tmp2[9]);
        }
        obj9.emojiSurrogateName = result;
        tmp22 = obj9;
      }
      obj2.topEmoji = tmp22;
      ({ topGuild: obj4.topGuild, topGame: obj4.topGame } = stats);
      tmp8 = obj2;
    }
    obj.stats = tmp8;
    let tmp27;
    if (obj13.getIsCheckpointEnabled("getCheckpointClickable")) {
      const obj10 = { ariaDescription: null };
      const intl8 = character(tmp2[6]).intl;
      obj10.ariaDescription = intl8.string(tmp(tmp2[10]).r8GEbK);
      tmp27 = obj10;
    }
    obj.clickable = tmp27;
    return obj;
  } else {
    character = checkpointData.character;
    importDefault = tmp3;
    const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = character(tmp2[5]).CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
    const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(character.wearable);
    character(tmp2[5]);
    const obj11 = { layerUrls: null };
    const items = [];
    const item = hasItem ? obj11.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : obj11.CHECKPOINT_LAYER_DEFAULT_ORDERING.forEach((item) => {
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
    obj11.layerUrls = items;
    const arr = hasItem ? obj11.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : obj11.CHECKPOINT_LAYER_DEFAULT_ORDERING;
  }
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
    return intl.string(_modDef3091.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};