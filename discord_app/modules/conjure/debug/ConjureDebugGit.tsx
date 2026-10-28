// === Module 12630: ConjureDebugGit ===

// Module 12630 (ConjureDebugGit)
import conjureDebugConnection from "conjureDebugConnection" /* 10770 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 12610 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10739 */;

const require = globalThis.__r;

require = fn;
function decimalBytes(bytes) {
  const items = [["GB", 1000000000], ["MB", 1000000], ["KB", 1000]];
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    [tmp4, tmp5] = tmp3;
    if (bytes >= tmp5) {
      let tmp7 = globalThis;
      let _Number = Number;
      let result = bytes / tmp5;
      let _HermesInternal = HermesInternal;
      let str = " ";
      let str2 = "";
      let combined = "" + Number(result.toFixed(1)) + " " + tmp4;
      obj.return();
      return combined;
    }
  }
  return "" + bytes + " B";
}
function comparisonRow(local) {
  local = local.local;
  let str = "None";
  if (null != local) {
    str = "None";
    if ("" !== local) {
      str = local.slice(0, 12);
    }
  }
  const remote = local.remote;
  let str3 = "None";
  if (null != remote) {
    str3 = "None";
    if ("" !== remote) {
      str3 = remote.slice(0, 12);
    }
  }
  const combined = "container " + str + " \u00B7 remote " + str3;
  let num5 = local.ahead;
  if (num5 == null) {
    num5 = 0;
  }
  let num6 = local.behind;
  if (num6 == null) {
    num6 = 0;
  }
  const obj = { label: closure_13[local.ref], icon: "remote", hint: combined };
  const state = local.state;
  if ("in_sync" === state) {
    const obj2 = {};
    const merged = Object.assign(obj);
    obj2.value = "In Sync";
    obj2.state = "ok";
    return obj2;
  } else if ("ahead" === state) {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    const _HermesInternal4 = HermesInternal;
    obj3.value = "" + ConjureDebugFormat.formatCount(num5) + " Ahead";
    const _HermesInternal5 = HermesInternal;
    obj3.hint = "" + combined + " \u00B7 not pushed yet";
    obj3.state = "ahead";
    return obj3;
  } else if ("behind" === state) {
    const obj4 = {};
    const merged2 = Object.assign(obj);
    const _HermesInternal3 = HermesInternal;
    obj4.value = "" + ConjureDebugFormat.formatCount(num6) + " Behind";
    obj4.state = "behind";
    return obj4;
  } else if ("diverged" === state) {
    const obj5 = {};
    const merged3 = Object.assign(obj);
    const formatCountResult = ConjureDebugFormat.formatCount(num5);
    const _HermesInternal2 = HermesInternal;
    obj5.value = "Diverged (" + formatCountResult + " Ahead, " + ConjureDebugFormat.formatCount(num6) + " Behind)";
    obj5.state = "error";
    return obj5;
  } else if ("not_fetched" === state) {
    const obj8 = {};
    const merged4 = Object.assign(obj);
    obj8.value = "Behind";
    const _HermesInternal = HermesInternal;
    obj8.hint = "" + combined + " \u00B7 the remote head isn't in the container";
    obj8.state = "behind";
    return obj8;
  } else if ("missing_remote" === state) {
    const obj10 = {};
    const merged5 = Object.assign(obj);
    obj10.value = "Missing on Remote";
    obj10.state = "error";
    return obj10;
  } else if ("missing_local" === state) {
    const obj12 = {};
    const merged6 = Object.assign(obj);
    obj12.value = "Missing in Container";
    obj12.state = "warning";
    return obj12;
  }
}
let c6 = 2000;
let c7 = 60000;
let c8 = 10000;
let c9 = 5000;
let c10 = "Restart Agent";
const dependencyMap2 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
let closure_13 = { main: "Main vs Remote", wip: "WIP vs Remote" };
let closure_15 = ["main", "wip"];
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureDebugGitInfo(arg0) {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return ConjureDebugStore.getGitInfoState(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== arg0) {
    const fn2 = function c() {
      return conjureDebugConnection.requestConjureDebugGitInfo(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    if (cResult[7] === stateFromStores) {
      let tmp10 = cResult[8];
    }
    return tmp10;
  }
  const obj2 = { state: stateFromStores, load: tmp9 };
  cResult[6] = tmp9;
  cResult[7] = stateFromStores;
  cResult[8] = obj2;
  tmp10 = obj2;
  const tmpResult = require("initialize");
}) : (function useConjureDebugGitInfo(arg0) {
  _require = arg0;
  const obj = { state: null, load: null };
  const items = [ConjureDebugStore];
  const items1 = [arg0];
  obj.state = require("initialize").useStateFromStores(items, () => ConjureDebugStore.getGitInfoState(closure_0), items1);
  const items2 = [arg0];
  obj.load = noop.useCallback(() => conjureDebugConnection.requestConjureDebugGitInfo(closure_0), items2);
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugGit.tsx");

export const RESTART_AGENT_POLL_MS = 2000;
export const RESTART_AGENT_TIMEOUT_MS = 60000;
export const INSTANCE_POLL_STALE_MS = 10000;
export const RESTART_AGENT_RESUME_GRACE_MS = 5000;
export const RESTART_AGENT_LABEL = "Restart Agent";
export const RESTART_AGENT_CLEAR_ALARM_LABEL = "Also Clear Alarm";
export const RESTART_AGENT_CLEAR_ALARM_HINT = "Scheduled wakeups wait until something sets the alarm again.";
export const gitInfoRows = function gitInfoRows(info) {
  if (info.running) {
    if (null == info.localError) {
      if (info.checkout) {
        const items = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
        if (undefined !== info.dirtyFiles) {
          let str6 = "Unknown";
          if (null != info.dirtyFiles) {
            str6 = ConjureDebugFormat.formatCount(info.dirtyFiles);
          }
          const obj2 = { label: "Uncommitted Files", value: str6, hint: null, icon: "edit" };
          let str7;
          if (null == info.dirtyFiles) {
            str7 = "git status didn't finish in time.";
          }
          obj2.hint = str7;
          items.push(obj2);
        }
        const flatMapResult = closure_15.flatMap((item) => {
          info = item;
          const comparisons = info.comparisons;
          let found;
          if (comparisons != null) {
            found = comparisons.find((ref) => ref.ref === closure_0);
          }
          if (found == null) {
            found = [];
          }
          return found;
        });
        if (flatMapResult.length > 0) {
          const push = items.push;
          const items1 = [];
          HermesBuiltin.arraySpread(flatMapResult.map(comparisonRow), 0);
          HermesBuiltin.apply(items1, items);
        } else {
          const main = info.heads.main;
          let str9 = "None";
          if (null != main) {
            str9 = "None";
            if ("" !== main) {
              str9 = main.slice(0, 12);
            }
          }
          const obj4 = { label: "Main", value: str9, icon: "remote" };
          const wip = info.heads.wip;
          let str10 = "None";
          if (null != wip) {
            str10 = "None";
            if ("" !== wip) {
              str10 = wip.slice(0, 12);
            }
          }
          const obj5 = { label: "WIP", value: str10, icon: "remote" };
          items.push(obj4, obj5);
        }
        let str13 = "Unknown";
        if (null != info.commits) {
          str13 = ConjureDebugFormat.formatCount(info.commits);
        }
        const obj6 = { label: "Commits", value: str13, icon: "commits" };
        const oldest = info.oldest;
        let str14 = "Unknown";
        if (null != oldest) {
          str14 = "Unknown";
          if ("" !== oldest) {
            str14 = ConjureDebugFormat.formatObservedAt(oldest);
          }
        }
        const obj8 = { label: "Oldest Commit", value: str14, icon: "calendar" };
        const newest = info.newest;
        let str16 = "Unknown";
        if (null != newest) {
          str16 = "Unknown";
          if ("" !== newest) {
            str16 = ConjureDebugFormat.formatObservedAt(newest);
          }
        }
        const obj10 = { label: "Newest Commit", value: str16, icon: "calendar" };
        const lastSave2 = info.lastSave;
        if (null == lastSave2) {
          let obj12 = { label: "Last Save", value: "None since this agent instance started", icon: "save" };
        } else {
          const formatObservedAtResult = ConjureDebugFormat.formatObservedAt(lastSave2.at);
          if (lastSave2.ok) {
            let str20 = lastSave2.status;
            if (str20 == null) {
              str20 = "saved";
            }
            const obj13 = { label: "Last Save", value: null, hint: null, icon: "save", state: "ok" };
            const _HermesInternal4 = HermesInternal;
            obj13.value = "OK (" + str20 + ")";
            obj13.hint = formatObservedAtResult;
            obj12 = obj13;
          } else {
            let combined = formatObservedAtResult;
            if (null != lastSave2.error) {
              const _HermesInternal3 = HermesInternal;
              combined = "" + formatObservedAtResult + " \u00B7 " + lastSave2.error;
            }
            obj12 = { label: "Last Save", value: "Failed", hint: combined, icon: "save", state: "error" };
          }
        }
        items.push(obj6, obj8, obj10, obj12);
        if (null != info.objects) {
          const objects = info.objects;
          let str25 = "1 pack";
          if (1 !== objects.packs) {
            const _HermesInternal5 = HermesInternal;
            str25 = "" + ConjureDebugFormat.formatCount(objects.packs) + " packs";
          }
          const obj14 = { label: "Objects", value: null, hint: null, icon: "objects" };
          const formatCountResult = ConjureDebugFormat.formatCount(objects.loose);
          const formatBytesResult = ConjureDebugFormat.formatBytes(objects.looseBytes);
          const formatCountResult1 = ConjureDebugFormat.formatCount(objects.packed);
          const _HermesInternal6 = HermesInternal;
          obj14.value = "" + formatCountResult + " loose (" + formatBytesResult + ") \u00B7 " + formatCountResult1 + " packed in " + str25 + " (" + ConjureDebugFormat.formatBytes(objects.packBytes) + ")";
          let combined1;
          if (objects.garbage > 0) {
            const _HermesInternal7 = HermesInternal;
            combined1 = "" + ConjureDebugFormat.formatCount(objects.garbage) + " garbage files";
            const tmp35Result = ConjureDebugFormat;
          }
          obj14.hint = combined1;
          items.push(obj14);
        }
        if (null == info.partialClone) {
          if (null != null) {
            items.push(null);
          }
          if (null != info.localBytes) {
            const localBytes = info.localBytes;
            const obj16 = { label: "Repository Size", value: null, hint: "Local copy: every commit, but only the file versions this container has read.", icon: "size", state: null };
            [tmp74, tmp75] = dependencyMap2[localBytes.status];
            const tmp77 = decimalBytes(localBytes.bytes);
            const _HermesInternal11 = HermesInternal;
            obj16.value = "" + tmp77 + " of " + decimalBytes(localBytes.max) + " \u00B7 " + tmp74;
            obj16.state = tmp75;
            items.push(obj16);
            const tmp73 = _slicedToArray(dependencyMap2[localBytes.status], 2);
          }
          if (null === info.largestFile) {
            items.push({ label: "Largest File", value: "Unknown", hint: "The scan for it didn't finish in time.", icon: "file" });
          } else if (null != info.largestFile) {
            const largestFile = info.largestFile;
            const obj21 = { label: "Largest File", value: null, hint: "Largest file version in the local copy.", icon: "file", state: null };
            [tmp84, tmp85] = dependencyMap2[largestFile.status];
            const tmp87 = decimalBytes(largestFile.bytes);
            const _HermesInternal12 = HermesInternal;
            obj21.value = "" + tmp87 + " of " + decimalBytes(largestFile.max) + " \u00B7 " + tmp84;
            obj21.state = tmp85;
            items.push(obj21);
            const tmp83 = _slicedToArray(dependencyMap2[largestFile.status], 2);
          }
          return items;
        } else {
          let str34 = { label: "Partial Clone", icon: "download" };
          if (!info.partialClone) {
            const obj22 = {};
            const merged = Object.assign(str34);
            obj22.value = "No";
          }
          if (null == info.missingObjects) {
            const obj23 = {};
            const merged1 = Object.assign(str34);
            obj23.value = "Yes";
            str34 = "Counting objects not downloaded didn't finish in time.";
            obj23.hint = "Counting objects not downloaded didn't finish in time.";
            let obj25 = obj23;
          } else {
            obj25 = {};
            const merged2 = Object.assign(`Counting objects not downloaded didn't finish in time.`);
            const _HermesInternal8 = HermesInternal;
            obj25.value = "Yes \u00B7 " + ConjureDebugFormat.formatCount(info.missingObjects) + " not downloaded";
            obj25.hint = "Fetched on demand; this read never fetches.";
          }
        }
      } else {
        const items2 = [{ label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" }, ];
        const lastSave = info.lastSave;
        if (null == lastSave) {
          let obj = { label: "Last Save", value: "None since this agent instance started", icon: "save" };
        } else {
          const formatObservedAtResult1 = ConjureDebugFormat.formatObservedAt(lastSave.at);
          if (lastSave.ok) {
            let str3 = lastSave.status;
            if (str3 == null) {
              str3 = "saved";
            }
            const obj26 = { label: "Last Save", value: null, hint: null, icon: "save", state: "ok" };
            const _HermesInternal2 = HermesInternal;
            obj26.value = "OK (" + str3 + ")";
            obj26.hint = formatObservedAtResult1;
            obj = obj26;
          } else {
            let combined2 = formatObservedAtResult1;
            if (null != lastSave.error) {
              const _HermesInternal = HermesInternal;
              combined2 = "" + formatObservedAtResult1 + " \u00B7 " + lastSave.error;
            }
            obj = { label: "Last Save", value: "Failed", hint: combined2, icon: "save", state: "error" };
          }
        }
        items2[1] = obj;
        return items2;
      }
    }
  }
  const lastSave3 = info.lastSave;
  if (null == lastSave3) {
    let obj27 = { label: "Last Save", value: "None since this agent instance started", icon: "save" };
  } else {
    const formatObservedAtResult2 = ConjureDebugFormat.formatObservedAt(lastSave3.at);
    if (lastSave3.ok) {
      let str42 = lastSave3.status;
      if (str42 == null) {
        str42 = "saved";
      }
      const obj30 = { label: "Last Save", value: null, hint: null, icon: "save", state: "ok" };
      const _HermesInternal10 = HermesInternal;
      obj30.value = "OK (" + str42 + ")";
      obj30.hint = formatObservedAtResult2;
      obj27 = obj30;
    } else {
      let combined3 = formatObservedAtResult2;
      if (null != lastSave3.error) {
        const _HermesInternal9 = HermesInternal;
        combined3 = "" + formatObservedAtResult2 + " \u00B7 " + lastSave3.error;
      }
      obj27 = { label: "Last Save", value: "Failed", hint: combined3, icon: "save", state: "error" };
    }
  }
  const items3 = [obj27];
  return items3;
};
export const gitInfoStatus = function gitInfoStatus(state) {
  ({ error, info, observedAt } = state);
  if (state.pending) {
    return { line: "Reading the repository", critical: false };
  } else if (null != error) {
    const obj3 = { line: error, critical: true };
    return obj3;
  } else if (null == observedAt) {
    return { line: "", critical: false };
  } else {
    const items = [];
    if (null != info) {
      if (info.running) {
        if (null != info.localError) {
          const _HermesInternal = HermesInternal;
          const items1 = ["Workspace unreadable: " + info.localError, true];
          items.push(items1);
        } else if (null != info.localWarning) {
          const items2 = ["Read stopped early; some rows were not read", true];
          items.push(items2);
        }
      } else {
        const items3 = ["Workspace not running", false];
        items.push(items3);
      }
      ({ status, error: error2 } = info.remote);
      if ("missing" === status) {
        const items4 = ["Remote repository missing", true];
        items.push(items4);
      }
      if ("error" === status) {
        if (error2 == null) {
          error2 = "unknown error";
        }
        const _HermesInternal2 = HermesInternal;
        const items5 = ["Remote read failed: " + error2, true];
        items.push(items5);
      }
      if ("disabled" === status) {
        const items6 = ["Source repositories are off", false];
        items.push(items6);
      }
    }
    const obj = { line: null, critical: null };
    const _HermesInternal3 = HermesInternal;
    const items7 = ["Updated " + ConjureDebugFormat.formatObservedAt(observedAt)];
    HermesBuiltin.arraySpread(items.map((item) => {
      [tmp] = item;
      return tmp;
    }), 1);
    obj.line = items7.join(" \u00B7 ");
    obj.critical = items.some((item) => {
      [, tmp] = item;
      return tmp;
    });
    return obj;
  }
};
export const restartAgentStatusLine = function restartAgentStatusLine(state) {
  const phase = state.phase;
  if ("idle" === phase) {
    return "Starts a new agent instance; the container keeps running.";
  } else if ("pending" === phase) {
    return "Asking the worker to restart.";
  } else if ("restarting" === phase) {
    return "Restarting; waiting for a new instance to answer.";
  } else if ("restarted" === phase) {
    const _HermesInternal2 = HermesInternal;
    return "Restarted \u00B7 new instance since " + ConjureDebugFormat.formatObservedAt(state.instanceSince);
  } else if ("failed" === phase) {
    const _HermesInternal = HermesInternal;
    return "Failed: " + state.reason + " \u00B7 " + ConjureDebugFormat.formatObservedAt(state.observedAt);
  }
};
export const useConjureDebugGitInfo = tmp2;
export const useConjureRestartAgent = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRestartAgent(arg0) {
  _require = arg0;
  const cResult = require("c").c(23);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function v() {
      return ConjureDebugStore.getRestartAgentState(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmp9 = instanceSince(noop.useState(false), 2);
  const first1 = tmp9[0];
  startedAt = null;
  if ("restarting" === stateFromStores.phase) {
    startedAt = stateFromStores.startedAt;
  }
  instanceSince = null;
  if ("restarted" === stateFromStores.phase) {
    instanceSince = stateFromStores.instanceSince;
  }
  noop = obj3.useRef(instanceSince);
  if (cResult[4] === arg0) {
    if (cResult[5] === instanceSince) {
      let tmp13 = cResult[6];
      let tmp14 = cResult[7];
    }
    const effect = obj3.useEffect(tmp13, tmp14);
    if (cResult[8] === arg0) {
      if (cResult[9] === startedAt) {
        let tmp16 = cResult[10];
        let tmp17 = cResult[11];
      }
      const effect1 = obj3.useEffect(tmp16, tmp17);
      if (cResult[12] === first1) {
        if (cResult[13] === arg0) {
          let tmp19 = cResult[14];
        }
        class C {
          constructor() {
            obj = closure_0(closure_2[7]);
            return obj.restartConjureAgent(closure_0, closure_1);
          }
        }
        if (cResult[17] === first1) {
          if (cResult[18] === tmp19) {
            if (cResult[19] === stateFromStores) {
              if (cResult[20] === tmp20) {
                if (cResult[21] === tmp21) {
                  let tmp22 = cResult[22];
                }
                return tmp22;
              }
            }
          }
        }
        let obj2 = { state: stateFromStores, busy: "pending" === stateFromStores.phase || "restarting" === stateFromStores.phase, clearAlarm: first1, setClearAlarm: tmp9[1], confirmCopy: tmp21, restart: tmp19 };
        cResult[17] = first1;
        cResult[18] = tmp19;
        cResult[19] = stateFromStores;
        cResult[20] = "pending" === stateFromStores.phase || "restarting" === stateFromStores.phase;
        cResult[21] = tmp21;
        cResult[22] = obj2;
        tmp22 = obj2;
      }
      class C {
        constructor() {
          obj = closure_0(closure_2[7]);
          return obj.restartConjureAgent(closure_0, closure_1);
        }
      }
      cResult[12] = first1;
      cResult[13] = arg0;
      cResult[14] = C;
      tmp19 = C;
    }
    class A {
      constructor() {
        if (null != startedAt) {
          tmp2 = closure_1_5;
          tmp3 = closure_0;
          instancePollRequestedAt = closure_1_5.getInstancePollRequestedAt(closure_0);
          tmp5 = null != instancePollRequestedAt;
          if (tmp5) {
            tmp6 = globalThis;
            _Date = Date;
            tmp7 = closure_1_8;
            tmp5 = Date.now() - instancePollRequestedAt < closure_1_8;
          }
          if (!tmp5) {
            tmp8 = closure_0;
            tmp9 = startedAt;
            obj = closure_0(startedAt[7]);
            result = obj.pollConjureDebugInstance(tmp3);
          }
          tmp11 = globalThis;
          _setInterval = setInterval;
          tmp12 = closure_1_6;
          closure_0 = setInterval(function poll() {
            const instancePollRequestedAt = ConjureDebugStore.getInstancePollRequestedAt(projectId);
            let tmp3 = null != instancePollRequestedAt;
            if (tmp3) {
              const _Date = Date;
              tmp3 = Date.now() - instancePollRequestedAt < closure_2_8;
            }
            if (!tmp3) {
              const result = projectId(startedAt[7]).pollConjureDebugInstance(projectId);
              const obj = projectId(startedAt[7]);
            }
          }, closure_1_6);
          _setTimeout = setTimeout;
          _Math = Math;
          tmp13 = closure_1_9;
          tmp14 = closure_1_7;
          _Date2 = Date;
          sum = tmp + closure_1_7;
          closure_1 = setTimeout(() => {
            const obj2 = { type: "CONJURE_RESTART_AGENT_RESULT", projectId, outcome: "timed_out", reason: "No new agent instance answered within 60 s", observedAt: null };
            const obj = first1(startedAt[8]);
            obj2.observedAt = new Date().toISOString();
            return obj.dispatch(obj2);
          }, Math.max(closure_1_9, sum - Date.now()));
          return () => {
            clearInterval(closure_0);
            clearTimeout(closure_1);
          };
        } else {
          return;
        }
      }
    }
    const items2 = [arg0, startedAt];
    cResult[8] = arg0;
    cResult[9] = startedAt;
    cResult[10] = A;
    cResult[11] = items2;
    tmp17 = items2;
    tmp16 = A;
  }
  const fn2 = function b() {
    let tmp2 = null != instanceSince;
    if (tmp2) {
      tmp2 = instanceSince !== ref.current;
    }
    if (tmp2) {
      ref.current = instanceSince;
      const conjureDebugGitInfo = conjureDebugConnection.requestConjureDebugGitInfo(closure_0);
    }
  };
  const items3 = [arg0, instanceSince];
  cResult[4] = arg0;
  cResult[5] = instanceSince;
  cResult[6] = fn2;
  cResult[7] = items3;
  tmp14 = items3;
  tmp13 = fn2;
  const tmpResult = require("initialize");
}) : (function useConjureRestartAgent(arg0) {
  _require = arg0;
  const items = [ConjureDebugStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureDebugStore.getRestartAgentState(closure_0), items1);
  let tmp2 = instanceSince(noop.useState(false), 2);
  const clearAlarm = tmp2[0];
  startedAt = null;
  if ("restarting" === stateFromStores.phase) {
    startedAt = stateFromStores.startedAt;
  }
  instanceSince = null;
  if ("restarted" === stateFromStores.phase) {
    instanceSince = stateFromStores.instanceSince;
  }
  noop = obj2.useRef(instanceSince);
  const items2 = [arg0, instanceSince];
  const effect = obj2.useEffect(() => {
    let tmp2 = null != instanceSince;
    if (tmp2) {
      tmp2 = instanceSince !== ref.current;
    }
    if (tmp2) {
      ref.current = instanceSince;
      const conjureDebugGitInfo = conjureDebugConnection.requestConjureDebugGitInfo(closure_0);
    }
  }, items2);
  const items3 = [arg0, startedAt];
  const effect1 = obj2.useEffect(() => {
    if (null != startedAt) {
      let instancePollRequestedAt = ConjureDebugStore.getInstancePollRequestedAt(projectId);
      let tmp5 = null != instancePollRequestedAt;
      if (tmp5) {
        let _Date = Date;
        tmp5 = Date.now() - instancePollRequestedAt < closure_1_8;
      }
      if (!tmp5) {
        let result = projectId(startedAt[7]).pollConjureDebugInstance(projectId);
        let obj = projectId(startedAt[7]);
      }
      const _setInterval = setInterval;
      projectId = setInterval(function poll() {
        const instancePollRequestedAt = ConjureDebugStore.getInstancePollRequestedAt(projectId);
        let tmp3 = null != instancePollRequestedAt;
        if (tmp3) {
          const _Date = Date;
          tmp3 = Date.now() - instancePollRequestedAt < closure_2_8;
        }
        if (!tmp3) {
          const result = projectId(startedAt[7]).pollConjureDebugInstance(projectId);
          const obj = projectId(startedAt[7]);
        }
      }, closure_1_6);
      const _setTimeout = setTimeout;
      const _Math = Math;
      const _Date2 = Date;
      const sum = tmp + closure_1_7;
      const timeout = setTimeout(() => {
        const obj2 = { type: "CONJURE_RESTART_AGENT_RESULT", projectId, outcome: "timed_out", reason: "No new agent instance answered within 60 s", observedAt: null };
        const obj = first(startedAt[8]);
        obj2.observedAt = new Date().toISOString();
        return obj.dispatch(obj2);
      }, Math.max(closure_1_9, sum - Date.now()));
      return () => {
        clearInterval(closure_0);
        clearTimeout(closure_1);
      };
    }
  }, items3);
  const items4 = [arg0, clearAlarm];
  const obj3 = { state: stateFromStores, busy: null, clearAlarm: null, setClearAlarm: null, confirmCopy: null, restart: null };
  let tmp9 = "pending" === stateFromStores.phase;
  const callback = obj2.useCallback(() => conjureDebugConnection.restartConjureAgent(closure_0, first), items4);
  if (!tmp9) {
    tmp9 = "restarting" === stateFromStores.phase;
  }
  obj3.busy = tmp9;
  obj3.clearAlarm = clearAlarm;
  obj3.setClearAlarm = tmp2[1];
  let str = "The pending alarm is kept.";
  if (clearAlarm) {
    str = "The pending alarm is cleared, so scheduled wakeups wait until something sets it again.";
  }
  obj3.confirmCopy = { title: "Restart Agent?", body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${str}`, confirm: _confirm };
  obj3.restart = callback;
  return obj3;
});