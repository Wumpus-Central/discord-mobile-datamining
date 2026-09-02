// === Module 11355: openMediaModalOverlayAltTextSheet ===

// Module 11355 (openMediaModalOverlayAltTextSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11356, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};