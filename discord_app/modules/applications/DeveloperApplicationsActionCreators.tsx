// discord_app/modules/applications/DeveloperApplicationsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5;

let obj = function _fetchDeveloperApplications() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            body = undefined;
            const obj7 = DispatcherDefault;
            obj7.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: constants.APPLICATIONS,
              query: { with_team_applications: true },
              oldFormErrors: true,
              rejectWithError: true,
            };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.get(request), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj3 = closure_129_1(closure_129_2[2]);
            obj3.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value;
            obj = { type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: body.map((id) => id.id) };
            body = body.body;
            const dispatch = closure_129_1(closure_129_2[2]).dispatch;
            const tmp9 = closure_129_1(closure_129_2[2]);
            dispatch(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp17) {
        let closure_2 = tmp17;
        if (0 === c3) {
          c5 = 3;
          throw tmp17;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/applications/DeveloperApplicationsActionCreators.tsx");

export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  return obj(...arguments);
};
