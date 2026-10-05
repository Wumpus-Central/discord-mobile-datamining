// === Module 17801: InRolePromptNotice ===

// Module 17801 (InRolePromptNotice)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import AssetRegistryDefault from "AssetRegistry" /* 4808 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildSettingsUtils from "GuildSettingsUtils" /* 17802 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let role;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const RoleFlags = Constants.RoleFlags;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { promptRow: obj2, promptText: obj3, icon: { height: 16, width: 16 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((role) => {
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(18);
  role = role.role;
  const tmp4 = closure_7();
  const obj2 = FlagUtils;
  if (obj2.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    const promptRow = tmp4.promptRow;
    const tmpResult = GuildSettingsUtils;
    if (tmpResult.isRolePowerful(role)) {
      let tmp20;
      let tmp25;
      let tmp27;
      if (cResult[0] !== tmp4.icon) {
        const obj3 = { style: tmp4.icon, source: AssetRegistryDefault, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
        const Icon2 = native.Icon;
        const tmp23 = hasOwnProperty(Icon2, obj3);
        cResult[0] = tmp4.icon;
        cResult[1] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[1];
      }
      const _Symbol2 = Symbol;
      const promptText2 = tmp4.promptText;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl3.intl;
        const stringResult = intl2.string(intl3.t.YRbgXz);
        cResult[2] = stringResult;
        tmp25 = stringResult;
      } else {
        tmp25 = cResult[2];
      }
      if (cResult[3] !== tmp4.promptText) {
        const obj4 = { style: promptText2, variant: "text-sm/medium", children: tmp25 };
        const tmp29 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[3] = tmp4.promptText;
        cResult[4] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[4];
      }
      if (cResult[5] === tmp4.promptRow) {
        if (cResult[6] === tmp20) {
          let tmp30;
          if (cResult[7] === tmp27) {
            tmp30 = cResult[8];
          }
          return tmp30;
        }
      }
      const obj5 = { style: promptRow, children: items };
      items = [tmp20, tmp27];
      const tmp33 = metroRequire(View, obj5);
      cResult[5] = tmp4.promptRow;
      cResult[6] = tmp20;
      cResult[7] = tmp27;
      cResult[8] = tmp33;
      tmp30 = tmp33;
    } else {
      let tmp6;
      let tmp11;
      let tmp13;
      if (cResult[9] !== tmp4.icon) {
        const obj6 = { style: tmp4.icon, source: AssetRegistryDefault };
        const Icon = native.Icon;
        const tmp9 = hasOwnProperty(Icon, obj6);
        cResult[9] = tmp4.icon;
        cResult[10] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[10];
      }
      const _Symbol = Symbol;
      const promptText = tmp4.promptText;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult1 = intl.string(intl3.t.mqeO2v);
        cResult[11] = stringResult1;
        tmp11 = stringResult1;
      } else {
        tmp11 = cResult[11];
      }
      if (cResult[12] !== tmp4.promptText) {
        const obj7 = { style: promptText, variant: "text-sm/medium", children: tmp11 };
        const tmp15 = hasOwnProperty(Text_Text.Text, obj7);
        cResult[12] = tmp4.promptText;
        cResult[13] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[13];
      }
      if (cResult[14] === tmp4.promptRow) {
        if (cResult[15] === tmp6) {
          let tmp16;
          if (cResult[16] === tmp13) {
            tmp16 = cResult[17];
          }
          return tmp16;
        }
      }
      const obj8 = { style: promptRow, children: items1 };
      items1 = [tmp6, tmp13];
      const tmp19 = metroRequire(View, obj8);
      cResult[14] = tmp4.promptRow;
      cResult[15] = tmp6;
      cResult[16] = tmp13;
      cResult[17] = tmp19;
      tmp16 = tmp19;
    }
  } else {
    return null;
  }
}) : ((role) => {
  let intl;
  let intl2;
  role = role.role;
  const tmp = closure_7();
  let tmp4 = null;
  const obj = FlagUtils;
  if (obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    let tmp6Result;
    const obj2 = { style: tmp.promptRow, children: null };
    const tmp2Result = GuildSettingsUtils;
    const isRolePowerfulResult = tmp2Result.isRolePowerful(role);
    const Icon = native.Icon;
    if (isRolePowerfulResult) {
      const obj3 = { style: tmp.icon, source: AssetRegistryDefault, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
      const items = [hasOwnProperty(Icon, obj3), ];
      const obj4 = { style: tmp.promptText, variant: "text-sm/medium", children: intl2.string(intl3.t.YRbgXz) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items[1] = hasOwnProperty(Text2, obj4);
      obj2.children = items;
      tmp6Result = metroRequire(View, obj2);
    } else {
      const obj5 = { style: tmp.icon, source: AssetRegistryDefault };
      const items1 = [hasOwnProperty(Icon, obj5), ];
      const obj6 = { style: tmp.promptText, variant: "text-sm/medium", children: intl.string(intl3.t.mqeO2v) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items1[1] = hasOwnProperty(Text, obj6);
      obj2.children = items1;
      tmp6Result = metroRequire(View, obj2);
    }
    tmp4 = tmp6Result;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default tmp5;