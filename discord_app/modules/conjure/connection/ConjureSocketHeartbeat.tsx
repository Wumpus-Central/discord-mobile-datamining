// discord_app/modules/conjure/connection/ConjureSocketHeartbeat.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/connection/ConjureSocketHeartbeat.tsx");
class ConjureSocketHeartbeat {
  constructor(arg0, arg1) {
    merged = Object.assign({ interval: null, expeditedTimeout: null, acked: true, pongSeen: false });
    merged.sendPing = global;
    merged.onDead = require;
    return merged;
  }
}
const prototype = ConjureSocketHeartbeat.prototype;
prototype["start"] = function start() {
  const self = this;
  this.stop();
  this.acked = true;
  this.pongSeen = false;
  this.interval = setInterval(() => self.beat(), 30000);
  this.beat();
};
prototype["stop"] = function stop() {
  const self = this;
  if (null != this.interval) {
    const _clearInterval = clearInterval;
    clearInterval(self.interval);
  }
  self.interval = null;
  self.clearExpedited();
};
prototype["received"] = function received() {
  this.acked = true;
  this.clearExpedited();
};
prototype["pong"] = function pong() {
  this.pongSeen = true;
  this.received();
};
prototype["expedite"] = function expedite() {
  const self = this;
  if (tmp) {
    self.acked = false;
    self.sendPing();
    self.clearExpedited();
    const _setTimeout = setTimeout;
    self.expeditedTimeout = setTimeout(() => {
      self.expeditedTimeout = null;
      if (!self.acked) {
        self.dead();
      }
    }, 5000);
  }
};
prototype["beat"] = function beat() {
  const self = this;
  if (!this.acked) {
    if (self.pongSeen) {
      if (null == self.expeditedTimeout) {
        self.dead();
      }
    }
  }
  self.acked = false;
  self.sendPing();
};
prototype["dead"] = function dead() {
  this.stop();
  this.onDead();
};
prototype["clearExpedited"] = function clearExpedited() {
  const self = this;
  if (null != this.expeditedTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.expeditedTimeout);
  }
  self.expeditedTimeout = null;
};

export const CONJURE_HEARTBEAT_INTERVAL_MS = 30000;
export const CONJURE_EXPEDITED_HEARTBEAT_TIMEOUT_MS = 5000;
export { ConjureSocketHeartbeat };
