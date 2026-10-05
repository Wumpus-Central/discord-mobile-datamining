// === Module 11950: GuildDirectoryAddAlert ===

// Module 11950 (GuildDirectoryAddAlert)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import AlertDefault from "Alert" /* 5783 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { guildIcon: obj2, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, container: { alignItems: "center", justifyContent: "center" } };
obj2 = { marginBottom: 16, borderRadius: nativeDefault.radii.sm };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let directoryGuildName;
  let first;
  let guild;
  let items;
  let onClose;
  const obj = react2;
  const cResult = obj.c(20);
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["X0WK+6"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild) {
    let tmp8;
    let tmp11;
    let tmp13;
    let tmp16;
    if (cResult[2] === tmp4.guildIcon) {
      tmp8 = cResult[3];
    }
    const _Symbol = Symbol;
    const title = tmp4.title;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl4.intl;
      const stringResult1 = intl2.string(intl4.t.CueiPY);
      cResult[4] = stringResult1;
      tmp11 = stringResult1;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== tmp4.title) {
      const obj2 = { style: title, accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: tmp11 };
      const tmp15 = React3(Text_Text.Text, obj2);
      cResult[5] = tmp4.title;
      cResult[6] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    const description = tmp4.description;
    if (cResult[7] !== directoryGuildName) {
      const intl3 = intl4.intl;
      const obj3 = { guildName: directoryGuildName };
      const formatResult = intl3.format(intl4.t.R7Pqn5, obj3);
      cResult[7] = directoryGuildName;
      cResult[8] = formatResult;
      tmp16 = formatResult;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp4.description) {
      let tmp18;
      if (cResult[10] === tmp16) {
        tmp18 = cResult[11];
      }
      if (cResult[12] === tmp4.container) {
        if (cResult[13] === tmp8) {
          if (cResult[14] === tmp13) {
            let tmp21;
            if (cResult[15] === tmp18) {
              tmp21 = cResult[16];
            }
            if (cResult[17] === onClose) {
              let tmp25;
              if (cResult[18] === tmp21) {
                tmp25 = cResult[19];
              }
              return tmp25;
            }
            const obj4 = { confirmText: first, onConfirm: onClose, children: tmp21 };
            const tmp28 = React3(AlertDefault, obj4);
            cResult[17] = onClose;
            cResult[18] = tmp21;
            cResult[19] = tmp28;
            tmp25 = tmp28;
          }
        }
      }
      const obj5 = { style: tmp7, children: items };
      items = [tmp8, tmp13, tmp18];
      const tmp24 = hasOwnProperty(View, obj5);
      cResult[12] = tmp4.container;
      cResult[13] = tmp8;
      cResult[14] = tmp13;
      cResult[15] = tmp18;
      cResult[16] = tmp24;
      tmp21 = tmp24;
    }
    const obj6 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp16 };
    const tmp20 = React3(Text_Text.Text, obj6);
    cResult[9] = tmp4.description;
    cResult[10] = tmp16;
    cResult[11] = tmp20;
    tmp18 = tmp20;
  }
  const obj7 = { style: tmp4.guildIcon, guild, size: GuildIcon.GuildIconSizes.XLARGE };
  const tmp9 = GuildIconDefault;
  const tmp10 = React3(tmp9, obj7);
  cResult[1] = guild;
  cResult[2] = tmp4.guildIcon;
  cResult[3] = tmp10;
  tmp8 = tmp10;
}) : ((arg0) => {
  let directoryGuildName;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let onClose;
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = closure_6();
  const obj = { confirmText: intl.string(intl4.t["X0WK+6"]), onConfirm: onClose, children: hasOwnProperty(View, obj2) };
  const tmp2 = AlertDefault;
  intl = intl4.intl;
  obj2 = { style: tmp.container, children: items };
  const obj3 = { style: tmp.guildIcon, guild, size: GuildIcon.GuildIconSizes.XLARGE };
  const tmp3 = GuildIconDefault;
  items = [React3(tmp3, obj3), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl2.string(intl4.t.CueiPY) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = React3(Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl3.format(intl4.t.R7Pqn5, { guildName: directoryGuildName }) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[2] = React3(Text2, obj5);
  return React3(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default tmp4;