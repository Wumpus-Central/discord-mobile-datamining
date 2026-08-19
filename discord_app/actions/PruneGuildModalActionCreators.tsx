// === Module 15832: ? ===

// Module 15832
import sendRequest from "sendRequest" /* 530 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("actions/PruneGuildModalActionCreators.tsx");

export default {
  updateEstimate(arg0) {
    closure_0 = arg0;
    const callback = arg2;
    return callback(function*() {
      const HTTP = v0(530).HTTP;
      obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_3.GUILD_PRUNE(v0);
      const obj2 = { days: null, include_roles: null };
      obj2[0] = dependencyMap;
      obj2[1] = closure_1_2;
      obj1[1] = obj2;
      obj1[3] = v0(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      return body.body.pruned;
    })();
  },
  updateEstimateV2(id, arg1) {
    closure_0 = id;
    const callback = arg2;
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = v0(530).HTTP;
              obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_3.GUILD_PRUNE_V2(v0);
              const obj2 = { days: null, include_roles: null };
              obj2[0] = dependencyMap;
              obj2[1] = closure_1_2;
              obj1[1] = obj2;
              obj1[3] = v0(530).rejectWithMigratedError();
              dependencyMap = 1;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  prune(c0, days, include_roles) {
    const HTTP = sendRequest.HTTP;
    { url: Endpoints.GUILD_PRUNE(c0), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { days, compute_prune_count: false, include_roles };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  }
};