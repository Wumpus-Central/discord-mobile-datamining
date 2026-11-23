// === Module 19154: getFrameIFrameQueryParams ===

// Module 19154 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 10785 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 19155 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 19156 */;
import _mod19157 from "module_19157" /* 19157 */;
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
  let memoOne = _mod19157.useMemoOne(() => DiscordEnvironment.getDiscordEnvQueryParams(), items);
  if (memoOne === undefined) {
    memoOne = DiscordEnvironment.getDiscordEnvQueryParams();
    const tmpResult = DiscordEnvironment;
  }
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(memoOne);
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
}