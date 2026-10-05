// discord_app/modules/premium/UserTrialActionCreators.android.tsx
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserTrialOfferRecord from "../user_offers/records/UserTrialOfferRecord.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5;

let hasOwnProperty;
let metroRequire;
({ Endpoints: hasOwnProperty, PaymentGateways: metroRequire } = Constants);
let obj = {
  acknowledgeUserTrialOffer(userTrialOffer) {
    return (async () => {
      let closure_0;
      let closure_1;
      let obj4;
      let obj5;
      let status;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let body;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              userTrialOffer = tmp4;
              body = undefined;
              if (!userTrialOffer.hasAcknowledged) {
                c3 = 1;
                const HTTP = userTrialOffer(status[3]).HTTP;
                const request = {
                  url: c5.USER_TRIAL_OFFER_ACKNOWLEDGED(tmp35.id),
                  body: obj4,
                  rejectWithError: obj5.rejectWithMigratedError(),
                };
                const post = HTTP.post;
                obj4 = { payment_gateway: constants.GOOGLE };
                obj5 = userTrialOffer(status[3]);
                c4 = 2;
                c5 = 1;
                const obj6 = { value: post(request), done: false };
                return obj6;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            if (404 === status.status) {
              const obj9 = tmp(status[4]);
              obj9.dispatch({ type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: null });
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value.body;
            let fromServer = null;
            const dispatch = tmp(status[4]).dispatch;
            const tmp9 = tmp(status[4]);
            if (null != body) {
              fromServer = c4.createFromServer(body);
            }
            const obj = { type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: fromServer };
            dispatch(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp24) {
          status = tmp24;
          if (0 === c3) {
            c5 = 3;
            throw tmp24;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
};
const result = size.fileFinishedImporting("modules/premium/UserTrialActionCreators.android.tsx");

export default obj;
