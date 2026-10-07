// discord_app/modules/go_live/utils/getTitleFromPickedStreamContent.tsx
import util from "../../../intl/index.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/go_live/utils/getTitleFromPickedStreamContent.tsx");

export default function getTitleFromPickedStreamContent(windows) {
  if (windows.windows.length > 0) {
    windows = windows.windows;
    const mapped = windows.map((title) => title.title);
    let joined = mapped.join(", ");
  } else if (windows.applications.length > 0) {
    const applications = windows.applications;
    const mapped1 = applications.map((name) => name.name);
    joined = mapped1.join(", ");
  } else {
    joined = null;
    if (windows.displays.length > 0) {
      const intl = util.intl;
      joined = intl.string(util.t.R4wpLN);
    }
  }
  return joined;
}
