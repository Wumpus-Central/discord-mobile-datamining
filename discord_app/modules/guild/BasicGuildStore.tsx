// === Module 7625: BasicGuildStore ===

// Module 7625 (BasicGuildStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0 = 0;
const Store = get_initializedDefault.Store;
class BasicGuildStore extends Store {
  getGuild(arg0) {
    if (null != closure_1[arg0]) {
      if (!("type" in closure_1[arg0])) {
        return closure_1[arg0];
      }
    }
  }
  isGuildFetching(arg0) {
    return null != tmp && "type" in tmp && "loading" === tmp.type;
  }
  getGuildOrStatus(guild_id) {
    return closure_1[guild_id];
  }
  getVersion() {
    return closure_0;
  }
}
const prototype = BasicGuildStore.prototype;
BasicGuildStore.displayName = "BasicGuildStore";
const obj = {
  BASIC_GUILD_FETCH: function handleBasicGuildFetch(guildId) {
    closure_1[guildId.guildId] = { type: "loading" };
    return false;
  },
  BASIC_GUILD_FETCH_SUCCESS: function handleBasicGuildFetchSuccess(guildId) {
    closure_1[guildId.guildId] = guildId.guildInfo;
    closure_0 = closure_0 + 1;
  },
  BASIC_GUILD_FETCH_FAILURE: function handleBasicGuildFetchFailure(guildId) {
    closure_1[guildId.guildId] = { type: "failed" };
    return false;
  }
};
const basicGuildStore = new BasicGuildStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild/BasicGuildStore.tsx");

export default basicGuildStore;