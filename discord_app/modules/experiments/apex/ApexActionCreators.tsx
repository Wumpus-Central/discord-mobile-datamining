// === Module 11141: ApexActionCreators ===

// Module 11141 (ApexActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1443 */;
import experiment from "experiment" /* 7537 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import size from "module_2" /* 2 */;

let obj = function _fetchApexExperimentsMetadata() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let obj5;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let experiments;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            experiments = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.APEX_EXPERIMENTS_METADATA, query: obj5, rejectWithError: true };
            obj5 = { surface: experiments };
            c5 = 2;
            c6 = 1;
            const obj6 = { value: HTTP.get(request), done: false };
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            const obj4 = closure_130_1(closure_130_2[5]);
            obj4.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            experiments = value.body.experiments;
            experiments = experiments.map((id) => {
              let variants;
              obj = { id: id.id, name: id.name, title: id.title, revision: id.revision, unitType: id.unit_type, variants: variants.map((id) => ({ id: id.id, label: id.label, type: id.type })) };
              variants = id.variants;
              return obj;
            });
            obj = closure_130_1(closure_130_2[5]);
            const obj8 = { type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS", experiments };
            obj.dispatch(obj8);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        closure_3 = tmp16;
        if (0 === c4) {
          c6 = 3;
          throw tmp16;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchUserExperimentAssignments() {
  let fetching;
  obj = _asyncToGenerator(async (unitId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj7;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = undefined;
              if (!fetching.isFetching(unitId)) {
                if (!fetching.hasLoaded(unitId)) {
                  const obj5 = { type: "APEX_EXPERIMENTS_FETCH_START", unitId };
                  const obj8 = DispatcherDefault;
                  obj8.dispatch(obj5);
                  c4 = 1;
                  const HTTP = HTTPUtils.HTTP;
                  const request = { url: constants.APEX_EXPERIMENTS, query: obj7, rejectWithError: false };
                  const get = HTTP.get;
                  c5 = 2;
                  c6 = 1;
                  obj7 = { surface: experiment.Experiment_Surface.APP };
                  const obj9 = { value: get(request), done: false };
                  return obj9;
                }
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj10 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId };
            const obj6 = closure_130_1(closure_130_2[5]);
            obj6.dispatch(obj10);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            if (null != closure_1) {
              if (null != closure_1.body) {
                const obj12 = { type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId, experiments: closure_1.body };
                obj = closure_130_1(closure_130_2[5]);
                obj.dispatch(obj12);
              }
              c4 = 0;
            }
            const obj13 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId };
            const obj3 = closure_130_1(closure_130_2[5]);
            obj3.dispatch(obj13);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp34) {
          closure_3 = tmp34;
          if (0 === c4) {
            c6 = 3;
            throw tmp34;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchInstallationExperiments() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let obj6;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let body2;
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
            let closure_1 = tmp4;
            closure_0 = undefined;
            body2 = undefined;
            let installation;
            let experiments;
            if (null == closure_0) {
              if (!ApexExperimentStore.isFetching(apex_ApexTypes.INSTALLATION_UNIT_ID)) {
                if (!ApexExperimentStore.hasLoaded(apex_ApexTypes.INSTALLATION_UNIT_ID)) {
                  const obj5 = { type: "APEX_EXPERIMENTS_FETCH_START", unitId: apex_ApexTypes.INSTALLATION_UNIT_ID };
                  const dispatch3 = DispatcherDefault.dispatch;
                  dispatch3(obj5);
                  c4 = 1;
                  const HTTP = HTTPUtils.HTTP;
                  const request = { url: constants.APEX_EXPERIMENTS, query: obj6, rejectWithError: false };
                  obj6 = { surface: experiment.Experiment_Surface.APP };
                  const get = HTTP.get;
                  c5 = 2;
                  c6 = 1;
                  const obj7 = { value: get(request), done: false };
                  return obj7;
                }
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          const obj8 = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: closure_130_0(closure_130_2[7]).INSTALLATION_UNIT_ID };
          const dispatch2 = closure_130_1(closure_130_2[5]).dispatch;
          const tmp27 = closure_130_1(closure_130_2[5]);
          dispatch2(obj8);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_0 = value;
          let body;
          if (closure_0 != null) {
            body = closure_0.body;
          }
          if (null != body) {
            body2 = closure_0.body;
            installation = body2.installation;
            experiments = closure_130_4(body2, closure_130_3);
            const Emitter = closure_130_1(closure_130_2[8]).Emitter;
            Emitter.batched(() => {
              if (installation) {
                const obj2 = { type: "INSTALLATION_ID", installation };
                obj = closure_1(installation[5]);
                obj.dispatch(obj2);
              }
              const obj3 = closure_1(installation[5]);
              const obj4 = { type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: closure_0(installation[7]).INSTALLATION_UNIT_ID, experiments };
              obj3.dispatch(obj4);
            });
          } else {
            obj = { type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: closure_130_0(closure_130_2[7]).INSTALLATION_UNIT_ID };
            const dispatch = closure_130_1(closure_130_2[5]).dispatch;
            const tmp9 = closure_130_1(closure_130_2[5]);
            const dispatchResult = dispatch(obj);
          }
          c4 = 0;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp47) {
        experiments = tmp47;
        if (0 === c4) {
          c6 = 3;
          throw tmp47;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = ["installation"];
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/experiments/apex/ApexActionCreators.tsx");

export const fetchApexExperimentsMetadata = function fetchApexExperimentsMetadata() {
  return obj(...arguments);
};
export const fetchUserExperimentAssignments = function fetchUserExperimentAssignments() {
  return obj(...arguments);
};
export const fetchInstallationExperiments = function fetchInstallationExperiments() {
  return obj(...arguments);
};