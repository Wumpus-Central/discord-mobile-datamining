// discord_app/modules/conjure/history/conjureHistoryRequests.tsx
import conjureWorkerFetch from "../connection/conjureWorkerFetch.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_3 = async function _fetchVersionHistory() {
  closure_1 = tmp2;
  await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/source-history");
  closure_129_0 = value;
  if (!closure_129_0.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("version history failed (" + closure_129_0.status + ")");
    throw error;
  }
  await closure_129_0.json();
  closure_129_1 = value;
  const _Array = Array;
  if (Array.isArray(closure_129_1.entries)) {
    let entries = closure_129_1.entries;
  } else {
    entries = [];
  }
  const obj = { entries, previewSha: null, publishedSha: null };
  let previewSha = null;
  if (typeof closure_129_1.previewSha === "string") {
    previewSha = closure_129_1.previewSha;
  }
  obj.previewSha = previewSha;
  let publishedSha = null;
  if (typeof closure_129_1.publishedSha === "string") {
    publishedSha = closure_129_1.publishedSha;
  }
  obj.publishedSha = publishedSha;
  return obj;
};
let closure_4 = async function _restoreSourceHistoryEntry(arg0) {
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
      return { value: "IconComponent", done: "+352" };
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
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal3 = HermesInternal;
          c4 = 1;
          c5 = 1;
          const obj4 = {
            value: conjureWorkerFetch.fetchConjureWorker(
              closure_0,
              "/agent/source-history/" + encodeURIComponent(closure_1) + "/restore",
              { method: "POST" },
            ),
            done: false,
          };
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
          closure_130_1 = value;
          if (closure_130_1.ok) {
            c4 = 3;
            c5 = 1;
            const obj7 = { value: obj5.json(), done: false };
            return obj7;
          } else {
            c4 = 2;
            c5 = 1;
            const obj8 = { value: obj5.text(), done: false };
            return obj8;
          }
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
          closure_130_2 = value.trim();
          let str3 = "";
          if ("" !== closure_130_2) {
            const _HermesInternal = HermesInternal;
            str3 = ": " + closure_130_2;
          }
          const _HermesInternal2 = HermesInternal;
          const error = new Error("version restore failed (" + closure_130_1.status + ")" + str3);
          throw error;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        closure_130_3 = value;
        if (null == closure_130_3.entry) {
          const _Error = Error;
          const error1 = new Error("version restore returned no commit");
          throw error1;
        } else {
          if (true !== closure_130_3.live) {
            const result = closure_131_0(closure_131_1[2]).refreshPublishedProject(closure_130_0, { isPreview: true });
            result.catch(() => {});
            const obj = closure_131_0(closure_131_1[2]);
          }
          c5 = 3;
          const obj11 = { value: closure_130_3.entry, done: true };
          return obj11;
        }
      }
    } catch (tmp28) {
      c5 = tmp;
      throw tmp28;
    }
  }
};
let closure_5 = async function _fetchDatabaseRestorePoints(arg0) {
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
        return { value: "IconComponent", done: "+352" };
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
            const obj5 = { query: null };
            const obj6 = { environment };
            obj5.query = obj6;
            c3 = 1;
            c4 = 1;
            const obj7 = {
              value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/database/restore-points", obj5),
              done: false,
            };
            return obj7;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_130_0 = value;
            if (closure_130_0.ok) {
              c3 = 2;
              c4 = 1;
              const obj9 = { value: closure_130_0.json(), done: false };
              return obj9;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("restore points failed (" + closure_130_0.status + ")");
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
          closure_130_1 = value;
          const _Array = Array;
          if (Array.isArray(closure_130_1.restorePoints)) {
            const restorePoints = closure_130_1.restorePoints;
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
  })();
};
let closure_6 = async function _fetchDatabaseRestoreWindow(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp2;
    await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/database/restore-window", {
      query: { environment },
    });
    closure_130_0 = value;
    if (!closure_130_0.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("restore window failed (" + closure_130_0.status + ")");
      throw error;
    }
    await closure_130_0.json();
    return value;
  })();
};
let closure_7 = async function _createDatabaseRestorePoint(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
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
        return { value: "IconComponent", done: "+352" };
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
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            conjureWorkerFetch;
            if (null == label) {
              let obj4 = { environment };
              const obj5 = { method: "POST", json: obj4 };
              tmp37(closure_0, "/agent/database/restore-points", obj5);
              c4 = 1;
              c5 = 1;
            }
            const obj6 = { environment, label };
            obj4 = obj6;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_131_0 = value;
            if (closure_131_0.ok) {
              c4 = 2;
              c5 = 1;
              const obj8 = { value: closure_131_0.json(), done: false };
              return obj8;
            } else {
              const _Error2 = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("restore point create failed (" + closure_131_0.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_131_1 = value;
          if (null == closure_131_1.restorePoint) {
            const _Error = Error;
            const error1 = new Error("restore point create returned nothing");
            throw error1;
          } else {
            c5 = 3;
            const obj = { value: closure_131_1.restorePoint, done: true };
            return obj;
          }
        }
      } catch (tmp24) {
        c5 = tmp;
        throw tmp24;
      }
    }
  })();
};
function settleDatabaseRestore() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _settleDatabaseRestore(arg0, arg1) {
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
        return { value: "IconComponent", done: "+352" };
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
                closure_130_3 = closure_131_0(closure_131_1[3]).databaseRestoreResultFromStatus(
                  closure_130_1.status,
                  closure_130_2,
                );
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
let closure_10 = async function _restoreDatabaseToPoint() {
  closure_3 = settleDatabaseRestore;
  closure_2 = closure_0;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal = HermesInternal;
  await conjureWorkerFetch.fetchConjureWorker(
    closure_0,
    "/agent/database/restore-points/" + encodeURIComponent(closure_1) + "/restore",
    { method: "POST" },
  );
  return closure_3(closure_2, value);
};
let closure_11 = async function _restoreDatabaseToTimestamp(arg0) {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    closure_4 = settleDatabaseRestore;
    closure_3 = closure_0;
    await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/database/restore", {
      method: "POST",
      json: { environment, timestampMs },
    });
    return closure_4(closure_3, value);
  })();
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/history/conjureHistoryRequests.tsx");

export const fetchVersionHistory = function fetchVersionHistory() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDatabaseRestorePoints = function fetchDatabaseRestorePoints() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDatabaseRestoreWindow = function fetchDatabaseRestoreWindow() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createDatabaseRestorePoint = function createDatabaseRestorePoint() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreDatabaseToPoint = function restoreDatabaseToPoint() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const restoreDatabaseToTimestamp = function restoreDatabaseToTimestamp() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
