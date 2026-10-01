// === Module 16537: VibegrationsMcpConnectionPanel ===

// Module 16537 (VibegrationsMcpConnectionPanel)
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const fetchProjectMcpConnection = fn(12851).fetchProjectMcpConnection;
let closure_4 = {
  setTimeout(arg0, arg1) {
    return setTimeout(arg0, arg1);
  },
  clearTimeout(arg0) {
    return clearTimeout(arg0);
  },
  now() {
    return Date.now();
  }
};
class McpConnectionPanel {
  constructor(arg0, arg1) {
    tmp = importDefault;
    if (importDefault === undefined) {
      tmp = closure_4;
    }
    merged = Object.assign({ state: null, generation: 0, timer: null, disposed: false });
    merged[0] = { connection: null, loading: true, failed: false };
    merged.fetchConnection = global;
    merged.onChange = fn;
    merged.timers = tmp;
    return merged;
  }
}
const prototype = McpConnectionPanel.prototype;
prototype["getState"] = function getState() {
  return this.state;
};
prototype["mint"] = function mint(dependencyMap) {
  closure_0 = dependencyMap;
  const self = this;
  return (async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            closure_1 = tmp3;
            closure_0 = tmp52;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            let connection2;
            const sum = self.generation + 1;
            self.generation = sum;
            closure_128_1 = sum;
            if (closure_0) {
              self.cancelTimer();
            }
            const obj4 = {};
            const merged = Object.assign(self.state);
            obj4.loading = true;
            obj4.failed = false;
            self.update(obj4);
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj5 = { value: self.fetchConnection(closure_0), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c2 = 0;
          if (closure_129_1.isStale(closure_128_1)) {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            let connection = null;
            if (!closure_129_0) {
              connection = closure_129_1.state.connection;
            }
            const obj6 = { connection, loading: false, failed: true };
            closure_129_1.update(obj6);
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
          closure_128_0 = value;
          c2 = 0;
          if (closure_129_1.isStale(closure_128_1)) {
            c4 = 3;
          } else {
            connection2 = closure_129_1.state.connection;
            if (null != connection2) {
              if (connection2.url === closure_128_0.url) {
                if (null != closure_129_1.timer) {
                  const obj = {};
                  const merged1 = Object.assign(closure_129_1.state);
                  obj.loading = false;
                  obj.failed = false;
                  closure_129_1.update(obj);
                }
              }
            }
          }
          const obj9 = { connection: closure_128_0, loading: false, failed: false };
          closure_129_1.update(obj9);
          closure_129_1.armTimer(closure_128_0);
        }
      } catch (tmp51) {
        if (tmp4 === c2) {
          c4 = tmp2;
          throw tmp51;
        } else {
          c3 = tmp;
        }
        tmp52 = c2;
      }
    }
  })();
};
prototype["dispose"] = function dispose() {
  this.disposed = true;
  this.generation = this.generation + 1;
  this.cancelTimer();
};
prototype["isStale"] = function isStale(arg0) {
  let disposed = this.disposed;
  if (!disposed) {
    disposed = arg0 !== tmp.generation;
  }
  return disposed;
};
prototype["armTimer"] = function armTimer(expiresAtMs) {
  const self = this;
  this.cancelTimer();
  const timers = this.timers;
  const timers2 = this.timers;
  this.timer = timers2.setTimeout(() => {
    self.timer = null;
    self.mint(false).catch(() => {

    });
  }, Math.max(expiresAtMs.expiresAtMs - timers.now() + 1000, 15000));
};
prototype["cancelTimer"] = function cancelTimer() {
  const self = this;
  if (null != this.timer) {
    const timers = self.timers;
    timers.clearTimeout(self.timer);
    self.timer = null;
  }
};
prototype["update"] = function update(state) {
  const self = this;
  this.state = state;
  if (!this.disposed) {
    self.onChange(state);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsMcpConnectionPanel.tsx");

export const MCP_CONNECTION_MIN_REFETCH_MS = 15000;
export { McpConnectionPanel };
export const useMcpConnectionPanel = function useMcpConnectionPanel(projectId) {
  _slicedToArray = projectId;
  [tmp2, asyncGeneratorStep] = noop.useState({ connection: null, loading: true, failed: false });
  noop = noop.useRef(null);
  const items = [projectId];
  const effect = noop.useEffect(() => {
    if (typeof McpConnectionPanel === "function") {
      const fn = (regenerate) => fetchProjectMcpConnection(merged, { regenerate });
      const merged = Object.assign({ state: null, generation: 0, timer: null, disposed: false });
      merged[0] = { connection: null, loading: true, failed: false };
      merged.fetchConnection = fn;
      merged.onChange = tmp2;
      merged.timers = timers;
      ref.current = merged;
      merged.mint(false).catch(() => {

      });
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
  const obj = {};
  let merged = Object.assign(tmp2);
  obj.mint = noop.useCallback((dependencyMap) => {
    const current = ref.current;
    if (current != null) {
      current.mint(dependencyMap).catch(() => {

      });
      const mintResult = current.mint(dependencyMap);
    }
  }, []);
  return obj;
};