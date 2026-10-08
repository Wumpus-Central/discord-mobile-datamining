// discord_app/modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx
import c from "../../../_runtime/00576_c.js";
import canLaunchContextlessFrame from "../frames/utils/canLaunchContextlessFrame.tsx";
import getPrimaryAppCommand from "../application_commands/getPrimaryAppCommand.tsx";
import useIsAppDMDefault from "useIsAppDM.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowTryItOutButtonInAppLauncher(arg0) {
      const cResult = c.c(4);
      ({ context, application, botUserId } = arg0);
      if (cResult[0] === application.id) {
        if (cResult[1] === botUserId) {
          if (cResult[2] === context) {
            let tmp4 = cResult[3];
          }
          let isPrimaryAppCommandUsableInAppDM = getPrimaryAppCommand.useIsPrimaryAppCommandUsableInAppDM(tmp4);
          let channel;
          const tmpResult = getPrimaryAppCommand;
          if ("channel" === context.type) {
            channel = context.channel;
          }
          const tmp7Result = useIsAppDMDefault(channel);
          const result = canLaunchContextlessFrame.canLaunchContextlessFrame(application);
          let tmp11 = !result;
          if (!result) {
            if (isPrimaryAppCommandUsableInAppDM) {
              isPrimaryAppCommandUsableInAppDM = null != botUserId;
            }
            if (isPrimaryAppCommandUsableInAppDM) {
              isPrimaryAppCommandUsableInAppDM = !tmp7Result;
            }
            tmp11 = isPrimaryAppCommandUsableInAppDM;
          }
          return tmp11;
        }
      }
      const obj2 = { context, applicationId: application.id, botUserId };
      cResult[0] = application.id;
      cResult[1] = botUserId;
      cResult[2] = context;
      cResult[3] = obj2;
      tmp4 = obj2;
    }
  : function useShowTryItOutButtonInAppLauncher(arg0) {
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
    };
