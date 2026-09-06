// === Module 9737: CreateChannelModalActionCreators ===

// Module 9737 (CreateChannelModalActionCreators)
import ChannelRecord from "ChannelRecord" /* 1961 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import ChannelStore from "ChannelStore" /* 1957 */;
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
      obj2.pushLazy(self(1896)(9732, dependencyMap.paths), obj, CREATE_CHANNEL_MODAL_KEY);
      const tmp9 = self(1896)(9732, dependencyMap.paths);
    }
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  }
};