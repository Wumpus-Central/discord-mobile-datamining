// === Module 994: ? ===

// Module 994
import _mod693 from "module_693" /* 693 */;
import _mod878 from "module_878" /* 878 */;
import react_native from "react-native" /* 995 */;

function enrichAndroidProfileWithEventContext(profile_id, build_id, contexts) {
  let environment;
  let flag;
  let obj2;
  let obj3;
  let str;
  let str2;
  let str3;
  let str4;
  let str5;
  let str6;
  let str8;
  let tmp4;
  let toISOStringResult;
  const _Object = Object;
  const obj = { debug_meta: obj2, build_id: tmp4, device_cpu_frequencies: [], device_is_emulator: flag, device_locale: str, device_manufacturer: str2, device_model: str3, device_os_name: str4, device_os_version: str5, device_physical_memory_bytes: str6, environment, profile_id, timestamp: toISOStringResult, release: contexts.release || "", dist: contexts.dist || "", transaction_id: contexts.event_id || "", transaction_name: contexts.transaction || "", trace_id: str8, version_name: contexts.release || "", version_code: contexts.dist || "" };
  obj2 = { images: obj3.getDebugMetadata() };
  const merged = Object.assign({}, build_id);
  contexts = contexts.contexts;
  let device;
  obj3 = react_native;
  tmp4 = build_id.build_id || "";
  if (null !== contexts) {
    if (undefined !== contexts) {
      device = contexts.device;
    }
  }
  flag = undefined;
  if (null !== device) {
    if (undefined !== device) {
      flag = device.simulator;
    }
  }
  if (!flag) {
    flag = false;
  }
  const contexts2 = contexts.contexts;
  str = undefined;
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
  const contexts3 = contexts.contexts;
  let device1;
  if (null !== contexts3) {
    if (undefined !== contexts3) {
      device1 = contexts3.device;
    }
  }
  str2 = undefined;
  if (null !== device1) {
    if (undefined !== device1) {
      str2 = device1.manufacturer;
    }
  }
  if (!str2) {
    str2 = "";
  }
  const contexts4 = contexts.contexts;
  let device2;
  if (null !== contexts4) {
    if (undefined !== contexts4) {
      device2 = contexts4.device;
    }
  }
  str3 = undefined;
  if (null !== device2) {
    if (undefined !== device2) {
      str3 = device2.model;
    }
  }
  if (!str3) {
    str3 = "";
  }
  const contexts5 = contexts.contexts;
  let os;
  if (null !== contexts5) {
    if (undefined !== contexts5) {
      os = contexts5.os;
    }
  }
  str4 = undefined;
  if (null !== os) {
    if (undefined !== os) {
      str4 = os.name;
    }
  }
  if (!str4) {
    str4 = "";
  }
  const contexts6 = contexts.contexts;
  let os1;
  if (null !== contexts6) {
    if (undefined !== contexts6) {
      os1 = contexts6.os;
    }
  }
  str5 = undefined;
  if (null !== os1) {
    if (undefined !== os1) {
      str5 = os1.version;
    }
  }
  if (!str5) {
    str5 = "";
  }
  const contexts7 = contexts.contexts;
  let device3;
  if (null !== contexts7) {
    if (undefined !== contexts7) {
      device3 = contexts7.device;
    }
  }
  str6 = undefined;
  if (null !== device3) {
    if (undefined !== device3) {
      str6 = device3.memory_size;
    }
  }
  if (str6) {
    const _Number = Number;
    const str7 = Number(contexts.contexts.device.memory_size);
    str6 = str7.toString(10);
  }
  if (!str6) {
    str6 = "";
  }
  environment = contexts.environment;
  if (!environment) {
    const tmp2Result = _mod878;
    environment = tmp2Result.getDefaultEnvironment();
  }
  const _Date = Date;
  if (contexts.start_timestamp) {
    const self3 = this;
    const self4 = this;
    const _Date1 = new _Date(1000 * contexts.start_timestamp);
    toISOStringResult = _Date1.toISOString();
  } else {
    const self = this;
    const self2 = this;
    const _Date2 = new _Date();
    toISOStringResult = _Date2.toISOString();
  }
  const contexts8 = contexts.contexts;
  let trace;
  if (null !== contexts8) {
    if (undefined !== contexts8) {
      trace = contexts8.trace;
    }
  }
  str8 = undefined;
  if (null !== trace) {
    if (undefined !== trace) {
      str8 = trace.trace_id;
    }
  }
  if (!str8) {
    str8 = "";
  }
  return assign(merged, obj);
}

