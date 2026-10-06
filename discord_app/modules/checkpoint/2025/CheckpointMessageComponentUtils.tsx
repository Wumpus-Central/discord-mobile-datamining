// === Module 5130: CheckpointMessageComponentUtils ===

// Module 5130 (CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl from "intl" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import CheckpointUtils from "CheckpointUtils" /* 5131 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointMessageComponentUtils.tsx");

export const transformCheckpoint2025CardComponent = function transformCheckpoint2025CardComponent(checkpoint_data) {
  let emoji_name;
  let tmp;
  let tmp2;
  let tmp7;
  const obj = { version: checkpoint_data.version, cardId: checkpoint_data.card_id, powerLevel: checkpoint_data.power_level, powerLevelPercentile: checkpoint_data.power_level_percentile, numMessagesSent: checkpoint_data.num_messages_sent, totalVoiceMinutes: checkpoint_data.total_voice_minutes, numEmojisSent: checkpoint_data.num_emojis_sent, topGuild: tmp, topEmoji: tmp2, topGame: tmp7 };
  tmp = undefined;
  if (null != checkpoint_data.top_guild) {
    tmp = { guildId: checkpoint_data.top_guild.guild_id, guildName: checkpoint_data.top_guild.guild_name, guildIcon: checkpoint_data.top_guild.guild_icon };
    const obj2 = { guildId: checkpoint_data.top_guild.guild_id, guildName: checkpoint_data.top_guild.guild_name, guildIcon: checkpoint_data.top_guild.guild_icon };
  }
  tmp2 = undefined;
  if (null != checkpoint_data.top_emoji) {
    let emoji_id;
    const obj3 = SnowflakeUtilsDefault;
    if (obj3.isProbablyAValidSnowflake(checkpoint_data.top_emoji.emoji_id)) {
      emoji_id = checkpoint_data.top_emoji.emoji_id;
    }
    const top_emoji = checkpoint_data.top_emoji;
    const obj4 = { emojiId: emoji_id, emojiName: emoji_name };
    emoji_name = undefined;
    if (top_emoji != null) {
      emoji_name = top_emoji.emoji_name;
    }
    tmp2 = obj4;
  }
  tmp7 = undefined;
  if (null != checkpoint_data.top_game) {
    tmp7 = { applicationId: checkpoint_data.top_game.application_id, applicationName: checkpoint_data.top_game.application_name, applicationImageId: checkpoint_data.top_game.application_image_id };
    const obj5 = { applicationId: checkpoint_data.top_game.application_id, applicationName: checkpoint_data.top_game.application_name, applicationImageId: checkpoint_data.top_game.application_image_id };
  }
  return obj;
};
export const transformCheckpoint2025CardToRowGeneratedComponent = function transformCheckpoint2025CardToRowGeneratedComponent(checkpointData, message) {
  let checkpointPowerBarUnits;
  let format;
  let min;
  let num;
  let num3;
  let numEmojisSent;
  let numMessagesSent;
  let obj2;
  let result;
  let str;
  let tmp7;
  let tmpResult4;
  const numberFormat = new Intl.NumberFormat(intl.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  const obj = { cardId: str.toString(), cardAssetUrl: obj2.getCardAssetUrl(checkpointData.cardId), authorId: message.author.id, powerLevel: format(num), powerLevelUnits: min(checkpointPowerBarUnits, num3), voiceString: tmpResult4.getVoiceDurationString(checkpointData.totalVoiceMinutes), reactionString: numEmojisSent.toLocaleString(intl.intl.currentLocale), messagesString: numMessagesSent.toLocaleString(intl.intl.currentLocale), topEmoji: tmp7, clickable: undefined };
  const merged = Object.assign(checkpointData);
  str = checkpointData.cardId;
  num = checkpointData.powerLevel;
  format = numberFormat.format;
  obj2 = CheckpointUtils;
  if (num == null) {
    num = 0;
  }
  const _Math = Math;
  min = Math.min;
  let num2 = checkpointData.powerLevelPercentile;
  const getCheckpointPowerBarUnits = CheckpointUtils.getCheckpointPowerBarUnits;
  CheckpointUtils;
  if (num2 == null) {
    num2 = 0;
  }
  checkpointPowerBarUnits = getCheckpointPowerBarUnits(num2);
  num3 = 10;
  const tmpResult3 = utils_PlatformUtils;
  if (tmpResult3.isIOS()) {
    num3 = 9;
  }
  numEmojisSent = checkpointData.numEmojisSent;
  numMessagesSent = checkpointData.numMessagesSent;
  tmp7 = undefined;
  tmpResult4 = CheckpointUtils;
  if (null != checkpointData.topEmoji) {
    const obj3 = { emojiSurrogateName: result };
    const merged1 = Object.assign(checkpointData.topEmoji);
    result = undefined;
    if (null == checkpointData.topEmoji.emojiId) {
      const obj6 = UnicodeEmojisDefault;
      result = obj6.convertSurrogateToName(checkpointData.topEmoji.emojiName);
    }
    tmp7 = obj3;
  }
  return obj;
};