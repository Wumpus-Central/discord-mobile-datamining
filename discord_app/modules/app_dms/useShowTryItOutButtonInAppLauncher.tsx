// === Module 11768: useShowTryItOutButtonInAppLauncher ===

// Module 11768 (useShowTryItOutButtonInAppLauncher)
import react from "react" /* 576 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 8994 */;
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 9001 */;
import useIsAppDMDefault from "useIsAppDM" /* 11769 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let botUserId;
  let context;
  const obj = react;
  const cResult = obj.c(4);
  ({ context, application, botUserId } = arg0);
  if (cResult[0] === application.id) {
    if (cResult[1] === botUserId) {
      let tmp4;
      if (cResult[2] === context) {
        tmp4 = cResult[3];
      }
      const tmpResult = getPrimaryAppCommand;
      let isPrimaryAppCommandUsableInAppDM = tmpResult.useIsPrimaryAppCommandUsableInAppDM(tmp4);
      let channel;
      const tmp7 = useIsAppDMDefault;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      const tmp7Result = tmp7(channel);
      const tmpResult2 = canLaunchContextlessFrame;
      const result = tmpResult2.canLaunchContextlessFrame(application);
      let tmp11 = !result;
      if (tmp11) {
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
}) : ((arg0) => {
  let application;
  let botUserId;
  let context;
  ({ context, application, botUserId } = arg0);
  const obj = getPrimaryAppCommand;
  const obj2 = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj2);
  let channel;
  const tmp4 = useIsAppDMDefault;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp4Result = tmp4(channel);
  const tmpResult = canLaunchContextlessFrame;
  const result = tmpResult.canLaunchContextlessFrame(application);
  let tmp8 = !result;
  if (tmp8) {
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = null != botUserId;
    }
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = !tmp4Result;
    }
    tmp8 = isPrimaryAppCommandUsableInAppDM;
  }
  return tmp8;
});
let result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default tmp2;