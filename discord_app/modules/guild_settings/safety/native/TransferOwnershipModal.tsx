// === Module 11361: TransferOwnershipModal ===

// Module 11361 (TransferOwnershipModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Navigator from "Navigator" /* 6686 */;
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators" /* 11360 */;
import TransferOwnershipDefault from "TransferOwnership" /* 11363 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeModal() {
  TransferOwnershipModalActionCreatorsDefault.close();
}
function getScreens(guild, toUser) {
  _require = guild;
  let obj = { impression_group: require("discord_common/AnalyticsUtils").ImpressionGroups.GUILD_TRANSFER_OWNERSHIP_FLOW };
  let obj2 = {};
  let obj3 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  let intl = require("util").intl;
  obj3.headerTitle = intl.string(require("util").t.Z5s7PM);
  obj3.headerLeft = require("NavigatorHeader").getHeaderCloseButton(closeModal);
  obj3.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_TRANSFER_OWNERSHIP;
  obj3.impressionProperties = obj;
  obj3.render = function render() {
    return jsx(TransferOwnershipDefault, { guild, toUser });
  };
  obj2[constants.TRANFSER_OWNERSHIP] = obj3;
  let obj5 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  let intl2 = require("util").intl;
  obj5.headerTitle = intl2.string(require("util").t.Z5s7PM);
  let obj4 = require("NavigatorHeader");
  obj5.headerLeft = require("NavigatorHeader").getHeaderCloseButton(closeModal);
  obj5.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE;
  obj5.impressionProperties = obj;
  obj5.render = function render() {
    let obj = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
    guild = asyncGeneratorStep(async (arg0) => {
      const id = arg0;
      c2 = 0;
      c1 = 0;
      return (async (arg0) => {
        await toUser(8621).transferOwnership(id.id, id2.id, constants.EMAIL, id);
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
      toUser(11360).close();
      const obj = toUser(11360);
      toUser(8621).close();
      const obj2 = toUser(8621);
      const result = closure_0(4767).showTransferOwnershipSuccess();
    };
    obj.onResend = asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c0 = tmp;
          throw tmp8;
        }
      }
    });
    const intl = guild(1126).intl;
    obj.headerText = intl.string(guild(1126).t.Z5s7PM);
    const intl2 = guild(1126).intl;
    obj.confirmButtonText = intl2.string(guild(1126).t.Z5s7PM);
    return jsx(toUser(6288), { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null });
  };
  obj2[constants.CONFIRM_EMAIL_CODE] = obj5;
  return obj2;
}
const TransferOwnershipConstants = fn(11362);
({ TransferOwnershipModalScenes: hasOwnProperty, TransferOwnershipVerificationTypes: metroRequire } = TransferOwnershipConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TransferOwnershipModal(arg0) {
  const cResult = c.c(6);
  ({ guild, toUser } = arg0);
  if (cResult[0] === guild) {
    if (cResult[1] === toUser) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["13/7kX"]);
      cResult[3] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4) {
      const obj2 = { screens: tmp4, initialRouteName: constants.TRANFSER_OWNERSHIP, headerBackTitle: tmp7 };
      const tmp12 = jsx(Navigator.Navigator, { screens: tmp4, initialRouteName: constants.TRANFSER_OWNERSHIP, headerBackTitle: tmp7 });
      cResult[4] = tmp4;
      cResult[5] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp5 = getScreens(guild, toUser);
  cResult[0] = guild;
  cResult[1] = toUser;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function TransferOwnershipModal(guild) {
  guild = guild.guild;
  const toUser = guild.toUser;
  const items = [guild, toUser];
  const memo = noop.useMemo(() => getScreens(guild, toUser), items);
  const obj = { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP, headerBackTitle: null };
  const intl = guild(1126).intl;
  obj.headerBackTitle = intl.string(guild(1126).t["13/7kX"]);
  return jsx(guild(6686).Navigator, { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP, headerBackTitle: null });
});