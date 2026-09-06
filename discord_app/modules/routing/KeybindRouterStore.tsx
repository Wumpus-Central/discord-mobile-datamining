// discord_app/modules/routing/KeybindRouterStore.tsx
import matchPathCompat from "matchPathCompat.tsx";
import Constants from "../../Constants.tsx";
import identity from "../../../_runtime/metro/01244__.js";
import size from "../../../_runtime/metro/00002__.js";

function getMatchData(pathname) {
  let str = pathname;
  let obj = matchPathCompat;
  let str2 = pathname;
  if (pathname == null) {
    str2 = "";
  }
  obj = { path: null };
  let obj2 = React2;
  const RouteParam = tmp(4399).RouteParam;
  const RouteParam2 = tmp(4399).RouteParam;
  obj.path = React2.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
  const matchPathResult = obj.matchPath(str2, obj);
  if (null != matchPathResult) {
    ({ guildId, channelId } = matchPathResult.params);
    let tmp7 = null;
    if (guildId !== React3) {
      tmp7 = guildId;
    }
    obj = { guildId: tmp7, channelId: null };
    if (channelId == null) {
      channelId = null;
    }
    obj.channelId = channelId;
    return obj;
  } else {
    if (str == null) {
      str = "";
    }
    const obj1 = { path: null };
    const RouteParam3 = tmp(4399).RouteParam;
    obj1.path = obj2.GUILD_BOOSTING_MARKETING(RouteParam3.guildId());
    const matchPathResult1 = tmp(4386).matchPath(str, obj1);
    if (null != matchPathResult1) {
      obj2 = { guildId: matchPathResult1.params.guildId, channelId: null };
      let obj3 = obj2;
    } else {
      obj3 = { guildId: null, channelId: null };
    }
    return obj3;
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
      path(1249).batchUpdates(() => path({ path, guildId, channelId }));
    },
    resetPath(pathname) {
      const basePath = pathname;
      ({ guildId: closure_1, channelId: closure_2 } = getMatchData(pathname));
      const tmp = getMatchData(pathname);
      basePath(1249).batchUpdates(() => basePath({ path: null, guildId, channelId, basePath }));
    },
  };
});
const result = size.fileFinishedImporting("modules/routing/KeybindRouterStore.tsx");

export default withEqualityFn;
