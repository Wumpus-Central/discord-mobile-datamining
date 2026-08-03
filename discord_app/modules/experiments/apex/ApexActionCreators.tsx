// === Module 10642: _fetchApexExperimentsMetadata ===

// Module 10642 (_fetchApexExperimentsMetadata)
import _objectWithoutProperties from "_objectWithoutProperties";
import dispatcher from "dispatcher";
import initialize from "initialize";
import { Endpoints } from "ME";

const require = arg1;
function _fetchApexExperimentsMetadata() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const dependencyMap = tmp3;
              const callback2 = tmp7;
              let callback;
              let c4 = 1;
              const HTTP = callback(outer1_2[4]).HTTP;
              const obj1 = { url: null, query: null, rejectWithError: true };
              obj1[0] = outer1_7.APEX_EXPERIMENTS_METADATA;
              const obj2 = { surface: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              c5 = 2;
              c6 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              obj3 = callback2(709);
              obj3.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" });
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 !== 2) {
              const experiments = body.body.experiments;
              callback = experiments.map((id) => {
                const variants = id.variants;
                return { id: id.id, name: id.name, title: id.title, revision: id.revision, unitType: id.unit_type, variants: variants.map((id) => ({ id: id.id, label: id.label, type: id.type })) };
              });
              obj = callback2(709);
              const obj4 = { type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS", experiments: null };
              obj4[1] = callback;
              obj.dispatch(obj4);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          }
        } catch (tmp19) {
          let closure_3 = tmp19;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp19;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _fetchApexExperimentsMetadata = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchUserExperimentAssignments() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (fetching === 2) {
        fetching = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          fetching = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              fetching = 3;
              throw arg1;
            } else if (arg0 === 2) {
              fetching = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              if (!fetching.isFetching(callback)) {
                if (!obj15.hasLoaded(tmp48)) {
                  let obj7 = outer1_1(outer1_2[5]);
                  const obj1 = { type: "APEX_EXPERIMENTS_FETCH_START", unitId: null };
                  obj1[1] = tmp48;
                  obj7.dispatch(obj1);
                  let c4 = 1;
                  const HTTP = callback(outer1_2[4]).HTTP;
                  let obj2 = { url: null, query: null, rejectWithError: false };
                  obj2[0] = outer1_7.APEX_EXPERIMENTS;
                  const obj3 = { surface: null };
                  obj3[0] = callback(outer1_2[6]).Experiment_Surface.APP;
                  obj2[1] = obj3;
                  c5 = 2;
                  fetching = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = HTTP.get(obj2);
                  return obj4;
                }
              }
              obj15 = fetching;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              let obj5 = lib(709);
              obj5 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: null };
              obj5[1] = callback;
              obj5.dispatch(obj5);
            } else if (arg0 === 1) {
              fetching = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              if (null != lib) {
                if (null != lib.body) {
                  obj = lib(709);
                  const obj6 = { type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: null, experiments: null };
                  obj6[1] = callback;
                  obj6[2] = lib.body;
                  obj.dispatch(obj6);
                }
                c4 = 0;
              }
              obj2 = lib(709);
              obj7 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: null };
              obj7[1] = callback;
              obj2.dispatch(obj7);
            }
            c4 = 0;
            fetching = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          }
          fetching = 3;
        } catch (tmp37) {
          let closure_3 = tmp37;
          if (tmp4 === c4) {
            fetching = tmp2;
            throw tmp37;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _fetchUserExperimentAssignments = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchInstallationExperiments() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let installation = tmp3;
              let body = tmp7;
              let lib;
              body = undefined;
              installation = undefined;
              let closure_3;
              if (null == lib) {
                let obj5 = c6;
                if (!c6.isFetching(lib(outer1_2[7]).INSTALLATION_UNIT_ID)) {
                  if (!obj5.hasLoaded(lib(outer1_2[7]).INSTALLATION_UNIT_ID)) {
                    let obj6 = outer1_1(outer1_2[5]);
                    const obj1 = { type: "APEX_EXPERIMENTS_FETCH_START", unitId: null };
                    obj1[1] = lib(outer1_2[7]).INSTALLATION_UNIT_ID;
                    obj6.dispatch(obj1);
                    let v0 = 1;
                    const HTTP = lib(outer1_2[4]).HTTP;
                    const obj2 = { url: null, query: null, rejectWithError: false };
                    obj2[0] = outer1_7.APEX_EXPERIMENTS;
                    let obj3 = { surface: null };
                    obj3[0] = lib(outer1_2[6]).Experiment_Surface.APP;
                    obj2[1] = obj3;
                    c5 = 2;
                    c6 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = HTTP.get(obj2);
                    return obj4;
                  }
                }
              }
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              obj3 = body(installation[5]);
              obj5 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: null };
              obj5[1] = lib(installation[7]).INSTALLATION_UNIT_ID;
              obj3.dispatch(obj5);
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              body = undefined;
              if (lib != null) {
                body = lib.body;
              }
              if (null != body) {
                body = lib.body;
                installation = body.installation;
                closure_3 = v0(body, closure_3);
                const Emitter = body(installation[8]).Emitter;
                Emitter.batched(() => {
                  if (installation) {
                    let obj = body(installation[5]);
                    obj = { type: "INSTALLATION_ID", installation: null };
                    obj[1] = installation;
                    obj.dispatch(obj);
                  }
                  obj = { type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: callback(installation[7]).INSTALLATION_UNIT_ID, experiments: closure_3 };
                  body(installation[5]).dispatch(obj);
                });
              } else {
                obj = body(installation[5]);
                obj6 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: null };
                obj6[1] = lib(installation[7]).INSTALLATION_UNIT_ID;
                obj.dispatch(obj6);
              }
              v0 = 0;
            }
            v0 = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
          c6 = 3;
        } catch (tmp47) {
          closure_3 = tmp47;
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp47;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _fetchInstallationExperiments = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["installation"];
const result = require("initialize").fileFinishedImporting("modules/experiments/apex/ApexActionCreators.tsx");

export const fetchApexExperimentsMetadata = function fetchApexExperimentsMetadata(APP) {
  const self = this;
  const apply = _fetchApexExperimentsMetadata.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchUserExperimentAssignments = function fetchUserExperimentAssignments() {
  const self = this;
  const apply = _fetchUserExperimentAssignments.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchInstallationExperiments = function fetchInstallationExperiments(arg0) {
  const self = this;
  const apply = _fetchInstallationExperiments.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};