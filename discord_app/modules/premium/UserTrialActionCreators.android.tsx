// discord_app/modules/premium/UserTrialActionCreators.android.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ Endpoints: c4, PaymentGateways: c5 } = ME);
const result = require("sendRequest").fileFinishedImporting("modules/premium/UserTrialActionCreators.android.tsx");

export default {
  acknowledgeUserTrialOffer(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let body = tmp7;
              body = undefined;
              if (null == outer1_0.expires_at) {
                let c3 = 1;
                const HTTP = outer1_0(outer1_2[2]).HTTP;
                const obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = c4.USER_TRIAL_OFFER_ACKNOWLEDGED(tmp34.id);
                const obj2 = { payment_gateway: null };
                obj2[0] = constants.GOOGLE;
                obj1[1] = obj2;
                obj1[2] = outer1_0(outer1_2[2]).rejectWithMigratedError();
                c4 = 2;
                constants = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = HTTP.post(obj1);
                return obj3;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              if (404 === status.status) {
                obj3 = outer1_1(outer1_2[3]);
                obj3.dispatch({ type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null });
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1.body;
              obj = outer1_1(outer1_2[3]);
              const obj4 = { type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null };
              obj4[1] = body;
              obj.dispatch(obj4);
              c3 = 0;
            }
            c3 = 0;
            constants = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
          constants = 3;
        } catch (tmp25) {
          status = tmp25;
          if (tmp4 === c3) {
            constants = tmp2;
            throw tmp25;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  }
};