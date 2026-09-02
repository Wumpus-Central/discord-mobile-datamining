// === Module 16025: GuildRoleSubscriptionsRow ===

// Module 16025 (GuildRoleSubscriptionsRow)
import ThemesDefault from "Themes" /* 709 */;
import BaseChannelSubtitleDefault from "BaseChannelSubtitle" /* 12171 */;
import registerAssetDefault from "registerAsset" /* 12541 */;
import closure_3 from "noop" /* 19 */;
import { Routes } from "ME" /* 673 */;
import { StaticChannelRoute } from "set" /* 1393 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx");

export default function GuildRoleSubscriptionsRow(selected) {
  selected = selected.selected;
  let id;
  importDefault = undefined;
  id = selected.guild.id;
  const items = [id];
  importDefault = "role-subscriptions-channel-action-sheet";
  const items1 = [id];
  const callback = React.useCallback(() => {
    id(closure_1_2[7]).transitionTo(closure_1_4.CHANNEL(id, closure_1_5.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = rolesubscriptionschannelactionsheet(closure_1_2[8]);
    obj = {
      guildId: id,
      onClose() {
        closure_1_1(closure_1_2[8]).hideActionSheet(closure_1);
      }
    };
    obj.openLazy(id(closure_1_2[10])(closure_1_2[9], closure_1_2.paths), rolesubscriptionschannelactionsheet, obj);
  }, items1);
  const ChannelModes = id(12171).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  let obj = { onPress: callback, onLongPress: callback1, style: callback().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = callback();
  const intl = tmp6(1233).intl;
  obj[4] = intl.string(tmp6(1233).t["KzCF/6"]);
  obj[5] = { selected };
  obj[6] = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp6(1233).intl;
  obj[0] = intl2.string(tmp6(1233).t["KzCF/6"]);
  obj[1] = DEFAULT;
  obj[7] = jsx(tmp6(12171).BaseChannelName, { name: null, mode: null });
  obj = { disableColor: true, mode: DEFAULT, source: registerAssetDefault };
  obj[8] = jsx(tmp6(12171).BaseChannelIcon, { disableColor: true, mode: DEFAULT, source: registerAssetDefault });
  return jsx(BaseChannelSubtitleDefault, { disableColor: true, mode: DEFAULT, source: registerAssetDefault });
};