// === Module 16062: UserSettingsDesignSystemTableRow ===

// Module 16062 (UserSettingsDesignSystemTableRow)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import native from "native" /* 1200 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5087 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import FastImageDefault from "FastImage" /* 6163 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6183 */;
import TableRow from "TableRow" /* 6186 */;
import TableRowIcon from "TableRowIcon" /* 6194 */;
import TableRadioRow from "TableRadioRow" /* 6266 */;
import TableRadioGroup from "TableRadioGroup" /* 6267 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import TableSwitchRow from "TableSwitchRow" /* 6889 */;
import SettingsIcon from "SettingsIcon" /* 7085 */;
import RowButton from "RowButton" /* 8565 */;
import _modDef14341 from "module_14341" /* 14341 */;
import _modDef14342 from "module_14342" /* 14342 */;
import _modDef14343 from "module_14343" /* 14343 */;
import _modDef14344 from "module_14344" /* 14344 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ NOOP: closure_9, StatusTypes: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function MyTableRow() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: "Notifications", onPress, icon: null };
    const obj3 = { IconComponent: SettingsIcon.SettingsIcon };
    obj2.icon = closure_1_11(TableRow.TableRow.Icon, obj3);
    const tmp7 = closure_1_11(TableRow.TableRow, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function MyTableRow() {
  const obj = { label: "Notifications", onPress, icon: closure_1_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon }) };
  return closure_1_11(TableRow.TableRow, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTableRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsDesignSystemTableRow() {
  const cResult = c.c(71);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const guildId = SelectedGuildStore.getGuildId();
    cResult[2] = guildId;
    let tmp8 = guildId;
  } else {
    tmp8 = cResult[2];
  }
  const rect = useSafeAreaInsetsDefault();
  const tmpResult = initialize;
  [r10045, require] = noop.useState(false);
  const tmp12 = _slicedToArray(noop.useState(false), 2);
  [r10050, importDefault] = noop.useState(false);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _(arg0) {
      require(arg0);
    };
    cResult[3] = fn2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(arg0) {
        tmp = closure_1(arg0);
        return;
      }
    }
    cResult[4] = B;
  } else {
    class B {
      constructor(arg0) {
        tmp = closure_1(arg0);
        return;
      }
    }
  }
  if (cResult[5] === rect.bottom) {
    class B {
      constructor(arg0) {
        tmp = closure_1(arg0);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj2 = { IconComponent: SettingsIcon.SettingsIcon };
      const tmp17 = closure_11(TableRow.TableRow.Icon, obj2);
      cResult[8] = tmp17;
      const tmp16 = tmp17;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj3 = { onPress, icon: tmp16, label: "Boost your Server", subLabel: "Unlock perks for the entire community", trailing: closure_11(TableRow.TableRow.Arrow, {}) };
      const tmp21 = closure_11(TableRow.TableRow, obj3);
      const tmp23 = closure_11(closure_13, {});
      cResult[9] = tmp21;
      cResult[10] = tmp23;
      let tmp19 = tmp23;
      const tmp18 = tmp21;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      tmp19 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj4 = { icon: null, label: "Add a Friend" };
      const obj5 = { IconComponent: SettingsIcon.SettingsIcon };
      obj4.icon = closure_11(TableRow.TableRow.Icon, obj5);
      const tmp25 = closure_11(TableRow.TableRow, obj4);
      cResult[11] = tmp25;
      const tmp24 = tmp25;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj6 = { icon: null, label: "A really long label that takes up all of the space and then some", subLabel: "A really long sublabel that takes up all of the space and then some" };
      const obj7 = { IconComponent: SettingsIcon.SettingsIcon };
      obj6.icon = closure_11(TableRow.TableRow.Icon, obj7);
      const tmp27 = closure_11(TableRow.TableRow, obj6);
      cResult[12] = tmp27;
      const tmp26 = tmp27;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj8 = { IconComponent: SettingsIcon.SettingsIcon };
      const tmp29 = closure_11(TableRow.TableRow.Icon, obj8);
      cResult[13] = tmp29;
      const tmp28 = tmp29;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj9 = { icon: tmp28, label: "A really long label, but next to an arrow, that takes up all of the space and then some", subLabel: "A really long sublabel, but next to an arrow, that takes up all of the space and then some", trailing: closure_11(TableRow.TableRow.Arrow, {}) };
      const tmp31 = closure_11(TableRow.TableRow, obj9);
      cResult[14] = tmp31;
      const tmp30 = tmp31;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const _Symbol7 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj10 = { IconComponent: SettingsIcon.SettingsIcon };
      const tmp34 = closure_11(TableRow.TableRow.Icon, obj10);
      const tmp35 = closure_11(Text_Text.Text, { variant: "text-md/medium", lineClamp: 1, children: "Custom node for label - A really long label that takes up all of the space and then some" });
      cResult[15] = tmp34;
      cResult[16] = tmp35;
      let tmp33 = tmp35;
      const tmp32 = tmp34;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      tmp33 = cResult[16];
    }
    const _Symbol8 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      cResult[17] = tmp37;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const _Symbol9 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj11 = { style: { flexShrink: 0, height: 24, width: 24, marginEnd: 8 }, source: null, resizeMode: "contain" };
      const obj12 = { uri: null };
      const tmp11Result = FastImageDefault;
      obj12.uri = AvatarUtilsDefault.getEmojiURL({ id: "801497159479722084", animated: false, size: 24 });
      obj11.source = obj12;
      const tmp40 = closure_11(tmp11Result, obj11);
      cResult[18] = tmp40;
      const tmp11Result2 = AvatarUtilsDefault;
      const tmp38 = tmp40;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const _Symbol10 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj13 = { icon: tmp32, label: tmp33, subLabel: null };
      const obj14 = { style: tmp37, children: null };
      const items1 = [tmp38, ];
      const obj15 = { variant: "text-md/medium", lineClamp: 1, color: "text-muted", style: { flexShrink: 1 }, children: "Custom node for subLabel - A really long sublabel that takes up all of the space and then some" };
      items1[1] = closure_11(Text_Text.Text, obj15);
      obj14.children = items1;
      obj13.subLabel = closure_12(closure_5, obj14);
      const tmp44 = closure_11(TableRow.TableRow, obj13);
      cResult[19] = tmp44;
      const tmp41 = tmp44;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const _Symbol11 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj16 = { hasIcons: true, children: null };
      const items2 = [tmp18, tmp19, tmp24, tmp26, tmp30, tmp41, ];
      const obj17 = { icon: null, label: "A disabled row", subLabel: "you cant do anything with this", disabled: true };
      const obj18 = { IconComponent: SettingsIcon.SettingsIcon };
      obj17.icon = closure_11(TableRow.TableRow.Icon, obj18);
      items2[6] = closure_11(TableRow.TableRow, obj17);
      obj16.children = items2;
      const tmp47 = closure_12(TableRowGroup.TableRowGroup, obj16);
      cResult[20] = tmp47;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    if (cResult[21] !== stateFromStores) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
      const obj19 = { user: stateFromStores, guildId: tmp8, status: constants.ONLINE, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
      const tmp50 = closure_11(native.Avatar, obj19);
      cResult[21] = stateFromStores;
      cResult[22] = tmp50;
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    if (cResult[23] === stateFromStores.globalName) {
      class B {
        constructor(arg0) {
          tmp = closure_1(arg0);
          return;
        }
      }
    }
    const obj20 = { label: null, subLabel: null, icon: null };
    ({ globalName: obj23.label, username: obj23.subLabel } = stateFromStores);
    obj20.icon = tmp48;
    const tmp53 = closure_11(TableRow.TableRow, obj20);
    cResult[23] = stateFromStores.globalName;
    cResult[24] = stateFromStores.username;
    cResult[25] = tmp48;
    cResult[26] = tmp53;
  }
  cResult[5] = rect.bottom;
  cResult[6] = rect.top;
  cResult[7] = { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 };
  const obj21 = { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 };
  const tmp13 = _slicedToArray(noop.useState(false), 2);
}) : (function UserSettingsDesignSystemTableRow() {
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
  const obj3 = { spacing: 24, style: { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 }, children: null };
  const obj4 = { hasIcons: true, children: null };
  const obj5 = { onPress, icon: null, label: "Boost your Server", subLabel: "Unlock perks for the entire community", trailing: null };
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  obj5.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj5.trailing = closure_11(TableRow.TableRow.Arrow, {});
  const items1 = [closure_11(TableRow.TableRow, obj5), closure_11(closure_13, {}), , , , , ];
  const obj7 = { icon: null, label: "Add a Friend" };
  const obj6 = { IconComponent: SettingsIcon.SettingsIcon };
  obj7.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[2] = closure_11(TableRow.TableRow, obj7);
  const obj9 = { icon: null, label: "A really long label that takes up all of the space and then some", subLabel: "A really long sublabel that takes up all of the space and then some" };
  const obj8 = { IconComponent: SettingsIcon.SettingsIcon };
  obj9.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[3] = closure_11(TableRow.TableRow, obj9);
  const obj11 = { icon: null, label: "A really long label, but next to an arrow, that takes up all of the space and then some", subLabel: "A really long sublabel, but next to an arrow, that takes up all of the space and then some", trailing: null };
  const obj10 = { IconComponent: SettingsIcon.SettingsIcon };
  obj11.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj11.trailing = closure_11(TableRow.TableRow.Arrow, {});
  items1[4] = closure_11(TableRow.TableRow, obj11);
  const obj13 = { icon: null, label: null, subLabel: null };
  const obj12 = { IconComponent: SettingsIcon.SettingsIcon };
  obj13.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj13.label = closure_11(Text_Text.Text, { variant: "text-md/medium", lineClamp: 1, children: "Custom node for label - A really long label that takes up all of the space and then some" });
  const obj15 = { style: { flexDirection: "row", alignItems: "center" }, children: null };
  const obj16 = { style: { flexShrink: 0, height: 24, width: 24, marginEnd: 8 }, source: null, resizeMode: "contain" };
  const obj17 = { uri: null };
  const obj14 = { IconComponent: SettingsIcon.SettingsIcon };
  const tmp9 = FastImageDefault;
  obj17.uri = AvatarUtilsDefault.getEmojiURL({ id: "801497159479722084", animated: false, size: 24 });
  obj16.source = obj17;
  const items2 = [closure_11(tmp9, obj16), closure_11(Text_Text.Text, { variant: "text-md/medium", lineClamp: 1, color: "text-muted", style: { flexShrink: 1 }, children: "Custom node for subLabel - A really long sublabel that takes up all of the space and then some" })];
  obj15.children = items2;
  obj13.subLabel = closure_12(closure_5, obj15);
  items1[5] = closure_11(TableRow.TableRow, obj13);
  const obj19 = { icon: null, label: "A disabled row", subLabel: "you cant do anything with this", disabled: true };
  obj19.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items1[6] = closure_11(TableRow.TableRow, obj19);
  obj4.children = items1;
  const items3 = [closure_12(TableRowGroup.TableRowGroup, obj4), , , , , , ];
  const obj21 = { title: "Table Row Section", hasIcons: true, children: null };
  const obj22 = { label: stateFromStores.globalName, subLabel: stateFromStores.username, icon: null };
  const obj20 = { IconComponent: SettingsIcon.SettingsIcon };
  obj22.icon = closure_11(native.Avatar, { user: stateFromStores, guildId, status: constants.ONLINE, size: native.AvatarSizes.REFRESH_MEDIUM_32 });
  const items4 = [closure_11(TableRow.TableRow, obj22), , , , , , , , , , ];
  const obj24 = { icon: null, label: "Language", trailing: null };
  const obj23 = { user: stateFromStores, guildId, status: constants.ONLINE, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  obj24.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj24.trailing = closure_11(TableRow.TableRow.TrailingText, { text: "English (US)" });
  items4[1] = closure_11(TableRow.TableRow, obj24);
  const obj26 = { icon: null, label: "Display Name", trailing: null };
  const obj25 = { IconComponent: SettingsIcon.SettingsIcon };
  obj26.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj26.trailing = closure_11(TableRow.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[2] = closure_11(TableRow.TableRow, obj26);
  const obj28 = { icon: null, label: "Display Name", trailing: null, arrow: true };
  const obj27 = { IconComponent: SettingsIcon.SettingsIcon };
  obj28.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj28.trailing = closure_11(TableRow.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[3] = closure_11(TableRow.TableRow, obj28);
  const obj30 = { icon: null, label: "Display Name That Is Very Long And Maybe Wrap", trailing: null };
  const obj29 = { IconComponent: SettingsIcon.SettingsIcon };
  obj30.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj30.trailing = closure_11(TableRow.TableRow.TrailingText, { text: "thisisareallylongusernamewhichshouldtruncate" });
  items4[4] = closure_11(TableRow.TableRow, obj30);
  const obj32 = { icon: null, label: "Display Name That Is Very Long And Maybe Wrap", trailing: null };
  const obj31 = { IconComponent: SettingsIcon.SettingsIcon };
  obj32.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj32.trailing = closure_11(TableRow.TableRow.TrailingText, { text: "100" });
  items4[5] = closure_11(TableRow.TableRow, obj32);
  const obj34 = { icon: null, label: "Language", subLabel: "English (US)" };
  const obj33 = { IconComponent: SettingsIcon.SettingsIcon };
  obj34.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items4[6] = closure_11(TableRow.TableRow, obj34);
  const obj36 = { icon: null, label: "A really long label that has a switch next to it", subLabel: "Show more information in less space", value: null, onValueChange: null };
  const obj35 = { IconComponent: SettingsIcon.SettingsIcon };
  obj36.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj36.value = tmp4;
  obj36.onValueChange = callback;
  items4[7] = closure_11(TableSwitchRow.TableSwitchRow, obj36);
  const obj38 = { icon: null, label: "Text & Images", subLabel: "Automatically play GIFs when possible", value: true, onValueChange: null, disabled: true };
  const obj37 = { IconComponent: SettingsIcon.SettingsIcon };
  obj38.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj38.onValueChange = onPress;
  items4[8] = closure_11(TableSwitchRow.TableSwitchRow, obj38);
  const obj40 = { icon: null, label: "A checkbox row", subLabel: "This can be checked or unchecked", checked: null, onPress: null };
  const obj39 = { IconComponent: SettingsIcon.SettingsIcon };
  obj40.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj40.checked = tmp6;
  obj40.onPress = callback1;
  items4[9] = closure_11(TableCheckboxRow.TableCheckboxRow, obj40);
  const obj42 = { icon: null, label: "A really long label that has a checkbox next to it", subLabel: "Show more information in less space", checked: true, disabled: true, onPress: null };
  const obj41 = { IconComponent: SettingsIcon.SettingsIcon };
  obj42.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj42.onPress = onPress;
  items4[10] = closure_11(TableCheckboxRow.TableCheckboxRow, obj42);
  obj21.children = items4;
  items3[1] = closure_12(TableRowGroup.TableRowGroup, obj21);
  const obj44 = { title: "Draggable Table Rows", description: "Table rows can optionally show a drag handle. Note that this does not actually make them draggable, you need to implement that yourself.", hasIcons: true, children: null };
  const obj45 = { draggable: true, onPress, icon: null, label: "Boost your Server", subLabel: "Unlock perks for the entire community", trailing: null };
  const obj43 = { IconComponent: SettingsIcon.SettingsIcon };
  obj45.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj45.trailing = closure_11(TableRow.TableRow.Arrow, {});
  const items5 = [closure_11(TableRow.TableRow, obj45), ];
  const obj47 = { draggable: true, onPress, icon: null, label: "Boost your Server", subLabel: "Unlock perks for the entire community", trailing: null };
  const obj46 = { IconComponent: SettingsIcon.SettingsIcon };
  obj47.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj47.trailing = closure_11(TableRow.TableRow.Arrow, {});
  items5[1] = closure_11(TableRow.TableRow, obj47);
  obj44.children = items5;
  items3[2] = closure_12(TableRowGroup.TableRowGroup, obj44);
  const obj49 = { title: "No Icons", hasIcons: false, children: null };
  const items6 = [closure_11(TableRow.TableRow, { label: "First Item", subLabel: "Here is an item", onPress }), closure_11(TableRow.TableRow, { label: "Second Item", subLabel: "Here is another item", onPress }), closure_11(TableRow.TableRow, { label: "Third Item", subLabel: "Here is yet another item", onPress })];
  obj49.children = items6;
  items3[3] = closure_12(TableRowGroup.TableRowGroup, obj49);
  const obj53 = { title: "Radio Group", hasIcons: false, defaultValue: "option1", onChange: onPress, children: null };
  const items7 = [closure_11(TableRadioRow.TableRadioRow, { label: "First Item", subLabel: "Here is an item", value: "option1" }), closure_11(TableRadioRow.TableRadioRow, { label: "Second Item", subLabel: "Here is another item", value: "option2" }), closure_11(TableRadioRow.TableRadioRow, { label: "Third Item", subLabel: "Here is yet another item", value: "option3" }), closure_11(TableRadioRow.TableRadioRow, { label: "Disabled Item", subLabel: "This should not be selectable", value: "option4", disabled: true })];
  obj53.children = items7;
  items3[4] = closure_12(TableRadioGroup.TableRadioGroup, obj53);
  const obj54 = { title: "Online Status", hasIcons: true, defaultValue: "option1", onChange: onPress, children: null };
  const obj55 = { icon: null, label: "Online", value: "option1" };
  const obj48 = { IconComponent: SettingsIcon.SettingsIcon };
  const obj50 = { label: "First Item", subLabel: "Here is an item", onPress };
  const obj51 = { label: "Second Item", subLabel: "Here is another item", onPress };
  const obj52 = { label: "Third Item", subLabel: "Here is yet another item", onPress };
  obj55.icon = closure_11(TableRowIcon.TableRowIcon, { variant: "text-status-online", source: _modDef14344 });
  const items8 = [closure_11(TableRadioRow.TableRadioRow, obj55), , , ];
  const obj57 = { icon: null, label: "Idle", value: "option2" };
  const obj56 = { variant: "text-status-online", source: _modDef14344 };
  obj57.icon = closure_11(TableRowIcon.TableRowIcon, { variant: "text-status-idle", source: _modDef14341 });
  items8[1] = closure_11(TableRadioRow.TableRadioRow, obj57);
  const obj59 = { icon: null, label: "Do Not Disturb", value: "option3" };
  const obj58 = { variant: "text-status-idle", source: _modDef14341 };
  obj59.icon = closure_11(TableRowIcon.TableRowIcon, { variant: "text-status-dnd", source: _modDef14342 });
  items8[2] = closure_11(TableRadioRow.TableRadioRow, obj59);
  const obj61 = { icon: null, label: "Invisible", value: "option4" };
  const obj60 = { variant: "text-status-dnd", source: _modDef14342 };
  obj61.icon = closure_11(TableRowIcon.TableRowIcon, { variant: "text-status-offline", source: _modDef14343 });
  items8[3] = closure_11(TableRadioRow.TableRadioRow, obj61);
  obj54.children = items8;
  items3[5] = closure_12(TableRadioGroup.TableRadioGroup, obj54);
  const obj63 = { spacing: 12, children: null };
  const items9 = [closure_11(Text_Text.Text, { variant: "heading-sm/semibold", children: "Row buttons" }), , , ];
  const obj64 = { icon: null, label: "Boost your server", onPress: null };
  const obj62 = { variant: "text-status-offline", source: _modDef14343 };
  obj64.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  obj64.onPress = onPress;
  items9[1] = closure_11(RowButton.RowButton, obj64);
  items9[2] = closure_11(RowButton.RowButton, { label: "Disabled row button", onPress, disabled: true, arrow: false });
  const obj67 = { style: { padding: 8 }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: null };
  const obj65 = { IconComponent: SettingsIcon.SettingsIcon };
  const obj66 = { label: "Disabled row button", onPress, disabled: true, arrow: false };
  const obj68 = { icon: null, experimental_withBlurBackground: true, label: "Row Button", onPress: null };
  const tmp10 = LinearGradientDefault;
  obj68.icon = closure_11(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon, variant: "translucent" });
  obj68.onPress = onPress;
  obj67.children = closure_11(RowButton.RowButton, obj68);
  items9[3] = closure_11(tmp10, obj67);
  obj63.children = items9;
  items3[6] = closure_12(Stack_Stack.Stack, obj63);
  obj3.children = items3;
  obj2.children = closure_12(Stack_Stack.Stack, obj3);
  return closure_11(closure_6, obj2);
});