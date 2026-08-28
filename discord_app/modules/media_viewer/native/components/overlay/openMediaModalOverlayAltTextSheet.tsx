// === Module 11068: openMediaModalOverlayAltTextSheet ===

// Module 11068 (openMediaModalOverlayAltTextSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11069, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};