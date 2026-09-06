// === Module 5575: InitialMemberVerificationStore ===

// Module 5575 (InitialMemberVerificationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const map = new Map();
const Store = initializeDefault.Store;
class InitialMemberVerificationStore extends Store {
}
InitialMemberVerificationStore.prototype["getInitialVerificationState"] = function getInitialVerificationState(arg0) {
  let tmp = null;
  if (null != arg0) {
    value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
InitialMemberVerificationStore.displayName = "InitialMemberVerificationStore";
const initialMemberVerificationStore = new InitialMemberVerificationStore(DispatcherDefault, {
  SET_INITIAL_MEMBER_VERIFICATION: function handleSetInitialState(guildId) {
    guildId = guildId.guildId;
    if (!map.has(guildId)) {
      const result = map.set(guildId, guildId.state);
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/InitialMemberVerificationStore.tsx");

export default initialMemberVerificationStore;
export const setInitialVerification = function setInitialVerification(guildId, state) {
  const obj = { type: "SET_INITIAL_MEMBER_VERIFICATION", guildId, state };
  obj.dispatch(obj);
};