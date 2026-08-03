// === Module 13189: initialize ===

// Module 13189 (initialize)
import fetchFingerprint from "fetchFingerprint";
import { Store } from "initialize";

const require = arg1;
let closure_3 = { UNSET: "unset", FETCHING: "fetching", FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_4 = { guilds: {} };
class GuildPopoutStore extends Store {
}
const prototype = GuildPopoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint);
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
const guildPopoutStore = new GuildPopoutStore(require("dispatcher"), {
  GUILD_POPOUT_FETCH_START: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(closure_4.guilds[guildId]);
    obj.fetchState = constants.FETCHING;
    closure_4.guilds[guildId] = obj;
  },
  GUILD_POPOUT_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = require(5855) /* _startLurking */;
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
const result = require("initialize").fileFinishedImporting("modules/guild_profile/GuildPopoutStore.tsx");

export default guildPopoutStore;