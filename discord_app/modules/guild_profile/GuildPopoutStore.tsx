// discord_app/modules/guild_profile/GuildPopoutStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildDiscoveryUtils from "../../utils/GuildDiscoveryUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const guildPopoutStore = new GuildPopoutStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_profile/GuildPopoutStore.tsx");

export default guildPopoutStore;
