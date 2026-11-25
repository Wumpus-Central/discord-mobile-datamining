// === Module 11957: openMediaModalOverlayAltTextSheet ===

// Module 11957 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11958, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};