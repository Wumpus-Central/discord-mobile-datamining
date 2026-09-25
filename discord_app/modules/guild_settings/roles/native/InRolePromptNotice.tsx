// === Module 17398: InRolePromptNotice ===

// Module 17398 (InRolePromptNotice)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import Text_Text from "Text/Text" /* 4825 */;
import _modDef8894 from "module_8894" /* 8894 */;
import GuildSettingsUtils from "GuildSettingsUtils" /* 17399 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const RoleFlags = fn(1074).RoleFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { promptRow: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" }, promptText: null, icon: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
obj2.promptText = { marginLeft: nativeDefault.space.PX_4 };
obj2.icon = { height: 16, width: 16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
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
      const obj3 = { style: string.icon, source: _modDef8894, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
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
      const obj5 = { style: string.icon, source: _modDef8894 };
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
};