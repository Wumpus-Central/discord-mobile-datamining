// discord_app/modules/billing/actions/StripeActionCreators.tsx
import Constants from "../../../Constants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c3, c4;

let obj = function _createStripeSetupIntent() {
  obj = _asyncToGenerator(async () => {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let obj4;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            obj4 = closure_0;
            if (closure_0 === undefined) {
              obj4 = {};
            }
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const HTTP = closure_130_0(closure_130_1[2]).HTTP;
            const obj6 = {
              url: closure_130_3.BILLING_STRIPE_SETUP_INTENT_SECRET,
              oldFormErrors: true,
              rejectWithError: true,
            };
            const post = HTTP.post;
            const merged = Object.assign(obj4);
            c3 = 2;
            c4 = 1;
            const obj7 = { value: post(obj6), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = function _createSetupIntentForPaymentElements() {
  obj = _asyncToGenerator(async () => {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let obj4;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            obj4 = closure_0;
            if (closure_0 === undefined) {
              obj4 = {};
            }
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const HTTP = closure_130_0(closure_130_1[2]).HTTP;
            const obj6 = {
              url: closure_130_3.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS,
              oldFormErrors: true,
              rejectWithError: true,
              failImmediatelyWhenRateLimited: true,
            };
            const post = HTTP.post;
            const merged = Object.assign(obj4);
            c3 = 2;
            c4 = 1;
            const obj7 = { value: post(obj6), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/billing/actions/StripeActionCreators.tsx");

export const createStripeSetupIntent = function createStripeSetupIntent() {
  return obj(...arguments);
};
export const createSetupIntentForPaymentElements = function createSetupIntentForPaymentElements() {
  return obj(...arguments);
};
