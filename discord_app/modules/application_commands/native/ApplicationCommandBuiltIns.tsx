// discord_app/modules/application_commands/native/ApplicationCommandBuiltIns.tsx
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
let obj = {
  id: "-15",
  untranslatedName: "leave",
  displayName: "leave",
  type: fn(1978).ApplicationCommandType.CHAT,
  inputType: fn(7851).ApplicationCommandInputType.BUILT_IN,
  applicationId: fn(5295).BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["26C4oi"]);
  },
  set: undefined,
});
Object.defineProperty(obj, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["26C4oi"]);
  },
  set: undefined,
});
obj.predicate = function predicate(channel) {
  channel = channel.channel;
  return null != channel && channel.isGroupDM();
};
obj.execute = function execute(arg0, channel) {
  channel = channel.channel;
  if (null != channel) {
    const channelName = channel(4980).computeChannelName(channel, UserStore, RelationshipStore);
    const intl5 = channel(1115).intl;
    let obj2 = { name: channelName };
    const obj5 = channel(4980);
    const intl6 = channel(1115).intl;
    const obj4 = { name: channelName };
    let formatResult = intl6.format(channel(1115).t.SSIVOu, obj4);
    let formatToPlainStringResult1 = intl5.formatToPlainString(channel(1115).t.hJ5Ap4, obj2);
    if (channel.isManaged()) {
      let intl = tmp5(1115).intl;
      let obj = { name: channelName };
      formatToPlainStringResult1 = intl.formatToPlainString(tmp5(1115).t.hVGjEW, obj);
      const intl2 = tmp5(1115).intl;
      const obj6 = { name: channelName };
      formatResult = intl2.format(tmp5(1115).t.IK1Qvs, obj6);
    }
    const formatToPlainStringResult = intl5.formatToPlainString(channel(1115).t.hJ5Ap4, obj2);
    const obj7 = {
      title: formatToPlainStringResult1,
      body: formatResult,
      confirmText: null,
      cancelText: null,
      onConfirm: null,
    };
    const intl3 = tmp5(1115).intl;
    obj7.confirmText = intl3.string(channel(1115).t["26C4oi"]);
    const intl4 = tmp5(1115).intl;
    obj7.cancelText = intl4.string(channel(1115).t["ETE/oC"]);
    obj7.onConfirm = function onConfirm() {
      try {
        ChannelActionCreatorsDefault.closePrivateChannel(channel.id);
      } catch (err) {
        const intl = require("util").intl;
        MessageActionCreatorsDefault.sendBotMessage(channel.id, intl.string(require("util").t["YOsuT/"]));
      }
    };
    AlertActionCreatorsDefault.show(obj7);
  }
};
const items = [obj];
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;
