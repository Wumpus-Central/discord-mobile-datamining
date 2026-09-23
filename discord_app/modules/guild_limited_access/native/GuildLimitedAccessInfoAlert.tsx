// discord_app/modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import common_AlertDefault from "../../../components_native/common/Alert.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import TextStyles from "../../rebrand/native/TextStyles.tsx";

require = fn;
const helpdeskArticle = fn(14190).GUILD_LIMITED_ACCESS_HC_LINK;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = { header: null, text: null };
let obj3 = {};
const merged = Object.assign(
  TextStyles(fn(1074).Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
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
  const items = [
    hasOwnProperty(native.LegacyText, obj4),
    hasOwnProperty(Text_Text.Text, { style: tmp.text, variant: "text-md/medium", children: formatResult1 }),
  ];
  obj3.children = items;
  return timestampProducer(common_AlertDefault, obj3);
}
