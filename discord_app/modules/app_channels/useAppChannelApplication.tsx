// === Module 6759: useAppChannelApplication ===

// Module 6759 (useAppChannelApplication)
import Constants from "Constants" /* 1085 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6665 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = type.application_id;
  }
  return ApplicationActionCreators.useApplication(application_id).data;
}) : ((type) => {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = type.application_id;
  }
  return ApplicationActionCreators.useApplication(application_id).data;
});