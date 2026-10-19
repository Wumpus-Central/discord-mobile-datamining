// discord_app/modules/activities/createProxyTicket.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
let closure_7 = async function _createProxyTicket(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp3;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          const tmp27 = prefetchKey(closure_0, closure_1, closure_2);
          value = map.get(tmp27);
          map.delete(tmp27);
          if (null != value) {
            const _Date = Date;
            if (value.expiresAt > Date.now()) {
              const ticket = value.ticket;
              c5 = 1;
              c6 = 1;
              const obj4 = { value: ticket.catch(() => null), done: false };
              return obj4;
            }
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_131_3 = value;
        if (null != closure_131_3) {
          c6 = 3;
          const obj = { value: closure_131_3, done: true };
          return obj;
        }
      }
      c6 = 3;
      const obj6 = { value: closure_132_9(closure_131_0, closure_131_1, closure_131_2), done: true };
      return obj6;
    } catch (tmp17) {
      c6 = tmp;
      throw tmp17;
    }
  }
};
function prefetchKey(arg0, arg1, arg2) {
  let str = arg1;
  const items = [AuthenticationStore.getId(), arg0, ,];
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
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    (function prewarmApplication(arg0) {
      const tmp = channel_id(surface[4])(arg0);
      if (null != tmp) {
        try {
          const _fetch = fetch;
          const _URL = URL;
          const str2 = new URL("/.discord/prewarm", tmp);
          const response = fetch(str2.toString(), { method: "GET", mode: "no-cors", credentials: "omit" });
          response.catch(() => {});
        } catch (err) {}
      }
    })(closure_0);
    const obj4 = { use_stateless_ticket: true };
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
const Endpoints = fn(1087).Endpoints;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/createProxyTicket.tsx");

export const createProxyTicket = function createProxyTicket() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const prefetchProxyTicket = function prefetchProxyTicket(prop, arg1, type) {
  let str = arg1;
  let str2 = type;
  const promise = mintProxyTicket(prop, arg1, type);
  promise.catch(() => {});
  const items = [AuthenticationStore.getId(), prop, ,];
  if (arg1 == null) {
    str = "";
  }
  items[2] = str;
  if (str2 == null) {
    str2 = "";
  }
  items[3] = str2;
  const obj = { ticket: promise, expiresAt: null };
  const joined = items.join(":");
  obj.expiresAt = Date.now() + 60000;
  const result = map.set(joined, obj);
};
