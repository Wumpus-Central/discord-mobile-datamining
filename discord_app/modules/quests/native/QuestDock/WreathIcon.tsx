// === Module 15162: WreathIcon ===

// Module 15162 (WreathIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod15163 from "module_15163" /* 15163 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/WreathIcon.tsx");

export default function WreathIcon(color) {
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15163, color: INTERACTIVE_TEXT_DEFAULT, style: color.style });
};