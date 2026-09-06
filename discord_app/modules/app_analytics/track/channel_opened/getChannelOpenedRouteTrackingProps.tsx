// discord_app/modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx
import router_utils from "../../../routing/router_utils.tsx";
import ThreadAnalyticsUtils from "../../ThreadAnalyticsUtils.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx",
);

export const getChannelOpenedRouteTrackingProps = function getChannelOpenedRouteTrackingProps(selectedChannelId) {
  let obj = ThreadAnalyticsUtils;
  const result = obj.collectThreadMetadata(ChannelStore.getChannel(selectedChannelId), true);
  let _location;
  if (result != null) {
    _location = result.location;
  }
  if (_location == null) {
    _location = router_utils.getLastRouteChangeSource();
    const tmpResult = router_utils;
  }
  obj = result;
  if (result == null) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  if (null != _location) {
    const obj1 = { location: _location };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  return obj;
};
