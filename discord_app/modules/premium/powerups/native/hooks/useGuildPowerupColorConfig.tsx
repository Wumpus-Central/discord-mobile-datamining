// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  if (arg0) {
    let obj = { textColor: "text-default", iconColor: nativeDefault.colors.TEXT_DEFAULT };
  } else {
    obj = { textColor: "text-muted", iconColor: nativeDefault.colors.TEXT_MUTED };
  }
  return obj;
}
