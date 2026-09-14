// discord_app/modules/routing/KeybindRouterStore.tsx
import matchPathCompat from "matchPathCompat.tsx";
import RouteUtils from "RouteUtils.tsx";
import Constants from "../../Constants.tsx";
import identity from "../../../_runtime/metro/01242__.js";
import size from "../../../_runtime/metro/00002__.js";

function getMatchData(pathname) {
  let str = pathname;
  let str2 = pathname;
  if (pathname == null) {
    str2 = "";
  }
  const obj2 = { path: null };
  const RouteParam = RouteUtils.RouteParam;
  const obj = matchPathCompat;
  const RouteParam2 = RouteUtils.RouteParam;
  obj2.path = React2.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
  const matchPathResult = obj.matchPath(str2, obj2);
  if (null != matchPathResult) {
    ({ guildId, channelId } = matchPathResult.params);
    let tmp7 = null;
    if (guildId !== React3) {
      tmp7 = guildId;
    }
    const obj4 = { guildId: tmp7, channelId: null };
    if (channelId == null) {
      channelId = null;
    }
    obj4.channelId = channelId;
    return obj4;
  } else {
    if (str == null) {
      str = "";
    }
    const obj5 = { path: null };
    const RouteParam3 = RouteUtils.RouteParam;
    obj5.path = React2.GUILD_BOOSTING_MARKETING(RouteParam3.guildId());
    const matchPathResult1 = matchPathCompat.matchPath(str, obj5);
    if (null != matchPathResult1) {
      const obj6 = { guildId: matchPathResult1.params.guildId, channelId: null };
      let obj7 = obj6;
    } else {
      obj7 = { guildId: null, channelId: null };
    }
    return obj7;
  }
  const guildIdResult = RouteParam.guildId();
}
({ Routes: c2, ME: c3 } = Constants);
const withEqualityFn = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  return {
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(path) {
      ({ guildId: closure_1, channelId: closure_2 } = getMatchData(path));
      const tmp = getMatchData(path);
      path(1247).batchUpdates(() => path({ path, guildId, channelId }));
    },
    resetPath(pathname) {
      const basePath = pathname;
      ({ guildId: closure_1, channelId: closure_2 } = getMatchData(pathname));
      const tmp = getMatchData(pathname);
      basePath(1247).batchUpdates(() => basePath({ path: null, guildId, channelId, basePath }));
    },
  };
});
const result = size.fileFinishedImporting("modules/routing/KeybindRouterStore.tsx");

export default withEqualityFn;
