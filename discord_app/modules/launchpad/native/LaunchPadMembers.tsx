// discord_app/modules/launchpad/native/LaunchPadMembers.tsx
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { GuildChannelUserList } from "../../main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx";
import { PrivateChannelUserList } from "../../main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx";
import { ThreadChannelUserList } from "../../main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ wrapper: { minHeight: 16 }, listStyle: { flex: 0 }, emptyWrapper: { padding: 20 }, emptyText: { textAlign: "center" } });
const memoResult = require("noop").memo(function LaunchPadMembers() {
  const tmp = callback();
  let obj = defaultAreStatesEqual /* defaultAreStatesEqual */;
  const items = [handleConnectionOpen, ensureGuildLoaded];
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
            let obj1 = obj;
          } else {
            obj1 = { channelId: null, guildId: null, type: "guild" };
            obj1[0] = currentlySelectedChannelId;
            obj1[1] = guild_id;
          }
          return obj1;
        }
      }
    }
    return { channelId: "call", type: null };
  });
  if ("private" === stateFromStoresObject.type) {
    obj = { style: null, children: null };
    obj[0] = tmp.wrapper;
    obj = { channelId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    obj[0] = stateFromStoresObject.channelId;
    obj[1] = tmp.listStyle;
    obj[1] = jsx(PrivateChannelUserList, { channelId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    let tmp8 = <View channelId={null} listStyleOverride={null} disableBottomSafeZone insetEnd={20} />;
  } else if ("thread" === stateFromStoresObject.type) {
    let obj1 = { style: null, children: null };
    obj1[0] = tmp.wrapper;
    const obj2 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj5[0], guildId: obj5[1] } = stateFromStoresObject);
    obj2[2] = tmp.listStyle;
    obj1[1] = jsx(ThreadChannelUserList, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={null}>{null}</View>;
  } else if ("guild" === stateFromStoresObject.type) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.wrapper;
    const obj4 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj3[0], guildId: obj3[1] } = stateFromStoresObject);
    obj4[2] = tmp.listStyle;
    obj3[1] = jsx(GuildChannelUserList, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={null}>{null}</View>;
  } else {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.emptyWrapper;
    const obj6 = { style: null, variant: "text-md/semibold", children: null };
    obj6[0] = tmp.emptyText;
    const intl = tmp2(1236).intl;
    obj6[2] = intl.string(tmp2(1236).t["+7wtJq"]);
    obj5[1] = jsx(tmp2(4281).Text, { style: null, variant: "text-md/semibold", children: null });
    tmp8 = <View style={null}>{null}</View>;
  }
  return tmp8;
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default memoResult;