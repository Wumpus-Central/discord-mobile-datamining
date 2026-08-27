// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  ({ guildId: require, stickerId } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  ({ onGoBack: c2, ref: c3 } = stickerId(10579)());
  const tmp2 = stickerId(10579)();
  const tmp3 = c3;
  const intl = getSystemLocale.intl;
  if (null != stickerId) {
  } else {
  }
  const tmp4 = stickerId(10581);
  return tmp3(tmp4, {
    screenKey: "guild-settings-sticker-create",
    title: intl.string(_3DzNjU),
    render() {
      return _undefined2(stickerId(_undefined[5]), { ref: _undefined2, guildId: closure_0, stickerId, onFinish: _undefined });
    }
  });
};