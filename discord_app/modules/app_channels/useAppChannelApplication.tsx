// discord_app/modules/app_channels/useAppChannelApplication.tsx
import Constants from "../../Constants.tsx";
import ApplicationActionCreators from "../applications/ApplicationActionCreators.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let type;

const ChannelTypes = Constants.ChannelTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      type = undefined;
      if (type != null) {
        type = type.type;
      }
      let application_id;
      if (type === ChannelTypes.GUILD_APP) {
        application_id = type.application_id;
      }
      const obj = ApplicationActionCreators;
      return obj.useApplication(application_id).data;
    }
  : (type) => {
      type = undefined;
      if (type != null) {
        type = type.type;
      }
      let application_id;
      if (type === ChannelTypes.GUILD_APP) {
        application_id = type.application_id;
      }
      const obj = ApplicationActionCreators;
      return obj.useApplication(application_id).data;
    };
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = tmp2;
