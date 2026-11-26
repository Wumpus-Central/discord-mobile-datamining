// discord_app/modules/activities/createProxyTicket.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import getURLForApplicationDefault from "getURLForApplication.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
let closure_7 = async function _createProxyTicket() {
  await takeProxyTicket(closure_0, closure_1, closure_2, closure_3);
  return value.ticket;
};
function takeProxyTicket() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _takeProxyTicket(arg0) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "+95" };
    }
  } else {
    try {
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_7 = tmp3;
          closure_6 = tmp7;
          closure_134_0 = closure_0;
          closure_134_1 = closure_1;
          closure_134_2 = closure_2;
          closure_134_3 = undefined;
          if (null != closure_3) {
            const value2 = {};
            c9 = 1;
            c10 = 1;
            const obj4 = { value: mintProxyTicket(closure_0, closure_1, closure_2, closure_3), done: false };
            return obj4;
          } else {
            const tmp41 = prefetchKey(closure_0, closure_1, closure_2);
            value = map.get(tmp41);
            map.delete(tmp41);
            if (null != value) {
              const _Date = Date;
              if (value.expiresAt > Date.now()) {
                c8 = 1;
                c9 = 4;
                c10 = 1;
                const obj5 = { value: value.ticket, done: false };
                return obj5;
              }
            }
          }
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          value2.ticket = value;
          value2.prefetched = false;
          c10 = 3;
          const obj7 = { value: value2, done: true };
          return obj7;
        }
      } else {
        if (2 === tmp7) {
          c8 = 0;
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            value.ticket = value;
            value.prefetched = false;
            c10 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_134_3 = value;
          if (null == closure_134_3) {
            c8 = 0;
          }
        }
        const obj = { ticket: closure_134_3, prefetched: true };
        c8 = 0;
        c10 = 3;
        const obj11 = { value: obj, done: true };
        return obj11;
      }
      value = {};
      closure_135_12(closure_134_0, closure_134_1, closure_134_2);
      c9 = 3;
      c10 = 1;
    } catch (tmp28) {
      if (tmp4 === c8) {
        c10 = tmp2;
        throw tmp28;
      } else {
        c9 = tmp;
      }
    }
  }
};
let closure_10 = async function _prefetchProxyTicket(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "+95" };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          const tmp39 = prefetchKey(closure_0, closure_1, closure_2);
          closure_131_0 = tmp39;
          value = map.get(tmp39);
          if (null != value) {
            const _Date = Date;
            if (value.expiresAt > Date.now()) {
              c8 = 3;
              const obj4 = { value: { alreadyPrefetched: true }, done: true };
              return obj4;
            }
          }
          const tmp23 = mintProxyTicket(closure_0, closure_1, closure_2);
          const obj5 = { ticket: tmp23, expiresAt: null };
          const _Date2 = Date;
          obj5.expiresAt = Date.now() + 60000;
          closure_131_1 = obj5;
          const result = map.set(tmp39, obj5);
          c6 = 1;
          c7 = 2;
          c8 = 1;
          const obj6 = { value: tmp23, done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        closure_131_2 = closure_5;
        if (closure_132_6.get(closure_131_0) === closure_131_1) {
          closure_132_6.delete(closure_131_0);
        }
        throw closure_131_2;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c6 = 0;
        c8 = 3;
        const obj = { value: { alreadyPrefetched: false }, done: true };
        return obj;
      }
    } catch (tmp26) {
      closure_5 = tmp26;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp26;
      } else {
        c7 = tmp;
      }
    }
  }
};
function prefetchKey(arg0, arg1, arg2) {
  let str = arg1;
  items = [AuthenticationStore.getId(), arg0, ,];
  if (arg1 == null) {
    str = "";
  }
  let str2 = arg2;
  items[2] = str;
  if (arg2 == null) {
    str2 = "";
  }
  items[3] = str2;
  return items.join(":");
}
function mintProxyTicket() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _mintProxyTicket(arg0) {
  closure_0 = arg0;
  closure_3 = arg3;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value, arg2, arg3) => {
    (function prewarmApplication(arg0) {
      const tmp = closure_1_14(arg0);
      if (null != tmp) {
        const _fetch = fetch;
        closure_1_0(surface[5]).ignoreErrors(fetch(tmp, { method: "GET", mode: "no-cors", credentials: "omit" }));
        const obj = closure_1_0(surface[5]);
      }
    })(closure_0);
    const obj4 = { use_stateless_ticket: true };
    if (null != closure_3) {
      ({ channelId: obj7.invite_channel_id, messageId: obj7.invite_message_id } = closure_3);
    }
    if (null != channel_id) {
      obj4.channel_id = channel_id;
    }
    if (null != surface) {
      obj4.surface = surface;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.APPLICATION_PROXY_TICKET(closure_0), body: obj4, rejectWithError: true };
    await HTTP.post(request);
    return value.body.ticket;
  })();
};
function getPrewarmURL(arg0) {
  const tmp2 = getURLForApplicationDefault(arg0);
  if (null == tmp2) {
    return null;
  } else {
    try {
      const _URL = URL;
      const str2 = new URL("/.discord/prewarm", tmp2);
      return str2.toString();
    } catch (err) {
      return tmp;
    }
  }
}
const Endpoints = fn(1071).Endpoints;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/createProxyTicket.tsx");

export function createProxyTicket() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { takeProxyTicket };
export function prefetchProxyTicket() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function rememberProxyTicket(proxy_ticket, id, CONJURE_UNKNOWN_CHANNEL, APP_CHANNEL) {
  let str = CONJURE_UNKNOWN_CHANNEL;
  items = [AuthenticationStore.getId(), id, ,];
  if (CONJURE_UNKNOWN_CHANNEL == null) {
    str = "";
  }
  let str2 = APP_CHANNEL;
  items[2] = str;
  if (APP_CHANNEL == null) {
    str2 = "";
  }
  items[3] = str2;
  const obj = { ticket: null, expiresAt: null };
  const joined = items.join(":");
  obj.ticket = Promise.resolve(proxy_ticket);
  obj.expiresAt = Date.now() + 60000;
  const result = map.set(joined, obj);
}
export function getProxyTicketURL(arg0) {
  const aPIBaseURL = HTTPUtils.getAPIBaseURL();
  return aPIBaseURL + Endpoints.APPLICATION_PROXY_TICKET(arg0);
}
export { getPrewarmURL };
