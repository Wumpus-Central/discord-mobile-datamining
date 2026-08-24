// discord_app/modules/rewards/ProgramRewardsTypes.tsx
import set from "../../../_runtime/00002_set.js";
import RewardProgram from "../../../discord_common/js/shared/shared-constants/RewardProgram.tsx";
import ProgramCurrentState from "../../../discord_common/js/shared/shared-constants/ProgramCurrentState.tsx";

const result = set.fileFinishedImporting("modules/rewards/ProgramRewardsTypes.tsx");

export const RewardProgram = RewardProgram.RewardProgram;
export const ProgramCurrentState = ProgramCurrentState.ProgramCurrentState;