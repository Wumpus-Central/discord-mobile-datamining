// === Module 9650: allowPopups ===

// Module 9650 (allowPopups)
import set from "set" /* 2 */;
import items3 from "items3" /* 1920 */;

let closure_0 = items3.APPLICATIONS_WITH_ALLOWED_POPUPS;
const result = set.fileFinishedImporting("modules/activities/utils/allowPopups.tsx");

export const allowPopups = function allowPopups(application) {
  let prop = application;
  let flag = null;
  let tmp2 = null != application;
  if (tmp2) {
    const hasItem = set.has(prop.id);
    if (hasItem) {
      tmp2 = hasItem;
    } else if ("embeddedActivityConfig" in prop) {
      const embeddedActivityConfig = prop.embeddedActivityConfig;
      prop = undefined;
      if (embeddedActivityConfig != flag) {
        prop = embeddedActivityConfig.displays_advertisements;
      }
      flag = true;
      let tmp5 = true === prop;
    } else {
      tmp5 = "embedded_activity_config" in prop;
      if (tmp5) {
        const embedded_activity_config = prop.embedded_activity_config;
        let prop1;
        if (embedded_activity_config != flag) {
          prop1 = embedded_activity_config.displays_advertisements;
        }
        tmp5 = true === prop1;
      }
    }
  }
  return tmp2;
};