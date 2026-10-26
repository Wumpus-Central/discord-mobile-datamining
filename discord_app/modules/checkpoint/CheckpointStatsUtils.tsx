// === Module 12959: CheckpointStatsUtils ===

// Module 12959 (CheckpointStatsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4837 */;
import UserRecord from "UserRecord" /* 1406 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStatsUtils.tsx");

export const getCheckpointTopPercent = function getCheckpointTopPercent(prop) {
  let bound = null;
  if (null != prop) {
    bound = null;
    if (prop >= 50) {
      const _Math = Math;
      const _Math2 = Math;
      bound = Math.max(1, Math.ceil(100 - prop));
    }
  }
  return bound;
};
export const hasCheckpointSidekick = function hasCheckpointSidekick(sidekick) {
  sidekick = undefined;
  if (sidekick != null) {
    sidekick = sidekick.sidekick;
  }
  return null != sidekick;
};
export const hasCheckpointSquad = function hasCheckpointSquad(sidekick) {
  sidekick = undefined;
  if (sidekick != null) {
    sidekick = sidekick.sidekick;
  }
  let tmp2 = null != sidekick;
  if (tmp2) {
    let num;
    if (sidekick != null) {
      const users = sidekick.users;
      if (users != null) {
        num = users.length;
      }
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
export const hasCheckpointVoiceMinutes = function hasCheckpointVoiceMinutes(voice) {
  let num;
  if (voice != null) {
    voice = voice.voice;
    if (voice != null) {
      num = voice.totalVoiceMinutes;
    }
  }
  if (num == null) {
    num = 0;
  }
  return Math.round(num) > 0;
};
export const hasCheckpointMessages = function hasCheckpointMessages(messages) {
  let num;
  if (messages != null) {
    messages = messages.messages;
    if (messages != null) {
      num = messages.numMessagesSent;
    }
  }
  if (num == null) {
    num = 0;
  }
  return Math.round(num) > 0;
};
export const hasCheckpointGuilds = function hasCheckpointGuilds(guilds) {
  let num;
  if (guilds != null) {
    guilds = guilds.guilds;
    if (guilds != null) {
      num = guilds.guilds.length;
    }
  }
  if (num == null) {
    num = 0;
  }
  return num > 0;
};
export const hasCheckpointEmojis = function hasCheckpointEmojis(stats) {
  let num;
  if (stats != null) {
    const emojis = stats.emojis;
    if (emojis != null) {
      num = emojis.numEmojisSent;
    }
  }
  if (num == null) {
    num = 0;
  }
  let tmp = Math.round(num) > 0;
  if (tmp) {
    let num2;
    if (stats != null) {
      const emojis2 = stats.emojis;
      if (emojis2 != null) {
        num2 = emojis2.emojis.length;
      }
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp = num2 > 0;
  }
  return tmp;
};
export const hasCheckpointGames = function hasCheckpointGames(stats) {
  let num;
  if (stats != null) {
    const games = stats.games;
    if (games != null) {
      num = games.totalGamesPlayed;
    }
  }
  if (num == null) {
    num = 0;
  }
  let tmp = Math.round(num) > 0;
  if (tmp) {
    let num2;
    if (stats != null) {
      const games2 = stats.games;
      if (games2 != null) {
        num2 = games2.games.length;
      }
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp = num2 > 0;
  }
  return tmp;
};
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
    const game2 = { id: SnowflakeUtilsDefault.cast(game.id), name: null, iconHash: icon_hash, bannerHash: null, coverImageHash: null };
    ({ name: obj.name, icon_hash } = game);
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
export const globalStatsFromServer = function globalStatsFromServer(global_stats) {
  ({ emojis, games } = global_stats);
  let obj = { voice: { peakHourUtc: global_stats.voice.peak_hour_utc }, messages: { numWordsSent: global_stats.messages.num_words_sent }, guilds: null, emojis: null, games: null };
  const obj2 = { guildsByMembers: null };
  const guilds_by_members = global_stats.guilds.guilds_by_members;
  obj2.guildsByMembers = guilds_by_members.map((guild) => GuildRecordUtils.fromGuildBasic(guild.guild));
  obj.guilds = obj2;
  const obj3 = { numEmojisSent: emojis.num_emojis_sent, numReactionsAdded: emojis.num_reactions_added, emojis: null };
  const emojis1 = emojis.emojis;
  obj3.emojis = emojis1.map((emoji) => emoji.emoji);
  obj.emojis = obj3;
  const obj4 = { gamesByPlayers: null, newGamesByPlayers: null, indieGamesByPlayers: null, gamesByStreamWatchMinutes: null, gamesByCoplayUsers: null, numUsersPlayedEveryDay: games.num_users_played_every_day };
  const games_by_players = games.games_by_players;
  obj4.gamesByPlayers = games_by_players.map((game) => {
    game = game.game;
    const obj = { id: SnowflakeUtilsDefault.cast(game.id), name: null, iconHash: icon_hash, bannerHash: null, coverImageHash: null };
    ({ name: obj.name, icon_hash } = game);
    const banner_hash = game.banner_hash;
    obj.bannerHash = banner_hash;
    const cover_image_hash = game.cover_image_hash;
    obj.coverImageHash = cover_image_hash;
    return obj;
  });
  const new_games_by_players = games.new_games_by_players;
  obj4.newGamesByPlayers = new_games_by_players.map((game) => {
    game = game.game;
    const obj = { id: SnowflakeUtilsDefault.cast(game.id), name: null, iconHash: icon_hash, bannerHash: null, coverImageHash: null };
    ({ name: obj.name, icon_hash } = game);
    const banner_hash = game.banner_hash;
    obj.bannerHash = banner_hash;
    const cover_image_hash = game.cover_image_hash;
    obj.coverImageHash = cover_image_hash;
    return obj;
  });
  const prop = games.indie_games_by_players;
  obj4.indieGamesByPlayers = prop.map((game) => {
    game = game.game;
    const obj = { id: SnowflakeUtilsDefault.cast(game.id), name: null, iconHash: icon_hash, bannerHash: null, coverImageHash: null };
    ({ name: obj.name, icon_hash } = game);
    const banner_hash = game.banner_hash;
    obj.bannerHash = banner_hash;
    const cover_image_hash = game.cover_image_hash;
    obj.coverImageHash = cover_image_hash;
    return obj;
  });
  const prop1 = games.games_by_stream_watch_minutes;
  obj4.gamesByStreamWatchMinutes = prop1.map((game) => {
    game = game.game;
    const obj = { id: SnowflakeUtilsDefault.cast(game.id), name: null, iconHash: icon_hash, bannerHash: null, coverImageHash: null };
    ({ name: obj.name, icon_hash } = game);
    const banner_hash = game.banner_hash;
    obj.bannerHash = banner_hash;
    const cover_image_hash = game.cover_image_hash;
    obj.coverImageHash = cover_image_hash;
    return obj;
  });
  const prop2 = games.games_by_coplay_users;
  obj4.gamesByCoplayUsers = prop2.map((game) => {
    game = game.game;
    const obj = { id: SnowflakeUtilsDefault.cast(game.id), name: null, iconHash: icon_hash, bannerHash: null, coverImageHash: null };
    ({ name: obj.name, icon_hash } = game);
    const banner_hash = game.banner_hash;
    obj.bannerHash = banner_hash;
    const cover_image_hash = game.cover_image_hash;
    obj.coverImageHash = cover_image_hash;
    return obj;
  });
  obj.games = obj4;
  return obj;
};