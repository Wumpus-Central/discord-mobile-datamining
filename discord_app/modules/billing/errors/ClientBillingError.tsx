// === Module 6243: ClientBillingError ===

// Module 6243 (ClientBillingError)
import LoggerDefault from "Logger" /* 3 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import BillingUtils from "BillingUtils" /* 4607 */;
import BillingErrorDefault from "BillingError" /* 6232 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const PaymentSourceTypes = fn(1082).PaymentSourceTypes;
const logger = new LoggerDefault("ClientBillingError");
let closure_6 = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL;
const metroImportDefault = { payment_method_confirmation: "PaymentMethodConfirmation", submit_address_step: "SubmitAddressStep", payment_element_setup: "PaymentElementSetup", express_checkout_vault: "ExpressCheckoutAddPaymentMethod", express_checkout_load: "ExpressCheckoutLoad", payment_authentication: "PaymentAuthentication", braintree_tokenize: "BraintreeTokenize", gateway_sdk_init: "GatewaySdkInit", stripe_load: "StripeLoad" };
const set = new Set(["card_error", "api_connection_error", "validation_error"]);
const set1 = new Set(["setup_intent_authentication_failure", "payment_intent_authentication_failure"]);
const set2 = new Set(["email_invalid", "tax_id_invalid"]);
let closure_11 = ["google_pay.", "apple_pay."];
const set3 = new Set(["BraintreeError", "AdyenCheckoutError"]);
const re13 = /Failed to fetch|NetworkError|Load failed|Failed to load Stripe\.js/;
const set4 = new Set(["PAYPAL_TOKENIZATION_REQUEST_ACTIVE"]);
let items = [/authentication/gi, "verification"];
let items1 = [items, , , ];
const items2 = [/authoriz/gi, "approv"];
items1[1] = items2;
const items3 = [/token/gi, "tokn"];
items1[2] = items3;
const items4 = [/email/gi, "e_mail"];
items1[3] = items4;
let ClientBillingError;
class ClientBillingError extends Error {
  constructor(arg0, arg1) {
    classifyResult = ClientBillingError.classify(fn);
    tmp1 = new tmp(ClientBillingError.getMessage(classifyResult), tmp4, tmp3, tmp2, new.target, tmp, ClientBillingError, fn);
    tmp1.classification = classifyResult;
    tmp1.source = global;
    tmp1.key = ClientBillingError.getKeyFor(tmp1.classification);
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
    const tmp10 = new tmp(ClientBillingError.getMessage(classifyResult), tmp7, tmp6, tmp5, tmp4, tmp3, tmp2);
    tmp10.classification = classifyResult;
    tmp10.source = source;
    tmp10.key = ClientBillingError.getKeyFor(tmp10.classification);
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
        if (closure_11.some((item) => code.startsWith(item))) {
          const obj6 = { shape: "stripe_wallet_exception", error };
          let obj9 = obj6;
        }
        return obj9;
      }
      if (null != tmp4) {
        const _Error = Error;
        if (error instanceof Error) {
          if (set3.has(error.name)) {
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
  shape = shape.shape;
  if ("string" === shape) {
    return shape.error;
  } else if ("stripe_error" === shape) {
    ({ type, code: code2 } = shape.error);
    if (null != code2) {
      const _HermesInternal6 = HermesInternal;
      let combined = "Stripe " + type + " (" + code2 + ")";
    } else {
      const _HermesInternal5 = HermesInternal;
      combined = "Stripe " + type;
    }
    return combined;
  } else if ("billing_error" === shape) {
    ({ code, status } = shape.error);
    const billingErrorFieldNames = ClientBillingError.getBillingErrorFieldNames(shape.error);
    if (billingErrorFieldNames.length > 0) {
      const _HermesInternal4 = HermesInternal;
      let combined1 = "BillingError (field error: " + billingErrorFieldNames.join(", ") + ")";
    } else if (code > 0) {
      const _HermesInternal3 = HermesInternal;
      combined1 = "BillingError (code: " + code + ")";
    } else {
      let str4 = "";
      if (null != status) {
        const _HermesInternal2 = HermesInternal;
        str4 = " (HTTP " + status + ")";
      }
      combined1 = `BillingError${str4}`;
    }
    return combined1;
  } else if ("stripe_wallet_exception" === shape) {
    const _HermesInternal = HermesInternal;
    return "Stripe Wallet Exception (code: " + shape.error.code + ")";
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
    const replaced = classification.error.name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    const _HermesInternal = HermesInternal;
    return "" + replaced.slice(0, 48) + ":" + classification.error.code;
  } else if ("string" === shape) {
    const str4 = classification.error.toLowerCase();
    const replaced1 = classification.error.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    return replaced1.slice(0, 48);
  } else if ("error" === shape) {
    return classification.error.name;
  } else {
    return "unknown" === shape ? "unknown" : undefined;
  }
};
prototype["getShouldReport"] = function getShouldReport() {
  const self = this;
  const classification = this.classification;
  const shape = classification.shape;
  if ("billing_error" === shape) {
    const error = classification.error;
    let tmp17 = error.code !== BillingErrorDefault.ErrorCodes.INVALID_PAYMENT_SOURCE;
    if (tmp17) {
      let tmp19 = ClientBillingError.getBillingErrorFieldNames(error).length > 0;
      if (!tmp19) {
        tmp19 = !BillingUtils.isExpectedHttpClientError(error);
      }
      tmp17 = tmp19;
    }
    return tmp17;
  } else if ("stripe_error" === shape) {
    let str6 = classification.error;
    const hasItem = set.has(str6.type);
    let tmp7 = !hasItem;
    if (!hasItem) {
      let tmp8 = "invalid_request_error" !== str6.type;
      if (!tmp8) {
        let tmp10 = null == str6.code;
        if (!tmp10) {
          tmp10 = !set2.has(str6.code);
        }
        if (!tmp10) {
          tmp8 = tmp10;
        } else {
          if ("setup_intent_unexpected_state" !== str6.code) {
            if (null != str6.code) {
              let tmp12 = !set1.has(str6.code);
            } else {
              tmp12 = !self.isStripeWalletSelected();
            }
          }
          str6 = "canceled";
          tmp12 = "canceled" !== str6.setup_intent.status;
        }
      }
      tmp7 = tmp8;
    }
    return tmp7;
  } else if ("http_error" === shape) {
    return !BillingUtils.isExpectedHttpClientError(classification.error);
  } else if ("stripe_wallet_exception" === shape) {
    return false;
  } else if ("error" === shape) {
    return !re13.test(classification.error.message);
  } else if ("gateway_sdk_error" === shape) {
    return !set4.has(classification.error.code);
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
    const obj3 = { stripe_error_type: classification.error.type, stripe_error_code: classification.error.code, stripe_decline_code: classification.error.decline_code, setup_intent_status: null, payment_intent_status: null };
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
    const obj = { raw_error: null };
    const obj2 = { code: null, status: null, message: null, fields: null };
    ({ code: obj14.code, status: obj14.status, message: obj14.message } = classification.error);
    obj2.fields = ClientBillingError.getBillingErrorFieldNames(classification.error);
    const _Object14 = Object;
    const _Object15 = Object;
    const entries = Object.entries(obj2);
    obj.raw_error = Object.fromEntries(entries.map((item) => {
      [tmp, arr] = item;
      if (typeof arr === "string") {
        items = [
          tmp,
          closure_1_15.reduce((acc, item) => {
              [tmp, ] = item;
              return acc.replace(tmp, (str) => {
                if (str === str.toUpperCase()) {
                  let formatted = closure_1_0.toUpperCase();
                } else {
                  formatted = closure_1_0;
                }
                return formatted;
              });
            }, arr)
        ];
        let tmp2 = items;
      } else {
        const _Array = Array;
        items1 = [tmp, ];
        if (Array.isArray(arr)) {
          items1[1] = arr.map((item) => {
            let reduced = item;
            if (typeof item === "string") {
              reduced = closure_1_15.reduce((acc, item) => {
                [tmp, ] = item;
                return acc.replace(tmp, (str) => {
                  if (str === str.toUpperCase()) {
                    let formatted = closure_1_0.toUpperCase();
                  } else {
                    formatted = closure_1_0;
                  }
                  return formatted;
                });
              }, item);
            }
            return reduced;
          });
          tmp2 = items1;
        } else {
          items1[1] = arr;
          tmp2 = items1;
        }
      }
      return tmp2;
    }));
    return obj;
  } else if ("stripe_error" === shape) {
    const obj3 = { raw_error: null };
    ({ type: obj12.type, code: obj12.code, decline_code: obj12.decline_code, param: obj12.param, doc_url: obj12.doc_url, message: obj12.message } = classification.error);
    const _Object12 = Object;
    const _Object13 = Object;
    const entries1 = Object.entries({ type: null, code: null, decline_code: null, param: null, doc_url: null, message: null });
    obj3.raw_error = Object.fromEntries(entries1.map((item) => {
      [tmp, arr] = item;
      if (typeof arr === "string") {
        items = [
          tmp,
          closure_1_15.reduce((acc, item) => {
              [tmp, ] = item;
              return acc.replace(tmp, (str) => {
                if (str === str.toUpperCase()) {
                  let formatted = closure_1_0.toUpperCase();
                } else {
                  formatted = closure_1_0;
                }
                return formatted;
              });
            }, arr)
        ];
        let tmp2 = items;
      } else {
        const _Array = Array;
        items1 = [tmp, ];
        if (Array.isArray(arr)) {
          items1[1] = arr.map((item) => {
            let reduced = item;
            if (typeof item === "string") {
              reduced = closure_1_15.reduce((acc, item) => {
                [tmp, ] = item;
                return acc.replace(tmp, (str) => {
                  if (str === str.toUpperCase()) {
                    let formatted = closure_1_0.toUpperCase();
                  } else {
                    formatted = closure_1_0;
                  }
                  return formatted;
                });
              }, item);
            }
            return reduced;
          });
          tmp2 = items1;
        } else {
          items1[1] = arr;
          tmp2 = items1;
        }
      }
      return tmp2;
    }));
    return obj3;
  } else if ("http_error" === shape) {
    const obj7 = { raw_error: null };
    ({ status: obj10.status, method: obj10.method, message: obj10.message } = classification.error);
    const _Object10 = Object;
    const _Object11 = Object;
    const entries2 = Object.entries({ status: null, method: null, message: null });
    obj7.raw_error = Object.fromEntries(entries2.map((item) => {
      [tmp, arr] = item;
      if (typeof arr === "string") {
        items = [
          tmp,
          closure_1_15.reduce((acc, item) => {
              [tmp, ] = item;
              return acc.replace(tmp, (str) => {
                if (str === str.toUpperCase()) {
                  let formatted = closure_1_0.toUpperCase();
                } else {
                  formatted = closure_1_0;
                }
                return formatted;
              });
            }, arr)
        ];
        let tmp2 = items;
      } else {
        const _Array = Array;
        items1 = [tmp, ];
        if (Array.isArray(arr)) {
          items1[1] = arr.map((item) => {
            let reduced = item;
            if (typeof item === "string") {
              reduced = closure_1_15.reduce((acc, item) => {
                [tmp, ] = item;
                return acc.replace(tmp, (str) => {
                  if (str === str.toUpperCase()) {
                    let formatted = closure_1_0.toUpperCase();
                  } else {
                    formatted = closure_1_0;
                  }
                  return formatted;
                });
              }, item);
            }
            return reduced;
          });
          tmp2 = items1;
        } else {
          items1[1] = arr;
          tmp2 = items1;
        }
      }
      return tmp2;
    }));
    return obj7;
  } else if ("stripe_wallet_exception" === shape) {
    const obj11 = { raw_error: null };
    ({ code: obj8.code, message: obj8.message } = classification.error);
    const _Object8 = Object;
    const _Object9 = Object;
    const entries3 = Object.entries({ code: null, message: null });
    obj11.raw_error = Object.fromEntries(entries3.map((item) => {
      [tmp, arr] = item;
      if (typeof arr === "string") {
        items = [
          tmp,
          closure_1_15.reduce((acc, item) => {
              [tmp, ] = item;
              return acc.replace(tmp, (str) => {
                if (str === str.toUpperCase()) {
                  let formatted = closure_1_0.toUpperCase();
                } else {
                  formatted = closure_1_0;
                }
                return formatted;
              });
            }, arr)
        ];
        let tmp2 = items;
      } else {
        const _Array = Array;
        items1 = [tmp, ];
        if (Array.isArray(arr)) {
          items1[1] = arr.map((item) => {
            let reduced = item;
            if (typeof item === "string") {
              reduced = closure_1_15.reduce((acc, item) => {
                [tmp, ] = item;
                return acc.replace(tmp, (str) => {
                  if (str === str.toUpperCase()) {
                    let formatted = closure_1_0.toUpperCase();
                  } else {
                    formatted = closure_1_0;
                  }
                  return formatted;
                });
              }, item);
            }
            return reduced;
          });
          tmp2 = items1;
        } else {
          items1[1] = arr;
          tmp2 = items1;
        }
      }
      return tmp2;
    }));
    return obj11;
  } else if ("gateway_sdk_error" === shape) {
    const obj27 = { raw_error: null };
    ({ name: obj6.name, code: obj6.code, message: obj6.message } = classification.error);
    const _Object6 = Object;
    const _Object7 = Object;
    const entries4 = Object.entries({ name: null, code: null, message: null });
    obj27.raw_error = Object.fromEntries(entries4.map((item) => {
      [tmp, arr] = item;
      if (typeof arr === "string") {
        items = [
          tmp,
          closure_1_15.reduce((acc, item) => {
              [tmp, ] = item;
              return acc.replace(tmp, (str) => {
                if (str === str.toUpperCase()) {
                  let formatted = closure_1_0.toUpperCase();
                } else {
                  formatted = closure_1_0;
                }
                return formatted;
              });
            }, arr)
        ];
        let tmp2 = items;
      } else {
        const _Array = Array;
        items1 = [tmp, ];
        if (Array.isArray(arr)) {
          items1[1] = arr.map((item) => {
            let reduced = item;
            if (typeof item === "string") {
              reduced = closure_1_15.reduce((acc, item) => {
                [tmp, ] = item;
                return acc.replace(tmp, (str) => {
                  if (str === str.toUpperCase()) {
                    let formatted = closure_1_0.toUpperCase();
                  } else {
                    formatted = closure_1_0;
                  }
                  return formatted;
                });
              }, item);
            }
            return reduced;
          });
          tmp2 = items1;
        } else {
          items1[1] = arr;
          tmp2 = items1;
        }
      }
      return tmp2;
    }));
    return obj27;
  } else if ("error" === shape) {
    const obj29 = { raw_error: null };
    ({ name: obj4.name, message: obj4.message } = classification.error);
    const _Object4 = Object;
    const _Object5 = Object;
    const entries5 = Object.entries({ name: null, message: null });
    obj29.raw_error = Object.fromEntries(entries5.map((item) => {
      [tmp, arr] = item;
      if (typeof arr === "string") {
        items = [
          tmp,
          closure_1_15.reduce((acc, item) => {
              [tmp, ] = item;
              return acc.replace(tmp, (str) => {
                if (str === str.toUpperCase()) {
                  let formatted = closure_1_0.toUpperCase();
                } else {
                  formatted = closure_1_0;
                }
                return formatted;
              });
            }, arr)
        ];
        let tmp2 = items;
      } else {
        const _Array = Array;
        items1 = [tmp, ];
        if (Array.isArray(arr)) {
          items1[1] = arr.map((item) => {
            let reduced = item;
            if (typeof item === "string") {
              reduced = closure_1_15.reduce((acc, item) => {
                [tmp, ] = item;
                return acc.replace(tmp, (str) => {
                  if (str === str.toUpperCase()) {
                    let formatted = closure_1_0.toUpperCase();
                  } else {
                    formatted = closure_1_0;
                  }
                  return formatted;
                });
              }, item);
            }
            return reduced;
          });
          tmp2 = items1;
        } else {
          items1[1] = arr;
          tmp2 = items1;
        }
      }
      return tmp2;
    }));
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
      const _Object2 = Object;
      const _Object3 = Object;
      const entries6 = Object.entries(obj31);
      let fromEntriesResult = Object.fromEntries(entries6.map((item) => {
        [tmp, arr] = item;
        if (typeof arr === "string") {
          items = [
            tmp,
            closure_1_15.reduce((acc, item) => {
                [tmp, ] = item;
                return acc.replace(tmp, (str) => {
                  if (str === str.toUpperCase()) {
                    let formatted = closure_1_0.toUpperCase();
                  } else {
                    formatted = closure_1_0;
                  }
                  return formatted;
                });
              }, arr)
          ];
          let tmp2 = items;
        } else {
          const _Array = Array;
          items1 = [tmp, ];
          if (Array.isArray(arr)) {
            items1[1] = arr.map((item) => {
              let reduced = item;
              if (typeof item === "string") {
                reduced = closure_1_15.reduce((acc, item) => {
                  [tmp, ] = item;
                  return acc.replace(tmp, (str) => {
                    if (str === str.toUpperCase()) {
                      let formatted = closure_1_0.toUpperCase();
                    } else {
                      formatted = closure_1_0;
                    }
                    return formatted;
                  });
                }, item);
              }
              return reduced;
            });
            tmp2 = items1;
          } else {
            items1[1] = arr;
            tmp2 = items1;
          }
        }
        return tmp2;
      }));
    } else {
      fromEntriesResult = {};
    }
    return fromEntriesResult;
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
  obj2.tags = Object.fromEntries(entries.filter((item) => null != _slicedToArray(item, 2)[1]));
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