// === Module 9051: isCrunchyrollActivity ===

// Module 9051 (isCrunchyrollActivity)
import obj132 from "obj132" /* 2 */;
import CRUNCHYROLL_LINK_DEST_ORIGIN from "CRUNCHYROLL_LINK_DEST_ORIGIN" /* 9047 */;

const CRUNCHYROLL_CLIENT_ID = CRUNCHYROLL_LINK_DEST_ORIGIN.CRUNCHYROLL_CLIENT_ID;
const result = obj132.fileFinishedImporting("modules/activities/utils/isCrunchyrollActivity.tsx");

export default function isCrunchyrollActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === CRUNCHYROLL_CLIENT_ID;
};