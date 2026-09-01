// discord_app/modules/gateway/LocalPresenceStateManager.tsx
import shouldCommitDefault from "../../lib/StateManager.tsx";
import rateLimitDefault from "../../lib/rateLimit.tsx";
import closure_2 from "../../stores/SelfPresenceStore.tsx";

shouldCommitDefault;
class LocalPresenceStateManager extends tmp2 {
  constructor(arg0) {
    tmp3 = new LocalPresenceStateManager(false, tmp2, tmp, new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp3.switchingAccounts = false;
    emitPresenceUpdate = tmp3.emitPresenceUpdate;
    tmp4 = require("rateLimit");
    tmp3.didCommit = require("../../../_runtime/00005_asyncGeneratorStep.js");
    tmp3.socket = global;
    return tmp3;
  }
}
const prototype = LocalPresenceStateManager.prototype;
prototype["getInitialState"] = function getInitialState() {
  return store.getLocalPresence();
};
prototype["getNextState"] = function getNextState() {
  return store.getLocalPresence();
};
prototype["shouldCommit"] = function shouldCommit() {
  const socket = this.socket;
  return socket.isSessionEstablished();
};
prototype["emitPresenceUpdate"] = function emitPresenceUpdate(state) {
  const socket = this.socket;
  socket.presenceUpdate(state.status, state.since, state.activities, state.afk);
};
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  this.update({}, !this.switchingAccounts);
  this.switchingAccounts = false;
};
prototype["handleAccountSwitch"] = function handleAccountSwitch() {
  this.switchingAccounts = true;
  this.reset();
  this.emitPresenceUpdate(this.getState());
};
const result = require("set").fileFinishedImporting("modules/gateway/LocalPresenceStateManager.tsx");

export default LocalPresenceStateManager;
