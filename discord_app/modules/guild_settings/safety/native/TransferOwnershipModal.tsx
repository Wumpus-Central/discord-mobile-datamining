// discord_app/modules/guild_settings/safety/native/TransferOwnershipModal.tsx
import _modDef11417 from "TransferOwnershipModalActionCreators.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import TransferOwnershipModalScenes from "../TransferOwnershipConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function closeModal() {
  _modDef11417.close();
}
({ TransferOwnershipModalScenes: c5, TransferOwnershipVerificationTypes: closure_6 } = TransferOwnershipModalScenes);
let result = require("set").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModal.tsx");

export default function TransferOwnershipModal(guild) {
  guild = guild.guild;
  const toUser = guild.toUser;
  const items = [guild, toUser];
  const memo = React.useMemo(() => {
    let obj = { impression_group: guild(closure_1_2[5]).ImpressionGroups.GUILD_TRANSFER_OWNERSHIP_FLOW };
    obj = {};
    obj = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
    let intl = guild(closure_1_2[6]).intl;
    obj[0] = intl.string(guild(closure_1_2[6]).t.Z5s7PM);
    obj[1] = guild(closure_1_2[7]).getHeaderCloseButton(closure_1_8);
    obj[2] = guild(closure_1_2[5]).ImpressionNames.GUILD_TRANSFER_OWNERSHIP;
    obj[3] = obj;
    obj[4] = function render() {
      return closure_1_7(callback2(closure_1_2[8]), { guild: closure_0, toUser: callback2 });
    };
    obj[closure_1_5.TRANFSER_OWNERSHIP] = obj;
    obj1 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
    let intl2 = guild(closure_1_2[6]).intl;
    obj1[0] = intl2.string(guild(closure_1_2[6]).t.Z5s7PM);
    const obj4 = guild(closure_1_2[7]);
    obj1[1] = guild(closure_1_2[7]).getHeaderCloseButton(closure_1_8);
    obj1[2] = guild(closure_1_2[5]).ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE;
    obj1[3] = obj;
    obj1[4] = function render() {
      let obj = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
      let callback;
      callback = closure_1_3((arg0) => {
        closure_0 = arg0;
        c2 = 0;
        c1 = 0;
        return (function* (arg0) {
          const obj2 = closure_2_1(closure_2_2[10]);
          yield obj2.transferOwnership(id.id, id2.id, closure_2_6.EMAIL, id);
          return arg1;
        })();
      });
      obj[0] = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj[1] = function onSuccess() {
        callback2(11417).close();
        const obj = callback2(11417);
        callback2(9728).close();
        const obj2 = callback2(9728);
        const result = callback(4193).showTransferOwnershipSuccess();
      };
      obj[2] = closure_1_3(function* () {
        if (id === 2) {
          id = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            id = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                id = 3;
                throw arg1;
              } else if (arg0 === 2) {
                id = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                obj1 = v0(closure_1_2[10]);
                v0 = 1;
                id = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.sendTransferOwnershipPincode(id.id, true);
                return obj1;
              }
            } else if (arg0 === 1) {
              id = 3;
              throw arg1;
            } else if (arg0 === 2) {
              id = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              id = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp8) {
            id = tmp;
            throw tmp8;
          }
        }
      });
      const intl = callback(closure_1_2[6]).intl;
      obj[3] = intl.string(callback(closure_1_2[6]).t.Z5s7PM);
      const intl2 = callback(closure_1_2[6]).intl;
      obj[4] = intl2.string(callback(closure_1_2[6]).t.Z5s7PM);
      return closure_1_7(callback2(closure_1_2[9]), obj);
    };
    obj[closure_1_5.CONFIRM_EMAIL_CODE] = obj1;
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP, headerBackTitle: null };
  let intl = guild(1236).intl;
  obj[2] = intl.string(guild(1236).t["13/7kX"]);
  return jsx(guild(6008).Navigator, {
    screens: memo,
    initialRouteName: constants.TRANFSER_OWNERSHIP,
    headerBackTitle: null,
  });
}
