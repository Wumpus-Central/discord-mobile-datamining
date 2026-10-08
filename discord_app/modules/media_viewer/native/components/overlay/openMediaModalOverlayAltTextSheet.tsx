// === Module 11286: openMediaModalOverlayAltTextSheet ===

// Module 11286 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11287, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};