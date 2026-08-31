// === Module 13537: GuildLimitedAccessInfoAlert ===

// Module 13537 (GuildLimitedAccessInfoAlert)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4444 */;
import componentDidMountDefault from "componentDidMount" /* 4915 */;
import closure_3 from "createGuildRecordFromRust" /* 1909 */;
import { GUILD_LIMITED_ACCESS_HC_LINK as closure_4 } from "GUILD_LIMITED_ACCESS_HC_LINK" /* 13538 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importDefaultResult from "createTextStyle" /* 5429 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, text: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_BOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey.marginVertical = 12;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginVertical: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default function GuildLimitedAccessInfoAlert(arg0) {
  ({ guildId, onClose } = arg0);
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  let obj = { helpdeskArticle: closure_4 };
  guild = guild.getGuild(guildId);
  let formatResult1 = intl.format(getSystemLocale.t.ZqkXsC, obj);
  if (null != guild) {
    const intl2 = tmp2(1236).intl;
    obj = { guildName: null, helpdeskArticle: null };
    obj[0] = guild.name;
    obj[1] = tmp4;
    formatResult1 = intl2.format(tmp2(1236).t.jn0Xyx, obj);
  }
  obj = { onClose, children: null };
  const formatResult = intl.format(getSystemLocale.t.ZqkXsC, obj);
  tmp4 = closure_4;
  obj1 = { style: tmp.header, children: null };
  const intl3 = tmp2(1236).intl;
  obj1[1] = intl3.string(getSystemLocale.t.kJwpBW);
  const items = [callback(Button.LegacyText, obj1), callback(Text.Text, { style: tmp.text, variant: "text-md/medium", children: formatResult1 })];
  obj[1] = items;
  return callback2(componentDidMountDefault, obj);
};