// discord_app/modules/collectibles/CollectiblesDebugStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

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