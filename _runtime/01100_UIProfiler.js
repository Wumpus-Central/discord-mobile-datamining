// _runtime/01100_UIProfiler.js
import asyncGeneratorStep from "registerSpanErrorInstrumentation";
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

let closure_0 = require;
const UIProfiler = dependencyMap;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
closure_0 = undefined;
class UIProfiler {
  constructor() {
    tmp = outer1_2(this, UIProfiler);
    this._client = undefined;
    this._profiler = undefined;
    this._chunkTimer = undefined;
    this._profilerId = undefined;
    this._isRunning = false;
    this._sessionSampled = false;
    this._lifecycleMode = undefined;
    set = new Set();
    this._activeRootSpanIds = set;
    map = new Map();
    this._rootSpanTimeouts = map;
    return;
  }
}
let obj = {
  key: "initialize",
  value: function initialize(getOptions) {
    const obj = {};
    const profileLifecycle = getOptions.getOptions().profileLifecycle;
    const shouldProfileSessionResult = callback(UIProfiler[3]).shouldProfileSession(getOptions.getOptions());
    if (callback(UIProfiler[4]).DEBUG_BUILD) {
      const debug = tmp(tmp2[5]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Profiling] Initializing profiler (lifecycle='" + profileLifecycle + "').");
    }
    if (!shouldProfileSessionResult) {
      if (tmp(tmp2[4]).DEBUG_BUILD) {
        const debug2 = tmp(tmp2[5]).debug;
        debug2.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization.");
      }
    }
    const obj2 = callback(UIProfiler[3]);
    obj._profilerId = callback(UIProfiler[5]).uuid4();
    obj._client = getOptions;
    obj._sessionSampled = shouldProfileSessionResult;
    obj._lifecycleMode = profileLifecycle;
    if ("trace" === profileLifecycle) {
      const result = obj._setupTraceLifecycleListeners(getOptions);
    }
  }
};
let items = [
  obj,
  {
    key: "start",
    value: function start() {
      const self = this;
      if ("trace" !== this._lifecycleMode) {
        if (self._isRunning) {
          if (callback(UIProfiler[4]).DEBUG_BUILD) {
            const debug3 = tmp8(tmp9[5]).debug;
            debug3.warn("[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.");
          }
          tmp8 = callback;
          tmp9 = UIProfiler;
        } else if (self._sessionSampled) {
          self._beginProfiling();
        } else {
          if (callback(UIProfiler[4]).DEBUG_BUILD) {
            const debug2 = tmp4(tmp5[5]).debug;
            debug2.warn("[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.");
          }
          tmp4 = callback;
          tmp5 = UIProfiler;
        }
      } else {
        if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug = tmp(tmp2[5]).debug;
          debug.warn("[Profiling] `profileLifecycle` is set to \"trace\". Calls to `uiProfiler.start()` are ignored in trace mode.");
        }
        tmp = callback;
        tmp2 = UIProfiler;
      }
    }
  },
  {
    key: "stop",
    value: function stop() {
      const self = this;
      if ("trace" !== this._lifecycleMode) {
        if (self._isRunning) {
          self._endProfiling();
        } else {
          if (callback(UIProfiler[4]).DEBUG_BUILD) {
            const debug2 = tmp4(tmp5[5]).debug;
            debug2.warn("[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.");
          }
          tmp4 = callback;
          tmp5 = UIProfiler;
        }
      } else {
        if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug = tmp(tmp2[5]).debug;
          debug.warn("[Profiling] `profileLifecycle` is set to \"trace\". Calls to `uiProfiler.stop()` are ignored in trace mode.");
        }
        tmp = callback;
        tmp2 = UIProfiler;
      }
    }
  },
  {
    key: "notifyRootSpanActive",
    value: function notifyRootSpanActive(rootSpan) {
      const self = this;
      if ("trace" === this._lifecycleMode) {
        if (self._sessionSampled) {
          const spanId = rootSpan.spanContext().spanId;
          if (spanId) {
            const _activeRootSpanIds = self._activeRootSpanIds;
            if (!_activeRootSpanIds.has(spanId)) {
              const result = self._registerTraceRootSpan(spanId);
              const size = self._activeRootSpanIds.size;
              if (1 === size) {
                if (callback(UIProfiler[4]).DEBUG_BUILD) {
                  const debug = tmp3(tmp4[5]).debug;
                  debug.log("[Profiling] Detected already active root span during setup. Active root spans now:", size);
                }
                self._beginProfiling();
                tmp3 = callback;
                tmp4 = UIProfiler;
              }
            }
          }
        }
      }
    }
  },
  {
    key: "_beginProfiling",
    value: function _beginProfiling() {
      const self = this;
      if (!this._isRunning) {
        self._isRunning = true;
        if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug = tmp(tmp2[5]).debug;
          debug.log("[Profiling] Started profiling with profiler ID:", self._profilerId);
        }
        const globalScope = callback(UIProfiler[5]).getGlobalScope();
        const obj = { profiler_id: null };
        obj[0] = self._profilerId;
        globalScope.setContext("profile", obj);
        const result = self._startProfilerInstance();
        if (self._profiler) {
          const result1 = self._startPeriodicChunking();
        } else {
          if (tmp(tmp2[4]).DEBUG_BUILD) {
            const debug2 = tmp(tmp2[5]).debug;
            debug2.log("[Profiling] Failed to start JS Profiler; stopping.");
          }
          self._resetProfilerInfo();
        }
        const tmpResult = callback(UIProfiler[5]);
      }
    }
  },
  {
    key: "_endProfiling",
    value: function _endProfiling() {
      const self = this;
      if (this._isRunning) {
        self._isRunning = false;
        if (self._chunkTimer) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._chunkTimer);
          self._chunkTimer = undefined;
        }
        const result = self._clearAllRootSpanTimeouts();
        self._collectCurrentChunk().catch((arg0) => {
          if (callback(table[4]).DEBUG_BUILD) {
            const debug = callback(table[5]).debug;
            debug.error("[Profiling] Failed to collect current profile chunk on `stop()`:", arg0);
          }
        });
        if ("manual" === self._lifecycleMode) {
          const globalScope = callback(UIProfiler[5]).getGlobalScope();
          globalScope.setContext("profile", {});
          const obj = callback(UIProfiler[5]);
        }
        const _collectCurrentChunkResult = self._collectCurrentChunk();
      }
    }
  },
  {
    key: "_setupTraceLifecycleListeners",
    value: function _setupTraceLifecycleListeners(on) {
      const self = this;
      on.on("spanStart", (isRecording) => {
        if (self._sessionSampled) {
          if (isRecording === tmpResult.getRootSpan(isRecording)) {
            if (isRecording.isRecording()) {
              const spanId = isRecording.spanContext().spanId;
              if (spanId) {
                const _activeRootSpanIds = obj._activeRootSpanIds;
                if (!_activeRootSpanIds.has(spanId)) {
                  const result = obj._registerTraceRootSpan(spanId);
                  const size = obj._activeRootSpanIds.size;
                  if (1 === size) {
                    if (self(outer1_1[4]).DEBUG_BUILD) {
                      const debug3 = self(outer1_1[5]).debug;
                      const _HermesInternal = HermesInternal;
                      debug3.log("[Profiling] Root span " + spanId + " started. Profiling active while there are active root spans (count=" + size + ").");
                    }
                    obj._beginProfiling();
                  }
                }
              }
            } else if (self(outer1_1[4]).DEBUG_BUILD) {
              const debug2 = self(outer1_1[5]).debug;
              debug2.log("[Profiling] Discarding profile because root span was not sampled.");
            }
          }
          tmpResult = tmp(tmp2[5]);
        } else if (tmp(tmp2[4]).DEBUG_BUILD) {
          const debug = self(outer1_1[5]).debug;
          debug.log("[Profiling] Span not profiled because of negative sampling decision for user session.");
        }
      });
      on.on("spanEnd", (spanContext) => {
        if (self._sessionSampled) {
          const spanId = spanContext.spanContext().spanId;
          if (spanId) {
            const _activeRootSpanIds = obj._activeRootSpanIds;
            if (_activeRootSpanIds.has(spanId)) {
              const _activeRootSpanIds2 = obj._activeRootSpanIds;
              _activeRootSpanIds2.delete(spanId);
              const size = obj._activeRootSpanIds.size;
              if (self(outer1_1[4]).DEBUG_BUILD) {
                let debug = tmp3(tmp4[5]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("[Profiling] Root span with ID " + spanId + " ended. Will continue profiling for as long as there are active root spans (currently: " + size + ").");
              }
              if (0 === size) {
                obj._collectCurrentChunk().catch((arg0) => {
                  if (callback(table[4]).DEBUG_BUILD) {
                    const debug = callback(table[5]).debug;
                    debug.error("[Profiling] Failed to collect current profile chunk on last `spanEnd`:", arg0);
                  }
                });
                obj._endProfiling();
                const _collectCurrentChunkResult = obj._collectCurrentChunk();
              }
              tmp3 = self;
              tmp4 = outer1_1;
            }
          }
        }
      });
    }
  },
  {
    key: "_resetProfilerInfo",
    value: function _resetProfilerInfo() {
      this._isRunning = false;
      const globalScope = callback(UIProfiler[5]).getGlobalScope();
      globalScope.setContext("profile", {});
    }
  },
  {
    key: "_clearAllRootSpanTimeouts",
    value: function _clearAllRootSpanTimeouts() {
      let _rootSpanTimeouts = this._rootSpanTimeouts;
      const item = _rootSpanTimeouts.forEach((arg0) => clearTimeout(arg0));
      _rootSpanTimeouts = this._rootSpanTimeouts;
      _rootSpanTimeouts.clear();
    }
  },
  {
    key: "_registerTraceRootSpan",
    value: function _registerTraceRootSpan(spanId) {
      const self = this;
      let closure_0 = spanId;
      const _activeRootSpanIds = this._activeRootSpanIds;
      _activeRootSpanIds.add(spanId);
      const _rootSpanTimeouts = this._rootSpanTimeouts;
      const result = _rootSpanTimeouts.set(spanId, setTimeout(() => self._onRootSpanTimeout(closure_0), 300000));
    }
  },
  {
    key: "_startProfilerInstance",
    value: function _startProfilerInstance() {
      const _profiler = this._profiler;
      let stopped;
      if (_profiler != null) {
        stopped = _profiler.stopped;
      }
      if (false !== stopped) {
        const startJSSelfProfileResult = callback(UIProfiler[3]).startJSSelfProfile();
        if (startJSSelfProfileResult) {
          this._profiler = startJSSelfProfileResult;
        } else if (tmp2(tmp3[4]).DEBUG_BUILD) {
          const debug = tmp2(tmp3[5]).debug;
          debug.log("[Profiling] Failed to start JS Profiler.");
        }
        const obj = callback(UIProfiler[3]);
      }
    }
  },
  {
    key: "_startPeriodicChunking",
    value: function _startPeriodicChunking() {
      const self = this;
      if (this._isRunning) {
        const _setTimeout = setTimeout;
        tmp._chunkTimer = setTimeout(() => {
          self._collectCurrentChunk().catch((arg0) => {
            if (callback(table[4]).DEBUG_BUILD) {
              const debug = callback(table[5]).debug;
              debug.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", arg0);
            }
          });
          if (self._isRunning) {
            const result = obj._startProfilerInstance();
            if (obj._profiler) {
              const result1 = obj._startPeriodicChunking();
            } else {
              obj._resetProfilerInfo();
            }
          }
        }, 60000);
      }
    }
  },
  {
    key: "_onRootSpanTimeout",
    value: function _onRootSpanTimeout(closure_0) {
      const self = this;
      const _rootSpanTimeouts = this._rootSpanTimeouts;
      if (_rootSpanTimeouts.has(closure_0)) {
        const _rootSpanTimeouts2 = self._rootSpanTimeouts;
        _rootSpanTimeouts2.delete(closure_0);
        const _activeRootSpanIds = self._activeRootSpanIds;
        if (_activeRootSpanIds.has(closure_0)) {
          if (callback(UIProfiler[4]).DEBUG_BUILD) {
            const debug = tmp2(tmp3[5]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("[Profiling] Reached 5-minute timeout for root span " + closure_0 + ". You likely started a manual root span that never called `.end()`.");
          }
          const _activeRootSpanIds2 = self._activeRootSpanIds;
          _activeRootSpanIds2.delete(closure_0);
          if (0 === self._activeRootSpanIds.size) {
            self._endProfiling();
          }
          tmp2 = callback;
          tmp3 = UIProfiler;
        }
      }
    }
  },
,

];
obj = { key: "_collectCurrentChunk", value: null };
closure_0 = asyncGeneratorStep(function() {
  const self = this;
  let c6 = 0;
  let c7 = 0;
  let c4 = 0;
  return (function*() {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_3 = _self;
            let closure_2 = tmp3;
            let closure_1 = tmp5;
            _self = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            const _profiler = _self._profiler;
            _self._profiler = undefined;
            if (_profiler) {
              let c4 = 1;
              c6 = 2;
              c7 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = _profiler.stop();
              return obj1;
            }
          }
        } else {
          if (1 === tmp8) {
            c4 = 0;
            const outer1_3 = closure_5;
            if (self(outer1_1[4]).DEBUG_BUILD) {
              const debug3 = self(outer1_1[5]).debug;
              debug3.log("[Profiling] Error while stopping JS Profiler for chunk:", outer1_3);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            _self = arg1;
            closure_1 = self(outer1_1[3]).createProfileChunkPayload(_self, closure_3._client, closure_3._profilerId);
            const obj6 = self(outer1_1[3]);
            closure_2 = self(outer1_1[3]).validateProfileChunk(closure_1);
            if (!("reason" in closure_2)) {
              closure_3._sendProfileChunk(outer1_1);
              if (self(outer1_1[4]).DEBUG_BUILD) {
                const debug = self(outer1_1[5]).debug;
                debug.log("[Profiling] Collected browser profile chunk.");
              }
              c4 = 0;
            }
            const obj7 = self(outer1_1[3]);
          }
          if (self(outer1_1[4]).DEBUG_BUILD) {
            const debug2 = self(outer1_1[5]).debug;
            debug2.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", outer1_2.reason);
          }
          c4 = 0;
          c7 = 3;
          obj = { value: null, done: true };
          obj[0] = undefined;
          return obj;
        }
        c7 = 3;
      } catch (tmp42) {
        closure_5 = tmp42;
        if (tmp4 === c4) {
          c7 = tmp2;
          throw tmp42;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
});
obj[1] = function _collectCurrentChunk() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[13] = obj;
items[14] = {
  key: "_sendProfileChunk",
  value: function _sendProfileChunk(outer1_1) {
    const _client = this._client;
    let obj = callback(UIProfiler[5]);
    const getSdkMetadata = _client.getSdkMetadata;
    let sdkMetadata;
    if (getSdkMetadata != null) {
      sdkMetadata = getSdkMetadata();
    }
    const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(sdkMetadata);
    const dsn = _client.getDsn();
    let tmpResult = tmp(tmp2[5]);
    obj = { event_id: null, sent_at: null };
    tmpResult = tmp(tmp2[5]);
    obj[0] = tmpResult.uuid4();
    obj[1] = new Date().toISOString();
    let tmp6 = sdkMetadataForEnvelopeHeader;
    if (sdkMetadataForEnvelopeHeader) {
      obj = { sdk: null };
      obj[0] = sdkMetadataForEnvelopeHeader;
      tmp6 = obj;
    }
    const merged = Object.assign(tmp6);
    let tmp8 = _client.getOptions().tunnel && dsn;
    if (tmp8) {
      const obj1 = { dsn: null };
      obj1[0] = tmp(tmp2[5]).dsnToString(dsn);
      tmp8 = obj1;
      const tmpResult1 = tmp(tmp2[5]);
    }
    const merged1 = Object.assign(tmp8);
    const items = [{ type: "profile_chunk" }, outer1_1];
    const items1 = [items];
    const date = new Date();
    _client.sendEnvelope(tmpResult.createEnvelope(obj, items1)).then(null, (arg0) => {
      if (callback(table[4]).DEBUG_BUILD) {
        const debug = callback(table[5]).debug;
        debug.error("Error while sending profile chunk envelope:", arg0);
      }
    });
  }
};

export const UIProfiler = _createClass(UIProfiler, items);