import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
let obj = { id: "-15", untranslatedName: "leave", displayName: "leave", type: null, inputType: null, applicationId: null };
obj[3] = require("PermissionOverwriteType").ApplicationCommandType.CHAT;
obj[4] = require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN;
obj[5] = require("TRUE_OPTION_NAME").BuiltInSectionId.BUILT_IN;
Object.defineProperty(obj, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["26C4oi"]);
  },
  set: undefined
});
Object.defineProperty(obj, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["26C4oi"]);
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
    const channelName = channel(4446).computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
    const intl5 = channel(1236).intl;
    let obj = { name: null };
    obj[0] = channelName;
    const obj5 = channel(4446);
    const intl6 = channel(1236).intl;
    obj = { name: null };
    obj[0] = channelName;
    let formatResult = intl6.format(channel(1236).t.SSIVOu, obj);
    let formatToPlainStringResult1 = intl5.formatToPlainString(channel(1236).t.hJ5Ap4, obj);
    if (channel.isManaged()) {
      let intl = tmp5(1236).intl;
      obj = { name: null };
      obj[0] = channelName;
      formatToPlainStringResult1 = intl.formatToPlainString(tmp5(1236).t.hVGjEW, obj);
      const intl2 = tmp5(1236).intl;
      const obj1 = { name: null };
      obj1[0] = channelName;
      formatResult = intl2.format(tmp5(1236).t.IK1Qvs, obj1);
    }
    let obj2 = importDefault(4594);
    obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
    obj2[0] = formatToPlainStringResult1;
    obj2[1] = formatResult;
    const intl3 = tmp5(1236).intl;
    obj2[2] = intl3.string(channel(1236).t["26C4oi"]);
    const intl4 = tmp5(1236).intl;
    obj2[3] = intl4.string(channel(1236).t["ETE/oC"]);
    obj2[4] = function onConfirm() {
      try {
        outer1_1(outer1_2[8]).closePrivateChannel(channel.id);
      } catch (err) {
        const intl = channel(outer1_2[5]).intl;
        outer1_1(outer1_2[9]).sendBotMessage(channel.id, intl.string(channel(outer1_2[5]).t["YOsuT/"]));
        const obj2 = outer1_1(outer1_2[9]);
      }
    };
    obj2.show(obj2);
    const formatToPlainStringResult = intl5.formatToPlainString(channel(1236).t.hJ5Ap4, obj);
  }
};
const items = [obj];
const result = require("TRUE_OPTION_NAME").fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;