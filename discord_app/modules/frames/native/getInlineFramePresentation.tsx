// discord_app/modules/frames/native/getInlineFramePresentation.tsx
import FramesConstants from "../FramesConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const result = size.fileFinishedImporting("modules/frames/native/getInlineFramePresentation.tsx");

export default function getInlineFramePresentation(top, arg1) {
  let num = 0;
  ({ bottom, left, right } = top);
  if (!arg1) {
    num = top.top;
  }
  const rect = {
    top: { disable: false, override: num },
    bottom: { disable: false, override: bottom },
    left: { disable: false, override: left },
    right: { disable: false, override: right },
  };
  return { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: rect, landscapeSafeAreasConfig: rect };
}
