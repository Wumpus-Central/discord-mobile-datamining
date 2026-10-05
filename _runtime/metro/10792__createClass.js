// _runtime/metro/10792__createClass.js
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";

class PurchaseError {
  constructor(name, message, responseCode, debugMessage, code, productId) {
    _classCallCheck(this, PurchaseError);
    this.name = name;
    this.message = message;
    this.responseCode = responseCode;
    this.debugMessage = debugMessage;
    this.code = code;
    this.productId = productId;
    this.name = "[react-native-iap]: PurchaseError";
    this.message = message;
    this.responseCode = responseCode;
    this.debugMessage = debugMessage;
    this.code = code;
    this.productId = productId;
  }
}
const PurchaseError_export = _createClass(PurchaseError);

export const ErrorCode = {
  E_UNKNOWN: "E_UNKNOWN",
  E_USER_CANCELLED: "E_USER_CANCELLED",
  E_USER_ERROR: "E_USER_ERROR",
  E_ITEM_UNAVAILABLE: "E_ITEM_UNAVAILABLE",
  E_REMOTE_ERROR: "E_REMOTE_ERROR",
  E_NETWORK_ERROR: "E_NETWORK_ERROR",
  E_SERVICE_ERROR: "E_SERVICE_ERROR",
  E_RECEIPT_FAILED: "E_RECEIPT_FAILED",
  E_RECEIPT_FINISHED_FAILED: "E_RECEIPT_FINISHED_FAILED",
  E_NOT_PREPARED: "E_NOT_PREPARED",
  E_NOT_ENDED: "E_NOT_ENDED",
  E_ALREADY_OWNED: "E_ALREADY_OWNED",
  E_DEVELOPER_ERROR: "E_DEVELOPER_ERROR",
  E_BILLING_RESPONSE_JSON_PARSE_ERROR: "E_BILLING_RESPONSE_JSON_PARSE_ERROR",
  E_DEFERRED_PAYMENT: "E_DEFERRED_PAYMENT",
  E_INTERRUPTED: "E_INTERRUPTED",
  E_IAP_NOT_AVAILABLE: "E_IAP_NOT_AVAILABLE",
};
export { PurchaseError_export as PurchaseError };
