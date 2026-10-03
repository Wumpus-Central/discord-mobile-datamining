// === Module 17777: InRolePromptNotice ===

// Module 17777 (InRolePromptNotice)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import _modDef4808 from "module_4808" /* 4808 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildSettingsUtils from "GuildSettingsUtils" /* 17778 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const RoleFlags = fn(1085).RoleFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { promptRow: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" }, promptText: null, icon: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
obj2.promptText = { marginLeft: nativeDefault.space.PX_4 };
obj2.icon = { height: 16, width: 16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginLeft: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((role) => {
  const cResult = c.c(18);
  role = role.role;
  const tmp4 = closure_7();
  if (obj2.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    const promptRow = tmp4.promptRow;
    if (tmpResult.isRolePowerful(role)) {
      if (cResult[0] !== tmp4.icon) {
        const obj3 = { style: tmp4.icon, source: _modDef4808, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
        const tmp23 = hasOwnProperty(native.Icon, obj3);
        cResult[0] = tmp4.icon;
        cResult[1] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[1];
      }
      const _Symbol2 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.YRbgXz);
        cResult[2] = stringResult;
        let tmp25 = stringResult;
      } else {
        tmp25 = cResult[2];
      }
      if (cResult[3] !== tmp4.promptText) {
        const obj4 = { style: tmp4.promptText, variant: "text-sm/medium", children: tmp25 };
        const tmp29 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[3] = tmp4.promptText;
        cResult[4] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[4];
      }
      if (cResult[5] === tmp4.promptRow) {
        if (cResult[6] === tmp20) {
          if (cResult[7] === tmp27) {
            let tmp30 = cResult[8];
          }
          return tmp30;
        }
      }
      const obj5 = { style: promptRow, children: null };
      const items = [tmp20, tmp27];
      obj5.children = items;
      const tmp33 = timestampProducer(View, obj5);
      cResult[5] = tmp4.promptRow;
      cResult[6] = tmp20;
      cResult[7] = tmp27;
      cResult[8] = tmp33;
      tmp30 = tmp33;
    } else {
      if (cResult[9] !== tmp4.icon) {
        const obj6 = { style: tmp4.icon, source: _modDef4808 };
        const tmp9 = hasOwnProperty(native.Icon, obj6);
        cResult[9] = tmp4.icon;
        cResult[10] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult1 = intl.string(util.t.mqeO2v);
        cResult[11] = stringResult1;
        let tmp11 = stringResult1;
      } else {
        tmp11 = cResult[11];
      }
      if (cResult[12] !== tmp4.promptText) {
        const obj7 = { style: tmp4.promptText, variant: "text-sm/medium", children: tmp11 };
        const tmp15 = hasOwnProperty(Text_Text.Text, obj7);
        cResult[12] = tmp4.promptText;
        cResult[13] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[13];
      }
      if (cResult[14] === tmp4.promptRow) {
        if (cResult[15] === tmp6) {
          if (cResult[16] === tmp13) {
            let tmp16 = cResult[17];
          }
          return tmp16;
        }
      }
      const obj8 = { style: promptRow, children: null };
      const items1 = [tmp6, tmp13];
      obj8.children = items1;
      const tmp19 = timestampProducer(View, obj8);
      cResult[14] = tmp4.promptRow;
      cResult[15] = tmp6;
      cResult[16] = tmp13;
      cResult[17] = tmp19;
      tmp16 = tmp19;
    }
    tmpResult = GuildSettingsUtils;
  } else {
    return null;
  }
  obj2 = FlagUtils;
}) : ((role) => {
  role = role.role;
  let string = closure_7();
  let stringResult = dependencyMap;
  if (!obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    return null;
  } else {
    const obj2 = { style: string.promptRow, children: null };
    const tmpResult = GuildSettingsUtils;
    let Icon = native.Icon;
    if (isRolePowerfulResult) {
      const obj3 = { style: string.icon, source: _modDef4808, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
      const items = [hasOwnProperty(Icon, obj3), ];
      const obj4 = { style: string.promptText, variant: "text-sm/medium", children: null };
      const intl2 = util.intl;
      string = intl2.string;
      stringResult = string(util.t.YRbgXz);
      obj4.children = stringResult;
      Icon = hasOwnProperty(Text_Text.Text, obj4);
      items[1] = Icon;
      obj2.children = items;
      let tmp4Result = timestampProducer(View, obj2);
    } else {
      const obj5 = { style: string.icon, source: _modDef4808 };
      const items1 = [hasOwnProperty(Icon, obj5), ];
      const obj6 = { style: string.promptText, variant: "text-sm/medium", children: null };
      const intl = util.intl;
      obj6.children = intl.string(util.t.mqeO2v);
      items1[1] = hasOwnProperty(Text_Text.Text, obj6);
      obj2.children = items1;
      tmp4Result = timestampProducer(View, obj2);
    }
    isRolePowerfulResult = GuildSettingsUtils.isRolePowerful(role);
  }
  obj = FlagUtils;
});