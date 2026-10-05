// discord_app/stores/channel_notices/HubLinkNoticeStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HotspotStore from "../../modules/hotspot/HotspotStore.tsx";
import GuildStore from "../GuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const hubLinkNoticeStore = new HubLinkNoticeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/channel_notices/HubLinkNoticeStore.tsx");

export default hubLinkNoticeStore;
