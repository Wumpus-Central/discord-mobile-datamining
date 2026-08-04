// discord_app/stores/channel_notices/HubLinkNoticeStore.tsx
import set from "set";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";
import { Store } from "initialize";

function checkGuildIsHub(id) {
  const guild = store.getGuild(id);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let flag = features.has(GuildFeatures.HUB);
    if (flag) {
      let c3 = true;
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
class HubLinkNoticeStore extends Store {
}
const prototype = HubLinkNoticeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(createGuildRecordFromRust, set);
  const items = [set];
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
const hubLinkNoticeStore = new HubLinkNoticeStore(require("dispatcher"), {
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
        let c3 = true;
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  }
});
const result = require("ME").fileFinishedImporting("stores/channel_notices/HubLinkNoticeStore.tsx");

export default hubLinkNoticeStore;