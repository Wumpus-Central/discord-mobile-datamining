// discord_app/stores/RegionStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import GuildStore from "GuildStore.tsx";

let c3 = null;
let closure_4 = {};
const Store = initializeDefault.Store;
class RegionStore extends Store {}
const prototype = RegionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore);
};
prototype["getOptimalRegion"] = function getOptimalRegion(guildId) {
  let tmp = guildId;
  if (guildId === undefined) {
    tmp = null;
  }
  const regions = this.getRegions(tmp);
  let tmp2 = null;
  if (null != regions) {
    let found = regions.find((optimal) => optimal.optimal);
    if (found == null) {
      found = _modDef12.sample(regions);
    }
    tmp2 = found;
  }
  return tmp2;
};
prototype["getOptimalRegionId"] = function getOptimalRegionId(guildId) {
  let tmp = guildId;
  if (guildId === undefined) {
    tmp = null;
  }
  const optimalRegion = this.getOptimalRegion(tmp);
  let id = null;
  if (null != optimalRegion) {
    id = optimalRegion.id;
  }
  return id;
};
prototype["getRandomRegion"] = function getRandomRegion(guildId) {
  let tmp = guildId;
  if (guildId === undefined) {
    tmp = null;
  }
  const regions = this.getRegions(tmp);
  let sampleResult = null;
  if (null != regions) {
    sampleResult = _modDef12.sample(regions);
  }
  return sampleResult;
};
prototype["getRandomRegionId"] = function getRandomRegionId(guildId) {
  let tmp = guildId;
  if (guildId === undefined) {
    tmp = null;
  }
  const randomRegion = this.getRandomRegion(tmp);
  let id = null;
  if (null != randomRegion) {
    id = randomRegion.id;
  }
  return id;
};
prototype["getRegions"] = function getRegions(guildId) {
  if (null != guildId) {
    let tmp = closure_4[guildId];
  } else {
    tmp = c3;
  }
  return tmp;
};
RegionStore.displayName = "RegionStore";
const regionStore = new RegionStore(DispatcherDefault, {
  LOAD_REGIONS: function handleLoadRegions(regions) {
    const sortByResult = _modDef12.sortBy(regions.regions, (name) => name.name);
    if (null != regions.guildId) {
      closure_4[regions.guildId] = sortByResult;
    } else {
      c3 = sortByResult;
    }
  },
  GUILD_DELETE: function handleDeleteGuild(arg0) {
    delete tmp2[tmp];
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/RegionStore.tsx");

export default regionStore;
