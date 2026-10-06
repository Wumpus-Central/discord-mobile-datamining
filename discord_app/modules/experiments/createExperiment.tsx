// === Module 4781: createExperiment ===

// Module 4781 (createExperiment)
import ExperimentManager from "ExperimentManager" /* 4787 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import ExperimentConstants from "ExperimentConstants" /* 4783 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
({ useState: closure_4, useEffect: hasOwnProperty } = react);
({ ExperimentBuckets: metroImportAll, ExposureTypes: c9 } = ExperimentConstants);
let result = size.fileFinishedImporting("modules/experiments/createExperiment.tsx");

export default function createExperiment(config) {
  let items;
  let result3;
  _require = config;
  function trackAutoExposure(guildId) {
    let guildExperimentDescriptor;
    let obj = trackExposureOptions;
    if (trackExposureOptions === undefined) {
      obj = {};
    }
    let tmp = guildExperimentDescriptor;
    if (guildExperimentDescriptor === undefined) {
      tmp = null;
    }
    obj.exposureType = arg2 ? constants.AUTO_FALLBACK : constants.AUTO;
    obj.excluded = false;
    if (null != tmp) {
      trackExposureWithDescriptor(guildId, obj, tmp);
    } else {
      let tmp3 = obj;
      if (obj === undefined) {
        tmp3 = { excluded: false, exposureType: constants.MANUAL };
        const obj2 = { excluded: false, exposureType: constants.MANUAL };
      }
      const id = result3.id;
      if ("guild" === config.kind) {
        guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(id);
      }
      if (null != guildExperimentDescriptor) {
        trackExposureWithDescriptor(guildId, tmp3, guildExperimentDescriptor);
      }
    }
  }
  function trackExposureWithDescriptor(location, analyticsLocations, guildExperimentDescriptor) {
    let exposureType;
    let fingerprint;
    let flag;
    if (null != guildExperimentDescriptor) {
      const MANUAL = constants.MANUAL;
      let str;
      const trackExposureToExperiment = ExperimentManager.trackExposureToExperiment;
      const id = result3.id;
      ExperimentManager;
      if (location != null) {
        str = location.location;
      }
      if (str == null) {
        str = "unknown";
      }
      const obj = { location: str, analyticsLocations, fingerprint, excluded: flag, exposureType };
      analyticsLocations = undefined;
      if (analyticsLocations != null) {
        analyticsLocations = analyticsLocations.analyticsLocations;
      }
      if (analyticsLocations == null) {
        analyticsLocations = [];
      }
      fingerprint = undefined;
      if (analyticsLocations != null) {
        fingerprint = analyticsLocations.fingerprint;
      }
      if (fingerprint == null) {
        fingerprint = AuthenticationStore.getFingerprint();
      }
      flag = undefined;
      if (analyticsLocations != null) {
        flag = analyticsLocations.excluded;
      }
      if (!flag) {
        flag = false;
      }
      exposureType = undefined;
      if (analyticsLocations != null) {
        exposureType = analyticsLocations.exposureType;
      }
      if (exposureType == null) {
        exposureType = MANUAL;
      }
      const result = trackExposureToExperiment(id, guildExperimentDescriptor, obj);
    }
  }
  function subscribe(guildId, fn) {
    let guildExperimentDescriptor;
    let obj2;
    config = guildId;
    let closure_1 = fn;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    let NOT_ELIGIBLE;
    let num;
    function onStoreChange() {
      let guildExperimentDescriptor;
      const id = guildId.id;
      if ("guild" === guildId.kind) {
        guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, tmp2.guildId);
      } else {
        guildExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(id);
      }
      if (null != guildExperimentDescriptor) {
        if (!closure_2) {
          NOT_ELIGIBLE = guildExperimentDescriptor.bucket;
        }
        num = -1;
        if (null != guildExperimentDescriptor) {
          num = guildExperimentDescriptor.revision;
        }
        const tmp8 = NOT_ELIGIBLE === NOT_ELIGIBLE && num === num;
        if (!tmp8) {
          let defaultConfig;
          let aaMode;
          if (guildExperimentDescriptor != null) {
            aaMode = guildExperimentDescriptor.aaMode;
          }
          if (aaMode) {
            defaultConfig = guildId.defaultConfig;
          } else {
            const value = map.get(NOT_ELIGIBLE);
            defaultConfig = undefined;
            if (value != null) {
              defaultConfig = value.config;
            }
            if (defaultConfig == null) {
              defaultConfig = guildId.defaultConfig;
            }
          }
          fn(defaultConfig, NOT_ELIGIBLE, num);
        }
      }
      NOT_ELIGIBLE = metroImportAll.NOT_ELIGIBLE;
    }
    let closure_2 = tmp;
    const tmp2 = config;
    let id = config.id;
    if ("guild" === config.kind) {
      guildExperimentDescriptor = authStore.getGuildExperimentDescriptor(id, guildId.guildId);
      obj2 = authStore;
    } else {
      obj2 = authStore;
      guildExperimentDescriptor = authStore.getUserExperimentDescriptor(id);
    }
    if (null != guildExperimentDescriptor) {
      let defaultConfig;
      if (!(null != obj.disable && obj.disable)) {
        NOT_ELIGIBLE = guildExperimentDescriptor.bucket;
      }
      num = -1;
      if (null != guildExperimentDescriptor) {
        num = guildExperimentDescriptor.revision;
      }
      let aaMode;
      const obj3 = closure_1;
      const tmp5 = NOT_ELIGIBLE;
      if (guildExperimentDescriptor != null) {
        aaMode = guildExperimentDescriptor.aaMode;
      }
      if (aaMode) {
        defaultConfig = tmp2.defaultConfig;
      } else {
        let value = obj3.get(tmp5);
        defaultConfig = undefined;
        if (value != null) {
          defaultConfig = value.config;
        }
        if (defaultConfig == null) {
          defaultConfig = tmp2.defaultConfig;
        }
      }
      fn(defaultConfig, NOT_ELIGIBLE, num);
      let result = obj2.addReactChangeListener(onStoreChange);
      return () => {
        const result = ExperimentStore.removeReactChangeListener(onStoreChange);
      };
    }
    NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
  }
  let tmp = _require;
  let tmp2 = result3;
  let obj = require("validateTriggerPoint");
  let result = obj.validateOneExperiment(config.id, config.label, config.commonTriggerPoint);
  map = new Map();
  let obj2 = { description: "Not Eligible", config: config.defaultConfig };
  const result1 = map.set(constants.NOT_ELIGIBLE, obj2);
  let obj3 = { description: "Control Bucket", config: config.defaultConfig };
  const result2 = map.set(constants.CONTROL, obj3);
  const treatments = config.treatments;
  const item = treatments.forEach((config) => {
    const obj = { description: "Treatment " + config.id + ": " + config.label, config: config.config };
    const result = map.set(config.id, obj);
  });
  const obj4 = { id: config.id, title: config.label, commonTriggerPoint: config.commonTriggerPoint, description: items.map((description) => description.description), buckets: [...map.keys()] };
  const kind = config.kind;
  items = [...map.values()];
  if ("guild" === kind) {
    const tmpResult = tmp(tmp2[5]);
    result3 = tmpResult.registerGuildExperiment(obj4);
  } else {
    const tmpResult2 = tmp(tmp2[5]);
    result3 = tmpResult2.registerUserExperiment(obj4);
  }
  return {
    useExperiment(cResult) {
      let commonTriggerPoint;
      let tmp11;
      let tmp12;
      let tmp13;
      let obj = cResult2;
      if (cResult2 === undefined) {
        obj = { autoTrackExposure: true };
      }
      let closure_1;
      let guildExperimentDescriptor;
      let closure_3;
      let flag2;
      let closure_5;
      let closure_6;
      let flag = obj.disable;
      if (flag == null) {
        flag = false;
      }
      let tmp = false !== obj.autoTrackExposure;
      closure_1 = tmp;
      const id = flag.id;
      if ("guild" === flag.kind) {
        guildExperimentDescriptor = authStore.getGuildExperimentDescriptor(id, cResult.guildId);
      } else {
        guildExperimentDescriptor = authStore.getUserExperimentDescriptor(id);
      }
      let tmp8Result;
      if (null != obj.trackExposureOptions) {
        let trackExposureOptions = obj.trackExposureOptions;
        const tmp8 = map(result3[7]);
        if (trackExposureOptions == null) {
          trackExposureOptions = {};
        }
        tmp8Result = tmp8(trackExposureOptions);
      }
      closure_3 = tmp8Result;
      flag2 = undefined;
      if (guildExperimentDescriptor != null) {
        flag2 = guildExperimentDescriptor.triggerDebuggingEnabled;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      const tmp9 = trackAutoExposure(trackExposureWithDescriptor(() => {
        if (null != guildExperimentDescriptor) {
          let NOT_ELIGIBLE;
          let defaultConfig;
          if (!flag) {
            NOT_ELIGIBLE = guildExperimentDescriptor.bucket;
          }
          let aaMode;
          if (guildExperimentDescriptor != null) {
            aaMode = guildExperimentDescriptor.aaMode;
          }
          if (aaMode) {
            defaultConfig = config.defaultConfig;
          } else {
            const value = map.get(NOT_ELIGIBLE);
            defaultConfig = undefined;
            if (value != null) {
              defaultConfig = value.config;
            }
            if (defaultConfig == null) {
              defaultConfig = config.defaultConfig;
            }
          }
          const items = [defaultConfig, NOT_ELIGIBLE, ];
          let num = -1;
          if (null != guildExperimentDescriptor) {
            num = guildExperimentDescriptor.revision;
          }
          items[2] = num;
          return items;
        }
        NOT_ELIGIBLE = metroImportAll.NOT_ELIGIBLE;
      }), 2);
      closure_5 = tmp9[1];
      [tmp11, tmp12, tmp13] = trackAutoExposure(tmp9[0], 3);
      trackAutoExposure(tmp9[0], 3);
      const tmp14 = map(result3[7])(cResult);
      closure_6 = tmp14;
      let items = [flag, tmp, tmp14, tmp8Result, tmp12, tmp13, flag2];
      subscribe(() => {
        let tmp = flag;
        if (!tmp) {
          tmp = !closure_1 && !flag2;
          const tmp3 = !closure_1 && !flag2;
        }
        if (!tmp) {
          tmp = null != commonTriggerPoint.commonTriggerPoint;
        }
        if (!tmp) {
          trackAutoExposure(closure_6, closure_3, false === closure_1);
        }
      }, items);
      const items1 = [flag, tmp14];
      subscribe(() => {
        const obj = { disable: flag };
        return subscribe(closure_6, (arg0, arg1, arg2) => {
          let closure_0 = arg0;
          closure_1 = arg1;
          let closure_2 = arg2;
          let tmp = closure_1_5((arg0) => {
            let tmp = arg0;
            if (arg0[0] === closure_0) {
              return tmp;
            }
            const items = [closure_0, closure_1, closure_2];
            tmp = items;
          });
        }, obj);
      }, items1);
      return tmp11;
    },
    subscribe,
    trackExposure(guildId) {
      let guildExperimentDescriptor;
      let tmp = analyticsLocations;
      if (analyticsLocations === undefined) {
        tmp = { excluded: false, exposureType: constants.MANUAL };
        const obj = { excluded: false, exposureType: constants.MANUAL };
      }
      const id = result3.id;
      if ("guild" === config.kind) {
        guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(id);
      }
      if (null != guildExperimentDescriptor) {
        trackExposureWithDescriptor(guildId, tmp, guildExperimentDescriptor);
      }
    },
    getCurrentConfig(guildId) {
      let defaultConfig1;
      let guildExperimentDescriptor;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = { autoTrackExposure: true };
      }
      const id = config.id;
      if ("guild" === config.kind) {
        guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(id);
      }
      if (null != guildExperimentDescriptor) {
        if (!obj.disable) {
          let defaultConfig;
          if (false !== obj.autoTrackExposure) {
            if (null == config.commonTriggerPoint) {
              trackAutoExposure(guildId, obj.trackExposureOptions, false === obj.autoTrackExposure, guildExperimentDescriptor);
            }
          }
          let aaMode;
          const bucket = guildExperimentDescriptor.bucket;
          if (guildExperimentDescriptor != null) {
            aaMode = guildExperimentDescriptor.aaMode;
          }
          if (aaMode) {
            defaultConfig = config.defaultConfig;
          } else {
            const value = map.get(bucket);
            defaultConfig = undefined;
            if (value != null) {
              defaultConfig = value.config;
            }
            if (defaultConfig == null) {
              defaultConfig = config.defaultConfig;
            }
          }
          return defaultConfig;
        }
      }
      let aaMode1;
      const NOT_ELIGIBLE = metroImportAll.NOT_ELIGIBLE;
      if (guildExperimentDescriptor != null) {
        aaMode1 = guildExperimentDescriptor.aaMode;
      }
      if (aaMode1) {
        defaultConfig1 = config.defaultConfig;
      } else {
        const value2 = map.get(NOT_ELIGIBLE);
        defaultConfig1 = undefined;
        if (value2 != null) {
          defaultConfig1 = value2.config;
        }
        if (defaultConfig1 == null) {
          defaultConfig1 = config.defaultConfig;
        }
      }
      return defaultConfig1;
    },
    definition: config,
    isAAMode(guildId) {
      let guildExperimentDescriptor;
      const id = config.id;
      if ("guild" === config.kind) {
        guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(id);
      }
      let aaMode;
      if (guildExperimentDescriptor != null) {
        aaMode = guildExperimentDescriptor.aaMode;
      }
      return aaMode;
    }
  };
};