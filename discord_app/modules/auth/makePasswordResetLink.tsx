// discord_app/modules/auth/makePasswordResetLink.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
}
