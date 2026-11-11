// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx
import util from "../../../../../intl/index.native.tsx";
import Link from "../../../../../../_runtime/01500_Link.js";
import GuildSettingsStickerCreateDefault from "GuildSettingsStickerCreate.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx",
);

export default function GuildSettingsStickerCreateModal(arg0) {
  ({ guildId: require, stickerId } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  ({ onGoBack: c2, ref: c3 } = stickerId(10841)());
  const tmp2 = stickerId(10841)();
  const isFocused = Link.useIsFocused();
  stickerId(6269)(() => {
    onFinish(true);
    return true;
  }, isFocused);
  const tmp6 = c3;
  const intl = util.intl;
  if (null != stickerId) {
    let tdhW5b = util.t.tdhW5b;
  } else {
    tdhW5b = util.t["3DzNjU"];
  }
  const tmp7 = stickerId(10844);
  return tmp6(tmp7, {
    screenKey: "guild-settings-sticker-create",
    title: intl.string(tdhW5b),
    render() {
      return jsx(GuildSettingsStickerCreateDefault, { ref, guildId, stickerId, onFinish });
    },
  });
}
