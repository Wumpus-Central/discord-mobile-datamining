// discord_app/modules/quests/native/QuestDock/WreathIcon.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../../../design/components/Icon/native/BaseIconImage.tsx";
import registerAsset from "../../../../../_runtime/14947_registerAsset.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/WreathIcon.tsx");

export default function WreathIcon(color) {
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, {
    source: registerAsset,
    color: INTERACTIVE_TEXT_DEFAULT,
    style: color.style,
  });
}
