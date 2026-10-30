// discord_app/modules/conjure/connection/conjureWakeSignals.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NetworkUtilsDefault from "../../../utils/NetworkUtils.tsx";
import DiscordNativeDefault from "../../../lib/DiscordNative.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3 = false;
const result = size.fileFinishedImporting("modules/conjure/connection/conjureWakeSignals.tsx");

export function listenForConjureWake(handleWake) {
  if (!c3) {
    c3 = true;
    if (obj.isDesktop()) {
      const powerMonitor = DiscordNativeDefault.powerMonitor;
      powerMonitor.on("resume", handleWake);
    }
    obj = PlatformUtils;
    NetworkUtilsDefault.addOnlineCallback(handleWake);
    const _document = document;
    if (typeof document !== "undefined") {
      const _document2 = document;
      const listener = document.addEventListener("visibilitychange", () => {
        if ("visible" === document.visibilityState) {
          handleWake();
        }
      });
    }
  }
}
