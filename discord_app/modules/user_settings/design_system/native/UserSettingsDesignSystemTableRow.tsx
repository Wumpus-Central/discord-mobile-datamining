// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTableRow.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import Button from "../../../../design/void/native.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04940_LinearGradient.js";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowIcon from "../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import context from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import RowButtonWrapper from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import registerAssetDefault from "../../../../../_runtime/13752_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/13753_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/13754_registerAsset.js";
import registerAssetDefault4 from "../../../../../_runtime/13755_registerAsset.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../stores/SelectedGuildStore.tsx";
import closure_9 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function MyTableRow() {
  let obj = { label: "Notifications", onPress: closure_10, icon: null };
  obj = { IconComponent: SettingsIcon.SettingsIcon };
  obj[2] = callback2(TableRowInner.TableRow.Icon, obj);
  return callback2(TableRowInner.TableRow, obj);
}
({ View: c5, Image: closure_6, ScrollView: error } = get_ActivityIndicator);
({ NOOP: c10, StatusTypes: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemTableRow.tsx",
);

export default function UserSettingsDesignSystemTableRow() {
  let obj = initialize;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  guildId = guildId.getGuildId();
  const rect = useSafeAreaInsetsDefault();
  [tmp4, require] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(false), 2);
  [tmp6, importDefault] = callback(React.useState(false), 2);
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  obj = { children: null };
  const callback1 = React.useCallback((arg0) => {
    callback2(arg0);
  }, []);
  obj = { spacing: 24, style: obj1, children: null };
  const obj2 = { hasIcons: true, children: null };
  const obj3 = {
    onPress: closure_10,
    icon: null,
    label: "Boost your Server",
    subLabel: "Unlock perks for the entire community",
    trailing: null,
  };
  obj1 = { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 };
  const tmp5 = callback(React.useState(false), 2);
  obj3[1] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj3[4] = callback2(TableRowInner.TableRow.Arrow, {});
  const items1 = [callback2(TableRowInner.TableRow, obj3), callback2(MyTableRow, {}), , , , ,];
  const obj5 = { icon: null, label: "Add a Friend" };
  const obj4 = { IconComponent: SettingsIcon.SettingsIcon };
  obj5[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[2] = callback2(TableRowInner.TableRow, obj5);
  const obj7 = {
    icon: null,
    label: "A really long label that takes up all of the space and then some",
    subLabel: "A really long sublabel that takes up all of the space and then some",
  };
  const obj6 = { IconComponent: SettingsIcon.SettingsIcon };
  obj7[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[3] = callback2(TableRowInner.TableRow, obj7);
  const obj9 = {
    icon: null,
    label: "A really long label, but next to an arrow, that takes up all of the space and then some",
    subLabel: "A really long sublabel, but next to an arrow, that takes up all of the space and then some",
    trailing: null,
  };
  const obj8 = { IconComponent: SettingsIcon.SettingsIcon };
  obj9[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj9[3] = callback2(TableRowInner.TableRow.Arrow, {});
  items1[4] = callback2(TableRowInner.TableRow, obj9);
  const obj11 = { icon: null, label: null, subLabel: null };
  const obj10 = { IconComponent: SettingsIcon.SettingsIcon };
  obj11[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj11[1] = callback2(Text.Text, {
    variant: "text-md/medium",
    lineClamp: 1,
    children: "Custom node for label - A really long label that takes up all of the space and then some",
  });
  const obj13 = { style: { flexDirection: "row", alignItems: "center" }, children: null };
  const obj14 = { style: { flexShrink: 0, height: 24, width: 24, marginEnd: 8 }, source: null, resizeMode: "contain" };
  const obj15 = { uri: null };
  let obj18 = getAvatarURLDefault;
  obj15[0] = obj18.getEmojiURL({ id: "801497159479722084", animated: false, size: 24 });
  obj14[1] = obj15;
  const items2 = [
    callback2(closure_6, obj14),
    callback2(Text.Text, {
      variant: "text-md/medium",
      lineClamp: 1,
      color: "text-muted",
      style: { flexShrink: 1 },
      children: "Custom node for subLabel - A really long sublabel that takes up all of the space and then some",
    }),
  ];
  obj13[1] = items2;
  obj11[2] = callback3(closure_5, obj13);
  items1[5] = callback2(TableRowInner.TableRow, obj11);
  const obj16 = { icon: null, label: "A disabled row", subLabel: "you cant do anything with this", disabled: true };
  const obj12 = { IconComponent: SettingsIcon.SettingsIcon };
  obj16[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[6] = callback2(TableRowInner.TableRow, obj16);
  obj2[1] = items1;
  const items3 = [callback3(TableRowGroupTitle.TableRowGroup, obj2), , , , , ,];
  obj18 = { title: "Table Row Section", hasIcons: true, children: null };
  const obj19 = { label: stateFromStores.globalName, subLabel: stateFromStores.username, icon: null };
  const obj17 = { IconComponent: SettingsIcon.SettingsIcon };
  obj19[2] = callback2(Button.Avatar, {
    user: stateFromStores,
    guildId,
    status: constants.ONLINE,
    size: Button.AvatarSizes.REFRESH_MEDIUM_32,
  });
  const items4 = [callback2(TableRowInner.TableRow, obj19), , , , , , , , , ,];
  const obj21 = { icon: null, label: "Language", trailing: null };
  const obj20 = {
    user: stateFromStores,
    guildId,
    status: constants.ONLINE,
    size: Button.AvatarSizes.REFRESH_MEDIUM_32,
  };
  obj21[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj21[2] = callback2(TableRowInner.TableRow.TrailingText, { text: "English (US)" });
  items4[1] = callback2(TableRowInner.TableRow, obj21);
  const obj23 = { icon: null, label: "Display Name", trailing: null };
  const obj22 = { IconComponent: SettingsIcon.SettingsIcon };
  obj23[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj23[2] = callback2(TableRowInner.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[2] = callback2(TableRowInner.TableRow, obj23);
  const obj25 = { icon: null, label: "Display Name", trailing: null, arrow: true };
  const obj24 = { IconComponent: SettingsIcon.SettingsIcon };
  obj25[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj25[2] = callback2(TableRowInner.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[3] = callback2(TableRowInner.TableRow, obj25);
  const obj27 = { icon: null, label: "Display Name That Is Very Long And Maybe Wrap", trailing: null };
  const obj26 = { IconComponent: SettingsIcon.SettingsIcon };
  obj27[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj27[2] = callback2(TableRowInner.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[4] = callback2(TableRowInner.TableRow, obj27);
  const obj29 = { icon: null, label: "Display Name That Is Very Long And Maybe Wrap", trailing: null };
  const obj28 = { IconComponent: SettingsIcon.SettingsIcon };
  obj29[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj29[2] = callback2(TableRowInner.TableRow.TrailingText, { text: "100" });
  items4[5] = callback2(TableRowInner.TableRow, obj29);
  const obj31 = { icon: null, label: "Language", subLabel: "English (US)" };
  const obj30 = { IconComponent: SettingsIcon.SettingsIcon };
  obj31[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items4[6] = callback2(TableRowInner.TableRow, obj31);
  const obj33 = {
    icon: null,
    label: "A really long label that has a switch next to it",
    subLabel: "Show more information in less space",
    value: null,
    onValueChange: null,
  };
  const obj32 = { IconComponent: SettingsIcon.SettingsIcon };
  obj33[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj33[3] = tmp4;
  obj33[4] = callback;
  items4[7] = callback2(TableSwitchRow.TableSwitchRow, obj33);
  const obj35 = {
    icon: null,
    label: "Text & Images",
    subLabel: "Automatically play GIFs when possible",
    value: true,
    onValueChange: null,
    disabled: true,
  };
  const obj34 = { IconComponent: SettingsIcon.SettingsIcon };
  obj35[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj35[4] = closure_10;
  items4[8] = callback2(TableSwitchRow.TableSwitchRow, obj35);
  const obj37 = {
    icon: null,
    label: "A checkbox row",
    subLabel: "This can be checked or unchecked",
    checked: null,
    onPress: null,
  };
  const obj36 = { IconComponent: SettingsIcon.SettingsIcon };
  obj37[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj37[3] = tmp6;
  obj37[4] = callback1;
  items4[9] = callback2(TableCheckboxRow.TableCheckboxRow, obj37);
  const obj39 = {
    icon: null,
    label: "A really long label that has a checkbox next to it",
    subLabel: "Show more information in less space",
    checked: true,
    disabled: true,
    onPress: null,
  };
  const obj38 = { IconComponent: SettingsIcon.SettingsIcon };
  obj39[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj39[5] = closure_10;
  items4[10] = callback2(TableCheckboxRow.TableCheckboxRow, obj39);
  obj18[2] = items4;
  items3[1] = callback3(TableRowGroupTitle.TableRowGroup, obj18);
  const obj41 = {
    title: "Draggable Table Rows",
    description:
      "Table rows can optionally show a drag handle. Note that this does not actually make them draggable, you need to implement that yourself.",
    hasIcons: true,
    children: null,
  };
  const obj42 = {
    draggable: true,
    onPress: closure_10,
    icon: null,
    label: "Boost your Server",
    subLabel: "Unlock perks for the entire community",
    trailing: null,
  };
  const obj40 = { IconComponent: SettingsIcon.SettingsIcon };
  obj42[2] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj42[5] = callback2(TableRowInner.TableRow.Arrow, {});
  const items5 = [callback2(TableRowInner.TableRow, obj42)];
  const obj44 = {
    draggable: true,
    onPress: closure_10,
    icon: null,
    label: "Boost your Server",
    subLabel: "Unlock perks for the entire community",
    trailing: null,
  };
  const obj43 = { IconComponent: SettingsIcon.SettingsIcon };
  obj44[2] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj44[5] = callback2(TableRowInner.TableRow.Arrow, {});
  items5[1] = callback2(TableRowInner.TableRow, obj44);
  obj41[3] = items5;
  items3[2] = callback3(TableRowGroupTitle.TableRowGroup, obj41);
  const obj46 = { title: "No Icons", hasIcons: false, children: null };
  const items6 = [
    callback2(TableRowInner.TableRow, { label: "First Item", subLabel: "Here is an item", onPress: closure_10 }),
    callback2(TableRowInner.TableRow, { label: "Second Item", subLabel: "Here is another item", onPress: closure_10 }),
    callback2(TableRowInner.TableRow, {
      label: "Third Item",
      subLabel: "Here is yet another item",
      onPress: closure_10,
    }),
  ];
  obj46[2] = items6;
  items3[3] = callback3(TableRowGroupTitle.TableRowGroup, obj46);
  const obj50 = {
    title: "Radio Group",
    hasIcons: false,
    defaultValue: "option1",
    onChange: closure_10,
    children: null,
  };
  const items7 = [
    callback2(TableRadioRow.TableRadioRow, { label: "First Item", subLabel: "Here is an item", value: "option1" }),
    callback2(TableRadioRow.TableRadioRow, {
      label: "Second Item",
      subLabel: "Here is another item",
      value: "option2",
    }),
    callback2(TableRadioRow.TableRadioRow, {
      label: "Third Item",
      subLabel: "Here is yet another item",
      value: "option3",
    }),
    callback2(TableRadioRow.TableRadioRow, {
      label: "Disabled Item",
      subLabel: "This should not be selectable",
      value: "option4",
      disabled: true,
    }),
  ];
  obj50[4] = items7;
  items3[4] = callback3(context.TableRadioGroup, obj50);
  const obj51 = {
    title: "Online Status",
    hasIcons: true,
    defaultValue: "option1",
    onChange: closure_10,
    children: null,
  };
  const obj52 = { icon: null, label: "Online", value: "option1" };
  const obj45 = { IconComponent: SettingsIcon.SettingsIcon };
  const obj47 = { label: "First Item", subLabel: "Here is an item", onPress: closure_10 };
  const obj48 = { label: "Second Item", subLabel: "Here is another item", onPress: closure_10 };
  const obj49 = { label: "Third Item", subLabel: "Here is yet another item", onPress: closure_10 };
  obj52[0] = callback2(TableRowIcon.TableRowIcon, { variant: "text-status-online", source: registerAssetDefault4 });
  const items8 = [callback2(TableRadioRow.TableRadioRow, obj52), , ,];
  const obj54 = { icon: null, label: "Idle", value: "option2" };
  const obj53 = { variant: "text-status-online", source: registerAssetDefault4 };
  obj54[0] = callback2(TableRowIcon.TableRowIcon, { variant: "text-status-idle", source: registerAssetDefault });
  items8[1] = callback2(TableRadioRow.TableRadioRow, obj54);
  const obj56 = { icon: null, label: "Do Not Disturb", value: "option3" };
  const obj55 = { variant: "text-status-idle", source: registerAssetDefault };
  obj56[0] = callback2(TableRowIcon.TableRowIcon, { variant: "text-status-dnd", source: registerAssetDefault2 });
  items8[2] = callback2(TableRadioRow.TableRadioRow, obj56);
  const obj58 = { icon: null, label: "Invisible", value: "option4" };
  const obj57 = { variant: "text-status-dnd", source: registerAssetDefault2 };
  obj58[0] = callback2(TableRowIcon.TableRowIcon, { variant: "text-status-offline", source: registerAssetDefault3 });
  items8[3] = callback2(TableRadioRow.TableRadioRow, obj58);
  obj51[4] = items8;
  items3[5] = callback3(context.TableRadioGroup, obj51);
  const obj60 = { spacing: 12, children: null };
  const items9 = [callback2(Text.Text, { variant: "heading-sm/semibold", children: "Row buttons" }), , ,];
  const obj61 = { icon: null, label: "Boost your server", onPress: null };
  const obj59 = { variant: "text-status-offline", source: registerAssetDefault3 };
  obj61[0] = callback2(TableRowInner.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj61[2] = closure_10;
  items9[1] = callback2(RowButtonWrapper.RowButton, obj61);
  items9[2] = callback2(RowButtonWrapper.RowButton, {
    label: "Disabled row button",
    onPress: closure_10,
    disabled: true,
    arrow: false,
  });
  const obj64 = {
    style: { padding: 8 },
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"],
    children: null,
  };
  const obj62 = { IconComponent: SettingsIcon.SettingsIcon };
  const obj63 = { label: "Disabled row button", onPress: closure_10, disabled: true, arrow: false };
  const obj65 = { icon: null, experimental_withBlurBackground: true, label: "Row Button", onPress: null };
  const tmp9 = LinearGradientDefault;
  obj65[0] = callback2(TableRowInner.TableRow.Icon, {
    IconComponent: SettingsIcon.SettingsIcon,
    variant: "translucent",
  });
  obj65[3] = closure_10;
  obj64[4] = callback2(RowButtonWrapper.RowButton, obj65);
  items9[3] = callback2(tmp9, obj64);
  obj60[1] = items9;
  items3[6] = callback3(Stack.Stack, obj60);
  obj[2] = items3;
  obj[0] = callback3(Stack.Stack, obj);
  return callback2(closure_7, obj);
}
