// === Module 12524: useReportToModChannelFiltersStore ===

// Module 12524 (useReportToModChannelFiltersStore)
import set from "set" /* 2 */;
import keys from "keys" /* 641 */;
import createJSONStorage from "createJSONStorage" /* 4345 */;

let obj = { name: "report-to-mod-channel-storage", storage: null };
obj[1] = createJSONStorage.createJSONStorage(() => importDefault(7462));
obj = keys.create(createJSONStorage.persist((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return {
    channelShowResolvedFlags: {},
    setShowResolvedFlags(arg0, arg1) {
      const callback = arg0;
      closure_1 = arg1;
      return callback(closure_1_2[2]).batchUpdates(() => {
        callback((channelShowResolvedFlags) => {
          obj = { channelShowResolvedFlags: null };
          obj = {};
          const merged = Object.assign(channelShowResolvedFlags.channelShowResolvedFlags);
          obj[closure_0] = closure_1;
          obj[0] = obj;
          return obj;
        });
      });
    },
    getShowResolvedFlags(arg0) {
      let flag = callback2().channelShowResolvedFlags[arg0];
      if (flag == null) {
        flag = true;
      }
      return flag;
    }
  };
}, obj));
const result = set.fileFinishedImporting("modules/report_to_mod/ReportToModChannelStore.tsx");

export const useReportToModChannelFiltersStore = obj;
export const useShouldShowResolvedFlagsForChannel = function useShouldShowResolvedFlagsForChannel(arg0) {
  closure_0 = arg0;
  obj = obj();
  if (null == arg0) {
    obj = { showResolvedFlags: true, setShowResolvedFlags: null };
    obj[1] = function setShowResolvedFlags() {

    };
  } else {
    let flag = obj.getShowResolvedFlags(arg0);
    if (flag == null) {
      flag = true;
    }
    obj = { showResolvedFlags: null, setShowResolvedFlags: null };
    obj[0] = flag;
    obj[1] = function setShowResolvedFlags(arg0) {
      return obj.setShowResolvedFlags(closure_0, arg0);
    };
  }
  return obj;
};