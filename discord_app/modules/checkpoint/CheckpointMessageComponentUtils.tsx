// discord_app/modules/checkpoint/CheckpointMessageComponentUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import util from "../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import Server from "../../flow/Server.tsx";
import _modDef3002 from "Checkpoint.messages.js";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import CheckpointConstants from "CheckpointConstants.tsx";
import CheckpointUtils from "CheckpointUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export const transformCheckpoint2025CardComponent = function transformCheckpoint2025CardComponent(checkpoint_data) {
  const obj = {
    version: checkpoint_data.version,
    cardId: checkpoint_data.card_id,
    powerLevel: checkpoint_data.power_level,
    powerLevelPercentile: checkpoint_data.power_level_percentile,
    numMessagesSent: checkpoint_data.num_messages_sent,
    totalVoiceMinutes: checkpoint_data.total_voice_minutes,
    numEmojisSent: checkpoint_data.num_emojis_sent,
    topGuild: null,
    topEmoji: null,
    topGame: null,
  };
  let tmp;
  if (null != checkpoint_data.top_guild) {
    const obj2 = {
      guildId: checkpoint_data.top_guild.guild_id,
      guildName: checkpoint_data.top_guild.guild_name,
      guildIcon: checkpoint_data.top_guild.guild_icon,
    };
    tmp = obj2;
  }
  obj.topGuild = tmp;
  let tmp2;
  if (null != checkpoint_data.top_emoji) {
    let emoji_id;
    if (obj3.isProbablyAValidSnowflake(checkpoint_data.top_emoji.emoji_id)) {
      emoji_id = checkpoint_data.top_emoji.emoji_id;
    }
    const obj4 = { emojiId: emoji_id, emojiName: null };
    const top_emoji = checkpoint_data.top_emoji;
    let emoji_name;
    if (top_emoji != null) {
      emoji_name = top_emoji.emoji_name;
    }
    obj4.emojiName = emoji_name;
    tmp2 = obj4;
    obj3 = SnowflakeUtilsDefault;
  }
  obj.topEmoji = tmp2;
  let tmp7;
  if (null != checkpoint_data.top_game) {
    const obj5 = {
      applicationId: checkpoint_data.top_game.application_id,
      applicationName: checkpoint_data.top_game.application_name,
      applicationImageId: checkpoint_data.top_game.application_image_id,
    };
    tmp7 = obj5;
  }
  obj.topGame = tmp7;
  return obj;
};
export const transformCheckpoint2025CardToRowGeneratedComponent =
  function transformCheckpoint2025CardToRowGeneratedComponent(checkpointData, message) {
    const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, {
      notation: "compact",
      compactDisplay: "short",
    });
    const obj = {};
    const merged = Object.assign(checkpointData);
    obj.cardId = checkpointData.cardId.toString();
    obj.cardAssetUrl = CheckpointUtils.getCardAssetUrl(checkpointData.cardId);
    obj.authorId = message.author.id;
    let num = checkpointData.powerLevel;
    if (num == null) {
      num = 0;
    }
    obj.powerLevel = numberFormat.format(num);
    let num2 = checkpointData.powerLevelPercentile;
    if (num2 == null) {
      num2 = 0;
    }
    const checkpointPowerBarUnits = CheckpointUtils.getCheckpointPowerBarUnits(num2);
    const tmpResult = CheckpointUtils;
    let num3 = 10;
    if (tmpResult3.isIOS()) {
      num3 = 9;
    }
    obj.powerLevelUnits = Math.min(checkpointPowerBarUnits, num3);
    tmpResult3 = utils_PlatformUtils;
    obj.voiceString = CheckpointUtils.getVoiceDurationString(checkpointData.totalVoiceMinutes);
    const numEmojisSent = checkpointData.numEmojisSent;
    obj.reactionString = numEmojisSent.toLocaleString(util.intl.currentLocale);
    const numMessagesSent = checkpointData.numMessagesSent;
    obj.messagesString = numMessagesSent.toLocaleString(util.intl.currentLocale);
    let tmp5;
    if (null != checkpointData.topEmoji) {
      const obj2 = {};
      const merged1 = Object.assign(checkpointData.topEmoji);
      let result;
      if (null == checkpointData.topEmoji.emojiId) {
        result = UnicodeEmojisDefault.convertSurrogateToName(checkpointData.topEmoji.emojiName);
      }
      obj2.emojiSurrogateName = result;
      tmp5 = obj2;
    }
    obj.topEmoji = tmp5;
    obj.clickable = undefined;
    return obj;
  };
export const transformCheckpoint2026CardComponent = function transformCheckpoint2026CardComponent(checkpoint_data) {
  let tmp = null;
  if (obj.getIsCheckpointEnabled("transformCheckpoint2026CardComponent")) {
    let tmp3 = null;
    if (null != checkpoint_data.character) {
      const obj2 = { version: checkpoint_data.version, character: null };
      const obj3 = {
        base: checkpoint_data.character.base,
        shoes: checkpoint_data.character.shoes,
        outfit: checkpoint_data.character.outfit,
        face: checkpoint_data.character.face,
        hat: checkpoint_data.character.hat,
        wearable: checkpoint_data.character.wearable,
        aura: checkpoint_data.character.aura,
      };
      obj2.character = obj3;
      tmp3 = obj2;
    }
    tmp = tmp3;
  }
  return tmp;
};
export function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  return checkpointData;
}
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
  if (CheckpointVersions.V2025 === checkpointDataFromMessage.version) {
    const intl = util.intl;
    return intl.string(_modDef3002.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};
