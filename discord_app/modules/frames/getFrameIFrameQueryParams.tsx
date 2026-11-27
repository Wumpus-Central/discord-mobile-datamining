// === Module 19386: getFrameIFrameQueryParams ===

// Module 19386 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 10203 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 19387 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 19388 */;
import _mod19389 from "module_19389" /* 19389 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  let discordEnvQueryParams = arg2;
  if (arg2 === undefined) {
    discordEnvQueryParams = DiscordEnvironment.getDiscordEnvQueryParams();
  }
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(discordEnvQueryParams);
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
export function useFrameIFrameQueryParams(data, platform) {
  items = [data.data.url];
  let memoOne = _mod19389.useMemoOne(() => DiscordEnvironment.getDiscordEnvQueryParams(), items);
  if (memoOne === undefined) {
    memoOne = DiscordEnvironment.getDiscordEnvQueryParams();
    const tmpResult = DiscordEnvironment;
  }
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(memoOne);
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
}