// _runtime/metro/12820__.js
import _mod12803 from "12803__.js";
import _mod12808 from "12808__.js";
import _mod12811 from "12811__.js";
import _mod12821 from "12821__.js";
import __SENTRY_DEBUG__ from "12796__.js";
import consoleSandbox from "12797__.js";

function updateSession(ipAddress) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (obj.user) {
    ipAddress = ipAddress.ipAddress;
    let ip_address = !ipAddress;
    if (!ipAddress) {
      ip_address = obj.user.ip_address;
    }
    if (ip_address) {
      ipAddress.ipAddress = obj.user.ip_address;
    }
    if (!tmp) {
      ipAddress.did = obj.user.id || obj.user.email || obj.user.username;
    }
    tmp = ipAddress.did || obj.did;
  }
  let timestamp = obj.timestamp;
  if (!timestamp) {
    timestamp = _mod12811.timestampInSeconds();
  }
  ipAddress.timestamp = timestamp;
  if (obj.abnormal_mechanism) {
    ipAddress.abnormal_mechanism = obj.abnormal_mechanism;
  }
  if (obj.ignoreDuration) {
    ipAddress.ignoreDuration = obj.ignoreDuration;
  }
  if (!obj.sid) {
    if (undefined !== obj.init) {
      ipAddress.init = obj.init;
    }
    const did = ipAddress.did;
    let did2 = !did;
    if (!did) {
      did2 = obj.did;
    }
    if (did2) {
      const _HermesInternal = HermesInternal;
      ipAddress.did = "" + obj.did;
    }
    if (typeof obj.started === "number") {
      ipAddress.started = obj.started;
    }
    if (ipAddress.ignoreDuration) {
      ipAddress.duration = undefined;
    } else if (typeof obj.duration === "number") {
      ipAddress.duration = obj.duration;
    } else {
      const diff = ipAddress.timestamp - ipAddress.started;
      let num2 = 0;
      if (diff >= 0) {
        num2 = diff;
      }
      ipAddress.duration = num2;
    }
    if (obj.release) {
      ipAddress.release = obj.release;
    }
    if (obj.environment) {
      ipAddress.environment = obj.environment;
    }
    const ipAddress2 = ipAddress.ipAddress;
    let ipAddress3 = !ipAddress2;
    if (!ipAddress2) {
      ipAddress3 = obj.ipAddress;
    }
    if (ipAddress3) {
      ipAddress.ipAddress = obj.ipAddress;
    }
    const userAgent = ipAddress.userAgent;
    let userAgent2 = !userAgent;
    if (!userAgent) {
      userAgent2 = obj.userAgent;
    }
    if (userAgent2) {
      ipAddress.userAgent = obj.userAgent;
    }
    if (typeof obj.errors === "number") {
      ipAddress.errors = obj.errors;
    }
    if (obj.status) {
      ipAddress.status = obj.status;
    }
  } else {
    if (32 === obj.sid.length) {
      let sid = obj.sid;
    } else {
      sid = _mod12808.uuid4();
    }
    ipAddress.sid = sid;
  }
}
_mod12821;

export const closeSession = function closeSession(status, status2) {
  if (status2) {
    let obj = { status: status2 };
  } else {
    obj = {};
    if ("ok" === status.status) {
      obj = { status: "exited" };
    }
  }
  updateSession(status, obj);
};
export const makeSession = function makeSession(arg0) {
  obj = obj(12811);
  const timestampInSecondsResult = obj.timestampInSeconds();
  obj = {
    sid: obj(12808).uuid4(),
    init: true,
    timestamp: timestampInSecondsResult,
    started: timestampInSecondsResult,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON() {
      obj = _mod12803;
      obj = {
        sid: "" + obj.sid,
        init: obj.init,
        started: new Date(1000 * obj.started).toISOString(),
        timestamp: null,
        status: null,
        errors: null,
        did: null,
        duration: null,
        abnormal_mechanism: null,
        attrs: null,
      };
      const date = new Date(1000 * obj.started);
      obj.timestamp = new Date(1000 * obj.timestamp).toISOString();
      ({ status: obj2.status, errors: obj2.errors } = obj);
      if (typeof obj.did === "number") {
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp.did;
      }
      obj.did = combined;
      ({ duration: obj2.duration, abnormal_mechanism: obj2.abnormal_mechanism } = obj);
      obj.attrs = {
        release: obj.release,
        environment: obj.environment,
        ip_address: obj.ipAddress,
        user_agent: obj.userAgent,
      };
      return obj.dropUndefinedKeys(obj);
    },
  };
  if (arg0) {
    updateSession(obj, arg0);
  }
  return obj;
};
export { updateSession };
