// discord_app/actions/native/CreateChannelModalActionCreators.tsx
import { CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES as closure_3 } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ModalActionCreators } from "../ModalActionCreators.tsx";

const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
const result = require("transitionToChannel").fileFinishedImporting("actions/native/CreateChannelModalActionCreators.tsx");

export default {
  CREATE_CHANNEL_MODAL_KEY: "CREATE_CHANNEL_MODAL_KEY",
  open(arg0, arg1, arg2, arg3) {
    const self = this;
    if (null != arg1) {
      const obj2 = ModalActionCreators;
      const tmp = arg0;
      let obj = { channelType: null, guildId: null, categoryId: null, cloneChannelId: null, onChannelCreated: null };
      obj[0] = tmp;
      obj[1] = arg1;
      obj[2] = arg2;
      obj[3] = arg3;
      obj[4] = function onChannelCreated(id) {
        self.close();
        const channel = outer1_4.getChannel(id);
        let hasItem = null != arg1 && null != channel;
        if (hasItem) {
          hasItem = outer1_3.has(channel.type);
        }
        if (hasItem) {
          self(outer1_2[2]).transitionToChannel(id);
          const obj = self(outer1_2[2]);
        }
      };
      obj2.pushLazy(self(2007)(9037, dependencyMap.paths), obj, CREATE_CHANNEL_MODAL_KEY);
      const tmp2 = arg2;
      const tmp3 = arg3;
      const tmp9 = self(2007)(9037, dependencyMap.paths);
    }
  },
  close() {
    ModalActionCreators.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  }
};