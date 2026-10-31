// === Module 16656: AccountRemove2faSetting ===

// Module 16656 (AccountRemove2faSetting)
import util from "util" /* 1113 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import account_MFAUtils from "account/MFAUtils" /* 16657 */;
import MfaFactorUtils from "MfaFactorUtils" /* 16658 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_7 = async function _remove2FA() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          ReactBatchUpdates.batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: true }));
          closure_128_0 = false;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj6 = { value: MfaFactorUtils.isLastRemainingMfaFactor("totp"), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_129_0(closure_129_2[6]).batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: false }));
        throw closure_2;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        closure_129_0(closure_129_2[6]).batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: false }));
        c5 = 3;
        let obj7 = { value, done: true };
        return obj7;
      } else {
        closure_128_0 = value;
        c3 = 0;
        closure_129_0(closure_129_2[6]).batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: false }));
        let show = closure_129_0(closure_129_2[8]).t;
        if (closure_128_0) {
          let EA4ZEk = show.xlA7Tl;
        } else {
          EA4ZEk = show.EA4ZEk;
        }
        closure_128_2 = EA4ZEk;
        let obj8 = closure_129_0(closure_129_2[6]);
        show = closure_129_1(closure_129_2[9]).show;
        const obj = { title: null, body: null, cancelText: null, onConfirm: null };
        const intl = closure_129_0(closure_129_2[8]).intl;
        obj.title = intl.string(closure_129_0(closure_129_2[8]).t["D+aE7g"]);
        const intl2 = closure_129_0(closure_129_2[8]).intl;
        obj.body = intl2.string(closure_128_2);
        const intl3 = closure_129_0(closure_129_2[8]).intl;
        obj.cancelText = intl3.string(closure_129_0(closure_129_2[8]).t["ETE/oC"]);
        closure_128_1 = closure_129_3(async () => {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  let tmp32 = tmp3;
                  tmp3(tmp30[6]).batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: true }));
                  c3 = 1;
                  const obj5 = tmp3(tmp30[6]);
                  c4 = 2;
                  c5 = 1;
                  const obj8 = { value: tmp32(tmp30[10]).disable(), done: false };
                  return obj8;
                }
              } else if (1 === tmp7) {
                c3 = 0;
                tmp3(tmp30[6]).batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: false }));
                throw tmp30;
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                tmp3(tmp30[6]).batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: false }));
                c5 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                c3 = 0;
                tmp3(tmp30[6]).batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: false }));
                c5 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp30) {
              tmp32 = c3;
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp30;
              } else {
                c4 = tmp;
              }
            }
          }
        });
        obj.onConfirm = function onConfirm() {
          const self = this;
          const apply = closure_1_1.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        show(obj);
        c5 = 3;
        const tmp12 = closure_129_1(closure_129_2[9]);
      }
    } catch (tmp38) {
      closure_2 = tmp38;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp38;
      } else {
        c4 = tmp;
      }
    }
  }
};
const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const module_560 = fn(560);
let obj3 = module_560.create(() => ({ isCheckingLastFactor: false }));
const SettingBuilders = fn(11539);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D+aE7g"]);
  },
  parent: fn(8432).MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  useIsDisabled() {
    const result = account_MFAUtils.use2FARemoveDisableReason();
    return null !== result || obj3((isCheckingLastFactor) => isCheckingLastFactor.isCheckingLastFactor);
  },
  useTrailing: function useRemove2FATrailing() {
    let tmp = null;
    if (obj3((isCheckingLastFactor) => isCheckingLastFactor.isCheckingLastFactor)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: fn(16657).use2FARemoveDisableReason,
  usePredicate: fn(16570).useIsTOTPEnabled
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;
export const useRemove2FAStore = obj3;