// === Module 12222: useGuildPowerupColorConfig ===

// Module 12222 (useGuildPowerupColorConfig)
import nativeDefault from "native" /* 587 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  let obj;
  const tmp = arg0;
  if (tmp) {
    obj = { textColor: "text-default", iconColor: nativeDefault.colors.TEXT_DEFAULT };
    const obj2 = { textColor: "text-default", iconColor: nativeDefault.colors.TEXT_DEFAULT };
  } else {
    obj = { textColor: "text-muted", iconColor: nativeDefault.colors.TEXT_MUTED };
  }
  return obj;
};