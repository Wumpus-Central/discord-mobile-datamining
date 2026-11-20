// === Module 14431: ConjureServerWidgetActionCreators ===

// Module 14431 (ConjureServerWidgetActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6503 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConjureServerWidgetStore from "ConjureServerWidgetStore" /* 14429 */;

require = fn;
let closure_7 = async function _fetchConjureServerProfileWidgets() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp31;
          let id2;
          let body;
          if ("loading" !== fetchState.getFetchState()) {
            id2 = id.getId();
            DispatcherDefault.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_START" });
            c2 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CONJURE_PROJECTS, query: null, rejectWithError: true };
            const obj6 = { supported_surfaces: ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, installed: true };
            request.query = obj6;
            c3 = 2;
            c4 = 1;
            const obj7 = { value: HTTP.get(request), done: false };
            return obj7;
          }
        }
      } else {
        if (1 === tmp7) {
          c2 = 0;
          if (closure_129_4.getId() !== id2) {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            closure_129_1(closure_129_2[4]).dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_FAIL" });
            const obj4 = closure_129_1(closure_129_2[4]);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value.body;
          if (closure_129_4.getId() === id2) {
            const obj9 = { type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_SUCCESS", projects: body };
            closure_129_1(closure_129_2[4]).dispatch(obj9);
            c2 = 0;
            const obj = closure_129_1(closure_129_2[4]);
          }
        }
        c2 = 0;
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
      c4 = 3;
    } catch (tmp30) {
      if (tmp4 === c2) {
        c4 = tmp2;
        throw tmp30;
      } else {
        c3 = tmp;
      }
      tmp31 = c2;
    }
  }
};
const Endpoints = fn(1071).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_widgets/ConjureServerWidgetActionCreators.tsx");

export function fetchConjureServerProfileWidgets() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}