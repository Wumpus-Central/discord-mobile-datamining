// discord_app/modules/go_live/useFetchStreamPreview.tsx
import StreamActionCreators from "../../actions/StreamActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationStreamPreviewStore from "../../stores/ApplicationStreamPreviewStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

require = fn;
const BasicPermissions = fn(1085).BasicPermissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/useFetchStreamPreview.tsx");

export default function useFetchStreamPreview(guildId, channelId, id) {
  _require = guildId;
  dependencyMap = channelId;
  noop = id;
  closure_3 = tmp;
  let obj = require("initialize");
  const items = [closure_4];
  closure_4 = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
  const items1 = [shouldFetchPreview];
  let stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let canBasicChannelResult = null != closure_4;
    if (canBasicChannelResult) {
      canBasicChannelResult = PermissionStore.canBasicChannel(BasicPermissions.CONNECT, tmp);
    }
    return canBasicChannelResult;
  });
  const obj2 = require("initialize");
  const items2 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => SelectedChannelStore.getVoiceChannelId() === closure_1,
  );
  const obj3 = require("initialize");
  const items3 = [closure_3];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items3, () => {
    let isPreviewLoading = !closure_3;
    let shouldFetchPreviewResult = isPreviewLoading;
    if (!closure_3) {
      shouldFetchPreviewResult = ApplicationStreamPreviewStore.shouldFetchPreview(closure_0, closure_1, closure_2);
    }
    const obj = { shouldFetchPreview: shouldFetchPreviewResult, previewUrl: null, isLoading: null };
    let previewURL = null;
    if (!closure_3) {
      previewURL = ApplicationStreamPreviewStore.getPreviewURL(closure_0, closure_1, closure_2);
    }
    obj.previewUrl = previewURL;
    if (!closure_3) {
      isPreviewLoading = ApplicationStreamPreviewStore.getIsPreviewLoading(closure_0, closure_1, closure_2);
    }
    obj.isLoading = isPreviewLoading;
    return obj;
  });
  shouldFetchPreview = stateFromStoresObject.shouldFetchPreview;
  ({ previewUrl, isLoading } = stateFromStoresObject);
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  const items4 = [shouldFetchPreview, channelId, guildId, id, null == channelId || null == id, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = shouldFetchPreview;
    if (shouldFetchPreview) {
      tmp = !closure_3;
    }
    if (tmp) {
      tmp = stateFromStores;
    }
    if (tmp) {
      const streamPreview = StreamActionCreators.fetchStreamPreview(closure_0, closure_1, closure_2);
    }
  }, items4);
  if (!(null == channelId || null == id)) {
    if (stateFromStores) {
      obj = { previewUrl, isLoading };
    }
    return obj;
  }
  obj = { previewUrl: "PX_16", isLoading: true };
}
