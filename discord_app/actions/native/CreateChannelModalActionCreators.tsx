// discord_app/actions/native/CreateChannelModalActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import _modDef4724 from "../ModalActionCreators.tsx";
import closure_4 from "../../stores/ChannelStore.tsx";

const isGuildReadableType = createChannelRecord.isGuildReadableType;
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
const result = set.fileFinishedImporting("actions/native/CreateChannelModalActionCreators.tsx");

export default {
  CREATE_CHANNEL_MODAL_KEY: "CREATE_CHANNEL_MODAL_KEY",
  open(arg0, arg1, arg2, arg3) {
    const self = this;
    if (null != arg1) {
      const obj2 = _modDef4724;
      const tmp = arg0;
      let obj = { channelType: null, guildId: null, categoryId: null, cloneChannelId: null, onChannelCreated: null };
      obj[0] = tmp;
      obj[1] = arg1;
      obj[2] = arg2;
      obj[3] = arg3;
      obj[4] = function onChannelCreated(id) {
        self.close();
        const channel = closure_1_4.getChannel(id);
        let tmp3 = null != arg1 && null != channel;
        if (tmp3) {
          tmp3 = closure_1_3(channel.type);
        }
        if (tmp3) {
          self(closure_1_2[2]).transitionToChannel(id);
          const obj = self(closure_1_2[2]);
        }
      };
      obj2.pushLazy(self(2008)(9719, dependencyMap.paths), obj, CREATE_CHANNEL_MODAL_KEY);
      const tmp2 = arg2;
      let tmp3 = arg3;
      const tmp9 = self(2008)(9719, dependencyMap.paths);
    }
  },
  close() {
    _modDef4724.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  },
};
