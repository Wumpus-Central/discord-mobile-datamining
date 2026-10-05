// _runtime/00976_UIProfiler.js
import _mod693 from "metro/00693__.js";
import _mod948 from "metro/00948__.js";
import MAX_PROFILE_DURATION_MS from "00977_MAX_PROFILE_DURATION_MS.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let closure_2, closure_3, closure_5, size;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_0;
class UIProfiler {
  constructor() {
    _classCallCheck(this, UIProfiler);
    this._client = undefined;
    this._profiler = undefined;
    this._chunkTimer = undefined;
    this._profilerId = undefined;
    this._isRunning = false;
    this._sessionSampled = false;
    this._lifecycleMode = undefined;
    this._activeRootSpanIds = new Set();
    new Set();
    this._rootSpanTimeouts = new Map();
    new Map();
  }
}
const entry = {
  key: "initialize",
  value: function initialize(getOptions) {
    let profileLifecycle;
    let shouldProfileSessionResult;
    let tmpResult;
    const obj = {
      _profilerId: tmpResult.uuid4(),
      _client: getOptions,
      _sessionSampled: shouldProfileSessionResult,
      _lifecycleMode: profileLifecycle,
    };
    profileLifecycle = getOptions.getOptions().profileLifecycle;
    const obj2 = MAX_PROFILE_DURATION_MS;
    shouldProfileSessionResult = obj2.shouldProfileSession(getOptions.getOptions());
    if (_mod948.DEBUG_BUILD) {
      const debug = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Profiling] Initializing profiler (lifecycle='" + profileLifecycle + "').");
    }
    if (!shouldProfileSessionResult) {
      if (_mod948.DEBUG_BUILD) {
        const debug2 = _mod693.debug;
        debug2.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization.");
      }
    }
    tmpResult = _mod693;
    if ("trace" === profileLifecycle) {
      const result = obj._setupTraceLifecycleListeners(getOptions);
    }
  },
};
let items = [
  entry,
  {
    key: "start",
    value: function start() {
      const self = this;
      if ("trace" !== this._lifecycleMode) {
        if (self._isRunning) {
          if (_mod948.DEBUG_BUILD) {
            const debug3 = _mod693.debug;
            debug3.warn("[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.");
          }
        } else if (self._sessionSampled) {
          self._beginProfiling();
        } else if (_mod948.DEBUG_BUILD) {
          const debug2 = _mod693.debug;
          debug2.warn("[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.");
        }
      } else if (_mod948.DEBUG_BUILD) {
        const debug = _mod693.debug;
        debug.warn(
          '[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.start()` are ignored in trace mode.',
        );
      }
    },
  },
  {
    key: "stop",
    value: function stop() {
      const self = this;
      if ("trace" !== this._lifecycleMode) {
        if (self._isRunning) {
          self._endProfiling();
        } else if (_mod948.DEBUG_BUILD) {
          const debug2 = _mod693.debug;
          debug2.warn("[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.");
        }
      } else if (_mod948.DEBUG_BUILD) {
        const debug = _mod693.debug;
        debug.warn(
          '[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.stop()` are ignored in trace mode.',
        );
      }
    },
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
              size = self._activeRootSpanIds.size;
              if (1 === size) {
                if (_mod948.DEBUG_BUILD) {
                  const debug = _mod693.debug;
                  debug.log("[Profiling] Detected already active root span during setup. Active root spans now:", size);
                }
                self._beginProfiling();
              }
            }
          }
        }
      }
    },
  },
  {
    key: "_beginProfiling",
    value: function _beginProfiling() {
      const self = this;
      if (!this._isRunning) {
        self._isRunning = true;
        if (_mod948.DEBUG_BUILD) {
          const debug = _mod693.debug;
          debug.log("[Profiling] Started profiling with profiler ID:", self._profilerId);
        }
        const tmpResult = _mod693;
        const globalScope = tmpResult.getGlobalScope();
        const obj = { profiler_id: self._profilerId };
        globalScope.setContext("profile", obj);
        const result = self._startProfilerInstance();
        if (self._profiler) {
          const result1 = self._startPeriodicChunking();
        } else {
          if (_mod948.DEBUG_BUILD) {
            const debug2 = _mod693.debug;
            debug2.log("[Profiling] Failed to start JS Profiler; stopping.");
          }
          self._resetProfilerInfo();
        }
      }
    },
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
        const _collectCurrentChunkResult = self._collectCurrentChunk();
        _collectCurrentChunkResult.catch((error) => {
          if (_mod948.DEBUG_BUILD) {
            const debug = _mod693.debug;
            debug.error("[Profiling] Failed to collect current profile chunk on `stop()`:", error);
          }
        });
        if ("manual" === self._lifecycleMode) {
          const obj = _mod693;
          const globalScope = obj.getGlobalScope();
          globalScope.setContext("profile", {});
        }
      }
    },
  },
  {
    key: "_setupTraceLifecycleListeners",
    value: function _setupTraceLifecycleListeners(on) {
      const self = this;
      on.on("spanStart", (isRecording) => {
        if (self._sessionSampled) {
          const tmpResult = _mod693;
          if (isRecording === tmpResult.getRootSpan(isRecording)) {
            if (isRecording.isRecording()) {
              const spanId = isRecording.spanContext().spanId;
              if (spanId) {
                const _activeRootSpanIds = self._activeRootSpanIds;
                if (!_activeRootSpanIds.has(spanId)) {
                  const result = self._registerTraceRootSpan(spanId);
                  size = self._activeRootSpanIds.size;
                  if (1 === size) {
                    if (_mod948.DEBUG_BUILD) {
                      const debug3 = _mod693.debug;
                      const _HermesInternal = HermesInternal;
                      debug3.log(
                        "[Profiling] Root span " +
                          spanId +
                          " started. Profiling active while there are active root spans (count=" +
                          size +
                          ").",
                      );
                    }
                    self._beginProfiling();
                  }
                }
              }
            } else if (_mod948.DEBUG_BUILD) {
              const debug2 = _mod693.debug;
              debug2.log("[Profiling] Discarding profile because root span was not sampled.");
            }
          }
        } else if (_mod948.DEBUG_BUILD) {
          const debug = _mod693.debug;
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
              size = self._activeRootSpanIds.size;
              if (_mod948.DEBUG_BUILD) {
                let debug = _mod693.debug;
                const _HermesInternal = HermesInternal;
                debug.log(
                  "[Profiling] Root span with ID " +
                    spanId +
                    " ended. Will continue profiling for as long as there are active root spans (currently: " +
                    size +
                    ").",
                );
              }
              if (0 === size) {
                const _collectCurrentChunkResult = self._collectCurrentChunk();
                _collectCurrentChunkResult.catch((error) => {
                  if (self(closure_1_1[4]).DEBUG_BUILD) {
                    const debug = self(closure_1_1[5]).debug;
                    debug.error("[Profiling] Failed to collect current profile chunk on last `spanEnd`:", error);
                  }
                });
                self._endProfiling();
              }
            }
          }
        }
      });
    },
  },
  {
    key: "_resetProfilerInfo",
    value: function _resetProfilerInfo() {
      this._isRunning = false;
      const obj = _mod693;
      const globalScope = obj.getGlobalScope();
      globalScope.setContext("profile", {});
    },
  },
  {
    key: "_clearAllRootSpanTimeouts",
    value: function _clearAllRootSpanTimeouts() {
      const _rootSpanTimeouts1 = this._rootSpanTimeouts;
      const item = _rootSpanTimeouts1.forEach((item) => clearTimeout(item));
      const _rootSpanTimeouts = this._rootSpanTimeouts;
      _rootSpanTimeouts.clear();
    },
  },
  {
    key: "_registerTraceRootSpan",
    value: function _registerTraceRootSpan(spanId) {
      const self = this;
      let closure_0 = spanId;
      const _activeRootSpanIds = this._activeRootSpanIds;
      _activeRootSpanIds.add(spanId);
      const _rootSpanTimeouts = this._rootSpanTimeouts;
      const result = _rootSpanTimeouts.set(
        spanId,
        setTimeout(() => self._onRootSpanTimeout(spanId), 300000),
      );
    },
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
        const obj = MAX_PROFILE_DURATION_MS;
        const startJSSelfProfileResult = obj.startJSSelfProfile();
        if (startJSSelfProfileResult) {
          this._profiler = startJSSelfProfileResult;
        } else if (_mod948.DEBUG_BUILD) {
          const debug = _mod693.debug;
          debug.log("[Profiling] Failed to start JS Profiler.");
        }
      }
    },
  },
  {
    key: "_startPeriodicChunking",
    value: function _startPeriodicChunking() {
      const self = this;
      if (this._isRunning) {
        const _setTimeout = setTimeout;
        tmp._chunkTimer = setTimeout(() => {
          const _collectCurrentChunkResult = self._collectCurrentChunk();
          _collectCurrentChunkResult.catch((error) => {
            if (self(closure_1_1[4]).DEBUG_BUILD) {
              const debug = self(closure_1_1[5]).debug;
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
        }, 60000);
      }
    },
  },
  {
    key: "_onRootSpanTimeout",
    value: function _onRootSpanTimeout(spanId) {
      const self = this;
      const _rootSpanTimeouts = this._rootSpanTimeouts;
      if (_rootSpanTimeouts.has(spanId)) {
        const _rootSpanTimeouts2 = self._rootSpanTimeouts;
        _rootSpanTimeouts2.delete(spanId);
        const _activeRootSpanIds = self._activeRootSpanIds;
        if (_activeRootSpanIds.has(spanId)) {
          if (_mod948.DEBUG_BUILD) {
            const debug = _mod693.debug;
            const _HermesInternal = HermesInternal;
            debug.log(
              "[Profiling] Reached 5-minute timeout for root span " +
                spanId +
                ". You likely started a manual root span that never called `.end()`.",
            );
          }
          const _activeRootSpanIds2 = self._activeRootSpanIds;
          _activeRootSpanIds2.delete(spanId);
          if (0 === self._activeRootSpanIds.size) {
            self._endProfiling();
          }
        }
      }
    },
  },
  ,
];
const entry1 = {
  key: "_collectCurrentChunk",
  value: function _collectCurrentChunk() {
    return closure_0(...arguments);
  },
};
closure_0 = _asyncToGenerator(async function () {
  const self = this;
  let c6 = 0;
  let c7 = 0;
  let c4 = 0;
  return (async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_3 = self;
            closure_2 = tmp;
            closure_0 = undefined;
            closure_1 = undefined;
            debug = self._profiler;
            self._profiler = undefined;
            if (debug) {
              c4 = 1;
              debug = debug.stop();
              c6 = 2;
              c7 = 1;
              return { value: debug, done: false };
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
          closure_3 = closure_5;
          debug = self;
          if (self(debug[4]).DEBUG_BUILD) {
            const debug3 = self(debug[5]).debug;
            debug3.log("[Profiling] Error while stopping JS Profiler for chunk:", closure_3);
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c7 = 3;
          return { value, done: true };
        } else {
          closure_0 = value;
          const obj6 = self(debug[3]);
          closure_1 = obj6.createProfileChunkPayload(closure_0, closure_3._client, closure_3._profilerId);
          const obj7 = self(debug[3]);
          debug = obj7.validateProfileChunk(closure_1);
          if ("reason" in debug) {
            debug = self;
            if (self(debug[4]).DEBUG_BUILD) {
              const debug2 = self(debug[5]).debug;
              debug2.log(
                "[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):",
                debug.reason,
              );
            }
            c4 = 0;
            c7 = 3;
            return { value: undefined, done: true };
          } else {
            closure_3._sendProfileChunk(closure_1);
            debug = self;
            if (self(debug[4]).DEBUG_BUILD) {
              debug = self(debug[5]).debug;
              debug.log("[Profiling] Collected browser profile chunk.");
            }
            c4 = 0;
          }
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp35) {
        closure_5 = tmp35;
        if (0 === c4) {
          c7 = 3;
          throw tmp35;
        } else {
          c6 = 1;
        }
      }
    }
  })();
});
items[13] = entry1;
items[14] = {
  key: "_sendProfileChunk",
  value: function _sendProfileChunk(arg0) {
    let date;
    let tmpResult3;
    let tmpResult4;
    const _client = this._client;
    const getSdkMetadata = _client.getSdkMetadata;
    let sdkMetadata;
    const getSdkMetadataForEnvelopeHeader = _mod693.getSdkMetadataForEnvelopeHeader;
    if (getSdkMetadata != null) {
      sdkMetadata = getSdkMetadata();
    }
    const sdkMetadataForEnvelopeHeader = getSdkMetadataForEnvelopeHeader(sdkMetadata);
    const dsn = _client.getDsn();
    const tunnel = _client.getOptions().tunnel;
    const obj = { event_id: tmpResult3.uuid4(), sent_at: date.toISOString() };
    const createEnvelope = _mod693.createEnvelope;
    _mod693;
    tmpResult3 = _mod693;
    let tmp8 = sdkMetadataForEnvelopeHeader;
    date = new Date();
    if (tmp8) {
      tmp8 = { sdk: sdkMetadataForEnvelopeHeader };
      const obj2 = { sdk: sdkMetadataForEnvelopeHeader };
    }
    const merged = Object.assign(tmp8);
    let tmp10 = tunnel && dsn;
    if (tmp10) {
      const obj3 = { dsn: tmpResult4.dsnToString(dsn) };
      tmp10 = obj3;
      tmpResult4 = _mod693;
    }
    const merged1 = Object.assign(tmp10);
    const items = [{ type: "profile_chunk" }, arg0];
    const items1 = [items];
    const sendEnvelopeResult = _client.sendEnvelope(createEnvelope(obj, items1));
    sendEnvelopeResult.then(null, (arg0) => {
      if (_mod948.DEBUG_BUILD) {
        const debug = _mod693.debug;
        debug.error("Error while sending profile chunk envelope:", arg0);
      }
    });
  },
};
const UIProfiler_export = _createClass(UIProfiler, items);

export { UIProfiler_export as UIProfiler };
