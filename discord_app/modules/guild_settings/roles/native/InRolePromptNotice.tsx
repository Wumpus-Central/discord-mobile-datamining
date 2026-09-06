// discord_app/modules/guild_settings/roles/native/InRolePromptNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef9625 from "../../../../../_runtime/metro/09625__.js";
import GuildSettingsUtils from "../../GuildSettingsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const RoleFlags = fn(1074).RoleFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { promptRow: null, promptText: null, icon: null };
createStyles = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
};
createStyles.promptRow = createStyles;
createStyles.promptText = { marginLeft: nativeDefault.space.PX_4 };
createStyles.icon = { height: 16, width: 16 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
  role = role.role;
  let string = closure_7();
  let stringResult = dependencyMap;
  let obj = FlagUtils;
  if (!obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    return null;
  } else {
    obj = { style: string.promptRow, children: null };
    const tmpResult = GuildSettingsUtils;
    let Icon = native.Icon;
    if (isRolePowerfulResult) {
      obj = { style: string.icon, source: _modDef9625, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
      const items = [hasOwnProperty(Icon, obj)];
      const obj1 = { style: string.promptText, variant: "text-sm/medium", children: null };
      const intl2 = util.intl;
      string = intl2.string;
      stringResult = string(util.t.YRbgXz);
      obj1.children = stringResult;
      Icon = hasOwnProperty(Text_Text.Text, obj1);
      items[1] = Icon;
      obj.children = items;
      let tmp4Result = timestampProducer(View, obj);
    } else {
      const obj2 = { style: string.icon, source: _modDef9625 };
      const items1 = [hasOwnProperty(Icon, obj2)];
      const obj3 = { style: string.promptText, variant: "text-sm/medium", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.mqeO2v);
      items1[1] = hasOwnProperty(Text_Text.Text, obj3);
      obj.children = items1;
      tmp4Result = timestampProducer(View, obj);
    }
    isRolePowerfulResult = GuildSettingsUtils.isRolePowerful(role);
  }
}
