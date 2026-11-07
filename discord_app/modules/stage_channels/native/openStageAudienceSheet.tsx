// === Module 19716: openStageAudienceSheet ===

// Module 19716 (openStageAudienceSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6764 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12055, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, { channelId });
};