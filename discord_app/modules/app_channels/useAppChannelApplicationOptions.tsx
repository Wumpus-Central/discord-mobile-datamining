// === Module 9220: useAppChannelApplicationOptions ===

// Module 9220 (useAppChannelApplicationOptions)
import c from "c" /* 576 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6658 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8514 */;
import useGuildEmbeddedApplications from "useGuildEmbeddedApplications" /* 9221 */;
import noop from "module_19" /* 19 */;

require = fn;
function compareOptions(status, status2) {
  if (status.status.supported !== status2.status.supported) {
    let num = 1;
    if (status.status.supported) {
      num = -1;
    }
    let localeCompareResult = num;
  } else {
    const name = status.application.name;
    localeCompareResult = name.localeCompare(status2.application.name);
  }
  return localeCompareResult;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplicationOptions.tsx");

export const useAppChannelApplicationOptions = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  const cResult = c.c(8);
  const tmp4 = undefined !== arg3 && arg3;
  let tmp5;
  if (!tmp4) {
    tmp5 = arg0;
  }
  const guildEmbeddedApplications = useGuildEmbeddedApplications.useGuildEmbeddedApplications(EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, tmp5, arg1);
  ({ data, isLoading } = guildEmbeddedApplications);
  const tmpResult = useGuildEmbeddedApplications;
  const application = ApplicationActionCreators.useApplication(arg2, true);
  const data2 = application.data;
  if (cResult[0] === data) {
    if (cResult[1] === data2) {
      let tmp9 = cResult[2];
    }
    if (!isLoading) {
      isLoading = tmp8;
    }
    let tmp14 = null != data;
    if (tmp14) {
      tmp14 = 0 === data.length;
    }
    if (cResult[3] === tmp9) {
      if (cResult[4] === data2) {
        if (cResult[5] === isLoading) {
          if (cResult[6] === tmp14) {
            let tmp15 = cResult[7];
          }
          return tmp15;
        }
      }
    }
    const obj2 = { options: tmp9, selectedApplication: data2, isLoading, hasNoApplications: tmp14 };
    cResult[3] = tmp9;
    cResult[4] = data2;
    cResult[5] = isLoading;
    cResult[6] = tmp14;
    cResult[7] = obj2;
    tmp15 = obj2;
  }
  let items = data;
  if (data == null) {
    items = [];
  }
  const items1 = [...items];
  const tmpResult2 = ApplicationActionCreators;
  if (!tmp10) {
    const obj3 = { application: data2, status: { supported: true } };
    items1.push(obj3);
  }
  const sorted = items1.sort(compareOptions);
  cResult[0] = data;
  cResult[1] = data2;
  cResult[2] = sorted;
  tmp9 = sorted;
  tmp10 = null == data2 || items1.some((application) => application.application.id === data2.id);
}) : ((arg0, arg1, arg2) => {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let data1;
  let data;
  let tmp3;
  if (!flag) {
    tmp3 = arg0;
  }
  const guildEmbeddedApplications = data1(data[3]).useGuildEmbeddedApplications(data1(data[4]).EmbeddedSurfaceType.APP_CHANNEL, tmp3, arg1);
  data1 = guildEmbeddedApplications.data;
  let isLoading = guildEmbeddedApplications.isLoading;
  let obj = data1(data[3]);
  const application = data1(data[5]).useApplication(arg2, true);
  data = application.data;
  const obj2 = { options: null, selectedApplication: data, isLoading: null, hasNoApplications: null };
  let items = [data1, data];
  obj2.options = noop.useMemo(() => {
    let items = data1;
    if (data1 == null) {
      items = [];
    }
    const items1 = [...items];
    let someResult = null == data;
    if (!someResult) {
      someResult = items1.some((application) => application.application.id === id.id);
    }
    if (!someResult) {
      const obj = { application: data, status: { supported: true } };
      items1.push(obj);
    }
    return items1.sort(compareOptions);
  }, items);
  if (!isLoading) {
    isLoading = application.isLoading;
  }
  obj2.isLoading = isLoading;
  let tmp6 = null != data1;
  if (tmp6) {
    tmp6 = 0 === data1.length;
  }
  obj2.hasNoApplications = tmp6;
  return obj2;
});