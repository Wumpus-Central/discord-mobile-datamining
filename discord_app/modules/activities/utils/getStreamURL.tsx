// discord_app/modules/activities/utils/getStreamURL.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import items3 from "../Constants.tsx";

const validStreamURL = items3.validStreamURL;
const result = obj132.fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
};