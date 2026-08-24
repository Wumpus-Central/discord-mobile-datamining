// discord_app/stores/channel_notices/HubLinkNoticeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_0 from "../../modules/hotspot/HotspotStore.tsx";
import closure_1 from "../GuildStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";

function checkGuildIsHub(id) {
  const guild = store.getGuild(id);
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
let c3 = false;
const Store = initializeDefault.Store;
class HubLinkNoticeStore extends Store {
}
const prototype = HubLinkNoticeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_1, closure_0);
  const items = [closure_0];
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
const hubLinkNoticeStore = new HubLinkNoticeStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    const obj = arg0.guilds[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp2 = checkGuildIsHub;
      if (checkGuildIsHub(tmp.id)) {
        let tmp3 = obj;
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = store.getGuild(guild.guild.id);
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
const result = require("set").fileFinishedImporting("stores/channel_notices/HubLinkNoticeStore.tsx");

export default hubLinkNoticeStore;