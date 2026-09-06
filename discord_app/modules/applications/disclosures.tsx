// discord_app/modules/applications/disclosures.tsx
import util from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import applications from "../../../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _getDisclosures() {
  closure_1 = tmp2;
  const result = Endpoints.APPLICATION_DISCLOSURES(closure_0);
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: result, retries: 3, rejectWithError: HTTPUtils.rejectWithMigratedError() });
  closure_129_0 = value;
  return {
    disclosures: closure_129_0.body.disclosures,
    ackedDisclosures: closure_129_0.body.acked_disclosures,
    allAcked: closure_129_0.body.all_acked,
  };
};
let closure_5 = async function _ackDisclosures(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const result = Endpoints.APPLICATION_DISCLOSURES(closure_0);
            const HTTP = HTTPUtils.HTTP;
            const request = { url: result, body: null, rejectWithError: null };
            const obj1 = { disclosures };
            request.body = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c3 = 1;
            c2 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c2 = tmp;
        throw tmp5;
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/disclosures.tsx");

export const ApplicationDisclosure = fn(9241).ApplicationDisclosureType;
export const getDisclosures = function getDisclosures() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const ackDisclosures = function ackDisclosures() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getTextForDisclosure = function getTextForDisclosure(disclosure) {
  if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
    const intl2 = util.intl;
    return intl2.string(util.t["6wPmjo"]);
  } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
    const intl = util.intl;
    return intl.string(util.t["/uOMKZ"]);
  } else {
    return null;
  }
};
