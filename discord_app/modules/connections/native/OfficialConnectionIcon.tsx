// discord_app/modules/connections/native/OfficialConnectionIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import native from "../../../design/void/native.tsx";
import useRoleIconProps from "../../roles/useRoleIconProps.tsx";
import RoleIconDefault from "../../roles/native/RoleIcon.tsx";
import _modDef11898 from "../../../../_runtime/metro/11898__.js";
import _modDef11899 from "../../../../_runtime/metro/11899__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let closure_8 = createStyles.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default function OfficialConnectionIcon(arg0) {
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = closure_8();
  const size1 = { width: size, height: size };
  const obj = { guildId, roleId: null, size: null };
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
  const roleIconProps = useRoleIconProps.useRoleIconProps(obj);
  if (false !== displayRoleIcon) {
    if (null != roleIconProps) {
      const obj3 = { style: null, children: null };
      const items = [style, size1];
      obj3.style = items;
      const obj4 = {};
      const merged = Object.assign(roleIconProps);
      obj3.children = timestampProducer(RoleIconDefault, obj4);
      return timestampProducer(View, obj3);
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
  const hex2intResult = utils_ColorUtils.hex2int(roleColor);
  if (tmp2Result2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  const obj5 = { style: null, children: null };
  const items1 = [style, size1];
  obj5.style = items1;
  const obj6 = { style: null, size: native.Icon.Sizes.CUSTOM, source: _modDef11898, color: roleColor };
  const items2 = [tmp.verifiedCheck, size1];
  obj6.style = items2;
  const items3 = [timestampProducer(native.Icon, obj6)];
  const obj7 = { style: null, size: native.Icon.Sizes.CUSTOM, source: _modDef11899, color: PRIMARY_630 };
  const items4 = [tmp.verifiedCheck, size1];
  obj7.style = items4;
  items3[1] = timestampProducer(native.Icon, obj7);
  obj5.children = items3;
  return React5(View, obj5);
}
