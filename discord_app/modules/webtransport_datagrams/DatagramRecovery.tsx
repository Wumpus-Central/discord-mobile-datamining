// === Module 15047: DatagramRecovery ===

// Module 15047 (DatagramRecovery)
import BackoffDefault from "Backoff" /* 559 */;
import size from "module_2" /* 2 */;

let c2 = 120000;
const result = size.fileFinishedImporting("modules/webtransport_datagrams/DatagramRecovery.tsx");
class DatagramRecovery {
  constructor() {
    merged = Object.assign({ backoff: null, attempts: 0, startedAt: null, stableTimer: null });
    tmp2 = new closure_0(closure_1[0])(1000, 30000, true);
    merged[0] = tmp2;
    return merged;
  }
}
const prototype = DatagramRecovery.prototype;
prototype["schedule"] = function schedule(arg0) {
  const self = this;
  closure_0 = arg0;
  this.cancel();
  const nowResult = performance.now();
  if (this.startedAt == null) {
    self.startedAt = nowResult;
  }
  const sum = self.startedAt + c2;
  dependencyMap = sum;
  if (!tmp4) {
    self.attempts = self.attempts + 1;
    const backoff = self.backoff;
    if (nowResult + backoff.fail(() => {
      if (performance.now() <= sum) {
        closure_0();
      }
    }) > sum) {
      const backoff2 = self.backoff;
      backoff2.cancel();
    }
  }
};
prototype["connected"] = function connected() {
  const self = this;
  this.cancel();
  this.stableTimer = setTimeout(() => self.reset(), 30000);
};
prototype["reset"] = function reset() {
  this.cancel();
  const backoff = this.backoff;
  backoff.succeed();
  this.attempts = 0;
  this.startedAt = null;
};
prototype["cancel"] = function cancel() {
  const self = this;
  const backoff = this.backoff;
  backoff.cancel();
  if (null != this.stableTimer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.stableTimer);
    self.stableTimer = null;
  }
};

export default DatagramRecovery;
export const DATAGRAM_RECOVERY_MIN_DELAY_MS = 1000;
export const DATAGRAM_RECOVERY_MAX_DELAY_MS = 30000;
export const DATAGRAM_RECOVERY_MAX_ATTEMPTS = 6;
export const DATAGRAM_RECOVERY_TIME_BUDGET_MS = 120000;
export const DATAGRAM_RECOVERY_STABLE_MS = 30000;