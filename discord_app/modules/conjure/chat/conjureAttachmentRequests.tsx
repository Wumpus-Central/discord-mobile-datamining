// === Module 11713: conjureAttachmentRequests ===

// Module 11713 (conjureAttachmentRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 10763 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _listStoredAttachments() {
  closure_1 = tmp2;
  await conjureWorkerFetch.fetchConjureWorker(closure_0, attachmentPath());
  closure_129_0 = value;
  if (!closure_129_0.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("attachment list failed (" + closure_129_0.status + ")");
    throw error;
  }
  await closure_129_0.json();
  return value.attachments;
};
let closure_4 = async function _importAttachmentFromUrl(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp2;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            const obj4 = { method: "POST", json: null };
            const obj5 = { url };
            obj4.json = obj5;
            c3 = 1;
            c4 = 1;
            const obj6 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, attachmentPath("from-url"), obj4), done: false };
            return obj6;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_130_0 = value;
            const data = closure_130_0.json();
            c3 = 2;
            c4 = 1;
            const obj9 = { value: data.catch(() => null), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_1 = value;
          if (closure_130_0.ok) {
            if (null != closure_130_1) {
              if ("id" in closure_130_1) {
                c4 = 3;
                const obj = { value: closure_130_1, done: true };
                return obj;
              }
            }
          }
          let str3 = "";
          if (null != closure_130_1) {
            str3 = "";
            if ("error" in closure_130_1) {
              str3 = "";
              if (typeof closure_130_1.error === "string") {
                str3 = closure_130_1.error;
              }
            }
          }
          const error = new Error(str3);
          throw error;
        }
      } catch (tmp27) {
        c4 = tmp;
        throw tmp27;
      }
    }
  })();
};
function uploadAttachmentBytes() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = async function _uploadAttachmentBytes(arg0) {
  closure_0 = arg0;
  closure_3 = arg3;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2, arg3) => {
    closure_4 = tmp2;
    const request = { method: "POST", query: { name }, headers: null, body: null };
    let str3 = "application/octet-stream";
    if ("" !== closure_3) {
      str3 = closure_3;
    }
    request.headers = { "content-type": str3 };
    request.body = body;
    await conjureWorkerFetch.fetchConjureWorker(closure_0, attachmentPath(), request);
    closure_132_0 = value;
    if (!closure_132_0.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("attachment upload failed (" + closure_132_0.status + ")");
      throw error;
    }
    await closure_132_0.json();
    return value;
  })();
};
let closure_7 = async function _deleteStagedAttachment(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp2;
          closure_130_0 = undefined;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, attachmentPath(closure_1), { method: "DELETE", keepalive: true }), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_0 = value;
        if (closure_130_0.ok) {
          c4 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("attachment cleanup failed (" + closure_130_0.status + ")");
          throw error;
        }
      }
    } catch (tmp20) {
      c4 = tmp;
      throw tmp20;
    }
  }
};
function getAttachmentUrl() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _getAttachmentUrl(arg0) {
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
          return { value: "Reflect", done: true };
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
        const obj = { value: "" + baseUrl + closure_132_11(closure_131_1) + "?" + closure_131_6, done: true };
        return obj;
      }
    } catch (tmp23) {
      c6 = tmp;
      throw tmp23;
    }
  }
};
let closure_10 = async function _isAttachmentAvailable(arg0) {
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
              yield closure_1_8(closure_2_0, closure_2_1);
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
function attachmentPath(arg0) {
  let str = "/agent/attachments";
  if (null != arg0) {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    str = "/agent/attachments/" + encodeURIComponent(arg0);
  }
  return str;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureAttachmentRequests.tsx");

export const uploadAttachment = function uploadAttachment(arg0, name) {
  return uploadAttachmentBytes(arg0, name, name.name, name.type);
};
export const listStoredAttachments = function listStoredAttachments() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const importAttachmentFromUrl = function importAttachmentFromUrl() {
  const self = this;
  const apply = closure_4.apply;
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
  const apply = closure_7.apply;
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
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};