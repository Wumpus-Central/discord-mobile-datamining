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
import _modDef9753 from "../../../../../_runtime/metro/09753__.js";
import _modDef9754 from "../../../../../_runtime/metro/09754__.js";
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
    let intl = item(1114).intl;
    obj.accessibilityLabel = intl.string(item(1114).t.N86XcP);
    obj.onPress = function onPress() {
      if (null != onRemove) {
        return tmp(item);
      } else {
        ({ id, name } = item);
        closure_2 = channelId;
        let obj = { key: null, title: null, content: null, confirmText: null, onConfirm: null };
        const _HermesInternal = HermesInternal;
        obj.key = "remove-channel-overwrite-" + id;
        const intl = util.intl;
        obj.title = intl.string(util.t.GuPYQB);
        const intl2 = util.intl;
        obj = { name };
        obj.content = intl2.format(util.t.xERCnZ, obj);
        const intl3 = util.intl;
        obj.confirmText = intl3.string(util.t.fKxYb0);
        obj.onConfirm = function onConfirm() {
          let result = channelId(dependencyMap[8]).clearPermissionOverwrite(closure_2, id);
          result.then(() => {
            const result = id(closure_2_3[9]).memberOrRoleRemovedToast(name);
          });
        };
        obj.showConfirmModal(obj);
      }
    };
    let prop;
    if (item.disabled) {
      prop = tmp.rowRemoveIconDisabled;
    }
    obj = { style: prop };
    obj.children = closure_7(item(6616).CircleXIcon, obj);
    tmp3Result = tmp3(item(5123).PressableOpacity, obj);
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
  let obj = {
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
  obj = { size: "lg", color: item.colorString };
  obj.icon = React5(ShieldUserIcon.ShieldUserIcon, obj);
  obj.label = item.name;
  if (showType) {
    subLabel = ChannelPermissionsUtilsAll.getRowTypeLabel(item.rowType);
  }
  obj.subLabel = subLabel;
  obj.start = start;
  obj.end = end;
  if (showRemove) {
    obj = { item, channelId };
    trailing = tmp(RemoveIcon, obj);
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
  let obj = { style: tmp.nameWrapper, children: null };
  obj = {
    style: null,
    lineClamp: 1,
    variant: "text-md/semibold",
    color: "interactive-text-active",
    children: item.name,
  };
  const items = [,];
  ({ name: arr[0], memberName: arr[1] } = tmp);
  obj.style = items;
  const items1 = [React5(Text_Text.Text, obj)];
  let tmp4Result = null;
  if (item.rowType === RowType.OWNER) {
    obj = {
      size: tmp5(1178).Icon.Sizes.REFRESH_SMALL_16,
      source: _modDef9753,
      disableColor: true,
      style: tmp.ownerIcon,
    };
    tmp4Result = tmp4(tmp5(1178).Icon, obj);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  const user = UserStore.getUser(item.id);
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(guildId);
  }
  const obj1 = {
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
  obj1.icon = React5(native.Avatar, { source: avatarSource, size: native.AvatarSizes.SMALL });
  obj1.label = tmp2Result;
  obj1.subLabel = item.username;
  obj1.start = start;
  obj1.end = end;
  if (showRemove) {
    const obj3 = { item, channelId, onRemove };
    trailing = tmp4(RemoveIcon, obj3);
  }
  obj1.trailing = trailing;
  obj1.onPress = onPress;
  obj1.disabled = disabled;
  obj1.accessibilityRole = accessibilityRole;
  obj1.accessibilityState = accessibilityState;
  obj1.accessible = accessible;
  return React5(TableRow.TableRow, obj1);
}
function EmptyRoleItem(item) {
  item = item.item;
  let obj = { icon: null, label: null };
  obj = { source: _modDef9754, color: item.colorString, size: native.IconSizes.MEDIUM, style: closure_9().roleIcon };
  obj.icon = React5(native.Icon, obj);
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
        obj = { item: null };
        obj.item = item;
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
const View = fn(17).View;
const RowType = fn(8401).RowType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
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
  let obj = useA11yRolesNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = {};
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const merged1 = Object.assign(merged);
  obj.accessible = true;
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.trailing = React5(FormCheckbox.FormCheckbox, { checked });
  return React5(ChannelOverwritesItem, obj);
};
