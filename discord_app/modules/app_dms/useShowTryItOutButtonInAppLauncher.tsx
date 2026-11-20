// === Module 12893: useShowTryItOutButtonInAppLauncher ===

// Module 12893 (useShowTryItOutButtonInAppLauncher)
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10552 */;
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 10573 */;
import useIsAppDMDefault from "useIsAppDM" /* 12894 */;
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