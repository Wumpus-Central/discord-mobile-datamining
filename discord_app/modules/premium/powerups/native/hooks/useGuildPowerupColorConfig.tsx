// === Module 12548: useGuildPowerupColorConfig ===

// Module 12548 (useGuildPowerupColorConfig)
import nativeDefault from "native" /* 576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  if (arg0) {
    let obj = { textColor: "text-default", iconColor: nativeDefault.colors.TEXT_DEFAULT };
  } else {
    obj = { textColor: "text-muted", iconColor: nativeDefault.colors.TEXT_MUTED };
  }
  return obj;
};