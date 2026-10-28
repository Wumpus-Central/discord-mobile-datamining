// === Module 6071: checkpoint/CheckpointMessageComponentUtils ===

// Module 6071 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1125 */;
import Server from "Server" /* 1997 */;
import StringUtils from "StringUtils" /* 2030 */;
import _modDef3057 from "module_3057" /* 3057 */;
import _modDef3089 from "module_3089" /* 3089 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4950 */;
import CheckpointUtils from "CheckpointUtils" /* 6059 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6073 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6074 */;
import CheckpointConstants from "CheckpointConstants" /* 6050 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function transformCheckpoint2026StatsToRowGeneratedComponent(stats) {
  const obj = { powerLevel: null, powerLevelUnits: null, voice: null, messages: null, topGuildDaysInteracted: null, topGuildName: null, reactions: null, topEmojiName: null, daysPlayed: null, topGameName: null, topEmoji: null, topGuild: null, topGuildAcronymCharacter: null, topGame: null };
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
  obj3.accessibilityLabel = intl2.formatToPlainString(_modDef3089.lw35aH, obj4);
  obj.voice = obj3;
  if (stats.numMessagesSent > 0) {
    const numMessagesSent = stats.numMessagesSent;
    let toLocaleStringResult = numMessagesSent.toLocaleString(util.intl.currentLocale);
  } else {
    const intl3 = util.intl;
    const obj5 = { count: stats.numMessagesSent };
    toLocaleStringResult = intl3.formatToPlainString(_modDef3089.foKBCN, obj5);
  }
  const obj6 = { text: toLocaleStringResult, accessibilityLabel: null };
  const intl4 = util.intl;
  obj6.accessibilityLabel = intl4.formatToPlainString(_modDef3089.IdRUAC, { count: stats.numMessagesSent });
  obj.messages = obj6;
  if (null == stats.topGuild) {
    const intl5 = util.intl;
    const stringResult = intl5.string(_modDef3089.GultYJ);
    const obj8 = { text: stringResult, accessibilityLabel: stringResult };
    let obj9 = obj8;
  } else {
    obj9 = { text: null, accessibilityLabel: null };
    const intl14 = util.intl;
    const obj10 = { days: stats.topGuildNumDaysInteracted };
    obj9.text = intl14.formatToPlainString(util.t.GBLpQ8, obj10);
    const intl15 = util.intl;
    const obj11 = { days: stats.topGuildNumDaysInteracted };
    obj9.accessibilityLabel = intl15.formatToPlainString(_modDef3089.MpSH8v, obj11);
  }
  obj.topGuildDaysInteracted = obj9;
  let tmp8;
  if (null != stats.topGuild) {
    const obj12 = { text: stats.topGuild.guildName, accessibilityLabel: null };
    const intl6 = util.intl;
    const obj13 = { guildName: stats.topGuild.guildName };
    obj12.accessibilityLabel = intl6.formatToPlainString(_modDef3089["9UTJ+t"], obj13);
    tmp8 = obj12;
  }
  obj.topGuildName = tmp8;
  if (stats.numEmojisSent > 0) {
    const numEmojisSent = stats.numEmojisSent;
    let toLocaleStringResult1 = numEmojisSent.toLocaleString(util.intl.currentLocale);
  } else {
    const intl7 = util.intl;
    const obj14 = { count: stats.numEmojisSent };
    toLocaleStringResult1 = intl7.formatToPlainString(_modDef3089.RHYx1k, obj14);
  }
  const obj15 = { text: toLocaleStringResult1, accessibilityLabel: null };
  const intl8 = util.intl;
  obj15.accessibilityLabel = intl8.formatToPlainString(_modDef3089["36qpUG"], { count: stats.numEmojisSent });
  obj.reactions = obj15;
  if (stats.numEmojisSent > 0) {
    if (null != stats.topEmoji) {
      if (null == stats.topEmoji.emojiId) {
        let result = UnicodeEmojisDefault.convertSurrogateToName(stats.topEmoji.emojiName);
        const tmp5Result = UnicodeEmojisDefault;
      } else {
        const _HermesInternal = HermesInternal;
        result = ":" + stats.topEmoji.emojiName + ":";
      }
      const obj17 = { text: result, accessibilityLabel: null };
      const intl9 = util.intl;
      const obj18 = { emojiName: stats.topEmoji.emojiName };
      obj17.accessibilityLabel = intl9.formatToPlainString(_modDef3089.CcBo8C, obj18);
    }
  }
  obj.topEmojiName = undefined;
  if (stats.totalDaysPlayed > 0) {
    const intl11 = util.intl;
    const obj19 = { days: stats.totalDaysPlayed };
    let formatToPlainStringResult = intl11.formatToPlainString(util.t.GBLpQ8, obj19);
  } else {
    const intl10 = util.intl;
    formatToPlainStringResult = intl10.string(_modDef3089.mg1NPe);
  }
  const obj20 = { text: formatToPlainStringResult, accessibilityLabel: null };
  const intl12 = util.intl;
  obj20.accessibilityLabel = intl12.formatToPlainString(_modDef3089.LYcKX7, { days: stats.totalDaysPlayed });
  obj.daysPlayed = obj20;
  let tmp14;
  if (stats.totalDaysPlayed > 0) {
    if (null != stats.topGame) {
      const obj22 = { text: stats.topGame.applicationName, accessibilityLabel: null };
      const intl13 = util.intl;
      const obj23 = { gameName: stats.topGame.applicationName };
      obj22.accessibilityLabel = intl13.formatToPlainString(_modDef3089.kLqpNC, obj23);
      tmp14 = obj22;
    }
  }
  obj.topGameName = tmp14;
  ({ topEmoji: obj.topEmoji, topGuild: obj.topGuild } = stats);
  let tmp15;
  if (null != stats.topGuild) {
    const _Array = Array;
    const tmpResult4 = StringUtils;
    const atResult = Array.from(StringUtils.getAcronym(stats.topGuild.guildName)).at(0);
    let toLocaleUpperCaseResult;
    if (atResult != null) {
      toLocaleUpperCaseResult = atResult.toLocaleUpperCase(util.intl.currentLocale);
    }
    tmp15 = toLocaleUpperCaseResult;
    const arr = Array.from(StringUtils.getAcronym(stats.topGuild.guildName));
  }
  obj.topGuildAcronymCharacter = tmp15;
  obj.topGame = stats.topGame;
  return obj;
}
({ CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3, CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4, CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty, NATIVE_CHARACTER_LAYER_SIZE: metroRequire, CheckpointVersions: closure_7 } = CheckpointConstants);
let items = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY];
const set = new Set(items);
const items1 = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY];
const set1 = new Set(items1);
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
export const toCheckpointMessageComponentData = function toCheckpointMessageComponentData(arg0, arg1, guilds) {
  const obj = { version: React5.V2026, character: null, stats: null };
  let tmp;
  if (set.has(arg0)) {
    tmp = arg1;
  }
  obj.character = tmp;
  let tmp4;
  if (set1.has(arg0)) {
    if (null != guilds) {
      guilds = guilds.guilds;
      let first;
      if (guilds != null) {
        first = guilds.guilds[0];
      }
      const emojis = guilds.emojis;
      let first1;
      if (emojis != null) {
        first1 = emojis.emojis[0];
      }
      const games = guilds.games;
      let game;
      if (games != null) {
        const first2 = games.games[0];
        if (first2 != null) {
          game = first2.game;
        }
      }
      const voice = guilds.voice;
      let num;
      if (voice != null) {
        num = voice.totalVoiceMinutes;
      }
      if (num == null) {
        num = 0;
      }
      const obj2 = { totalVoiceMinutes: num, numMessagesSent: null, numEmojisSent: null, totalDaysPlayed: null, topEmoji: null, topGuild: null, topGuildNumDaysInteracted: null, topGame: null, powerLevel: null, powerLevelPercentile: null };
      const messages = guilds.messages;
      let num2;
      if (messages != null) {
        num2 = messages.numMessagesSent;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj2.numMessagesSent = num2;
      const emojis2 = guilds.emojis;
      let num3;
      if (emojis2 != null) {
        num3 = emojis2.numEmojisSent;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj2.numEmojisSent = num3;
      const games2 = guilds.games;
      let num4;
      if (games2 != null) {
        num4 = games2.totalDaysPlayed;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj2.totalDaysPlayed = num4;
      let tmp11;
      if (null != first1) {
        ({ id: obj3.emojiId, name: obj3.emojiName } = first1);
        tmp11 = { emojiId: null, emojiName: null };
        const obj4 = { emojiId: null, emojiName: null };
      }
      obj2.topEmoji = tmp11;
      let tmp12;
      if (null != first) {
        const obj9 = { guildId: first.guild.id, guildName: first.guild.name, guildIcon: null };
        const icon = first.guild.icon;
        obj9.guildIcon = icon;
        tmp12 = obj9;
      }
      obj2.topGuild = tmp12;
      let num5;
      if (first != null) {
        num5 = first.numDaysInteracted;
      }
      if (num5 == null) {
        num5 = 0;
      }
      obj2.topGuildNumDaysInteracted = num5;
      let tmp13;
      if (null != game) {
        ({ id: obj5.applicationId, name: obj5.applicationName, iconHash: obj5.applicationImageId } = game);
        tmp13 = { applicationId: null, applicationName: null, applicationImageId: null };
        const obj10 = { applicationId: null, applicationName: null, applicationImageId: null };
      }
      obj2.topGame = tmp13;
      const power = guilds.power;
      let num6;
      if (power != null) {
        num6 = power.powerLevel;
      }
      if (num6 == null) {
        num6 = 0;
      }
      obj2.powerLevel = num6;
      const power2 = guilds.power;
      let num7;
      if (power2 != null) {
        num7 = power2.powerLevelPercentile;
      }
      if (num7 == null) {
        num7 = 0;
      }
      obj2.powerLevelPercentile = num7;
      tmp4 = obj2;
    }
  }
  obj.stats = tmp4;
  return obj;
};
export const getCharacterLayerUrls = function getCharacterLayerUrls(character, arg1) {
  _require = character;
  closure_1 = arg1;
  const items = [];
  const characterLayerOrdering = require("CheckpointCharacterTraits").getCharacterLayerOrdering(character.wearable);
  const item = characterLayerOrdering.forEach((item) => {
    const tmp = CheckpointCharacterTraits.CHECKPOINT_TRAIT_TO_OPTION_ASSETS[item][character[item]];
    let layer;
    if (tmp != null) {
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
export const formatCheckpoint2026PowerLevel = function formatCheckpoint2026PowerLevel(arg0) {
  const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  return numberFormat.format(arg0);
};
export const getCheckpoint2026PowerBarUnits = function getCheckpoint2026PowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 100 * hasOwnProperty), React4), React3);
};
export { transformCheckpoint2026StatsToRowGeneratedComponent };
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
  const obj = { version: checkpointData.version, authorId: message.author.id, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor, character: null, stats: null, clickable: null };
  let tmp4;
  if (null != checkpointData.character) {
    const character = checkpointData.character;
    const obj2 = { layerUrls: null, accessibilityLabel: null };
    importDefault = tmp3;
    const items = [];
    const characterLayerOrdering = character(tmp2[4]).getCharacterLayerOrdering(character.wearable);
    const item = characterLayerOrdering.forEach((item) => {
      const tmp = CheckpointCharacterTraits.CHECKPOINT_TRAIT_TO_OPTION_ASSETS[item][character[item]];
      let layer;
      if (tmp != null) {
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
    obj2.layerUrls = items;
    const obj3 = character(tmp2[4]);
    obj2.accessibilityLabel = character(tmp2[5]).getCheckpointCharacterAccessibilityLabel(character);
    tmp4 = obj2;
    const obj4 = character(tmp2[5]);
  }
  obj.character = tmp4;
  let tmp7;
  if (null != checkpointData.stats) {
    tmp7 = transformCheckpoint2026StatsToRowGeneratedComponent(checkpointData.stats);
  }
  obj.stats = tmp7;
  let tmp10;
  if (obj5.getIsCheckpointEnabled("getCheckpointClickable")) {
    const obj6 = { ariaDescription: null };
    const intl = character(tmp2[6]).intl;
    obj6.ariaDescription = intl.string(require("module_3057").r8GEbK);
    tmp10 = obj6;
  }
  obj.clickable = tmp10;
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
  if (React5.V2025 === checkpointDataFromMessage.version) {
    const intl = util.intl;
    return intl.string(_modDef3057.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};