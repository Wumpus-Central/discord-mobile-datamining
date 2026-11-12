// === Module 15698: conjureWorkerOrigin ===

// Module 15698 (conjureWorkerOrigin)
import conjureLocalDev from "conjureLocalDev" /* 7273 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/connection/conjureWorkerOrigin.tsx");

export function getConjureWorkerOrigin() {
  let conjureTunnelWorkerOrigin = conjureLocalDev.getConjureTunnelWorkerOrigin();
  if (null == conjureTunnelWorkerOrigin) {
    let str = "http://localhost:8787";
    if (!tmpResult.isConjureLocalDev()) {
      const _window = window;
      let str3 = "https://conjure.city";
      if (RELEASE_CHANNEL.startsWith("staging")) {
        str3 = "https://conjure.town";
      }
      str = str3;
    }
    conjureTunnelWorkerOrigin = str;
    tmpResult = conjureLocalDev;
  }
  return conjureTunnelWorkerOrigin;
}