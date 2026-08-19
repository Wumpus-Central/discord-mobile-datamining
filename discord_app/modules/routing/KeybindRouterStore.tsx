// === Module 12641: getMatchData ===

// Module 12641 (getMatchData)
import obj132 from "obj132" /* 2 */;
import matchPath from "matchPath" /* 4202 */;
import RouteParam4 from "RouteParam" /* 4215 */;
import ME from "ME" /* 676 */;
import identity from "identity" /* 700 */;

function getMatchData(pathname) {
  let str = pathname;
  let obj = matchPath;
  let str2 = pathname;
  if (pathname == null) {
    str2 = "";
  }
  obj = { path: null };
  let obj2 = closure_2;
  const RouteParam = RouteParam4.RouteParam;
  const RouteParam2 = RouteParam4.RouteParam;
  obj[0] = closure_2.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
  const matchPathResult = obj.matchPath(str2, obj);
  if (null != matchPathResult) {
    ({ guildId, channelId } = matchPathResult.params);
    let tmp7 = null;
    if (guildId !== closure_3) {
      tmp7 = guildId;
    }
    obj = { guildId: null, channelId: null };
    obj[0] = tmp7;
    if (channelId == null) {
      channelId = null;
    }
    obj[1] = channelId;
    return obj;
  } else {
    if (str == null) {
      str = "";
    }
    obj1 = { path: null };
    const RouteParam3 = RouteParam4.RouteParam;
    obj1[0] = obj2.GUILD_BOOSTING_MARKETING(RouteParam3.guildId());
    const matchPathResult1 = matchPath.matchPath(str, obj1);
    if (null != matchPathResult1) {
      obj2 = { guildId: null, channelId: null };
      obj2[0] = matchPathResult1.params.guildId;
      let obj3 = obj2;
    } else {
      obj3 = { guildId: null, channelId: null };
    }
    return obj3;
  }
  const guildIdResult = RouteParam.guildId();
}
({ Routes: obj1, ME: c3 } = ME);
const withEqualityFn = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  return {
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(arg0) {
      const callback = arg0;
      ({ guildId: closure_1, channelId: closure_2 } = getMatchData(arg0));
      const tmp = getMatchData(arg0);
      callback(dependencyMap[4]).batchUpdates(() => callback({ path: callback, guildId: closure_1, channelId: closure_2 }));
    },
    resetPath(pathname) {
      const callback = pathname;
      ({ guildId: closure_1, channelId: closure_2 } = getMatchData(pathname));
      const tmp = getMatchData(pathname);
      callback(dependencyMap[4]).batchUpdates(() => pathname({ path: null, guildId: closure_1, channelId: closure_2, basePath: pathname }));
    }
  };
});
const result = obj132.fileFinishedImporting("modules/routing/KeybindRouterStore.tsx");

export default withEqualityFn;