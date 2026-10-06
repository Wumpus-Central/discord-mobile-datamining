// === Module 13585: HubLinkNoticeStore ===

// Module 13585 (HubLinkNoticeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HotspotStore from "hotspot/HotspotStore" /* 6720 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

function checkGuildIsHub(id) {
  const guild = GuildStore.getGuild(id);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let flag = features.has(GuildFeatures.HUB);
    if (flag) {
      c3 = true;
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function handleHotspotUpdates() {
  return true;
}
const GuildFeatures = Constants.GuildFeatures;
let c3 = false;
const Store = get_initializedDefault.Store;
class HubLinkNoticeStore extends Store {
  initialize() {
    this.waitFor(GuildStore, HotspotStore);
    const items = [HotspotStore];
    this.syncWith(items, handleHotspotUpdates);
  }
  channelNoticePredicate(features) {
    features = features.features;
    const hasItem = features.has(GuildFeatures.LINKED_TO_HUB) && !c3;
    return hasItem;
  }
}
const prototype = HubLinkNoticeStore.prototype;
HubLinkNoticeStore.displayName = "HubLinkNoticeStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    const obj = arg0.guilds[Symbol.iterator]();
    while (obj !== undefined) {
      if (checkGuildIsHub(tmp.id)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = GuildStore.getGuild(guild.guild.id);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      let flag = features.has(GuildFeatures.HUB);
      if (flag) {
        c3 = true;
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  }
};
const hubLinkNoticeStore = new HubLinkNoticeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/channel_notices/HubLinkNoticeStore.tsx");

export default hubLinkNoticeStore;