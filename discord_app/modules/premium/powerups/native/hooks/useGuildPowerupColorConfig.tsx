import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  if (arg0) {
    let obj = { textColor: "text-default", iconColor: null };
    obj[1] = Themes.colors.TEXT_DEFAULT;
  } else {
    obj = { textColor: "text-muted", iconColor: null };
    obj[1] = Themes.colors.TEXT_MUTED;
  }
  return obj;
};