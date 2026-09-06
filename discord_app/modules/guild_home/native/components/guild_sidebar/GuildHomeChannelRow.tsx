// === Module 16207: GuildHomeChannelRow ===

// Module 16207 (GuildHomeChannelRow)
import ThemesDefault from "Themes" /* 576 */;
import BaseChannelSubtitleDefault from "BaseChannelSubtitle" /* 12379 */;
import closure_3 from "noop" /* 19 */;
import { Routes } from "ME" /* 1074 */;
import { StaticChannelRoute } from "set" /* 1964 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default function GuildHomeChannelRow(selected) {
  selected = selected.selected;
  let id;
  id = selected.guild.id;
  const items = [id];
  const callback = React.useCallback(() => {
    id(closure_1_2[7]).transitionTo(closure_1_4.CHANNEL(id, closure_1_5.GUILD_HOME));
  }, items);
  const ChannelModes = id(12379).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  let obj = { onPress: callback, style: callback().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = callback();
  const intl = tmp5(1114).intl;
  obj[3] = intl.string(tmp5(1114).t.VbpLyU);
  obj[4] = { selected };
  obj[5] = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp5(1114).intl;
  obj[0] = intl2.string(tmp5(1114).t.VbpLyU);
  obj[1] = DEFAULT;
  obj[6] = jsx(tmp5(12379).BaseChannelName, { name: null, mode: null });
  obj = { mode: DEFAULT, IconComponent: tmp5(13841).SignPostIcon };
  obj[7] = jsx(tmp5(12379).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(13841).SignPostIcon });
  return jsx(BaseChannelSubtitleDefault, { mode: DEFAULT, IconComponent: tmp5(13841).SignPostIcon });
};