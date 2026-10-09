// discord_app/modules/report_to_mod/ReportToModChannelStore.tsx
import c from "../../../_runtime/00576_c.js";
import 00570__ from "../../../_runtime/metro/00570__.js";
import "module_4951";
import 04951__ from "../../../_runtime/metro/04951__.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let obj = { name: "report-to-mod-channel-storage", storage: null };
obj.storage = module_4951.createJSONStorage(() => require("LocalStorageWrapper"));
let obj2 = module_570.create(module_4951.persist((arg0, arg1) => {
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
export const useShouldShowResolvedFlagsForChannel = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowResolvedFlagsForChannel(arg0) {
  closure_0 = arg0;
  const cResult = c.c(10);
  obj2 = obj2();
  if (null == arg0) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {
        showResolvedFlags: true,
        setShowResolvedFlags() {

            }
      };
      cResult[0] = obj3;
      let first = obj3;
    } else {
      first = cResult[0];
    }
  } else {
    if (cResult[1] === arg0) {
      if (cResult[2] === obj2) {
        let tmp2 = cResult[3];
      }
      if (cResult[4] === arg0) {
        if (cResult[5] === obj2) {
          let tmp3 = cResult[6];
        }
        if (cResult[7] === tmp2) {
          if (cResult[8] === tmp3) {
            let tmp4 = cResult[9];
          }
          return tmp4;
        }
        const obj4 = { showResolvedFlags: tmp2, setShowResolvedFlags: tmp3 };
        cResult[7] = tmp2;
        cResult[8] = tmp3;
        cResult[9] = obj4;
        tmp4 = obj4;
      }
      const fn = function h(arg0) {
        return obj2.setShowResolvedFlags(closure_0, arg0);
      };
      cResult[4] = arg0;
      cResult[5] = obj2;
      cResult[6] = fn;
      tmp3 = fn;
    }
    let flag = obj2.getShowResolvedFlags(arg0);
    if (flag == null) {
      flag = true;
    }
    cResult[1] = arg0;
    cResult[2] = obj2;
    cResult[3] = flag;
    tmp2 = flag;
  }
}) : (function useShouldShowResolvedFlagsForChannel(arg0) {
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
});