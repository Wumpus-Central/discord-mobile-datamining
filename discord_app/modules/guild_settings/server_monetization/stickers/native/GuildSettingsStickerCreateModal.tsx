// === Module 16799: GuildSettingsStickerCreateModal ===

// Module 16799 (GuildSettingsStickerCreateModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  ({ guildId: require, stickerId } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  ({ onGoBack: c2, ref: c3 } = stickerId(9928)());
  const tmp2 = stickerId(9928)();
  const tmp3 = c3;
  const intl = getSystemLocale.intl;
  if (null != stickerId) {
  } else {
  }
  const tmp4 = stickerId(9930);
  return tmp3(tmp4, {
    screenKey: "guild-settings-sticker-create",
    title: intl.string(_3DzNjU),
    render() {
      return _undefined2(stickerId(_undefined[5]), { ref: _undefined2, guildId: closure_0, stickerId, onFinish: _undefined });
    }
  });
};