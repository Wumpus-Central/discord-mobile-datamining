// === Module 4772: GuildNSFWAgreeStore ===

// Module 4772 (GuildNSFWAgreeStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AgeGateUtils from "AgeGateUtils" /* 4771 */;

require = fn;
const GuildNSFWAgreeStore = "GuildNSFWAgreeStore";
let c3 = {};
const Store = initializeDefault.Store;
class GuildNSFWAgreeStore extends Store {
}
const prototype = GuildNSFWAgreeStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  value = Storage.get(GuildNSFWAgreeStore);
};
prototype["didAgree"] = function didAgree(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const result = AgeGateUtils.shouldAgeVerifyForAgeGate();
    let tmp5 = !result;
    if (!result) {
      tmp5 = value[arg0] || false;
      const tmp7 = value[arg0] || false;
    }
    tmp = tmp5;
  }
  return tmp;
};
GuildNSFWAgreeStore.displayName = "GuildNSFWAgreeStore";
const guildNSFWAgreeStore = new GuildNSFWAgreeStore(DispatcherDefault, {
  GUILD_NSFW_AGREE: function handleGuildNSFWAgree(guildId) {
    value[guildId.guildId] = true;
    const Storage = Storage2.Storage;
    const result = Storage.set(GuildNSFWAgreeStore, value);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/GuildNSFWAgreeStore.tsx");

export default guildNSFWAgreeStore;