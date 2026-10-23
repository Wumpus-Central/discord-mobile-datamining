// === Module 12895: CheckpointMockData ===

// Module 12895 (CheckpointMockData)
import size from "module_2" /* 2 */;

const CheckpointMockStats = { DEFAULT: 0, [0]: "DEFAULT", NO_PERSONAL_DATA: 1, [1]: "NO_PERSONAL_DATA", ZERO_DATA: 2, [2]: "ZERO_DATA" };
let closure_1 = { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } };
const obj2 = { voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 }, messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 }, guilds: { guilds: [] }, emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] }, games: { totalGamesPlayed: 0, totalGamesPlayedPercentile: 0, games: [], totalDaysPlayed: 0, totalDaysPlayedPercentile: 0 }, sidekick: null, users: [], power: { powerLevel: 0, powerLevelPercentile: 0 } };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointMockData.tsx");

export { CheckpointMockStats };
export const getMockCheckpointStats = function getMockCheckpointStats(arg0) {
  if (obj.DEFAULT === arg0) {
    return closure_1;
  } else if (obj.NO_PERSONAL_DATA === arg0) {
    return null;
  } else if (obj.ZERO_DATA === arg0) {
    return obj2;
  }
};