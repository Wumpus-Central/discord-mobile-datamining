// === Module 5068: CheckpointMessageComponentUtils ===

// Module 5068 (CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1115 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import CheckpointUtils from "CheckpointUtils" /* 5069 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointMessageComponentUtils.tsx");

export const transformCheckpoint2025CardComponent = function transformCheckpoint2025CardComponent(checkpoint_data) {
  const obj = { version: checkpoint_data.version, cardId: checkpoint_data.card_id, powerLevel: checkpoint_data.power_level, powerLevelPercentile: checkpoint_data.power_level_percentile, numMessagesSent: checkpoint_data.num_messages_sent, totalVoiceMinutes: checkpoint_data.total_voice_minutes, numEmojisSent: checkpoint_data.num_emojis_sent, topGuild: null, topEmoji: null, topGame: null };
  let tmp;
  if (null != checkpoint_data.top_guild) {
    const obj2 = { guildId: checkpoint_data.top_guild.guild_id, guildName: checkpoint_data.top_guild.guild_name, guildIcon: checkpoint_data.top_guild.guild_icon };
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
    const obj5 = { applicationId: checkpoint_data.top_game.application_id, applicationName: checkpoint_data.top_game.application_name, applicationImageId: checkpoint_data.top_game.application_image_id };
    tmp7 = obj5;
  }
  obj.topGame = tmp7;
  return obj;
};
export const transformCheckpoint2025CardToRowGeneratedComponent = function transformCheckpoint2025CardToRowGeneratedComponent(checkpointData, message) {
  const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
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