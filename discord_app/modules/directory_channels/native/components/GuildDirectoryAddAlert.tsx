// === Module 11964: GuildDirectoryAddAlert ===

// Module 11964 (GuildDirectoryAddAlert)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import common_AlertDefault from "common/Alert" /* 5790 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { guildIcon: { marginBottom: 16, borderRadius: nativeDefault.radii.sm }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, container: { alignItems: "center", justifyContent: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginBottom: 16, borderRadius: nativeDefault.radii.sm };
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["X0WK+6"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild) {
    if (cResult[2] === tmp4.guildIcon) {
      let tmp8 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.CueiPY);
      cResult[4] = stringResult1;
      let tmp11 = stringResult1;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== tmp4.title) {
      const obj2 = { style: tmp4.title, accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: tmp11 };
      const tmp15 = React4(Text_Text.Text, obj2);
      cResult[5] = tmp4.title;
      cResult[6] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== directoryGuildName) {
      const intl3 = util.intl;
      const obj3 = { guildName: directoryGuildName };
      const formatResult = intl3.format(util.t.R7Pqn5, obj3);
      cResult[7] = directoryGuildName;
      cResult[8] = formatResult;
      let tmp16 = formatResult;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp4.description) {
      if (cResult[10] === tmp16) {
        let tmp18 = cResult[11];
      }
      if (cResult[12] === tmp4.container) {
        if (cResult[13] === tmp8) {
          if (cResult[14] === tmp13) {
            if (cResult[15] === tmp18) {
              let tmp21 = cResult[16];
            }
            if (cResult[17] === onClose) {
              if (cResult[18] === tmp21) {
                let tmp25 = cResult[19];
              }
              return tmp25;
            }
            const obj4 = { confirmText: first, onConfirm: onClose, children: tmp21 };
            const tmp28 = React4(common_AlertDefault, obj4);
            cResult[17] = onClose;
            cResult[18] = tmp21;
            cResult[19] = tmp28;
            tmp25 = tmp28;
          }
        }
      }
      const obj5 = { style: tmp7, children: null };
      const items = [tmp8, tmp13, tmp18];
      obj5.children = items;
      const tmp24 = hasOwnProperty(View, obj5);
      cResult[12] = tmp4.container;
      cResult[13] = tmp8;
      cResult[14] = tmp13;
      cResult[15] = tmp18;
      cResult[16] = tmp24;
      tmp21 = tmp24;
    }
    const obj6 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp16 };
    const tmp20 = React4(Text_Text.Text, obj6);
    cResult[9] = tmp4.description;
    cResult[10] = tmp16;
    cResult[11] = tmp20;
    tmp18 = tmp20;
  }
  const obj7 = { style: tmp4.guildIcon, guild, size: null };
  obj7.size = GuildIcon.GuildIconSizes.XLARGE;
  const tmp10 = React4(GuildIconDefault, obj7);
  cResult[1] = guild;
  cResult[2] = tmp4.guildIcon;
  cResult[3] = tmp10;
  tmp8 = tmp10;
}) : ((arg0) => {
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = closure_6();
  const obj = { confirmText: null, onConfirm: null, children: null };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["X0WK+6"]);
  obj.onConfirm = onClose;
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.guildIcon, guild, size: null };
  const tmp2 = common_AlertDefault;
  obj3.size = GuildIcon.GuildIconSizes.XLARGE;
  const items = [React4(GuildIconDefault, obj3), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.CueiPY);
  items[1] = React4(Text_Text.Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj5.children = intl3.format(util.t.R7Pqn5, { guildName: directoryGuildName });
  items[2] = React4(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(tmp2, obj);
});