import { matchPath } from "matchPathCompat.tsx";
// discord_app/modules/routing/KeybindRouterStore.tsx
import ME from "ME";
import identity from "identity";

let c3;
let obj1;
function getMatchData(pathname) {
  let channelId;
  let guildId;
  let str = pathname;
  let obj = matchPath /* matchPath */;
  let str2 = pathname;
  if (pathname == null) {
    str2 = "";
  }
  obj = { path: null };
  let obj2 = closure_2;
  const RouteParam = tmp(4120).RouteParam;
  const RouteParam2 = tmp(4120).RouteParam;
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
    const obj1 = { path: null };
    const RouteParam3 = tmp(4120).RouteParam;
    obj1[0] = obj2.GUILD_BOOSTING_MARKETING(RouteParam3.guildId());
    const matchPathResult1 = tmp(4107).matchPath(str, obj1);
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
  let closure_0 = arg0;
  return {
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(arg0) {
      let closure_1;
      let closure_2;
      const callback = arg0;
      ({ guildId: closure_1, channelId: closure_2 } = outer1_4(arg0));
      const tmp = outer1_4(arg0);
      callback(outer1_1[4]).batchUpdates(() => callback({ path: callback, guildId: closure_1, channelId: closure_2 }));
    },
    resetPath(pathname) {
      let closure_1;
      let closure_2;
      const callback = pathname;
      ({ guildId: closure_1, channelId: closure_2 } = outer1_4(pathname));
      const tmp = outer1_4(pathname);
      callback(outer1_1[4]).batchUpdates(() => pathname({ path: null, guildId: closure_1, channelId: closure_2, basePath: pathname }));
    }
  };
});
const result = require("RouteParam").fileFinishedImporting("modules/routing/KeybindRouterStore.tsx");

export default withEqualityFn;