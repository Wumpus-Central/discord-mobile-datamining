// === Module 15665: UserSettingsDesignSystemTableRow ===

// Module 15665 (UserSettingsDesignSystemTableRow)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import TableCheckboxRow3 from "TableCheckboxRow" /* 5997 */;
import TableRow16 from "TableRow" /* 6000 */;
import TableRowIcon5 from "TableRowIcon" /* 6006 */;
import TableRadioRow5 from "TableRadioRow" /* 6078 */;
import TableRadioGroup3 from "TableRadioGroup" /* 6079 */;
import TableRowGroup5 from "TableRowGroup" /* 6081 */;
import TableSwitchRow3 from "TableSwitchRow" /* 6705 */;
import SettingsIcon from "SettingsIcon" /* 6893 */;
import RowButton3 from "RowButton" /* 8926 */;
import AssetRegistryDefault from "AssetRegistry" /* 13942 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13943 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13944 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13945 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ View: hasOwnProperty, Image: metroRequire, ScrollView: metroImportDefault } = react_native);
({ NOOP: c10, StatusTypes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Icon;
  let first;
  let obj3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: "Notifications", onPress, icon: closure_12(Icon, obj3) };
    const TableRow = TableRow16.TableRow;
    obj3 = { IconComponent: SettingsIcon.SettingsIcon };
    Icon = TableRow16.TableRow.Icon;
    const tmp7 = closure_12(TableRow, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let Icon;
  let obj2;
  const obj = { label: "Notifications", onPress, icon: closure_12(Icon, obj2) };
  const TableRow = TableRow16.TableRow;
  obj2 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon = TableRow16.TableRow.Icon;
  return closure_12(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Icon2;
  let Icon3;
  let Icon6;
  let currentUser;
  let items1;
  let items2;
  let obj12;
  let obj14;
  let obj18;
  let obj5;
  let obj7;
  let tmp11Result;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(71);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const guildId = SelectedGuildStore.getGuildId();
    cResult[2] = guildId;
    tmp8 = guildId;
  } else {
    tmp8 = cResult[2];
  }
  const rect = useSafeAreaInsetsDefault();
  [r10045, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [r10050, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f(arg0) {
      require(arg0);
    };
    cResult[3] = fn2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(arg0) {
        importDefault(arg0);
      }
    }
    cResult[4] = E;
  } else {
    class E {
      constructor(arg0) {
        importDefault(arg0);
      }
    }
  }
  if (cResult[5] === rect.bottom) {
    let tmp16;
    let tmp19;
    let tmp18;
    let tmp24;
    let tmp26;
    let tmp28;
    let tmp30;
    let tmp33;
    let tmp32;
    let tmp38;
    let tmp41;
    class E {
      constructor(arg0) {
        importDefault(arg0);
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj2 = { IconComponent: SettingsIcon.SettingsIcon };
      const Icon = TableRow16.TableRow.Icon;
      const tmp17 = closure_12(Icon, obj2);
      cResult[8] = tmp17;
      tmp16 = tmp17;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj3 = { onPress, icon: tmp16, label: "Boost your Server", subLabel: "Unlock perks for the entire community", trailing: closure_12(TableRow16.TableRow.Arrow, {}) };
      const TableRow = TableRow16.TableRow;
      const tmp21 = closure_12(TableRow, obj3);
      const tmp23 = closure_12(closure_14, {});
      cResult[9] = tmp21;
      cResult[10] = tmp23;
      tmp19 = tmp23;
      tmp18 = tmp21;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      tmp19 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj4 = { icon: closure_12(Icon2, obj5), label: "Add a Friend" };
      const TableRow2 = TableRow16.TableRow;
      obj5 = { IconComponent: SettingsIcon.SettingsIcon };
      Icon2 = TableRow16.TableRow.Icon;
      const tmp25 = closure_12(TableRow2, obj4);
      cResult[11] = tmp25;
      tmp24 = tmp25;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj6 = { icon: closure_12(Icon3, obj7), label: "A really long label that takes up all of the space and then some", subLabel: "A really long sublabel that takes up all of the space and then some" };
      const TableRow3 = TableRow16.TableRow;
      obj7 = { IconComponent: SettingsIcon.SettingsIcon };
      Icon3 = TableRow16.TableRow.Icon;
      const tmp27 = closure_12(TableRow3, obj6);
      cResult[12] = tmp27;
      tmp26 = tmp27;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj8 = { IconComponent: SettingsIcon.SettingsIcon };
      const Icon4 = TableRow16.TableRow.Icon;
      const tmp29 = closure_12(Icon4, obj8);
      cResult[13] = tmp29;
      tmp28 = tmp29;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj9 = { icon: tmp28, label: "A really long label, but next to an arrow, that takes up all of the space and then some", subLabel: "A really long sublabel, but next to an arrow, that takes up all of the space and then some", trailing: closure_12(TableRow16.TableRow.Arrow, {}) };
      const TableRow4 = TableRow16.TableRow;
      const tmp31 = closure_12(TableRow4, obj9);
      cResult[14] = tmp31;
      tmp30 = tmp31;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const _Symbol7 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj10 = { IconComponent: SettingsIcon.SettingsIcon };
      const Icon5 = TableRow16.TableRow.Icon;
      const tmp34 = closure_12(Icon5, obj10);
      const tmp35 = closure_12(Text_Text.Text, { variant: "text-md/medium", lineClamp: 1, children: "Custom node for label - A really long label that takes up all of the space and then some" });
      cResult[15] = tmp34;
      cResult[16] = tmp35;
      tmp33 = tmp35;
      tmp32 = tmp34;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      tmp33 = cResult[16];
    }
    const _Symbol8 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      cResult[17] = tmp37;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const _Symbol9 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj11 = { style: { flexShrink: 0, height: 24, width: 24, marginEnd: 8 }, source: obj12, resizeMode: "contain" };
      obj12 = { uri: tmp11Result.getEmojiURL({ id: "801497159479722084", animated: false, size: 24 }) };
      tmp11Result = AvatarUtilsDefault;
      const tmp40 = closure_12(closure_6, obj11);
      cResult[18] = tmp40;
      tmp38 = tmp40;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const _Symbol10 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj13 = { icon: tmp32, label: tmp33, subLabel: closure_13(closure_5, obj14) };
      obj14 = { style: tmp37, children: items1 };
      items1 = [tmp38, ];
      const TableRow5 = TableRow16.TableRow;
      const obj15 = { variant: "text-md/medium", lineClamp: 1, color: "text-muted", style: { flexShrink: 1 }, children: "Custom node for subLabel - A really long sublabel that takes up all of the space and then some" };
      items1[1] = closure_12(Text_Text.Text, obj15);
      const tmp44 = closure_12(TableRow5, obj13);
      cResult[19] = tmp44;
      tmp41 = tmp44;
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const _Symbol11 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj16 = { hasIcons: true, children: items2 };
      items2 = [tmp18, tmp19, tmp24, tmp26, tmp30, tmp41, ];
      const TableRowGroup = TableRowGroup5.TableRowGroup;
      const obj17 = { icon: closure_12(Icon6, obj18), label: "A disabled row", subLabel: "you cant do anything with this", disabled: true };
      const TableRow6 = TableRow16.TableRow;
      obj18 = { IconComponent: SettingsIcon.SettingsIcon };
      Icon6 = TableRow16.TableRow.Icon;
      items2[6] = closure_12(TableRow6, obj17);
      cResult[20] = closure_13(TableRowGroup, obj16);
      const tmp47 = closure_13(TableRowGroup, obj16);
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    if (cResult[21] !== stateFromStores) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
      const obj19 = { user: stateFromStores, guildId: tmp8, status: constants.ONLINE, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
      const Avatar = native.Avatar;
      cResult[21] = stateFromStores;
      cResult[22] = closure_12(Avatar, obj19);
      const tmp50 = closure_12(Avatar, obj19);
    } else {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    if (cResult[23] === stateFromStores.globalName) {
      class E {
        constructor(arg0) {
          importDefault(arg0);
        }
      }
    }
    const obj20 = { label: null, subLabel: null, icon: tmp48 };
    ({ globalName: obj23.label, username: obj23.subLabel } = stateFromStores);
    cResult[23] = stateFromStores.globalName;
    cResult[24] = stateFromStores.username;
    cResult[25] = tmp48;
    cResult[26] = closure_12(TableRow16.TableRow, obj20);
    const tmp53 = closure_12(TableRow16.TableRow, obj20);
  }
  const obj21 = { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 };
  cResult[5] = rect.bottom;
  cResult[6] = rect.top;
  cResult[7] = obj21;
}) : (() => {
  let Avatar;
  let Icon;
  let Icon10;
  let Icon11;
  let Icon12;
  let Icon13;
  let Icon14;
  let Icon15;
  let Icon16;
  let Icon17;
  let Icon18;
  let Icon19;
  let Icon2;
  let Icon20;
  let Icon3;
  let Icon4;
  let Icon5;
  let Icon6;
  let Icon7;
  let Icon8;
  let Icon9;
  let RowButton2;
  let Stack;
  let TableRowIcon;
  let TableRowIcon2;
  let TableRowIcon3;
  let TableRowIcon4;
  let currentUser;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj12;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let obj20;
  let obj23;
  let obj25;
  let obj27;
  let obj29;
  let obj3;
  let obj31;
  let obj33;
  let obj35;
  let obj37;
  let obj39;
  let obj41;
  let obj43;
  let obj46;
  let obj48;
  let obj56;
  let obj58;
  let obj6;
  let obj60;
  let obj62;
  let obj65;
  let obj68;
  let obj69;
  let obj8;
  let tmp4;
  let tmp6;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const guildId = SelectedGuildStore.getGuildId();
  const rect = useSafeAreaInsetsDefault();
  [tmp4, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp6, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback((arg0) => {
    require(arg0);
  }, []);
  const obj2 = { children: closure_13(Stack, obj3) };
  const callback1 = react.useCallback((arg0) => {
    importDefault(arg0);
  }, []);
  obj3 = { spacing: 24, style: { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 }, children: items3 };
  Stack = Stack_Stack.Stack;
  const obj4 = { hasIcons: true, children: items1 };
  const TableRowGroup = TableRowGroup5.TableRowGroup;
  const obj5 = { onPress, icon: closure_12(Icon, obj6), label: "Boost your Server", subLabel: "Unlock perks for the entire community", trailing: closure_12(TableRow16.TableRow.Arrow, {}) };
  const TableRow = TableRow16.TableRow;
  obj6 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon = TableRow16.TableRow.Icon;
  items1 = [closure_12(TableRow, obj5), closure_12(closure_14, {}), , , , , ];
  const obj7 = { icon: closure_12(Icon2, obj8), label: "Add a Friend" };
  const TableRow2 = TableRow16.TableRow;
  obj8 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon2 = TableRow16.TableRow.Icon;
  items1[2] = closure_12(TableRow2, obj7);
  const obj9 = { icon: closure_12(Icon3, obj10), label: "A really long label that takes up all of the space and then some", subLabel: "A really long sublabel that takes up all of the space and then some" };
  const TableRow3 = TableRow16.TableRow;
  obj10 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon3 = TableRow16.TableRow.Icon;
  items1[3] = closure_12(TableRow3, obj9);
  const obj11 = { icon: closure_12(Icon4, obj12), label: "A really long label, but next to an arrow, that takes up all of the space and then some", subLabel: "A really long sublabel, but next to an arrow, that takes up all of the space and then some", trailing: closure_12(TableRow16.TableRow.Arrow, {}) };
  const TableRow4 = TableRow16.TableRow;
  obj12 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon4 = TableRow16.TableRow.Icon;
  items1[4] = closure_12(TableRow4, obj11);
  const obj13 = { icon: closure_12(Icon5, obj14), label: closure_12(Text_Text.Text, { variant: "text-md/medium", lineClamp: 1, children: "Custom node for label - A really long label that takes up all of the space and then some" }), subLabel: closure_13(closure_5, obj15) };
  const TableRow5 = TableRow16.TableRow;
  obj14 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon5 = TableRow16.TableRow.Icon;
  obj15 = { style: { flexDirection: "row", alignItems: "center" }, children: items2 };
  const obj16 = { style: { flexShrink: 0, height: 24, width: 24, marginEnd: 8 }, source: obj17, resizeMode: "contain" };
  obj17 = { uri: obj18.getEmojiURL({ id: "801497159479722084", animated: false, size: 24 }) };
  obj18 = AvatarUtilsDefault;
  items2 = [closure_12(closure_6, obj16), closure_12(Text_Text.Text, { variant: "text-md/medium", lineClamp: 1, color: "text-muted", style: { flexShrink: 1 }, children: "Custom node for subLabel - A really long sublabel that takes up all of the space and then some" })];
  items1[5] = closure_12(TableRow5, obj13);
  const obj19 = { icon: closure_12(Icon6, obj20), label: "A disabled row", subLabel: "you cant do anything with this", disabled: true };
  const TableRow6 = TableRow16.TableRow;
  obj20 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon6 = TableRow16.TableRow.Icon;
  items1[6] = closure_12(TableRow6, obj19);
  items3 = [closure_13(TableRowGroup, obj4), , , , , , ];
  const obj21 = { title: "Table Row Section", hasIcons: true, children: items4 };
  const TableRowGroup2 = TableRowGroup5.TableRowGroup;
  const obj22 = { label: stateFromStores.globalName, subLabel: stateFromStores.username, icon: closure_12(Avatar, obj23) };
  const TableRow7 = TableRow16.TableRow;
  obj23 = { user: stateFromStores, guildId, status: constants.ONLINE, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  Avatar = native.Avatar;
  items4 = [closure_12(TableRow7, obj22), , , , , , , , , , ];
  const obj24 = { icon: closure_12(Icon7, obj25), label: "Language", trailing: closure_12(TableRow16.TableRow.TrailingText, { text: "English (US)" }) };
  const TableRow8 = TableRow16.TableRow;
  obj25 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon7 = TableRow16.TableRow.Icon;
  items4[1] = closure_12(TableRow8, obj24);
  const obj26 = { icon: closure_12(Icon8, obj27), label: "Display Name", trailing: closure_12(TableRow16.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" }) };
  const TableRow9 = TableRow16.TableRow;
  obj27 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon8 = TableRow16.TableRow.Icon;
  items4[2] = closure_12(TableRow9, obj26);
  const obj28 = { icon: closure_12(Icon9, obj29), label: "Display Name", trailing: closure_12(TableRow16.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" }), arrow: true };
  const TableRow10 = TableRow16.TableRow;
  obj29 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon9 = TableRow16.TableRow.Icon;
  items4[3] = closure_12(TableRow10, obj28);
  const obj30 = { icon: closure_12(Icon10, obj31), label: "Display Name That Is Very Long And Maybe Wrap", trailing: closure_12(TableRow16.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" }) };
  const TableRow11 = TableRow16.TableRow;
  obj31 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon10 = TableRow16.TableRow.Icon;
  items4[4] = closure_12(TableRow11, obj30);
  const obj32 = { icon: closure_12(Icon11, obj33), label: "Display Name That Is Very Long And Maybe Wrap", trailing: closure_12(TableRow16.TableRow.TrailingText, { text: "100" }) };
  const TableRow12 = TableRow16.TableRow;
  obj33 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon11 = TableRow16.TableRow.Icon;
  items4[5] = closure_12(TableRow12, obj32);
  const obj34 = { icon: closure_12(Icon12, obj35), label: "Language", subLabel: "English (US)" };
  const TableRow13 = TableRow16.TableRow;
  obj35 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon12 = TableRow16.TableRow.Icon;
  items4[6] = closure_12(TableRow13, obj34);
  const obj36 = { icon: closure_12(Icon13, obj37), label: "A really long label that has a switch next to it", subLabel: "Show more information in less space", value: tmp4, onValueChange: callback };
  const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
  obj37 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon13 = TableRow16.TableRow.Icon;
  items4[7] = closure_12(TableSwitchRow, obj36);
  const obj38 = { icon: closure_12(Icon14, obj39), label: "Text & Images", subLabel: "Automatically play GIFs when possible", value: true, onValueChange: onPress, disabled: true };
  const TableSwitchRow2 = TableSwitchRow3.TableSwitchRow;
  obj39 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon14 = TableRow16.TableRow.Icon;
  items4[8] = closure_12(TableSwitchRow2, obj38);
  const obj40 = { icon: closure_12(Icon15, obj41), label: "A checkbox row", subLabel: "This can be checked or unchecked", checked: tmp6, onPress: callback1 };
  const TableCheckboxRow = TableCheckboxRow3.TableCheckboxRow;
  obj41 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon15 = TableRow16.TableRow.Icon;
  items4[9] = closure_12(TableCheckboxRow, obj40);
  const obj42 = { icon: closure_12(Icon16, obj43), label: "A really long label that has a checkbox next to it", subLabel: "Show more information in less space", checked: true, disabled: true, onPress };
  const TableCheckboxRow2 = TableCheckboxRow3.TableCheckboxRow;
  obj43 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon16 = TableRow16.TableRow.Icon;
  items4[10] = closure_12(TableCheckboxRow2, obj42);
  items3[1] = closure_13(TableRowGroup2, obj21);
  const obj44 = { title: "Draggable Table Rows", description: "Table rows can optionally show a drag handle. Note that this does not actually make them draggable, you need to implement that yourself.", hasIcons: true, children: items5 };
  const TableRowGroup3 = TableRowGroup5.TableRowGroup;
  const obj45 = { draggable: true, onPress, icon: closure_12(Icon17, obj46), label: "Boost your Server", subLabel: "Unlock perks for the entire community", trailing: closure_12(TableRow16.TableRow.Arrow, {}) };
  const TableRow14 = TableRow16.TableRow;
  obj46 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon17 = TableRow16.TableRow.Icon;
  items5 = [closure_12(TableRow14, obj45), ];
  const obj47 = { draggable: true, onPress, icon: closure_12(Icon18, obj48), label: "Boost your Server", subLabel: "Unlock perks for the entire community", trailing: closure_12(TableRow16.TableRow.Arrow, {}) };
  const TableRow15 = TableRow16.TableRow;
  obj48 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon18 = TableRow16.TableRow.Icon;
  items5[1] = closure_12(TableRow15, obj47);
  items3[2] = closure_13(TableRowGroup3, obj44);
  const obj49 = { title: "No Icons", hasIcons: false, children: items6 };
  const TableRowGroup4 = TableRowGroup5.TableRowGroup;
  items6 = [, , ];
  const obj50 = { label: "First Item", subLabel: "Here is an item", onPress };
  items6[0] = closure_12(TableRow16.TableRow, obj50);
  const obj51 = { label: "Second Item", subLabel: "Here is another item", onPress };
  items6[1] = closure_12(TableRow16.TableRow, obj51);
  const obj52 = { label: "Third Item", subLabel: "Here is yet another item", onPress };
  items6[2] = closure_12(TableRow16.TableRow, obj52);
  items3[3] = closure_13(TableRowGroup4, obj49);
  const obj53 = { title: "Radio Group", hasIcons: false, defaultValue: "option1", onChange: onPress, children: items7 };
  const TableRadioGroup = TableRadioGroup3.TableRadioGroup;
  items7 = [closure_12(TableRadioRow5.TableRadioRow, { label: "First Item", subLabel: "Here is an item", value: "option1" }), closure_12(TableRadioRow5.TableRadioRow, { label: "Second Item", subLabel: "Here is another item", value: "option2" }), closure_12(TableRadioRow5.TableRadioRow, { label: "Third Item", subLabel: "Here is yet another item", value: "option3" }), closure_12(TableRadioRow5.TableRadioRow, { label: "Disabled Item", subLabel: "This should not be selectable", value: "option4", disabled: true })];
  items3[4] = closure_13(TableRadioGroup, obj53);
  const obj54 = { title: "Online Status", hasIcons: true, defaultValue: "option1", onChange: onPress, children: items8 };
  const TableRadioGroup2 = TableRadioGroup3.TableRadioGroup;
  const obj55 = { icon: closure_12(TableRowIcon, obj56), label: "Online", value: "option1" };
  const TableRadioRow = TableRadioRow5.TableRadioRow;
  obj56 = { variant: "text-status-online", source: AssetRegistryDefault4 };
  TableRowIcon = TableRowIcon5.TableRowIcon;
  items8 = [closure_12(TableRadioRow, obj55), , , ];
  const obj57 = { icon: closure_12(TableRowIcon2, obj58), label: "Idle", value: "option2" };
  const TableRadioRow2 = TableRadioRow5.TableRadioRow;
  obj58 = { variant: "text-status-idle", source: AssetRegistryDefault };
  TableRowIcon2 = TableRowIcon5.TableRowIcon;
  items8[1] = closure_12(TableRadioRow2, obj57);
  const obj59 = { icon: closure_12(TableRowIcon3, obj60), label: "Do Not Disturb", value: "option3" };
  const TableRadioRow3 = TableRadioRow5.TableRadioRow;
  obj60 = { variant: "text-status-dnd", source: AssetRegistryDefault2 };
  TableRowIcon3 = TableRowIcon5.TableRowIcon;
  items8[2] = closure_12(TableRadioRow3, obj59);
  const obj61 = { icon: closure_12(TableRowIcon4, obj62), label: "Invisible", value: "option4" };
  const TableRadioRow4 = TableRadioRow5.TableRadioRow;
  obj62 = { variant: "text-status-offline", source: AssetRegistryDefault3 };
  TableRowIcon4 = TableRowIcon5.TableRowIcon;
  items8[3] = closure_12(TableRadioRow4, obj61);
  items3[5] = closure_13(TableRadioGroup2, obj54);
  const obj63 = { spacing: 12, children: items9 };
  const Stack2 = Stack_Stack.Stack;
  items9 = [closure_12(Text_Text.Text, { variant: "heading-sm/semibold", children: "Row buttons" }), , , ];
  const obj64 = { icon: closure_12(Icon19, obj65), label: "Boost your server", onPress };
  const RowButton = RowButton3.RowButton;
  obj65 = { IconComponent: SettingsIcon.SettingsIcon };
  Icon19 = TableRow16.TableRow.Icon;
  items9[1] = closure_12(RowButton, obj64);
  const obj66 = { label: "Disabled row button", onPress, disabled: true, arrow: false };
  items9[2] = closure_12(RowButton3.RowButton, obj66);
  const obj67 = { style: { padding: 8 }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: closure_12(RowButton2, obj68) };
  obj68 = { icon: closure_12(Icon20, obj69), experimental_withBlurBackground: true, label: "Row Button", onPress };
  const tmp9 = LinearGradientDefault;
  RowButton2 = RowButton3.RowButton;
  obj69 = { IconComponent: SettingsIcon.SettingsIcon, variant: "translucent" };
  Icon20 = TableRow16.TableRow.Icon;
  items9[3] = closure_12(tmp9, obj67);
  items3[6] = closure_13(Stack2, obj63);
  return closure_12(closure_7, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTableRow.tsx");

export default tmp5;