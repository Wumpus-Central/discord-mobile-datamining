// === Module 10817: fetchDeveloperApplications ===

// Module 10817 (fetchDeveloperApplications)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;

require = fn;
let closure_6 = async function _fetchDeveloperApplications() {
  closure_1 = tmp3;
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.APPLICATIONS_WITH_ASSETS, query: { with_team_applications: true }, oldFormErrors: true, rejectWithError: true };
  await HTTP.get(request);
  if (1 === tmp7) {
    c3 = 0;
    closure_129_1(closure_129_2[3]).dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    c5 = 3;
    closure_129_1(closure_129_2[3]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    const applications = closure_128_0.body.applications;
    closure_128_2 = applications.map((item) => closure_1_4.createFromServer(item));
    closure_129_1(closure_129_2[3]).dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: closure_128_2, assets: closure_128_0.body.assets });
    closure_129_1(closure_129_2[3]);
    closure_129_1(closure_129_2[3]).dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications });
    c3 = 0;
    closure_129_1(closure_129_2[3]);
  }
  return value;
};
const Endpoints = fn(1085).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/fetchDeveloperApplications.tsx");

export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};