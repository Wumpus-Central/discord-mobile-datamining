// === Module 9147: allowPopups ===

// Module 9147 (allowPopups)
import Constants from "Constants" /* 2011 */;
import size from "module_2" /* 2 */;

const set = Constants.APPLICATIONS_WITH_ALLOWED_POPUPS;
const result = size.fileFinishedImporting("modules/activities/utils/allowPopups.tsx");

export const allowPopups = function allowPopups(application) {
  let tmp = null != application;
  if (tmp) {
    let hasItem = set.has(application.id);
    if (!hasItem) {
      let tmp4;
      if ("embeddedActivityConfig" in application) {
        const embeddedActivityConfig = application.embeddedActivityConfig;
        let prop;
        if (embeddedActivityConfig != null) {
          prop = embeddedActivityConfig.displays_advertisements;
        }
        tmp4 = true === prop;
      } else {
        tmp4 = "embedded_activity_config" in application;
        if (tmp4) {
          const embedded_activity_config = application.embedded_activity_config;
          let prop1;
          if (embedded_activity_config != null) {
            prop1 = embedded_activity_config.displays_advertisements;
          }
          tmp4 = true === prop1;
        }
      }
      hasItem = tmp4;
    }
    tmp = hasItem;
  }
  return tmp;
};