// === Module 12992: GuildLimitedAccessInfoAlert ===

// Module 12992 (GuildLimitedAccessInfoAlert)
import "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GUILD_LIMITED_ACCESS_HC_LINK as closure_4 } from "GUILD_LIMITED_ACCESS_HC_LINK";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, text: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_BOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey.marginVertical = 12;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginVertical: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("GUILD_LIMITED_ACCESS_HC_LINK").fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default function GuildLimitedAccessInfoAlert(arg0) {
  let guildId;
  let onClose;
  ({ guildId, onClose } = arg0);
  const tmp = createCacheKey();
  const intl = require(1236) /* getSystemLocale */.intl;
  let obj = { helpdeskArticle: closure_4 };
  guild = guild.getGuild(guildId);
  let formatResult1 = intl.format(require(1236) /* getSystemLocale */.t.ZqkXsC, obj);
  if (null != guild) {
    const intl2 = tmp2(1236).intl;
    obj = { guildName: null, helpdeskArticle: null };
    obj[0] = guild.name;
    obj[1] = tmp4;
    formatResult1 = intl2.format(tmp2(1236).t.jn0Xyx, obj);
  }
  obj = { onClose, children: null };
  const formatResult = intl.format(require(1236) /* getSystemLocale */.t.ZqkXsC, obj);
  tmp4 = closure_4;
  const obj1 = { style: tmp.header, children: null };
  const intl3 = tmp2(1236).intl;
  obj1[1] = intl3.string(require(1236) /* getSystemLocale */.t.kJwpBW);
  const items = [callback(require(1297) /* Button */.LegacyText, obj1), callback(require(4189) /* Text */.Text, { style: tmp.text, variant: "text-md/medium", children: formatResult1 })];
  obj[1] = items;
  return callback2(importDefault(4622), obj);
};