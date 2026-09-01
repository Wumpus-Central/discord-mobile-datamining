// === Module 8716: mapMethodsV2Response ===

// Module 8716 (mapMethodsV2Response)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function mapMethodsV2Response(methods) {
  let obj = {
    methods: methods.map((method) => {
      let obj = { method: method.method, vendor: method.vendor, title: method.title, description: method.description, providedBy: null, icon: null, externalWindow: null };
      let provided_by = method.provided_by;
      if (provided_by == null) {
        provided_by = null;
      }
      obj[4] = provided_by;
      let icon = method.icon;
      if (icon == null) {
        icon = null;
      }
      let tmp3 = null;
      if (null != icon) {
        obj = { paths: null };
        const paths = icon.paths;
        obj[0] = paths.map((d) => {
          const obj = { d: d.d, fillRule: null };
          let str;
          if ("evenodd" === d.fill_rule) {
            str = "evenodd";
          }
          obj[1] = str;
          return obj;
        });
        tmp3 = obj;
      }
      obj[5] = tmp3;
      let external_window = method.external_window;
      if (external_window == null) {
        external_window = null;
      }
      obj[6] = external_window;
      return obj;
    }),
    footerMessage: null,
    outageBannerMessage: null
  };
  methods = methods.methods;
  let footer_message = methods.footer_message;
  if (footer_message == null) {
    footer_message = null;
  }
  obj[1] = footer_message;
  let prop = methods.outage_banner_message;
  if (prop == null) {
    prop = null;
  }
  obj[2] = prop;
  return obj;
}
function _fetchAgeVerificationMethodsV() {
  const self = this;
  const tmp = callback(function*() {
    const callback = closure_1_5;
    const HTTP = closure_1_0(table[3]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_4.AGE_VERIFICATION_METHODS_V2;
    yield HTTP.get(obj1);
    return callback(arg1.body);
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAgeVerificationMethodsV2SuspendedUser() {
  const self = this;
  const tmp = callback(function*() {
    const callback = closure_1_5;
    const suspendedUserToken = closure_1_3.getSuspendedUserToken();
    const HTTP = closure_1_0(table[3]).HTTP;
    obj1 = { url: null, body: null, rejectWithError: true };
    obj1[0] = closure_1_4.AGE_VERIFICATION_SUSPENDED_METHODS_V2;
    const obj2 = { token: null };
    obj2[0] = suspendedUserToken;
    obj1[1] = obj2;
    yield HTTP.post(obj1);
    return callback(arg1.body);
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationMethodsV2.tsx");

export const fetchAgeVerificationMethodsV2 = function fetchAgeVerificationMethodsV2() {
  const self = this;
  const apply = _fetchAgeVerificationMethodsV.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAgeVerificationMethodsV2SuspendedUser = function fetchAgeVerificationMethodsV2SuspendedUser() {
  const self = this;
  const apply = _fetchAgeVerificationMethodsV2SuspendedUser.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};