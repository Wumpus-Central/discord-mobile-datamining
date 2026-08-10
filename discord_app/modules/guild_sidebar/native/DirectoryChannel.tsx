// discord_app/modules/guild_sidebar/native/DirectoryChannel.tsx
import importAllResult from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let obj = { container: null };
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  let selected = guildId.selected;
  let id;
  let obj = guildId(647);
  const items = [ensureGuildLoaded, comparator];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const directoryChannelIds = outer1_5.getDirectoryChannelIds(guildId);
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = outer1_4.getChannel(directoryChannelIds[0]);
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
    guildId(outer1_2[9]).transitionToGuild(guildId, id);
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { onPress: null, onLongPress: null, style: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
    obj[0] = callback;
    obj[1] = tmp6;
    obj[2] = tmp.container;
    obj = { channel: null };
    obj[0] = stateFromStores;
    obj[5] = id(9033)(obj);
    const obj1 = { selected: null };
    obj1[0] = selected;
    obj[6] = obj1;
    obj[7] = stateFromStores;
    obj[8] = selected;
    obj[9] = UnreadSetting.ONLY_MENTIONS;
    tmp7 = jsx(id(15248), { channel: null });
    const tmp10 = id(15248);
  }
  return tmp7;
});
let result = require("comparator").fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default memoResult;