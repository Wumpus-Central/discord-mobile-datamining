// discord_app/stores/RegionStore.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { Store } from "initialize";

let c3 = null;
let closure_4 = {};
class RegionStore extends Store {
}
const prototype = RegionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(createGuildRecordFromRust);
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
      found = require("../../_runtime/00012_apply.js").sample(regions);
      const obj = require("../../_runtime/00012_apply.js");
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
    sampleResult = require("../../_runtime/00012_apply.js").sample(regions);
    const obj = require("../../_runtime/00012_apply.js");
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
const regionStore = new RegionStore(require("dispatcher"), {
  LOAD_REGIONS: function handleLoadRegions(regions) {
    const sortByResult = require("../../_runtime/00012_apply.js").sortBy(regions.regions, (name) => name.name);
    if (null != regions.guildId) {
      closure_4[regions.guildId] = sortByResult;
    } else {
      let c3 = sortByResult;
    }
  },
  GUILD_DELETE: function handleDeleteGuild(arg0) {
    delete tmp2[tmp];
  }
});
const result = require("initialize").fileFinishedImporting("stores/RegionStore.tsx");

export default regionStore;