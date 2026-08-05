// _runtime/01118_enrichAndroidProfileWithEventContext.js
import { isHermesEnabled } from "01002_isHermesEnabled.js";
import { getDebugMetadata } from "01119_getDebugMetadata.js";
const require = arg1;
const dependencyMap = arg6;
function enrichAndroidProfileWithEventContext(profile_id, build_id, contexts) {
  let obj = { debug_meta: null, build_id: null, device_cpu_frequencies: null, device_is_emulator: null, device_locale: null, device_manufacturer: null, device_model: null, device_os_name: null, device_os_version: null, device_physical_memory_bytes: null, environment: null, profile_id: null, timestamp: null, release: null, dist: null, transaction_id: null, transaction_name: null, trace_id: null, version_name: null, version_code: null };
  obj = { images: null };
  const merged = Object.assign({}, build_id);
  obj[0] = getDebugMetadata /* getDebugMetadata */.getDebugMetadata();
  obj[0] = obj;
  obj[1] = build_id.build_id || "";
  obj[2] = [];
  contexts = contexts.contexts;
  let device;
  if (null !== contexts) {
    if (undefined !== contexts) {
      device = contexts.device;
    }
  }
  let flag;
  if (null !== device) {
    if (undefined !== device) {
      flag = device.simulator;
    }
  }
  if (!flag) {
    flag = false;
  }
  obj[3] = flag;
  const contexts2 = contexts.contexts;
  let str;
  if (null !== contexts2) {
    if (undefined !== contexts2) {
      str = contexts2.device;
    }
  }
  if (str) {
    str = contexts.contexts.device.locale;
  }
  if (!str) {
    str = "";
  }
  obj[4] = str;
  const contexts3 = contexts.contexts;
  let device1;
  if (null !== contexts3) {
    if (undefined !== contexts3) {
      device1 = contexts3.device;
    }
  }
  let str2;
  if (null !== device1) {
    if (undefined !== device1) {
      str2 = device1.manufacturer;
    }
  }
  if (!str2) {
    str2 = "";
  }
  obj[5] = str2;
  const contexts4 = contexts.contexts;
  let device2;
  if (null !== contexts4) {
    if (undefined !== contexts4) {
      device2 = contexts4.device;
    }
  }
  let str3;
  if (null !== device2) {
    if (undefined !== device2) {
      str3 = device2.model;
    }
  }
  if (!str3) {
    str3 = "";
  }
  obj[6] = str3;
  const contexts5 = contexts.contexts;
  let os;
  if (null !== contexts5) {
    if (undefined !== contexts5) {
      os = contexts5.os;
    }
  }
  let str4;
  if (null !== os) {
    if (undefined !== os) {
      str4 = os.name;
    }
  }
  if (!str4) {
    str4 = "";
  }
  obj[7] = str4;
  const contexts6 = contexts.contexts;
  let os1;
  if (null !== contexts6) {
    if (undefined !== contexts6) {
      os1 = contexts6.os;
    }
  }
  let str5;
  if (null !== os1) {
    if (undefined !== os1) {
      str5 = os1.version;
    }
  }
  if (!str5) {
    str5 = "";
  }
  obj[8] = str5;
  const contexts7 = contexts.contexts;
  let device3;
  if (null !== contexts7) {
    if (undefined !== contexts7) {
      device3 = contexts7.device;
    }
  }
  let str6;
  if (null !== device3) {
    if (undefined !== device3) {
      str6 = device3.memory_size;
    }
  }
  if (str6) {
    const _Number = Number;
    str6 = Number(contexts.contexts.device.memory_size).toString(10);
    const str7 = Number(contexts.contexts.device.memory_size);
  }
  if (!str6) {
    str6 = "";
  }
  obj[9] = str6;
  let environment = contexts.environment;
  if (!environment) {
    environment = isHermesEnabled /* isHermesEnabled */.getDefaultEnvironment();
    const tmp2Result = isHermesEnabled /* isHermesEnabled */;
  }
  obj[10] = environment;
  obj[11] = profile_id;
  let _Date = Date;
  if (contexts.start_timestamp) {
    _Date = new _Date(1000 * contexts.start_timestamp);
    let toISOStringResult = _Date.toISOString();
  } else {
    const _Date1 = new _Date();
    toISOStringResult = _Date1.toISOString();
  }
  obj[12] = toISOStringResult;
  obj[13] = contexts.release || "";
  obj[14] = contexts.dist || "";
  obj[15] = contexts.event_id || "";
  obj[16] = contexts.transaction || "";
  const contexts8 = contexts.contexts;
  let trace;
  if (null !== contexts8) {
    if (undefined !== contexts8) {
      trace = contexts8.trace;
    }
  }
  let str8;
  if (null !== trace) {
    if (undefined !== trace) {
      str8 = trace.trace_id;
    }
  }
  if (!str8) {
    str8 = "";
  }
  obj[17] = str8;
  obj[18] = contexts.release || "";
  obj[19] = contexts.dist || "";
  return Object.assign(merged, obj);
}
arg5.isValidProfile = function isValidProfile(samples) {
  return samples.samples.length > 1;
};
arg5.findProfiledTransactionsFromEnvelope = function findProfiledTransactionsFromEnvelope(arg0) {
  const items = [];
  items(817).forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if ("transaction" === arg1) {
      for (let num = 1; num < arg0.length; num = num + 1) {
        let contexts = arg0[num].contexts;
        let tmp = num;
        let trace;
        if (null !== contexts) {
          if (undefined !== contexts) {
            trace = contexts.trace;
          }
        }
        let data;
        if (null !== trace) {
          if (undefined !== trace) {
            data = trace.data;
          }
        }
        let profile_id;
        if (null !== data) {
          if (undefined !== data) {
            profile_id = data.profile_id;
          }
        }
        if (profile_id) {
          let tmp5 = items;
          let arr = items.push(arg0[num]);
        }
      }
    }
  });
  return items;
};
arg5.enrichCombinedProfileWithEventContext = function enrichCombinedProfileWithEventContext(profile_id, value, contexts) {
  if ("js_profile" in value) {
    return enrichAndroidProfileWithEventContext(profile_id, value, contexts);
  } else {
    if (value.profile) {
      if (value.profile.samples.length > 1) {
        contexts = contexts.contexts;
        let trace;
        if (null !== contexts) {
          if (undefined !== contexts) {
            trace = contexts.trace;
          }
        }
        let str;
        if (null !== trace) {
          if (undefined !== trace) {
            str = trace.trace_id;
          }
        }
        if (!str) {
          str = "";
        }
        const _Object = Object;
        let obj = { event_id: null, runtime: null, timestamp: null, release: null, environment: null, os: null, device: null, transaction: null, debug_meta: null };
        obj[0] = profile_id;
        obj[1] = { name: "hermes", version: "" };
        let _Date = Date;
        const merged = Object.assign({}, value);
        if (contexts.start_timestamp) {
          _Date = new _Date(1000 * contexts.start_timestamp);
          let toISOStringResult = _Date.toISOString();
        } else {
          const _Date1 = new _Date();
          toISOStringResult = _Date1.toISOString();
        }
        obj[2] = toISOStringResult;
        obj[3] = contexts.release || "";
        let environment = contexts.environment;
        if (!environment) {
          environment = isHermesEnabled /* isHermesEnabled */.getDefaultEnvironment();
          const obj4 = isHermesEnabled /* isHermesEnabled */;
        }
        obj[4] = environment;
        const contexts2 = contexts.contexts;
        let os;
        if (null !== contexts2) {
          if (undefined !== contexts2) {
            os = contexts2.os;
          }
        }
        let str2;
        if (null !== os) {
          if (undefined !== os) {
            str2 = os.name;
          }
        }
        if (!str2) {
          str2 = "";
        }
        obj = { name: null, version: null, build_number: null };
        obj[0] = str2;
        const contexts3 = contexts.contexts;
        let os1;
        if (null !== contexts3) {
          if (undefined !== contexts3) {
            os1 = contexts3.os;
          }
        }
        let str3;
        if (null !== os1) {
          if (undefined !== os1) {
            str3 = os1.version;
          }
        }
        if (!str3) {
          str3 = "";
        }
        obj[1] = str3;
        const contexts4 = contexts.contexts;
        let os2;
        if (null !== contexts4) {
          if (undefined !== contexts4) {
            os2 = contexts4.os;
          }
        }
        let str4;
        if (null !== os2) {
          if (undefined !== os2) {
            str4 = os2.build;
          }
        }
        if (!str4) {
          str4 = "";
        }
        obj[2] = str4;
        obj[5] = obj;
        const contexts5 = contexts.contexts;
        let str5;
        if (null !== contexts5) {
          if (undefined !== contexts5) {
            str5 = contexts5.device;
          }
        }
        if (str5) {
          str5 = contexts.contexts.device.locale;
        }
        if (!str5) {
          str5 = "";
        }
        obj = { locale: null, model: null, manufacturer: null, architecture: null, is_emulator: null };
        obj[0] = str5;
        const contexts6 = contexts.contexts;
        let device;
        if (null !== contexts6) {
          if (undefined !== contexts6) {
            device = contexts6.device;
          }
        }
        let str6;
        if (null !== device) {
          if (undefined !== device) {
            str6 = device.model;
          }
        }
        if (!str6) {
          str6 = "";
        }
        obj[1] = str6;
        const contexts7 = contexts.contexts;
        let device1;
        if (null !== contexts7) {
          if (undefined !== contexts7) {
            device1 = contexts7.device;
          }
        }
        let str7;
        if (null !== device1) {
          if (undefined !== device1) {
            str7 = device1.manufacturer;
          }
        }
        if (!str7) {
          str7 = "";
        }
        obj[2] = str7;
        const contexts8 = contexts.contexts;
        let device2;
        if (null !== contexts8) {
          if (undefined !== contexts8) {
            device2 = contexts8.device;
          }
        }
        let str8;
        if (null !== device2) {
          if (undefined !== device2) {
            str8 = device2.arch;
          }
        }
        if (!str8) {
          str8 = "";
        }
        obj[3] = str8;
        const contexts9 = contexts.contexts;
        let device3;
        if (null !== contexts9) {
          if (undefined !== contexts9) {
            device3 = contexts9.device;
          }
        }
        let flag;
        if (null !== device3) {
          if (undefined !== device3) {
            flag = device3.simulator;
          }
        }
        if (!flag) {
          flag = false;
        }
        obj[4] = flag;
        obj[6] = obj;
        const obj1 = { name: null, id: null, trace_id: null, active_thread_id: null };
        obj1[0] = contexts.transaction || "";
        obj1[1] = contexts.event_id || "";
        obj1[2] = str;
        const transaction = value.transaction;
        let str9;
        if (null !== transaction) {
          if (undefined !== transaction) {
            str9 = transaction.active_thread_id;
          }
        }
        if (!str9) {
          str9 = "";
        }
        obj1[3] = str9;
        obj[7] = obj1;
        const items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(getDebugMetadata /* getDebugMetadata */.getDebugMetadata(), 0);
        const debug_meta = value.debug_meta;
        let images;
        if (null !== debug_meta) {
          if (undefined !== debug_meta) {
            images = debug_meta.images;
          }
        }
        if (!images) {
          images = [];
        }
        const obj2 = { images: null };
        arraySpreadResult = HermesBuiltin.arraySpread(images, arraySpreadResult);
        obj2[0] = items;
        obj[8] = obj2;
        return Object.assign(merged, obj);
      }
    }
    return null;
  }
};
arg5.enrichAndroidProfileWithEventContext = enrichAndroidProfileWithEventContext;
arg5.createHermesProfilingEvent = function createHermesProfilingEvent(result1) {
  obj = { platform: "javascript", version: "1", profile: result1, transaction: obj };
  obj = { active_thread_id: result1.active_thread_id };
  return obj;
};
arg5.addProfilesToEnvelope = function addProfilesToEnvelope(arg0, arg1) {
  if (arg1.length) {
    const tmp2 = arg1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let arr = arg0[1];
      let items = [{ type: "profile" }, tmp4];
      arr = arr.push(items);
      continue;
    }
    return arg0;
  } else {
    return arg0;
  }
};