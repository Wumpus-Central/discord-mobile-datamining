// discord_app/modules/checkpoint/flows/CheckpointNoSharedDataFlow.tsx
import CheckpointNavigation from "../CheckpointNavigation.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [
  CheckpointNavigation.CheckpointRoute.HOME,
  CheckpointNavigation.CheckpointRoute.INTRODUCTION,
  CheckpointNavigation.CheckpointRoute.VOICE_GENERAL,
  CheckpointNavigation.CheckpointRoute.VOICE_FACE,
  CheckpointNavigation.CheckpointRoute.MESSAGES_GENERAL,
  CheckpointNavigation.CheckpointRoute.MESSAGES_OUTFIT,
  CheckpointNavigation.CheckpointRoute.SERVERS_HEADWEAR,
  CheckpointNavigation.CheckpointRoute.EMOJI_GENERAL,
  CheckpointNavigation.CheckpointRoute.EMOJI_SHOES,
  CheckpointNavigation.CheckpointRoute.GAMES_GENERAL,
  CheckpointNavigation.CheckpointRoute.GAMES_WEARABLE,
  CheckpointNavigation.CheckpointRoute.GAME_TIME_GENERAL,
  CheckpointNavigation.CheckpointRoute.GAME_TIME_AURA,
  CheckpointNavigation.CheckpointRoute.FINALIZE_CHARACTER,
  CheckpointNavigation.CheckpointRoute.SUMMARY,
  CheckpointNavigation.CheckpointRoute.PROFILE_WIDGET,
];
const result = size.fileFinishedImporting("modules/checkpoint/flows/CheckpointNoSharedDataFlow.tsx");

export const CHECKPOINT_NO_SHARED_DATA_FLOW = items;
