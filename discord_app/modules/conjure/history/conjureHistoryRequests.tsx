// === Module 11772: conjureHistoryRequests ===

// Module 11772 (conjureHistoryRequests)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10748 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function fetchVersionHistory() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = async function _fetchVersionHistory() {
  closure_1 = tmp2;
  await ConjureWorkerTickets.mintWorkerTicket(closure_0);
  closure_129_0 = value;
  const ticket = closure_129_0.ticket;
  const baseUrl = closure_129_0.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_129_3 = uRLSearchParams;
  const _fetch = fetch;
  const _HermesInternal2 = HermesInternal;
  await fetch("" + baseUrl + "/agent/source-history?" + closure_129_3);
  closure_129_4 = value;
  if (!closure_129_4.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("version history failed (" + closure_129_4.status + ")");
    throw error;
  }
  await closure_129_4.json();
  closure_129_5 = value;
  const _Array = Array;
  if (Array.isArray(closure_129_5.entries)) {
    let entries = closure_129_5.entries;
  } else {
    entries = [];
  }
  const obj = { entries, previewSha: null, publishedSha: null };
  let previewSha = null;
  if (typeof closure_129_5.previewSha === "string") {
    previewSha = closure_129_5.previewSha;
  }
  obj.previewSha = previewSha;
  let publishedSha = null;
  if (typeof closure_129_5.publishedSha === "string") {
    publishedSha = closure_129_5.publishedSha;
  }
  obj.publishedSha = publishedSha;
  return obj;
};
let closure_5 = async function _fetchSourceHistory() {
  await fetchVersionHistory(closure_0);
  return value.entries;
};
let closure_6 = async function _restoreSourceHistoryEntry(arg0) {
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
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          let ticket;
          let baseUrl;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_2 = value;
          ticket = closure_130_2.ticket;
          baseUrl = closure_130_2.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj7 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj7);
          closure_130_5 = uRLSearchParams;
          const _fetch = fetch;
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal3 = HermesInternal;
          c4 = 2;
          c5 = 1;
          const obj8 = { value: fetch("" + baseUrl + "/agent/source-history/" + encodeURIComponent(closure_130_1) + "/restore?" + closure_130_5, { method: "POST" }), done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_130_6 = value;
          if (closure_130_6.ok) {
            c4 = 4;
            c5 = 1;
            const obj10 = { value: obj5.json(), done: false };
            return obj10;
          } else {
            c4 = 3;
            c5 = 1;
            const obj12 = { value: obj5.text(), done: false };
            return obj12;
          }
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_130_7 = value.trim();
          let str3 = "";
          if ("" !== closure_130_7) {
            const _HermesInternal = HermesInternal;
            str3 = ": " + closure_130_7;
          }
          const _HermesInternal2 = HermesInternal;
          const error = new Error("version restore failed (" + closure_130_6.status + ")" + str3);
          throw error;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        closure_130_8 = value;
        if (null == closure_130_8.entry) {
          const _Error = Error;
          const error1 = new Error("version restore returned no commit");
          throw error1;
        } else {
          if (true !== closure_130_8.live) {
            const result = closure_131_0(closure_131_1[2]).refreshPublishedProject(closure_130_0, { isPreview: true });
            result.catch(() => {

            });
            const obj = closure_131_0(closure_131_1[2]);
          }
          c5 = 3;
          const obj15 = { value: closure_130_8.entry, done: true };
          return obj15;
        }
      }
    } catch (tmp32) {
      c5 = tmp;
      throw tmp32;
    }
  }
};
let closure_7 = async function _fetchDatabaseRestorePoints(arg0) {
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
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: ConjureWorkerTickets.mintWorkerTicket(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj7 = { ticket, environment: closure_130_0 };
          const uRLSearchParams = new URLSearchParams(obj7);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          c3 = 2;
          c4 = 1;
          const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-points?" + closure_130_4), done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_130_5 = value;
          if (closure_130_5.ok) {
            c3 = 3;
            c4 = 1;
            const obj10 = { value: closure_130_5.json(), done: false };
            return obj10;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("restore points failed (" + closure_130_5.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_6 = value;
        const _Array = Array;
        if (Array.isArray(closure_130_6.restorePoints)) {
          const restorePoints = closure_130_6.restorePoints;
        } else {
          const items = [];
        }
        c4 = 3;
      }
    } catch (tmp22) {
      c4 = tmp;
      throw tmp22;
    }
  }
};
let closure_8 = async function _fetchDatabaseRestoreWindow() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await ConjureWorkerTickets.mintWorkerTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, environment: closure_130_0 });
  closure_130_4 = uRLSearchParams;
  const _fetch = fetch;
  const _HermesInternal2 = HermesInternal;
  await fetch("" + baseUrl + "/agent/database/restore-window?" + closure_130_4);
  closure_130_5 = value;
  if (!closure_130_5.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("restore window failed (" + closure_130_5.status + ")");
    throw error;
  }
  await closure_130_5.json();
  return value;
};
let closure_9 = async function _createDatabaseRestorePoint(arg0) {
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
          closure_3 = tmp2;
          closure_131_0 = closure_1;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          let ticket;
          let baseUrl;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
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
          closure_131_2 = value;
          ticket = closure_131_2.ticket;
          baseUrl = closure_131_2.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj6 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj6);
          closure_131_5 = uRLSearchParams;
          const _HermesInternal2 = HermesInternal;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          if (null == closure_131_1) {
            let obj7 = { environment: closure_131_0 };
            request.body = tmp58(obj7);
            const response = fetch(tmp56, request);
            c4 = 2;
            c5 = 1;
          }
          const obj9 = { environment: closure_131_0, label: closure_131_1 };
          obj7 = obj9;
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
          closure_131_6 = value;
          if (closure_131_6.ok) {
            c4 = 3;
            c5 = 1;
            const obj11 = { value: closure_131_6.json(), done: false };
            return obj11;
          } else {
            const _Error2 = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("restore point create failed (" + closure_131_6.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_131_7 = value;
        if (null == closure_131_7.restorePoint) {
          const _Error = Error;
          const error1 = new Error("restore point create returned nothing");
          throw error1;
        } else {
          c5 = 3;
          const obj = { value: closure_131_7.restorePoint, done: true };
          return obj;
        }
      }
    } catch (tmp36) {
      c5 = tmp;
      throw tmp36;
    }
  }
};
function settleDatabaseRestore() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _settleDatabaseRestore(arg0, arg1) {
  closure_0 = arg0;
  let ok = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = closure_0;
            closure_130_1 = ok;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            if (ok.ok) {
              let str = "";
              if (202 !== ok.status) {
                closure_130_2 = str;
                closure_130_3 = closure_131_0(closure_131_1[3]).databaseRestoreResultFromStatus(closure_130_1.status, closure_130_2);
                if (closure_130_3.ok) {
                  c5 = 1;
                  const result = closure_131_0(closure_131_1[4]).reloadConjureProjectFrames(closure_130_0);
                  c5 = 0;
                  const obj4 = closure_131_0(closure_131_1[4]);
                }
                c7 = 3;
                const obj3 = closure_131_0(closure_131_1[3]);
              }
            }
            c6 = 1;
            c7 = 1;
            const obj6 = { value: ok.text(), done: false };
            return obj6;
          }
        } else if (1 !== tmp7) {
          c5 = 0;
        }
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          str = value.trim();
        }
      } catch (tmp24) {
        closure_4 = tmp24;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp24;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_12 = async function _restoreDatabaseToPoint() {
  closure_5 = tmp2;
  closure_133_0 = closure_0;
  closure_133_1 = closure_1;
  await ConjureWorkerTickets.mintWorkerTicket(closure_0);
  closure_133_2 = value;
  const ticket = closure_133_2.ticket;
  const baseUrl = closure_133_2.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_133_5 = uRLSearchParams;
  closure_3 = closure_132_10;
  closure_2 = closure_133_0;
  const _fetch = fetch;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal = HermesInternal;
  await fetch("" + baseUrl + "/agent/database/restore-points/" + encodeURIComponent(closure_133_1) + "/restore?" + closure_133_5, { method: "POST" });
  return closure_3(closure_2, value);
};
let closure_13 = async function _restoreDatabaseToTimestamp() {
  closure_6 = tmp2;
  closure_134_0 = closure_0;
  closure_134_1 = closure_1;
  closure_134_2 = closure_2;
  await ConjureWorkerTickets.mintWorkerTicket(closure_0);
  closure_134_3 = value;
  const ticket = closure_134_3.ticket;
  const baseUrl = closure_134_3.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_134_6 = uRLSearchParams;
  closure_4 = closure_133_10;
  closure_3 = closure_134_0;
  const _fetch = fetch;
  const _HermesInternal = HermesInternal;
  const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
  const _JSON = JSON;
  const combined = "" + baseUrl + "/agent/database/restore?" + closure_134_6;
  request.body = JSON.stringify({ environment: closure_134_1, timestampMs: closure_134_2 });
  await fetch(combined, request);
  return closure_4(closure_3, value);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/history/conjureHistoryRequests.tsx");

export { fetchVersionHistory };
export const fetchSourceHistory = function fetchSourceHistory() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDatabaseRestorePoints = function fetchDatabaseRestorePoints() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDatabaseRestoreWindow = function fetchDatabaseRestoreWindow() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createDatabaseRestorePoint = function createDatabaseRestorePoint() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreDatabaseToPoint = function restoreDatabaseToPoint() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreDatabaseToTimestamp = function restoreDatabaseToTimestamp() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};