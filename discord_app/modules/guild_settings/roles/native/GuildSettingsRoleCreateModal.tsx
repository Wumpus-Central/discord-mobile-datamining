// === Module 17858: GuildSettingsRoleCreateModal ===

// Module 17858 (GuildSettingsRoleCreateModal)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import PermissionUtilsAll from "PermissionUtils" /* 4283 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import Text_Text from "Text/Text" /* 4636 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4820 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5056 */;
import useMountEffectDefault from "useMountEffect" /* 5079 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5608 */;
import NavigatorHeader from "NavigatorHeader" /* 5712 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9217 */;
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators" /* 17857 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2016 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9218 */;

require = fn;
function RoleCreateScene() {
  const tmp = closure_24();
  navigation = navigation(color[22]).useNavigation();
  let obj = navigation(color[22]);
  const items = [GuildSettingsStore];
  const stateFromStores = navigation(color[19]).useStateFromStores(items, () => props.getProps().guild);
  stateFromStores(color[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  const intl = navigation(color[17]).intl;
  const tmp7 = _slicedToArray(onSelect.useState(intl.string(navigation(color[17]).t.QBMHvB)), 2);
  [color, asyncGeneratorStep] = onSelect.useState(closure_17);
  let obj2 = navigation(color[19]);
  [tmp11, _slicedToArray] = onSelect.useState(false);
  let nextButtonFloating = stateFromStores(color[23])();
  const items1 = [navigation, stateFromStores];
  const layoutEffect = onSelect.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
        const obj = stateFromStores(first[14]);
        const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[constants3.STEP_DISPLAY], to_step: constants4.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(navigation(first[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(constants.USER_FLOW_TRANSITION, obj2);
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
    await tmp3(5608).createRole(stateFromStores.id, str, num5);
    if (1 === tmp7) {
      c2 = 0;
      closure_129_5(false);
      const result = tmp3(4337).roleCreateFailedToast();
      c4 = 3;
      tmp3(4337);
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const result1 = GuildSettingsStore.addConditionalChangeListener(() => {
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
              closure_0(4337).roleCreatedToast();
              const obj5 = closure_0(4337);
              closure_0(17856).setRoleJustCreated(true);
              let STEP_MEMBERS = constants4.STEP_PERMISSIONS;
              const guild2 = closure_2_12.getProps().guild;
              closure_1(38)(null != guild2, "shouldSkipPermissions: Guild cannot be null");
              currentUser = currentUser.getCurrentUser();
              const tmp23 = closure_2_9(guild2, currentUser);
              const obj6 = closure_0(17856);
              const obj2 = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild2 };
              let tmp4 = !tmp23;
              if (!tmp23) {
                tmp4 = !obj7.can(obj2);
              }
              if (tmp4) {
                STEP_MEMBERS = constants4.STEP_MEMBERS;
              }
              closure_1_0.push(STEP_MEMBERS);
              obj7 = c2(4283);
              const obj3 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: dependencyMap2[constants4.STEP_DISPLAY], to_step: dependencyMap2[STEP_MEMBERS], skip: false };
              const tmp18Result = closure_1(1241);
              const merged = Object.assign(closure_0(4820).collectGuildAnalyticsMetadata(guild.id));
              tmp18Result.track(constants.USER_FLOW_TRANSITION, obj3);
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
  let obj3 = { title: null, subtitle: null, children: null };
  const callback2 = onSelect.useCallback(() => {
    React6.dismiss();
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16451, dependencyMap.paths), "RoleColorPicker", { color, onSelect });
  }, items3);
  const intl2 = navigation(color[17]).intl;
  obj3.title = intl2.string(navigation(color[17]).t["8pxAPp"]);
  const intl3 = navigation(color[17]).intl;
  obj3.subtitle = intl3.string(navigation(color[17]).t["JubQz/"]);
  const obj4 = { spacing: stateFromStores(color[13]).space.PX_24, style: tmp.sceneInner, children: null };
  let obj5 = { label: null, description: null, required: true, value: null, onChange: null, maxLength: null, autoFocus: true, autoComplete: "off" };
  const intl4 = navigation(color[17]).intl;
  obj5.label = intl4.string(navigation(color[17]).t.dLbkBk);
  const intl5 = navigation(color[17]).intl;
  obj5.description = intl5.string(navigation(color[17]).t.m4j44b);
  obj5.value = tmp7[0];
  obj5.onChange = tmp7[1];
  obj5.maxLength = maxLength;
  const items4 = [closure_21(navigation(color[32]).TextInput, obj5), ];
  let obj6 = { helperText: null, hasIcons: false, children: null };
  const intl6 = navigation(color[17]).intl;
  obj6.helperText = intl6.string(navigation(color[17]).t["9TMIgc"]);
  obj7 = { label: null, onPress: null, arrow: true, trailing: null };
  const intl7 = navigation(color[17]).intl;
  obj7.label = intl7.string(navigation(color[17]).t["5NC5YW"]);
  obj7.onPress = callback2;
  const obj8 = { style: tmp.colorTrailing, children: null };
  const items5 = [closure_21(stateFromStores(color[35]), { color, style: tmp.colorBlock }), ];
  const obj10 = { variant: "text-sm/medium", children: null };
  const obj9 = { color, style: tmp.colorBlock };
  const tmp10 = _slicedToArray(onSelect.useState(false), 2);
  obj10.children = navigation(color[36]).int2hex(color);
  items5[1] = closure_21(navigation(color[16]).Text, obj10);
  obj8.children = items5;
  obj7.trailing = closure_22(closure_7, obj8);
  obj6.children = closure_21(navigation(color[34]).TableRow, obj7);
  items4[1] = closure_21(navigation(color[33]).TableRowGroup, obj6);
  obj4.children = items4;
  const items6 = [closure_22(navigation(color[31]).Stack, obj4), ];
  const items7 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  const obj12 = { style: items7, children: null };
  items7[1] = nextButtonFloating;
  const obj13 = { loading: tmp11, disabled: null, text: null, onPress: null };
  if (!tmp11) {
    tmp11 = "" === str.trim();
  }
  obj13.disabled = tmp11;
  const intl8 = tmp2(tmp3[17]).intl;
  obj13.text = intl8.string(navigation(color[17]).t.CumH4u);
  obj13.onPress = callback1;
  obj12.children = closure_21(navigation(color[37]).Button, obj13);
  items6[1] = closure_21(closure_7, obj12);
  obj3.children = items6;
  return closure_22(ModalScene, obj3);
}
function RolePermissionTemplate() {
  const tmp = closure_24();
  navigation = navigation(onSelect[22]).useNavigation();
  let obj = navigation(onSelect[22]);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = navigation(onSelect[19]).useStateFromStoresObject(items, () => props.getProps());
  const guild = stateFromStoresObject.guild;
  closure_129_0 = guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  stateFromStores(onSelect[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  let obj2 = navigation(onSelect[19]);
  const items1 = [GuildRoleStore];
  stateFromStores = navigation(onSelect[19]).useStateFromStores(items1, () => {
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
        const obj = stateFromStores(callback[14]);
        const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[constants3.STEP_PERMISSIONS], to_step: constants4.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(navigation(callback[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(constants.USER_FLOW_TRANSITION, obj2);
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
    const result = GuildActionCreatorsDefault.updateRolePermissions(guild.id, stateFromStores.id, arg0);
    navigation.push(obj7.STEP_MEMBERS);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[obj7.STEP_PERMISSIONS], to_step: constants4[obj7.STEP_MEMBERS], skip: false };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild.id));
    obj2.track(constants.USER_FLOW_TRANSITION, obj3);
  }, items3);
  const items4 = [onSelect];
  const obj4 = { hasSkipButton: false, title: null, subtitle: null, children: null };
  const callback1 = noop.useCallback(() => {
    callback(map1[closure_2_14].permissions);
  }, items4);
  const intl = navigation(onSelect[17]).intl;
  obj4.title = intl.string(navigation(onSelect[17]).t.p0IwNA);
  const intl2 = navigation(onSelect[17]).intl;
  obj4.subtitle = intl2.string(navigation(onSelect[17]).t.G529Hk);
  const items5 = [closure_21(stateFromStores(onSelect[38]), { onSelect, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id }), ];
  const obj6 = { style: tmp.sceneFooter, children: null };
  obj7 = { text: null, onPress: null };
  const intl3 = navigation(onSelect[17]).intl;
  obj7.text = intl3.string(navigation(onSelect[17]).t.CJm5V5);
  obj7.onPress = callback1;
  obj6.children = closure_21(navigation(onSelect[37]).Button, obj7);
  items5[1] = closure_21(closure_7, obj6);
  obj4.children = items5;
  return closure_22(ModalScene, obj4);
}
function RoleMembers() {
  const tmp = closure_24();
  navigation = navigation(pendingAdditions[22]).useNavigation();
  let obj = navigation(pendingAdditions[22]);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = navigation(pendingAdditions[19]).useStateFromStoresObject(items, () => props.getProps());
  const guild = stateFromStoresObject.guild;
  closure_129_0 = guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  stateFromStores(pendingAdditions[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  let obj2 = navigation(pendingAdditions[19]);
  const items1 = [GuildRoleStore];
  stateFromStores = navigation(pendingAdditions[19]).useStateFromStores(items1, () => {
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
        const obj = stateFromStores(first[14]);
        const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[constants3.STEP_MEMBERS], to_step: constants4.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(navigation(first[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(constants.USER_FLOW_TRANSITION, obj2);
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
  let obj3 = navigation(pendingAdditions[19]);
  const guildMembers = navigation(pendingAdditions[39]).useGuildMembers(guild.id, callback);
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
      GuildSettingsActionCreatorsDefault.bulkAddMemberRoles(guild.id, stateFromStores.id, keys);
      closure_4(false);
    }
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants4[obj7.STEP_MEMBERS], to_step: constants4.FLOW_COMPLETED, skip: false };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild.id));
    obj2.track(constants.USER_FLOW_TRANSITION, obj3);
    GuildSettingsRoleCreateModalActionCreatorsDefault.close();
  }, items4);
  const memo = noop.useMemo(() => Object.keys(first).length, items5);
  let obj5 = { hasSkipButton: !nextButtonFloating, title: null, subtitle: null, children: null };
  const intl = navigation(pendingAdditions[17]).intl;
  obj5.title = intl.string(navigation(pendingAdditions[17]).t["+gWHtA"]);
  const intl2 = navigation(pendingAdditions[17]).intl;
  obj5.subtitle = intl2.formatToPlainString(navigation(pendingAdditions[17]).t.yZW3oh, { numMembers: maxCount });
  const items6 = [closure_21(navigation(pendingAdditions[41]).AddMembersBody, { autoFocusSearch: false, guild, members: guildMembers, pendingAdditions, role: stateFromStores, setPendingAdditions: tmp13[1], maxCount }), ];
  const items7 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  const obj8 = { style: items7, children: null };
  items7[1] = nextButtonFloating;
  const obj9 = { loading: tmp15[0], text: null, onPress: null, disabled: null };
  const intl3 = tmp2(tmp3[17]).intl;
  obj9.text = intl3.string(navigation(pendingAdditions[17]).t.XcPHfw);
  obj9.onPress = callback1;
  obj9.disabled = 0 === memo || memo > maxCount;
  obj8.children = closure_21(navigation(pendingAdditions[37]).Button, obj9);
  items6[1] = closure_21(closure_7, obj8);
  obj5.children = items6;
  return closure_22(ModalScene, obj5);
}
function ModalScene(hasSkipButton) {
  hasSkipButton = hasSkipButton.hasSkipButton;
  let navigation;
  let stateFromStores;
  let ref;
  ({ children, title, subtitle } = hasSkipButton);
  let tmp = closure_24();
  const insets = stateFromStores(ref[42])().insets;
  navigation = navigation(ref[22]).useNavigation();
  let obj = navigation(ref[22]);
  const items = [GuildSettingsStore];
  stateFromStores = navigation(ref[19]).useStateFromStores(items, () => props.getProps().guild);
  stateFromStores(ref[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  let obj2 = navigation(ref[19]);
  const isScreenReaderEnabled = navigation(ref[43]).useIsScreenReaderEnabled();
  ref = noop.useRef(null);
  const items1 = [isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items1);
  const items2 = [navigation, stateFromStores.id];
  if (null == navigator) {
    let tmp13Result = closure_21(tmp3(tmp2[45]).SceneLoadingIndicator, {});
  } else {
    let obj4 = { style: null, children: null };
    let obj5 = {};
    let merged = Object.assign(tmp.container);
    obj5.paddingTop = insets.top;
    obj5.paddingBottom = tmp.container.paddingBottom + insets.bottom;
    obj4.style = obj5;
    let obj6 = { style: tmp.sceneHeader, children: null };
    obj7 = { ref, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    const items3 = [closure_21(tmp3(tmp2[16]).Heading, obj7), ];
    let obj8 = { style: tmp.sceneSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    items3[1] = closure_21(tmp3(tmp2[16]).Text, obj8);
    obj6.children = items3;
    const items4 = [closure_22(closure_7, obj6), , ];
    const obj9 = { style: tmp.sceneContent, children };
    items4[1] = closure_21(closure_7, obj9);
    if (hasSkipButton) {
      const obj10 = { style: tmp.sceneFooter, children: null };
      const obj11 = { text: null, onPress: null };
      const intl = tmp3(tmp2[17]).intl;
      obj11.text = intl.string(tmp3(tmp2[17]).t.CJm5V5);
      obj11.onPress = tmp10;
      obj10.children = closure_21(tmp3(tmp2[37]).Button, obj11);
      hasSkipButton = closure_21(closure_7, obj10);
    }
    items4[2] = hasSkipButton;
    obj4.children = items4;
    tmp13Result = closure_22(closure_7, obj4);
  }
  return tmp13Result;
}
get_ActivityIndicator = fn(17);
({ View: closure_7, Keyboard: closure_8 } = get_ActivityIndicator);
const isGuildOwner = fn(1976).isGuildOwner;
const GuildSettingsRoleConstants = fn(17859);
({ PermissionTemplates: map1, DEFAULT_TEMPLATE_TYPE: closure_14, MAX_BULK_ROLE_MEMBERS_ADD: closure_15 } = GuildSettingsRoleConstants);
const Constants = fn(1074);
({ MAX_ROLE_LENGTH: closure_16, DEFAULT_ROLE_COLOR: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = { titleContainer: { flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%" }, title: { textAlign: "center", flex: 1 } };
const createStyles = fn(4640);
let obj = { container: { marginTop: fn(5770).NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: nativeDefault.space.PX_16 }, sceneHeader: { alignItems: "center", marginBottom: 8, marginHorizontal: 16 }, sceneSubtitle: { textAlign: "center", paddingTop: 8, maxWidth: 400 }, sceneContent: { flex: 1 }, sceneInner: null, colorTrailing: null, colorBlock: null, sceneFooter: null, nextButton: null, nextButtonFloating: null };
let obj3 = { marginTop: fn(5770).NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: nativeDefault.space.PX_16 };
obj.sceneInner = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.colorTrailing = { flexDirection: "row", alignItems: "center" };
obj.colorBlock = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
let obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.sceneFooter = { paddingBottom: 8, paddingHorizontal: nativeDefault.space.PX_16 };
obj.nextButton = { width: "100%", paddingHorizontal: 16, paddingVertical: 16 };
let obj5 = { paddingBottom: 8, paddingHorizontal: nativeDefault.space.PX_16 };
obj.nextButtonFloating = { paddingVertical: 0, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_24 = createStyles.createStyles(obj);
let obj7 = { STEP_DISPLAY: "STEP_DISPLAY", STEP_PERMISSIONS: "STEP_PERMISSIONS", STEP_MEMBERS: "STEP_MEMBERS" };
let closure_26 = { [obj7.STEP_DISPLAY]: "Role Display", [obj7.STEP_PERMISSIONS]: "Role Permissions", [obj7.STEP_MEMBERS]: "Role Members", FLOW_INITIALIZED: "Flow Initialized", FLOW_DISMISSED: "Flow Dismissed", FLOW_COMPLETED: "Flow Completed" };
let closure_27 = noop.memo((step) => {
  const keys = Object.keys(obj7);
  const obj = { style: closure_23.titleContainer, children: null };
  const sum = keys.indexOf(step.step) + 1;
  const obj2 = { style: closure_23.title, accessibilityRole: "header", variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t["8v/u0i"], { number: sum, total: keys.length });
  obj.children = __initData(Text_Text.Text, obj2);
  return __initData(React5, obj);
});
const screens = {
  [obj7.STEP_DISPLAY]: {
    fullscreen: true,
    render() {
      return __initData(RoleCreateScene, {});
    }
  },
  [obj7.STEP_PERMISSIONS]: {
    fullscreen: true,
    render() {
      return __initData(RolePermissionTemplate, {});
    }
  },
  [obj7.STEP_MEMBERS]: {
    fullscreen: true,
    render() {
      return __initData(RoleMembers, {});
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx");

export default function GuildSettingsRoleCreateModal() {
  const items = [GuildSettingsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => props.getProps().guild);
  _modDef38(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  useMountEffectDefault(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: constants.FLOW_INITIALIZED, to_step: constants[obj7.STEP_DISPLAY], skip: false };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(stateFromStores.id));
    obj.track(constants.USER_FLOW_TRANSITION, obj2);
  });
  return closure_21(stateFromStores(7114).Navigator, { screens, initialRouteName: obj7.STEP_DISPLAY });
};