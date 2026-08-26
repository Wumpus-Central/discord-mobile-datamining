// === Module 11802: useShowTryItOutButtonInAppLauncher ===

// Module 11802 (useShowTryItOutButtonInAppLauncher)
import set from "set" /* 2 */;
import canLaunchFrame from "canLaunchFrame" /* 10752 */;
import _getPrimaryAppCommand from "_getPrimaryAppCommand" /* 10774 */;
import useIsAppDMDefault from "useIsAppDM" /* 11803 */;

const result = set.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  ({ context, application, botUserId } = arg0);
  let obj = _getPrimaryAppCommand;
  obj = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp = require;
  const tmp4 = useIsAppDMDefault;
  const tmp4Result = useIsAppDMDefault(channel);
  const canLaunchFrameResult = canLaunchFrame.canLaunchFrame(application);
  let tmp8 = !canLaunchFrameResult;
  if (!canLaunchFrameResult) {
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = null != botUserId;
    }
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = !tmp4Result;
    }
    tmp8 = isPrimaryAppCommandUsableInAppDM;
  }
  return tmp8;
};