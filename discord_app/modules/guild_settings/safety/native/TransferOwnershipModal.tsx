// === Module 11845: TransferOwnershipModal ===

// Module 11845 (TransferOwnershipModal)
import util from "util" /* 1114 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators" /* 11844 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeModal() {
  TransferOwnershipModalActionCreatorsDefault.close();
}
const TransferOwnershipConstants = fn(11846);
({ TransferOwnershipModalScenes: hasOwnProperty, TransferOwnershipVerificationTypes: metroRequire } = TransferOwnershipConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModal.tsx");

export default function TransferOwnershipModal(guild) {
  guild = guild.guild;
  const toUser = guild.toUser;
  const items = [guild, toUser];
  const memo = noop.useMemo(() => {
    let obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.GUILD_TRANSFER_OWNERSHIP_FLOW };
    obj = {};
    obj = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
    let intl = util.intl;
    obj.headerTitle = intl.string(util.t.Z5s7PM);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
    obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GUILD_TRANSFER_OWNERSHIP;
    obj.impressionProperties = obj;
    obj.render = function render() {
      return jsx(toUser(dependencyMap[8]), { guild, toUser });
    };
    obj[constants.TRANFSER_OWNERSHIP] = obj;
    let obj1 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
    let intl2 = util.intl;
    obj1.headerTitle = intl2.string(util.t.Z5s7PM);
    obj1.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
    obj1.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE;
    obj1.impressionProperties = obj;
    obj1.render = function render() {
      let obj = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
      guild = closure_1_3((arg0) => {
        const id = arg0;
        c2 = 0;
        c1 = 0;
        return (function*(arg0) {
          yield toUser(9063).transferOwnership(id.id, id2.id, constants.EMAIL, id);
          return value;
        })();
      });
      obj.onFormSubmit = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj.onSuccess = function onSuccess() {
        toUser(11844).close();
        const obj = toUser(11844);
        toUser(9063).close();
        const obj2 = toUser(9063);
        const result = closure_0(4258).showTransferOwnershipSuccess();
      };
      obj.onResend = closure_1_3(function*() {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let obj1 = v1(dependencyMap[10]);
                v1 = 1;
                c0 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.sendTransferOwnershipPincode(id.id, true);
                return obj1;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c0 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp8) {
            c0 = tmp;
            throw tmp8;
          }
        }
      });
      const intl = guild(1114).intl;
      obj.headerText = intl.string(guild(1114).t.Z5s7PM);
      const intl2 = guild(1114).intl;
      obj.confirmButtonText = intl2.string(guild(1114).t.Z5s7PM);
      return closure_1_7(toUser(6604), obj);
    };
    obj[constants.CONFIRM_EMAIL_CODE] = obj1;
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP, headerBackTitle: null };
  let intl = guild(1114).intl;
  obj.headerBackTitle = intl.string(guild(1114).t["13/7kX"]);
  return jsx(guild(7000).Navigator, { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP, headerBackTitle: null });
};