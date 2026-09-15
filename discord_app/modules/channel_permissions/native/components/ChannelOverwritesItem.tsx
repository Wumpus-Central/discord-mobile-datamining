// discord_app/modules/channel_permissions/native/components/ChannelOverwritesItem.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import ChannelPermissionsUtilsAll from "../../ChannelPermissionsUtils.tsx";
import ShieldUserIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import _modDef9885 from "../../../../../_runtime/metro/09885__.js";
import _modDef9886 from "../../../../../_runtime/metro/09886__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function RemoveIcon(item) {
  item = item.item;
  const channelId = item.channelId;
  const onRemove = item.onRemove;
  let tmp3Result = null;
  if (null != channelId) {
    let obj = {
      disabled: item.disabled,
      accessibilityRole: "button",
      accessibilityLabel: null,
      onPress: null,
      children: null,
    };
    let intl = item(1115).intl;
    obj.accessibilityLabel = intl.string(item(1115).t.N86XcP);
    obj.onPress = function onPress() {
      if (null != onRemove) {
        return tmp(item);
      } else {
        ({ id, name } = item);
        closure_2 = channelId;
        const obj2 = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
        const _HermesInternal = HermesInternal;
        obj2.key = "remove-channel-overwrite-" + id;
        const intl = util.intl;
        obj2.title = intl.string(util.t.GuPYQB);
        const intl2 = util.intl;
        const obj3 = { name };
        obj2.content = intl2.format(util.t.xERCnZ, obj3);
        const intl3 = util.intl;
        obj2.confirmText = intl3.string(util.t.fKxYb0);
        obj2.onConfirm = function onConfirm() {
          let result = channelId(dependencyMap[8]).clearPermissionOverwrite(closure_2, id);
          result.then(() => {
            const result = id(closure_2_3[9]).memberOrRoleRemovedToast(name);
          });
        };
        AlertModal.showConfirmModal(obj2);
      }
    };
    let prop;
    if (item.disabled) {
      prop = tmp.rowRemoveIconDisabled;
    }
    let obj2 = { style: prop };
    obj.children = closure_7(item(6721).CircleXIcon, obj2);
    tmp3Result = closure_7(item(5207).PressableOpacity, obj);
  }
  return tmp3Result;
}
function RoleItem(arg0) {
  ({ item, subLabel, trailing } = arg0);
  ({
    disabled,
    channelId,
    showType,
    showRemove,
    start,
    end,
    onPress,
    accessibilityRole,
    accessibilityState,
    accessible,
  } = arg0);
  const obj = {
    icon: React5(ShieldUserIcon.ShieldUserIcon, { size: "lg", color: item.colorString }),
    label: item.name,
    subLabel: null,
    start: null,
    end: null,
    trailing: null,
    onPress: null,
    disabled: null,
    accessibilityRole: null,
    accessibilityState: null,
    accessible: null,
  };
  if (showType) {
    subLabel = ChannelPermissionsUtilsAll.getRowTypeLabel(item.rowType);
  }
  obj.subLabel = subLabel;
  obj.start = start;
  obj.end = end;
  if (showRemove) {
    const obj4 = { item, channelId };
    trailing = React5(RemoveIcon, obj4);
  }
  obj.trailing = trailing;
  obj.onPress = onPress;
  obj.disabled = disabled;
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.accessible = accessible;
  return React5(TableRow.TableRow, obj);
}
function MemberItem(arg0) {
  ({ item, trailing } = arg0);
  ({
    channelId,
    showRemove,
    onRemove,
    guildId,
    start,
    end,
    onPress,
    disabled,
    accessibilityRole,
    accessibilityState,
    accessible,
  } = arg0);
  const tmp = closure_9();
  const obj = { style: tmp.nameWrapper, children: null };
  const obj2 = {
    style: null,
    lineClamp: 1,
    variant: "text-md/semibold",
    color: "interactive-text-active",
    children: item.name,
  };
  const items = [,];
  ({ name: arr[0], memberName: arr[1] } = tmp);
  obj2.style = items;
  const items1 = [React5(Text_Text.Text, obj2)];
  let tmp4Result = null;
  if (item.rowType === RowType.OWNER) {
    const obj3 = {
      size: native.Icon.Sizes.REFRESH_SMALL_16,
      source: _modDef9885,
      disableColor: true,
      style: tmp.ownerIcon,
    };
    tmp4Result = React5(native.Icon, obj3);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  const user = UserStore.getUser(item.id);
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(guildId);
  }
  const obj4 = {
    icon: null,
    label: null,
    subLabel: null,
    start: null,
    end: null,
    trailing: null,
    onPress: null,
    disabled: null,
    accessibilityRole: null,
    accessibilityState: null,
    accessible: null,
  };
  const tmp2Result = React6(View, obj);
  obj4.icon = React5(native.Avatar, { source: avatarSource, size: native.AvatarSizes.SMALL });
  obj4.label = tmp2Result;
  obj4.subLabel = item.username;
  obj4.start = start;
  obj4.end = end;
  if (showRemove) {
    const obj6 = { item, channelId, onRemove };
    trailing = React5(RemoveIcon, obj6);
  }
  obj4.trailing = trailing;
  obj4.onPress = onPress;
  obj4.disabled = disabled;
  obj4.accessibilityRole = accessibilityRole;
  obj4.accessibilityState = accessibilityState;
  obj4.accessible = accessible;
  return React5(TableRow.TableRow, obj4);
}
function EmptyRoleItem(item) {
  item = item.item;
  const obj = { icon: null, label: null };
  const tmp = closure_9();
  obj.icon = React5(native.Icon, {
    source: _modDef9886,
    color: item.colorString,
    size: native.IconSizes.MEDIUM,
    style: closure_9().roleIcon,
  });
  obj.label = item.name;
  return React5(TableRow.TableRow, obj);
}
class ChannelOverwritesItem {
  constructor(arg0) {
    item = global.item;
    merged = Object.assign(global, Object.assign({ item: 0 }));
    rowType = item.rowType;
    tmp2 = RowType;
    if (RowType.ADMINISTRATOR !== rowType) {
      if (tmp2.ROLE !== rowType) {
        if (tmp2.OWNER !== rowType) {
          if (tmp2.MEMBER !== rowType) {
            if (tmp2.APP_CHANNEL_APP !== rowType) {
              if (tmp2.EMPTY_STATE === rowType) {
                tmp3 = jsx;
                tmp4 = EmptyRoleItem;
                obj = { item: null };
                obj.item = item;
                tmp5 = obj;
                tmp6 = merged;
                merged1 = Object.assign(merged);
                return jsx(EmptyRoleItem, obj);
              } else {
                return null;
              }
            }
          }
        }
        tmp8 = jsx;
        tmp9 = MemberItem;
        obj1 = { item: null };
        obj1.item = item;
        tmp10 = obj1;
        tmp11 = merged;
        merged2 = Object.assign(merged);
        return jsx(MemberItem, obj1);
      }
    }
    obj4 = { item };
    merged3 = Object.assign(merged);
    return jsx(RoleItem, obj4);
  }
}
const View = fn(17).View;
const RowType = fn(8522).RowType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
let closure_9 = createStyles.createStyles({
  nameWrapper: { flexDirection: "row", alignItems: "flex-end", marginRight: 16 },
  name: { paddingRight: 4 },
  memberName: { flexShrink: 1 },
  ownerIcon: { alignSelf: "center" },
  roleIcon: { height: 30, width: 30 },
  rowRemoveIconDisabled: { opacity: 0.3 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelOverwritesItem.tsx");

export default ChannelOverwritesItem;
export const ChannelOverwritesCheckboxItem = function ChannelOverwritesCheckboxItem(checked) {
  checked = checked.checked;
  const merged = Object.assign(checked, Object.assign({ checked: 0 }));
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked });
  const obj2 = {};
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const merged1 = Object.assign(merged);
  obj2.accessible = true;
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityState = accessibilityState;
  obj2.trailing = React5(FormCheckbox.FormCheckbox, { checked });
  return React5(ChannelOverwritesItem, obj2);
};
