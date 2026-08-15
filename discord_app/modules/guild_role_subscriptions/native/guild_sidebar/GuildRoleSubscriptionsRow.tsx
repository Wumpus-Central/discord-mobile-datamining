// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx
import noop from "noop";
import { Routes } from "ME";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/11954_registerAsset.js";
import { BaseChannelSubtitle } from "../../../guild_sidebar/native/BaseChannelItem.tsx";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx");

export default function GuildRoleSubscriptionsRow(selected) {
  selected = selected.selected;
  let id;
  let importDefault;
  id = selected.guild.id;
  const items = [id];
  importDefault = "role-subscriptions-channel-action-sheet";
  const items1 = [id];
  const callback = React.useCallback(() => {
    id(outer1_2[7]).transitionTo(outer1_4.CHANNEL(id, outer1_5.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = rolesubscriptionschannelactionsheet(outer1_2[8]);
    obj = {
      guildId: id,
      onClose() {
        outer1_1(outer1_2[8]).hideActionSheet(closure_1);
      }
    };
    obj.openLazy(id(outer1_2[10])(outer1_2[9], outer1_2.paths), rolesubscriptionschannelactionsheet, obj);
  }, items1);
  const ChannelModes = id(11553).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  let obj = { onPress: callback, onLongPress: callback1, style: createCacheKey().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = createCacheKey();
  const intl = tmp6(1236).intl;
  obj[4] = intl.string(tmp6(1236).t["KzCF/6"]);
  obj[5] = { selected };
  obj[6] = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp6(1236).intl;
  obj[0] = intl2.string(tmp6(1236).t["KzCF/6"]);
  obj[1] = DEFAULT;
  obj[7] = jsx(tmp6(11553).BaseChannelName, { name: null, mode: null });
  obj = { disableColor: true, mode: DEFAULT, source: null };
  obj[2] = registerAsset;
  obj[8] = jsx(tmp6(11553).BaseChannelIcon, { disableColor: true, mode: DEFAULT, source: null });
  return jsx(BaseChannelSubtitle, { disableColor: true, mode: DEFAULT, source: null });
};