// === Module 9743: useAppChannelApplicationOptions ===

// Module 9743 (useAppChannelApplicationOptions)
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
const EmbeddedSurfaceType = fn(9511).EmbeddedSurfaceType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplicationOptions.tsx");

export const useAppChannelApplicationOptions = function useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId) {
  let flag = disabled;
  if (disabled === undefined) {
    flag = false;
  }
  let data;
  let obj = data(data[2]);
  let tmp3;
  if (!flag) {
    tmp3 = guildId;
  }
  const guildEmbeddedApplications = obj.useGuildEmbeddedApplications(EmbeddedSurfaceType.APP_CHANNEL, tmp3, channelId);
  data = guildEmbeddedApplications.data;
  let isLoading = guildEmbeddedApplications.isLoading;
  const application = data(data[3]).useApplication(selectedApplicationId, true);
  data = application.data;
  obj = { options: null, selectedApplication: data, isLoading: null, hasNoApplications: null };
  let items = [data, data];
  obj.options = noop.useMemo(() => {
    let items = data;
    if (data == null) {
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
  obj.isLoading = isLoading;
  let tmp6 = null != data;
  if (tmp6) {
    tmp6 = 0 === data.length;
  }
  obj.hasNoApplications = tmp6;
  return obj;
};