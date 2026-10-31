// discord_app/modules/conjure/app_channel/native/ConjureAppChannelMembersSheet.tsx
import openConjureAppChannelSheet from "openConjureAppChannelSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const UsersFastListConstants = fn(10734);
({ USERS_LIST_PADDING_BETWEEN_SECTIONS, USERS_LIST_SECTION_BOTTOM_PADDING } = UsersFastListConstants);
const jsx = fn(21).jsx;
const diff = USERS_LIST_PADDING_BETWEEN_SECTIONS - USERS_LIST_SECTION_BOTTOM_PADDING;
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles({ body: { overflow: "hidden" }, list: { marginTop: -diff } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelMembersSheet.tsx");

export default noop.memo(function ConjureAppChannelMembersSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_6();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items2 = [guild_id];
  const effect = noop.useEffect(() => {
    if (null == guild_id) {
      const result = openConjureAppChannelSheet.closeConjureAppChannelMembersSheet();
    }
  }, items2);
  let tmp7 = null;
  if (null != guild_id) {
    const obj2 = { startExpanded: true, scrollable: true, bodyStyles: tmp.body, children: null };
    const obj3 = {
      channelId,
      guildId: guild_id,
      headerShown: false,
      inActionSheet: true,
      disableStickySections: true,
      disableThemedGradient: true,
      listStyleOverride: tmp.list,
    };
    obj2.children = jsx(guild_id(11620), {
      channelId,
      guildId: guild_id,
      headerShown: false,
      inActionSheet: true,
      disableStickySections: true,
      disableThemedGradient: true,
      listStyleOverride: tmp.list,
    });
    tmp7 = jsx(channelId(5272).BottomSheet, {
      startExpanded: true,
      scrollable: true,
      bodyStyles: tmp.body,
      children: null,
    });
  }
  return tmp7;
});
