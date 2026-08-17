// discord_app/modules/launchpad/native/LaunchPadMembers.tsx
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import _modDef10785 from "module_10785" /* 10785 */;
import _modDef11364 from "module_11364" /* 11364 */;
import _modDef15910 from "module_15910" /* 15910 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "handleConnectionOpen" /* 1979 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_7 = createCacheKey.createStyles({ wrapper: { minHeight: 16 }, listStyle: { flex: 0 }, emptyWrapper: { padding: 20 }, emptyText: { textAlign: "center" } });
const memoResult = importAllResult.memo(function LaunchPadMembers() {
  const tmp = callback();
  let obj = defaultAreStatesEqual;
  const items = [closure_5, closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    channel = channel.getChannel(currentlySelectedChannelId);
    if (null != currentlySelectedChannelId) {
      if (null != channel) {
        if (channel.isPrivate()) {
          let obj = { channelId: null, type: "private" };
          obj[0] = currentlySelectedChannelId;
          return obj;
        } else {
          const guild_id = channel.guild_id;
          if (channel.isThread()) {
            obj = { channelId: null, guildId: null, type: "thread" };
            obj[0] = currentlySelectedChannelId;
            obj[1] = guild_id;
            obj1 = obj;
          } else {
            obj1 = { channelId: null, guildId: null, type: "guild" };
            obj1[0] = currentlySelectedChannelId;
            obj1[1] = guild_id;
          }
          return obj1;
        }
      }
    }
    return { channelId: "call", type: 996432433 };
  });
  if ("private" === stateFromStoresObject.type) {
    obj = { style: null, children: null };
    obj[0] = tmp.wrapper;
    obj = { channelId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    obj[0] = stateFromStoresObject.channelId;
    obj[1] = tmp.listStyle;
    obj[1] = jsx(_modDef11364, { channelId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    let tmp8 = <View channelId={null} listStyleOverride={null} disableBottomSafeZone insetEnd={20} />;
  } else if ("thread" === stateFromStoresObject.type) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.wrapper;
    const obj2 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj5[0], guildId: obj5[1] } = stateFromStoresObject);
    obj2[2] = tmp.listStyle;
    obj1[1] = jsx(_modDef15910, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={null}>{null}</View>;
  } else if ("guild" === stateFromStoresObject.type) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.wrapper;
    const obj4 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj3[0], guildId: obj3[1] } = stateFromStoresObject);
    obj4[2] = tmp.listStyle;
    obj3[1] = jsx(_modDef10785, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={null}>{null}</View>;
  } else {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.emptyWrapper;
    const obj6 = { style: null, variant: "text-md/semibold", children: null };
    obj6[0] = tmp.emptyText;
    const intl = tmp2(1236).intl;
    obj6[2] = intl.string(tmp2(1236).t["+7wtJq"]);
    obj5[1] = jsx(tmp2(4734).Text, { style: null, variant: "text-md/semibold", children: null });
    tmp8 = <View style={null}>{null}</View>;
  }
  return tmp8;
});
const result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default memoResult;