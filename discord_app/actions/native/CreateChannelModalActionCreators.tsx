// discord_app/actions/native/CreateChannelModalActionCreators.tsx
import ChannelRecord from "../../records/ChannelRecord.tsx";
import transitionToChannel from "../../modules/routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../ModalActionCreators.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
        },
      };
      obj2.pushLazy(self(1896)(9732, dependencyMap.paths), obj, CREATE_CHANNEL_MODAL_KEY);
      const tmp9 = self(1896)(9732, dependencyMap.paths);
    }
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  },
};
