// discord_app/modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AlertDefault from "../../../components_native/common/Alert.tsx";
import GuildLimitedAccessConstants from "../GuildLimitedAccessConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
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
      items = [hasOwnProperty(LegacyText, obj4)];
      const obj5 = { style: tmp.text, variant: "text-md/medium", children: formatResult1 };
      items[1] = hasOwnProperty(Text_Text.Text, obj5);
      return metroRequire(tmp8, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default tmp7;
