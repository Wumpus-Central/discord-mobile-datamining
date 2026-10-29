// === Module 10842: createProxyTicket ===

// Module 10842 (createProxyTicket)
import HTTPUtils from "HTTPUtils" /* 1294 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_7 = async function _createProxyTicket(arg0) {
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
      return { value: "IconComponent", done: "IconComponent" };
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
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = closure_2;
          closure_132_3 = undefined;
          if (null != closure_3) {
            c8 = 3;
            const obj4 = { value: mintProxyTicket(closure_0, closure_1, closure_2, closure_3), done: true };
            return obj4;
          } else {
            const tmp36 = prefetchKey(closure_0, closure_1, closure_2);
            value = map.get(tmp36);
            map.delete(tmp36);
            if (null != value) {
              const _Date = Date;
              if (value.expiresAt > Date.now()) {
                c6 = 1;
                c7 = 2;
                c8 = 1;
                const obj5 = { value: value.ticket, done: false };
                return obj5;
              }
            }
          }
        }
      } else {
        if (1 === tmp7) {
          c6 = 0;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_132_3 = value;
          if (null == closure_132_3) {
            c6 = 0;
          }
        }
        c6 = 0;
        c8 = 3;
        const obj = { value: closure_132_3, done: true };
        return obj;
      }
      closure_133_9(closure_132_0, closure_132_1, closure_132_2);
      c8 = 3;
    } catch (tmp23) {
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp23;
      } else {
        c7 = tmp;
      }
    }
  }
};
function prefetchKey(arg0, arg1, arg2) {
  let str = arg1;
  const items = [AuthenticationStore.getId(), arg0, , ];
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
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _mintProxyTicket(arg0) {
  closure_0 = arg0;
  closure_3 = arg3;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value, arg2, arg3) => {
    (function prewarmApplication(arg0) {
      const tmp = channel_id(surface[4])(arg0);
      if (null != tmp) {
        try {
          const _fetch = fetch;
          const _URL = URL;
          const str2 = new URL("/.discord/prewarm", tmp);
          const response = fetch(str2.toString(), { method: "GET", mode: "no-cors", credentials: "omit" });
          response.catch(() => {

          });
        } catch (err) {
        }
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
const Endpoints = fn(1084).Endpoints;
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
export function prefetchProxyTicket(application_id, arg1, type) {
  const items = [AuthenticationStore.getId(), application_id, , ];
  let str = arg1;
  if (arg1 == null) {
    str = "";
  }
  items[2] = str;
  let str2 = type;
  if (type == null) {
    str2 = "";
  }
  items[3] = str2;
  const joined = items.join(":");
  value = map.get(joined);
  if (null == value) {
    const promise = mintProxyTicket(application_id, arg1, type);
    const obj2 = { ticket: promise, expiresAt: null };
    const _Date2 = Date;
    obj2.expiresAt = Date.now() + 60000;
    const result = map.set(joined, obj2);
    promise.catch(() => {
      if (map.get(joined) === obj2) {
        map.delete(joined);
      }
    });
  } else {
    const _Date = Date;
  }
}
export function rememberProxyTicket(proxy_ticket, id, CONJURE_UNKNOWN_CHANNEL, APP_CHANNEL) {
  let str = CONJURE_UNKNOWN_CHANNEL;
  const items = [AuthenticationStore.getId(), id, , ];
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