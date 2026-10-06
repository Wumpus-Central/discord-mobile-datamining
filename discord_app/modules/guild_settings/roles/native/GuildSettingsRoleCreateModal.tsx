// === Module 17825: GuildSettingsRoleCreateModal ===

// Module 17825 (GuildSettingsRoleCreateModal)
import _modDef38 from "module_38" /* 38 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import react_native from "react-native" /* 5786 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators" /* 17824 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import UserStore from "UserStore" /* 1377 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 17826 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, dependencyMap, importDefault, navigation, step;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function RoleCreateScene() {
  let Button;
  let TableRow;
  let closure_1;
  let closure_4;
  let color;
  let constants4;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj12;
  let obj7;
  let onSelect;
  let str;
  let tmp11;
  let tmp7;
  let tmp = closure_24();
  const tmp2 = navigation;
  const tmp3 = color;
  let obj = navigation(color[24]);
  navigation = obj.useNavigation();
  const tmp5 = closure_28();
  importDefault = tmp5;
  const useState = onSelect.useState;
  const intl = navigation(color[18]).intl;
  [str, tmp7] = useState(intl.string(navigation(color[18]).t.QBMHvB));
  [color, _asyncToGenerator] = onSelect.useState(closure_17);
  const tmp10 = _slicedToArray(onSelect.useState(false), 2);
  [tmp11, _slicedToArray] = tmp10;
  let nextButtonFloating = require("useKeyboardIsOpen")();
  const items = [navigation, tmp5];
  const layoutEffect = onSelect.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        const id = closure_1_1.id;
        const FLOW_DISMISSED = constants4.FLOW_DISMISSED;
        const tmp = constants4[constants3.STEP_DISPLAY];
        const track = closure_1(first[14]).track;
        const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp, to_step: FLOW_DISMISSED, skip: false };
        closure_1(first[14]);
        const obj2 = navigation(first[15]);
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
        track(USER_FLOW_TRANSITION, obj);
        const obj3 = closure_1(first[20]);
        obj3.close();
      }),
      headerTitle() {
        const obj = { step: constants.STEP_DISPLAY };
        return closure_1_21(closure_1_27, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items);
  onSelect = onSelect.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const items1 = [color, tmp5.id, str, navigation];
  const items2 = [color, onSelect];
  const callback1 = onSelect.useCallback(_asyncToGenerator(async () => {
    let c3;
    let closure_0;
    let tmp4;
    if (c4 === 2) {
      c4 = 3;
      str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const flag = true;
      const flag2 = false;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
        try {
          c4 = 2;
          if (0 === color) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              c2 = 1;
              _slicedToArray(true);
              let num5 = first;
              if (first === closure_1_17) {
                num5 = 0;
              }
              let obj3 = tmp(color[27]);
              color = 2;
              c4 = 1;
              obj6 = { value: obj3.createRole(tmp.id, str, num5), done: false };
              return obj6;
            }
          } else {
            if (1 === tmp4) {
              c2 = 0;
              closure_129_5(false);
              let obj2 = tmp(color[28]);
              const result = obj2.roleCreateFailedToast();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const result1 = GuildSettingsStore.addConditionalChangeListener(() => {
                let guild;
                let selectedRoleId;
                const props = closure_2_12.getProps();
                ({ guild, selectedRoleId } = props);
                if (null != guild) {
                  if (null != selectedRoleId) {
                    role = role.getRole(guild.id, selectedRoleId);
                  }
                }
                if (null != selectedRoleId) {
                  if (null != role) {
                    if (null != guild) {
                      const obj4 = navigation(c3[28]);
                      obj4.roleCreatedToast();
                      const obj5 = navigation(c3[29]);
                      obj5.setRoleJustCreated(true);
                      let STEP_MEMBERS = constants4.STEP_PERMISSIONS;
                      const guild2 = closure_2_12.getProps().guild;
                      closure_1(c3[22])(null != guild2, "shouldSkipPermissions: Guild cannot be null");
                      currentUser = currentUser.getCurrentUser();
                      const obj2 = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild2 };
                      const tmp26 = closure_2_9(guild2, currentUser);
                      obj6 = c2(c3[23]);
                      const tmp4 = !tmp26 && !obj6.can(obj2);
                      if (tmp4) {
                        STEP_MEMBERS = constants4.STEP_MEMBERS;
                      }
                      closure_1_0.push(STEP_MEMBERS);
                      const id = guild.id;
                      const obj3 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: closure_2_26[constants4.STEP_DISPLAY], to_step: closure_2_26[STEP_MEMBERS], skip: false };
                      const track = closure_1(c3[14]).track;
                      const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
                      closure_1(c3[14]);
                      const tmp16Result = navigation(c3[15]);
                      const merged = Object.assign(tmp16Result.collectGuildAnalyticsMetadata(id));
                      track(USER_FLOW_TRANSITION, obj3);
                      return false;
                    }
                  }
                }
                return true;
              });
              c2 = 0;
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          if (0 === c2) {
            c4 = 3;
            throw tmp22;
          } else {
            color = 1;
          }
        }
      }
    }
  }), items1);
  let obj2 = { title: intl2.string(navigation(color[18]).t["8pxAPp"]), subtitle: intl3.string(navigation(color[18]).t["JubQz/"]), children: items5 };
  const callback2 = onSelect.useCallback(() => {
    metroImportAll.dismiss();
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { color, onSelect };
    obj.openLazy(asyncRequire(16271, dependencyMap.paths), "RoleColorPicker", obj2);
  }, items2);
  intl2 = navigation(color[18]).intl;
  intl3 = navigation(color[18]).intl;
  let obj3 = { spacing: require("native").space.PX_24, style: tmp.sceneInner, children: items3 };
  const Stack = navigation(color[33]).Stack;
  let obj4 = { label: intl4.string(navigation(color[18]).t.dLbkBk), description: intl5.string(navigation(color[18]).t.m4j44b), required: true, value: str, onChange: tmp7, maxLength, autoFocus: true, autoComplete: "off" };
  const TextInput = navigation(color[34]).TextInput;
  intl4 = navigation(color[18]).intl;
  intl5 = navigation(color[18]).intl;
  items3 = [closure_21(TextInput, obj4), ];
  let obj5 = { helperText: intl6.string(navigation(color[18]).t["9TMIgc"]), hasIcons: false, children: closure_21(TableRow, obj6) };
  const TableRowGroup = navigation(color[35]).TableRowGroup;
  intl6 = navigation(color[18]).intl;
  obj6 = { label: intl7.string(navigation(color[18]).t["5NC5YW"]), onPress: callback2, arrow: true, trailing: closure_22(closure_7, obj7) };
  TableRow = navigation(color[36]).TableRow;
  intl7 = navigation(color[18]).intl;
  obj7 = { style: tmp.colorTrailing, children: items4 };
  items4 = [, ];
  const obj8 = { color, style: tmp.colorBlock };
  items4[0] = closure_21(require("ColorBlock"), obj8);
  const obj9 = { variant: "text-sm/medium", children: obj10.int2hex(color) };
  const Text = navigation(color[19]).Text;
  obj10 = navigation(color[38]);
  items4[1] = closure_21(Text, obj9);
  items3[1] = closure_21(TableRowGroup, obj5);
  items5 = [closure_22(Stack, obj3), ];
  const items6 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  items6[1] = nextButtonFloating;
  const obj11 = { style: items6, children: closure_21(Button, obj12) };
  obj12 = { loading: tmp11, disabled: tmp11, text: intl8.string(tmp2(tmp3[18]).t.CumH4u), onPress: callback1 };
  Button = tmp2(tmp3[39]).Button;
  if (!tmp11) {
    tmp11 = "" === str.trim();
  }
  intl8 = tmp2(tmp3[18]).intl;
  items5[1] = closure_21(closure_7, obj11);
  return closure_22(closure_33, obj2);
}
({ View: metroImportDefault, Keyboard: metroImportAll } = react_native2);
const isGuildOwner = GuildRecord.isGuildOwner;
({ PermissionTemplates: map1, DEFAULT_TEMPLATE_TYPE: closure_14, MAX_BULK_ROLE_MEMBERS_ADD: closure_15 } = GuildSettingsRoleConstants);
({ MAX_ROLE_LENGTH: closure_16, DEFAULT_ROLE_COLOR: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = Constants);
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let closure_23 = { titleContainer: { flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%" }, title: { textAlign: "center", flex: 1 } };
let createStyles = createStyles_mod;
let obj = { container: obj2, sceneHeader: { alignItems: "center", marginBottom: 8, marginHorizontal: 16 }, sceneSubtitle: { textAlign: "center", paddingTop: 8, maxWidth: 400 }, sceneContent: { flex: 1 }, sceneInner: obj3, colorTrailing: { flexDirection: "row", alignItems: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 }, sceneFooter: obj4, nextButton: { width: "100%", paddingHorizontal: 16, paddingVertical: 16 }, nextButtonFloating: obj5 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { paddingBottom: 8, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingVertical: 0, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_24 = createStyles(obj);
let obj6 = { STEP_DISPLAY: "STEP_DISPLAY", STEP_PERMISSIONS: "STEP_PERMISSIONS", STEP_MEMBERS: "STEP_MEMBERS" };
let closure_26 = { [obj6.STEP_DISPLAY]: "Role Display", [obj6.STEP_PERMISSIONS]: "Role Permissions", [obj6.STEP_MEMBERS]: "Role Members", FLOW_INITIALIZED: "Flow Initialized", FLOW_DISMISSED: "Flow Dismissed", FLOW_COMPLETED: "Flow Completed" };
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((step) => {
  let first;
  let obj4;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  step = step.step;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Object = Object;
    const keys = Object.keys(obj6);
    cResult[0] = keys;
    first = keys;
  } else {
    first = cResult[0];
  }
  const length = first.length;
  const sum = first.indexOf(step) + 1;
  if (cResult[1] !== sum) {
    const intl = intl9.intl;
    const obj2 = { number: sum, total: length };
    const formatResult = intl.format(intl9.t["8v/u0i"], obj2);
    cResult[1] = sum;
    cResult[2] = formatResult;
    tmp7 = formatResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp7) {
    const obj3 = { style: closure_23.titleContainer, children: closure_21(Text_Text.Text, obj4) };
    obj4 = { style: closure_23.title, accessibilityRole: "header", variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: tmp7 };
    const tmp13 = closure_21(metroImportDefault, obj3);
    cResult[3] = tmp7;
    cResult[4] = tmp13;
    tmp9 = tmp13;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : ((step) => {
  let Text;
  let intl;
  let obj2;
  step = step.step;
  const keys = Object.keys(obj6);
  const length = keys.length;
  const obj = { style: closure_23.titleContainer, children: closure_21(Text, obj2) };
  const sum = keys.indexOf(step) + 1;
  obj2 = { style: closure_23.title, accessibilityRole: "header", variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: intl.format(intl9.t["8v/u0i"], { number: sum, total: length }) };
  Text = Text_Text.Text;
  intl = intl9.intl;
  return closure_21(metroImportDefault, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let props;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsStore];
    const fn = function n() {
      return props.getProps().guild;
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
  _modDef38(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  return stateFromStores;
}) : (() => {
  let props;
  const items = [GuildSettingsStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => props.getProps().guild);
  _modDef38(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  return stateFromStores;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let guild;
  let props;
  let tmp10;
  let tmp4;
  let tmp5;
  const tmp = guild;
  const obj = guild(576);
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsStore];
    const fn = function n() {
      return props.getProps();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  guild = stateFromStoresObject.guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  selectedRoleId(38)(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  const tmp8 = selectedRoleId;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildRoleStore];
    cResult[2] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === guild) {
    let tmp12;
    if (cResult[4] === selectedRoleId) {
      tmp12 = cResult[5];
    }
    const tmpResult2 = tmp(504);
    const stateFromStores = tmpResult2.useStateFromStores(tmp10, tmp12);
    tmp8(38)(null != stateFromStores, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
    if (cResult[6] === guild) {
      let tmp15;
      if (cResult[7] === stateFromStores) {
        tmp15 = cResult[8];
      }
      return tmp15;
    }
    const obj2 = { guild, role: stateFromStores };
    cResult[6] = guild;
    cResult[7] = stateFromStores;
    cResult[8] = obj2;
    tmp15 = obj2;
  }
  const fn2 = function s() {
    let role;
    if (null != selectedRoleId) {
      role = GuildRoleStore.getRole(guild.id, tmp);
    }
    return role;
  };
  cResult[3] = guild;
  cResult[4] = selectedRoleId;
  cResult[5] = fn2;
  tmp12 = fn2;
}) : (() => {
  let guild;
  let props;
  const items = [GuildSettingsStore];
  const obj = guild(504);
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => props.getProps());
  guild = stateFromStoresObject.guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  selectedRoleId(38)(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  const items1 = [GuildRoleStore];
  const obj2 = guild(504);
  let role = obj2.useStateFromStores(items1, () => {
    let role;
    if (null != selectedRoleId) {
      role = GuildRoleStore.getRole(guild.id, tmp);
    }
    return role;
  });
  selectedRoleId(38)(null != role, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  return { guild, role };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_3;
  let constants4;
  let items;
  let obj3;
  let tmp31;
  let tmp = navigation;
  let obj = navigation(576);
  const cResult = obj.c(24);
  let tmp4 = closure_24();
  let obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  const tmp6 = closure_29();
  const role = tmp6.role;
  const guild = tmp6.guild;
  if (cResult[0] === guild.id) {
    let tmp7;
    let tmp8;
    if (cResult[1] === navigation) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const layoutEffect = react.useLayoutEffect(tmp7, tmp8);
    if (cResult[4] === guild.id) {
      if (cResult[5] === navigation) {
        let tmp11;
        let tmp15;
        let tmp14;
        if (cResult[6] === role.id) {
          tmp11 = cResult[7];
        }
        dependencyMap = tmp11;
        if (cResult[8] !== tmp11) {
          class M {
            constructor() {
              closure_3(map1[authStore2].permissions);
            }
          }
          cResult[8] = tmp11;
          cResult[9] = M;
        } else {
          class M {
            constructor() {
              closure_3(map1[authStore2].permissions);
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              closure_3(map1[authStore2].permissions);
            }
          }
          const stringResult = obj3.string(tmp(1126).t.p0IwNA);
          const intl = tmp(1126).intl;
          const stringResult1 = intl.string(tmp(1126).t.G529Hk);
          cResult[10] = stringResult;
          cResult[11] = stringResult1;
          tmp15 = stringResult1;
          tmp14 = stringResult;
        } else {
          class M {
            constructor() {
              closure_3(map1[authStore2].permissions);
            }
          }
          tmp15 = cResult[11];
        }
        if (cResult[12] === guild.id) {
          let tmp23;
          class M {
            constructor() {
              closure_3(map1[authStore2].permissions);
            }
          }
          const _Symbol2 = Symbol;
          const sceneFooter = tmp4.sceneFooter;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                closure_3(map1[authStore2].permissions);
              }
            }
            const stringResult2 = obj5.string(tmp(1126).t.CJm5V5);
            cResult[15] = stringResult2;
            tmp23 = stringResult2;
          } else {
            class M {
              constructor() {
                closure_3(map1[authStore2].permissions);
              }
            }
          }
          if (cResult[16] !== M) {
            class M {
              constructor() {
                closure_3(map1[authStore2].permissions);
              }
            }
            const obj4 = { text: tmp23, onPress: M };
            cResult[16] = M;
            cResult[17] = closure_21(tmp(5601).Button, obj4);
            const tmp26 = closure_21(tmp(5601).Button, obj4);
          } else {
            class M {
              constructor() {
                closure_3(map1[authStore2].permissions);
              }
            }
          }
          if (cResult[18] === tmp4.sceneFooter) {
            class M {
              constructor() {
                closure_3(map1[authStore2].permissions);
              }
            }
            if (cResult[21] === tmp27) {
              class M {
                constructor() {
                  closure_3(map1[authStore2].permissions);
                }
              }
              return tmp31;
            }
            obj6 = { hasSkipButton: false, title: tmp14, subtitle: tmp15, children: items };
            items = [tmp18, tmp27];
            const tmp34 = closure_22(closure_33, obj6);
            cResult[21] = tmp27;
            cResult[22] = tmp18;
            cResult[23] = tmp34;
            tmp31 = tmp34;
          }
          const obj7 = { style: sceneFooter, children: tmp25 };
          cResult[18] = tmp4.sceneFooter;
          cResult[19] = tmp25;
          cResult[20] = closure_21(closure_7, obj7);
          const tmp30 = closure_21(closure_7, obj7);
        }
        const obj8 = { onSelect: tmp11, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id };
        cResult[12] = guild.id;
        cResult[13] = tmp11;
        cResult[14] = closure_21(role(17830), obj8);
        const tmp22 = closure_21(role(17830), obj8);
      }
    }
    const fn2 = function o(arg0) {
      const obj = GuildActionCreatorsDefault;
      const result = obj.updateRolePermissions(guild.id, role.id, arg0);
      navigation.push(obj6.STEP_MEMBERS);
      const id = guild.id;
      const tmp3 = constants4[obj6.STEP_PERMISSIONS];
      const tmp4 = constants4[obj6.STEP_MEMBERS];
      const track = AnalyticsUtilsDefault.track;
      const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
      const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp3, to_step: tmp4, skip: false };
      AnalyticsUtilsDefault;
      const obj3 = AppAnalyticsUtils;
      const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(id));
      track(USER_FLOW_TRANSITION, obj2);
    };
    cResult[4] = guild.id;
    cResult[5] = navigation;
    cResult[6] = role.id;
    cResult[7] = fn2;
    tmp11 = fn2;
  }
  const fn = function t() {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        id = id.id;
        const FLOW_DISMISSED = constants4.FLOW_DISMISSED;
        const tmp = constants4[constants3.STEP_PERMISSIONS];
        const track = role(closure_3[14]).track;
        const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp, to_step: FLOW_DISMISSED, skip: false };
        role(closure_3[14]);
        const obj2 = navigation(closure_3[15]);
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
        track(USER_FLOW_TRANSITION, obj);
        const obj3 = role(closure_3[20]);
        obj3.close();
      }),
      headerTitle() {
        const obj = { step: constants.STEP_PERMISSIONS };
        return closure_1_21(closure_1_27, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  };
  const items1 = [navigation, guild.id];
  cResult[0] = guild.id;
  cResult[1] = navigation;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (() => {
  let Button;
  let constants4;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let obj5;
  let onSelect;
  let tmp = closure_24();
  let obj = navigation(onSelect[24]);
  navigation = obj.useNavigation();
  let tmp3 = closure_29();
  const role = tmp3.role;
  const guild = tmp3.guild;
  const items = [navigation, guild.id];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        id = id.id;
        const FLOW_DISMISSED = constants4.FLOW_DISMISSED;
        const tmp = constants4[constants3.STEP_PERMISSIONS];
        const track = role(callback[14]).track;
        const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp, to_step: FLOW_DISMISSED, skip: false };
        role(callback[14]);
        const obj2 = navigation(callback[15]);
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
        track(USER_FLOW_TRANSITION, obj);
        const obj3 = role(callback[20]);
        obj3.close();
      }),
      headerTitle() {
        const obj = { step: constants.STEP_PERMISSIONS };
        return closure_1_21(closure_1_27, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items);
  const items1 = [guild.id, navigation, role.id];
  onSelect = react.useCallback((arg0) => {
    const obj = GuildActionCreatorsDefault;
    const result = obj.updateRolePermissions(guild.id, role.id, arg0);
    navigation.push(obj6.STEP_MEMBERS);
    const id = guild.id;
    const tmp3 = constants4[obj6.STEP_PERMISSIONS];
    const tmp4 = constants4[obj6.STEP_MEMBERS];
    const track = AnalyticsUtilsDefault.track;
    const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
    const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp3, to_step: tmp4, skip: false };
    AnalyticsUtilsDefault;
    const obj3 = AppAnalyticsUtils;
    const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(id));
    track(USER_FLOW_TRANSITION, obj2);
  }, items1);
  const items2 = [onSelect];
  let obj2 = { hasSkipButton: false, title: intl.string(navigation(onSelect[18]).t.p0IwNA), subtitle: intl2.string(navigation(onSelect[18]).t.G529Hk), children: items3 };
  const callback1 = react.useCallback(() => {
    callback(map1[authStore2].permissions);
  }, items2);
  intl = navigation(onSelect[18]).intl;
  intl2 = navigation(onSelect[18]).intl;
  let obj3 = { onSelect, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id };
  items3 = [closure_21(role(onSelect[40]), obj3), ];
  const obj4 = { style: tmp.sceneFooter, children: closure_21(Button, obj5) };
  obj5 = { text: intl3.string(navigation(onSelect[18]).t.CJm5V5), onPress: callback1 };
  Button = navigation(onSelect[39]).Button;
  intl3 = navigation(onSelect[18]).intl;
  items3[1] = closure_21(closure_7, obj4);
  return closure_22(closure_33, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let constants4;
  let first;
  let tmp = navigation;
  const tmp2 = first;
  let obj = navigation(first[17]);
  const cResult = obj.c(35);
  closure_24();
  let obj2 = navigation(first[24]);
  navigation = obj2.useNavigation();
  const tmp6 = closure_29();
  const role = tmp6.role;
  const guild = tmp6.guild;
  role(first[22])(null != role, "Role cannot be null");
  const tmp7 = role;
  if (cResult[0] === guild.id) {
    let tmp9;
    let tmp10;
    if (cResult[1] === navigation) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const layoutEffect = react.useLayoutEffect(tmp9, tmp10);
    tmp7(tmp2[25])();
    if (cResult[4] !== role.id) {
      class T {
        constructor(roles) {
          roles = roles.roles;
          return !roles.includes(role.id);
        }
      }
      cResult[4] = role.id;
      cResult[5] = T;
    } else {
      class T {
        constructor(roles) {
          roles = roles.roles;
          return !roles.includes(role.id);
        }
      }
    }
    const tmpResult = tmp(tmp2[41]);
    const guildMembers = tmpResult.useGuildMembers(guild.id, T);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(roles) {
          roles = roles.roles;
          return !roles.includes(role.id);
        }
      }
      cResult[6] = tmp17;
    } else {
      class T {
        constructor(roles) {
          roles = roles.roles;
          return !roles.includes(role.id);
        }
      }
    }
    [first] = react.useState(tmp17);
    [r10076, _asyncToGenerator] = react.useState(false);
    _slicedToArray(react.useState(false), 2);
    if (cResult[7] === guild.id) {
      class T {
        constructor(roles) {
          roles = roles.roles;
          return !roles.includes(role.id);
        }
      }
    }
    const fn2 = function b() {
      const keys = Object.keys(first);
      if (keys.length > 0) {
        _asyncToGenerator(true);
        const obj = GuildSettingsActionCreatorsDefault;
        obj.bulkAddMemberRoles(guild.id, role.id, keys);
        _asyncToGenerator(false);
      }
      const FLOW_COMPLETED = constants4.FLOW_COMPLETED;
      const id = guild.id;
      const tmp9 = constants4[obj6.STEP_MEMBERS];
      const track = AnalyticsUtilsDefault.track;
      const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
      const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp9, to_step: FLOW_COMPLETED, skip: false };
      AnalyticsUtilsDefault;
      const obj3 = AppAnalyticsUtils;
      const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(id));
      track(USER_FLOW_TRANSITION, obj2);
      const obj4 = GuildSettingsRoleCreateModalActionCreatorsDefault;
      obj4.close();
    };
    cResult[7] = guild.id;
    cResult[8] = first;
    cResult[9] = role.id;
    cResult[10] = fn2;
  }
  const fn = function t() {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        id = id.id;
        const FLOW_DISMISSED = constants4.FLOW_DISMISSED;
        const tmp = constants4[constants3.STEP_MEMBERS];
        const track = role(first[14]).track;
        const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp, to_step: FLOW_DISMISSED, skip: false };
        role(first[14]);
        const obj2 = navigation(first[15]);
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
        track(USER_FLOW_TRANSITION, obj);
        const obj3 = role(first[20]);
        obj3.close();
      }),
      headerTitle() {
        const obj = { step: constants.STEP_MEMBERS };
        return closure_1_21(closure_1_27, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    return setOptions(obj);
  };
  const items = [navigation, guild.id];
  cResult[0] = guild.id;
  cResult[1] = navigation;
  cResult[2] = fn;
  cResult[3] = items;
  tmp10 = items;
  tmp9 = fn;
}) : (() => {
  let Button;
  let constants4;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let obj4;
  let obj7;
  let pendingAdditions;
  let tmp12;
  let tmp = closure_24();
  const tmp2 = navigation;
  let obj = navigation(pendingAdditions[24]);
  navigation = obj.useNavigation();
  const tmp5 = closure_29();
  const role = tmp5.role;
  const guild = tmp5.guild;
  role(pendingAdditions[22])(null != role, "Role cannot be null");
  const items = [navigation, guild.id];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        id = id.id;
        const FLOW_DISMISSED = constants4.FLOW_DISMISSED;
        const tmp = constants4[constants3.STEP_MEMBERS];
        const track = role(first[14]).track;
        const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp, to_step: FLOW_DISMISSED, skip: false };
        role(first[14]);
        const obj2 = navigation(first[15]);
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
        track(USER_FLOW_TRANSITION, obj);
        const obj3 = role(first[20]);
        obj3.close();
      }),
      headerTitle() {
        const obj = { step: constants.STEP_MEMBERS };
        return closure_1_21(closure_1_27, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    return setOptions(obj);
  }, items);
  let nextButtonFloating = role(pendingAdditions[25])();
  const items1 = [role.id];
  const callback = react.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items1);
  let obj2 = navigation(pendingAdditions[41]);
  const guildMembers = obj2.useGuildMembers(guild.id, callback);
  [pendingAdditions, tmp12] = react.useState({});
  const tmp13 = _slicedToArray(react.useState(false), 2);
  let closure_4 = tmp15;
  const items2 = [tmp13[1], guild.id, role.id, pendingAdditions];
  const first1 = tmp13[0];
  const items3 = [pendingAdditions];
  const callback1 = react.useCallback(() => {
    const keys = Object.keys(first);
    if (keys.length > 0) {
      closure_4(true);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.bulkAddMemberRoles(guild.id, role.id, keys);
      closure_4(false);
    }
    const FLOW_COMPLETED = constants4.FLOW_COMPLETED;
    const id = guild.id;
    const tmp9 = constants4[obj6.STEP_MEMBERS];
    const track = AnalyticsUtilsDefault.track;
    const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
    const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp9, to_step: FLOW_COMPLETED, skip: false };
    AnalyticsUtilsDefault;
    const obj3 = AppAnalyticsUtils;
    const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(id));
    track(USER_FLOW_TRANSITION, obj2);
    const obj4 = GuildSettingsRoleCreateModalActionCreatorsDefault;
    obj4.close();
  }, items2);
  const memo = react.useMemo(() => Object.keys(first).length, items3);
  let obj3 = { hasSkipButton: !nextButtonFloating, title: intl.string(navigation(pendingAdditions[18]).t["+gWHtA"]), subtitle: intl2.formatToPlainString(navigation(pendingAdditions[18]).t.yZW3oh, obj4), children: items4 };
  intl = navigation(pendingAdditions[18]).intl;
  intl2 = navigation(pendingAdditions[18]).intl;
  obj4 = { numMembers: maxCount };
  items4 = [, ];
  const obj5 = { autoFocusSearch: false, guild, members: guildMembers, pendingAdditions, role, setPendingAdditions: tmp12, maxCount };
  items4[0] = closure_21(navigation(pendingAdditions[43]).AddMembersBody, obj5);
  const items5 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  obj6 = { style: items5, children: closure_21(Button, obj7) };
  items5[1] = nextButtonFloating;
  obj7 = { loading: first1, text: intl3.string(tmp2(pendingAdditions[18]).t.XcPHfw), onPress: callback1, disabled: 0 === memo || memo > maxCount };
  Button = tmp2(tmp3[39]).Button;
  intl3 = tmp2(tmp3[18]).intl;
  items4[1] = closure_21(closure_7, obj6);
  return closure_22(closure_33, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Button;
  let children;
  let hasSkipButton;
  let intl;
  let items1;
  let items2;
  let obj8;
  let ref;
  let subtitle;
  let title;
  let tmp10;
  let tmp9;
  let tmp = navigation;
  let obj = navigation(ref[17]);
  const cResult = obj.c(32);
  ({ children, hasSkipButton, title, subtitle } = arg0);
  const tmp4 = closure_24();
  const insets = require("useSafeAreaInsetsKeyboardAware")().insets;
  let obj2 = navigation(ref[24]);
  navigation = obj2.useNavigation();
  const tmp6 = closure_28();
  importDefault = tmp6;
  let obj3 = navigation(ref[45]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  ref = react.useRef(null);
  if (cResult[0] !== isScreenReaderEnabled) {
    const fn = function n() {
      const tmp = isScreenReaderEnabled && null != ref.current;
      if (tmp) {
        const obj2 = { ref, delay: 100 };
        const obj = react_native;
        const result = obj.setAccessibilityFocus(obj2);
      }
    };
    const items = [isScreenReaderEnabled];
    cResult[0] = isScreenReaderEnabled;
    cResult[1] = fn;
    cResult[2] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = react.useEffect(tmp9, tmp10);
  if (cResult[3] === tmp6.id) {
    let tmp12;
    if (cResult[4] === navigation) {
      tmp12 = cResult[5];
    }
    const tmp13 = globalThis;
    const _navigator = navigator;
    if (null == navigator) {
      let tmp39;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp41 = closure_21(tmp(ref[47]).SceneLoadingIndicator, {});
        cResult[6] = tmp41;
        tmp39 = tmp41;
      } else {
        tmp39 = cResult[6];
      }
      return tmp39;
    } else {
      const sum = tmp4.container.paddingBottom + insets.bottom;
      if (cResult[7] === insets.top) {
        if (cResult[8] === tmp4.container) {
          let tmp14;
          let tmp17;
          if (cResult[9] === sum) {
            tmp14 = cResult[10];
          }
          if (cResult[11] !== title) {
            let obj5 = { ref, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
            const tmp19 = closure_21(tmp(ref[19]).Heading, obj5);
            cResult[11] = title;
            cResult[12] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === tmp4.sceneSubtitle) {
            let tmp20;
            if (cResult[14] === subtitle) {
              tmp20 = cResult[15];
            }
            if (cResult[16] === tmp4.sceneHeader) {
              if (cResult[17] === tmp17) {
                let tmp23;
                if (cResult[18] === tmp20) {
                  tmp23 = cResult[19];
                }
                if (cResult[20] === children) {
                  let tmp27;
                  if (cResult[21] === tmp4.sceneContent) {
                    tmp27 = cResult[22];
                  }
                  if (cResult[23] === tmp12) {
                    if (cResult[24] === hasSkipButton) {
                      let tmp31;
                      if (cResult[25] === tmp4.sceneFooter) {
                        tmp31 = cResult[26];
                      }
                      if (cResult[27] === tmp31) {
                        if (cResult[28] === tmp14) {
                          if (cResult[29] === tmp23) {
                            let tmp35;
                            if (cResult[30] === tmp27) {
                              tmp35 = cResult[31];
                            }
                            return tmp35;
                          }
                        }
                      }
                      obj6 = { style: tmp14, children: items1 };
                      items1 = [tmp23, tmp27, tmp31];
                      const tmp38 = closure_22(closure_7, obj6);
                      cResult[27] = tmp31;
                      cResult[28] = tmp14;
                      cResult[29] = tmp23;
                      cResult[30] = tmp27;
                      cResult[31] = tmp38;
                      tmp35 = tmp38;
                    }
                  }
                  let tmp32 = hasSkipButton;
                  if (tmp32) {
                    let obj7 = { style: tmp4.sceneFooter, children: closure_21(Button, obj8) };
                    obj8 = { text: intl.string(tmp(ref[18]).t.CJm5V5), onPress: tmp12 };
                    Button = tmp(tmp2[39]).Button;
                    intl = tmp(tmp2[18]).intl;
                    tmp32 = closure_21(closure_7, obj7);
                  }
                  cResult[23] = tmp12;
                  cResult[24] = hasSkipButton;
                  cResult[25] = tmp4.sceneFooter;
                  cResult[26] = tmp32;
                  tmp31 = tmp32;
                }
                const obj9 = { style: tmp4.sceneContent, children };
                const tmp30 = closure_21(closure_7, obj9);
                cResult[20] = children;
                cResult[21] = tmp4.sceneContent;
                cResult[22] = tmp30;
                tmp27 = tmp30;
              }
            }
            const obj10 = { style: tmp4.sceneHeader, children: items2 };
            items2 = [tmp17, tmp20];
            const tmp26 = closure_22(closure_7, obj10);
            cResult[16] = tmp4.sceneHeader;
            cResult[17] = tmp17;
            cResult[18] = tmp20;
            cResult[19] = tmp26;
            tmp23 = tmp26;
          }
          const obj11 = { style: tmp4.sceneSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
          let tmp22 = closure_21(tmp(tmp2[19]).Text, obj11);
          cResult[13] = tmp4.sceneSubtitle;
          cResult[14] = subtitle;
          cResult[15] = tmp22;
          tmp20 = tmp22;
        }
      }
      const obj12 = { paddingTop: insets.top, paddingBottom: sum };
      let merged = Object.assign(tmp4.container);
      cResult[7] = insets.top;
      cResult[8] = tmp4.container;
      cResult[9] = sum;
      cResult[10] = obj12;
      tmp14 = obj12;
    }
  }
  const fn2 = function u() {
    let FLOW_DISMISSED;
    let tmp3;
    const routes = navigation.getState().routes;
    if (routes[routes.length - 1].key === obj6.STEP_DISPLAY) {
      const guild = GuildSettingsStore.getProps().guild;
      _modDef38(null != guild, "shouldSkipPermissions: Guild cannot be null");
      const currentUser = UserStore.getCurrentUser();
      const obj2 = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild };
      const tmp22 = isGuildOwner(guild, currentUser);
      const obj4 = PermissionUtilsAll;
      const tmp25 = !tmp22 && !obj4.can(obj2);
      if (tmp25) {
        FLOW_DISMISSED = constants[tmp.STEP_MEMBERS];
        navigation.push(obj6.STEP_MEMBERS);
        tmp3 = tmp13;
      } else {
        FLOW_DISMISSED = constants[tmp.STEP_PERMISSIONS];
        navigation.push(obj6.STEP_PERMISSIONS);
        tmp3 = tmp13;
      }
    } else if (routes[routes.length - 1].key === obj6.STEP_PERMISSIONS) {
      tmp3 = constants[tmp.STEP_PERMISSIONS];
      FLOW_DISMISSED = constants[tmp.STEP_MEMBERS];
      navigation.push(obj6.STEP_MEMBERS);
    } else {
      tmp3 = constants[tmp.STEP_MEMBERS];
      FLOW_DISMISSED = constants.FLOW_DISMISSED;
      const obj5 = { type: constants2.GUILD_ROLE_CREATION_MODAL };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.MODAL_DISMISSED, obj5);
      const obj3 = GuildSettingsRoleCreateModalActionCreatorsDefault;
      obj3.close();
    }
    id = id.id;
    obj6 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp3, to_step: FLOW_DISMISSED, skip: true };
    const track = AnalyticsUtilsDefault.track;
    const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
    AnalyticsUtilsDefault;
    const obj7 = AppAnalyticsUtils;
    const merged = Object.assign(obj7.collectGuildAnalyticsMetadata(id));
    track(USER_FLOW_TRANSITION, obj6);
  };
  cResult[3] = tmp6.id;
  cResult[4] = navigation;
  cResult[5] = fn2;
  tmp12 = fn2;
}) : ((hasSkipButton) => {
  let Button;
  let children;
  let intl;
  let items2;
  let items3;
  let obj10;
  let obj4;
  let subtitle;
  let title;
  let tmp12Result;
  hasSkipButton = hasSkipButton.hasSkipButton;
  navigation = undefined;
  importDefault = undefined;
  let ref;
  ({ children, title, subtitle } = hasSkipButton);
  let tmp = closure_24();
  const insets = require("useSafeAreaInsetsKeyboardAware")().insets;
  let tmp3 = navigation;
  let obj = navigation(ref[24]);
  navigation = obj.useNavigation();
  const tmp5 = closure_28();
  importDefault = tmp5;
  let obj2 = navigation(ref[45]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  ref = react.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items);
  const items1 = [navigation, tmp5.id];
  if (null == navigator) {
    tmp12Result = closure_21(tmp3(tmp2[47]).SceneLoadingIndicator, {});
  } else {
    let obj3 = { style: obj4, children: items3 };
    obj4 = { paddingTop: insets.top, paddingBottom: tmp.container.paddingBottom + insets.bottom };
    let merged = Object.assign(tmp.container);
    let obj5 = { style: tmp.sceneHeader, children: items2 };
    obj6 = { ref, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    items2 = [closure_21(tmp3(ref[19]).Heading, obj6), ];
    let obj7 = { style: tmp.sceneSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    items2[1] = closure_21(tmp3(ref[19]).Text, obj7);
    items3 = [closure_22(closure_7, obj5), , ];
    const obj8 = { style: tmp.sceneContent, children };
    items3[1] = closure_21(closure_7, obj8);
    if (hasSkipButton) {
      const obj9 = { style: tmp.sceneFooter, children: closure_21(Button, obj10) };
      obj10 = { text: intl.string(tmp3(ref[18]).t.CJm5V5), onPress: tmp9 };
      Button = tmp3(tmp2[39]).Button;
      intl = tmp3(tmp2[18]).intl;
      hasSkipButton = closure_21(closure_7, obj9);
    }
    items3[2] = hasSkipButton;
    tmp12Result = closure_22(closure_7, obj3);
  }
  return tmp12Result;
});
let obj7 = {
  fullscreen: true,
  render() {
    return closure_21(RoleCreateScene, {});
  }
};
let obj8 = {
  fullscreen: true,
  render() {
    return closure_21(closure_31, {});
  }
};
let obj9 = {
  fullscreen: true,
  render() {
    return closure_21(closure_32, {});
  }
};
const screens = { [obj6.STEP_DISPLAY]: obj7, [obj6.STEP_PERMISSIONS]: obj8, [obj6.STEP_MEMBERS]: obj9 };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  let tmp7;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp4 = closure_28();
  _require = tmp4;
  if (cResult[0] !== tmp4.id) {
    const fn = function t() {
      const FLOW_INITIALIZED = constants.FLOW_INITIALIZED;
      id = id.id;
      const tmp = constants[obj6.STEP_DISPLAY];
      const track = AnalyticsUtilsDefault.track;
      const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
      const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: FLOW_INITIALIZED, to_step: tmp, skip: false };
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
      track(USER_FLOW_TRANSITION, obj);
    };
    cResult[0] = tmp4.id;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  useMountEffectDefault(tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { screens, initialRouteName: obj6.STEP_DISPLAY };
    const tmp11 = closure_21(tmp(6503).Navigator, obj2);
    cResult[2] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => {
  _require = closure_28();
  let tmp = useMountEffectDefault(() => {
    const FLOW_INITIALIZED = constants.FLOW_INITIALIZED;
    id = id.id;
    const tmp = constants[obj6.STEP_DISPLAY];
    const track = AnalyticsUtilsDefault.track;
    const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
    const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: FLOW_INITIALIZED, to_step: tmp, skip: false };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
    track(USER_FLOW_TRANSITION, obj);
  });
  let obj = { screens, initialRouteName: obj6.STEP_DISPLAY };
  return closure_21(require("Navigator").Navigator, obj);
});
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx");

export default tmp8;