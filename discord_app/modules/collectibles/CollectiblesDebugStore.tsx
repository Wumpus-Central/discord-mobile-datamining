// discord_app/modules/collectibles/CollectiblesDebugStore.tsx
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  return {
    logs: [],
    addLog(arg0) {
      const callback = arg0;
      return callback((logs) => {
        obj = { logs: null };
        const items = [...logs.logs];
        const date = new Date();
        items[tmp] = "[" + new Date().toISOString().split("T")[0] + "] " + closure_0;
        obj[0] = items;
        return obj;
      });
    },
    clearLogs() {
      return callback({ logs: [] });
    }
  };
});
const result = set.fileFinishedImporting("modules/collectibles/CollectiblesDebugStore.tsx");

export const useCollectiblesDebugStore = obj;
export const addDebugLog = function addDebugLog(arg0) {
  const date = new Date();
  const state = obj.getState();
  state.addLog("[" + new Date().toLocaleTimeString("en-US", { hour12: false }) + "] " + arg0);
};