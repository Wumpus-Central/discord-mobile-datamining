// === Module 13521: initialize ===

// Module 13521 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _startLurking from "_startLurking" /* 6065 */;
import closure_2 from "fetchFingerprint" /* 1218 */;

require = arg1;
let closure_3 = { UNSET: "unset", FETCHING: "fetching", FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_4 = { guilds: {} };
const Store = initializeDefault.Store;
class GuildPopoutStore extends Store {
}
const prototype = GuildPopoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2);
};
prototype["isFetchingGuild"] = function isFetchingGuild(arg0) {
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = tmp.fetchState === constants.FETCHING;
  }
  return tmp2;
};
prototype["getGuild"] = function getGuild(arg0) {
  let guild = null;
  if (null != closure_4.guilds[arg0]) {
    guild = tmp.guild;
  }
  return guild;
};
prototype["hasFetchFailed"] = function hasFetchFailed(arg0) {
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = tmp.fetchState === constants.FAILED;
  }
  return tmp2;
};
GuildPopoutStore.displayName = "GuildPopoutStore";
const guildPopoutStore = new GuildPopoutStore(dispatcherDefault, {
  GUILD_POPOUT_FETCH_START: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(closure_4.guilds[guildId]);
    obj.fetchState = constants.FETCHING;
    closure_4.guilds[guildId] = obj;
  },
  GUILD_POPOUT_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = _startLurking;
    obj = {};
    const discoverableGuild = obj.makeDiscoverableGuild(guildId.guild);
    const merged = Object.assign(closure_4.guilds[guildId]);
    obj.guild = discoverableGuild;
    obj.fetchState = constants.SUCCEEDED;
    closure_4.guilds[guildId] = obj;
  },
  GUILD_POPOUT_FETCH_FAILURE: function handleFetchFailure(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(closure_4.guilds[guildId]);
    obj.fetchState = constants.FAILED;
    closure_4.guilds[guildId] = obj;
  }
});
const result = require("set").fileFinishedImporting("modules/guild_profile/GuildPopoutStore.tsx");

export default guildPopoutStore;