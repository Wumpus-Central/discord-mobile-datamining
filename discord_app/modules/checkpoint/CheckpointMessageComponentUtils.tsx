// discord_app/modules/checkpoint/CheckpointMessageComponentUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import util from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import _modDef3109 from "Checkpoint.messages.js";
import CheckpointTrait from "../../../discord_common/js/shared/shared-constants/CheckpointTrait.tsx";
import CheckpointCharacterAssets from "CheckpointCharacterAssets.tsx";
import CheckpointConstants from "CheckpointConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({
  CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3,
  CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4,
  CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty,
  NATIVE_CHARACTER_LAYER_SIZE: metroRequire,
  CheckpointVersions: closure_7,
} = CheckpointConstants);
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
        ({
          base: obj3.base,
          shoes: obj3.shoes,
          outfit: obj3.outfit,
          face: obj3.face,
          hat: obj3.hat,
          wearable: obj3.wearable,
          aura: obj3.aura,
        } = checkpoint_data.character);
        tmp5 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
        const obj6 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
      }
      obj2.character = tmp5;
      let tmp6;
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
          const obj14 = {
            guildId: stats.top_guild.guild_id,
            guildName: stats.top_guild.guild_name,
            guildIcon: stats.top_guild.guild_icon,
          };
          tmp10 = obj14;
        }
        obj7.topGuild = tmp10;
        obj7.topGuildNumDaysInteracted = stats.top_guild_num_days_interacted;
        let tmp11;
        if (null != stats.top_game) {
          const obj15 = {
            applicationId: stats.top_game.application_id,
            applicationName: stats.top_game.application_name,
            applicationImageId: stats.top_game.application_image_id,
          };
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
  const item = hasItem
    ? tmp2.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING
    : tmp2.CHECKPOINT_LAYER_DEFAULT_ORDERING.forEach((item) => {
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
export const transformCheckpoint2026CardToRowGeneratedComponent =
  function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
    checkpointData = checkpointData.checkpointData;
    ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
    obj = {
      version: checkpointData.version,
      authorId: message.author.id,
      primaryBackgroundColor,
      secondaryBackgroundColor,
      tertiaryBackgroundColor,
      character: null,
      stats: null,
      clickable: null,
    };
    if (null == checkpointData.character) {
      obj.character = undefined;
      if (null == checkpointData.stats) {
        obj.stats = undefined;
        let tmp27;
        if (obj31.getIsCheckpointEnabled("getCheckpointClickable")) {
          const obj2 = { ariaDescription: null };
          const intl17 = character(tmp2[7]).intl;
          obj2.ariaDescription = intl17.string(tmp(tmp2[10]).r8GEbK);
          tmp27 = obj2;
        }
        obj.clickable = tmp27;
        return obj;
      } else {
        topGame = checkpointData.stats;
        const obj4 = {
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
          topGame: null,
        };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(character(tmp2[7]).intl.currentLocale, {
          notation: "compact",
          compactDisplay: "short",
        });
        obj4.powerLevel = numberFormat.format(topGame.powerLevel);
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        obj4.powerLevelUnits = Math.min(
          Math.max(Math.round((topGame.powerLevelPercentile / 100) * closure_5), closure_4),
          closure_3,
        );
        const _Math4 = Math;
        const rounded = Math.round(topGame.totalVoiceMinutes);
        if (rounded > 0) {
          let voiceDurationString = tmp8(tmp2[6]).getVoiceDurationString(rounded);
          const tmp8Result = tmp8(tmp2[6]);
        } else {
          const intl = tmp8(tmp2[7]).intl;
          const obj5 = { minutes: rounded };
          voiceDurationString = intl.formatToPlainString(tmp8(tmp2[7]).t.iXLF9W, obj5);
        }
        const obj6 = { text: voiceDurationString, accessibilityLabel: null };
        const intl2 = tmp8(tmp2[7]).intl;
        const obj7 = { duration: character(tmp2[6]).getAccessibleVoiceDurationString(rounded) };
        obj6.accessibilityLabel = intl2.formatToPlainString(tmp(tmp2[8]).lw35aH, obj7);
        obj4.voice = obj6;
        if (topGame.numMessagesSent > 0) {
          const numMessagesSent = topGame.numMessagesSent;
          let toLocaleStringResult = numMessagesSent.toLocaleString(tmp8(tmp2[7]).intl.currentLocale);
        } else {
          const intl3 = tmp8(tmp2[7]).intl;
          const obj8 = { count: topGame.numMessagesSent };
          toLocaleStringResult = intl3.formatToPlainString(tmp(tmp2[8]).foKBCN, obj8);
        }
        const obj9 = { text: toLocaleStringResult, accessibilityLabel: null };
        const intl4 = tmp8(tmp2[7]).intl;
        const obj10 = { count: topGame.numMessagesSent };
        obj9.accessibilityLabel = intl4.formatToPlainString(tmp(tmp2[8]).IdRUAC, obj10);
        obj4.messages = obj9;
        if (null == topGame.topGuild) {
          const intl5 = tmp8(tmp2[7]).intl;
          const stringResult = intl5.string(tmp(tmp2[8]).GultYJ);
          const obj11 = { text: stringResult, accessibilityLabel: stringResult };
          let obj12 = obj11;
        } else {
          obj12 = { text: null, accessibilityLabel: null };
          const intl18 = tmp8(tmp2[7]).intl;
          const obj13 = { days: topGame.topGuildNumDaysInteracted };
          obj12.text = intl18.formatToPlainString(tmp8(tmp2[7]).t.GBLpQ8, obj13);
          const intl19 = tmp8(tmp2[7]).intl;
          const obj14 = { days: topGame.topGuildNumDaysInteracted };
          obj12.accessibilityLabel = intl19.formatToPlainString(tmp(tmp2[8]).MpSH8v, obj14);
        }
        obj4.topGuildDaysInteracted = obj12;
        if (null == topGame.topGuild) {
          const intl7 = tmp8(tmp2[7]).intl;
          const stringResult1 = intl7.string(tmp8(tmp2[7]).t["52UOf9"]);
          const obj15 = { text: stringResult1, accessibilityLabel: stringResult1 };
          let obj16 = obj15;
        } else {
          obj16 = { text: topGame.topGuild.guildName, accessibilityLabel: null };
          const intl6 = tmp8(tmp2[7]).intl;
          const obj17 = { guildName: topGame.topGuild.guildName };
          obj16.accessibilityLabel = intl6.formatToPlainString(tmp(tmp2[8])["9UTJ+t"], obj17);
        }
        obj4.topGuildName = obj16;
        if (topGame.numEmojisSent > 0) {
          const numEmojisSent = topGame.numEmojisSent;
          let toLocaleStringResult1 = numEmojisSent.toLocaleString(tmp8(tmp2[7]).intl.currentLocale);
        } else {
          const intl8 = tmp8(tmp2[7]).intl;
          const obj18 = { count: topGame.numEmojisSent };
          toLocaleStringResult1 = intl8.formatToPlainString(tmp(tmp2[8]).RHYx1k, obj18);
        }
        const obj19 = { text: toLocaleStringResult1, accessibilityLabel: null };
        const intl9 = tmp8(tmp2[7]).intl;
        const obj20 = { count: topGame.numEmojisSent };
        obj19.accessibilityLabel = intl9.formatToPlainString(tmp(tmp2[8])["36qpUG"], obj20);
        obj4.reactions = obj19;
        if (null == topGame.topEmoji) {
          const intl11 = tmp8(tmp2[7]).intl;
          const stringResult2 = intl11.string(tmp8(tmp2[7]).t.lxsmBd);
          const obj21 = { text: stringResult2, accessibilityLabel: stringResult2 };
          let obj22 = obj21;
        } else {
          if (null == topGame.topEmoji.emojiId) {
            let result = tmp(tmp2[9]).convertSurrogateToName(topGame.topEmoji.emojiName);
            const tmpResult = tmp(tmp2[9]);
          } else {
            let _HermesInternal = HermesInternal;
            result = ":" + topGame.topEmoji.emojiName + ":";
          }
          obj22 = { text: result, accessibilityLabel: null };
          const intl10 = tmp8(tmp2[7]).intl;
          const obj23 = { emojiName: topGame.topEmoji.emojiName };
          obj22.accessibilityLabel = intl10.formatToPlainString(tmp(tmp2[8]).CcBo8C, obj23);
        }
        obj4.topEmojiName = obj22;
        if (topGame.totalDaysPlayed > 0) {
          const intl13 = tmp8(tmp2[7]).intl;
          const obj24 = { days: topGame.totalDaysPlayed };
          let formatToPlainStringResult = intl13.formatToPlainString(tmp8(tmp2[7]).t.GBLpQ8, obj24);
        } else {
          const intl12 = tmp8(tmp2[7]).intl;
          formatToPlainStringResult = intl12.string(tmp(tmp2[8]).mg1NPe);
        }
        const obj25 = { text: formatToPlainStringResult, accessibilityLabel: null };
        const intl14 = tmp8(tmp2[7]).intl;
        const obj26 = { days: topGame.totalDaysPlayed };
        obj25.accessibilityLabel = intl14.formatToPlainString(tmp(tmp2[8]).LYcKX7, obj26);
        obj4.daysPlayed = obj25;
        if (null == topGame.topGame) {
          const intl16 = tmp8(tmp2[7]).intl;
          const stringResult3 = intl16.string(tmp8(tmp2[7]).t["5eYZiW"]);
          const obj27 = { text: stringResult3, accessibilityLabel: stringResult3 };
          let obj28 = obj27;
        } else {
          obj28 = { text: topGame.topGame.applicationName, accessibilityLabel: null };
          const intl15 = tmp8(tmp2[7]).intl;
          const obj29 = { gameName: topGame.topGame.applicationName };
          obj28.accessibilityLabel = intl15.formatToPlainString(tmp(tmp2[8]).kLqpNC, obj29);
        }
        obj4.topGameName = obj28;
        ({ topEmoji: obj3.topEmoji, topGuild: obj3.topGuild, topGame } = topGame);
        obj4.topGame = topGame;
        const tmp8Result2 = character(tmp2[6]);
      }
    } else {
      character = checkpointData.character;
      importDefault = tmp3;
      const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = character(tmp2[5]).CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
      const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(character.wearable);
      character(tmp2[5]);
      const obj30 = { layerUrls: null };
      const items = [];
      const item = hasItem
        ? obj30.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING
        : obj30.CHECKPOINT_LAYER_DEFAULT_ORDERING.forEach((item) => {
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
      obj30.layerUrls = items;
      const arr = hasItem
        ? obj30.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING
        : obj30.CHECKPOINT_LAYER_DEFAULT_ORDERING;
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
    return intl.string(_modDef3109.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};
