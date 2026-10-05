// === Module 8722: disclosures ===

// Module 8722 (disclosures)
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import applications from "applications" /* 8723 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _getDisclosures() {
  obj = _asyncToGenerator(async (arg0) => {
    let c2;
    let c3;
    let closure_1;
    let obj8;
    let closure_0 = arg0;
    const result = Endpoints.APPLICATION_DISCLOSURES(closure_0);
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: result, retries: 3, rejectWithError: obj8.rejectWithMigratedError() };
    const get = HTTP.get;
    obj8 = HTTPUtils;
    await get(obj4);
    closure_0 = value;
    obj = { disclosures: closure_0.body.disclosures, ackedDisclosures: closure_0.body.acked_disclosures, allAcked: closure_0.body.all_acked };
    return obj;
  });
  return obj(...arguments);
};
obj = function _ackDisclosures() {
  obj = _asyncToGenerator(async (arg0, disclosures) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj7;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              const result = Endpoints.APPLICATION_DISCLOSURES(closure_0);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: result, body: obj4, rejectWithError: obj7.rejectWithMigratedError() };
              const post = HTTP.post;
              obj4 = { disclosures };
              c3 = 1;
              c2 = 1;
              obj7 = HTTPUtils;
              const obj5 = { value: post(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c2 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/applications/disclosures.tsx");

export const ApplicationDisclosure = applications.ApplicationDisclosureType;
export const getDisclosures = function getDisclosures() {
  return obj(...arguments);
};
export const ackDisclosures = function ackDisclosures() {
  return obj(...arguments);
};
export const getTextForDisclosure = function getTextForDisclosure(disclosure) {
  if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
    const intl2 = intl3.intl;
    return intl2.string(intl3.t["6wPmjo"]);
  } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
    const intl = intl3.intl;
    return intl.string(intl3.t["/uOMKZ"]);
  } else {
    return null;
  }
};