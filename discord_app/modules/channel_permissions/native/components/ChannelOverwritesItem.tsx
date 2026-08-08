// discord_app/modules/channel_permissions/native/components/ChannelOverwritesItem.tsx
import "useCheckboxA11yNative";
import { View } from "registerAsset";
import mergeGuildAvatar from "mergeGuildAvatar";
import { RowType } from "RowType";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/09007_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/09008_registerAsset.js";
import { useCheckboxA11yNative } from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import { FormCheckbox } from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import { ShieldUserIcon } from "../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import { TableRowInner } from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";

let error;
let metroImportAll;
const require = arg1;
function RemoveIcon(item) {
  item = item.item;
  const channelId = item.channelId;
  const onRemove = item.onRemove;
  let tmp3Result = null;
  if (null != channelId) {
    let obj = { disabled: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    obj[0] = item.disabled;
    let intl = item(1236).intl;
    obj[2] = intl.string(item(1236).t.N86XcP);
    obj[3] = function onPress() {
      let id;
      let name;
      if (null != closure_2) {
        return tmp(id);
      } else {
        ({ id, name } = id);
        closure_2 = name;
        let obj = item(outer1_3[6]);
        obj = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
        const _HermesInternal = HermesInternal;
        obj[0] = "remove-channel-overwrite-" + id;
        const intl = item(outer1_3[7]).intl;
        obj[1] = intl.string(item(outer1_3[7]).t.GuPYQB);
        const intl2 = item(outer1_3[7]).intl;
        obj = { name: null };
        obj[0] = name;
        obj[2] = intl2.format(item(outer1_3[7]).t.xERCnZ, obj);
        const intl3 = item(outer1_3[7]).intl;
        obj[3] = intl3.string(item(outer1_3[7]).t.fKxYb0);
        obj[4] = function onConfirm() {
          let result = name(outer1_3[8]).clearPermissionOverwrite(closure_2, id);
          result.then(() => {
            const result = outer1_0(outer1_3[9]).memberOrRoleRemovedToast(closure_1);
          });
        };
        obj.showConfirmModal(obj);
      }
    };
    let prop;
    if (item.disabled) {
      prop = tmp.rowRemoveIconDisabled;
    }
    obj = { style: null };
    obj[0] = prop;
    obj[4] = closure_7(item(5996).CircleXIcon, obj);
    tmp3Result = tmp3(item(4846).PressableOpacity, obj);
  }
  return tmp3Result;
}
function RoleItem(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let channelId;
  let disabled;
  let end;
  let item;
  let onPress;
  let showRemove;
  let showType;
  let start;
  let subLabel;
  let trailing;
  ({ item, subLabel, trailing } = arg0);
  ({ disabled, channelId, showType, showRemove, start, end, onPress, accessibilityRole, accessibilityState, accessible } = arg0);
  let obj = { icon: null, label: null, subLabel: null, start: null, end: null, trailing: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityState: null, accessible: null };
  obj = { size: "lg", color: item.colorString };
  obj[0] = callback(ShieldUserIcon.ShieldUserIcon, obj);
  obj[1] = item.name;
  if (showType) {
    subLabel = importAll(8997).getRowTypeLabel(item.rowType);
    const obj3 = importAll(8997);
  }
  obj[2] = subLabel;
  obj[3] = start;
  obj[4] = end;
  if (showRemove) {
    obj = { item: null, channelId: null };
    obj[0] = item;
    obj[1] = channelId;
    trailing = tmp(RemoveIcon, obj);
  }
  obj[5] = trailing;
  obj[6] = onPress;
  obj[7] = disabled;
  obj[8] = accessibilityRole;
  obj[9] = accessibilityState;
  obj[10] = accessible;
  return callback(TableRowInner.TableRow, obj);
}
function MemberItem(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let channelId;
  let disabled;
  let end;
  let guildId;
  let item;
  let onPress;
  let onRemove;
  let showRemove;
  let start;
  let trailing;
  ({ item, trailing } = arg0);
  ({ channelId, showRemove, onRemove, guildId, start, end, onPress, disabled, accessibilityRole, accessibilityState, accessible } = arg0);
  const tmp = callback2();
  let obj = { style: tmp.nameWrapper, children: null };
  obj = { style: items, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: item.name };
  items = [, ];
  ({ name: arr[0], memberName: arr[1] } = tmp);
  const items1 = [callback(Text.Text, obj), ];
  let tmp4Result = null;
  if (item.rowType === RowType.OWNER) {
    obj = { size: null, source: null, disableColor: true, style: null };
    obj[0] = tmp5(1297).Icon.Sizes.REFRESH_SMALL_16;
    obj[1] = registerAsset;
    obj[3] = tmp.ownerIcon;
    tmp4Result = tmp4(tmp5(1297).Icon, obj);
  }
  items1[1] = tmp4Result;
  obj[1] = items1;
  user = user.getUser(item.id);
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(guildId);
  }
  const obj1 = { icon: null, label: null, subLabel: null, start: null, end: null, trailing: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityState: null, accessible: null };
  const tmp2 = closure_8;
  const tmp2Result = closure_8(View, obj);
  const tmp3 = View;
  obj1[0] = callback(Button.Avatar, { source: avatarSource, size: Button.AvatarSizes.SMALL });
  obj1[1] = tmp2Result;
  obj1[2] = item.username;
  obj1[3] = start;
  obj1[4] = end;
  if (showRemove) {
    const obj3 = { item: null, channelId: null, onRemove: null };
    obj3[0] = item;
    obj3[1] = channelId;
    obj3[2] = onRemove;
    trailing = tmp4(RemoveIcon, obj3);
  }
  obj1[5] = trailing;
  obj1[6] = onPress;
  obj1[7] = disabled;
  obj1[8] = accessibilityRole;
  obj1[9] = accessibilityState;
  obj1[10] = accessible;
  return callback(TableRowInner.TableRow, obj1);
}
function EmptyRoleItem(item) {
  item = item.item;
  let obj = { icon: null, label: null };
  obj = { source: null, color: null, size: null, style: null };
  obj[0] = registerAsset;
  obj[1] = item.colorString;
  obj[2] = Button.IconSizes.MEDIUM;
  obj[3] = callback2().roleIcon;
  obj[0] = callback(Button.Icon, obj);
  obj[1] = item.name;
  return callback(TableRowInner.TableRow, obj);
}
class ChannelOverwritesItem {
  constructor(arg0) {
    item = global.item;
    merged = Object.assign(global, Object.create(null));
    rowType = item.rowType;
    tmp2 = RowType;
    if (RowType.ADMINISTRATOR !== rowType) {
      if (tmp2.ROLE !== rowType) {
        if (tmp2.OWNER !== rowType) {
          if (tmp2.MEMBER !== rowType) {
            if (tmp2.EMPTY_STATE === rowType) {
              tmp3 = jsx;
              tmp4 = EmptyRoleItem;
              obj = { item: null };
              obj[0] = item;
              tmp5 = obj;
              tmp6 = merged;
              merged1 = Object.assign(merged);
              return jsx(EmptyRoleItem, obj);
            } else {
              return null;
            }
          }
        }
        tmp8 = jsx;
        tmp9 = MemberItem;
        obj = { item: null };
        obj[0] = item;
        tmp10 = obj;
        tmp11 = merged;
        merged2 = Object.assign(merged);
        return jsx(MemberItem, obj);
      }
    }
    obj1 = { item };
    merged3 = Object.assign(merged);
    return jsx(RoleItem, obj1);
  }
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ nameWrapper: { flexDirection: "row", alignItems: "flex-end", marginRight: 16 }, name: { paddingRight: 4 }, memberName: { flexShrink: 1 }, ownerIcon: { alignSelf: "center" }, roleIcon: { height: 30, width: 30 }, rowRemoveIconDisabled: { opacity: 0.3 } });
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/channel_permissions/native/components/ChannelOverwritesItem.tsx");

export default ChannelOverwritesItem;
export const ChannelOverwritesCheckboxItem = function ChannelOverwritesCheckboxItem(checked) {
  let accessibilityRole;
  let accessibilityState;
  checked = checked.checked;
  const merged = Object.assign(checked, Object.create(null));
  let obj = useCheckboxA11yNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = {};
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const merged1 = Object.assign(merged);
  obj.accessible = true;
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.trailing = callback(FormCheckbox.FormCheckbox, { checked });
  return callback(ChannelOverwritesItem, obj);
};