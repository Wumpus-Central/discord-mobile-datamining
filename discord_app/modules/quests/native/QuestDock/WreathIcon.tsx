// discord_app/modules/quests/native/QuestDock/WreathIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../../../design/components/Icon/native/BaseIconImage.tsx";
import _mod15105 from "../../../../../_runtime/metro/15105__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15105, color: INTERACTIVE_TEXT_DEFAULT, style: color.style });
}
