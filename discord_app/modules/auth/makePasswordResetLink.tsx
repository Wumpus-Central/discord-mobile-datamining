// discord_app/modules/auth/makePasswordResetLink.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";

const Routes = ME.Routes;
const result = set.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};