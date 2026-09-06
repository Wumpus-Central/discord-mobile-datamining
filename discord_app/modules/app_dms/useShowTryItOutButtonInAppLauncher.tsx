// === Module 12144: useShowTryItOutButtonInAppLauncher ===

// Module 12144 (useShowTryItOutButtonInAppLauncher)
import canLaunchFrame from "canLaunchFrame" /* 9506 */;
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 9571 */;
import useIsAppDMDefault from "useIsAppDM" /* 12145 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  ({ context, application, botUserId } = arg0);
  const obj = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
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