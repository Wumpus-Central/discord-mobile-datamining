// discord_app/modules/checkpoint/CheckpointMessageComponentUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import util from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import StringUtils from "../../utils/StringUtils.tsx";
import _modDef3059 from "Checkpoint.messages.js";
import _modDef3091 from "Checkpoint2026.messages.js";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import CheckpointUtils from "2025/CheckpointUtils.tsx";
import CheckpointCardColorPalette from "../../../discord_common/js/shared/shared-constants/CheckpointCardColorPalette.tsx";
import CheckpointCardTypes from "../../../discord_common/js/shared/shared-constants/CheckpointCardTypes.tsx";
import CheckpointCardColors from "CheckpointCardColors.tsx";
import CheckpointCharacterTraits from "CheckpointCharacterTraits.tsx";
import CheckpointConstants from "CheckpointConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function transformCheckpoint2026StatsToRowGeneratedComponent(stats) {
  const obj = {
    powerLevel: null,
    powerLevelUnits: null,
    voice: null,
    messages: null,
    topGuildDaysInteracted: null,
    topGuildName: null,
    reactions: null,
    topEmojiName: null,
    daysPlayed: null,
    topGameName: null,
    topEmoji: null,
    topGuild: null,
    topGuildAcronymCharacter: null,
    topGame: null,
  };
  const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  obj.powerLevel = numberFormat.format(stats.powerLevel);
  obj.powerLevelUnits = Math.min(
    Math.max(Math.round((stats.powerLevelPercentile / 100) * hasOwnProperty), React4),
    React3,
  );
  const rounded = Math.round(stats.totalVoiceMinutes);
  const obj2 = { text: null, accessibilityLabel: null };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(_modDef3091["Ww/dDO"], { count: rounded });
  const intl2 = util.intl;
  const obj3 = { duration: CheckpointUtils.getAccessibleVoiceDurationString(rounded) };
  obj2.accessibilityLabel = intl2.formatToPlainString(_modDef3091.lw35aH, obj3);
  obj.voice = obj2;
  const obj4 = { text: null, accessibilityLabel: null };
  const intl3 = util.intl;
  obj4.text = intl3.formatToPlainString(_modDef3091.foKBCN, { count: stats.numMessagesSent });
  const intl4 = util.intl;
  obj4.accessibilityLabel = intl4.formatToPlainString(_modDef3091.IdRUAC, { count: stats.numMessagesSent });
  obj.messages = obj4;
  if (null == stats.topGuild) {
    const intl5 = util.intl;
    const stringResult = intl5.string(_modDef3091.GultYJ);
    const obj8 = { text: stringResult, accessibilityLabel: stringResult };
    let obj9 = obj8;
  } else {
    obj9 = { text: null, accessibilityLabel: null };
    const intl14 = util.intl;
    const obj10 = { count: stats.topGuildNumDaysInteracted };
    obj9.text = intl14.formatToPlainString(_modDef3091["51Y/V2"], obj10);
    const intl15 = util.intl;
    const obj11 = { days: stats.topGuildNumDaysInteracted };
    obj9.accessibilityLabel = intl15.formatToPlainString(_modDef3091.MpSH8v, obj11);
  }
  obj.topGuildDaysInteracted = obj9;
  let tmp6;
  if (null != stats.topGuild) {
    const obj12 = { text: stats.topGuild.guildName, accessibilityLabel: null };
    const intl6 = util.intl;
    const obj13 = { guildName: stats.topGuild.guildName };
    obj12.accessibilityLabel = intl6.formatToPlainString(_modDef3091["9UTJ+t"], obj13);
    tmp6 = obj12;
  }
  obj.topGuildName = tmp6;
  const obj14 = { text: null, accessibilityLabel: null };
  const intl7 = util.intl;
  obj14.text = intl7.formatToPlainString(_modDef3091.RHYx1k, { count: stats.numEmojisSent });
  const intl8 = util.intl;
  obj14.accessibilityLabel = intl8.formatToPlainString(_modDef3091["36qpUG"], { count: stats.numEmojisSent });
  obj.reactions = obj14;
  if (stats.numEmojisSent > 0) {
    if (null != stats.topEmoji) {
      if (null == stats.topEmoji.emojiId) {
        let result = UnicodeEmojisDefault.convertSurrogateToName(stats.topEmoji.emojiName);
        const tmp4Result = UnicodeEmojisDefault;
      } else {
        const _HermesInternal = HermesInternal;
        result = ":" + stats.topEmoji.emojiName + ":";
      }
      const obj17 = { text: result, accessibilityLabel: null };
      const intl9 = util.intl;
      const obj18 = { emojiName: stats.topEmoji.emojiName };
      obj17.accessibilityLabel = intl9.formatToPlainString(_modDef3091.CcBo8C, obj18);
    }
  }
  obj.topEmojiName = undefined;
  if (stats.totalDaysPlayed > 0) {
    const intl11 = util.intl;
    const obj19 = { count: stats.totalDaysPlayed };
    let formatToPlainStringResult = intl11.formatToPlainString(_modDef3091["LD/96a"], obj19);
  } else {
    const intl10 = util.intl;
    formatToPlainStringResult = intl10.string(_modDef3091.mg1NPe);
  }
  const obj20 = { text: formatToPlainStringResult, accessibilityLabel: null };
  const intl12 = util.intl;
  obj20.accessibilityLabel = intl12.formatToPlainString(_modDef3091.LYcKX7, { days: stats.totalDaysPlayed });
  obj.daysPlayed = obj20;
  let tmp11;
  if (stats.totalDaysPlayed > 0) {
    if (null != stats.topGame) {
      const obj22 = { text: stats.topGame.applicationName, accessibilityLabel: null };
      const intl13 = util.intl;
      const obj23 = { gameName: stats.topGame.applicationName };
      obj22.accessibilityLabel = intl13.formatToPlainString(_modDef3091.kLqpNC, obj23);
      tmp11 = obj22;
    }
  }
  obj.topGameName = tmp11;
  ({ topEmoji: obj.topEmoji, topGuild: obj.topGuild } = stats);
  let tmp12;
  if (null != stats.topGuild) {
    const _Array = Array;
    const tmpResult = StringUtils;
    const atResult = Array.from(StringUtils.getAcronym(stats.topGuild.guildName)).at(0);
    let toLocaleUpperCaseResult;
    if (atResult != null) {
      toLocaleUpperCaseResult = atResult.toLocaleUpperCase(util.intl.currentLocale);
    }
    tmp12 = toLocaleUpperCaseResult;
    const arr = Array.from(StringUtils.getAcronym(stats.topGuild.guildName));
  }
  obj.topGuildAcronymCharacter = tmp12;
  obj.topGame = stats.topGame;
  return obj;
}
({
  CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3,
  CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4,
  CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty,
  NATIVE_CHARACTER_LAYER_SIZE: metroRequire,
  CheckpointVersions: closure_7,
} = CheckpointConstants);
let items = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY];
const set = new Set(items);
const items1 = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY];
const set1 = new Set(items1);
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export function transformCheckpoint2026CardComponent(checkpoint_data) {
  let tmp3 = null;
  if (obj.getIsCheckpointCardEnabled("transformCheckpoint2026CardComponent")) {
    if (null != checkpoint_data.character) {
      const obj2 = { version: checkpoint_data.version, character: null, stats: null, cardColorPalette: null };
      let tmp6;
      if (null != checkpoint_data.character) {
        ({
          base: obj3.base,
          shoes: obj3.shoes,
          outfit: obj3.outfit,
          face: obj3.face,
          hat: obj3.hat,
          wearable: obj3.wearable,
          aura: obj3.aura,
        } = checkpoint_data.character);
        tmp6 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
        const obj6 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
      }
      obj2.character = tmp6;
      let tmp7;
      if (null != checkpoint_data.stats) {
        const stats = checkpoint_data.stats;
        const obj7 = {
          totalVoiceMinutes: null,
          numMessagesSent: null,
          numEmojisSent: null,
          totalDaysPlayed: null,
          topEmoji: null,
          topGuild: null,
          topGuildNumDaysInteracted: null,
          topGame: null,
          powerLevel: null,
          powerLevelPercentile: null,
        };
        ({
          total_voice_minutes: obj4.totalVoiceMinutes,
          num_messages_sent: obj4.numMessagesSent,
          num_emojis_sent: obj4.numEmojisSent,
          total_days_played: obj4.totalDaysPlayed,
        } = stats);
        let tmp8;
        if (null != stats.top_emoji) {
          let emoji_id;
          if (obj5.isProbablyAValidSnowflake(stats.top_emoji.emoji_id)) {
            emoji_id = stats.top_emoji.emoji_id;
          }
          const obj8 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
          tmp8 = obj8;
          obj5 = SnowflakeUtilsDefault;
        }
        obj7.topEmoji = tmp8;
        let tmp11;
        if (null != stats.top_guild) {
          const obj14 = {
            guildId: stats.top_guild.guild_id,
            guildName: stats.top_guild.guild_name,
            guildIcon: stats.top_guild.guild_icon,
          };
          tmp11 = obj14;
        }
        obj7.topGuild = tmp11;
        obj7.topGuildNumDaysInteracted = stats.top_guild_num_days_interacted;
        let tmp12;
        if (null != stats.top_game) {
          const obj15 = {
            applicationId: stats.top_game.application_id,
            applicationName: stats.top_game.application_name,
            applicationImageId: stats.top_game.application_image_id,
          };
          tmp12 = obj15;
        }
        obj7.topGame = tmp12;
        ({ power_level: obj4.powerLevel, power_level_percentile: obj4.powerLevelPercentile } = stats);
        tmp7 = obj7;
      }
      obj2.stats = tmp7;
      let NONE = checkpoint_data.card_color_palette;
      if (NONE == null) {
        NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
      }
      obj2.cardColorPalette = NONE;
      let tmp5 = obj2;
    } else {
      tmp5 = null;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
export function toCheckpointMessageComponentData(STATS_ONLY, stateFromStores, stats) {
  const obj = { version: React5.V2026, character: null, stats: null, cardColorPalette: null };
  let tmp;
  if (set.has(STATS_ONLY)) {
    tmp = stateFromStores;
  }
  obj.character = tmp;
  let tmp4;
  if (set1.has(STATS_ONLY)) {
    if (null != stats) {
      const guilds = stats.guilds;
      let first;
      if (guilds != null) {
        first = guilds.guilds[0];
      }
      const emojis = stats.emojis;
      let first1;
      if (emojis != null) {
        first1 = emojis.emojis[0];
      }
      const games = stats.games;
      let game;
      if (games != null) {
        const first2 = games.games[0];
        if (first2 != null) {
          game = first2.game;
        }
      }
      const voice = stats.voice;
      let num;
      if (voice != null) {
        num = voice.totalVoiceMinutes;
      }
      if (num == null) {
        num = 0;
      }
      const obj2 = {
        totalVoiceMinutes: num,
        numMessagesSent: null,
        numEmojisSent: null,
        totalDaysPlayed: null,
        topEmoji: null,
        topGuild: null,
        topGuildNumDaysInteracted: null,
        topGame: null,
        powerLevel: null,
        powerLevelPercentile: null,
      };
      const messages = stats.messages;
      let num2;
      if (messages != null) {
        num2 = messages.numMessagesSent;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj2.numMessagesSent = num2;
      const emojis2 = stats.emojis;
      let num3;
      if (emojis2 != null) {
        num3 = emojis2.numEmojisSent;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj2.numEmojisSent = num3;
      const games2 = stats.games;
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
      const power = stats.power;
      let num6;
      if (power != null) {
        num6 = power.powerLevel;
      }
      if (num6 == null) {
        num6 = 0;
      }
      obj2.powerLevel = num6;
      const power2 = stats.power;
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
  obj.cardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(stateFromStores);
  return obj;
}
export function getCharacterLayerUrls(wearable, arg1) {
  _require = wearable;
  closure_1 = arg1;
  const items = [];
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
      items.push("" + layer + "?height=" + closure_1 + "&width=" + closure_1);
    }
  });
  return items;
}
export function formatCheckpoint2026PowerLevel(arg0) {
  const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  return numberFormat.format(arg0);
}
export function getCheckpoint2026PowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round((arg0 / 100) * hasOwnProperty), React4), React3);
}
export { transformCheckpoint2026StatsToRowGeneratedComponent };
export function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
  const obj = {
    version: checkpointData.version,
    authorId: message.author.id,
    primaryBackgroundColor,
    secondaryBackgroundColor,
    tertiaryBackgroundColor,
    character: null,
    stats: null,
    clickable: null,
  };
  let tmp4;
  if (null != checkpointData.character) {
    const character = checkpointData.character;
    const obj2 = { layerUrls: null, accessibilityLabel: null };
    importDefault = tmp3;
    const items = [];
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
        items.push("" + layer + "?height=" + closure_1 + "&width=" + closure_1);
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
    obj6.ariaDescription = intl.string(require("Checkpoint.messages.js").r8GEbK);
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
  if (React5.V2025 === checkpointDataFromMessage.version) {
    const intl = util.intl;
    return intl.string(_modDef3059.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
}
