// === Module 15245: CheckpointStatsUtils ===

// Module 15245 (CheckpointStatsUtils)
import GuildRecordUtils from "GuildRecordUtils" /* 2059 */;
import UserRecord from "UserRecord" /* 1386 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStatsUtils.tsx");

export const statsFromServer = function statsFromServer(stats) {
  ({ voice, messages, emojis, games, sidekick, users, power } = stats);
  let obj = { voice: { totalVoiceMinutes: voice.total_voice_minutes, totalVoiceMinutesPercentile: voice.total_voice_minutes_percentile }, messages: { numMessagesSent: messages.num_messages_sent, numMessagesSentPercentile: messages.num_messages_sent_percentile }, guilds: null, emojis: null, games: null, sidekick: null, users: null, power: null };
  const obj2 = { guilds: null };
  const guilds = stats.guilds.guilds;
  obj2.guilds = guilds.map((guild) => {
    const obj = { guild: GuildRecordUtils.fromGuildBasic(guild.guild), numMessagesSent: null, numVoiceMinutes: null, numDaysInteracted: null, numDaysInteractedPercentile: null };
    ({ num_messages_sent: obj.numMessagesSent, num_voice_minutes: obj.numVoiceMinutes, num_days_interacted: obj.numDaysInteracted, num_days_interacted_percentile: obj.numDaysInteractedPercentile } = guild);
    return obj;
  });
  obj.guilds = obj2;
  obj.emojis = { numEmojisSent: emojis.num_emojis_sent, numEmojisSentPercentile: emojis.num_emojis_sent_percentile, emojis: emojis.emojis };
  const obj3 = { totalGamesPlayed: games.total_games_played, totalGamesPlayedPercentile: games.total_games_played_percentile, games: null, totalDaysPlayed: games.total_days_played, totalDaysPlayedPercentile: games.total_days_played_percentile };
  const games1 = games.games;
  obj3.games = games1.map((game) => {
    game = game.game;
    const game2 = { id: game.id, name: game.name, iconHash: null, bannerHash: null, coverImageHash: null };
    const icon_hash = game.icon_hash;
    game2.iconHash = icon_hash;
    const banner_hash = game.banner_hash;
    game2.bannerHash = banner_hash;
    const cover_image_hash = game.cover_image_hash;
    game2.coverImageHash = cover_image_hash;
    return { game: game2, numSessions: game.num_sessions };
  });
  obj.games = obj3;
  let tmp = null;
  if (null != sidekick) {
    const obj7 = { user: null, numMessagesSent: null, numVoiceMinutes: null };
    const tmp5 = new UserRecord(sidekick.user);
    obj7.user = tmp5;
    ({ num_messages_sent: obj4.numMessagesSent, num_voice_minutes: obj4.numVoiceMinutes } = sidekick);
    tmp = obj7;
  }
  obj.sidekick = tmp;
  obj.users = users.map((user) => new UserRecord(user.user));
  obj.power = { powerLevel: power.power_level, powerLevelPercentile: power.power_level_percentile };
  return obj;
};