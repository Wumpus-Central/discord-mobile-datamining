// === Module 13758: HubLinkNoticeStore ===

// Module 13758 (HubLinkNoticeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HotspotStore from "hotspot/HotspotStore" /* 7214 */;
import GuildStore from "GuildStore" /* 1979 */;

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
const GuildFeatures = fn(1074).GuildFeatures;
let c3 = false;
const Store = initializeDefault.Store;
class HubLinkNoticeStore extends Store {
}
const prototype = HubLinkNoticeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore, HotspotStore);
  const items = [HotspotStore];
  this.syncWith(items, handleHotspotUpdates);
};
prototype["channelNoticePredicate"] = function channelNoticePredicate(features) {
  features = features.features;
  let hasItem = features.has(GuildFeatures.LINKED_TO_HUB);
  if (hasItem) {
    hasItem = !c3;
  }
  return hasItem;
};
HubLinkNoticeStore.displayName = "HubLinkNoticeStore";
const hubLinkNoticeStore = new HubLinkNoticeStore(DispatcherDefault, {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/channel_notices/HubLinkNoticeStore.tsx");

export default hubLinkNoticeStore;