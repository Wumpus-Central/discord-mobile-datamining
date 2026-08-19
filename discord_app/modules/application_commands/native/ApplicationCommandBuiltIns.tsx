// === Module 8460: get untranslatedDescription ===

// Module 8460 (get untranslatedDescription)
import _modDef4770 from "module_4770" /* 4770 */;
import obj132Default from "obj132" /* 4827 */;
import trackInviteDefault from "trackInvite" /* 7427 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
let obj = { id: "-15", untranslatedName: "leave", displayName: "leave", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: require("TRUE_OPTION_NAME").BuiltInSectionId.BUILT_IN };
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
    const channelName = channel(4984).computeChannelName(channel, closure_4, closure_3);
    const intl5 = channel(1236).intl;
    let obj = { name: null };
    obj[0] = channelName;
    const obj5 = channel(4984);
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
      obj1 = { name: null };
      obj1[0] = channelName;
      formatResult = intl2.format(tmp5(1236).t.IK1Qvs, obj1);
    }
    let obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
    obj2[0] = formatToPlainStringResult1;
    obj2[1] = formatResult;
    const intl3 = tmp5(1236).intl;
    obj2[2] = intl3.string(channel(1236).t["26C4oi"]);
    const intl4 = tmp5(1236).intl;
    obj2[3] = intl4.string(channel(1236).t["ETE/oC"]);
    obj2[4] = function onConfirm() {
      try {
        _modDef4770.closePrivateChannel(channel.id);
      } catch (err) {
        const intl = channel(dependencyMap[5]).intl;
        trackInviteDefault.sendBotMessage(channel.id, intl.string(channel(dependencyMap[5]).t["YOsuT/"]));
      }
    };
    obj2.show(obj2);
    const formatToPlainStringResult = intl5.formatToPlainString(channel(1236).t.hJ5Ap4, obj);
  }
};
const items = [obj];
const result = require("obj132").fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;