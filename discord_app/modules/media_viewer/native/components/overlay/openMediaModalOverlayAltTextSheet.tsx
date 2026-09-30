// === Module 11234: openMediaModalOverlayAltTextSheet ===

// Module 11234 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11235, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};