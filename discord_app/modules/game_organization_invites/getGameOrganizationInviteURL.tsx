// discord_app/modules/game_organization_invites/getGameOrganizationInviteURL.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteURL.tsx");

export default function getGameOrganizationInviteURL(arg0) {
  return "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/game-organizations/invite/" + arg0;
}
