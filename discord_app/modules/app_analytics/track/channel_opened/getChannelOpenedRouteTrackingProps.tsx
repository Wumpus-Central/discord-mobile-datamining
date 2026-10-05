// discord_app/modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx
import router_utils from "../../../routing/router_utils.tsx";
import ThreadAnalyticsUtils from "../../ThreadAnalyticsUtils.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting(
  "modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx",
);

export const getChannelOpenedRouteTrackingProps = function getChannelOpenedRouteTrackingProps(selectedChannelId) {
  let obj5;
  const obj = ThreadAnalyticsUtils;
  const result = obj.collectThreadMetadata(ChannelStore.getChannel(selectedChannelId), true);
  let _location;
  if (result != null) {
    _location = result.location;
  }
  if (_location == null) {
    const tmpResult = router_utils;
    _location = tmpResult.getLastRouteChangeSource();
  }
  let obj2 = result;
  if (result == null) {
    obj2 = {};
  }
  const obj3 = {};
  const merged = Object.assign(obj2);
  if (null != _location) {
    obj5 = { location: _location };
    const obj4 = { location: _location };
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return obj3;
};
