// === Module 7797: getGuild ===

// Module 7797 (getGuild)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = 0;
let closure_1 = {};
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
  return c0;
};
BasicGuildStore.displayName = "BasicGuildStore";
const basicGuildStore = new BasicGuildStore(dispatcherDefault, {
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
const result = require("set").fileFinishedImporting("modules/guild/BasicGuildStore.tsx");

export default basicGuildStore;