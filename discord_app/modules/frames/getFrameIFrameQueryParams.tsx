// === Module 17459: getFrameIFrameQueryParams ===

// Module 17459 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 10737 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 17460 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 17461 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};