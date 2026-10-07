// discord_app/modules/debug/uploadDebugLog.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/debug/uploadDebugLog.tsx");

export default function uploadDebugLog(arg0) {
  ({ category, filename, body } = arg0);
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.DEBUG_LOG(category, filename),
    body,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    timeout: 60000,
    retries: 3,
    rejectWithError: true,
  };
  return HTTP.post(request);
}
