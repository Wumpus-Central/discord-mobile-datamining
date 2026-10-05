// discord_app/modules/collectibles/CollectiblesDebugStore.tsx
import 00570__ from "../../../_runtime/metro/00570__.js";
import size from "../../../_runtime/metro/00002__.js";

const useCollectiblesDebugStore = module_570.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    logs: [],
    addLog(arg0) {
      closure_0 = arg0;
      return closure_0((logs) => {
        let items;
        const obj = { logs: items };
        items = [...logs.logs];
        const date = new Date();
        const str = date.toISOString();
        items[tmp] = "[" + str.split("T")[0] + "] " + closure_0;
        return obj;
      });
    },
    clearLogs() {
      return closure_0({ logs: [] });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesDebugStore.tsx");

export { useCollectiblesDebugStore };
export const addDebugLog = function addDebugLog(arg0) {
  const date = new Date();
  const toLocaleTimeStringResult = date.toLocaleTimeString("en-US", { hour12: false });
  const state = obj.getState();
  state.addLog("[" + toLocaleTimeStringResult + "] " + arg0);
};