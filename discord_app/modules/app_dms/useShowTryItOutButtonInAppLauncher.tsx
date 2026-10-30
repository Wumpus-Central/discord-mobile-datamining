// === Module 12297: useShowTryItOutButtonInAppLauncher ===

// Module 12297 (useShowTryItOutButtonInAppLauncher)
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11689 */;
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 11698 */;
import useIsAppDMDefault from "useIsAppDM" /* 12298 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  ({ context, application, botUserId } = arg0);
  let isPrimaryAppCommandUsableInAppDM = getPrimaryAppCommand.useIsPrimaryAppCommandUsableInAppDM({ context, applicationId: application.id, botUserId });
  let channel;
  const obj2 = { context, applicationId: application.id, botUserId };
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp4Result = useIsAppDMDefault(channel);
  const result = canLaunchContextlessFrame.canLaunchContextlessFrame(application);
  let tmp8 = !result;
  if (!result) {
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