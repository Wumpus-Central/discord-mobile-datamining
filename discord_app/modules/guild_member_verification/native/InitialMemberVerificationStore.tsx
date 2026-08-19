// discord_app/modules/guild_member_verification/native/InitialMemberVerificationStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";

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
let result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/InitialMemberVerificationStore.tsx");

export default initialMemberVerificationStore;
export const setInitialVerification = function setInitialVerification(guildId, state) {
  const obj = { type: "SET_INITIAL_MEMBER_VERIFICATION", guildId, state };
  obj.dispatch(obj);
};