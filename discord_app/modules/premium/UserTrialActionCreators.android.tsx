// === Module 13306: UserTrialActionCreators ===

// Module 13306 (UserTrialActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserTrialOfferRecord from "UserTrialOfferRecord" /* 7454 */;

const require = fn;
const Constants = fn(1074);
({ Endpoints: hasOwnProperty, PaymentGateways: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/UserTrialActionCreators.android.tsx");

export default {
  acknowledgeUserTrialOffer(userTrialOffer) {
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              userTrialOffer = tmp7;
              let body;
              if (!userTrialOffer.hasAcknowledged) {
                c3 = 1;
                const HTTP = userTrialOffer(tmp26[3]).HTTP;
                const request = { url: c5.USER_TRIAL_OFFER_ACKNOWLEDGED(tmp38.id), body: null, rejectWithError: null };
                const obj1 = { payment_gateway: constants.GOOGLE };
                request.body = obj1;
                request.rejectWithError = userTrialOffer(tmp26[3]).rejectWithMigratedError();
                c4 = 2;
                c5 = 1;
                const obj2 = { value: HTTP.post(request), done: false };
                return obj2;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              if (404 === tmp26.status) {
                tmp3(tmp26[4]).dispatch({ type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null });
                const obj10 = tmp3(tmp26[4]);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              body = value.body;
              obj = tmp3(tmp26[4]);
              let fromServer = null;
              if (null != body) {
                fromServer = c4.createFromServer(body);
              }
              const obj3 = { type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: fromServer };
              obj.dispatch(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          }
          c5 = 3;
        } catch (tmp26) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp26;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  }
};