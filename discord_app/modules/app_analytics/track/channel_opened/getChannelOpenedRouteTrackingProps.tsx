// === Module 17227: getChannelOpenedRouteTrackingProps ===

// Module 17227 (getChannelOpenedRouteTrackingProps)
import router_utils from "router_utils" /* 1101 */;
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 8019 */;
import ChannelStore from "ChannelStore" /* 2042 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx");

export const getChannelOpenedRouteTrackingProps = function getChannelOpenedRouteTrackingProps(selectedChannelId) {
  const result = ThreadAnalyticsUtils.collectThreadMetadata(ChannelStore.getChannel(selectedChannelId), true);
  let _location;
  if (result != null) {
    _location = result.location;
  }
  if (_location == null) {
    _location = router_utils.getLastRouteChangeSource();
    const tmpResult = router_utils;
  }
  let obj2 = result;
  if (result == null) {
    obj2 = {};
  }
  const merged = Object.assign(obj2);
  if (null != _location) {
    const obj4 = { location: _location };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return {};
};