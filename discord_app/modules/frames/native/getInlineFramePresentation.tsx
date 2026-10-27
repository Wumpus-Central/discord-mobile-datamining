// === Module 11778: getInlineFramePresentation ===

// Module 11778 (getInlineFramePresentation)
import FramesConstants from "FramesConstants" /* 6777 */;
import size from "module_2" /* 2 */;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const result = size.fileFinishedImporting("modules/frames/native/getInlineFramePresentation.tsx");

export default function getInlineFramePresentation(top, arg1) {
  let num = 0;
  ({ bottom, left, right } = top);
  if (!arg1) {
    num = top.top;
  }
  const rect = { top: { disable: false, override: num }, bottom: { disable: false, override: bottom }, left: { disable: false, override: left }, right: { disable: false, override: right } };
  return { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: rect, landscapeSafeAreasConfig: rect };
};