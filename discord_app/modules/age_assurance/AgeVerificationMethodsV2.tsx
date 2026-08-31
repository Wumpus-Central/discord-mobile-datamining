// discord_app/modules/age_assurance/AgeVerificationMethodsV2.tsx
import closure_2 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function _fetchAgeVerificationMethodsV() {
  const self = this;
  const tmp = callback(function*() {
    closure_2 = tmp4;
    const HTTP = closure_1_0(closure_1_1[2]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = obj.AGE_VERIFICATION_METHODS_V2;
    yield HTTP.get(obj1);
    let body = arg1.body;
    const obj4 = { methods: null, footerMessage: null, outageBannerMessage: null };
    const methods = body.methods;
    obj4[0] = methods.map((method) => {
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
    });
    const footer_message = body.footer_message;
    body = footer_message;
    if (footer_message == null) {
      body = null;
    }
    obj4[1] = body;
    const outage_banner_message = body.outage_banner_message;
    c1 = outage_banner_message;
    if (outage_banner_message == null) {
      c1 = null;
    }
    obj4[2] = c1;
    return obj4;
  });
  closure_4 = tmp;
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