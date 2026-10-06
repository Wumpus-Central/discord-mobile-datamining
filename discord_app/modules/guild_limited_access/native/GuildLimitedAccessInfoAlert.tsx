// === Module 13660: GuildLimitedAccessInfoAlert ===

// Module 13660 (GuildLimitedAccessInfoAlert)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import AlertDefault from "Alert" /* 5790 */;
import GuildLimitedAccessConstants from "GuildLimitedAccessConstants" /* 13661 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles from "TextStyles" /* 5922 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const helpdeskArticle = GuildLimitedAccessConstants.GUILD_LIMITED_ACCESS_HC_LINK;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, text: { textAlign: "center", marginVertical: 8 } };
obj2 = { textAlign: "center", marginVertical: 12 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
let closure_7 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let guildId;
  let items;
  let onClose;
  let tmp13;
  let tmp15;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(13);
  ({ guildId, onClose } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const obj2 = { helpdeskArticle };
    const formatResult = intl.format(intl4.t.ZqkXsC, obj2);
    cResult[0] = formatResult;
    first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      const intl2 = intl4.intl;
      const obj3 = { guildName: guild.name, helpdeskArticle };
      first = intl2.format(intl4.t.jn0Xyx, obj3);
    }
    cResult[1] = guildId;
    cResult[2] = first;
    tmp8 = first;
  } else {
    tmp8 = cResult[2];
  }
  const header = tmp4.header;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl4.intl;
    const stringResult = intl3.string(intl4.t.kJwpBW);
    cResult[3] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp4.header) {
    const obj4 = { style: header, children: tmp13 };
    const tmp17 = hasOwnProperty(native.LegacyText, obj4);
    cResult[4] = tmp4.header;
    cResult[5] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === tmp8) {
    let tmp18;
    if (cResult[7] === tmp4.text) {
      tmp18 = cResult[8];
    }
    if (cResult[9] === onClose) {
      if (cResult[10] === tmp15) {
        let tmp20;
        if (cResult[11] === tmp18) {
          tmp20 = cResult[12];
        }
        return tmp20;
      }
    }
    const obj5 = { onClose, children: items };
    items = [tmp15, tmp18];
    const tmp23 = metroRequire(AlertDefault, obj5);
    cResult[9] = onClose;
    cResult[10] = tmp15;
    cResult[11] = tmp18;
    cResult[12] = tmp23;
    tmp20 = tmp23;
  }
  const obj6 = { style: tmp4.text, variant: "text-md/medium", children: tmp8 };
  const tmp19 = hasOwnProperty(Text_Text.Text, obj6);
  cResult[6] = tmp8;
  cResult[7] = tmp4.text;
  cResult[8] = tmp19;
  tmp18 = tmp19;
}) : ((arg0) => {
  let guildId;
  let intl3;
  let items;
  let onClose;
  ({ guildId, onClose } = arg0);
  const tmp = closure_7();
  const intl = intl4.intl;
  const obj = { helpdeskArticle };
  const formatResult = intl.format(intl4.t.ZqkXsC, obj);
  const guild = GuildStore.getGuild(guildId);
  let formatResult1 = formatResult;
  if (null != guild) {
    const intl2 = intl4.intl;
    const obj2 = { guildName: guild.name, helpdeskArticle };
    formatResult1 = intl2.format(intl4.t.jn0Xyx, obj2);
  }
  const obj3 = { onClose, children: items };
  const obj4 = { style: tmp.header, children: intl3.string(intl4.t.kJwpBW) };
  const tmp8 = AlertDefault;
  const LegacyText = native.LegacyText;
  intl3 = intl4.intl;
  items = [hasOwnProperty(LegacyText, obj4), ];
  const obj5 = { style: tmp.text, variant: "text-md/medium", children: formatResult1 };
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  return metroRequire(tmp8, obj3);
});
const result = size.fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default tmp7;