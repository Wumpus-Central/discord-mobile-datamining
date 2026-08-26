// === Module 15602: useGuildThemeNuxTrigger ===

// Module 15602 (useGuildThemeNuxTrigger)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { DismissibleContentGroupName as closure_4 } from "ContentDismissActionType" /* 1388 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_themes/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(guildId, isNuxOpen) {
  const _require = guildId;
  isNuxOpen = isNuxOpen.isNuxOpen;
  const openNux = isNuxOpen.openNux;
  let React;
  let constants;
  closure_5 = undefined;
  const enabledGuildThemeForGuildId = _require(isNuxOpen[3]).useEnabledGuildThemeForGuildId(guildId, "GuildThemeNuxTrigger");
  const obj = _require(isNuxOpen[3]);
  if (null != enabledGuildThemeForGuildId) {
    const items = [tmp(tmp2[5]).DismissibleContent.GUILD_THEME_NUX];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp4 = openNux(_require(isNuxOpen[4]).useSelectedDismissibleContent(items1, constants.GUILD_THEME_NUX), 2);
  React = tmp5;
  const tmp6 = tmp4[0] === _require(isNuxOpen[5]).DismissibleContent.GUILD_THEME_NUX;
  constants = tmp6;
  closure_5 = React.useRef(false);
  const items2 = [guildId];
  const effect = React.useEffect(() => {
    closure_5.current = false;
  }, items2);
  const items3 = [tmp6, isNuxOpen, guildId, tmp4[1], openNux];
  const effect1 = React.useEffect(() => {
    if (closure_4) {
      if (!isNuxOpen) {
        if (!ref.current) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_5.current = true;
            c0 = false;
            const resolved = Promise.resolve(callback({
              guildId: c0,
              markAsDismissed(arg0) {
                if (!c0) {
                  c0 = true;
                  closure_1_3(arg0, true);
                }
              }
            }));
            resolved.catch(() => {
              closure_5.current = false;
            });
          }, 2000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items3);
};
export const GUILD_THEME_NUX_DELAY_MS = 2000;