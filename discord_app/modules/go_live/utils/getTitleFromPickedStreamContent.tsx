// discord_app/modules/go_live/utils/getTitleFromPickedStreamContent.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../intl/index.native.tsx";

const result = obj132.fileFinishedImporting("modules/go_live/utils/getTitleFromPickedStreamContent.tsx");

export default function getTitleFromPickedStreamContent(windows) {
  if (windows.windows.length > 0) {
    windows = windows.windows;
    const mapped = windows.map((item, index) => item.title);
    let joined = mapped.join(", ");
  } else if (windows.applications.length > 0) {
    const applications = windows.applications;
    const mapped1 = applications.map((item, index) => item.name);
    joined = mapped1.join(", ");
  } else {
    joined = null;
    if (windows.displays.length > 0) {
      const intl = getSystemLocale.intl;
      joined = intl.string(getSystemLocale.t.R4wpLN);
    }
  }
  return joined;
};