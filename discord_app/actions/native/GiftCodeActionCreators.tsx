// === Module 11432: actions/GiftCodeActionCreators ===

// Module 11432 (actions/GiftCodeActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function redeemGiftCode() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _redeemGiftCode(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ code: closure_129_0, options } = closure_0);
          if (options === undefined) {
            options = timestampProducer;
          }
          closure_129_1 = options;
          ({ onRedeemed: closure_129_2, onError: closure_129_3 } = closure_0);
          let channelId;
          closure_129_5 = undefined;
          let paymentSource;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          if (obj18.getIsPaymentsBlocked()) {
            closure_130_1(closure_130_2[3])();
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            channelId = closure_129_1.channelId;
            let tmp41 = null;
            if (undefined !== channelId) {
              tmp41 = channelId;
            }
            closure_129_5 = tmp41;
            paymentSource = closure_129_1.paymentSource;
            let tmp46 = null;
            if (undefined !== paymentSource) {
              tmp46 = paymentSource;
            }
            closure_129_7 = tmp46;
            let obj6 = closure_130_1(closure_130_2[4]);
            const obj2 = { type: "GIFT_CODE_REDEEM", code: closure_129_0 };
            obj6.dispatch(obj2);
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[5]).HTTP;
            const request = { url: closure_130_4.GIFT_CODE_REDEEM(closure_129_0), body: null, oldFormErrors: true, rejectWithError: false };
            let obj3 = { channel_id: closure_129_5, payment_source_id: null };
            let id;
            if (closure_129_7 != null) {
              id = closure_129_7.id;
            }
            obj3.payment_source_id = id;
            request.body = obj3;
            c5 = 3;
            c6 = 1;
            const obj4 = { value: HTTP.post(request), done: false };
            return obj4;
          }
          obj18 = closure_130_0(closure_130_2[2]);
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_10 = closure_3;
        const billingError = new closure_130_0(closure_130_2[7]).BillingError(closure_129_10);
        closure_129_9 = billingError;
        obj3 = closure_130_1(closure_130_2[4]);
        let obj5 = { type: "GIFT_CODE_REDEEM_FAILURE", code: closure_129_0, error: closure_129_9 };
        obj3.dispatch(obj5);
        obj5 = closure_130_1(closure_130_2[6]);
        obj5.track(closure_130_5.OPEN_MODAL, { type: "gift_accept", location: null });
        if (closure_129_3 != null) {
          tmp32(closure_129_9);
        }
        throw closure_129_9;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_8 = value;
        const obj7 = { type: "GIFT_CODE_REDEEM_SUCCESS", code: closure_129_0 };
        closure_130_1(closure_130_2[4]).dispatch(obj7);
        const obj15 = closure_130_1(closure_130_2[4]);
        closure_130_1(closure_130_2[6]).track(closure_130_5.OPEN_MODAL, { type: "gift_accept" });
        if (closure_129_2 != null) {
          closure_129_2();
        }
        obj = { code: closure_129_0, entitlement: closure_129_8 };
        c4 = 0;
        c6 = 3;
        const obj8 = { value: obj, done: true };
        return obj8;
      }
    } catch (tmp66) {
      closure_3 = tmp66;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp66;
      } else {
        c5 = tmp;
      }
    }
  }
};
function openGiftCodeRedeemModal(code) {
  const obj = { code };
  obj.pushLazy(asyncRequireImpl(11438, dependencyMap.paths), obj, "GIFT_CODE_REDEEM_MODAL_KEY");
}
const Constants = fn(1074);
({ Endpoints: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
let closure_6 = Object.freeze({});
const size = fn(2);
const result = size.fileFinishedImporting("actions/native/GiftCodeActionCreators.tsx");

export default { redeemGiftCode, openGiftCodeRedeemModal };
export { redeemGiftCode };
export { openGiftCodeRedeemModal };