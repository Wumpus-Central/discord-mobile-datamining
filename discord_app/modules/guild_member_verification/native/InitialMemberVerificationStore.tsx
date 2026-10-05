// discord_app/modules/guild_member_verification/native/InitialMemberVerificationStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const map = new Map();
const Store = get_initializedDefault.Store;
class InitialMemberVerificationStore extends Store {
  getInitialVerificationState(arg0) {
    let tmp = null;
    if (null != arg0) {
      let value = map.get(arg0);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
}
const prototype = InitialMemberVerificationStore.prototype;
InitialMemberVerificationStore.displayName = "InitialMemberVerificationStore";
let obj = {
  SET_INITIAL_MEMBER_VERIFICATION: function handleSetInitialState(guildId) {
    guildId = guildId.guildId;
    const state = guildId.state;
    if (!map.has(guildId)) {
      const result = map.set(guildId, state);
    }
  },
};
const initialMemberVerificationStore = new InitialMemberVerificationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/InitialMemberVerificationStore.tsx");

export default initialMemberVerificationStore;
export const setInitialVerification = function setInitialVerification(guildId, state) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_INITIAL_MEMBER_VERIFICATION", guildId, state };
  obj.dispatch(obj2);
};
