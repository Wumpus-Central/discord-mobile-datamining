// === Module 11653: useGuildPowerupColorConfig ===

// Module 11653 (useGuildPowerupColorConfig)
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  if (arg0) {
    let obj = { textColor: "text-default", iconColor: null };
    obj[1] = importDefault(712).colors.TEXT_DEFAULT;
  } else {
    obj = { textColor: "text-muted", iconColor: null };
    obj[1] = importDefault(712).colors.TEXT_MUTED;
  }
  return obj;
};