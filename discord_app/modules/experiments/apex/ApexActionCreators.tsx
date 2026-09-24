// === Module 11823: ApexActionCreators ===

// Module 11823 (ApexActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1437 */;
import experiment from "experiment" /* 8225 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;

require = fn;
let closure_8 = async function _fetchApexExperimentsMetadata() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.APEX_EXPERIMENTS_METADATA, query: { surface }, rejectWithError: true };
    await HTTP.get(request);
    if (1 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[5]).dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" });
      c6 = 3;
      closure_130_1(closure_130_2[5]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const experiments = value.body.experiments;
      closure_129_0 = experiments.map((id) => {
        const obj = { id: id.id, name: id.name, title: id.title, revision: id.revision, unitType: id.unit_type, variants: null };
        const variants = id.variants;
        obj.variants = variants.map((id) => ({ id: id.id, label: id.label, type: id.type }));
        return obj;
      });
      closure_130_1(closure_130_2[5]).dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS", experiments: closure_129_0 });
      c4 = 0;
      closure_130_1(closure_130_2[5]);
    }
    return value;
  })();
};
let closure_9 = async function _fetchUserExperimentAssignments() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = unitId;
            closure_129_1 = undefined;
            if (!fetching.isFetching(unitId)) {
              if (!fetching.hasLoaded(unitId)) {
                const obj5 = { type: "APEX_EXPERIMENTS_FETCH_START", unitId };
                DispatcherDefault.dispatch(obj5);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: constants.APEX_EXPERIMENTS, query: null, rejectWithError: false };
                const obj7 = { surface: experiment.Experiment_Surface.APP };
                request.query = obj7;
                c5 = 2;
                c6 = 1;
                const obj9 = { value: HTTP.get(request), done: false };
                return obj9;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            const obj10 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: closure_129_0 };
            closure_130_1(closure_130_2[5]).dispatch(obj10);
            const obj6 = closure_130_1(closure_130_2[5]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_1 = value;
            if (null != closure_129_1) {
              if (null != closure_129_1.body) {
                const obj11 = { type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: closure_129_0, experiments: closure_129_1.body };
                closure_130_1(closure_130_2[5]).dispatch(obj11);
                const obj = closure_130_1(closure_130_2[5]);
              }
              c4 = 0;
            }
            const obj12 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: closure_129_0 };
            closure_130_1(closure_130_2[5]).dispatch(obj12);
            const obj3 = closure_130_1(closure_130_2[5]);
          }
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
        c6 = 3;
      } catch (tmp37) {
        closure_3 = tmp37;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp37;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_10 = async function _fetchInstallationExperiments(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          const installation = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          let body2;
          let installation2;
          closure_129_3 = undefined;
          if (null == closure_0) {
            if (!ApexExperimentStore.isFetching(apex_ApexTypes.INSTALLATION_UNIT_ID)) {
              if (!ApexExperimentStore.hasLoaded(apex_ApexTypes.INSTALLATION_UNIT_ID)) {
                const obj5 = { type: "APEX_EXPERIMENTS_FETCH_START", unitId: apex_ApexTypes.INSTALLATION_UNIT_ID };
                DispatcherDefault.dispatch(obj5);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: constants.APEX_EXPERIMENTS, query: null, rejectWithError: false };
                const obj8 = { surface: experiment.Experiment_Surface.APP };
                request.query = obj8;
                c5 = 2;
                c6 = 1;
                const obj9 = { value: HTTP.get(request), done: false };
                return obj9;
              }
            }
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          const obj10 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: closure_130_0(closure_130_2[7]).INSTALLATION_UNIT_ID };
          closure_130_1(closure_130_2[5]).dispatch(obj10);
          let obj4 = closure_130_1(closure_130_2[5]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_0 = value;
          let body;
          if (closure_129_0 != null) {
            body = closure_129_0.body;
          }
          if (null != body) {
            body2 = closure_129_0.body;
            installation2 = body2.installation;
            closure_129_3 = closure_130_4(body2, closure_130_3);
            const Emitter = closure_130_1(closure_130_2[8]).Emitter;
            Emitter.batched(() => {
              if (installation) {
                const obj2 = { type: "INSTALLATION_ID", installation };
                closure_1(installation[5]).dispatch(obj2);
                const obj = closure_1(installation[5]);
              }
              const obj3 = closure_1(installation[5]);
              obj3.dispatch({ type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: closure_0(installation[7]).INSTALLATION_UNIT_ID, experiments });
              const obj4 = { type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: closure_0(installation[7]).INSTALLATION_UNIT_ID, experiments };
            });
          } else {
            const obj11 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: closure_130_0(closure_130_2[7]).INSTALLATION_UNIT_ID };
            closure_130_1(closure_130_2[5]).dispatch(obj11);
            let obj = closure_130_1(closure_130_2[5]);
          }
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj12 = { value, done: true };
        return obj12;
      }
      c6 = 3;
    } catch (tmp47) {
      const experiments = tmp47;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp47;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_3 = ["installation"];
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexActionCreators.tsx");

export const fetchApexExperimentsMetadata = function fetchApexExperimentsMetadata() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchUserExperimentAssignments = function fetchUserExperimentAssignments() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchInstallationExperiments = function fetchInstallationExperiments() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};