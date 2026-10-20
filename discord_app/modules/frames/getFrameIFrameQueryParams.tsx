// === Module 18180: getFrameIFrameQueryParams ===

// Module 18180 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 11346 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 18181 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 18182 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};