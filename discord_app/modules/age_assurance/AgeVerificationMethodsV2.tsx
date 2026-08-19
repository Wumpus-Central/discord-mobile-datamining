// discord_app/modules/age_assurance/AgeVerificationMethodsV2.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

const require = fn;
function _fetchAgeVerificationMethodsV() {
  const self = this;
  const tmp = callback(function*() {
    closure_1 = tmp4;
    const HTTP = closure_1_0(closure_1_1[2]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = obj.AGE_VERIFICATION_METHODS_V2;
    yield HTTP.get(obj1);
    body = body.body;
    const methods = body.methods;
    obj[0] = methods.map((item, index) => {
      let obj = { method: item.method, vendor: item.vendor, title: item.title, description: item.description, providedBy: null, icon: null };
      let provided_by = item.provided_by;
      if (provided_by == null) {
        provided_by = null;
      }
      obj[4] = provided_by;
      let icon = item.icon;
      if (icon == null) {
        icon = null;
      }
      let tmp3 = null;
      if (null != icon) {
        obj = { paths: null };
        const paths = icon.paths;
        obj[0] = paths.map((item, index) => {
          const obj = { d: item.d, fillRule: null };
          let str;
          if ("evenodd" === item.fill_rule) {
            str = "evenodd";
          }
          obj[1] = str;
          return obj;
        });
        tmp3 = obj;
      }
      obj[5] = tmp3;
      return obj;
    });
    const footer_message = body.footer_message;
    body = footer_message;
    if (footer_message == null) {
      body = null;
    }
    obj[1] = body;
    return obj;
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
const result = require("obj132").fileFinishedImporting("modules/age_assurance/AgeVerificationMethodsV2.tsx");

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