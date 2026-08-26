// === Module 8642: map ===

// Module 8642 (map)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const map = new Map();
const Store = initializeDefault.Store;
class InitialMemberVerificationStore extends Store {
}
InitialMemberVerificationStore.prototype["getInitialVerificationState"] = function getInitialVerificationState(closure_0) {
  let tmp = null;
  if (null != closure_0) {
    let value = map.get(closure_0);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
InitialMemberVerificationStore.displayName = "InitialMemberVerificationStore";
const initialMemberVerificationStore = new InitialMemberVerificationStore(dispatcherDefault, {
  SET_INITIAL_MEMBER_VERIFICATION: function handleSetInitialState(guildId) {
    guildId = guildId.guildId;
    if (!map.has(guildId)) {
      const result = map.set(guildId, guildId.state);
    }
  }
});
let result = require("set").fileFinishedImporting("modules/guild_member_verification/native/InitialMemberVerificationStore.tsx");

export default initialMemberVerificationStore;
export const setInitialVerification = function setInitialVerification(guildId, state) {
  let obj = dispatcherDefault;
  obj = { type: "SET_INITIAL_MEMBER_VERIFICATION", guildId, state };
  obj.dispatch(obj);
};