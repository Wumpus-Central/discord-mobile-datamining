// === Module 5901: GuildLimitedAccessInfoAlert ===

// Module 5901 (GuildLimitedAccessInfoAlert)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import common_AlertDefault from "common/Alert" /* 5395 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import TextStyles from "TextStyles" /* 5903 */;

require = fn;
const helpdeskArticle = fn(5902).GUILD_LIMITED_ACCESS_HC_LINK;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { header: null, text: null };
let obj3 = {};
const merged = Object.assign(TextStyles(fn(1085).Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj3.marginVertical = 12;
obj2.header = obj3;
obj2.text = { textAlign: "center", marginVertical: 8 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildLimitedAccessInfoAlert(arg0) {
  const cResult = c.c(13);
  ({ guildId, onClose } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const obj2 = { helpdeskArticle };
    const formatResult = intl.format(util.t.ZqkXsC, obj2);
    cResult[0] = formatResult;
    let first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      const intl2 = util.intl;
      const obj3 = { guildName: guild.name, helpdeskArticle };
      first = intl2.format(util.t.jn0Xyx, obj3);
    }
    cResult[1] = guildId;
    cResult[2] = first;
    let tmp8 = first;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult = intl3.string(util.t.kJwpBW);
    cResult[3] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp4.header) {
    const obj4 = { style: tmp4.header, children: tmp13 };
    const tmp17 = hasOwnProperty(native.LegacyText, obj4);
    cResult[4] = tmp4.header;
    cResult[5] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === tmp8) {
    if (cResult[7] === tmp4.text) {
      let tmp18 = cResult[8];
    }
    if (cResult[9] === onClose) {
      if (cResult[10] === tmp15) {
        if (cResult[11] === tmp18) {
          let tmp20 = cResult[12];
        }
        return tmp20;
      }
    }
    const obj5 = { onClose, children: null };
    const items = [tmp15, tmp18];
    obj5.children = items;
    const tmp23 = timestampProducer(common_AlertDefault, obj5);
    cResult[9] = onClose;
    cResult[10] = tmp15;
    cResult[11] = tmp18;
    cResult[12] = tmp23;
    tmp20 = tmp23;
  }
  const tmp19 = hasOwnProperty(Text_Text.Text, { style: tmp4.text, variant: "text-md/medium", children: tmp8 });
  cResult[6] = tmp8;
  cResult[7] = tmp4.text;
  cResult[8] = tmp19;
  tmp18 = tmp19;
  const obj6 = { style: tmp4.text, variant: "text-md/medium", children: tmp8 };
}) : (function GuildLimitedAccessInfoAlert(arg0) {
  ({ guildId, onClose } = arg0);
  const tmp = closure_7();
  const intl = util.intl;
  guild = GuildStore.getGuild(guildId);
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
});