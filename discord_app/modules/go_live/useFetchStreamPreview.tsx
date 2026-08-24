// discord_app/modules/go_live/useFetchStreamPreview.tsx
import closure_2 from "../../../_runtime/00019_noop.js";
import closure_3 from "../../stores/ApplicationStreamPreviewStore.tsx";
import closure_4 from "../../stores/ChannelStore.tsx";
import closure_5 from "../../stores/PermissionStore.tsx";
import closure_6 from "../../stores/SelectedChannelStore.tsx";
import { BasicPermissions } from "../../../discord_common/js/shared/Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/go_live/useFetchStreamPreview.tsx");

export default function useFetchStreamPreview(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  const React = arg2;
  closure_3 = tmp;
  let obj = _initialize;
  const items = [closure_4];
  closure_4 = obj.useStateFromStores(items, () => channel.getChannel(closure_1));
  const items1 = [shouldFetchPreview];
  let stateFromStores = _initialize.useStateFromStores(items1, () => {
    let canBasicChannelResult = null != closure_4;
    if (canBasicChannelResult) {
      canBasicChannelResult = shouldFetchPreview.canBasicChannel(closure_1_7.CONNECT, tmp);
    }
    return canBasicChannelResult;
  });
  const obj2 = _initialize;
  const items2 = [stateFromStores];
  const stateFromStores1 = _initialize.useStateFromStores(items2, () => stateFromStores.getVoiceChannelId() === closure_1);
  const obj3 = _initialize;
  const items3 = [closure_3];
  const stateFromStoresObject = _initialize.useStateFromStoresObject(items3, () => {
    let isPreviewLoading = !store;
    let shouldFetchPreviewResult = isPreviewLoading;
    if (!store) {
      shouldFetchPreviewResult = store.shouldFetchPreview(closure_0, closure_1, closure_2);
    }
    const obj = { shouldFetchPreview: shouldFetchPreviewResult, previewUrl: null, isLoading: null };
    let previewURL = null;
    if (!store) {
      previewURL = store.getPreviewURL(closure_0, closure_1, closure_2);
    }
    obj[1] = previewURL;
    if (!store) {
      isPreviewLoading = store.getIsPreviewLoading(closure_0, closure_1, closure_2);
    }
    obj[2] = isPreviewLoading;
    return obj;
  });
  shouldFetchPreview = stateFromStoresObject.shouldFetchPreview;
  ({ previewUrl, isLoading } = stateFromStoresObject);
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  const items4 = [shouldFetchPreview, arg1, arg0, arg2, null == arg1 || null == arg2, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = shouldFetchPreview;
    if (shouldFetchPreview) {
      tmp = !closure_3;
    }
    if (tmp) {
      tmp = stateFromStores;
    }
    if (tmp) {
      const streamPreview = callback(table[7]).fetchStreamPreview(callback, table, closure_2);
      const obj = callback(table[7]);
    }
  }, items4);
  if (!(null == arg1 || null == arg2)) {
    if (stateFromStores) {
      obj = { previewUrl: null, isLoading: null };
      obj[0] = previewUrl;
      obj[1] = isLoading;
    }
    return obj;
  }
  obj = { previewUrl: "ct", isLoading: true };
};