export const isValidProfile = function isValidProfile(samples) {
  return samples.samples.length > 1;
};
export const findProfiledTransactionsFromEnvelope = function findProfiledTransactionsFromEnvelope(arg0) {
  const items = [];
  const obj = _mod693;
  obj.forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if ("transaction" === arg1) {
      let num;
      for (let num = 1; num < arg0.length; num = num + 1) {
        let contexts = arg0[num].contexts;
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
          let arr = items.push(arg0[num]);
        }
      }
    }
  });
  return items;
};
export const enrichCombinedProfileWithEventContext = function enrichCombinedProfileWithEventContext(profile_id, value, contexts) {
  let environment;
  let flag;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let str3;
  let str4;
  let str6;
  let str7;
  let str8;
  let str9;
  let tmp18;
  let toISOStringResult;
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
        const _Object2 = Object;
        const _Object = Object;
        const _Date = Date;
        const obj = { event_id: profile_id, runtime: { name: "hermes", version: "" }, timestamp: toISOStringResult, release: contexts.release || "", environment, os: obj2, device: obj3, transaction: obj5, debug_meta: obj6 };
        const merged = Object.assign({}, value);
        if (contexts.start_timestamp) {
          const self3 = this;
          let self2 = this;
          const _Date1 = new _Date(1000 * contexts.start_timestamp);
          toISOStringResult = _Date1.toISOString();
        } else {
          const self = this;
          self2 = this;
          const _Date2 = new _Date();
          toISOStringResult = _Date2.toISOString();
        }
        environment = contexts.environment;
        if (!environment) {
          const obj4 = _mod878;
          environment = obj4.getDefaultEnvironment();
        }
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
        const contexts3 = contexts.contexts;
        let os1;
        obj2 = { name: str2, version: str3, build_number: str4 };
        if (null !== contexts3) {
          if (undefined !== contexts3) {
            os1 = contexts3.os;
          }
        }
        str3 = undefined;
        if (null !== os1) {
          if (undefined !== os1) {
            str3 = os1.version;
          }
        }
        if (!str3) {
          str3 = "";
        }
        const contexts4 = contexts.contexts;
        let os2;
        if (null !== contexts4) {
          if (undefined !== contexts4) {
            os2 = contexts4.os;
          }
        }
        str4 = undefined;
        if (null !== os2) {
          if (undefined !== os2) {
            str4 = os2.build;
          }
        }
        if (!str4) {
          str4 = "";
        }
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
        const contexts6 = contexts.contexts;
        let device;
        obj3 = { locale: str5, model: str6, manufacturer: str7, architecture: str8, is_emulator: flag };
        if (null !== contexts6) {
          if (undefined !== contexts6) {
            device = contexts6.device;
          }
        }
        str6 = undefined;
        if (null !== device) {
          if (undefined !== device) {
            str6 = device.model;
          }
        }
        if (!str6) {
          str6 = "";
        }
        const contexts7 = contexts.contexts;
        let device1;
        if (null !== contexts7) {
          if (undefined !== contexts7) {
            device1 = contexts7.device;
          }
        }
        str7 = undefined;
        if (null !== device1) {
          if (undefined !== device1) {
            str7 = device1.manufacturer;
          }
        }
        if (!str7) {
          str7 = "";
        }
        const contexts8 = contexts.contexts;
        let device2;
        if (null !== contexts8) {
          if (undefined !== contexts8) {
            device2 = contexts8.device;
          }
        }
        str8 = undefined;
        if (null !== device2) {
          if (undefined !== device2) {
            str8 = device2.arch;
          }
        }
        if (!str8) {
          str8 = "";
        }
        const contexts9 = contexts.contexts;
        let device3;
        if (null !== contexts9) {
          if (undefined !== contexts9) {
            device3 = contexts9.device;
          }
        }
        flag = undefined;
        if (null !== device3) {
          if (undefined !== device3) {
            flag = device3.simulator;
          }
        }
        if (!flag) {
          flag = false;
        }
        obj5 = { name: tmp18, id: contexts.event_id || "", trace_id: str, active_thread_id: str9 };
        const transaction = value.transaction;
        str9 = undefined;
        tmp18 = contexts.transaction || "";
        if (null !== transaction) {
          if (undefined !== transaction) {
            str9 = transaction.active_thread_id;
          }
        }
        if (!str9) {
          str9 = "";
        }
        const items = [];
        const obj8 = react_native;
        const debug_meta = value.debug_meta;
        let images;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, obj8.getDebugMetadata(), 0);
        if (null !== debug_meta) {
          if (undefined !== debug_meta) {
            images = debug_meta.images;
          }
        }
        if (!images) {
          images = [];
        }
        obj6 = { images: items };
        HermesBuiltin.arraySpread(items, images, arraySpreadResult);
        return assign(merged, obj);
      }
    }
    return null;
  }
};
export { enrichAndroidProfileWithEventContext };
export const createHermesProfilingEvent = function createHermesProfilingEvent(result1) {
  return { platform: "javascript", version: "1", profile: result1, transaction: { active_thread_id: result1.active_thread_id } };
};
export const addProfilesToEnvelope = function addProfilesToEnvelope(arg0, arg1) {
  if (arg1.length) {
    const tmp2 = arg1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let arr = arg0[1];
      let items = [{ type: "profile" }, tmp4];
      let arr2 = arr.push(items);
      continue;
    }
    return arg0;
  } else {
    return arg0;
  }
};