// === Module 11723: openMediaModalOverlayAltTextSheet ===

// Module 11723 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11724, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};