// discord_app/modules/report_to_mod/ReportToModChannelStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import "module_4698";
import 04698__ from "../../../_runtime/metro/04698__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let obj = { name: "report-to-mod-channel-storage", storage: null };
obj.storage = module_4698.createJSONStorage(() => require("LocalStorageWrapper"));
let obj2 = module_560.create(module_4698.persist((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return {
    channelShowResolvedFlags: {},
    setShowResolvedFlags(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      return closure_0(dependencyMap[2]).batchUpdates(() => {
        closure_0((channelShowResolvedFlags) => {
          const obj = { channelShowResolvedFlags: null };
          obj2 = {};
          const merged = Object.assign(channelShowResolvedFlags.channelShowResolvedFlags);
          obj2[closure_1_0] = closure_1_1;
          obj.channelShowResolvedFlags = obj2;
          return obj;
        });
      });
    },
    getShowResolvedFlags(arg0) {
      let flag = closure_1().channelShowResolvedFlags[arg0];
      if (flag == null) {
        flag = true;
      }
      return flag;
    }
  };
}, obj));
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModChannelStore.tsx");

export const useReportToModChannelFiltersStore = obj2;
export const useShouldShowResolvedFlagsForChannel = function useShouldShowResolvedFlagsForChannel(arg0) {
  closure_0 = arg0;
  const obj = obj2();
  if (null == arg0) {
    obj2 = {
      showResolvedFlags: true,
      setShowResolvedFlags() {

        }
    };
    let obj3 = obj2;
  } else {
    let flag = obj.getShowResolvedFlags(arg0);
    if (flag == null) {
      flag = true;
    }
    obj3 = {
      showResolvedFlags: flag,
      setShowResolvedFlags(arg0) {
          return obj.setShowResolvedFlags(closure_0, arg0);
        }
    };
  }
  return obj3;
};