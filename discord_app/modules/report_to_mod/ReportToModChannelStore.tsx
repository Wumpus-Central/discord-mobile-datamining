// discord_app/modules/report_to_mod/ReportToModChannelStore.tsx
import react from "../../../_runtime/00576_react.js";
import 00570__ from "../../../_runtime/metro/00570__.js";
import combine_mod from "../../../_runtime/04750_combine.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const create = module_570.create;
let combine = combine_mod;
let obj = { name: "report-to-mod-channel-storage", storage: combine.createJSONStorage(() => require("LocalStorageWrapper")) };
const persist = combine.persist;
combine = combine_mod;
let obj2 = create(persist((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    channelShowResolvedFlags: {},
    setShowResolvedFlags(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      let obj = closure_0(dependencyMap[2]);
      return obj.batchUpdates(() => {
        closure_0((channelShowResolvedFlags) => {
          const obj = { channelShowResolvedFlags: obj2 };
          obj2 = {};
          const merged = Object.assign(channelShowResolvedFlags.channelShowResolvedFlags);
          obj2[closure_1_0] = closure_1_1;
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
  return obj;
}, obj));
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(10);
  obj2 = obj2();
  if (null == arg0) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {
        showResolvedFlags: true,
        setShowResolvedFlags() {

            }
      };
      cResult[0] = obj3;
      first = obj3;
    } else {
      first = cResult[0];
    }
    tmp4 = first;
  } else {
    if (cResult[1] === arg0) {
      let tmp2;
      if (cResult[2] === obj2) {
        tmp2 = cResult[3];
      }
      if (cResult[4] === arg0) {
        let tmp3;
        if (cResult[5] === obj2) {
          tmp3 = cResult[6];
        }
        if (cResult[7] === tmp2) {
          if (cResult[8] === tmp3) {
            tmp4 = cResult[9];
          }
        }
        const obj4 = { showResolvedFlags: tmp2, setShowResolvedFlags: tmp3 };
        cResult[7] = tmp2;
        cResult[8] = tmp3;
        cResult[9] = obj4;
        tmp4 = obj4;
      }
      const fn = function n(arg0) {
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
  return tmp4;
}) : ((arg0) => {
  let obj3;
  let closure_0 = arg0;
  const obj = obj2();
  if (null == arg0) {
    obj2 = {
      showResolvedFlags: true,
      setShowResolvedFlags() {

        }
    };
    obj3 = obj2;
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
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModChannelStore.tsx");

export const useReportToModChannelFiltersStore = obj2;
export const useShouldShowResolvedFlagsForChannel = tmp5;