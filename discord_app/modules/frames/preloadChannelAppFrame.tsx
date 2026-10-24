// === Module 17652: preloadChannelAppFrame ===

// Module 17652 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 5623 */;
import AgeGateUtils from "AgeGateUtils" /* 6662 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6682 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6778 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6809 */;
import createProxyTicket from "createProxyTicket" /* 10730 */;
import loadEmbeddedAppCSPForLaunchDefault from "loadEmbeddedAppCSPForLaunch" /* 10771 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import FramesStore from "FramesStore" /* 6775 */;

require = fn;
const FramesConstants = fn(6776);
({ getFrameSurfaceForChannel: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const Constants = fn(1087);
({ ChannelTypes: closure_8, NOOP: closure_9, Permissions: c10 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export const preloadChannelAppFrame = function preloadChannelAppFrame(id) {
  const channel = ChannelStore.getChannel(id);
  let application_id;
  if (channel != null) {
    application_id = channel.application_id;
  }
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp4 = null;
  if (type === constants.GUILD_APP) {
    tmp4 = timestampProducer(channel);
  }
  let canResult = null != channel && null != application_id && null != tmp4;
  if (canResult) {
    canResult = null == FramesStore.getFrame(React5(application_id, tmp4));
  }
  if (canResult) {
    canResult = PermissionStore.can(constants2.VIEW_CHANNEL, channel);
  }
  if (canResult) {
    let result = AgeGateUtils.isChannelContentGated(channel);
    if (!result) {
      result = SpoilerChannelUtils.isChannelSpoilerGated(channel);
      const tmp11Result = SpoilerChannelUtils;
    }
    if (!result) {
      if (null != getURLForApplicationDefault(application_id)) {
        createProxyTicket.prefetchProxyTicket(application_id, getChannelIdForEmbeddedSurfaceDefault(tmp4), tmp4.type);
        const tmp11Result2 = createProxyTicket;
        loadEmbeddedAppCSPForLaunchDefault(application_id).catch(React6);
        const useApplication = ApplicationActionCreators.useApplication;
        const items = [application_id];
        const many = useApplication.fetchMany(items);
        many.catch(React6);
        const promise = loadEmbeddedAppCSPForLaunchDefault(application_id);
      }
    }
  }
};