// === Module 4550: BillingError ===

// Module 4550 (BillingError)
import intl17 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import V6OrEarlierAPIError from "errors/V6OrEarlierAPIError" /* 4551 */;
import size from "module_2" /* 2 */;

const ErrorCodes = { UNKNOWN: 0, [0]: "UNKNOWN", UNKNOWN_BILLING_PROFILE: 100001, [100001]: "UNKNOWN_BILLING_PROFILE", UNKNOWN_PAYMENT_SOURCE: 100002, [100002]: "UNKNOWN_PAYMENT_SOURCE", UNKNOWN_SUBSCRIPTION: 100003, [100003]: "UNKNOWN_SUBSCRIPTION", ALREADY_SUBSCRIBED: 100004, [100004]: "ALREADY_SUBSCRIBED", INVALID_PLAN: 100005, [100005]: "INVALID_PLAN", PAYMENT_SOURCE_REQUIRED: 100006, [100006]: "PAYMENT_SOURCE_REQUIRED", ALREADY_CANCELED: 100007, [100007]: "ALREADY_CANCELED", INVALID_PAYMENT: 100008, [100008]: "INVALID_PAYMENT", ALREADY_REFUNDED: 100009, [100009]: "ALREADY_REFUNDED", INVALID_BILLING_ADDRESS: 100010, [100010]: "INVALID_BILLING_ADDRESS", ALREADY_PURCHASED: 100011, [100011]: "ALREADY_PURCHASED", DUPLICATE_PURCHASE_ATTEMPT: 100012, [100012]: "DUPLICATE_PURCHASE_ATTEMPT", BILLING_PURCHASE_REQUEST_INVALID: 100017, [100017]: "BILLING_PURCHASE_REQUEST_INVALID", NEGATIVE_INVOICE_AMOUNT: 100027, [100027]: "NEGATIVE_INVOICE_AMOUNT", AUTHENTICATION_REQUIRED: 100029, [100029]: "AUTHENTICATION_REQUIRED", SUBSCRIPTION_RENEWAL_IN_PROGRESS: 100042, [100042]: "SUBSCRIPTION_RENEWAL_IN_PROGRESS", CONFIRMATION_REQUIRED: 100047, [100047]: "CONFIRMATION_REQUIRED", CARD_DECLINED: 100054, [100054]: "CARD_DECLINED", BILLING_OPEN_INVOICE_NOT_FOUND: 100059, [100059]: "BILLING_OPEN_INVOICE_NOT_FOUND", ASYNC_PAYMENT_PENDING: 100075, [100075]: "ASYNC_PAYMENT_PENDING", INVALID_GIFT_REDEMPTION_FRAUD_REJECTED: 50097, [50097]: "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", PURCHASE_TOKEN_AUTHORIZATION_REQUIRED: 100056, [100056]: "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", INVALID_PAYMENT_SOURCE: 50048, [50048]: "INVALID_PAYMENT_SOURCE", INVALID_CURRENCY_FOR_PAYMENT_SOURCE: 100051, [100051]: "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", BILLING_APPLE_SERVER_API_ERROR: 100070, [100070]: "BILLING_APPLE_SERVER_API_ERROR", BILLING_TRIAL_REDEMPTION_DISABLED: 100078, [100078]: "BILLING_TRIAL_REDEMPTION_DISABLED", BILLING_PAUSE_DISABLED: 100079, [100079]: "BILLING_PAUSE_DISABLED", BILLING_PAUSE_PENDING_ALREADY_SET: 100080, [100080]: "BILLING_PAUSE_PENDING_ALREADY_SET", BILLING_PAUSE_NOT_ELIGIBLE: 100081, [100081]: "BILLING_PAUSE_NOT_ELIGIBLE", BILLING_PAUSE_INVALID_INTERVAL: 100082, [100082]: "BILLING_PAUSE_INVALID_INTERVAL", BILLING_ALREADY_PAUSED: 100083, [100083]: "BILLING_ALREADY_PAUSED", BILLING_CANNOT_CHARGE_ZERO_AMOUNT: 100084, [100084]: "BILLING_CANNOT_CHARGE_ZERO_AMOUNT", BILLING_PAUSE_INVALID_UPDATE: 100094, [100094]: "BILLING_PAUSE_INVALID_UPDATE", BILLING_BUNDLE_ALREADY_PURCHASED: 100096, [100096]: "BILLING_BUNDLE_ALREADY_PURCHASED", BILLING_BUNDLE_PARTIALLY_OWNED: 100097, [100097]: "BILLING_BUNDLE_PARTIALLY_OWNED", BILLING_INSUFFICIENT_FUNDS: 100107, [100107]: "BILLING_INSUFFICIENT_FUNDS", BILLING_OUTDATED_REQUEST_PARAMETERS: 100111, [100111]: "BILLING_OUTDATED_REQUEST_PARAMETERS", BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY: 100144, [100144]: "BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY", BILLING_SPENDING_LIMIT_WILL_EXCEED: 100150, [100150]: "BILLING_SPENDING_LIMIT_WILL_EXCEED", BILLING_SPENDING_LIMIT_REACHED: 100151, [100151]: "BILLING_SPENDING_LIMIT_REACHED", BILLING_ORDER_NOT_SIGNABLE: 100152, [100152]: "BILLING_ORDER_NOT_SIGNABLE", BILLING_APPLE_STORE_COUNTRY_MISMATCH: 100153, [100153]: "BILLING_APPLE_STORE_COUNTRY_MISMATCH", BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE: 100155, [100155]: "BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE", VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE: 590001, [590001]: "VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE" };
const obj2 = { CARD_NUMBER: "cardNumber", CARD_CVC: "cvc", CARD_EXPIRATION_DATE: "expirationDate", CARD_NAME: "name", ADDRESS_NAME: "name", ADDRESS_LINE_1: "line1", ADDRESS_LINE_2: "line2", ADDRESS_CITY: "city", ADDRESS_STATE: "state", ADDRESS_POSTAL_CODE: "postalCode", ADDRESS_COUNTRY: "country" };
const obj3 = { ADDRESS_LINE_1: "address_line1", ADDRESS_LINE_2: "address_line2", ADDRESS_CITY: "address_city", ADDRESS_STATE: "address_state", ADDRESS_ZIP: "address_zip", ADDRESS_COUNTRY: "address_country", CARD_NUMBER: "number", CARD_EXPIRATION_DATE: "exp", CARD_EXPIRATION_MONTH: "exp_month", CARD_EXPIRATION_YEAR: "exp_year" };
const obj4 = { [obj3.ADDRESS_LINE_1]: obj2.ADDRESS_LINE_1, [obj3.ADDRESS_LINE_2]: obj2.ADDRESS_LINE_2, [obj3.ADDRESS_CITY]: obj2.ADDRESS_CITY, [obj3.ADDRESS_STATE]: obj2.ADDRESS_STATE, [obj3.ADDRESS_ZIP]: obj2.ADDRESS_POSTAL_CODE, [obj3.ADDRESS_COUNTRY]: obj2.ADDRESS_COUNTRY, [obj3.CARD_NUMBER]: obj2.CARD_NUMBER, [obj3.CARD_EXPIRATION_DATE]: obj2.CARD_EXPIRATION_DATE, [obj3.CARD_EXPIRATION_MONTH]: obj2.CARD_EXPIRATION_DATE, [obj3.CARD_EXPIRATION_YEAR]: obj2.CARD_EXPIRATION_DATE };
const _false = Object.freeze(obj4);
const obj5 = { line_1: obj2.ADDRESS_LINE_1, line_2: obj2.ADDRESS_LINE_2, postal_code: obj2.ADDRESS_POSTAL_CODE };
const React3 = Object.freeze(obj5);
const items = [, , , ];
({ CARD_NUMBER: arr[0], CARD_CVC: arr[1], CARD_EXPIRATION_DATE: arr[2], CARD_NAME: arr[3] } = obj2);
const set = new Set(items);
const items1 = [, , , , , , ];
({ ADDRESS_NAME: arr2[0], ADDRESS_LINE_1: arr2[1], ADDRESS_LINE_2: arr2[2], ADDRESS_CITY: arr2[3], ADDRESS_STATE: arr2[4], ADDRESS_POSTAL_CODE: arr2[5], ADDRESS_COUNTRY: arr2[6] } = obj2);
const set1 = new Set(items1);
class BillingError extends V6OrEarlierAPIError {
  constructor(combined, UNKNOWN) {
    const tmp48 = new tmp(combined, UNKNOWN, tmp6, tmp5, tmp4, tmp3, tmp2, new.target);
    tmp48.paymentId = null;
    if (tmp48.code === obj.NEGATIVE_INVOICE_AMOUNT) {
      const intl16 = intl17.intl;
      tmp48.message = intl16.string(intl17.t["+4Empk"]);
    } else if (tmp48.code === obj.INVALID_PAYMENT_SOURCE) {
      const intl15 = intl17.intl;
      tmp48.message = intl15.string(intl17.t.DtFqEI);
    } else if (tmp48.code === obj.UNKNOWN_PAYMENT_SOURCE) {
      const intl14 = intl17.intl;
      tmp48.message = intl14.string(intl17.t.yNYvK1);
    } else if (tmp48.code === obj.SUBSCRIPTION_RENEWAL_IN_PROGRESS) {
      const intl13 = intl17.intl;
      tmp48.message = intl13.string(intl17.t["3jprCb"]);
    } else if (tmp48.code === obj.BILLING_TRIAL_REDEMPTION_DISABLED) {
      const intl12 = intl17.intl;
      tmp48.message = intl12.string(intl17.t.MHlpoJ);
    } else if (tmp48.code === obj.BILLING_BUNDLE_ALREADY_PURCHASED) {
      const intl11 = intl17.intl;
      tmp48.message = intl11.string(intl17.t.Hiwqua);
    } else if (tmp48.code === obj.BILLING_BUNDLE_PARTIALLY_OWNED) {
      const intl10 = intl17.intl;
      tmp48.message = intl10.string(intl17.t.c5zDr3);
    } else if (tmp48.code === obj.BILLING_INSUFFICIENT_FUNDS) {
      const intl9 = intl17.intl;
      tmp48.message = intl9.string(intl17.t.yX8s2v);
    } else if (tmp48.code === obj.CARD_DECLINED) {
      const intl8 = intl17.intl;
      tmp48.message = intl8.string(intl17.t.p0UBvU);
    } else if (tmp48.code === obj.BILLING_OUTDATED_REQUEST_PARAMETERS) {
      const intl7 = intl17.intl;
      tmp48.message = intl7.string(intl17.t.uhPY5p);
    } else if (tmp48.code === obj.BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY) {
      const intl6 = intl17.intl;
      tmp48.message = intl6.string(intl17.t.ckFebQ);
    } else if (tmp48.code === obj.ALREADY_PURCHASED) {
      const intl5 = intl17.intl;
      tmp48.message = intl5.string(intl17.t["3RT0Iu"]);
    } else if (tmp48.code === obj.BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE) {
      const intl4 = intl17.intl;
      tmp48.message = intl4.string(intl17.t.Zr0Z4K);
    } else if (429 === tmp48.status) {
      const intl3 = intl17.intl;
      tmp48.message = intl3.string(intl17.t.sUWxgR);
    } else if (tmp48.code === obj.UNKNOWN) {
      const intl2 = intl17.intl;
      tmp48.message = intl2.string(intl17.t["5mlOCW"]);
    } else {
      const tmp9 = 400 === tmp48.status && null != tmp48.fields.captcha_key;
      if (tmp9) {
        const intl = intl17.intl;
        tmp48.message = intl.string(intl17.t["3s/vDN"]);
      }
    }
    for (const key10213 in tmp48.fields) {
      let tmp43 = closure_3[key10213] || closure_4[key10213];
      if (null == tmp43) {
        continue;
      } else {
        let tmp44 = tmp48.fields[key10213];
        delete tmp7.fields[key10213];
        tmp48.fields[tmp43] = tmp44;
        continue;
      }
      continue;
    }
    const tmp45 = null != combined.body && typeof combined.body.payment_id === "string";
    if (tmp45) {
      tmp48.paymentId = combined.body.payment_id;
    }
    return tmp48;
  }
  _isInFieldSet(set) {
    for (const key10004 in this.fields) {
      if (!set.has(key10004)) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
  }
  hasCardError() {
    return this._isInFieldSet(set);
  }
  hasAddressError() {
    return this._isInFieldSet(set1);
  }
}
const prototype = BillingError.prototype;
BillingError.ErrorCodes = ErrorCodes;
BillingError.Fields = obj2;
BillingError.Sections = { CARD: "card", ADDRESS: "address" };
BillingError.CARD_ERRORS = set;
BillingError.ADDRESS_ERRORS = set1;
const result = size.fileFinishedImporting("errors/BillingError.tsx");

export default BillingError;
export { ErrorCodes };
export const parseV8BillingAddressSkemaErrorToBillingError = function parseV8BillingAddressSkemaErrorToBillingError(body) {
  if (typeof body !== "string") {
    let code;
    if (body != null) {
      body = body.body;
      if (body != null) {
        code = body.code;
      }
    }
    if (code === HTTPUtils.INVALID_FORM_BODY_ERROR_CODE) {
      let errors1;
      const _Array = Array;
      if (body != null) {
        const body2 = body.body;
        if (body2 != null) {
          errors1 = body2.errors;
        }
      }
      if (!isArray(errors1)) {
        let billing_address;
        if (body != null) {
          const body3 = body.body;
          if (body3 != null) {
            const errors = body3.errors;
            if (errors != null) {
              billing_address = errors.billing_address;
            }
          }
        }
        if (null != billing_address) {
          for (const key10023 in body.body.errors.billing_address) {
            let tmp11 = body.body.errors.billing_address[key10023];
            delete body.body.errors.billing_address[key10023];
            body.body.errors[key10023] = tmp11;
            continue;
          }
          delete body.body.errors["billing_address"];
        }
      }
      const body4 = body.body;
      let errors2;
      if (body4 != null) {
        errors2 = body4.errors;
      }
      if (null != errors2) {
        const obj = HTTPUtils;
        body.body = obj.convertSkemaError(body.body.errors);
      }
    }
  }
  return new BillingError(body);
};