// discord_app/modules/guild_themes/useGuildThemeNuxTrigger.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import GuildThemeResolver from "GuildThemeResolver.tsx";
import useSelectedDismissibleContent from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let constants = fn(1954).DismissibleContentGroupName;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(guildId, isNuxOpen) {
  closure_0 = guildId;
  isNuxOpen = isNuxOpen.isNuxOpen;
  const openNux = isNuxOpen.openNux;
  closure_3 = undefined;
  constants = undefined;
  const enabledGuildThemeForGuildId = GuildThemeResolver.useEnabledGuildThemeForGuildId(
    guildId,
    "GuildThemeNuxTrigger",
  );
  if (null != enabledGuildThemeForGuildId) {
    const items = [tmp(1943).DismissibleContent.GUILD_THEME_NUX];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp4 = _slicedToArray(
    useSelectedDismissibleContent.useSelectedDismissibleContent(items1, constants.GUILD_THEME_NUX),
    2,
  );
  closure_3 = tmp5;
  const tmp6 = tmp4[0] === dismissible_content.DismissibleContent.GUILD_THEME_NUX;
  constants = tmp6;
  noop.useRef(false);
  const items2 = [guildId];
  const effect = noop.useEffect(() => {
    closure_5.current = false;
  }, items2);
  const items3 = [tmp6, isNuxOpen, guildId, tmp4[1], openNux];
  const effect1 = noop.useEffect(() => {
    if (closure_4) {
      if (!isNuxOpen) {
        if (!ref.current) {
          const _setTimeout = setTimeout;
          guildId = setTimeout(() => {
            closure_5.current = true;
            guildId = false;
            const resolved = Promise.resolve(
              closure_2({
                guildId,
                markAsDismissed(arg0) {
                  if (!c0) {
                    c0 = true;
                    closure_2_3(arg0, true);
                  }
                },
              }),
            );
            resolved.catch(() => {
              closure_1_5.current = false;
            });
          }, 2000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items3);
}
export const GUILD_THEME_NUX_DELAY_MS = 2000;
