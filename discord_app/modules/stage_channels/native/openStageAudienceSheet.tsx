// discord_app/modules/stage_channels/native/openStageAudienceSheet.tsx
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageChannelsConstants from "../StageChannelsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12064, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, {
    channelId,
  });
}
