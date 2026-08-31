// discord_app/actions/native/GiftCodeActionCreators.tsx
import asyncRequireImpl from "../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4691 from "../ModalActionCreators.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../../Constants.tsx";

require = arg1;
function redeemGiftCode(arg0) {
  const self = this;
  const apply = _redeemGiftCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _redeemGiftCode() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (paymentSource === 2) {
        paymentSource = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          paymentSource = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              paymentSource = 3;
              throw arg1;
            } else if (arg0 === 2) {
              paymentSource = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              options = tmp7;
              let callback;
              options = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              ({ code: c0, options } = callback);
              if (options === undefined) {
                options = paymentSource;
              }
              ({ onRedeemed: c2, onError: c3 } = callback);
              let channelId;
              constants = undefined;
              paymentSource = undefined;
              let id;
              closure_8 = undefined;
              let billingError;
              constants = 1;
              paymentSource = 1;
              return { value: "Object", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              paymentSource = 3;
              throw arg1;
            } else if (arg0 === 2) {
              paymentSource = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (obj18.getIsPaymentsBlocked()) {
                options(8448)();
                paymentSource = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                channelId = options.channelId;
                let tmp41 = null;
                if (undefined !== channelId) {
                  tmp41 = channelId;
                }
                constants = tmp41;
                paymentSource = options.paymentSource;
                let tmp46 = null;
                if (undefined !== paymentSource) {
                  tmp46 = paymentSource;
                }
                id = tmp46;
                let obj6 = options(709);
                const obj2 = { type: "GIFT_CODE_REDEEM", code: null };
                obj2[1] = callback;
                obj6.dispatch(obj2);
                channelId = 1;
                const HTTP = callback(530).HTTP;
                let obj3 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
                obj3[0] = channelId.GIFT_CODE_REDEEM(callback);
                const obj4 = { channel_id: null, payment_source_id: null };
                obj4[0] = constants;
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                obj4[1] = id;
                obj3[1] = obj4;
                constants = 3;
                paymentSource = 1;
                let obj5 = { value: null, done: false };
                obj5[0] = HTTP.post(obj3);
                return obj5;
              }
              obj18 = callback(7130);
            }
          } else if (2 === tmp7) {
            channelId = 0;
            closure_10 = c3;
            billingError = new callback(4346).BillingError(closure_10);
            obj3 = options(709);
            obj6 = { type: "GIFT_CODE_REDEEM_FAILURE", code: null, error: null };
            obj6[1] = callback;
            obj6[2] = billingError;
            obj3.dispatch(obj6);
            obj5 = options(698);
            obj5.track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
            if (c3 != null) {
              tmp32(billingError);
            }
            throw billingError;
          } else if (arg0 === 1) {
            paymentSource = 3;
            throw arg1;
          } else if (arg0 === 2) {
            channelId = 0;
            paymentSource = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            closure_8 = arg1;
            const obj8 = { type: "GIFT_CODE_REDEEM_SUCCESS", code: null };
            obj8[1] = callback;
            options(709).dispatch(obj8);
            const obj15 = options(709);
            options(698).track(constants.OPEN_MODAL, { type: "gift_accept" });
            if (dependencyMap != null) {
              dependencyMap();
            }
            obj = { code: null, entitlement: null };
            obj[0] = callback;
            obj[1] = closure_8;
            channelId = 0;
            paymentSource = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = obj;
            return obj9;
          }
        } catch (tmp66) {
          c3 = tmp66;
          if (tmp4 === channelId) {
            paymentSource = tmp2;
            throw tmp66;
          } else {
            constants = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function openGiftCodeRedeemModal(code) {
  let obj = _modDef4691;
  obj = { code };
  obj.pushLazy(asyncRequireImpl(8453, dependencyMap.paths), obj, "GIFT_CODE_REDEEM_MODAL_KEY");
}
({ Endpoints: c4, AnalyticEvents: c5 } = ME);
let closure_6 = Object.freeze({});
const result = require("set").fileFinishedImporting("actions/native/GiftCodeActionCreators.tsx");

export default { redeemGiftCode, openGiftCodeRedeemModal };
export { redeemGiftCode };
export { openGiftCodeRedeemModal };