// discord_app/modules/frames/getFrameIFrameQueryParams.tsx
import DiscordEnvironment from "../activities/DiscordEnvironment.tsx";
import getFrameLaunchContextQueryParamsDefault from "utils/getFrameLaunchContextQueryParams.tsx";
import getFrameSurfaceQueryParamsDefault from "utils/getFrameSurfaceQueryParams.tsx";
import _mod19098 from "../../../_runtime/metro/19098__.js";
import size from "../../../_runtime/metro/00002__.js";

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
}
export function useFrameIFrameQueryParams(data, platform) {
  const items = [data.data.url];
  let memoOne = _mod19098.useMemoOne(() => DiscordEnvironment.getDiscordEnvQueryParams(), items);
  if (memoOne === undefined) {
    memoOne = DiscordEnvironment.getDiscordEnvQueryParams();
    const tmpResult = DiscordEnvironment;
  }
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(memoOne);
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
}
