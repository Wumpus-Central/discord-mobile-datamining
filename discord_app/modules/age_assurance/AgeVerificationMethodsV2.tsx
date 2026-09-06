// === Module 8447: AgeVerificationMethodsV2 ===

// Module 8447 (AgeVerificationMethodsV2)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function mapMethodsV2Response(methods) {
  let obj = { methods: null, footerMessage: null, outageBannerMessage: null };
  methods = methods.methods;
  obj.methods = methods.map((method) => {
    let obj = { method: method.method, vendor: method.vendor, title: method.title, description: method.description, providedBy: null, icon: null, externalWindow: null };
    let provided_by = method.provided_by;
    if (provided_by == null) {
      provided_by = null;
    }
    obj.providedBy = provided_by;
    let icon = method.icon;
    if (icon == null) {
      icon = null;
    }
    let tmp3 = null;
    if (null != icon) {
      obj = { paths: null };
      const paths = icon.paths;
      obj.paths = paths.map((d) => {
        const obj = { d: d.d, fillRule: null };
        let str;
        if ("evenodd" === d.fill_rule) {
          str = "evenodd";
        }
        obj.fillRule = str;
        return obj;
      });
      tmp3 = obj;
    }
    obj.icon = tmp3;
    let external_window = method.external_window;
    if (external_window == null) {
      external_window = null;
    }
    obj.externalWindow = external_window;
    return obj;
  });
  let footer_message = methods.footer_message;
  if (footer_message == null) {
    footer_message = null;
  }
  obj.footerMessage = footer_message;
  let prop = methods.outage_banner_message;
  if (prop == null) {
    prop = null;
  }
  obj.outageBannerMessage = prop;
  return obj;
}
let closure_6 = async function _fetchAgeVerificationMethodsV() {
  _require = mapMethodsV2Response;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: Endpoints.AGE_VERIFICATION_METHODS_V2, rejectWithError: true });
  return _require(value.body);
};
let closure_7 = async function _fetchAgeVerificationMethodsV2SuspendedUser() {
  _require = mapMethodsV2Response;
  suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.AGE_VERIFICATION_SUSPENDED_METHODS_V2, body: { token: suspendedUserToken }, rejectWithError: true };
  await HTTP.post(request);
  return _require(value.body);
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationMethodsV2.tsx");

export const fetchAgeVerificationMethodsV2 = function fetchAgeVerificationMethodsV2() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAgeVerificationMethodsV2SuspendedUser = function fetchAgeVerificationMethodsV2SuspendedUser() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};