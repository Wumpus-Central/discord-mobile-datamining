// discord_app/modules/checkpoint/CheckpointMockData.tsx
import CheckpointAvailability from "../../../discord_common/js/shared/shared-constants/CheckpointAvailability.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  FAKE_DATA: { stats: { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } }, character: null },
  GLOBAL_STATS: { stats: null, character: null, didPlayerShareDataWithDiscord: false },
  ZERO_STATS: null,
  UNAVAILABLE: { availability: CheckpointAvailability.CheckpointAvailability.UNAVAILABLE },
  NO_CHARACTER: null,
  COMPACT_ASSETS: null,
};
const obj3 = {
  stats: {
    voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 },
    messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 },
    guilds: { guilds: [] },
    emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] },
    games: {
      totalGamesPlayed: 0,
      totalGamesPlayedPercentile: 0,
      games: [],
      totalDaysPlayed: 0,
      totalDaysPlayedPercentile: 0,
    },
    sidekick: null,
    users: [],
    power: { powerLevel: 0, powerLevelPercentile: 0 },
  },
  character: null,
};
obj.ZERO_STATS = obj3;
const obj2 = { stats: { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } }, character: null };
const obj4 = {
  voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 },
  messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 },
  guilds: { guilds: [] },
  emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] },
  games: {
    totalGamesPlayed: 0,
    totalGamesPlayedPercentile: 0,
    games: [],
    totalDaysPlayed: 0,
    totalDaysPlayedPercentile: 0,
  },
  sidekick: null,
  users: [],
  power: { powerLevel: 0, powerLevelPercentile: 0 },
};
const obj5 = { availability: CheckpointAvailability.CheckpointAvailability.UNAVAILABLE };
obj.NO_CHARACTER = { availability: CheckpointAvailability.CheckpointAvailability.NO_CHARACTER };
obj.COMPACT_ASSETS = { compactAssets: true };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointMockData.tsx");

export const CheckpointMocks = obj;
