// === Module 15542: VibegrationsChannelRow ===

// Module 15542 (VibegrationsChannelRow)
import ThemesDefault from "Themes" /* 712 */;
import messagesProxyDefault from "messagesProxy" /* 3404 */;
import BaseChannelSubtitleDefault from "BaseChannelSubtitle" /* 11602 */;
import closure_3 from "noop" /* 19 */;
import { Routes } from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelRow.tsx");

export default function VibegrationsChannelRow(selected) {
  selected = selected.selected;
  let id;
  id = selected.guild.id;
  const items = [id];
  const callback = React.useCallback(() => {
    id(closure_1_2[7]).transitionTo(closure_1_4.CHANNEL(id, closure_1_5.VIBEGRATIONS));
  }, items);
  if (true === selected) {
    let DEFAULT = id(11602).ChannelModes.SELECTED;
    let tmp5 = id;
  } else {
    DEFAULT = id(11602).ChannelModes.DEFAULT;
    tmp5 = id;
  }
  let obj = { onPress: callback, style: callback().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = callback();
  const intl = tmp5(1236).intl;
  obj[3] = intl.string(messagesProxyDefault.Xmvb23);
  obj[4] = { selected };
  obj[5] = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp5(1236).intl;
  obj[0] = intl2.string(messagesProxyDefault.Xmvb23);
  obj[1] = DEFAULT;
  obj[6] = jsx(tmp5(11602).BaseChannelName, { name: null, mode: null });
  obj = { mode: DEFAULT, IconComponent: tmp5(10133).MagicWandIcon };
  obj[7] = jsx(tmp5(11602).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(10133).MagicWandIcon });
  return jsx(BaseChannelSubtitleDefault, { mode: DEFAULT, IconComponent: tmp5(10133).MagicWandIcon });
};