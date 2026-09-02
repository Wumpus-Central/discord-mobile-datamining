// discord_app/modules/app_channels/useAppChannelApplicationOptions.tsx
import closure_2 from "../../../_runtime/00019_noop.js";
import { EmbeddedSurfaceType } from "../frames/FramesConstants.tsx";

const require = arg1;
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
const result = require("set").fileFinishedImporting("modules/app_channels/useAppChannelApplicationOptions.tsx");

export const useAppChannelApplicationOptions = function useAppChannelApplicationOptions(
  guildId,
  channelId,
  selectedApplicationId,
  disabled,
) {
  let flag = disabled;
  if (disabled === undefined) {
    flag = false;
  }
  let data;
  data = undefined;
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
  obj = {
    options: React.useMemo(() => {
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
        const obj = { application: null, status: null };
        obj[0] = data;
        obj[1] = { supported: true };
        items1.push(obj);
      }
      return items1.sort(closure_1_4);
    }, items),
    selectedApplication: data,
    isLoading: null,
    hasNoApplications: null,
  };
  items = [data, data];
  if (!isLoading) {
    isLoading = application.isLoading;
  }
  obj[2] = isLoading;
  let tmp6 = null != data;
  if (tmp6) {
    tmp6 = 0 === data.length;
  }
  obj[3] = tmp6;
  return obj;
};
