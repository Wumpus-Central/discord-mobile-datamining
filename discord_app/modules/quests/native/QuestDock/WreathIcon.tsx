// discord_app/modules/quests/native/QuestDock/WreathIcon.tsx
import "noop";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../_runtime/14420_registerAsset.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { BaseIconImage } from "../../../../design/components/Icon/native/BaseIconImage.tsx";

const require = arg1;
const result = require("Themes").fileFinishedImporting("modules/quests/native/QuestDock/WreathIcon.tsx");

export default function WreathIcon(color) {
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = Themes.colors.INTERACTIVE_TEXT_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = registerAsset;
  obj[1] = INTERACTIVE_TEXT_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: null, color: null, style: null });
};