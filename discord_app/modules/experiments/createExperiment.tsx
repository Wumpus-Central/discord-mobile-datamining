import _slicedToArray from "_slicedToArray";
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import getHash from "getHash";
import ExperimentBuckets from "ExperimentBuckets";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
({ useState: c4, useEffect: c5 } = noop);
({ ExperimentBuckets: metroImportAll, ExposureTypes: c9 } = ExperimentBuckets);
let result = require("fetchFingerprint").fileFinishedImporting("modules/experiments/createExperiment.tsx");

export default function createExperiment(config) {
  const _require = config;
  function trackAutoExposure(guildId, trackExposureOptions, arg2, guildExperimentDescriptor) {
    let obj = trackExposureOptions;
    if (trackExposureOptions === undefined) {
      obj = {};
    }
    let tmp = guildExperimentDescriptor;
    if (guildExperimentDescriptor === undefined) {
      tmp = null;
    }
    obj.exposureType = arg2 ? outer1_9.AUTO_FALLBACK : outer1_9.AUTO;
    obj.excluded = false;
    if (null != tmp) {
      trackExposureWithDescriptor(guildId, obj, tmp);
    } else {
      let tmp3 = obj;
      if (obj === undefined) {
        obj = { excluded: false, exposureType: null };
        obj[1] = outer1_9.MANUAL;
        tmp3 = obj;
      }
      const id = result3.id;
      if ("guild" === config.kind) {
        guildExperimentDescriptor = outer1_7.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = outer1_7.getUserExperimentDescriptor(id);
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
      const obj = { location: null, analyticsLocations: null, fingerprint: null, excluded: null, exposureType: null };
      obj[0] = str;
      analyticsLocations = undefined;
      if (analyticsLocations != null) {
        analyticsLocations = analyticsLocations.analyticsLocations;
      }
      if (analyticsLocations == null) {
        analyticsLocations = [];
      }
      obj[1] = analyticsLocations;
      let fingerprint;
      if (analyticsLocations != null) {
        fingerprint = analyticsLocations.fingerprint;
      }
      if (fingerprint == null) {
        fingerprint = outer1_6.getFingerprint();
      }
      obj[2] = fingerprint;
      let flag;
      if (analyticsLocations != null) {
        flag = analyticsLocations.excluded;
      }
      if (!flag) {
        flag = false;
      }
      obj[3] = flag;
      let exposureType;
      if (analyticsLocations != null) {
        exposureType = analyticsLocations.exposureType;
      }
      if (exposureType == null) {
        exposureType = outer1_9.MANUAL;
      }
      obj[4] = exposureType;
      const result = config(result3[5]).trackExposureToExperiment(result3.id, guildExperimentDescriptor, obj);
      const obj2 = config(result3[5]);
    }
  }
  function subscribe(guildId) {
    const config = guildId;
    let closure_1 = arg1;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    let c2;
    let NOT_ELIGIBLE;
    let num;
    function onStoreChange() {
      const id = guildId.id;
      if ("guild" === guildId.kind) {
        let guildExperimentDescriptor = outer2_7.getGuildExperimentDescriptor(id, tmp2.guildId);
      } else {
        guildExperimentDescriptor = outer2_7.getUserExperimentDescriptor(id);
      }
      if (null != guildExperimentDescriptor) {
        if (!c2) {
          let NOT_ELIGIBLE = guildExperimentDescriptor.bucket;
        }
        let num = -1;
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
            const value = obj.get(NOT_ELIGIBLE);
            defaultConfig = undefined;
            if (value != null) {
              defaultConfig = value.config;
            }
            if (defaultConfig == null) {
              defaultConfig = tmp.defaultConfig;
            }
          }
          closure_1(defaultConfig, NOT_ELIGIBLE, num);
          obj = closure_1;
          const tmp10 = closure_1;
        }
      }
      NOT_ELIGIBLE = outer2_8.NOT_ELIGIBLE;
    }
    c2 = tmp;
    let id = config.id;
    if ("guild" === config.kind) {
      let guildExperimentDescriptor = outer1_7.getGuildExperimentDescriptor(id, guildId.guildId);
      let obj2 = outer1_7;
    } else {
      obj2 = outer1_7;
      guildExperimentDescriptor = outer1_7.getUserExperimentDescriptor(id);
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
        let value = closure_1.get(NOT_ELIGIBLE);
        defaultConfig = undefined;
        if (value != null) {
          defaultConfig = value.config;
        }
        if (defaultConfig == null) {
          defaultConfig = tmp2.defaultConfig;
        }
      }
      arg1(defaultConfig, NOT_ELIGIBLE, num);
      let result = obj2.addReactChangeListener(onStoreChange);
      return () => {
        const result = outer2_7.removeReactChangeListener(onStoreChange);
      };
    }
    NOT_ELIGIBLE = outer1_8.NOT_ELIGIBLE;
  }
  let obj = _require(result3[6]);
  let result = obj.validateOneExperiment(config.id, config.label, config.commonTriggerPoint);
  const map = new Map();
  obj = { description: "Not Eligible", config: config.defaultConfig };
  const result1 = map.set(constants.NOT_ELIGIBLE, obj);
  obj = { description: "Control Bucket", config: config.defaultConfig };
  const result2 = map.set(constants.CONTROL, obj);
  const treatments = config.treatments;
  const item = treatments.forEach((config) => {
    const result = map.set(config.id, { description: "Treatment " + config.id + ": " + config.label, config: config.config });
  });
  const obj1 = { id: config.id, title: config.label, commonTriggerPoint: config.commonTriggerPoint, description: null, buckets: null };
  let items = [...map.values()];
  obj1[3] = items.map((description) => description.description);
  obj1[4] = [...map.keys()];
  if ("guild" === config.kind) {
    let tmpResult = tmp(tmp2[5]);
    result3 = tmpResult.registerGuildExperiment(obj1);
  } else {
    tmpResult = tmp(tmp2[5]);
    result3 = tmpResult.registerUserExperiment(obj1);
  }
  return {
    useExperiment(guildId) {
      let tmp11;
      let tmp12;
      let tmp13;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = { autoTrackExposure: true };
      }
      let flag;
      let c1;
      let guildExperimentDescriptor;
      let c3;
      let flag2;
      let closure_5;
      let c6;
      flag = obj.disable;
      if (flag == null) {
        flag = false;
      }
      c1 = tmp;
      const id = flag.id;
      if ("guild" === flag.kind) {
        guildExperimentDescriptor = outer1_7.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = outer1_7.getUserExperimentDescriptor(id);
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
      c3 = tmp8Result;
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
            const value = c1.get(NOT_ELIGIBLE);
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
        NOT_ELIGIBLE = outer2_8.NOT_ELIGIBLE;
      }), 2);
      closure_5 = tmp9[1];
      [tmp11, tmp12, tmp13] = trackAutoExposure(tmp9[0], 3);
      const tmp14 = map(result3[7])(guildId);
      c6 = tmp14;
      let items = [flag, false !== obj.autoTrackExposure, tmp14, tmp8Result, tmp12, tmp13, flag2];
      subscribe(() => {
        let tmp = flag;
        if (!flag) {
          let tmp3 = !c1;
          if (!c1) {
            tmp3 = !flag2;
          }
          tmp = tmp3;
        }
        if (!tmp) {
          tmp = null != flag.commonTriggerPoint;
        }
        if (!tmp) {
          _undefined(c6, _undefined, false === c1);
        }
      }, items);
      const items1 = [flag, tmp14];
      subscribe(() => callback(c6, (arg0, arg1, arg2) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let closure_2 = arg2;
        callback((arg0) => {
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
        const obj = { excluded: false, exposureType: null };
        obj[1] = outer1_9.MANUAL;
        tmp = obj;
      }
      const id = result3.id;
      if ("guild" === config.kind) {
        let guildExperimentDescriptor = outer1_7.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = outer1_7.getUserExperimentDescriptor(id);
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
      const id = config.id;
      if ("guild" === config.kind) {
        let guildExperimentDescriptor = outer1_7.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = outer1_7.getUserExperimentDescriptor(id);
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
            let value = map.get(guildExperimentDescriptor.bucket);
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
        value = map.get(outer1_8.NOT_ELIGIBLE);
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
    definition: config,
    isAAMode(guildId) {
      const id = config.id;
      if ("guild" === config.kind) {
        let guildExperimentDescriptor = outer1_7.getGuildExperimentDescriptor(id, guildId.guildId);
      } else {
        guildExperimentDescriptor = outer1_7.getUserExperimentDescriptor(id);
      }
      let aaMode;
      if (guildExperimentDescriptor != null) {
        aaMode = guildExperimentDescriptor.aaMode;
      }
      return aaMode;
    }
  };
};