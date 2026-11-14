// === Module 6398: checkpoint/CheckpointMessageComponentUtils ===

// Module 6398 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1113 */;
import Server from "Server" /* 2119 */;
import _modDef3285 from "module_3285" /* 3285 */;
import _modDef3317 from "module_3317" /* 3317 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5252 */;
import TimeUtils from "TimeUtils" /* 6079 */;
import CheckpointUtils from "CheckpointUtils" /* 6386 */;
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6399 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6400 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6401 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6421 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function transformCheckpoint2026StatsToRowGeneratedComponent(stats) {
  const obj = { powerLevel: null, powerLevelUnits: null, voice: null, messages: null, topGuildDaysInteracted: null, topGuildName: null, reactions: null, topEmojiName: null, daysPlayed: null, topGameName: null, topEmoji: null, topGuild: null, topGuildAcronymCharacter: null, topGame: null };
  const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  obj.powerLevel = numberFormat.format(stats.powerLevel);
  obj.powerLevelUnits = Math.min(Math.max(Math.round(stats.powerLevelPercentile / 100 * hasOwnProperty), React4), React3);
  const rounded = Math.round(stats.totalVoiceMinutes);
  if (rounded > 0) {
    const timeAndUnit = TimeUtils.getTimeAndUnit(rounded, items);
    let num = timeAndUnit.time;
    if (num == null) {
      num = 0;
    }
    const rounded1 = Math.round(num);
    if (timeAndUnit.unit === TimeUtils.TimeUnits.HOURS) {
      const intl3 = util.intl;
      const obj2 = { hours: rounded1 };
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef3317.CQfBsB, obj2);
    } else {
      const intl2 = util.intl;
      const obj3 = { minutes: rounded1 };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3317.yRfTht, obj3);
    }
    const tmpResult = TimeUtils;
  } else {
    const intl = util.intl;
    const obj4 = { minutes: rounded };
    const obj5 = { text: intl.formatToPlainString(_modDef3317.x7PkHm, obj4), accessibilityLabel: null };
    const intl4 = util.intl;
    const obj6 = { duration: CheckpointUtils.getAccessibleVoiceDurationString(rounded) };
    obj5.accessibilityLabel = intl4.formatToPlainString(_modDef3317.lw35aH, obj6);
    obj.voice = obj5;
    if (stats.numMessagesSent > 0) {
      const numMessagesSent = stats.numMessagesSent;
      let toLocaleStringResult = numMessagesSent.toLocaleString(util.intl.currentLocale);
    } else {
      const intl5 = util.intl;
      const obj7 = { count: stats.numMessagesSent };
      toLocaleStringResult = intl5.formatToPlainString(_modDef3317.foKBCN, obj7);
    }
    const obj8 = { text: toLocaleStringResult, accessibilityLabel: null };
    const intl6 = util.intl;
    const obj9 = { count: stats.numMessagesSent };
    obj8.accessibilityLabel = intl6.formatToPlainString(_modDef3317.IdRUAC, obj9);
    obj.messages = obj8;
    if (null == stats.topGuild) {
      const intl7 = util.intl;
      const stringResult = intl7.string(_modDef3317.GultYJ);
      const obj10 = { text: stringResult, accessibilityLabel: stringResult };
      let obj11 = obj10;
    } else {
      obj11 = { text: null, accessibilityLabel: null };
      const intl16 = util.intl;
      const obj12 = { days: stats.topGuildNumDaysInteracted };
      obj11.text = intl16.formatToPlainString(_modDef3317.cQXIkj, obj12);
      const intl17 = util.intl;
      const obj13 = { days: stats.topGuildNumDaysInteracted };
      obj11.accessibilityLabel = intl17.formatToPlainString(_modDef3317.MpSH8v, obj13);
    }
    obj.topGuildDaysInteracted = obj11;
    let tmp18;
    if (null != stats.topGuild) {
      const obj14 = { text: stats.topGuild.guildName, accessibilityLabel: null };
      const intl8 = util.intl;
      const obj15 = { guildName: stats.topGuild.guildName };
      obj14.accessibilityLabel = intl8.formatToPlainString(_modDef3317["9UTJ+t"], obj15);
      tmp18 = obj14;
    }
    obj.topGuildName = tmp18;
    if (stats.numEmojisSent > 0) {
      const numEmojisSent = stats.numEmojisSent;
      let toLocaleStringResult1 = numEmojisSent.toLocaleString(util.intl.currentLocale);
    } else {
      const intl9 = util.intl;
      const obj16 = { count: stats.numEmojisSent };
      toLocaleStringResult1 = intl9.formatToPlainString(_modDef3317.RHYx1k, obj16);
    }
    const obj17 = { text: toLocaleStringResult1, accessibilityLabel: null };
    const intl10 = util.intl;
    const obj18 = { count: stats.numEmojisSent };
    obj17.accessibilityLabel = intl10.formatToPlainString(_modDef3317["36qpUG"], obj18);
    obj.reactions = obj17;
    if (stats.numEmojisSent > 0) {
      if (null != stats.topEmoji) {
        if (null == stats.topEmoji.emojiId) {
          let result = UnicodeEmojisDefault.convertSurrogateToName(stats.topEmoji.emojiName);
          const tmp4Result = UnicodeEmojisDefault;
        } else {
          const _HermesInternal = HermesInternal;
          result = ":" + stats.topEmoji.emojiName + ":";
        }
        const obj19 = { text: result, accessibilityLabel: null };
        const intl11 = util.intl;
        const obj20 = { emojiName: stats.topEmoji.emojiName };
        obj19.accessibilityLabel = intl11.formatToPlainString(_modDef3317.CcBo8C, obj20);
      }
    }
    obj.topEmojiName = undefined;
    if (stats.totalDaysPlayed > 0) {
      const intl13 = util.intl;
      const obj21 = { days: stats.totalDaysPlayed };
      let formatToPlainStringResult1 = intl13.formatToPlainString(_modDef3317.cQXIkj, obj21);
    } else {
      const intl12 = util.intl;
      formatToPlainStringResult1 = intl12.string(_modDef3317.mg1NPe);
    }
    const obj22 = { text: formatToPlainStringResult1, accessibilityLabel: null };
    const intl14 = util.intl;
    const obj23 = { days: stats.totalDaysPlayed };
    obj22.accessibilityLabel = intl14.formatToPlainString(_modDef3317.LYcKX7, obj23);
    obj.daysPlayed = obj22;
    let tmp24;
    if (stats.totalDaysPlayed > 0) {
      if (null != stats.topGame) {
        const obj24 = { text: stats.topGame.applicationName, accessibilityLabel: null };
        const intl15 = util.intl;
        const obj25 = { gameName: stats.topGame.applicationName };
        obj24.accessibilityLabel = intl15.formatToPlainString(_modDef3317.kLqpNC, obj25);
        tmp24 = obj24;
      }
    }
    obj.topGameName = tmp24;
    ({ topEmoji: obj.topEmoji, topGuild: obj.topGuild } = stats);
    let guildAcronymCharacter;
    if (null != stats.topGuild) {
      guildAcronymCharacter = CheckpointStatsUtils.getGuildAcronymCharacter(stats.topGuild.guildName);
      const tmpResult4 = CheckpointStatsUtils;
    }
    obj.topGuildAcronymCharacter = guildAcronymCharacter;
    obj.topGame = stats.topGame;
    return obj;
  }
}
({ CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3, CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4, CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty, NATIVE_CHARACTER_LAYER_SIZE: closure_6, CheckpointVersions: metroImportDefault } = CheckpointConstants);
let items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const items1 = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY];
const set = new Set(items1);
const items2 = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY];
const set1 = new Set(items2);
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export function transformCheckpoint2026CardComponent(checkpoint_data) {
  if (null != checkpoint_data.character) {
    const obj = { version: checkpoint_data.version, character: null, stats: null, cardColorPalette: null };
    let tmp2;
    if (null != checkpoint_data.character) {
      ({ base: obj2.base, shoes: obj2.shoes, outfit: obj2.outfit, face: obj2.face, hat: obj2.hat, wearable: obj2.wearable, aura: obj2.aura } = checkpoint_data.character);
      tmp2 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
      const obj5 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
    }
    obj.character = tmp2;
    let tmp3;
    if (null != checkpoint_data.stats) {
      const stats = checkpoint_data.stats;
      const obj6 = { totalVoiceMinutes: null, numMessagesSent: null, numEmojisSent: null, totalDaysPlayed: null, topEmoji: null, topGuild: null, topGuildNumDaysInteracted: null, topGame: null, powerLevel: null, powerLevelPercentile: null };
      ({ total_voice_minutes: obj3.totalVoiceMinutes, num_messages_sent: obj3.numMessagesSent, num_emojis_sent: obj3.numEmojisSent, total_days_played: obj3.totalDaysPlayed } = stats);
      let tmp4;
      if (null != stats.top_emoji) {
        let emoji_id;
        if (obj4.isProbablyAValidSnowflake(stats.top_emoji.emoji_id)) {
          emoji_id = stats.top_emoji.emoji_id;
        }
        const obj7 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
        tmp4 = obj7;
        obj4 = SnowflakeUtilsDefault;
      }
      obj6.topEmoji = tmp4;
      let tmp8;
      if (null != stats.top_guild) {
        const obj12 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
        tmp8 = obj12;
      }
      obj6.topGuild = tmp8;
      obj6.topGuildNumDaysInteracted = stats.top_guild_num_days_interacted;
      let tmp9;
      if (null != stats.top_game) {
        const obj13 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
        tmp9 = obj13;
      }
      obj6.topGame = tmp9;
      ({ power_level: obj3.powerLevel, power_level_percentile: obj3.powerLevelPercentile } = stats);
      tmp3 = obj6;
    }
    obj.stats = tmp3;
    let NONE = checkpoint_data.card_color_palette;
    if (NONE == null) {
      NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
    }
    obj.cardColorPalette = NONE;
    let tmp = obj;
  } else {
    tmp = null;
  }
  return tmp;
}
export function toCheckpointMessageComponentData(STATS_ONLY, stateFromStores2, stateFromStores) {
  const obj = { version: metroImportDefault.V2026, character: null, stats: null, cardColorPalette: null };
  let tmp;
  if (set.has(STATS_ONLY)) {
    tmp = stateFromStores2;
  }
  obj.character = tmp;
  let tmp4;
  if (set1.has(STATS_ONLY)) {
    if (null != stateFromStores) {
      const guilds = stateFromStores.guilds;
      let first;
      if (guilds != null) {
        first = guilds.guilds[0];
      }
      const emojis = stateFromStores.emojis;
      let first1;
      if (emojis != null) {
        first1 = emojis.emojis[0];
      }
      const games = stateFromStores.games;
      let game;
      if (games != null) {
        const first2 = games.games[0];
        if (first2 != null) {
          game = first2.game;
        }
      }
      const voice = stateFromStores.voice;
      let num;
      if (voice != null) {
        num = voice.totalVoiceMinutes;
      }
      if (num == null) {
        num = 0;
      }
      const obj2 = { totalVoiceMinutes: num, numMessagesSent: null, numEmojisSent: null, totalDaysPlayed: null, topEmoji: null, topGuild: null, topGuildNumDaysInteracted: null, topGame: null, powerLevel: null, powerLevelPercentile: null };
      const messages = stateFromStores.messages;
      let num2;
      if (messages != null) {
        num2 = messages.numMessagesSent;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj2.numMessagesSent = num2;
      const emojis2 = stateFromStores.emojis;
      let num3;
      if (emojis2 != null) {
        num3 = emojis2.numEmojisSent;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj2.numEmojisSent = num3;
      const games2 = stateFromStores.games;
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
        const obj10 = { guildId: first.guild.id, guildName: first.guild.name, guildIcon: null };
        const icon = first.guild.icon;
        obj10.guildIcon = icon;
        tmp12 = obj10;
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
        const obj11 = { applicationId: null, applicationName: null, applicationImageId: null };
      }
      obj2.topGame = tmp13;
      const power = stateFromStores.power;
      let num6;
      if (power != null) {
        num6 = power.powerLevel;
      }
      if (num6 == null) {
        num6 = 0;
      }
      obj2.powerLevel = num6;
      const power2 = stateFromStores.power;
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
  obj.cardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(stateFromStores2);
  return obj;
}
export function getCharacterLayerUrls(wearable, arg1) {
  _require = wearable;
  closure_1 = arg1;
  items = [];
  const characterLayerOrdering = require("CheckpointCharacterTraits").getCharacterLayerOrdering(wearable.wearable);
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
      items.push("" + layer + "?height=" + closure_1 + "&width=" + closure_1 + "&format=webp");
    }
  });
  return items;
}
export function formatCheckpoint2026PowerLevel(arg0) {
  const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  return numberFormat.format(arg0);
}
export function getCheckpoint2026PowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 100 * hasOwnProperty), React4), React3);
}
export { transformCheckpoint2026StatsToRowGeneratedComponent };
export function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
  const obj = { version: checkpointData.version, authorId: message.author.id, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor, character: null, stats: null, clickable: null };
  let tmp4;
  if (null != checkpointData.character) {
    const character = checkpointData.character;
    const obj2 = { layerUrls: null, accessibilityLabel: null };
    importDefault = tmp3;
    items = [];
    const characterLayerOrdering = character(tmp2[6]).getCharacterLayerOrdering(character.wearable);
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
        items.push("" + layer + "?height=" + closure_1 + "&width=" + closure_1 + "&format=webp");
      }
    });
    obj2.layerUrls = items;
    const obj3 = character(tmp2[6]);
    obj2.accessibilityLabel = character(tmp2[7]).getCheckpointCharacterAccessibilityLabel(character);
    tmp4 = obj2;
    const obj4 = character(tmp2[7]);
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
    const intl = character(tmp2[8]).intl;
    obj6.ariaDescription = intl.string(require("module_3285").r8GEbK);
    tmp10 = obj6;
  }
  obj.clickable = tmp10;
  return obj;
}
export function getCheckpointDataFromMessage(contentMessage) {
  const first = contentMessage.components[0];
  let checkpointData = null;
  if (null != first) {
    checkpointData = null;
    if (first.type === Server.ComponentType.CHECKPOINT_CARD) {
      checkpointData = first.checkpointData;
    }
  }
  return checkpointData;
}
export function getCheckpointLabel(checkpointDataFromMessage) {
  if (metroImportDefault.V2025 === checkpointDataFromMessage.version) {
    const intl = util.intl;
    return intl.string(_modDef3285.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
}