// === Module 4684: initialize ===

// Module 4684 (initialize)
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 4683 */;

require = arg1;
const GuildNSFWAgreeStore = "GuildNSFWAgreeStore";
let closure_3 = {};
const Store = initializeDefault.Store;
class GuildNSFWAgreeStore extends Store {
}
const prototype = GuildNSFWAgreeStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  let value = Storage.get(GuildNSFWAgreeStore);
  if (value == null) {
    value = closure_3;
  }
  closure_3 = value;
};
prototype["didAgree"] = function didAgree(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const result = shouldShowAgeGateForVoiceChannel.shouldAgeVerifyForAgeGate();
    let tmp5 = !result;
    if (!result) {
      tmp5 = table[arg0] || false;
      const tmp7 = table[arg0] || false;
    }
    tmp = tmp5;
    const obj = shouldShowAgeGateForVoiceChannel;
  }
  return tmp;
};
GuildNSFWAgreeStore.displayName = "GuildNSFWAgreeStore";
const guildNSFWAgreeStore = new GuildNSFWAgreeStore(dispatcherDefault, {
  GUILD_NSFW_AGREE: function handleGuildNSFWAgree(guildId) {
    closure_3[guildId.guildId] = true;
    const Storage = Storage2.Storage;
    const result = Storage.set(GuildNSFWAgreeStore, closure_3);
  }
});
let result = require("set").fileFinishedImporting("stores/GuildNSFWAgreeStore.tsx");

export default guildNSFWAgreeStore;