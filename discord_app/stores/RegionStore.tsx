// === Module 16393: initialize ===

// Module 16393 (initialize)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "createGuildRecordFromRust" /* 1909 */;

let c3 = null;
let closure_4 = {};
const Store = initializeDefault.Store;
class RegionStore extends Store {
}
const prototype = RegionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2);
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
      found = applyDefault.sample(regions);
      const obj = applyDefault;
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
    sampleResult = applyDefault.sample(regions);
    const obj = applyDefault;
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
    let tmp = table[guildId];
  } else {
    tmp = c3;
  }
  return tmp;
};
RegionStore.displayName = "RegionStore";
const regionStore = new RegionStore(dispatcherDefault, {
  LOAD_REGIONS: function handleLoadRegions(regions) {
    const sortByResult = applyDefault.sortBy(regions.regions, (name) => name.name);
    if (null != regions.guildId) {
      closure_4[regions.guildId] = sortByResult;
    } else {
      c3 = sortByResult;
    }
  },
  GUILD_DELETE: function handleDeleteGuild(arg0) {
    delete tmp2[tmp];
  }
});
const result = require("set").fileFinishedImporting("stores/RegionStore.tsx");

export default regionStore;