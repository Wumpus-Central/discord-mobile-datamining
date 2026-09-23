// discord_app/modules/guild_settings/safety/native/TransferOwnershipModal.tsx
import util from "../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function closeModal() {
  TransferOwnershipModalActionCreatorsDefault.close();
}
const TransferOwnershipConstants = fn(12182);
({ TransferOwnershipModalScenes: hasOwnProperty, TransferOwnershipVerificationTypes: metroRequire } =
  TransferOwnershipConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModal.tsx");

export default function TransferOwnershipModal(guild) {
  guild = guild.guild;
  const toUser = guild.toUser;
  const items = [guild, toUser];
  const memo = noop.useMemo(() => {
    let obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.GUILD_TRANSFER_OWNERSHIP_FLOW };
    let obj2 = {};
    let obj3 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
    let intl = util.intl;
    obj3.headerTitle = intl.string(util.t.Z5s7PM);
    obj3.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
    obj3.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GUILD_TRANSFER_OWNERSHIP;
    obj3.impressionProperties = obj;
    obj3.render = function render() {
      return jsx(toUser(dependencyMap[8]), { guild, toUser });
    };
    obj2[constants.TRANFSER_OWNERSHIP] = obj3;
    let obj5 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
    let intl2 = util.intl;
    obj5.headerTitle = intl2.string(util.t.Z5s7PM);
    obj5.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
    obj5.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE;
    obj5.impressionProperties = obj;
    obj5.render = function render() {
      let obj = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
      guild = closure_1_3((arg0) => {
        const id = arg0;
        c2 = 0;
        c1 = 0;
        return (function* (arg0) {
          yield toUser(9934).transferOwnership(id.id, id2.id, constants.EMAIL, id);
          return value;
        })();
      });
      obj.onFormSubmit = function () {
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
        toUser(12180).close();
        const obj = toUser(12180);
        toUser(9934).close();
        const obj2 = toUser(9934);
        const result = closure_0(4520).showTransferOwnershipSuccess();
      };
      obj.onResend = closure_1_3(function* () {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                v1 = 1;
                c0 = 1;
                const obj5 = { value: v1(dependencyMap[10]).sendTransferOwnershipPincode(id.id, true), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
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
      const intl = guild(1115).intl;
      obj.headerText = intl.string(guild(1115).t.Z5s7PM);
      const intl2 = guild(1115).intl;
      obj.confirmButtonText = intl2.string(guild(1115).t.Z5s7PM);
      return closure_1_7(toUser(6932), obj);
    };
    obj2[constants.CONFIRM_EMAIL_CODE] = obj5;
    return obj2;
  }, items);
  let obj = { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP, headerBackTitle: null };
  let intl = guild(1115).intl;
  obj.headerBackTitle = intl.string(guild(1115).t["13/7kX"]);
  return jsx(guild(7331).Navigator, {
    screens: memo,
    initialRouteName: constants.TRANFSER_OWNERSHIP,
    headerBackTitle: null,
  });
}
