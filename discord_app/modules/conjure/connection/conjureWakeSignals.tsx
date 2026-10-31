// === Module 10973: conjureWakeSignals ===

// Module 10973 (conjureWakeSignals)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import NetworkUtilsDefault from "NetworkUtils" /* 1475 */;
import DiscordNativeDefault from "DiscordNative" /* 4825 */;
import size from "module_2" /* 2 */;

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