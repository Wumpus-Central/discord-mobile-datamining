// discord_app/modules/age_assurance/AgeVerificationMethodsV2.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let suspendedUserToken;

function mapMethodsV2Response(methods) {
  let footer_message;
  let prop;
  obj = {
    methods: methods.map((method) => {
      let external_window;
      let paths;
      let provided_by;
      let tmp3;
      obj = {
        method: method.method,
        vendor: method.vendor,
        title: method.title,
        description: method.description,
        providedBy: provided_by,
        icon: tmp3,
        externalWindow: external_window,
      };
      provided_by = method.provided_by;
      if (provided_by == null) {
        provided_by = null;
      }
      let icon = method.icon;
      if (icon == null) {
        icon = null;
      }
      tmp3 = null;
      if (null != icon) {
        const obj2 = {
          paths: paths.map((d) => {
            let str;
            obj = { d: d.d, fillRule: str };
            str = undefined;
            if ("evenodd" === d.fill_rule) {
              str = "evenodd";
            }
            return obj;
          }),
        };
        paths = icon.paths;
        tmp3 = obj2;
      }
      external_window = method.external_window;
      if (external_window == null) {
        external_window = null;
      }
      return obj;
    }),
    footerMessage: footer_message,
    outageBannerMessage: prop,
  };
  methods = methods.methods;
  footer_message = methods.footer_message;
  if (footer_message == null) {
    footer_message = null;
  }
  prop = methods.outage_banner_message;
  if (prop == null) {
    prop = null;
  }
  return obj;
}
let obj = function _fetchAgeVerificationMethodsV() {
  obj = _asyncToGenerator(async () => {
    let c1;
    let c2;
    let closure_0 = mapMethodsV2Response;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.AGE_VERIFICATION_METHODS_V2, rejectWithError: true };
    await HTTP.get(obj4);
    return closure_0(value.body);
  });
  return obj(...arguments);
};
obj = function _fetchAgeVerificationMethodsV2SuspendedUser() {
  obj = _asyncToGenerator(async () => {
    let c1;
    let c2;
    let obj4;
    let closure_0 = mapMethodsV2Response;
    suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.AGE_VERIFICATION_SUSPENDED_METHODS_V2, body: obj4, rejectWithError: true };
    obj4 = { token: suspendedUserToken };
    await HTTP.post(request);
    return closure_0(value.body);
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationMethodsV2.tsx");

export const fetchAgeVerificationMethodsV2 = function fetchAgeVerificationMethodsV2() {
  return obj(...arguments);
};
export const fetchAgeVerificationMethodsV2SuspendedUser = function fetchAgeVerificationMethodsV2SuspendedUser() {
  return obj(...arguments);
};
