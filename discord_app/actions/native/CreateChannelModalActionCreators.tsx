// === Module 8886: ? ===

// Module 8886
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import _modDef5265 from "module_5265" /* 5265 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;

let closure_3 = createChannelRecord.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES;
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
const result = set.fileFinishedImporting("actions/native/CreateChannelModalActionCreators.tsx");

export default {
  CREATE_CHANNEL_MODAL_KEY: "CREATE_CHANNEL_MODAL_KEY",
  open(arg0, arg1, arg2, arg3) {
    const self = this;
    if (null != arg1) {
      const obj2 = _modDef5265;
      const tmp = arg0;
      let obj = { channelType: null, guildId: null, categoryId: null, cloneChannelId: null, onChannelCreated: null };
      obj[0] = tmp;
      obj[1] = arg1;
      obj[2] = arg2;
      obj[3] = arg3;
      obj[4] = function onChannelCreated(id) {
        self.close();
        const channel = closure_1_4.getChannel(id);
        let hasItem = null != arg1 && null != channel;
        if (hasItem) {
          hasItem = closure_1_3.has(channel.type);
        }
        if (hasItem) {
          self(closure_1_2[2]).transitionToChannel(id);
          const obj = self(closure_1_2[2]);
        }
      };
      obj2.pushLazy(self(2008)(8882, dependencyMap.paths), obj, CREATE_CHANNEL_MODAL_KEY);
      const tmp2 = arg2;
      const tmp3 = arg3;
      const tmp9 = self(2008)(8882, dependencyMap.paths);
    }
  },
  close() {
    _modDef5265.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  }
};