// discord_app/modules/routing/KeybindRouterStore.tsx
import matchPathCompat from "matchPathCompat.tsx";
import RouteUtils from "RouteUtils.tsx";
import Constants from "../../Constants.tsx";
import 01254__ from "../../../_runtime/metro/01254__.js";
import size from "../../../_runtime/metro/00002__.js";

let c2;
let c3;
function getMatchData(pathname) {
  let CHANNEL;
  let GUILD_BOOSTING_MARKETING;
  let RouteParam2;
  let RouteParam3;
  let channelId;
  let guildId;
  let guildIdResult;
  let str = pathname;
  let str2 = pathname;
  const matchPath = matchPathCompat.matchPath;
  matchPathCompat;
  if (pathname == null) {
    str2 = "";
  }
  const obj = { path: CHANNEL(guildIdResult, RouteParam2.channelId({ optional: true }), ":messageId?") };
  CHANNEL = constants.CHANNEL;
  const RouteParam = RouteUtils.RouteParam;
  guildIdResult = RouteParam.guildId();
  RouteParam2 = RouteUtils.RouteParam;
  const matchPathResult = matchPath(str2, obj);
  if (null != matchPathResult) {
    ({ guildId, channelId } = matchPathResult.params);
    let tmp10 = null;
    if (guildId !== _false) {
      tmp10 = guildId;
    }
    const obj2 = { guildId: tmp10, channelId };
    if (channelId == null) {
      channelId = null;
    }
    return obj2;
  } else {
    let obj5;
    const matchPath2 = matchPathCompat.matchPath;
    matchPathCompat;
    if (str == null) {
      str = "";
    }
    const obj3 = { path: GUILD_BOOSTING_MARKETING(RouteParam3.guildId()) };
    GUILD_BOOSTING_MARKETING = constants.GUILD_BOOSTING_MARKETING;
    RouteParam3 = RouteUtils.RouteParam;
    const matchPath2Result = matchPath2(str, obj3);
    if (null != matchPath2Result) {
      obj5 = { guildId: matchPath2Result.params.guildId, channelId: null };
      const obj4 = { guildId: matchPath2Result.params.guildId, channelId: null };
    } else {
      obj5 = { guildId: null, channelId: null };
    }
    return obj5;
  }
}
({ Routes: c2, ME: c3 } = Constants);
const withEqualityFn = module_1254.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  let obj = {
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(path) {
      let channelId;
      let closure_1;
      let closure_2;
      let guildId;
      ({ guildId: closure_1, channelId: closure_2 } = getMatchData(path));
      getMatchData(path);
      let obj = path(dependencyMap[4]);
      obj.batchUpdates(() => {
        const obj = { path, guildId, channelId };
        return path(obj);
      });
    },
    resetPath(pathname) {
      let channelId;
      let closure_1;
      let closure_2;
      let guildId;
      const basePath = pathname;
      ({ guildId: closure_1, channelId: closure_2 } = getMatchData(pathname));
      getMatchData(pathname);
      let obj = basePath(dependencyMap[4]);
      obj.batchUpdates(() => {
        const obj = { path: null, guildId, channelId, basePath };
        return basePath(obj);
      });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/routing/KeybindRouterStore.tsx");

export default withEqualityFn;