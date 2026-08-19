// === Module 1100: UIProfiler ===

// Module 1100 (UIProfiler)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const UIProfiler = dependencyMap;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_0;
class UIProfiler {
  constructor() {
    tmp = closure_2(this, UIProfiler);
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
      const debug = callback(UIProfiler[5]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Profiling] Initializing profiler (lifecycle='" + profileLifecycle + "').");
    }
    if (!shouldProfileSessionResult) {
      if (callback(UIProfiler[4]).DEBUG_BUILD) {
        const debug2 = callback(UIProfiler[5]).debug;
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
    const tmpResult = callback(UIProfiler[5]);
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
            const debug3 = callback(UIProfiler[5]).debug;
            debug3.warn("[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.");
          }
        } else if (self._sessionSampled) {
          self._beginProfiling();
        } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug2 = callback(UIProfiler[5]).debug;
          debug2.warn("[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.");
        }
      } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
        const debug = callback(UIProfiler[5]).debug;
        debug.warn("[Profiling] `profileLifecycle` is set to \"trace\". Calls to `uiProfiler.start()` are ignored in trace mode.");
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
        } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug2 = callback(UIProfiler[5]).debug;
          debug2.warn("[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.");
        }
      } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
        const debug = callback(UIProfiler[5]).debug;
        debug.warn("[Profiling] `profileLifecycle` is set to \"trace\". Calls to `uiProfiler.stop()` are ignored in trace mode.");
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
                  const debug = callback(UIProfiler[5]).debug;
                  debug.log("[Profiling] Detected already active root span during setup. Active root spans now:", size);
                }
                self._beginProfiling();
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
          const debug = callback(UIProfiler[5]).debug;
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
          if (callback(UIProfiler[4]).DEBUG_BUILD) {
            const debug2 = callback(UIProfiler[5]).debug;
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
        self._collectCurrentChunk().catch((error) => {
          if (callback(table[4]).DEBUG_BUILD) {
            const debug = callback(table[5]).debug;
            debug.error("[Profiling] Failed to collect current profile chunk on `stop()`:", error);
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
                const _activeRootSpanIds = self._activeRootSpanIds;
                if (!_activeRootSpanIds.has(spanId)) {
                  const result = self._registerTraceRootSpan(spanId);
                  const size = self._activeRootSpanIds.size;
                  if (1 === size) {
                    if (self(UIProfiler[4]).DEBUG_BUILD) {
                      const debug3 = self(UIProfiler[5]).debug;
                      const _HermesInternal = HermesInternal;
                      debug3.log("[Profiling] Root span " + spanId + " started. Profiling active while there are active root spans (count=" + size + ").");
                    }
                    self._beginProfiling();
                  }
                }
              }
            } else if (self(UIProfiler[4]).DEBUG_BUILD) {
              const debug2 = self(UIProfiler[5]).debug;
              debug2.log("[Profiling] Discarding profile because root span was not sampled.");
            }
          }
          tmpResult = self(UIProfiler[5]);
        } else if (self(UIProfiler[4]).DEBUG_BUILD) {
          const debug = self(UIProfiler[5]).debug;
          debug.log("[Profiling] Span not profiled because of negative sampling decision for user session.");
        }
      });
      on.on("spanEnd", (spanContext) => {
        if (self._sessionSampled) {
          const spanId = spanContext.spanContext().spanId;
          if (spanId) {
            const _activeRootSpanIds = self._activeRootSpanIds;
            if (_activeRootSpanIds.has(spanId)) {
              const _activeRootSpanIds2 = self._activeRootSpanIds;
              _activeRootSpanIds2.delete(spanId);
              const size = self._activeRootSpanIds.size;
              if (self(UIProfiler[4]).DEBUG_BUILD) {
                let debug = self(UIProfiler[5]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("[Profiling] Root span with ID " + spanId + " ended. Will continue profiling for as long as there are active root spans (currently: " + size + ").");
              }
              if (0 === size) {
                self._collectCurrentChunk().catch((error) => {
                  if (callback(table[4]).DEBUG_BUILD) {
                    const debug = callback(table[5]).debug;
                    debug.error("[Profiling] Failed to collect current profile chunk on last `spanEnd`:", error);
                  }
                });
                self._endProfiling();
                const _collectCurrentChunkResult = self._collectCurrentChunk();
              }
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
      const item = _rootSpanTimeouts.forEach((item, index) => clearTimeout(item));
      _rootSpanTimeouts = this._rootSpanTimeouts;
      _rootSpanTimeouts.clear();
    }
  },
  {
    key: "_registerTraceRootSpan",
    value: function _registerTraceRootSpan(spanId) {
      const self = this;
      closure_0 = spanId;
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
        } else if (callback(UIProfiler[4]).DEBUG_BUILD) {
          const debug = callback(UIProfiler[5]).debug;
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
          self._collectCurrentChunk().catch((error) => {
            if (callback(table[4]).DEBUG_BUILD) {
              const debug = callback(table[5]).debug;
              debug.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", error);
            }
          });
          if (self._isRunning) {
            const result = self._startProfilerInstance();
            if (self._profiler) {
              const result1 = self._startPeriodicChunking();
            } else {
              self._resetProfilerInfo();
            }
          }
          const _collectCurrentChunkResult = self._collectCurrentChunk();
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
            const debug = callback(UIProfiler[5]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("[Profiling] Reached 5-minute timeout for root span " + closure_0 + ". You likely started a manual root span that never called `.end()`.");
          }
          const _activeRootSpanIds2 = self._activeRootSpanIds;
          _activeRootSpanIds2.delete(closure_0);
          if (0 === self._activeRootSpanIds.size) {
            self._endProfiling();
          }
        }
      }
    }
  },
,

];
obj = { key: "_collectCurrentChunk", value: null };
closure_0 = asyncGeneratorStep(function() {
  const self = this;
  c6 = 0;
  c7 = 0;
  c4 = 0;
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
            closure_3 = _self;
            closure_2 = tmp3;
            closure_1 = tmp5;
            _self = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            const _profiler = _self._profiler;
            _self._profiler = undefined;
            if (_profiler) {
              c4 = 1;
              c6 = 2;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = _profiler.stop();
              return obj1;
            }
          }
        } else {
          if (1 === tmp8) {
            c4 = 0;
            closure_3 = closure_5;
            if (self(UIProfiler[4]).DEBUG_BUILD) {
              const debug3 = self(UIProfiler[5]).debug;
              debug3.log("[Profiling] Error while stopping JS Profiler for chunk:", closure_3);
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
            closure_1 = self(UIProfiler[3]).createProfileChunkPayload(_self, closure_3._client, closure_3._profilerId);
            const obj6 = self(UIProfiler[3]);
            closure_2 = self(UIProfiler[3]).validateProfileChunk(closure_1);
            if (!("reason" in closure_2)) {
              closure_3._sendProfileChunk(UIProfiler);
              if (self(UIProfiler[4]).DEBUG_BUILD) {
                const debug = self(UIProfiler[5]).debug;
                debug.log("[Profiling] Collected browser profile chunk.");
              }
              c4 = 0;
            }
            const obj7 = self(UIProfiler[3]);
          }
          if (self(UIProfiler[4]).DEBUG_BUILD) {
            const debug2 = self(UIProfiler[5]).debug;
            debug2.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", _classCallCheck.reason);
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
  value: function _sendProfileChunk(closure_1_1) {
    const _client = this._client;
    let obj = callback(UIProfiler[5]);
    const getSdkMetadata = _client.getSdkMetadata;
    let sdkMetadata;
    if (getSdkMetadata != null) {
      sdkMetadata = getSdkMetadata();
    }
    const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(sdkMetadata);
    const dsn = _client.getDsn();
    callback(UIProfiler[5]);
    obj = { event_id: null, sent_at: null };
    const tmpResult = callback(UIProfiler[5]);
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
      obj1 = { dsn: null };
      obj1[0] = callback(UIProfiler[5]).dsnToString(dsn);
      tmp8 = obj1;
      const tmpResult1 = callback(UIProfiler[5]);
    }
    const merged1 = Object.assign(tmp8);
    const items = [{ type: "profile_chunk" }, closure_1_1];
    const items1 = [items];
    const date = new Date();
    _client.sendEnvelope(tmpResult.createEnvelope(obj, items1)).then(null, (arg0) => {
      if (callback(table[4]).DEBUG_BUILD) {
        const debug = callback(table[5]).debug;
        debug.error("Error while sending profile chunk envelope:", arg0);
      }
    });
    const sendEnvelopeResult = _client.sendEnvelope(tmpResult.createEnvelope(obj, items1));
  }
};

export const UIProfiler = _createClass(UIProfiler, items);