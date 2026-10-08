// discord_app/modules/app_channels/useAppChannelApplication.tsx
import Constants from "../../Constants.tsx";
import ApplicationActionCreators from "../applications/ApplicationActionCreators.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppChannelApplication(type) {
      type = undefined;
      if (type != null) {
        type = type.type;
      }
      let application_id;
      if (type === ChannelTypes.GUILD_APP) {
        application_id = type.application_id;
      }
      return ApplicationActionCreators.useApplication(application_id).data;
    }
  : function useAppChannelApplication(type) {
      type = undefined;
      if (type != null) {
        type = type.type;
      }
      let application_id;
      if (type === ChannelTypes.GUILD_APP) {
        application_id = type.application_id;
      }
      return ApplicationActionCreators.useApplication(application_id).data;
    };
