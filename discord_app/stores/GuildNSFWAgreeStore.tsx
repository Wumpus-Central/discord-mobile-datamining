// === Module 5101: GuildNSFWAgreeStore ===

// Module 5101 (GuildNSFWAgreeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AgeGateUtils from "AgeGateUtils" /* 5100 */;
import size from "module_2" /* 2 */;

const GuildNSFWAgreeStore_str = "GuildNSFWAgreeStore";
let c3 = {};
const Store = get_initializedDefault.Store;
class GuildNSFWAgreeStore extends Store {
  initialize() {
    const Storage = Storage2.Storage;
    let c3 = Storage.get(GuildNSFWAgreeStore_str);
  }
  didAgree(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      const obj = AgeGateUtils;
      const result = obj.shouldAgeVerifyForAgeGate();
      let tmp5 = !result;
      if (tmp5) {
        tmp5 = value[arg0] || false;
      }
      tmp = tmp5;
    }
    return tmp;
  }
}
const prototype = GuildNSFWAgreeStore.prototype;
GuildNSFWAgreeStore.displayName = "GuildNSFWAgreeStore";
let obj = {
  GUILD_NSFW_AGREE: function handleGuildNSFWAgree(guildId) {
    c3[guildId.guildId] = true;
    const Storage = Storage2.Storage;
    const result = Storage.set(GuildNSFWAgreeStore_str, c3);
  }
};
const guildNSFWAgreeStore = new GuildNSFWAgreeStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/GuildNSFWAgreeStore.tsx");

export default guildNSFWAgreeStore;