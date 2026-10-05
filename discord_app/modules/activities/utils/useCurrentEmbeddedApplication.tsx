// discord_app/modules/activities/utils/useCurrentEmbeddedApplication.tsx
import react from "../../../../_runtime/00576_react.js";
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp3;
      let tmp7;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      const fetchesApplication = tmp3.fetchesApplication;
      const tmp4 = undefined === fetchesApplication || fetchesApplication;
      const tmp6 = useCurrentEmbeddedActivityDefault();
      if (cResult[2] !== tmp6) {
        let items;
        if (null == tmp6) {
          items = [];
        } else {
          items = [tmp6.applicationId];
        }
        cResult[2] = tmp6;
        cResult[3] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[3];
      }
      const first = _slicedToArray(useGetOrFetchApplicationsDefault(tmp7, tmp4), 1)[0];
      return first;
    }
  : () => {
      let items;
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.fetchesApplication;
      if (flag === undefined) {
        flag = true;
      }
      const tmp = useCurrentEmbeddedActivityDefault();
      const tmp2 = useGetOrFetchApplicationsDefault;
      if (null == tmp) {
        items = [];
      } else {
        items = [tmp.applicationId];
      }
      const first = _slicedToArray(tmp2(items, flag), 1)[0];
      return first;
    };
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default tmp2;
