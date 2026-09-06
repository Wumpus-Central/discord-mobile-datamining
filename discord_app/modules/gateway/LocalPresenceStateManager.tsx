// discord_app/modules/gateway/LocalPresenceStateManager.tsx
import rateLimitDefault from "../../lib/rateLimit.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";
import StateManager from "../../lib/StateManager.tsx";

class LocalPresenceStateManager extends tmp2 {
  constructor(arg0) {
    tmp3 = new LocalPresenceStateManager(false, tmp2, tmp, new.target, new.target);
    tmp3.switchingAccounts = false;
    emitPresenceUpdate = tmp3.emitPresenceUpdate;
    tmp4 = closure_0(closure_1[2]);
    tmp3.didCommit = tmp4(5, 20000, emitPresenceUpdate.bind(tmp3));
    tmp3.socket = global;
    return tmp3;
  }
}
const prototype = LocalPresenceStateManager.prototype;
prototype["getInitialState"] = function getInitialState() {
  return SelfPresenceStore.getLocalPresence();
};
prototype["getNextState"] = function getNextState() {
  return SelfPresenceStore.getLocalPresence();
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/LocalPresenceStateManager.tsx");

export default LocalPresenceStateManager;
