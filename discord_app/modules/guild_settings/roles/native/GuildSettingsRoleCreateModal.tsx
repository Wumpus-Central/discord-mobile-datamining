// === Module 17608: GuildSettingsRoleCreateModal ===

// Module 17608 (GuildSettingsRoleCreateModal)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 4971 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators" /* 17607 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

require = fn;
function RoleCreateScene() {
  const tmp = closure_24();
  let obj = navigation(color[22]);
  navigation = obj.useNavigation();
  let obj1 = navigation(color[19]);
  const items = [GuildSettingsStore];
  const stateFromStores = obj1.useStateFromStores(items, () => props.getProps().guild);
  stateFromStores(color[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  const intl = navigation(color[17]).intl;
  const tmp7 = _slicedToArray(onSelect.useState(intl.string(navigation(color[17]).t.QBMHvB)), 2);
  const tmp8 = _slicedToArray(onSelect.useState(closure_17), 2);
  color = tmp8[0];
  asyncGeneratorStep = tmp8[1];
  [tmp11, _slicedToArray] = _slicedToArray(onSelect.useState(false), 2);
  let nextButtonFloating = stateFromStores(color[23])();
  const items1 = [navigation, stateFromStores];
  const layoutEffect = onSelect.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
        stateFromStores(first[14]);
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[constants3.STEP_DISPLAY], to_step: constants4.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(navigation(first[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(constants.USER_FLOW_TRANSITION, obj);
        const obj3 = navigation(first[15]);
        stateFromStores(first[18]).close();
      }),
      headerTitle() {
        return closure_1_21(closure_1_27, { step: constants.STEP_DISPLAY });
      }
    };
    navigation.setOptions(obj);
  }, items1);
  onSelect = onSelect.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const items2 = [color, stateFromStores.id, tmp7[0], navigation];
  const items3 = [color, onSelect];
  const callback1 = onSelect.useCallback(asyncGeneratorStep(async () => {
    _slicedToArray(true);
    let num5 = first;
    if (first === closure_1_17) {
      num5 = 0;
    }
    await tmp3(5520).createRole(stateFromStores.id, str, num5);
    if (1 === tmp7) {
      c2 = 0;
      closure_129_5(false);
      const result = tmp3(4258).roleCreateFailedToast();
      c4 = 3;
      tmp3(4258);
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const result1 = GuildSettingsStore.addConditionalChangeListener(() => {
        let obj = props;
        props = props.getProps();
        ({ guild, selectedRoleId } = props);
        if (null != guild) {
          if (null != selectedRoleId) {
            role = role.getRole(guild.id, selectedRoleId);
          }
        }
        if (null != selectedRoleId) {
          if (null != role) {
            if (null != guild) {
              closure_0(4258).roleCreatedToast();
              const obj5 = closure_0(4258);
              closure_0(17606).setRoleJustCreated(true);
              let STEP_MEMBERS = constants4.STEP_PERMISSIONS;
              const guild2 = obj.getProps().guild;
              closure_1(38)(null != guild2, "shouldSkipPermissions: Guild cannot be null");
              currentUser = currentUser.getCurrentUser();
              const tmp23 = closure_2_9(guild2, currentUser);
              const obj6 = closure_0(17606);
              obj = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild2 };
              let tmp4 = !tmp23;
              if (!tmp23) {
                tmp4 = !obj7.can(obj);
              }
              if (tmp4) {
                STEP_MEMBERS = constants4.STEP_MEMBERS;
              }
              closure_1_0.push(STEP_MEMBERS);
              obj7 = c2(4204);
              obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: dependencyMap2[constants4.STEP_DISPLAY], to_step: dependencyMap2[STEP_MEMBERS], skip: false };
              const tmp18Result = closure_1(1242);
              const merged = Object.assign(closure_0(4740).collectGuildAnalyticsMetadata(guild.id));
              tmp18Result.track(constants.USER_FLOW_TRANSITION, obj);
              return false;
            }
          }
        }
        return true;
      });
      c2 = 0;
    }
    return value;
  }), items2);
  obj = { title: null, subtitle: null, children: null };
  const callback2 = onSelect.useCallback(() => {
    React6.dismiss();
    const obj = { color, onSelect };
    obj.openLazy(asyncRequireImpl(16291, dependencyMap.paths), "RoleColorPicker", obj);
  }, items3);
  const intl2 = navigation(color[17]).intl;
  obj.title = intl2.string(navigation(color[17]).t["8pxAPp"]);
  const intl3 = navigation(color[17]).intl;
  obj.subtitle = intl3.string(navigation(color[17]).t["JubQz/"]);
  obj = { spacing: stateFromStores(color[13]).space.PX_24, style: tmp.sceneInner, children: null };
  obj1 = { label: null, description: null, required: true, value: null, onChange: null, maxLength: null, autoFocus: true, autoComplete: "off" };
  const intl4 = navigation(color[17]).intl;
  obj1.label = intl4.string(navigation(color[17]).t.dLbkBk);
  const intl5 = navigation(color[17]).intl;
  obj1.description = intl5.string(navigation(color[17]).t.m4j44b);
  obj1.value = tmp7[0];
  obj1.onChange = tmp7[1];
  obj1.maxLength = maxLength;
  const items4 = [closure_21(navigation(color[32]).TextInput, obj1), ];
  const obj2 = { helperText: null, hasIcons: false, children: null };
  const intl6 = navigation(color[17]).intl;
  obj2.helperText = intl6.string(navigation(color[17]).t["9TMIgc"]);
  let obj3 = { label: null, onPress: null, arrow: true, trailing: null };
  const intl7 = navigation(color[17]).intl;
  obj3.label = intl7.string(navigation(color[17]).t["5NC5YW"]);
  obj3.onPress = callback2;
  obj4 = { style: tmp.colorTrailing, children: null };
  const items5 = [closure_21(stateFromStores(color[35]), { color, style: tmp.colorBlock }), ];
  let obj6 = { variant: "text-sm/medium", children: null };
  let obj5 = { color, style: tmp.colorBlock };
  const tmp10 = _slicedToArray(onSelect.useState(false), 2);
  obj6.children = navigation(color[36]).int2hex(color);
  items5[1] = closure_21(navigation(color[16]).Text, obj6);
  obj4.children = items5;
  obj3.trailing = closure_22(closure_7, obj4);
  obj2.children = closure_21(navigation(color[34]).TableRow, obj3);
  items4[1] = closure_21(navigation(color[33]).TableRowGroup, obj2);
  obj.children = items4;
  const items6 = [closure_22(navigation(color[31]).Stack, obj), ];
  const items7 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  let obj7 = { style: items7, children: null };
  items7[1] = nextButtonFloating;
  const obj8 = { loading: tmp11, disabled: null, text: null, onPress: null };
  if (!tmp11) {
    tmp11 = "" === str.trim();
  }
  obj8.disabled = tmp11;
  const intl8 = tmp2(tmp3[17]).intl;
  obj8.text = intl8.string(navigation(color[17]).t.CumH4u);
  obj8.onPress = callback1;
  obj7.children = closure_21(navigation(color[37]).Button, obj8);
  items6[1] = closure_21(closure_7, obj7);
  obj.children = items6;
  return closure_22(ModalScene, obj);
}
function RolePermissionTemplate() {
  let obj = navigation(onSelect[22]);
  navigation = obj.useNavigation();
  let obj1 = navigation(onSelect[19]);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => props.getProps());
  const guild = stateFromStoresObject.guild;
  closure_129_0 = guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  stateFromStores(onSelect[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  let obj2 = navigation(onSelect[19]);
  const items1 = [GuildRoleStore];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let role;
    if (null != stateFromStores) {
      role = GuildRoleStore.getRole(navigation.id, tmp);
    }
    return role;
  });
  stateFromStores(onSelect[20])(null != stateFromStores, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  const items2 = [navigation, guild.id];
  const layoutEffect = noop.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
        stateFromStores(callback[14]);
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[constants3.STEP_PERMISSIONS], to_step: constants4.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(navigation(callback[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(constants.USER_FLOW_TRANSITION, obj);
        const obj3 = navigation(callback[15]);
        stateFromStores(callback[18]).close();
      }),
      headerTitle() {
        return closure_1_21(closure_1_27, { step: constants.STEP_PERMISSIONS });
      }
    };
    navigation.setOptions(obj);
  }, items2);
  const items3 = [guild.id, navigation, stateFromStores.id];
  onSelect = noop.useCallback((arg0) => {
    let obj = GuildActionCreatorsDefault;
    const result = obj.updateRolePermissions(guild.id, stateFromStores.id, arg0);
    navigation.push(obj4.STEP_MEMBERS);
    obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[obj4.STEP_PERMISSIONS], to_step: constants4[obj4.STEP_MEMBERS], skip: false };
    obj4 = AppAnalyticsUtils;
    const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guild.id));
    AnalyticsUtilsDefault.track(constants.USER_FLOW_TRANSITION, obj);
  }, items3);
  const items4 = [onSelect];
  obj = { hasSkipButton: false, title: null, subtitle: null, children: null };
  const callback1 = noop.useCallback(() => {
    callback(map1[closure_2_14].permissions);
  }, items4);
  const intl = navigation(onSelect[17]).intl;
  obj.title = intl.string(navigation(onSelect[17]).t.p0IwNA);
  const intl2 = navigation(onSelect[17]).intl;
  obj.subtitle = intl2.string(navigation(onSelect[17]).t.G529Hk);
  obj = { onSelect, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id };
  const items5 = [closure_21(stateFromStores(onSelect[38]), obj), ];
  obj1 = { style: closure_24().sceneFooter, children: null };
  obj2 = { text: null, onPress: null };
  const intl3 = navigation(onSelect[17]).intl;
  obj2.text = intl3.string(navigation(onSelect[17]).t.CJm5V5);
  obj2.onPress = callback1;
  obj1.children = closure_21(navigation(onSelect[37]).Button, obj2);
  items5[1] = closure_21(closure_7, obj1);
  obj.children = items5;
  return closure_22(ModalScene, obj);
}
function RoleMembers() {
  const tmp = closure_24();
  let obj = navigation(pendingAdditions[22]);
  navigation = obj.useNavigation();
  let obj1 = navigation(pendingAdditions[19]);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => props.getProps());
  const guild = stateFromStoresObject.guild;
  closure_129_0 = guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  stateFromStores(pendingAdditions[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  let obj2 = navigation(pendingAdditions[19]);
  const items1 = [GuildRoleStore];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let role;
    if (null != stateFromStores) {
      role = GuildRoleStore.getRole(navigation.id, tmp);
    }
    return role;
  });
  stateFromStores(pendingAdditions[20])(null != stateFromStores, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  stateFromStores(pendingAdditions[20])(null != stateFromStores, "Role cannot be null");
  const items2 = [navigation, guild.id];
  const layoutEffect = noop.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
        stateFromStores(first[14]);
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[constants3.STEP_MEMBERS], to_step: constants4.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(navigation(first[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(constants.USER_FLOW_TRANSITION, obj);
        const obj3 = navigation(first[15]);
        stateFromStores(first[18]).close();
      }),
      headerTitle() {
        return closure_1_21(closure_1_27, { step: constants.STEP_MEMBERS });
      }
    };
    return navigation.setOptions(obj);
  }, items2);
  let nextButtonFloating = stateFromStores(pendingAdditions[23])();
  const items3 = [stateFromStores.id];
  const callback = noop.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(stateFromStores.id);
  }, items3);
  let obj3 = navigation(pendingAdditions[39]);
  const guildMembers = obj3.useGuildMembers(guild.id, callback);
  const tmp13 = _slicedToArray(noop.useState({}), 2);
  pendingAdditions = tmp13[0];
  const tmp15 = _slicedToArray(noop.useState(false), 2);
  closure_4 = tmp16;
  const items4 = [tmp15[1], guild.id, stateFromStores.id, pendingAdditions];
  const items5 = [pendingAdditions];
  const callback1 = noop.useCallback(() => {
    const keys = Object.keys(first);
    if (keys.length > 0) {
      closure_4(true);
      let obj = GuildSettingsActionCreatorsDefault;
      obj.bulkAddMemberRoles(guild.id, stateFromStores.id, keys);
      closure_4(false);
    }
    obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[obj4.STEP_MEMBERS], to_step: constants4.FLOW_COMPLETED, skip: false };
    obj4 = AppAnalyticsUtils;
    const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guild.id));
    AnalyticsUtilsDefault.track(constants.USER_FLOW_TRANSITION, obj);
    GuildSettingsRoleCreateModalActionCreatorsDefault.close();
  }, items4);
  const memo = noop.useMemo(() => Object.keys(first).length, items5);
  obj = { hasSkipButton: !nextButtonFloating, title: null, subtitle: null, children: null };
  const intl = navigation(pendingAdditions[17]).intl;
  obj.title = intl.string(navigation(pendingAdditions[17]).t["+gWHtA"]);
  const intl2 = navigation(pendingAdditions[17]).intl;
  obj = { numMembers: maxCount };
  obj.subtitle = intl2.formatToPlainString(navigation(pendingAdditions[17]).t.yZW3oh, obj);
  obj1 = { autoFocusSearch: false, guild, members: guildMembers, pendingAdditions, role: stateFromStores, setPendingAdditions: tmp13[1], maxCount };
  const items6 = [closure_21(navigation(pendingAdditions[41]).AddMembersBody, obj1), ];
  const items7 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  obj2 = { style: items7, children: null };
  items7[1] = nextButtonFloating;
  obj3 = { loading: tmp15[0], text: null, onPress: null, disabled: null };
  const intl3 = tmp2(tmp3[17]).intl;
  obj3.text = intl3.string(navigation(pendingAdditions[17]).t.XcPHfw);
  obj3.onPress = callback1;
  obj3.disabled = 0 === memo || memo > maxCount;
  obj2.children = closure_21(navigation(pendingAdditions[37]).Button, obj3);
  items6[1] = closure_21(closure_7, obj2);
  obj.children = items6;
  return closure_22(ModalScene, obj);
}
function ModalScene(hasSkipButton) {
  hasSkipButton = hasSkipButton.hasSkipButton;
  let navigation;
  let stateFromStores;
  let ref;
  ({ children, title, subtitle } = hasSkipButton);
  let tmp = closure_24();
  const insets = stateFromStores(ref[42])().insets;
  let obj = navigation(ref[22]);
  navigation = obj.useNavigation();
  let obj1 = navigation(ref[19]);
  const items = [GuildSettingsStore];
  stateFromStores = obj1.useStateFromStores(items, () => props.getProps().guild);
  stateFromStores(ref[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  let obj2 = navigation(ref[43]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  ref = noop.useRef(null);
  const items1 = [isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items1);
  const items2 = [navigation, stateFromStores.id];
  if (null == navigator) {
    let tmp13Result = closure_21(tmp3(tmp2[45]).SceneLoadingIndicator, {});
  } else {
    obj = { style: null, children: null };
    obj = {};
    let merged = Object.assign(tmp.container);
    obj.paddingTop = insets.top;
    obj.paddingBottom = tmp.container.paddingBottom + insets.bottom;
    obj.style = obj;
    obj1 = { style: tmp.sceneHeader, children: null };
    obj2 = { ref, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    const items3 = [closure_21(tmp3(tmp2[16]).Heading, obj2), ];
    let obj3 = { style: tmp.sceneSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    items3[1] = closure_21(tmp3(tmp2[16]).Text, obj3);
    obj1.children = items3;
    const items4 = [closure_22(closure_7, obj1), , ];
    obj4 = { style: tmp.sceneContent, children };
    items4[1] = closure_21(closure_7, obj4);
    if (hasSkipButton) {
      const obj5 = { style: tmp.sceneFooter, children: null };
      let obj6 = { text: null, onPress: null };
      const intl = tmp3(tmp2[17]).intl;
      obj6.text = intl.string(tmp3(tmp2[17]).t.CJm5V5);
      obj6.onPress = tmp10;
      obj5.children = closure_21(tmp3(tmp2[37]).Button, obj6);
      hasSkipButton = closure_21(closure_7, obj5);
    }
    items4[2] = hasSkipButton;
    obj.children = items4;
    tmp13Result = closure_22(closure_7, obj);
  }
  return tmp13Result;
}
get_ActivityIndicator = fn(17);
({ View: closure_7, Keyboard: closure_8 } = get_ActivityIndicator);
const isGuildOwner = fn(1975).isGuildOwner;
const GuildSettingsRoleConstants = fn(17609);
({ PermissionTemplates: map1, DEFAULT_TEMPLATE_TYPE: closure_14, MAX_BULK_ROLE_MEMBERS_ADD: closure_15 } = GuildSettingsRoleConstants);
const Constants = fn(1074);
({ MAX_ROLE_LENGTH: closure_16, DEFAULT_ROLE_COLOR: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = { titleContainer: { flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%" }, title: { textAlign: "center", flex: 1 } };
fn(4560);
let obj = { container: null, sceneHeader: null, sceneSubtitle: null, sceneContent: null, sceneInner: null, colorTrailing: null, colorBlock: null, sceneFooter: null, nextButton: null, nextButtonFloating: null };
obj = { marginTop: fn(5682).NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: nativeDefault.space.PX_16 };
obj.container = obj;
obj.sceneHeader = { alignItems: "center", marginBottom: 8, marginHorizontal: 16 };
obj.sceneSubtitle = { textAlign: "center", paddingTop: 8, maxWidth: 400 };
obj.sceneContent = { flex: 1 };
const createStyles = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.sceneInner = createStyles;
obj.colorTrailing = { flexDirection: "row", alignItems: "center" };
obj.colorBlock = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
obj.sceneFooter = { paddingBottom: 8, paddingHorizontal: nativeDefault.space.PX_16 };
obj.nextButton = { width: "100%", paddingHorizontal: 16, paddingVertical: 16 };
let obj2 = { paddingBottom: 8, paddingHorizontal: nativeDefault.space.PX_16 };
obj.nextButtonFloating = { paddingVertical: 0, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_24 = createStyles.createStyles(obj);
let obj4 = { STEP_DISPLAY: "STEP_DISPLAY", STEP_PERMISSIONS: "STEP_PERMISSIONS", STEP_MEMBERS: "STEP_MEMBERS" };
let closure_26 = { [obj4.STEP_DISPLAY]: "Role Display", [obj4.STEP_PERMISSIONS]: "Role Permissions", [obj4.STEP_MEMBERS]: "Role Members", FLOW_INITIALIZED: "Flow Initialized", FLOW_DISMISSED: "Flow Dismissed", FLOW_COMPLETED: "Flow Completed" };
let closure_27 = noop.memo((step) => {
  const keys = Object.keys(obj4);
  let obj = { style: closure_23.titleContainer, children: null };
  const sum = keys.indexOf(step.step) + 1;
  obj = { style: closure_23.title, accessibilityRole: "header", variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t["8v/u0i"], { number: sum, total: keys.length });
  obj.children = __initData(Text_Text.Text, obj);
  return __initData(React5, obj);
});
const screens = {
  [obj4.STEP_DISPLAY]: {
    fullscreen: true,
    render() {
      return __initData(RoleCreateScene, {});
    }
  },
  [obj4.STEP_PERMISSIONS]: {
    fullscreen: true,
    render() {
      return __initData(RolePermissionTemplate, {});
    }
  },
  [obj4.STEP_MEMBERS]: {
    fullscreen: true,
    render() {
      return __initData(RoleMembers, {});
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx");

export default function GuildSettingsRoleCreateModal() {
  let obj = stateFromStores(504);
  const items = [GuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => props.getProps().guild);
  _modDef38(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  useMountEffectDefault(() => {
    const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants.FLOW_INITIALIZED, to_step: constants[obj4.STEP_DISPLAY], skip: false };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(stateFromStores.id));
    obj.track(constants.USER_FLOW_TRANSITION, obj);
  });
  obj = { screens, initialRouteName: obj4.STEP_DISPLAY };
  return closure_21(stateFromStores(7000).Navigator, obj);
};