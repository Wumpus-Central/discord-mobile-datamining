// discord_app/modules/checkpoint/CheckpointStatsUtils.tsx
import GuildRecordUtils from "../../utils/GuildRecordUtils.tsx";
import UserRecord from "../../records/UserRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

let game;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStatsUtils.tsx");

export const statsFromServer = function statsFromServer(stats) {
  let arr2;
  let emojis;
  let games;
  let guilds;
  let messages;
  let obj2;
  let obj3;
  let power;
  let sidekick;
  let tmp;
  let tmp3;
  let users;
  let voice;
  ({ voice, messages, emojis, games, sidekick, users, power } = stats);
  let obj = {
    voice: {
      totalVoiceMinutes: voice.total_voice_minutes,
      totalVoiceMinutesPercentile: voice.total_voice_minutes_percentile,
    },
    messages: {
      numMessagesSent: messages.num_messages_sent,
      numMessagesSentPercentile: messages.num_messages_sent_percentile,
    },
    guilds: obj2,
    emojis: {
      numEmojisSent: emojis.num_emojis_sent,
      numEmojisSentPercentile: emojis.num_emojis_sent_percentile,
      emojis: emojis.emojis,
    },
    games: obj3,
    sidekick: tmp,
    users: users.map((user) => {
      const tmp = new UserRecord(user.user);
      return tmp;
    }),
    power: { powerLevel: power.power_level, powerLevelPercentile: power.power_level_percentile },
  };
  obj2 = {
    guilds: guilds.map((guild) => {
      let obj2;
      const obj = {
        guild: obj2.fromGuildBasic(guild.guild),
        numMessagesSent: null,
        numVoiceMinutes: null,
        numDaysInteracted: null,
        numDaysInteractedPercentile: null,
      };
      ({
        num_messages_sent: obj.numMessagesSent,
        num_voice_minutes: obj.numVoiceMinutes,
        num_days_interacted: obj.numDaysInteracted,
        num_days_interacted_percentile: obj.numDaysInteractedPercentile,
      } = guild);
      obj2 = GuildRecordUtils;
      return obj;
    }),
  };
  guilds = stats.guilds.guilds;
  obj3 = {
    totalGamesPlayed: games.total_games_played,
    totalGamesPlayedPercentile: games.total_games_played_percentile,
    games: arr2.map((game) => {
      let banner_hash;
      let cover_image_hash;
      let icon_hash;
      game = game.game;
      const game2 = {
        id: game.id,
        name: game.name,
        iconHash: icon_hash,
        bannerHash: banner_hash,
        coverImageHash: cover_image_hash,
      };
      icon_hash = game.icon_hash;
      const numSessions = game.num_sessions;
      banner_hash = game.banner_hash;
      cover_image_hash = game.cover_image_hash;
      return { game: game2, numSessions };
    }),
    totalDaysPlayed: games.total_days_played,
    totalDaysPlayedPercentile: games.total_days_played_percentile,
  };
  tmp = null;
  arr2 = games.games;
  if (null != sidekick) {
    const self = this;
    const self2 = this;
    const obj7 = { user: tmp3, numMessagesSent: null, numVoiceMinutes: null };
    ({ num_messages_sent: obj4.numMessagesSent, num_voice_minutes: obj4.numVoiceMinutes } = sidekick);
    tmp = obj7;
    tmp3 = new UserRecord(sidekick.user);
  }
  return obj;
};
