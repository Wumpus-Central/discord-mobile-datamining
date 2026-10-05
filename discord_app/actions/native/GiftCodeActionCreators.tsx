// discord_app/actions/native/GiftCodeActionCreators.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../ModalActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c5, c6, closure_3;

let closure_4;
let hasOwnProperty;
function redeemGiftCode() {
  return obj(...arguments);
}
let value = function _redeemGiftCode() {
  const obj = _asyncToGenerator(async function (code) {
    let c0;
    let c2;
    let c3;
    let obj9;
    let options;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (code === 1) {
        throw value;
      } else if (code === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let channelId;
        let channel_id;
        let paymentSource;
        let id;
        let entitlement;
        let billingError;
        c6 = 2;
        if (0 === c5) {
          if (code === 1) {
            c6 = 3;
            throw value;
          } else if (code === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            code = undefined;
            options = undefined;
            c3 = undefined;
            ({ code: c0, options } = closure_0);
            if (options === undefined) {
              options = closure_2_6;
            }
            ({ onRedeemed: c2, onError: c3 } = closure_0);
            channelId = undefined;
            channel_id = undefined;
            paymentSource = undefined;
            id = undefined;
            entitlement = undefined;
            billingError = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (code === 1) {
            c6 = 3;
            throw value;
          } else if (code === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj18 = closure_130_0(closure_130_2[2]);
            if (obj18.getIsPaymentsBlocked()) {
              closure_130_1(closure_130_2[3])();
              c6 = 3;
              return { value: "IconComponent", done: null };
            } else {
              channelId = options.channelId;
              let tmp36 = null;
              if (undefined !== channelId) {
                tmp36 = channelId;
              }
              channel_id = tmp36;
              paymentSource = options.paymentSource;
              let tmp41 = null;
              if (undefined !== paymentSource) {
                tmp41 = paymentSource;
              }
              id = tmp41;
              const obj8 = { type: "GIFT_CODE_REDEEM", code };
              const obj7 = closure_130_1(closure_130_2[4]);
              obj7.dispatch(obj8);
              c4 = 1;
              const HTTP = closure_130_0(closure_130_2[5]).HTTP;
              const request = {
                url: closure_130_4.GIFT_CODE_REDEEM(code),
                body: obj9,
                oldFormErrors: true,
                rejectWithError: false,
              };
              const post = HTTP.post;
              obj9 = { channel_id, payment_source_id: id };
              id = undefined;
              if (id != null) {
                id = id.id;
              }
              c5 = 3;
              c6 = 1;
              const obj10 = { value: post(request), done: false };
              return obj10;
            }
          }
        } else if (2 === c5) {
          c4 = 0;
          let closure_10 = closure_3;
          const self = this;
          const self2 = this;
          billingError = new closure_130_0(closure_130_2[7]).BillingError(closure_10);
          const obj11 = { type: "GIFT_CODE_REDEEM_FAILURE", code, error: billingError };
          const obj4 = closure_130_1(closure_130_2[4]);
          obj4.dispatch(obj11);
          const obj6 = closure_130_1(closure_130_2[6]);
          obj6.track(closure_130_5.OPEN_MODAL, { type: "gift_accept", location: null });
          if (c3 != null) {
            tmp27(billingError);
          }
          throw billingError;
        } else if (code === 1) {
          c6 = 3;
          throw value;
        } else if (code === 2) {
          c4 = 0;
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          entitlement = value;
          const obj13 = { type: "GIFT_CODE_REDEEM_SUCCESS", code };
          const obj15 = closure_130_1(closure_130_2[4]);
          obj15.dispatch(obj13);
          const obj17 = closure_130_1(closure_130_2[6]);
          obj17.track(closure_130_5.OPEN_MODAL, { type: "gift_accept" });
          if (tmp != null) {
            tmp();
          }
          value = { code, entitlement };
          c4 = 0;
          c6 = 3;
          const obj14 = { value, done: true };
          return obj14;
        }
      } catch (tmp61) {
        closure_3 = tmp61;
        if (0 === c4) {
          c6 = 3;
          throw tmp61;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function openGiftCodeRedeemModal(c0, fromServer) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code: _require, giftCodeDebugOverride: fromServer };
  obj.pushLazy(asyncRequire(11097, dependencyMap.paths), obj2, "GIFT_CODE_REDEEM_MODAL_KEY");
}
({ Endpoints: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
let closure_6 = Object.freeze({});
const result = size.fileFinishedImporting("actions/native/GiftCodeActionCreators.tsx");

export default { redeemGiftCode, openGiftCodeRedeemModal };
export { redeemGiftCode };
export { openGiftCodeRedeemModal };
