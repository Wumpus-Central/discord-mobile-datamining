// discord_app/errors/BillingError.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import prototypeDefault from "V6OrEarlierAPIError.tsx";

require = fn;
let obj = { ADDRESS_LINE_1: "address_line1", ADDRESS_LINE_2: "address_line2", ADDRESS_CITY: "address_city", ADDRESS_STATE: "address_state", ADDRESS_ZIP: "address_zip", ADDRESS_COUNTRY: "address_country", CARD_NUMBER: "number", CARD_EXPIRATION_DATE: "exp", CARD_EXPIRATION_MONTH: "exp_month", CARD_EXPIRATION_YEAR: "exp_year" };
let closure_3 = Object.freeze({ [obj.ADDRESS_LINE_1]: obj.ADDRESS_LINE_1, [obj.ADDRESS_LINE_2]: obj.ADDRESS_LINE_2, [obj.ADDRESS_CITY]: obj.ADDRESS_CITY, [obj.ADDRESS_STATE]: obj.ADDRESS_STATE, [obj.ADDRESS_ZIP]: obj.ADDRESS_POSTAL_CODE, [obj.ADDRESS_COUNTRY]: obj.ADDRESS_COUNTRY, [obj.CARD_NUMBER]: obj.CARD_NUMBER, [obj.CARD_EXPIRATION_DATE]: obj.CARD_EXPIRATION_DATE, [obj.CARD_EXPIRATION_MONTH]: obj.CARD_EXPIRATION_DATE, [obj.CARD_EXPIRATION_YEAR]: obj.CARD_EXPIRATION_DATE });
let closure_4 = Object.freeze({ line_1: obj.ADDRESS_LINE_1, line_2: obj.ADDRESS_LINE_2, postal_code: obj.ADDRESS_POSTAL_CODE });
const items = [, , , ];
({ CARD_NUMBER: arr[0], CARD_CVC: arr[1], CARD_EXPIRATION_DATE: arr[2], CARD_NAME: arr[3] } = obj);
const set = new Set(items);
const items1 = [, , , , , , ];
({ ADDRESS_NAME: arr2[0], ADDRESS_LINE_1: arr2[1], ADDRESS_LINE_2: arr2[2], ADDRESS_CITY: arr2[3], ADDRESS_STATE: arr2[4], ADDRESS_POSTAL_CODE: arr2[5], ADDRESS_COUNTRY: arr2[6] } = obj);
const set1 = new Set(items1);
prototypeDefault;
class BillingError extends tmp4 {
  constructor(arg0, arg1) {
    tmp = new tmp(global, fn, tmp6, tmp5, tmp4, tmp3, tmp2, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp.paymentId = null;
    tmp8 = closure_2;
    if (tmp.code === closure_2.NEGATIVE_INVOICE_AMOUNT) {
      tmp40 = closure_0;
      tmp41 = closure_1;
      intl16 = require("getSystemLocale").intl;
      tmp.message = intl16.string(require("getSystemLocale").t["+4Empk"]);
    } else if (tmp.code === tmp8.INVALID_PAYMENT_SOURCE) {
      tmp38 = closure_0;
      tmp39 = closure_1;
      intl15 = require("getSystemLocale").intl;
      tmp.message = intl15.string(require("getSystemLocale").t.DtFqEI);
    } else if (tmp.code === tmp8.UNKNOWN_PAYMENT_SOURCE) {
      tmp36 = closure_0;
      tmp37 = closure_1;
      intl14 = require("getSystemLocale").intl;
      tmp.message = intl14.string(require("getSystemLocale").t.yNYvK1);
    } else if (tmp.code === tmp8.SUBSCRIPTION_RENEWAL_IN_PROGRESS) {
      tmp34 = closure_0;
      tmp35 = closure_1;
      intl13 = require("getSystemLocale").intl;
      tmp.message = intl13.string(require("getSystemLocale").t["3jprCb"]);
    } else if (tmp.code === tmp8.BILLING_TRIAL_REDEMPTION_DISABLED) {
      tmp32 = closure_0;
      tmp33 = closure_1;
      intl12 = require("getSystemLocale").intl;
      tmp.message = intl12.string(require("getSystemLocale").t.MHlpoJ);
    } else if (tmp.code === tmp8.BILLING_BUNDLE_ALREADY_PURCHASED) {
      tmp30 = closure_0;
      tmp31 = closure_1;
      intl11 = require("getSystemLocale").intl;
      tmp.message = intl11.string(require("getSystemLocale").t.Hiwqua);
    } else if (tmp.code === tmp8.BILLING_BUNDLE_PARTIALLY_OWNED) {
      tmp28 = closure_0;
      tmp29 = closure_1;
      intl10 = require("getSystemLocale").intl;
      tmp.message = intl10.string(require("getSystemLocale").t.c5zDr3);
    } else if (tmp.code === tmp8.BILLING_INSUFFICIENT_FUNDS) {
      tmp26 = closure_0;
      tmp27 = closure_1;
      intl9 = require("getSystemLocale").intl;
      tmp.message = intl9.string(require("getSystemLocale").t.yX8s2v);
    } else if (tmp.code === tmp8.CARD_DECLINED) {
      tmp24 = closure_0;
      tmp25 = closure_1;
      intl8 = require("getSystemLocale").intl;
      tmp.message = intl8.string(require("getSystemLocale").t.p0UBvU);
    } else if (tmp.code === tmp8.BILLING_OUTDATED_REQUEST_PARAMETERS) {
      tmp22 = closure_0;
      tmp23 = closure_1;
      intl7 = require("getSystemLocale").intl;
      tmp.message = intl7.string(require("getSystemLocale").t.uhPY5p);
    } else if (tmp.code === tmp8.BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY) {
      tmp20 = closure_0;
      tmp21 = closure_1;
      intl6 = require("getSystemLocale").intl;
      tmp.message = intl6.string(require("getSystemLocale").t.ckFebQ);
    } else if (tmp.code === tmp8.ALREADY_PURCHASED) {
      tmp18 = closure_0;
      tmp19 = closure_1;
      intl5 = require("getSystemLocale").intl;
      tmp.message = intl5.string(require("getSystemLocale").t["3RT0Iu"]);
    } else if (tmp.code === tmp8.BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE) {
      tmp16 = closure_0;
      tmp17 = closure_1;
      intl4 = require("getSystemLocale").intl;
      tmp.message = intl4.string(require("getSystemLocale").t.Zr0Z4K);
    } else {
      num2 = 429;
      if (429 === tmp.status) {
        tmp14 = closure_0;
        tmp15 = closure_1;
        intl3 = require("getSystemLocale").intl;
        tmp.message = intl3.string(require("getSystemLocale").t.sUWxgR);
      } else if (tmp.code === tmp8.UNKNOWN) {
        tmp12 = closure_0;
        tmp13 = closure_1;
        intl2 = require("getSystemLocale").intl;
        tmp.message = intl2.string(require("getSystemLocale").t["5mlOCW"]);
      } else {
        num = 400;
        tmp9 = 400 === tmp.status && null != tmp.fields.captcha_key;
        if (tmp9) {
          tmp10 = closure_0;
          tmp11 = closure_1;
          intl = require("getSystemLocale").intl;
          tmp.message = intl.string(require("getSystemLocale").t["3s/vDN"]);
        }
      }
    }
    for (const key10213 in tmp.fields) {
      tmp45 = key10213;
      tmp46 = closure_3;
      tmp43 = closure_3[key10213];
      if (tmp43) {
      } else {
        tmp42 = closure_4;
        tmp43 = closure_4[key10213];
      }
      if (null == tmp43) {
        continue;
      } else {
        fields = tmp.fields;
        delete tmp3[tmp6];
        tmp.fields[tmp43] = tmp.fields[key10213];
        continue;
      }
      continue;
    }
    tmp44 = null != global.body && typeof global.body.payment_id === "string";
    if (tmp44) {
      tmp.paymentId = global.body.payment_id;
    }
    return tmp;
  }
}
const prototype = BillingError.prototype;
prototype["_isInFieldSet"] = function _isInFieldSet(set) {
  for (const key10004 in this.fields) {
    if (!arg0.has(key10004)) {
      continue;
    } else {
      let flag = true;
      return true;
    }
  }
};
prototype["hasCardError"] = function hasCardError() {
  return this._isInFieldSet(set);
};
prototype["hasAddressError"] = function hasAddressError() {
  return this._isInFieldSet(set1);
};
BillingError.ErrorCodes = obj;
BillingError.Fields = obj;
BillingError.Sections = { CARD: "card", ADDRESS: "address" };
BillingError.CARD_ERRORS = set;
BillingError.ADDRESS_ERRORS = set1;
const result = require("obj132").fileFinishedImporting("errors/BillingError.tsx");

export default BillingError;
export const ErrorCodes = obj;
export const parseV8BillingAddressSkemaErrorToBillingError = function parseV8BillingAddressSkemaErrorToBillingError(c8) {
  if (typeof BillingError !== "string") {
    let code;
    if (BillingError != null) {
      const body = BillingError.body;
      if (body != null) {
        code = body.code;
      }
    }
    if (code === sendRequest.INVALID_FORM_BODY_ERROR_CODE) {
      let errors;
      if (BillingError != null) {
        const body2 = BillingError.body;
        if (body2 != null) {
          errors = body2.errors;
        }
      }
      if (!Array.isArray(errors)) {
        let billing_address;
        if (BillingError != null) {
          const body3 = BillingError.body;
          if (body3 != null) {
            errors = body3.errors;
            if (errors != null) {
              billing_address = errors.billing_address;
            }
          }
        }
        if (null != billing_address) {
          for (const key10023 in arg0.body.errors.billing_address) {
            billing_address = arg0.body.errors.billing_address;
            delete tmp3[tmp4];
            arg0.body.errors[key10023] = arg0.body.errors.billing_address[key10023];
            continue;
          }
          const errors2 = BillingError.body.errors;
          delete tmp2[tmp];
        }
      }
      const body4 = BillingError.body;
      let errors1;
      if (body4 != null) {
        errors1 = body4.errors;
      }
      if (null != errors1) {
        BillingError.body = sendRequest.convertSkemaError(BillingError.body.errors);
      }
    }
  }
  return new BillingError(BillingError);
};