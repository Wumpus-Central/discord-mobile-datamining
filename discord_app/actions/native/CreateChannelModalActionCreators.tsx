// discord_app/actions/native/CreateChannelModalActionCreators.tsx
import ChannelRecord from "../../records/ChannelRecord.tsx";
import transitionToChannel from "../../modules/routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../ModalActionCreators.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const isGuildReadableType = ChannelRecord.isGuildReadableType;
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
let obj = {
  CREATE_CHANNEL_MODAL_KEY: "CREATE_CHANNEL_MODAL_KEY",
  open(channelType, guildId, categoryId, arg3) {
    let tmp3;
    const self = this;
    if (null != guildId) {
      const pushLazy = ModalActionCreatorsDefault.pushLazy;
      ModalActionCreatorsDefault;
      let obj = {
        channelType,
        guildId,
        categoryId,
        cloneChannelId: tmp3,
        onChannelCreated(id, arg1) {
          self.close();
          const channel = ChannelStore.getChannel(id);
          const tmp3 = null != arg1 && null != channel && isGuildReadableType(channel.type);
          if (tmp3) {
            const obj = transitionToChannel;
            obj.transitionToChannel(id);
          }
        },
      };
      tmp3 = arg3;
      const tmp10 = self(1987)(9209, dependencyMap.paths);
      pushLazy(tmp10, obj, CREATE_CHANNEL_MODAL_KEY);
    }
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(CREATE_CHANNEL_MODAL_KEY);
  },
};
const result = size.fileFinishedImporting("actions/native/CreateChannelModalActionCreators.tsx");

export default obj;
