// discord_app/modules/connections/native/OfficialConnectionIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import RoleIconUtils from "../../guild_boosting/native/RoleIconUtils.tsx";
import _modDef11567 from "../../../../_runtime/metro/11567__.js";
import _modDef11568 from "../../../../_runtime/metro/11568__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default function OfficialConnectionIcon(arg0) {
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = closure_8();
  size = { width: size, height: size };
  let obj1 = RoleIconUtils;
  let obj = { guildId, roleId: null, size: null };
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = hasOwnProperty;
  }
  obj.roleId = roleId;
  obj.size = size;
  const roleIcon = obj1.useRoleIcon(obj);
  if (false !== displayRoleIcon) {
    if (null != roleIcon) {
      obj = { style: null, children: null };
      const items = [style, size];
      obj.style = items;
      obj.children = roleIcon;
      return timestampProducer(View, obj);
    }
  }
  if (roleColor == null) {
    let colorString;
    if (role != null) {
      colorString = role.colorString;
    }
    roleColor = colorString;
  }
  if (roleColor == null) {
    roleColor = React4;
  }
  let PRIMARY_630 = nativeDefault.unsafe_rawColors.WHITE;
  tmp2(1091);
  const tmp2Result = tmp2(1091);
  if (tmp2Result.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = tmp7(576).unsafe_rawColors.PRIMARY_630;
  }
  obj1 = { style: null, children: null };
  const items1 = [style, size];
  obj1.style = items1;
  const obj2 = { style: null, size: native.Icon.Sizes.CUSTOM, source: _modDef11567, color: roleColor };
  const items2 = [tmp.verifiedCheck, size];
  obj2.style = items2;
  const items3 = [timestampProducer(native.Icon, obj2)];
  const obj3 = { style: null, size: native.Icon.Sizes.CUSTOM, source: _modDef11568, color: PRIMARY_630 };
  const items4 = [tmp.verifiedCheck, size];
  obj3.style = items4;
  items3[1] = timestampProducer(native.Icon, obj3);
  obj1.children = items3;
  return React5(View, obj1);
}
