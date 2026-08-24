// discord_app/modules/guild_sidebar/native/DirectoryChannel.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/GuildChannelStore.tsx";
import { UnreadSetting } from "../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
let obj = { container: null };
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  let selected = guildId.selected;
  let id;
  let obj = guildId(647);
  const items = [closure_4, closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const directoryChannelIds = closure_1_5.getDirectoryChannelIds(guildId);
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = closure_1_4.getChannel(directoryChannelIds[0]);
    }
    return channel;
  });
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (!selected) {
    selected = id === guildId.selectedChannelId;
  }
  const items1 = [guildId, id];
  [][0] = id;
  const callback = importAllResult.useCallback(() => {
    guildId(closure_1_2[9]).transitionToGuild(guildId, id);
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { onPress: null, onLongPress: null, style: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
    obj[0] = callback;
    obj[1] = tmp6;
    obj[2] = tmp.container;
    obj = { channel: null };
    obj[0] = stateFromStores;
    obj[5] = id(8923)(obj);
    obj1 = { selected: null };
    obj1[0] = selected;
    obj[6] = obj1;
    obj[7] = stateFromStores;
    obj[8] = selected;
    obj[9] = UnreadSetting.ONLY_MENTIONS;
    tmp7 = jsx(id(15442), { channel: null });
    const tmp10 = id(15442);
  }
  return tmp7;
});
let result = require("set").fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default memoResult;