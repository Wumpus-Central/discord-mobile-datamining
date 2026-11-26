// === Module 17950: getChannelAppLaunchTarget ===

// Module 17950 (getChannelAppLaunchTarget)
import getURLForApplicationDefault from "getURLForApplication" /* 5684 */;
import AgeGateUtils from "AgeGateUtils" /* 6833 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6849 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import PermissionStore from "PermissionStore" /* 4975 */;

require = fn;
const FramesConstants = fn(6937);
({ getFrameSurfaceForChannel: hasOwnProperty, makeFrameId: closure_6 } = FramesConstants);
const Constants = fn(1071);
({ ChannelTypes: metroImportDefault, Permissions: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/getChannelAppLaunchTarget.tsx");

export default function getChannelAppLaunchTarget(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  if (null == channel) {
    return null;
  } else if (channel.type !== constants.GUILD_APP) {
    return null;
  } else {
    application_id = channel.application_id;
    const tmp13 = hasOwnProperty(channel);
    let tmp2 = null;
    if (null != application_id) {
      tmp2 = null;
      if (null != tmp13) {
        let tmp5 = null;
        if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
          let tmp8 = null;
          if (!obj.isChannelContentGated(channel)) {
            tmp8 = null;
            if (!tmp6Result.isChannelSpoilerGated(channel)) {
              tmp8 = null;
              if (null != getURLForApplicationDefault(application_id)) {
                const obj2 = { frameId: timestampProducer(application_id, tmp13), applicationId: application_id, surface: tmp13 };
                tmp8 = obj2;
              }
            }
            tmp6Result = SpoilerChannelUtils;
          }
          tmp5 = tmp8;
          obj = AgeGateUtils;
        }
        tmp2 = tmp5;
      }
    }
    return tmp2;
  }
};