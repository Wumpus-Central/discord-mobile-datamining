// === Module 19368: openStageAudienceSheet ===

// Module 19368 (openStageAudienceSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6500 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10904, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, { channelId });
};