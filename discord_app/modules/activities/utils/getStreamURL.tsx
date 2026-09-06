// discord_app/modules/activities/utils/getStreamURL.tsx
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const validStreamURL = Constants.validStreamURL;
const result = size.fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
}
