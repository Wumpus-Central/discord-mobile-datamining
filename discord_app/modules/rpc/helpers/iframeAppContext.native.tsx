// discord_app/modules/rpc/helpers/iframeAppContext.native.tsx
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AppContext = Constants.AppContext;
const result = size.fileFinishedImporting("modules/rpc/helpers/iframeAppContext.native.tsx");

export function getAppContextForIframeId() {
  return AppContext.APP;
}
