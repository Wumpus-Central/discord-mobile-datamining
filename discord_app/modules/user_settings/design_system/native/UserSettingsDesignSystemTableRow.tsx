// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTableRow.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05156_LinearGradient.js";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowIcon from "../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import _modDef14317 from "../../../../../_runtime/metro/14317__.js";
import _modDef14318 from "../../../../../_runtime/metro/14318__.js";
import _modDef14319 from "../../../../../_runtime/metro/14319__.js";
import _modDef14320 from "../../../../../_runtime/metro/14320__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function MyTableRow() {
  const obj = {
    label: "Notifications",
    onPress,
    icon: closure_1_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon }),
  };
  return closure_1_12(TableRow.TableRow, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ NOOP: c10, StatusTypes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemTableRow.tsx",
);

export default function UserSettingsDesignSystemTableRow() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const guildId = SelectedGuildStore.getGuildId();
  const rect = useSafeAreaInsetsDefault();
  [tmp4, require] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  [tmp6, importDefault] = noop.useState(false);
  const callback = noop.useCallback((arg0) => {
    require(arg0);
  }, []);
  const obj2 = { children: null };
  const callback1 = noop.useCallback((arg0) => {
    importDefault(arg0);
  }, []);
  const obj3 = {
    spacing: 24,
    style: { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 },
    children: null,
  };
  const obj4 = { hasIcons: true, children: null };
  const obj5 = {
    onPress,
    icon: null,
    label: "Boost your Server",
    subLabel: "Unlock perks for the entire community",
    trailing: null,
  };
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  obj5.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj5.trailing = closure_12(TableRow.TableRow.Arrow, {});
  const items1 = [closure_12(TableRow.TableRow, obj5), closure_12(MyTableRow, {}), , , , ,];
  const obj7 = { icon: null, label: "Add a Friend" };
  const obj6 = { IconComponent: SettingsIcon.SettingsIcon };
  obj7.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[2] = closure_12(TableRow.TableRow, obj7);
  const obj9 = {
    icon: null,
    label: "A really long label that takes up all of the space and then some",
    subLabel: "A really long sublabel that takes up all of the space and then some",
  };
  const obj8 = { IconComponent: SettingsIcon.SettingsIcon };
  obj9.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[3] = closure_12(TableRow.TableRow, obj9);
  const obj11 = {
    icon: null,
    label: "A really long label, but next to an arrow, that takes up all of the space and then some",
    subLabel: "A really long sublabel, but next to an arrow, that takes up all of the space and then some",
    trailing: null,
  };
  const obj10 = { IconComponent: SettingsIcon.SettingsIcon };
  obj11.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj11.trailing = closure_12(TableRow.TableRow.Arrow, {});
  items1[4] = closure_12(TableRow.TableRow, obj11);
  const obj13 = { icon: null, label: null, subLabel: null };
  const obj12 = { IconComponent: SettingsIcon.SettingsIcon };
  obj13.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj13.label = closure_12(Text_Text.Text, {
    variant: "text-md/medium",
    lineClamp: 1,
    children: "Custom node for label - A really long label that takes up all of the space and then some",
  });
  const obj15 = { style: { flexDirection: "row", alignItems: "center" }, children: null };
  const obj16 = { style: { flexShrink: 0, height: 24, width: 24, marginEnd: 8 }, source: null, resizeMode: "contain" };
  const obj17 = { uri: null };
  const obj14 = { IconComponent: SettingsIcon.SettingsIcon };
  obj17.uri = AvatarUtilsDefault.getEmojiURL({ id: "801497159479722084", animated: false, size: 24 });
  obj16.source = obj17;
  const items2 = [
    closure_12(closure_6, obj16),
    closure_12(Text_Text.Text, {
      variant: "text-md/medium",
      lineClamp: 1,
      color: "text-muted",
      style: { flexShrink: 1 },
      children: "Custom node for subLabel - A really long sublabel that takes up all of the space and then some",
    }),
  ];
  obj15.children = items2;
  obj13.subLabel = closure_13(closure_5, obj15);
  items1[5] = closure_12(TableRow.TableRow, obj13);
  const obj19 = { icon: null, label: "A disabled row", subLabel: "you cant do anything with this", disabled: true };
  obj19.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[6] = closure_12(TableRow.TableRow, obj19);
  obj4.children = items1;
  const items3 = [closure_13(TableRowGroup.TableRowGroup, obj4), , , , , ,];
  const obj21 = { title: "Table Row Section", hasIcons: true, children: null };
  const obj22 = { label: stateFromStores.globalName, subLabel: stateFromStores.username, icon: null };
  const obj20 = { IconComponent: SettingsIcon.SettingsIcon };
  obj22.icon = closure_12(native.Avatar, {
    user: stateFromStores,
    guildId,
    status: constants.ONLINE,
    size: native.AvatarSizes.REFRESH_MEDIUM_32,
  });
  const items4 = [closure_12(TableRow.TableRow, obj22), , , , , , , , , ,];
  const obj24 = { icon: null, label: "Language", trailing: null };
  const obj23 = {
    user: stateFromStores,
    guildId,
    status: constants.ONLINE,
    size: native.AvatarSizes.REFRESH_MEDIUM_32,
  };
  obj24.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj24.trailing = closure_12(TableRow.TableRow.TrailingText, { text: "English (US)" });
  items4[1] = closure_12(TableRow.TableRow, obj24);
  const obj26 = { icon: null, label: "Display Name", trailing: null };
  const obj25 = { IconComponent: SettingsIcon.SettingsIcon };
  obj26.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj26.trailing = closure_12(TableRow.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[2] = closure_12(TableRow.TableRow, obj26);
  const obj28 = { icon: null, label: "Display Name", trailing: null, arrow: true };
  const obj27 = { IconComponent: SettingsIcon.SettingsIcon };
  obj28.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj28.trailing = closure_12(TableRow.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[3] = closure_12(TableRow.TableRow, obj28);
  const obj30 = { icon: null, label: "Display Name That Is Very Long And Maybe Wrap", trailing: null };
  const obj29 = { IconComponent: SettingsIcon.SettingsIcon };
  obj30.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj30.trailing = closure_12(TableRow.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[4] = closure_12(TableRow.TableRow, obj30);
  const obj32 = { icon: null, label: "Display Name That Is Very Long And Maybe Wrap", trailing: null };
  const obj31 = { IconComponent: SettingsIcon.SettingsIcon };
  obj32.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj32.trailing = closure_12(TableRow.TableRow.TrailingText, { text: "100" });
  items4[5] = closure_12(TableRow.TableRow, obj32);
  const obj34 = { icon: null, label: "Language", subLabel: "English (US)" };
  const obj33 = { IconComponent: SettingsIcon.SettingsIcon };
  obj34.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items4[6] = closure_12(TableRow.TableRow, obj34);
  const obj36 = {
    icon: null,
    label: "A really long label that has a switch next to it",
    subLabel: "Show more information in less space",
    value: null,
    onValueChange: null,
  };
  const obj35 = { IconComponent: SettingsIcon.SettingsIcon };
  obj36.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj36.value = tmp4;
  obj36.onValueChange = callback;
  items4[7] = closure_12(TableSwitchRow.TableSwitchRow, obj36);
  const obj38 = {
    icon: null,
    label: "Text & Images",
    subLabel: "Automatically play GIFs when possible",
    value: true,
    onValueChange: null,
    disabled: true,
  };
  const obj37 = { IconComponent: SettingsIcon.SettingsIcon };
  obj38.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj38.onValueChange = onPress;
  items4[8] = closure_12(TableSwitchRow.TableSwitchRow, obj38);
  const obj40 = {
    icon: null,
    label: "A checkbox row",
    subLabel: "This can be checked or unchecked",
    checked: null,
    onPress: null,
  };
  const obj39 = { IconComponent: SettingsIcon.SettingsIcon };
  obj40.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj40.checked = tmp6;
  obj40.onPress = callback1;
  items4[9] = closure_12(TableCheckboxRow.TableCheckboxRow, obj40);
  const obj42 = {
    icon: null,
    label: "A really long label that has a checkbox next to it",
    subLabel: "Show more information in less space",
    checked: true,
    disabled: true,
    onPress: null,
  };
  const obj41 = { IconComponent: SettingsIcon.SettingsIcon };
  obj42.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj42.onPress = onPress;
  items4[10] = closure_12(TableCheckboxRow.TableCheckboxRow, obj42);
  obj21.children = items4;
  items3[1] = closure_13(TableRowGroup.TableRowGroup, obj21);
  const obj44 = {
    title: "Draggable Table Rows",
    description:
      "Table rows can optionally show a drag handle. Note that this does not actually make them draggable, you need to implement that yourself.",
    hasIcons: true,
    children: null,
  };
  const obj45 = {
    draggable: true,
    onPress,
    icon: null,
    label: "Boost your Server",
    subLabel: "Unlock perks for the entire community",
    trailing: null,
  };
  const obj43 = { IconComponent: SettingsIcon.SettingsIcon };
  obj45.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj45.trailing = closure_12(TableRow.TableRow.Arrow, {});
  const items5 = [closure_12(TableRow.TableRow, obj45)];
  const obj47 = {
    draggable: true,
    onPress,
    icon: null,
    label: "Boost your Server",
    subLabel: "Unlock perks for the entire community",
    trailing: null,
  };
  const obj46 = { IconComponent: SettingsIcon.SettingsIcon };
  obj47.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj47.trailing = closure_12(TableRow.TableRow.Arrow, {});
  items5[1] = closure_12(TableRow.TableRow, obj47);
  obj44.children = items5;
  items3[2] = closure_13(TableRowGroup.TableRowGroup, obj44);
  const obj49 = { title: "No Icons", hasIcons: false, children: null };
  const items6 = [
    closure_12(TableRow.TableRow, { label: "First Item", subLabel: "Here is an item", onPress }),
    closure_12(TableRow.TableRow, { label: "Second Item", subLabel: "Here is another item", onPress }),
    closure_12(TableRow.TableRow, { label: "Third Item", subLabel: "Here is yet another item", onPress }),
  ];
  obj49.children = items6;
  items3[3] = closure_13(TableRowGroup.TableRowGroup, obj49);
  const obj53 = { title: "Radio Group", hasIcons: false, defaultValue: "option1", onChange: onPress, children: null };
  const items7 = [
    closure_12(TableRadioRow.TableRadioRow, { label: "First Item", subLabel: "Here is an item", value: "option1" }),
    closure_12(TableRadioRow.TableRadioRow, {
      label: "Second Item",
      subLabel: "Here is another item",
      value: "option2",
    }),
    closure_12(TableRadioRow.TableRadioRow, {
      label: "Third Item",
      subLabel: "Here is yet another item",
      value: "option3",
    }),
    closure_12(TableRadioRow.TableRadioRow, {
      label: "Disabled Item",
      subLabel: "This should not be selectable",
      value: "option4",
      disabled: true,
    }),
  ];
  obj53.children = items7;
  items3[4] = closure_13(TableRadioGroup.TableRadioGroup, obj53);
  const obj54 = { title: "Online Status", hasIcons: true, defaultValue: "option1", onChange: onPress, children: null };
  const obj55 = { icon: null, label: "Online", value: "option1" };
  const obj48 = { IconComponent: SettingsIcon.SettingsIcon };
  const obj50 = { label: "First Item", subLabel: "Here is an item", onPress };
  const obj51 = { label: "Second Item", subLabel: "Here is another item", onPress };
  const obj52 = { label: "Third Item", subLabel: "Here is yet another item", onPress };
  obj55.icon = closure_12(TableRowIcon.TableRowIcon, { variant: "text-status-online", source: _modDef14320 });
  const items8 = [closure_12(TableRadioRow.TableRadioRow, obj55), , ,];
  const obj57 = { icon: null, label: "Idle", value: "option2" };
  const obj56 = { variant: "text-status-online", source: _modDef14320 };
  obj57.icon = closure_12(TableRowIcon.TableRowIcon, { variant: "text-status-idle", source: _modDef14317 });
  items8[1] = closure_12(TableRadioRow.TableRadioRow, obj57);
  const obj59 = { icon: null, label: "Do Not Disturb", value: "option3" };
  const obj58 = { variant: "text-status-idle", source: _modDef14317 };
  obj59.icon = closure_12(TableRowIcon.TableRowIcon, { variant: "text-status-dnd", source: _modDef14318 });
  items8[2] = closure_12(TableRadioRow.TableRadioRow, obj59);
  const obj61 = { icon: null, label: "Invisible", value: "option4" };
  const obj60 = { variant: "text-status-dnd", source: _modDef14318 };
  obj61.icon = closure_12(TableRowIcon.TableRowIcon, { variant: "text-status-offline", source: _modDef14319 });
  items8[3] = closure_12(TableRadioRow.TableRadioRow, obj61);
  obj54.children = items8;
  items3[5] = closure_13(TableRadioGroup.TableRadioGroup, obj54);
  const obj63 = { spacing: 12, children: null };
  const items9 = [closure_12(Text_Text.Text, { variant: "heading-sm/semibold", children: "Row buttons" }), , ,];
  const obj64 = { icon: null, label: "Boost your server", onPress: null };
  const obj62 = { variant: "text-status-offline", source: _modDef14319 };
  obj64.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj64.onPress = onPress;
  items9[1] = closure_12(RowButton.RowButton, obj64);
  items9[2] = closure_12(RowButton.RowButton, { label: "Disabled row button", onPress, disabled: true, arrow: false });
  const obj67 = {
    style: { padding: 8 },
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"],
    children: null,
  };
  const obj65 = { IconComponent: SettingsIcon.SettingsIcon };
  const obj66 = { label: "Disabled row button", onPress, disabled: true, arrow: false };
  const obj68 = { icon: null, experimental_withBlurBackground: true, label: "Row Button", onPress: null };
  const tmp9 = LinearGradientDefault;
  obj68.icon = closure_12(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon, variant: "translucent" });
  obj68.onPress = onPress;
  obj67.children = closure_12(RowButton.RowButton, obj68);
  items9[3] = closure_12(tmp9, obj67);
  obj63.children = items9;
  items3[6] = closure_13(Stack_Stack.Stack, obj63);
  obj3.children = items3;
  obj2.children = closure_13(Stack_Stack.Stack, obj3);
  return closure_12(closure_7, obj2);
}
