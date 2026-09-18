// === Module 12791: useGuildPowerupColorConfig ===

// Module 12791 (useGuildPowerupColorConfig)
import nativeDefault from "native" /* 576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  if (arg0) {
    const obj2 = { textColor: "text-default", iconColor: nativeDefault.colors.TEXT_DEFAULT };
    let obj = obj2;
  } else {
    obj = { textColor: "text-muted", iconColor: nativeDefault.colors.TEXT_MUTED };
  }
  return obj;
};