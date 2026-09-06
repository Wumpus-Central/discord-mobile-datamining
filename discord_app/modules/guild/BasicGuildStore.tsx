// === Module 7955: BasicGuildStore ===

// Module 7955 (BasicGuildStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let closure_0 = 0;
const dependencyMap = {};
const Store = initializeDefault.Store;
class BasicGuildStore extends Store {
}
const prototype = BasicGuildStore.prototype;
prototype["getGuild"] = function getGuild(arg0) {
  if (null != dependencyMap[arg0]) {
    if (!("type" in tmp)) {
      return tmp;
    }
  }
};
prototype["isGuildFetching"] = function isGuildFetching(arg0) {
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "type" in tmp;
  }
  if (tmp2) {
    tmp2 = "loading" === tmp.type;
  }
  return tmp2;
};
prototype["getGuildOrStatus"] = function getGuildOrStatus(arg0) {
  return dependencyMap[arg0];
};
prototype["getVersion"] = function getVersion() {
  return closure_0;
};
BasicGuildStore.displayName = "BasicGuildStore";
const basicGuildStore = new BasicGuildStore(DispatcherDefault, {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/BasicGuildStore.tsx");

export default basicGuildStore;