// === Module 11322: useShowTryItOutButtonInAppLauncher ===

// Module 11322 (useShowTryItOutButtonInAppLauncher)
import obj132 from "obj132" /* 2 */;
import canLaunchFrame from "canLaunchFrame" /* 8704 */;
import _getPrimaryAppCommand from "_getPrimaryAppCommand" /* 8769 */;
import useIsAppDMDefault from "useIsAppDM" /* 11323 */;

const result = obj132.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

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