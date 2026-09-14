// === Module 13920: GuildLimitedAccessInfoAlert ===

// Module 13920 (GuildLimitedAccessInfoAlert)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import Text_Text from "Text/Text" /* 4632 */;
import common_AlertDefault from "common/Alert" /* 5075 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import TextStyles from "TextStyles" /* 5605 */;

require = fn;
const helpdeskArticle = fn(13921).GUILD_LIMITED_ACCESS_HC_LINK;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = { header: null, text: null };
let obj3 = {};
const merged = Object.assign(TextStyles(fn(1074).Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj3.marginVertical = 12;
obj2.header = obj3;
obj2.text = { textAlign: "center", marginVertical: 8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default function GuildLimitedAccessInfoAlert(arg0) {
  ({ guildId, onClose } = arg0);
  const tmp = closure_7();
  const intl = util.intl;
  const guild = GuildStore.getGuild(guildId);
  let formatResult1 = intl.format(util.t.ZqkXsC, { helpdeskArticle });
  if (null != guild) {
    const intl2 = util.intl;
    const obj2 = { guildName: guild.name, helpdeskArticle };
    formatResult1 = intl2.format(util.t.jn0Xyx, obj2);
  }
  const obj3 = { onClose, children: null };
  const formatResult = intl.format(util.t.ZqkXsC, { helpdeskArticle });
  const obj = { helpdeskArticle };
  const obj4 = { style: tmp.header, children: null };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t.kJwpBW);
  const items = [hasOwnProperty(native.LegacyText, obj4), hasOwnProperty(Text_Text.Text, { style: tmp.text, variant: "text-md/medium", children: formatResult1 })];
  obj3.children = items;
  return timestampProducer(common_AlertDefault, obj3);
};