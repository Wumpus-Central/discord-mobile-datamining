// === Module 13802: GuildPopoutStore ===

// Module 13802 (GuildPopoutStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 6854 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const _false = { UNSET: "unset", FETCHING: "fetching", FAILED: "failed", SUCCEEDED: "succeeded" };
const React3 = { guilds: {} };
const Store = get_initializedDefault.Store;
class GuildPopoutStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  isFetchingGuild(arg0) {
    return null != tmp && tmp.fetchState === constants.FETCHING;
  }
  getGuild(arg0) {
    let guild = null;
    if (null != closure_4.guilds[arg0]) {
      guild = tmp.guild;
    }
    return guild;
  }
  hasFetchFailed(arg0) {
    return null != tmp && tmp.fetchState === constants.FAILED;
  }
}
const prototype = GuildPopoutStore.prototype;
GuildPopoutStore.displayName = "GuildPopoutStore";
let obj = {
  GUILD_POPOUT_FETCH_START: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    const guilds = closure_4.guilds;
    const obj = { fetchState: constants.FETCHING };
    const merged = Object.assign(closure_4.guilds[guildId]);
    guilds[guildId] = obj;
  },
  GUILD_POPOUT_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    let discoverableGuild;
    guildId = guildId.guildId;
    const guild = guildId.guild;
    const obj2 = { guild: discoverableGuild, fetchState: constants.SUCCEEDED };
    const obj = GuildDiscoveryUtils;
    discoverableGuild = obj.makeDiscoverableGuild(guild);
    const guilds = closure_4.guilds;
    const merged = Object.assign(closure_4.guilds[guildId]);
    guilds[guildId] = obj2;
  },
  GUILD_POPOUT_FETCH_FAILURE: function handleFetchFailure(guildId) {
    guildId = guildId.guildId;
    const guilds = closure_4.guilds;
    const obj = { fetchState: constants.FAILED };
    const merged = Object.assign(closure_4.guilds[guildId]);
    guilds[guildId] = obj;
  }
};
const guildPopoutStore = new GuildPopoutStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_profile/GuildPopoutStore.tsx");

export default guildPopoutStore;