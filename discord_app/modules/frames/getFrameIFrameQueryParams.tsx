// discord_app/modules/frames/getFrameIFrameQueryParams.tsx
import DiscordEnvironment from "../activities/DiscordEnvironment.tsx";
import getFrameLaunchContextQueryParamsDefault from "utils/getFrameLaunchContextQueryParams.tsx";
import getFrameSurfaceQueryParamsDefault from "utils/getFrameSurfaceQueryParams.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
}
