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
const helpdeskArticle = fn(13832).GUILD_LIMITED_ACCESS_HC_LINK;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { header: null, text: null };
createStyles = {};
const merged = Object.assign(
  TextStyles(fn(1074).Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
createStyles.textAlign = "center";
createStyles.marginVertical = 12;
createStyles.header = createStyles;
createStyles.text = { textAlign: "center", marginVertical: 8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default function GuildLimitedAccessInfoAlert(arg0) {
  ({ guildId, onClose } = arg0);
  const tmp = closure_7();
  const intl = util.intl;
  let obj = { helpdeskArticle };
  const guild = GuildStore.getGuild(guildId);
  let formatResult1 = intl.format(util.t.ZqkXsC, obj);
  if (null != guild) {
    const intl2 = util.intl;
    obj = { guildName: guild.name, helpdeskArticle };
    formatResult1 = intl2.format(util.t.jn0Xyx, obj);
  }
  obj = { onClose, children: null };
  const formatResult = intl.format(util.t.ZqkXsC, obj);
  const obj1 = { style: tmp.header, children: null };
  const intl3 = util.intl;
  obj1.children = intl3.string(util.t.kJwpBW);
  const items = [
    hasOwnProperty(native.LegacyText, obj1),
    hasOwnProperty(Text_Text.Text, { style: tmp.text, variant: "text-md/medium", children: formatResult1 }),
  ];
  obj.children = items;
  return timestampProducer(common_AlertDefault, obj);
}
