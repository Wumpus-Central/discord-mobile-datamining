// discord_app/modules/conjure/external_connections/ConjureMcpConnectionPanel.tsx
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c3, c4;

let _slicedToArray = _slicedToArray_mod;
const fetchProjectMcpConnection = ConjureConnectionStore.fetchProjectMcpConnection;
let closure_6 = {
  setTimeout(arg0, arg1) {
    return setTimeout(arg0, arg1);
  },
  clearTimeout(arg0) {
    return clearTimeout(arg0);
  },
  now() {
    return Date.now();
  },
};
class McpConnectionPanel {
  constructor(fetchConnection, onChange) {
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = closure_6;
    }
    const merged = Object.assign({ state: null, generation: 0, timer: null, disposed: false });
    merged[0] = { connection: null, loading: true, failed: false };
    merged.fetchConnection = fetchConnection;
    merged.onChange = onChange;
    merged.timers = tmp;
    return merged;
  }
  getState() {
    return this.state;
  }
  mint(dependencyMap) {
    let logger;
    let closure_0 = dependencyMap;
    const self = this;
    return (async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
        try {
          let connection;
          let connection2;
          let c1;
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
              let closure_1 = tmp;
              connection = undefined;
              connection2 = undefined;
              const sum = self.generation + 1;
              self.generation = sum;
              c1 = sum;
              const tmp60 = connection;
              if (tmp60) {
                self.cancelTimer();
              }
              const obj4 = { loading: true, failed: false };
              const update3 = self.update;
              const merged = Object.assign(self.state);
              update3(obj4);
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: self.fetchConnection(connection), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            c2 = 0;
            if (closure_129_1.isStale(c1)) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            } else {
              connection = null;
              const update2 = closure_129_1.update;
              if (!closure_129_0) {
                connection = closure_129_1.state.connection;
              }
              const obj6 = { connection, loading: false, failed: true };
              update2(obj6);
              c4 = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            connection = value;
            c2 = 0;
            if (!closure_129_1.isStale(c1)) {
              connection2 = closure_129_1.state.connection;
              if (null != connection2) {
                if (connection2.url === connection.url) {
                  if (null != closure_129_1.timer) {
                    const obj = { loading: false, failed: false };
                    const update = closure_129_1.update;
                    const merged1 = Object.assign(closure_129_1.state);
                    update(obj);
                  }
                }
              }
              const obj9 = { connection, loading: false, failed: false };
              closure_129_1.update(obj9);
              closure_129_1.armTimer(connection);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp48) {
          if (0 === c2) {
            c4 = 3;
            throw tmp48;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  }
  dispose() {
    this.disposed = true;
    this.generation = this.generation + 1;
    this.cancelTimer();
  }
  isStale(arg0) {
    const disposed = this.disposed || arg0 !== tmp.generation;
    return disposed;
  }
  armTimer(expiresAtMs) {
    const self = this;
    this.cancelTimer();
    const timers = this.timers;
    const timers2 = this.timers;
    this.timer = timers2.setTimeout(
      () => {
        self.timer = null;
        const mintResult = self.mint(false);
        mintResult.catch(() => {});
      },
      Math.max(expiresAtMs.expiresAtMs - timers.now() + 1000, 15000),
    );
  }
  cancelTimer() {
    const self = this;
    if (null != this.timer) {
      const timers = self.timers;
      timers.clearTimeout(self.timer);
      self.timer = null;
    }
  }
  update(state) {
    const self = this;
    this.state = state;
    if (!this.disposed) {
      self.onChange(state);
    }
  }
}
const prototype = McpConnectionPanel.prototype;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let ref;
      let timers;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp8;
      let tmp9;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { connection: null, loading: true, failed: false };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      [tmp4, dependencyMap] = _slicedToArray(react.useState(first), 2);
      const tmp3 = _slicedToArray(react.useState(first), 2);
      _slicedToArray = react.useRef(null);
      if (cResult[1] !== arg0) {
        let fn = function u() {
          if (typeof McpConnectionPanel === "function") {
            const fn = (regenerate) => {
              const obj = { regenerate };
              return fetchProjectMcpConnection(merged, obj);
            };
            const merged = Object.assign({ state: null, generation: 0, timer: null, disposed: false });
            merged[0] = { connection: null, loading: true, failed: false };
            merged.fetchConnection = fn;
            merged.onChange = tmp2;
            merged.timers = timers;
            ref.current = merged;
            const mintResult = merged.mint(false);
            mintResult.catch(() => {});
            return () => {
              merged.dispose();
              if (ref.current === merged) {
                tmp2.current = null;
              }
            };
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
        const items = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f(dependencyMap) {
          const current = ref.current;
          if (current != null) {
            const mintResult = current.mint(dependencyMap);
            mintResult.catch(() => {});
          }
        };
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] !== tmp4) {
        const obj4 = { mint: tmp8 };
        let merged = Object.assign(tmp4);
        cResult[5] = tmp4;
        cResult[6] = obj4;
        tmp9 = obj4;
      } else {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
  : (arg0) => {
      let ref;
      let timers;
      let tmp2;
      let closure_0 = arg0;
      [tmp2, dependencyMap] = _slicedToArray(react.useState({ connection: null, loading: true, failed: false }), 2);
      const tmp = _slicedToArray(react.useState({ connection: null, loading: true, failed: false }), 2);
      _slicedToArray = react.useRef(null);
      const items = [arg0];
      const effect = react.useEffect(() => {
        if (typeof McpConnectionPanel === "function") {
          const fn = (regenerate) => {
            const obj = { regenerate };
            return fetchProjectMcpConnection(merged, obj);
          };
          const merged = Object.assign({ state: null, generation: 0, timer: null, disposed: false });
          merged[0] = { connection: null, loading: true, failed: false };
          merged.fetchConnection = fn;
          merged.onChange = tmp2;
          merged.timers = timers;
          ref.current = merged;
          const mintResult = merged.mint(false);
          mintResult.catch(() => {});
          return () => {
            merged.dispose();
            if (ref.current === merged) {
              tmp2.current = null;
            }
          };
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, items);
      let obj = {
        mint: react.useCallback((dependencyMap) => {
          const current = ref.current;
          if (current != null) {
            const mintResult = current.mint(dependencyMap);
            mintResult.catch(() => {});
          }
        }, []),
      };
      let merged = Object.assign(tmp2);
      return obj;
    };
const result = size.fileFinishedImporting("modules/conjure/external_connections/ConjureMcpConnectionPanel.tsx");

export const MCP_CONNECTION_MIN_REFETCH_MS = 15000;
export { McpConnectionPanel };
export const useMcpConnectionPanel = tmp2;
