// discord_app/modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx
import { asyncRequireImpl } from "../../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(10728, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};