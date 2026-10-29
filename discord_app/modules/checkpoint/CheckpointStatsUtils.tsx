// === Module 13249: CheckpointStatsUtils ===

// Module 13249 (CheckpointStatsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1125 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4871 */;
import UserRecord from "UserRecord" /* 1403 */;

require = fn;
let closure_4 = { hour: "numeric", minute: "2-digit", numberingSystem: "latn" };
const re5 = /^[A-Za-z.\s]+$/;
const re6 = /\s/g;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStatsUtils.tsx");

export function getCheckpointTopPercent(prop) {
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
}
export function formatCheckpointCompactNumber(stateFromStores1) {
  const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { notation: "compact", compactDisplay: "long" });
  return numberFormat.format(stateFromStores1);
}
export function formatCheckpointPeakHour(stateFromStores1) {
  if (null == stateFromStores1) {
    return null;
  } else {
    const _Date = Date;
    const date = new Date();
    date.setUTCHours(stateFromStores1, 0, 0, 0);
    const _Intl2 = Intl;
    const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, closure_4);
    const iter = dateTimeFormat.formatToParts(date).find((type) => "dayPeriod" === type.type);
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    let tmp2 = closure_4;
    if (null != value) {
      tmp2 = closure_4;
      if (!re5.test(value)) {
        const obj = {};
        const merged = Object.assign(closure_4);
        obj.hourCycle = "h23";
        tmp2 = obj;
      }
    }
    const _Intl = Intl;
    const dateTimeFormat1 = new Intl.DateTimeFormat(util.intl.currentLocale, tmp2);
    const str2 = dateTimeFormat1.format(date);
    const obj2 = { value: str2.replace(re6, ""), label: str2 };
    return obj2;
  }
}
export function hasCheckpointSidekick(sidekick) {
  sidekick = undefined;
  if (sidekick != null) {
    sidekick = sidekick.sidekick;
  }
  return null != sidekick;
}
export function hasCheckpointSquad(sidekick) {
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
}
export function hasCheckpointVoiceMinutes(voice) {
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
}
export function hasCheckpointMessages(messages) {
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
}
export function hasCheckpointGuilds(guilds) {
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
}
export function hasCheckpointEmojis(stats) {
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
}
export function hasCheckpointGames(stats) {
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
}
export function hasCheckpointGameDays(games) {
  let num;
  if (games != null) {
    games = games.games;
    if (games != null) {
      num = games.totalDaysPlayed;
    }
  }
  if (num == null) {
    num = 0;
  }
  return Math.round(num) > 0;
}
export function statsFromServer(stats) {
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
}
export function globalStatsFromServer(global_stats) {
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
}