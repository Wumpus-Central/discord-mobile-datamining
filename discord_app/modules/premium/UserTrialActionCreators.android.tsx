// === Module 7735: ? ===

// Module 7735
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createFromServer" /* 7061 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ Endpoints: c5, PaymentGateways: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/premium/UserTrialActionCreators.android.tsx");

export default {
  acknowledgeUserTrialOffer(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let body = tmp7;
              body = undefined;
              if (null == closure_1_0.expiresAt) {
                c3 = 1;
                const HTTP = closure_1_0(closure_1_2[3]).HTTP;
                obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = c5.USER_TRIAL_OFFER_ACKNOWLEDGED(tmp39.id);
                const obj2 = { payment_gateway: null };
                obj2[0] = closure_1_6.GOOGLE;
                obj1[1] = obj2;
                obj1[2] = closure_1_0(closure_1_2[3]).rejectWithMigratedError();
                c4 = 2;
                c5 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = HTTP.post(obj1);
                return obj3;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              if (404 === status.status) {
                obj3 = closure_1_1(closure_1_2[4]);
                obj3.dispatch({ type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null });
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1.body;
              obj = closure_1_1(closure_1_2[4]);
              let fromServer = null;
              if (null != body) {
                fromServer = c4.createFromServer(body);
              }
              const obj4 = { type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null };
              obj4[1] = fromServer;
              obj.dispatch(obj4);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
          c5 = 3;
        } catch (tmp30) {
          status = tmp30;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp30;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  }
};