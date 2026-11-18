// discord_app/modules/billing/errors/ClientBillingError.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import BillingErrorDefault from "../../../errors/BillingError.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const PaymentSourceTypes = fn(1083).PaymentSourceTypes;
const logger = new LoggerDefault("ClientBillingError");
let closure_6 = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL;
const metroImportDefault = {
  payment_method_confirmation: "PaymentMethodConfirmation",
  submit_address_step: "SubmitAddressStep",
  payment_element_setup: "PaymentElementSetup",
  express_checkout_vault: "ExpressCheckoutAddPaymentMethod",
  express_checkout_load: "ExpressCheckoutLoad",
  payment_authentication: "PaymentAuthentication",
  braintree_tokenize: "BraintreeTokenize",
  gateway_sdk_init: "GatewaySdkInit",
  stripe_load: "StripeLoad",
};
const set = new Set(["card_error", "api_connection_error", "validation_error"]);
const set1 = new Set(["setup_intent_authentication_failure", "payment_intent_authentication_failure"]);
let closure_10 = ["google_pay.", "apple_pay."];
const set2 = new Set(["BraintreeError", "AdyenCheckoutError"]);
const re12 = /Failed to fetch|NetworkError|Load failed|Failed to load Stripe\.js/;
const set3 = new Set(["PAYPAL_TOKENIZATION_REQUEST_ACTIVE"]);
let ClientBillingError;
class ClientBillingError extends Error {
  constructor(arg0, arg1) {
    classifyResult = ClientBillingError.classify(fn);
    tmp1 = new tmp(ClientBillingError.getMessage(classifyResult), tmp4, tmp3, tmp2, new.target, tmp, fn);
    tmp1.classification = classifyResult;
    tmp1.source = global;
    tmp1.key = tmp1.getKey();
    tmp1.shouldReport = tmp1.getShouldReport();
    tmp6 = undefined;
    if (fn instanceof Error) {
      tmp6 = fn;
    }
    tmp1.cause = tmp6;
    tmp1.name = "" + closure_7[global.site] + "Error[" + tmp1.key + "]";
    return tmp1;
  }
}
const prototype = ClientBillingError.prototype;
ClientBillingError["report"] = function report(source, error, arg2) {
  if (typeof ClientBillingError === "function") {
    const classifyResult = ClientBillingError.classify(error);
    const tmp10 = new tmp(
      ClientBillingError.getMessage(classifyResult),
      tmp7,
      tmp6,
      tmp5,
      tmp4,
      tmp3,
      tmp2,
      ClientBillingError,
    );
    tmp10.classification = classifyResult;
    tmp10.source = source;
    tmp10.key = tmp10.getKey();
    tmp10.shouldReport = tmp10.getShouldReport();
    const _Error = Error;
    let tmp16;
    if (error instanceof Error) {
      tmp16 = error;
    }
    tmp10.cause = tmp16;
    const _HermesInternal = HermesInternal;
    tmp10.name = "" + dependencyMap[source.site] + "Error[" + tmp10.key + "]";
    const sentryOptions = tmp10.getSentryOptions(arg2);
    let str4 = "Skipping Sentry report:";
    if (tmp10.shouldReport) {
      str4 = "Reporting to Sentry:";
    }
    const obj2 = { fingerprint: null, tags: null };
    ({ fingerprint: obj3.fingerprint, tags: obj3.tags } = sentryOptions);
    if (closure_6) {
      const obj4 = { extra: sentryOptions.extra };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    logger.info(str4, tmp10.name, obj2);
    if (tmp10.shouldReport) {
      const result = BillingUtils.captureBillingException(tmp10, sentryOptions);
    }
    return tmp10;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
ClientBillingError["classify"] = function classify(error) {
  if (error instanceof BillingErrorDefault) {
    const obj2 = { shape: "billing_error", error };
    return obj2;
  } else {
    if (obj.isOfTypeStripeError(error)) {
      const obj3 = { shape: "stripe_error", error };
      return obj3;
    } else if (error instanceof HTTPUtils.HTTPResponseError) {
      const obj4 = { shape: "http_error", error };
      return obj4;
    } else if (typeof error === "string") {
      const obj5 = { shape: "string", error };
      return obj5;
    } else {
      let tmp4 = null;
      if (typeof error === "object") {
        tmp4 = null;
        if (null !== error) {
          let code = error.code;
          let tmp3 = null;
          if (typeof code === "string") {
            tmp3 = code;
          }
          tmp4 = tmp3;
        }
      }
      code = tmp4;
      if (null != tmp4) {
        if (closure_10.some((item) => code.startsWith(item))) {
          const obj6 = { shape: "stripe_wallet_exception", error };
          let obj9 = obj6;
        }
        return obj9;
      }
      if (null != tmp4) {
        const _Error = Error;
        if (error instanceof Error) {
          if (set2.has(error.name)) {
            const obj7 = { shape: "gateway_sdk_error", error };
            obj9 = obj7;
          }
        }
      }
      const _Error2 = Error;
      if (error instanceof Error) {
        const obj8 = { shape: "error", error };
        obj9 = obj8;
      } else {
        obj9 = { shape: "unknown", error };
      }
    }
    obj = BillingUtils;
  }
};
ClientBillingError["getBillingErrorFieldNames"] = function getBillingErrorFieldNames(error) {
  const keys = Object.keys(error.fields);
  const found = keys.filter((item) => "_misc" !== item);
  return found.sort();
};
ClientBillingError["getMessage"] = function getMessage(shape) {
  if ("string" === shape.shape) {
    return shape.error;
  } else {
    const error = shape.error;
    let keyFor = null;
    if (typeof error === "object") {
      keyFor = null;
      if (null !== error) {
        const message = error.message;
        let tmp3 = null;
        if (typeof message === "string") {
          tmp3 = message;
        }
        keyFor = tmp3;
      }
    }
    if (null == keyFor) {
      keyFor = ClientBillingError.getKeyFor(shape);
    }
    return keyFor;
  }
};
ClientBillingError["getKeyFor"] = function getKeyFor(classification) {
  const shape = classification.shape;
  if ("billing_error" === shape) {
    const error2 = classification.error;
    const billingErrorFieldNames = ClientBillingError.getBillingErrorFieldNames(error2);
    if (billingErrorFieldNames.length > 0) {
      const _HermesInternal5 = HermesInternal;
      let str17 = "field_error:" + billingErrorFieldNames.join("+");
    } else if (error2.code > 0) {
      const _String = String;
      str17 = String(error2.code);
    } else {
      str17 = "unknown";
      if (null != error2.status) {
        const _HermesInternal4 = HermesInternal;
        str17 = "http_" + error2.status;
      }
    }
    return str17;
  } else if ("stripe_error" === shape) {
    const error = classification.error;
    if (null == error.code) {
      let type = error.type;
    } else {
      const _HermesInternal3 = HermesInternal;
      type = "" + error.type + ":" + error.code;
    }
    return type;
  } else if ("http_error" === shape) {
    const _HermesInternal2 = HermesInternal;
    return "http_" + classification.error.status;
  } else if ("stripe_wallet_exception" === shape) {
    return classification.error.code;
  } else if ("gateway_sdk_error" === shape) {
    const str9 = classification.error.name.toLowerCase();
    const replaced = classification.error.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
    const _HermesInternal = HermesInternal;
    return "" + replaced.slice(0, 48) + ":" + classification.error.code;
  } else if ("string" === shape) {
    const str4 = classification.error.toLowerCase();
    const replaced1 = classification.error
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
    return replaced1.slice(0, 48);
  } else if ("error" === shape) {
    return classification.error.name;
  } else {
    return "unknown" === shape ? "unknown" : undefined;
  }
};
prototype["getKey"] = function getKey() {
  const str = ClientBillingError.getKeyFor(this.classification);
  return ClientBillingError.getKeyFor(this.classification)
    .replace(/authentication/g, "verification")
    .replace(/authoriz/g, "approv");
};
prototype["getShouldReport"] = function getShouldReport() {
  const self = this;
  const classification = this.classification;
  const shape = classification.shape;
  if ("billing_error" === shape) {
    const error2 = classification.error;
    let tmp15 = error2.code !== BillingErrorDefault.ErrorCodes.INVALID_PAYMENT_SOURCE;
    if (tmp15) {
      let tmp17 = ClientBillingError.getBillingErrorFieldNames(error2).length > 0;
      if (!tmp17) {
        tmp17 = !BillingUtils.isExpectedHttpClientError(error2);
      }
      tmp15 = tmp17;
    }
    return tmp15;
  } else if ("stripe_error" === shape) {
    let error = classification.error;
    const hasItem = set.has(error.type);
    let tmp7 = !hasItem;
    if (!hasItem) {
      if ("invalid_request_error" !== error.type) {
        tmp7 = tmp8;
      } else if (null != error.code) {
        error = set1.has(error.code);
        let tmp10 = !error;
      } else {
        tmp10 = !self.isStripeWalletSelected();
      }
    }
    return tmp7;
  } else if ("http_error" === shape) {
    return !BillingUtils.isExpectedHttpClientError(classification.error);
  } else if ("stripe_wallet_exception" === shape) {
    return false;
  } else if ("error" === shape) {
    return !re12.test(classification.error.message);
  } else if ("gateway_sdk_error" === shape) {
    return !set3.has(classification.error.code);
  } else {
    return true;
  }
};
prototype["isStripeWalletSelected"] = function isStripeWalletSelected() {
  let tmp = "express_checkout_vault" === this.source.site;
  if (!tmp) {
    tmp = this.source.selectedElementType === PaymentSourceTypes.PAYMENT_REQUEST;
  }
  return tmp;
};
prototype["getErrorTags"] = function getErrorTags() {
  const classification = this.classification;
  const shape = classification.shape;
  if ("billing_error" === shape) {
    const obj2 = { error_code: null, has_field_error: null, http_status: null };
    const _String2 = String;
    obj2.error_code = String(classification.error.code);
    const _String3 = String;
    obj2.has_field_error = String(ClientBillingError.getBillingErrorFieldNames(classification.error).length > 0);
    let StringResult = null;
    if (null != classification.error.status) {
      const _String4 = String;
      StringResult = String(classification.error.status);
    }
    obj2.http_status = StringResult;
    return obj2;
  } else if ("stripe_error" === shape) {
    const obj3 = {
      stripe_error_type: classification.error.type,
      stripe_error_code: classification.error.code,
      stripe_decline_code: classification.error.decline_code,
      setup_intent_status: null,
      payment_intent_status: null,
    };
    let status = null;
    if (null != classification.error.setup_intent) {
      status = classification.error.setup_intent.status;
    }
    obj3.setup_intent_status = status;
    let status1 = null;
    if (null != classification.error.payment_intent) {
      status1 = classification.error.payment_intent.status;
    }
    obj3.payment_intent_status = status1;
    return obj3;
  } else if ("http_error" === shape) {
    const obj4 = { http_status: null };
    const _String = String;
    obj4.http_status = String(classification.error.status);
    return obj4;
  } else if ("stripe_wallet_exception" === shape) {
    const obj5 = { wallet_code: classification.error.code };
    return obj5;
  } else if ("gateway_sdk_error" === shape) {
    const obj6 = { gateway_error_name: classification.error.name, gateway_error_code: classification.error.code };
    return obj6;
  } else if ("error" === shape) {
    const obj = { error_name: classification.error.name };
    return obj;
  } else {
    return {};
  }
};
prototype["getRawErrorExtra"] = function getRawErrorExtra() {
  const classification = this.classification;
  const shape = classification.shape;
  if ("billing_error" === shape) {
    const obj2 = { raw_error: null };
    const obj3 = { code: null, status: null, message: null, fields: null };
    ({ code: obj14.code, status: obj14.status, message: obj14.message } = classification.error);
    obj3.fields = ClientBillingError.getBillingErrorFieldNames(classification.error);
    obj2.raw_error = obj3;
    return obj2;
  } else if ("stripe_error" === shape) {
    const error2 = classification.error;
    ({ type, code, decline_code } = error2);
    const obj5 = { type: null, code: null, decline_code: null, param: null, doc_url: null, message: null };
    ({ param, doc_url, message: message2 } = error2);
    obj5.type = type.replace(/authentication/g, "verification").replace(/authoriz/g, "approv");
    let replaced = code;
    if (null != code) {
      replaced = code.replace(/authentication/g, "verification").replace(/authoriz/g, "approv");
      const str5 = code.replace(/authentication/g, "verification");
    }
    obj5.code = replaced;
    let replaced1 = decline_code;
    if (null != decline_code) {
      replaced1 = decline_code.replace(/authentication/g, "verification").replace(/authoriz/g, "approv");
      const str6 = decline_code.replace(/authentication/g, "verification");
    }
    const obj7 = { raw_error: null };
    obj5.decline_code = replaced1;
    obj5.param = param;
    obj5.doc_url = doc_url;
    obj5.message = message2;
    obj7.raw_error = obj5;
    return obj7;
  } else if ("http_error" === shape) {
    const obj9 = { raw_error: null };
    ({ status: obj10.status, method: obj10.method, message: obj10.message } = classification.error);
    obj9.raw_error = { status: null, method: null, message: null };
    return obj9;
  } else if ("stripe_wallet_exception" === shape) {
    const obj12 = { raw_error: null };
    ({ code: obj8.code, message: obj8.message } = classification.error);
    obj12.raw_error = { code: null, message: null };
    return obj12;
  } else if ("gateway_sdk_error" === shape) {
    const obj27 = { raw_error: null };
    ({ name: obj6.name, code: obj6.code, message: obj6.message } = classification.error);
    obj27.raw_error = { name: null, code: null, message: null };
    return obj27;
  } else if ("error" === shape) {
    const obj29 = { raw_error: null };
    ({ name: obj4.name, message: obj4.message } = classification.error);
    obj29.raw_error = { name: null, message: null };
    return obj29;
  } else if ("string" === shape) {
    return {};
  } else if ("unknown" === shape) {
    if (null != classification.error) {
      const obj31 = { raw_error_keys: null, raw_error_message: null };
      const _Object = Object;
      obj31.raw_error_keys = Object.keys(classification.error);
      const error = classification.error;
      let tmp3 = null;
      if (typeof error === "object") {
        tmp3 = null;
        if (null !== error) {
          const message = error.message;
          let tmp4 = null;
          if (typeof message === "string") {
            tmp4 = message;
          }
          tmp3 = tmp4;
        }
      }
      obj31.raw_error_message = tmp3;
      let obj = obj31;
    } else {
      obj = {};
    }
    return obj;
  }
};
prototype["getSentryOptions"] = function getSentryOptions(arg0) {
  const self = this;
  ({ site, selectedElementType, tags, extra } = this.source);
  const obj = { source: site, error_shape: this.classification.shape, error_key: this.key };
  const merged = Object.assign(this.getErrorTags());
  let tmp2 = null;
  if (null != selectedElementType) {
    tmp2 = PaymentSourceTypes[selectedElementType];
  }
  const obj2 = { tags: null, fingerprint: null, extra: null };
  obj.selected_element_type = tmp2;
  const merged1 = Object.assign(tags);
  const entries = Object.entries(obj);
  const found = entries.filter((item) => null != _slicedToArray(item, 2)[1]);
  obj2.tags = Object.fromEntries(
    found.map((item) => {
      [tmp, str] = item;
      items = [tmp, str.replace(/authentication/g, "verification").replace(/authoriz/g, "approv")];
      return items;
    }),
  );
  items = [site, self.key];
  obj2.fingerprint = items;
  const merged2 = Object.assign(extra);
  const merged3 = Object.assign(arg0);
  const merged4 = Object.assign(self.getRawErrorExtra());
  obj2.extra = {};
  return obj2;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/billing/errors/ClientBillingError.tsx");

export { ClientBillingError };
