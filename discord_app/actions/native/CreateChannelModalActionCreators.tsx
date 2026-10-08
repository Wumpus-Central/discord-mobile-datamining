// === Module 8578: CreateChannelModalActionCreators ===

// Module 8578 (CreateChannelModalActionCreators)
import ChannelRecord from "ChannelRecord" /* 2067 */;
import transitionToChannel from "transitionToChannel" /* 5101 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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
      obj2.pushLazy(self(1999)(8554, dependencyMap.paths), obj, CREATE_CHANNEL_MODAL_KEY);
      const tmp9 = self(1999)(8554, dependencyMap.paths);
    }
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  }
};