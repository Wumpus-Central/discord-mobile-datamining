// discord_app/modules/activities/utils/isCrunchyrollActivity.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import CRUNCHYROLL_LINK_DEST_ORIGIN from "../../connections/CrunchyrollConnectionConstants.tsx";

const CRUNCHYROLL_CLIENT_ID = CRUNCHYROLL_LINK_DEST_ORIGIN.CRUNCHYROLL_CLIENT_ID;
const result = obj132.fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};