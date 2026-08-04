import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
const result = require("sendRequest").fileFinishedImporting("actions/PruneGuildModalActionCreators.tsx");

export default {
  updateEstimate(arg0) {
    let closure_0 = arg0;
    let num = arg1;
    if (arg1 === undefined) {
      num = 7;
    }
    const callback = arg2;
    return callback(function*() {
      const HTTP = v0(530).HTTP;
      const obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = outer1_3.GUILD_PRUNE(v0);
      const obj2 = { days: null, include_roles: null };
      obj2[0] = dependencyMap;
      obj2[1] = outer1_2;
      obj1[1] = obj2;
      obj1[3] = v0(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      return arg1.body.pruned;
    })();
  },
  updateEstimateV2(id, first) {
    let closure_0 = id;
    let num = first;
    if (first === undefined) {
      num = 7;
    }
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
          return { value: "HermesInternal", done: null };
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
              const obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_PRUNE_V2(v0);
              const obj2 = { days: null, include_roles: null };
              obj2[0] = dependencyMap;
              obj2[1] = outer1_2;
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  prune(c0, days, include_roles) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.GUILD_PRUNE(c0), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { days, compute_prune_count: false, include_roles };
    obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  }
};