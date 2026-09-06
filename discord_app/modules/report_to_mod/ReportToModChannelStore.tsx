// === Module 12762: ReportToModChannelStore ===

// Module 12762 (ReportToModChannelStore)
import module_560 from "module_560" /* 560 */;
import "module_4430";
import module_4430 from "module_4430" /* 4430 */;
import size from "module_2" /* 2 */;

let useReportToModChannelFiltersStore = { name: "report-to-mod-channel-storage", storage: null };
useReportToModChannelFiltersStore.storage = module_4430.createJSONStorage(() => require("LocalStorageWrapper"));
useReportToModChannelFiltersStore = module_560.create(module_4430.persist((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return {
    channelShowResolvedFlags: {},
    setShowResolvedFlags(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      return closure_0(dependencyMap[2]).batchUpdates(() => {
        closure_0((channelShowResolvedFlags) => {
          channelShowResolvedFlags = { channelShowResolvedFlags: null };
          channelShowResolvedFlags = {};
          const merged = Object.assign(channelShowResolvedFlags.channelShowResolvedFlags);
          channelShowResolvedFlags[closure_1_0] = closure_1_1;
          channelShowResolvedFlags.channelShowResolvedFlags = channelShowResolvedFlags;
          return channelShowResolvedFlags;
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
}, useReportToModChannelFiltersStore));
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModChannelStore.tsx");

export { useReportToModChannelFiltersStore };
export const useShouldShowResolvedFlagsForChannel = function useShouldShowResolvedFlagsForChannel(arg0) {
  closure_0 = arg0;
  obj = obj();
  if (null == arg0) {
    obj = {
      showResolvedFlags: true,
      setShowResolvedFlags() {

        }
    };
  } else {
    let flag = obj.getShowResolvedFlags(arg0);
    if (flag == null) {
      flag = true;
    }
    obj = {
      showResolvedFlags: flag,
      setShowResolvedFlags(arg0) {
          return obj.setShowResolvedFlags(closure_0, arg0);
        }
    };
  }
  return obj;
};