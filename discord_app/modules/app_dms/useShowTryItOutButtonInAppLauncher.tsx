// discord_app/modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx
import canLaunchContextlessFrame from "../frames/utils/canLaunchContextlessFrame.tsx";
import getPrimaryAppCommand from "../application_commands/getPrimaryAppCommand.tsx";
import useIsAppDMDefault from "useIsAppDM.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  ({ context, application, botUserId } = arg0);
  let isPrimaryAppCommandUsableInAppDM = getPrimaryAppCommand.useIsPrimaryAppCommandUsableInAppDM({
    context,
    applicationId: application.id,
    botUserId,
  });
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
}
