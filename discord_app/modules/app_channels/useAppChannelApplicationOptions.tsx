// === Module 9255: useAppChannelApplicationOptions ===

// Module 9255 (useAppChannelApplicationOptions)
import react2 from "react" /* 576 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6665 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8547 */;
import useGuildEmbeddedApplications2 from "useGuildEmbeddedApplications" /* 9256 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function compareOptions(status, status2) {
  let localeCompareResult;
  if (status.status.supported !== status2.status.supported) {
    let num = 1;
    if (status.status.supported) {
      num = -1;
    }
    localeCompareResult = num;
  } else {
    const name = status.application.name;
    localeCompareResult = name.localeCompare(status2.application.name);
  }
  return localeCompareResult;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  let data;
  let isLoading;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp4 = undefined !== arg3 && arg3;
  const useGuildEmbeddedApplications = useGuildEmbeddedApplications2.useGuildEmbeddedApplications;
  let tmp6;
  useGuildEmbeddedApplications2;
  const APP_CHANNEL = EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  if (!tmp4) {
    tmp6 = arg0;
  }
  const guildEmbeddedApplications = useGuildEmbeddedApplications(APP_CHANNEL, tmp6, arg1);
  ({ data, isLoading } = guildEmbeddedApplications);
  const tmpResult2 = ApplicationActionCreators;
  const application = tmpResult2.useApplication(arg2, true);
  const data2 = application.data;
  if (cResult[0] === data) {
    let tmp10;
    if (cResult[1] === data2) {
      tmp10 = cResult[2];
    }
    if (!isLoading) {
      isLoading = tmp9;
    }
    if (cResult[3] === tmp10) {
      if (cResult[4] === data2) {
        if (cResult[5] === isLoading) {
          let tmp16;
          if (cResult[6] === (null != data && 0 === data.length)) {
            tmp16 = cResult[7];
          }
          return tmp16;
        }
      }
    }
    const obj2 = { options: tmp10, selectedApplication: data2, isLoading, hasNoApplications: null != data && 0 === data.length };
    cResult[3] = tmp10;
    cResult[4] = data2;
    cResult[5] = isLoading;
    cResult[6] = null != data && 0 === data.length;
    cResult[7] = obj2;
    tmp16 = obj2;
  }
  let items = data;
  if (data == null) {
    items = [];
  }
  const items1 = [...items];
  const tmp11 = null == data2 || items1.some((application) => application.application.id === data2.id);
  if (!tmp11) {
    const obj3 = { application: data2, status: { supported: true } };
    items1.push(obj3);
  }
  const sorted = items1.sort(compareOptions);
  cResult[0] = data;
  cResult[1] = data2;
  cResult[2] = sorted;
  tmp10 = sorted;
}) : ((arg0, arg1, arg2) => {
  let items;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let data1;
  let data;
  const useGuildEmbeddedApplications = data1(data[3]).useGuildEmbeddedApplications;
  let tmp4;
  data1(data[3]);
  const APP_CHANNEL = data1(data[4]).EmbeddedSurfaceType.APP_CHANNEL;
  const tmp = data1;
  const tmp2 = data;
  if (!flag) {
    tmp4 = arg0;
  }
  const guildEmbeddedApplications = useGuildEmbeddedApplications(APP_CHANNEL, tmp4, arg1);
  data1 = guildEmbeddedApplications.data;
  let isLoading = guildEmbeddedApplications.isLoading;
  const tmpResult = tmp(tmp2[5]);
  const application = tmpResult.useApplication(arg2, true);
  data = application.data;
  let obj = {
    options: react.useMemo(() => {
      let id;
      let items = data1;
      if (data1 == null) {
        items = [];
      }
      const items1 = [...items];
      const someResult = null == data || items1.some((application) => application.application.id === id.id);
      if (!someResult) {
        const obj = { application: data, status: { supported: true } };
        items1.push(obj);
      }
      return items1.sort(compareOptions);
    }, items),
    selectedApplication: data,
    isLoading,
    hasNoApplications: tmp7
  };
  items = [data1, data];
  const isLoading2 = application.isLoading;
  if (!isLoading) {
    isLoading = isLoading2;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplicationOptions.tsx");

export const useAppChannelApplicationOptions = tmp2;