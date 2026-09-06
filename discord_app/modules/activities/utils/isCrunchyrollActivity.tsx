// discord_app/modules/activities/utils/isCrunchyrollActivity.tsx
import CrunchyrollConnectionConstants from "../../connections/CrunchyrollConnectionConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CRUNCHYROLL_CLIENT_ID = CrunchyrollConnectionConstants.CRUNCHYROLL_CLIENT_ID;
const result = size.fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
}
