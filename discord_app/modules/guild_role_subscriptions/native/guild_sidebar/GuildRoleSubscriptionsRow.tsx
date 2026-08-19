// === Module 15467: GuildRoleSubscriptionsRow ===

// Module 15467 (GuildRoleSubscriptionsRow)
import ThemesDefault from "Themes" /* 712 */;
import BaseChannelSubtitleDefault from "BaseChannelSubtitle" /* 11553 */;
import registerAssetDefault from "registerAsset" /* 11954 */;
import noop from "noop" /* 19 */;
import { Routes } from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
const createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx");

export default function GuildRoleSubscriptionsRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  importDefault = "role-subscriptions-channel-action-sheet";
  const items1 = [id];
  const callback = React.useCallback(() => {
    id(dependencyMap[7]).transitionTo(Routes.CHANNEL(id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = React.useCallback(() => {
    rolesubscriptionschannelactionsheet(dependencyMap[8]);
    const obj = {
      guildId: id,
      onClose() {
        closure_1_1(closure_1_2[8]).hideActionSheet(closure_1);
      }
    };
    obj.openLazy(id(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), rolesubscriptionschannelactionsheet, obj);
  }, items1);
  const ChannelModes = id(11553).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  let obj = { onPress: callback, onLongPress: callback1, style: callback().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = callback();
  const intl = tmp6(1236).intl;
  obj[4] = intl.string(tmp6(1236).t["KzCF/6"]);
  obj[5] = { selected };
  obj[6] = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp6(1236).intl;
  obj[0] = intl2.string(tmp6(1236).t["KzCF/6"]);
  obj[1] = DEFAULT;
  obj[7] = jsx(tmp6(11553).BaseChannelName, { name: null, mode: null });
  obj = { disableColor: true, mode: DEFAULT, source: registerAssetDefault };
  obj[8] = jsx(tmp6(11553).BaseChannelIcon, { disableColor: true, mode: DEFAULT, source: registerAssetDefault });
  return jsx(BaseChannelSubtitleDefault, { disableColor: true, mode: DEFAULT, source: registerAssetDefault });
};