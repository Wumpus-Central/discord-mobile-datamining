// === Module 20104: openStageAudienceSheet ===

// Module 20104 (openStageAudienceSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6896 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12951, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, { channelId });
};