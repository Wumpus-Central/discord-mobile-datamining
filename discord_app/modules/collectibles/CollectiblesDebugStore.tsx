// === Module 7557: CollectiblesDebugStore ===

// Module 7557 (CollectiblesDebugStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const useCollectiblesDebugStore = module_560.create((arg0) => {
  closure_0 = arg0;
  return {
    logs: [],
    addLog(arg0) {
      closure_0 = arg0;
      return closure_0((logs) => {
        const obj = { logs: null };
        const items = [...logs.logs];
        const date = new Date();
        items[tmp] = "[" + new Date().toISOString().split("T")[0] + "] " + closure_0;
        obj.logs = items;
        return obj;
      });
    },
    clearLogs() {
      return closure_0({ logs: [] });
    }
  };
});
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesDebugStore.tsx");

export { useCollectiblesDebugStore };
export const addDebugLog = function addDebugLog(arg0) {
  const date = new Date();
  const state = obj.getState();
  state.addLog("[" + new Date().toLocaleTimeString("en-US", { hour12: false }) + "] " + arg0);
};