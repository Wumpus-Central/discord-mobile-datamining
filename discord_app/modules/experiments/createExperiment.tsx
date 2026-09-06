// === Module 4475: createExperiment ===

// Module 4475 (createExperiment)
import ExperimentManager from "ExperimentManager" /* 4481 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;

require = fn;
const noop = fn(19);
({ useState: closure_4, useEffect: hasOwnProperty } = noop);
const ExperimentConstants = fn(4477);
({ ExperimentBuckets: closure_8, ExposureTypes: closure_9 } = ExperimentConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/experiments/createExperiment.tsx");

export default function createExperiment(createExperiment) {
  _require = createExperiment;
  function trackAutoExposure(guildId, trackExposureOptions, arg2, guildExperimentDescriptor) {
    let obj = trackExposureOptions;
    if (trackExposureOptions === undefined) {
      obj = {};
    }
    let tmp = guildExperimentDescriptor;
    if (guildExperimentDescriptor === undefined) {
      tmp = null;
    }
    obj.exposureType = arg2 ? constants2.AUTO_FALLBACK : constants2.AUTO;
    obj.excluded = false;
    if (null != tmp) {
      trackExposureWithDescriptor(guildId, obj, tmp);
    } else {
      let tmp3 = obj;
      if (obj === undefined) {
        obj = { excluded: false, exposureType: constants2.MANUAL };
        tmp3 = obj;
      }
      const id = result3.id;
      if ("guild" === user.kind) {
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
    if (null != guildExperimentDescriptor) {
      let str;
      if (location != null) {
        str = location.location;
      }
      if (str == null) {
        str = "unknown";
      }
      const obj = { location: str, analyticsLocations: null, fingerprint: null, excluded: null, exposureType: null };
      analyticsLocations = undefined;
      if (analyticsLocations != null) {
        analyticsLocations = analyticsLocations.analyticsLocations;
      }
      if (analyticsLocations == null) {
        analyticsLocations = [];
      }
      obj.analyticsLocations = analyticsLocations;
      let fingerprint;
      if (analyticsLocations != null) {
        fingerprint = analyticsLocations.fingerprint;
      }
      if (fingerprint == null) {
        fingerprint = AuthenticationStore.getFingerprint();
      }
      obj.fingerprint = fingerprint;
      let flag;
      if (analyticsLocations != null) {
        flag = analyticsLocations.excluded;
      }
      if (!flag) {
        flag = false;
      }
      obj.excluded = flag;
      let exposureType;
      if (analyticsLocations != null) {
        exposureType = analyticsLocations.exposureType;
      }
      if (exposureType == null) {
        exposureType = constants2.MANUAL;
      }
      obj.exposureType = exposureType;
      const result = ExperimentManager.trackExposureToExperiment(result3.id, guildExperimentDescriptor, obj);
    }
  }
  function subscribe(guildId, fn) {
    user = guildId;
    map = fn;
    if (arg2 === undefined) {
      let obj = {};
    }
    let NOT_ELIGIBLE;
    let num;
    function onStoreChange() {
      const id = guildId.id;
      if ("guild" === guildId.kind) {
        let guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, tmp2.guildId);
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
        let tmp8 = NOT_ELIGIBLE === NOT_ELIGIBLE;
        if (tmp8) {
          tmp8 = num === num;
        }
        if (!tmp8) {
          let aaMode;
          if (guildExperimentDescriptor != null) {
            aaMode = guildExperimentDescriptor.aaMode;
          }
          if (aaMode) {
            let defaultConfig = tmp.defaultConfig;
          } else {
            value = obj.get(NOT_ELIGIBLE);
            defaultConfig = undefined;
            if (value != null) {
              defaultConfig = value.config;
            }
            if (defaultConfig == null) {
              defaultConfig = tmp.defaultConfig;
            }
          }
          closure_1(defaultConfig, NOT_ELIGIBLE, num);
          obj = map;
        }
      }
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    closure_2 = tmp;
    let id = user.id;
    if ("guild" === user.kind) {
      let guildExperimentDescriptor = authStore.getGuildExperimentDescriptor(id, guildId.guildId);
      let obj2 = authStore;
    } else {
      obj2 = authStore;
      guildExperimentDescriptor = authStore.getUserExperimentDescriptor(id);
    }
    if (null != guildExperimentDescriptor) {
      if (!tmp) {
        NOT_ELIGIBLE = guildExperimentDescriptor.bucket;
      }
      num = -1;
      if (null != guildExperimentDescriptor) {
        num = guildExperimentDescriptor.revision;
      }
      let aaMode;
      if (guildExperimentDescriptor != null) {
        aaMode = guildExperimentDescriptor.aaMode;
      }
      if (aaMode) {
        let defaultConfig = tmp2.defaultConfig;
      } else {
        value = map.get(NOT_ELIGIBLE);
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
  let obj = require("validateTriggerPoint");
  let result = obj.validateOneExperiment(createExperiment.id, createExperiment.label, createExperiment.commonTriggerPoint);
  let map = new Map();
  obj = { description: "Not Eligible", config: createExperiment.defaultConfig };
  const result1 = map.set(constants.NOT_ELIGIBLE, obj);
  obj = { description: "Control Bucket", config: createExperiment.defaultConfig };
  const result2 = map.set(constants.CONTROL, obj);
  const treatments = createExperiment.treatments;
  const item = treatments.forEach((config) => {
    const result = map.set(config.id, { description: "Treatment " + config.id + ": " + config.label, config: config.config });
  });
  const obj1 = { id: createExperiment.id, title: createExperiment.label, commonTriggerPoint: createExperiment.commonTriggerPoint, description: null, buckets: [...map.keys()] };
  let items = [...map.values()];
  obj1.description = items.map((description) => description.description);
  if ("guild" === createExperiment.kind) {
    let tmpResult = tmp(tmp2[5]);
    result3 = tmpResult.registerGuildExperiment(obj1);
  } else {
    tmpResult = tmp(tmp2[5]);
    result3 = tmpResult.registerUserExperiment(obj1);
  }
  return {
    useExperiment(guildId) {
      let obj = arg1;
      if (arg1 === undefined) {
        obj = { autoTrackExposure: true };
      }
      closure_1 = undefined;
      let guildExperimentDescriptor;
      closure_3 = undefined;
      let flag2;
      closure_5 = undefined;
      closure_6 = undefined;
      let flag = obj.disable;
      if (flag == null) {
        flag = false;
      }
      closure_1 = tmp;
      const id = flag.id;
      if ("guild" === flag.kind) {
        guildExperimentDescriptor = authStore.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = authStore.getUserExperimentDescriptor(id);
      }
      let tmp8Result;
      if (null != obj.trackExposureOptions) {
        let trackExposureOptions = obj.trackExposureOptions;
        if (trackExposureOptions == null) {
          trackExposureOptions = {};
        }
        tmp8Result = map(result3[7])(trackExposureOptions);
        const tmp8 = map(result3[7]);
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
          if (!flag) {
            let NOT_ELIGIBLE = tmp.bucket;
          }
          let aaMode;
          if (tmp != null) {
            aaMode = tmp.aaMode;
          }
          if (aaMode) {
            let defaultConfig = tmp3.defaultConfig;
          } else {
            value = map.get(NOT_ELIGIBLE);
            defaultConfig = undefined;
            if (value != null) {
              defaultConfig = value.config;
            }
            if (defaultConfig == null) {
              defaultConfig = tmp3.defaultConfig;
            }
          }
          const items = [defaultConfig, NOT_ELIGIBLE, ];
          let num = -1;
          if (null != tmp) {
            num = tmp.revision;
          }
          items[2] = num;
          return items;
        }
        NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
      }), 2);
      closure_5 = tmp9[1];
      [tmp11, tmp12, tmp13] = trackAutoExposure(tmp9[0], 3);
      const tmp14 = map(result3[7])(guildId);
      closure_6 = tmp14;
      let items = [flag, false !== obj.autoTrackExposure, tmp14, tmp8Result, tmp12, tmp13, flag2];
      subscribe(() => {
        let tmp = flag;
        if (!flag) {
          let tmp3 = !closure_1;
          if (!closure_1) {
            tmp3 = !flag2;
          }
          tmp = tmp3;
        }
        if (!tmp) {
          tmp = null != commonTriggerPoint.commonTriggerPoint;
        }
        if (!tmp) {
          trackAutoExposure(closure_6, closure_3, false === closure_1);
        }
      }, items);
      const items1 = [flag, tmp14];
      subscribe(() => subscribe(closure_6, (arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        closure_1_5((arg0) => {
          let tmp = arg0;
          if (arg0[0] === closure_0) {
            return tmp;
          }
          const items = [closure_0, closure_1, closure_2];
          tmp = items;
        });
      }, { disable: flag }), items1);
      return tmp11;
    },
    subscribe,
    trackExposure(guildId, analyticsLocations) {
      let tmp = analyticsLocations;
      if (analyticsLocations === undefined) {
        const obj = { excluded: false, exposureType: constants2.MANUAL };
        tmp = obj;
      }
      const id = result3.id;
      if ("guild" === user.kind) {
        let guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(id);
      }
      if (null != guildExperimentDescriptor) {
        trackExposureWithDescriptor(guildId, tmp, guildExperimentDescriptor);
      }
    },
    getCurrentConfig(guildId) {
      let obj = arg1;
      if (arg1 === undefined) {
        obj = { autoTrackExposure: true };
      }
      const id = user.id;
      if ("guild" === user.kind) {
        let guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(id);
      }
      if (null != guildExperimentDescriptor) {
        if (!obj.disable) {
          if (false !== obj.autoTrackExposure) {
            if (null == tmp.commonTriggerPoint) {
              trackAutoExposure(guildId, obj.trackExposureOptions, false === obj.autoTrackExposure, guildExperimentDescriptor);
            }
          }
          let aaMode;
          if (guildExperimentDescriptor != null) {
            aaMode = guildExperimentDescriptor.aaMode;
          }
          if (aaMode) {
            let defaultConfig = tmp.defaultConfig;
          } else {
            value = map.get(guildExperimentDescriptor.bucket);
            defaultConfig = undefined;
            if (value != null) {
              defaultConfig = value.config;
            }
            if (defaultConfig == null) {
              defaultConfig = tmp.defaultConfig;
            }
          }
          return defaultConfig;
        }
      }
      let aaMode1;
      if (guildExperimentDescriptor != null) {
        aaMode1 = guildExperimentDescriptor.aaMode;
      }
      if (aaMode1) {
        let defaultConfig1 = tmp.defaultConfig;
      } else {
        value = map.get(constants.NOT_ELIGIBLE);
        defaultConfig1 = undefined;
        if (value != null) {
          defaultConfig1 = value.config;
        }
        if (defaultConfig1 == null) {
          defaultConfig1 = tmp.defaultConfig;
        }
      }
      return defaultConfig1;
    },
    definition: createExperiment,
    isAAMode(guildId) {
      const id = user.id;
      if ("guild" === user.kind) {
        let guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, guildId.guildId);
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