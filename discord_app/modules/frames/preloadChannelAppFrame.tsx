// === Module 18943: preloadChannelAppFrame ===

// Module 18943 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 5974 */;
import AgeGateUtils from "AgeGateUtils" /* 6838 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6858 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 7022 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7055 */;
import createProxyTicket from "createProxyTicket" /* 7341 */;
import loadEmbeddedAppCSPForLaunchDefault from "loadEmbeddedAppCSPForLaunch" /* 7342 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import FramesStore from "FramesStore" /* 7019 */;

require = fn;
const FramesConstants = fn(7020);
({ getFrameSurfaceForChannel: closure_6, makeFrameId: metroImportDefault } = FramesConstants);
const Constants = fn(1072);
({ ChannelTypes: closure_8, NOOP: closure_9, Permissions: closure_10 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export function preloadChannelAppFrame(id) {
  const channel = ChannelStore.getChannel(id);
  application_id = undefined;
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
    canResult = null == FramesStore.getFrame(metroImportDefault(application_id, tmp4));
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
        items = [application_id];
        const many = useApplication.fetchMany(items);
        many.catch(React6);
        const promise = loadEmbeddedAppCSPForLaunchDefault(application_id);
      }
    }
  }
}