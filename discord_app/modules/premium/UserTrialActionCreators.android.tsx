// discord_app/modules/premium/UserTrialActionCreators.android.tsx
import set from "set";
import createFromServer from "createFromServer";
import ME from "ME";

let c5;
let closure_6;
const require = arg1;
({ Endpoints: c5, PaymentGateways: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/premium/UserTrialActionCreators.android.tsx");

export default {
  acknowledgeUserTrialOffer(arg0) {
    let closure_0 = arg0;
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
              let closure_1 = tmp3;
              let body = tmp7;
              body = undefined;
              if (null == outer1_0.expiresAt) {
                let c3 = 1;
                const HTTP = outer1_0(outer1_2[3]).HTTP;
                const obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = c5.USER_TRIAL_OFFER_ACKNOWLEDGED(tmp39.id);
                const obj2 = { payment_gateway: null };
                obj2[0] = outer1_6.GOOGLE;
                obj1[1] = obj2;
                obj1[2] = outer1_0(outer1_2[3]).rejectWithMigratedError();
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
                obj3 = outer1_1(outer1_2[4]);
                obj3.dispatch({ type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null });
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1.body;
              obj = outer1_1(outer1_2[4]);
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