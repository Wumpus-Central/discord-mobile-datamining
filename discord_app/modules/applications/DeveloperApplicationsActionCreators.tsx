// === Module 12258: DeveloperApplicationsActionCreators ===

// Module 12258 (DeveloperApplicationsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _fetchDeveloperApplications() {
  closure_1 = tmp3;
  DispatcherDefault.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.APPLICATIONS, query: { with_team_applications: true }, oldFormErrors: true, rejectWithError: true };
  await HTTP.get(request);
  if (1 === tmp7) {
    c3 = 0;
    closure_129_1(closure_129_2[2]).dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    c5 = 3;
    closure_129_1(closure_129_2[2]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    const obj6 = { type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: null };
    const body = closure_128_0.body;
    obj6.applicationIds = body.map((id) => id.id);
    closure_129_1(closure_129_2[2]).dispatch(obj6);
    c3 = 0;
    closure_129_1(closure_129_2[2]);
  }
  return value;
};
const Endpoints = fn(1085).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/DeveloperApplicationsActionCreators.tsx");

export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};