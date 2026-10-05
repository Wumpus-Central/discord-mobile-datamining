// discord_app/stores/GuildNSFWAgreeStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import AgeGateUtils from "../modules/age_gate/AgeGateUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  },
};
const guildNSFWAgreeStore = new GuildNSFWAgreeStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/GuildNSFWAgreeStore.tsx");

export default guildNSFWAgreeStore;
