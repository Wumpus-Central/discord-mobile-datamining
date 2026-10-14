// === Module 11295: conjureAttachmentRequests ===

// Module 11295 (conjureAttachmentRequests)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10748 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _importAttachmentFromUrl(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          c4 = 1;
          c5 = 1;
          const obj4 = { value: ConjureWorkerTickets.mintWorkerTicket(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _fetch = fetch;
          const _URLSearchParams = URLSearchParams;
          const obj6 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj6);
          const _HermesInternal = HermesInternal;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          const obj8 = { url: closure_130_0 };
          const combined = "" + closure_131_10(baseUrl, "from-url") + "?" + uRLSearchParams;
          request.body = JSON.stringify(obj8);
          c4 = 2;
          c5 = 1;
          const obj9 = { value: fetch(combined, request), done: false };
          return obj9;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_4 = value;
          const data = closure_130_4.json();
          c4 = 3;
          c5 = 1;
          const obj11 = { value: data.catch(() => null), done: false };
          return obj11;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_130_5 = value;
        if (closure_130_4.ok) {
          if (null != closure_130_5) {
            if ("id" in closure_130_5) {
              c5 = 3;
              const obj = { value: closure_130_5, done: true };
              return obj;
            }
          }
        }
        let str3 = "";
        if (null != closure_130_5) {
          str3 = "";
          if ("error" in closure_130_5) {
            str3 = "";
            if (typeof closure_130_5.error === "string") {
              str3 = closure_130_5.error;
            }
          }
        }
        const error = new Error(str3);
        throw error;
      }
    } catch (tmp31) {
      c5 = tmp;
      throw tmp31;
    }
  }
};
function uploadAttachmentBytes() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = async function _uploadAttachmentBytes() {
  closure_4 = tmp2;
  closure_132_0 = closure_1;
  closure_132_1 = closure_2;
  closure_132_2 = closure_3;
  await ConjureWorkerTickets.mintWorkerTicket(closure_0);
  closure_132_3 = value;
  const ticket = closure_132_3.ticket;
  const baseUrl = closure_132_3.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, name: closure_132_1 });
  closure_132_6 = uRLSearchParams;
  const _HermesInternal2 = HermesInternal;
  let str3 = "application/octet-stream";
  const combined = "" + closure_133_10(baseUrl) + "?" + closure_132_6;
  if ("" !== closure_132_2) {
    str3 = closure_132_2;
  }
  const request = { method: "POST", headers: { "content-type": str3 }, body: closure_132_0 };
  await fetch(combined, request);
  closure_132_7 = value;
  if (!closure_132_7.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("attachment upload failed (" + closure_132_7.status + ")");
    throw error;
  }
  await closure_132_7.json();
  return value;
};
let closure_6 = async function _deleteStagedAttachment(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          c4 = 1;
          c5 = 1;
          const obj5 = { value: ConjureWorkerTickets.mintWorkerTicket(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj7 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj7);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c4 = 2;
          c5 = 1;
          const obj8 = { value: fetch("" + closure_131_10(baseUrl, closure_130_0) + "?" + closure_130_4, { method: "DELETE", keepalive: true }), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_5 = value;
        if (closure_130_5.ok) {
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("attachment cleanup failed (" + closure_130_5.status + ")");
          throw error;
        }
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
};
function getAttachmentUrl() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _getAttachmentUrl(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj5 = closure_2;
          if (closure_2 === undefined) {
            obj5 = {};
          }
          let flag = obj5.download;
          if (flag === undefined) {
            flag = false;
          }
          closure_131_2 = flag;
          closure_131_3 = undefined;
          let ticket;
          let baseUrl;
          closure_131_6 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 2;
          c6 = 1;
          const obj7 = { value: closure_132_0(closure_132_1[2]).getMediaTicket(closure_131_0), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_131_3 = value;
        ticket = closure_131_3.ticket;
        baseUrl = closure_131_3.baseUrl;
        const _URLSearchParams = URLSearchParams;
        const obj9 = { ticket };
        const uRLSearchParams = new URLSearchParams(obj9);
        closure_131_6 = uRLSearchParams;
        if (closure_131_2) {
          const result = closure_131_6.set("download", "1");
        }
        const _HermesInternal = HermesInternal;
        c6 = 3;
        const obj = { value: "" + closure_132_10(baseUrl, closure_131_1) + "?" + closure_131_6, done: true };
        return obj;
      }
    } catch (tmp22) {
      c6 = tmp;
      throw tmp22;
    }
  }
};
let closure_9 = async function _isAttachmentAvailable(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_4 = undefined;
          function probe() {
            const self = this;
            const apply = closure_3.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          closure_130_2 = probe;
          closure_130_3 = function _probe() {
            const self = this;
            const tmp = closure_2(function*() {
              const _fetch = fetch;
              yield closure_1_7(closure_2_0, closure_2_1);
              return fetch(value, { method: "HEAD" });
            });
            closure_3 = tmp;
            const apply = tmp.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          c4 = 1;
          c5 = 1;
          const obj5 = { value: probe(), done: false };
          return obj5;
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_130_4 = value;
            if (401 === closure_130_4.status) {
              closure_131_0(closure_131_1[2]).retireMediaTicket(closure_130_0);
              c4 = 2;
              c5 = 1;
              const obj7 = { value: closure_130_2(), done: false };
              return obj7;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_130_4 = value;
        }
        if (404 === closure_130_4.status) {
          c5 = 3;
          return { value: false, done: true };
        } else if (closure_130_4.ok) {
          c5 = 3;
          return { value: true, done: true };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("attachment availability check failed (" + closure_130_4.status + ")");
          throw error;
        }
      }
    } catch (tmp27) {
      c5 = tmp;
      throw tmp27;
    }
  }
};
function attachmentEndpoint(arg0, arg1) {
  if (null == arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + arg0 + "/agent/attachments";
  } else {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "/agent/attachments/" + encodeURIComponent(arg1);
  }
  return combined;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureAttachmentRequests.tsx");

export const uploadAttachment = function uploadAttachment(arg0, name) {
  return uploadAttachmentBytes(arg0, name, name.name, name.type);
};
export const importAttachmentFromUrl = function importAttachmentFromUrl() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { uploadAttachmentBytes };
export const deleteStagedAttachment = function deleteStagedAttachment() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getAttachmentUrl };
export const isAttachmentAvailable = function isAttachmentAvailable() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};