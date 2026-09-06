// === Module 9302: application_commands/ApplicationCommandBuiltIns ===

// Module 9302 (application_commands/ApplicationCommandBuiltIns)
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
let obj = { id: "-15", untranslatedName: "leave", displayName: "leave", type: fn(1894).ApplicationCommandType.CHAT, inputType: fn(7523).ApplicationCommandInputType.BUILT_IN, applicationId: fn(4999).BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["26C4oi"]);
  },
  set: undefined
});
Object.defineProperty(obj, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["26C4oi"]);
  },
  set: undefined
});
obj.predicate = function predicate(channel) {
  channel = channel.channel;
  return null != channel && channel.isGroupDM();
};
obj.execute = function execute(arg0, channel) {
  channel = channel.channel;
  if (null != channel) {
    const channelName = channel(4713).computeChannelName(channel, UserStore, RelationshipStore);
    const intl5 = channel(1114).intl;
    let obj = { name: channelName };
    const obj5 = channel(4713);
    const intl6 = channel(1114).intl;
    obj = { name: channelName };
    let formatResult = intl6.format(channel(1114).t.SSIVOu, obj);
    let formatToPlainStringResult1 = intl5.formatToPlainString(channel(1114).t.hJ5Ap4, obj);
    if (channel.isManaged()) {
      let intl = tmp5(1114).intl;
      obj = { name: channelName };
      formatToPlainStringResult1 = intl.formatToPlainString(tmp5(1114).t.hVGjEW, obj);
      const intl2 = tmp5(1114).intl;
      const obj1 = { name: channelName };
      formatResult = intl2.format(tmp5(1114).t.IK1Qvs, obj1);
    }
    let obj2 = { title: formatToPlainStringResult1, body: formatResult, confirmText: null, cancelText: null, onConfirm: null };
    const intl3 = tmp5(1114).intl;
    obj2.confirmText = intl3.string(channel(1114).t["26C4oi"]);
    const intl4 = tmp5(1114).intl;
    obj2.cancelText = intl4.string(channel(1114).t["ETE/oC"]);
    obj2.onConfirm = function onConfirm() {
      try {
        ChannelActionCreatorsDefault.closePrivateChannel(channel.id);
      } catch (err) {
        const intl = require("util").intl;
        MessageActionCreatorsDefault.sendBotMessage(channel.id, intl.string(require("util").t["YOsuT/"]));
      }
    };
    obj2.show(obj2);
    const formatToPlainStringResult = intl5.formatToPlainString(channel(1114).t.hJ5Ap4, obj);
  }
};
const items = [obj];
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;