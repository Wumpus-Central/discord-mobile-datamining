// discord_app/modules/go_live/useFetchStreamPreview.tsx
import noop from "noop";
import reset from "reset";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import { BasicPermissions } from "sum";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/go_live/useFetchStreamPreview.tsx");

export default function useFetchStreamPreview(arg0, arg1, arg2) {
  let isLoading;
  let previewUrl;
  const _require = arg0;
  const dependencyMap = arg1;
  const React = arg2;
  let reset = tmp;
  let obj = _initialize;
  const items = [ensureGuildLoaded];
  ensureGuildLoaded = obj.useStateFromStores(items, () => channel.getChannel(closure_1));
  const items1 = [shouldFetchPreview];
  let stateFromStores = _initialize.useStateFromStores(items1, () => {
    let canBasicChannelResult = null != ensureGuildLoaded;
    if (canBasicChannelResult) {
      canBasicChannelResult = shouldFetchPreview.canBasicChannel(outer1_7.CONNECT, tmp);
    }
    return canBasicChannelResult;
  });
  const obj2 = _initialize;
  const items2 = [stateFromStores];
  const stateFromStores1 = _initialize.useStateFromStores(items2, () => stateFromStores.getVoiceChannelId() === closure_1);
  const obj3 = _initialize;
  const items3 = [reset];
  const stateFromStoresObject = _initialize.useStateFromStoresObject(items3, () => {
    let isPreviewLoading = !tmp;
    let shouldFetchPreviewResult = isPreviewLoading;
    if (!tmp) {
      shouldFetchPreviewResult = tmp.shouldFetchPreview(closure_0, closure_1, noop);
    }
    const obj = { shouldFetchPreview: shouldFetchPreviewResult, previewUrl: null, isLoading: null };
    let previewURL = null;
    if (!tmp) {
      previewURL = tmp.getPreviewURL(closure_0, closure_1, noop);
    }
    obj[1] = previewURL;
    if (!tmp) {
      isPreviewLoading = tmp.getIsPreviewLoading(closure_0, closure_1, noop);
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
      tmp = !reset;
    }
    if (tmp) {
      tmp = stateFromStores;
    }
    if (tmp) {
      const streamPreview = callback(table[7]).fetchStreamPreview(callback, table, noop);
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