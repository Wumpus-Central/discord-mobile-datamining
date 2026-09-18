// === Module 9988: useAppChannelApplicationOptions ===

// Module 9988 (useAppChannelApplicationOptions)
import noop from "module_19" /* 19 */;

const require = fn;
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
const EmbeddedSurfaceType = fn(9749).EmbeddedSurfaceType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplicationOptions.tsx");

export const useAppChannelApplicationOptions = function useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId) {
  let flag = disabled;
  if (disabled === undefined) {
    flag = false;
  }
  let data1;
  let data;
  let tmp3;
  if (!flag) {
    tmp3 = guildId;
  }
  const guildEmbeddedApplications = data1(data[2]).useGuildEmbeddedApplications(EmbeddedSurfaceType.APP_CHANNEL, tmp3, channelId);
  data1 = guildEmbeddedApplications.data;
  let isLoading = guildEmbeddedApplications.isLoading;
  let obj = data1(data[2]);
  const application = data1(data[3]).useApplication(selectedApplicationId, true);
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
};