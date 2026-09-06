// discord_app/modules/launchpad/native/LaunchPadMembers.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import GuildChannelUserListDefault from "../../main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx";
import PrivateChannelUserListDefault from "../../main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx";
import ThreadChannelUserListDefault from "../../main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  wrapper: { minHeight: 16 },
  listStyle: { flex: 0 },
  emptyWrapper: { padding: 20 },
  emptyText: { textAlign: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default noop.memo(function LaunchPadMembers() {
  const tmp = closure_7();
  let obj = useStateFromStores;
  const items = [SelectedChannelStore, ChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    channel = channel.getChannel(currentlySelectedChannelId);
    if (null != currentlySelectedChannelId) {
      if (null != channel) {
        if (channel.isPrivate()) {
          let obj = { channelId: currentlySelectedChannelId, type: "private" };
          return obj;
        } else {
          const guild_id = channel.guild_id;
          if (channel.isThread()) {
            obj = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
            let obj1 = obj;
          } else {
            obj1 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "guild" };
          }
          return obj1;
        }
      }
    }
    return { channelId: "call", type: "143" };
  });
  if ("private" === stateFromStoresObject.type) {
    obj = { style: tmp.wrapper, children: null };
    obj = {
      channelId: stateFromStoresObject.channelId,
      listStyleOverride: tmp.listStyle,
      disableBottomSafeZone: true,
      insetEnd: 20,
    };
    obj.children = jsx(
      PrivateChannelUserListDefault,
      {
        channelId: stateFromStoresObject.channelId,
        listStyleOverride: tmp.listStyle,
        disableBottomSafeZone: true,
        insetEnd: 20,
      },
      stateFromStoresObject.channelId,
    );
    let tmp8 = (
      <View
        channelId={stateFromStoresObject.channelId}
        listStyleOverride={tmp.listStyle}
        disableBottomSafeZone
        insetEnd={20}
      />
    );
  } else if ("thread" === stateFromStoresObject.type) {
    let obj1 = { style: tmp.wrapper, children: null };
    const obj2 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
    obj2.listStyleOverride = tmp.listStyle;
    obj1.children = jsx(
      ThreadChannelUserListDefault,
      { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 },
      stateFromStoresObject.channelId,
    );
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("guild" === stateFromStoresObject.type) {
    const obj3 = { style: tmp.wrapper, children: null };
    const obj4 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = stateFromStoresObject);
    obj4.listStyleOverride = tmp.listStyle;
    obj3.children = jsx(
      GuildChannelUserListDefault,
      { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 },
      stateFromStoresObject.channelId,
    );
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else {
    const obj5 = { style: tmp.emptyWrapper, children: null };
    const obj6 = { style: tmp.emptyText, variant: "text-md/semibold", children: null };
    const intl = tmp2(1114).intl;
    obj6.children = intl.string(tmp2(1114).t["+7wtJq"]);
    obj5.children = jsx(tmp2(4556).Text, { style: tmp.emptyText, variant: "text-md/semibold", children: null });
    tmp8 = <View style={tmp.emptyWrapper}>{null}</View>;
  }
  return tmp8;
});
