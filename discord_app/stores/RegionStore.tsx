// === Module 17010: RegionStore ===

// Module 17010 (RegionStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

let c3 = null;
const React3 = {};
const Store = get_initializedDefault.Store;
class RegionStore extends Store {
  initialize() {
    this.waitFor(GuildStore);
  }
  getOptimalRegion() {
    let tmp = guildId;
    if (guildId === undefined) {
      tmp = null;
    }
    const regions = this.getRegions(tmp);
    let tmp2 = null;
    if (null != regions) {
      let found = regions.find((optimal) => optimal.optimal);
      if (found == null) {
        const obj = _modDef12;
        found = obj.sample(regions);
      }
      tmp2 = found;
    }
    return tmp2;
  }
  getOptimalRegionId() {
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
  }
  getRandomRegion() {
    let tmp = guildId;
    if (guildId === undefined) {
      tmp = null;
    }
    const regions = this.getRegions(tmp);
    let sampleResult = null;
    if (null != regions) {
      const obj = _modDef12;
      sampleResult = obj.sample(regions);
    }
    return sampleResult;
  }
  getRandomRegionId() {
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
  }
  getRegions(guildId) {
    let tmp;
    if (null != guildId) {
      tmp = closure_4[guildId];
    } else {
      tmp = c3;
    }
    return tmp;
  }
}
const prototype = RegionStore.prototype;
RegionStore.displayName = "RegionStore";
let obj = {
  LOAD_REGIONS: function handleLoadRegions(regions) {
    const obj = _modDef12;
    const sortByResult = obj.sortBy(regions.regions, (name) => name.name);
    if (null != regions.guildId) {
      closure_4[regions.guildId] = sortByResult;
    } else {
      c3 = sortByResult;
    }
  },
  GUILD_DELETE: function handleDeleteGuild(arg0) {
    delete closure_4[arg0.guild.id];
  }
};
const regionStore = new RegionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/RegionStore.tsx");

export default regionStore;