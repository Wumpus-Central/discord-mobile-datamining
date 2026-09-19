// === Module 9821: CreateChannelModalActionCreators ===

// Module 9821 (CreateChannelModalActionCreators)
import ChannelRecord from "ChannelRecord" /* 2045 */;
import transitionToChannel from "transitionToChannel" /* 4767 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import size from "module_2" /* 2 */;

const isGuildReadableType = ChannelRecord.isGuildReadableType;
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/CreateChannelModalActionCreators.tsx");

export default {
  CREATE_CHANNEL_MODAL_KEY: "CREATE_CHANNEL_MODAL_KEY",
  open(arg0, guildId, categoryId, cloneChannelId) {
    const self = this;
    if (null != guildId) {
      const obj2 = ModalActionCreatorsDefault;
      const tmp = arg0;
      let obj = {
        channelType: tmp,
        guildId,
        categoryId,
        cloneChannelId,
        onChannelCreated(id, arg1) {
            self.close();
            const channel = ChannelStore.getChannel(id);
            let tmp3 = null != arg1 && null != channel;
            if (tmp3) {
              tmp3 = isGuildReadableType(channel.type);
            }
            if (tmp3) {
              transitionToChannel.transitionToChannel(id);
            }
          }
      };
      obj2.pushLazy(self(1980)(9816, dependencyMap.paths), obj, CREATE_CHANNEL_MODAL_KEY);
      const tmp9 = self(1980)(9816, dependencyMap.paths);
    }
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  }
};