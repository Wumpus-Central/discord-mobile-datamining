// discord_app/modules/frames/getFrameIFrameQueryParams.tsx
import DiscordEnvironment from "../activities/DiscordEnvironment.tsx";
import getFrameLaunchContextQueryParamsDefault from "utils/getFrameLaunchContextQueryParams.tsx";
import getFrameSurfaceQueryParamsDefault from "utils/getFrameSurfaceQueryParams.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const obj = { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const obj2 = DiscordEnvironment;
  const merged1 = Object.assign(obj2.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return obj;
}
