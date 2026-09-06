// discord_app/modules/guild_profile/GuildPopoutStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildDiscoveryUtils from "../../utils/GuildDiscoveryUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
const constants = { UNSET: "unset", FETCHING: "fetching", FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_4 = { guilds: {} };
const Store = initializeDefault.Store;
class GuildPopoutStore extends Store {}
const prototype = GuildPopoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
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
const guildPopoutStore = new GuildPopoutStore(DispatcherDefault, {
  GUILD_POPOUT_FETCH_START: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(closure_4.guilds[guildId]);
    obj.fetchState = constants.FETCHING;
    closure_4.guilds[guildId] = obj;
  },
  GUILD_POPOUT_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    guildId = guildId.guildId;
    const obj = {};
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/GuildPopoutStore.tsx");

export default guildPopoutStore;
