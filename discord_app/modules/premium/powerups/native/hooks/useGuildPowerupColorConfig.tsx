// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;

const result = set.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  if (arg0) {
    let obj = { textColor: "text-default", iconColor: null };
    obj[1] = ThemesDefault.colors.TEXT_DEFAULT;
  } else {
    obj = { textColor: "text-muted", iconColor: null };
    obj[1] = ThemesDefault.colors.TEXT_MUTED;
  }
  return obj;
};