// === Module 18429: getFrameIFrameQueryParams ===

// Module 18429 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 11458 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 18430 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 18431 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};