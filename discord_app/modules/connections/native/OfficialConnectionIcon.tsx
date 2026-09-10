// discord_app/modules/connections/native/OfficialConnectionIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import native from "../../../design/void/native.tsx";
import useRoleIconProps from "../../roles/useRoleIconProps.tsx";
import RoleIconDefault from "../../roles/native/RoleIcon.tsx";
import _modDef11638 from "../../../../_runtime/metro/11638__.js";
import _modDef11639 from "../../../../_runtime/metro/11639__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4605);
let closure_8 = createStyles.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default function OfficialConnectionIcon(arg0) {
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = closure_8();
  size = { width: size, height: size };
  let obj1 = useRoleIconProps;
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
  const roleIconProps = obj1.useRoleIconProps(obj);
  if (false !== displayRoleIcon) {
    if (null != roleIconProps) {
      obj = { style: null, children: null };
      const items = [style, size];
      obj.style = items;
      obj1 = {};
      const merged = Object.assign(roleIconProps);
      obj.children = timestampProducer(RoleIconDefault, obj1);
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
  const tmp2Result = utils_ColorUtils;
  if (tmp2Result.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  const obj2 = { style: null, children: null };
  const items1 = [style, size];
  obj2.style = items1;
  const obj3 = { style: null, size: native.Icon.Sizes.CUSTOM, source: _modDef11638, color: roleColor };
  const items2 = [tmp.verifiedCheck, size];
  obj3.style = items2;
  const items3 = [timestampProducer(native.Icon, obj3)];
  const obj4 = { style: null, size: native.Icon.Sizes.CUSTOM, source: _modDef11639, color: PRIMARY_630 };
  const items4 = [tmp.verifiedCheck, size];
  obj4.style = items4;
  items3[1] = timestampProducer(native.Icon, obj4);
  obj2.children = items3;
  return React5(View, obj2);
}
