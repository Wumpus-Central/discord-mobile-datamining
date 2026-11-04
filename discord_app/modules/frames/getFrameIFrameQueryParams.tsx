// === Module 19378: getFrameIFrameQueryParams ===

// Module 19378 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 11993 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 19379 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 19380 */;
import _mod19381 from "module_19381" /* 19381 */;
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
  let memoOne = _mod19381.useMemoOne(() => DiscordEnvironment.getDiscordEnvQueryParams(), items);
  if (memoOne === undefined) {
    memoOne = DiscordEnvironment.getDiscordEnvQueryParams();
    const tmpResult = DiscordEnvironment;
  }
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(memoOne);
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
}