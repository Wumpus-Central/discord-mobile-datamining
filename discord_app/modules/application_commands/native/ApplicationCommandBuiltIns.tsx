// === Module 9772: application_commands/ApplicationCommandBuiltIns ===

// Module 9772 (application_commands/ApplicationCommandBuiltIns)
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7485 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7636 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;

const require = fn;
let obj = { id: "-15", untranslatedName: "leave", displayName: "leave", type: fn(1992).ApplicationCommandType.CHAT, inputType: fn(5683).ApplicationCommandInputType.BUILT_IN, applicationId: fn(6035).BuiltInSectionId.BUILT_IN };
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
    const channelName = channel(5652).computeChannelName(channel, UserStore, RelationshipStore);
    const intl5 = channel(1113).intl;
    let obj2 = { name: channelName };
    const obj5 = channel(5652);
    const intl6 = channel(1113).intl;
    const obj3 = { name: channelName };
    const formatToPlainStringResult = intl5.formatToPlainString(channel(1113).t.hJ5Ap4, obj2);
    let formatResult1 = intl6.format(channel(1113).t.SSIVOu, obj3);
    let formatToPlainStringResult1 = formatToPlainStringResult;
    if (channel.isManaged()) {
      let intl = tmp4(1113).intl;
      let obj = { name: channelName };
      formatToPlainStringResult1 = intl.formatToPlainString(tmp4(1113).t.hVGjEW, obj);
      const intl2 = tmp4(1113).intl;
      const obj4 = { name: channelName };
      formatResult1 = intl2.format(tmp4(1113).t.IK1Qvs, obj4);
    }
    const formatResult = intl6.format(channel(1113).t.SSIVOu, obj3);
    const obj6 = { title: formatToPlainStringResult1, body: formatResult1, confirmText: null, cancelText: null, onConfirm: null };
    const intl3 = tmp4(1113).intl;
    obj6.confirmText = intl3.string(channel(1113).t["26C4oi"]);
    const intl4 = tmp4(1113).intl;
    obj6.cancelText = intl4.string(channel(1113).t["ETE/oC"]);
    obj6.onConfirm = function onConfirm(arg0) {
      try {
        ChannelActionCreatorsDefault.closePrivateChannel(channel.id, undefined, arg0);
      } catch (err) {
        const intl = require("util").intl;
        MessageActionCreatorsDefault.sendBotMessage(channel.id, intl.string(require("util").t["YOsuT/"]));
      }
    };
    const result = channel(9773).openLeaveGroupDMConfirmationAlert(obj6);
    const tmp4Result = channel(9773);
  }
};
const items = [obj];
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;