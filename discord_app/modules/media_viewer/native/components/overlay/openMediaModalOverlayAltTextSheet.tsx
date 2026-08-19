// === Module 10727: openMediaModalOverlayAltTextSheet ===

// Module 10727 (openMediaModalOverlayAltTextSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10728, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};