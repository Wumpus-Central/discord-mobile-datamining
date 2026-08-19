// discord_app/modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import componentDidMountDefault from "../../../components_native/common/Alert.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import { GUILD_LIMITED_ACCESS_HC_LINK as closure_4 } from "../GuildLimitedAccessConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../rebrand/native/TextStyles.tsx";

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_BOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey.marginVertical = 12;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginVertical: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default function GuildLimitedAccessInfoAlert(arg0) {
  ({ guildId, onClose } = arg0);
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  let obj = { helpdeskArticle: closure_4 };
  guild = guild.getGuild(guildId);
  let formatResult1 = intl.format(getSystemLocale.t.ZqkXsC, obj);
  if (null != guild) {
    const intl2 = getSystemLocale.intl;
    obj = { guildName: null, helpdeskArticle: null };
    obj[0] = guild.name;
    obj[1] = closure_4;
    formatResult1 = intl2.format(getSystemLocale.t.jn0Xyx, obj);
  }
  obj = { onClose, children: null };
  const formatResult = intl.format(getSystemLocale.t.ZqkXsC, obj);
  obj1 = { style: tmp.header, children: null };
  const intl3 = getSystemLocale.intl;
  obj1[1] = intl3.string(getSystemLocale.t.kJwpBW);
  const items = [callback(Button.LegacyText, obj1), callback(Text.Text, { style: tmp.text, variant: "text-md/medium", children: formatResult1 })];
  obj[1] = items;
  return callback2(componentDidMountDefault, obj);
};