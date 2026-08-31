// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import useMountLayoutEffectDefault from "../../../../hooks/useMountEffect.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { isGuildOwner } from "../../../../records/GuildRecord.tsx";
import closure_10 from "../../../../stores/GuildRoleStore.tsx";
import closure_11 from "../../../../stores/UserStore.tsx";
import closure_12 from "../../GuildSettingsStore.tsx";
import title from "../GuildSettingsRoleConstants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function RoleCreateScene() {
  const tmp = callback5();
  let obj = navigation(first[22]);
  navigation = obj.useNavigation();
  obj1 = navigation(first[19]);
  const items = [closure_12];
  const stateFromStores = obj1.useStateFromStores(items, () => props.getProps().guild);
  stateFromStores(first[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  const intl = navigation(first[17]).intl;
  const tmp7 = callback2(callback.useState(intl.string(navigation(first[17]).t.QBMHvB)), 2);
  const str = tmp7[0];
  const tmp8 = callback2(callback.useState(closure_17), 2);
  first = tmp8[0];
  callback = tmp8[1];
  [tmp11, closure_5] = callback2(callback.useState(false), 2);
  let nextButtonFloating = stateFromStores(first[23])();
  const items1 = [navigation, stateFromStores];
  const layoutEffect = callback.useLayoutEffect(() => {
    let obj = {
      headerLeft: navigation(first[24]).getHeaderCloseButton(() => {
        let obj = closure_1_1(closure_1_3[14]);
        obj = { flow_type: closure_1_19.GUILD_ROLE_CREATION_MODAL, from_step: closure_1_26[closure_1_25.STEP_DISPLAY], to_step: closure_1_26.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(closure_1_0(closure_1_3[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(closure_1_18.USER_FLOW_TRANSITION, obj);
        const obj3 = closure_1_0(closure_1_3[15]);
        closure_1_1(closure_1_3[18]).close();
      }),
      headerTitle() {
        return callback(closure_27, { step: constants.STEP_DISPLAY });
      }
    };
    navigation.setOptions(obj);
  }, items1);
  callback = callback.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items2 = [first, stateFromStores.id, str, navigation];
  const items3 = [first, callback];
  const callback1 = callback.useCallback(callback(function*() {
    closure_1 = tmp3;
    closure_0 = tmp3;
    c2 = 1;
    closure_1_5(true);
    if (dependencyMap === closure_1_17) {
      const num5 = 0;
    }
    yield closure_1_1(5425).createRole(closure_1_1.id, c2, num5);
    if (1 === tmp7) {
      c2 = 0;
      callback(false);
      obj1 = closure_1_0(4163);
      const result = obj1.roleCreateFailedToast();
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const result1 = closure_1_12.addConditionalChangeListener(() => {
        let obj = closure_1_12;
        const props = closure_1_12.getProps();
        ({ guild, selectedRoleId } = props);
        if (null != guild) {
          if (null != selectedRoleId) {
            const role = closure_1_10.getRole(guild.id, selectedRoleId);
          }
        }
        if (null != selectedRoleId) {
          if (null != role) {
            if (null != guild) {
              tmp3(4163).roleCreatedToast();
              const obj5 = tmp3(4163);
              const tmp13 = tmp3;
              tmp3(17154).setRoleJustCreated(true);
              let STEP_MEMBERS = closure_1_25.STEP_PERMISSIONS;
              const guild2 = obj.getProps().guild;
              tmp32(38)(null != guild2, "shouldSkipPermissions: Guild cannot be null");
              const currentUser = closure_1_11.getCurrentUser();
              const tmp23 = closure_1_9(guild2, currentUser);
              const obj6 = tmp3(17154);
              const tmp18 = tmp32;
              obj = { permission: null, user: null, context: null };
              obj[0] = closure_1_20.ADMINISTRATOR;
              obj[1] = currentUser;
              obj[2] = guild2;
              let tmp4 = !tmp23;
              if (!tmp23) {
                tmp4 = !obj7.can(obj);
              }
              if (tmp4) {
                STEP_MEMBERS = tmp17.STEP_MEMBERS;
              }
              tmp3.push(STEP_MEMBERS);
              obj7 = v0(4096);
              obj = { flow_type: null, from_step: null, to_step: null, skip: false };
              obj[0] = closure_1_19.GUILD_ROLE_CREATION_MODAL;
              obj[1] = closure_1_26[closure_1_25.STEP_DISPLAY];
              obj[2] = closure_1_26[STEP_MEMBERS];
              const tmp18Result = tmp18(698);
              const merged = Object.assign(tmp13(4668).collectGuildAnalyticsMetadata(guild.id));
              tmp18Result.track(closure_1_18.USER_FLOW_TRANSITION, obj);
              return false;
            }
          }
        }
        return true;
      });
      c2 = 0;
    }
    c2 = 0;
    return arg1;
  }), items2);
  obj = { title: null, subtitle: null, children: null };
  callback2 = callback.useCallback(() => {
    closure_1_8.dismiss();
    let obj = stateFromStores(first[28]);
    obj = { color: first, onSelect: callback };
    obj.openLazy(navigation(first[30])(first[29], first.paths), "RoleColorPicker", obj);
  }, items3);
  const intl2 = navigation(first[17]).intl;
  obj[0] = intl2.string(navigation(first[17]).t["8pxAPp"]);
  const intl3 = navigation(first[17]).intl;
  obj[1] = intl3.string(navigation(first[17]).t["JubQz/"]);
  obj = { spacing: stateFromStores(first[13]).space.PX_24, style: tmp.sceneInner, children: null };
  obj1 = { label: null, description: null, required: true, value: null, onChange: null, maxLength: null, autoFocus: true, autoComplete: "off" };
  const intl4 = navigation(first[17]).intl;
  obj1[0] = intl4.string(navigation(first[17]).t.dLbkBk);
  const intl5 = navigation(first[17]).intl;
  obj1[1] = intl5.string(navigation(first[17]).t.m4j44b);
  obj1[3] = str;
  obj1[4] = tmp7[1];
  obj1[5] = closure_16;
  const items4 = [callback3(navigation(first[32]).TextInput, obj1), ];
  const obj2 = { helperText: null, hasIcons: false, children: null };
  const intl6 = navigation(first[17]).intl;
  obj2[0] = intl6.string(navigation(first[17]).t["9TMIgc"]);
  let obj3 = { label: null, onPress: null, arrow: true, trailing: null };
  const intl7 = navigation(first[17]).intl;
  obj3[0] = intl7.string(navigation(first[17]).t["5NC5YW"]);
  obj3[1] = callback2;
  obj4 = { style: tmp.colorTrailing, children: null };
  const items5 = [callback3(stateFromStores(first[35]), { color: first, style: tmp.colorBlock }), ];
  let obj6 = { variant: "text-sm/medium", children: null };
  let obj5 = { color: first, style: tmp.colorBlock };
  const tmp10 = callback2(callback.useState(false), 2);
  const tmp16 = callback4;
  const tmp17 = ModalScene;
  const tmp19 = closure_7;
  obj6[1] = navigation(first[36]).int2hex(first);
  items5[1] = callback3(navigation(first[16]).Text, obj6);
  obj4[1] = items5;
  obj3[3] = callback4(closure_7, obj4);
  obj2[2] = callback3(navigation(first[34]).TableRow, obj3);
  items4[1] = callback3(navigation(first[33]).TableRowGroup, obj2);
  obj[2] = items4;
  const items6 = [callback4(navigation(first[31]).Stack, obj), ];
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
  obj8[1] = tmp11;
  const intl8 = tmp2(tmp3[17]).intl;
  obj8[2] = intl8.string(navigation(first[17]).t.CumH4u);
  obj8[3] = callback1;
  obj7[1] = callback3(navigation(first[37]).Button, obj8);
  items6[1] = callback3(tmp19, obj7);
  obj[2] = items6;
  return tmp16(tmp17, obj);
}
function RolePermissionTemplate() {
  let obj = guild(callback[22]);
  const navigation = obj.useNavigation();
  guild = undefined;
  let stateFromStores;
  obj1 = guild(callback[19]);
  const items = [closure_12];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => props.getProps());
  guild = stateFromStoresObject.guild;
  stateFromStores = stateFromStoresObject.selectedRoleId;
  stateFromStores(callback[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  let obj2 = guild(callback[19]);
  const items1 = [closure_10];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let role;
    if (null != stateFromStores) {
      role = closure_1_10.getRole(guild.id, tmp);
    }
    return role;
  });
  stateFromStores(callback[20])(null != stateFromStores, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  const items2 = [navigation, guild.id];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let obj = {
      headerLeft: guild(callback[24]).getHeaderCloseButton(() => {
        let obj = closure_1_1(closure_1_3[14]);
        obj = { flow_type: closure_1_19.GUILD_ROLE_CREATION_MODAL, from_step: closure_1_26[closure_1_25.STEP_PERMISSIONS], to_step: closure_1_26.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(closure_1_0(closure_1_3[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(closure_1_18.USER_FLOW_TRANSITION, obj);
        const obj3 = closure_1_0(closure_1_3[15]);
        closure_1_1(closure_1_3[18]).close();
      }),
      headerTitle() {
        return callback(closure_27, { step: constants.STEP_PERMISSIONS });
      }
    };
    guild.setOptions(obj);
  }, items2);
  const items3 = [guild.id, navigation, stateFromStores.id];
  callback = importAllResult.useCallback((arg0) => {
    let obj = stateFromStores(callback[25]);
    const result = obj.updateRolePermissions(guild.id, stateFromStores.id, arg0);
    guild.push(closure_1_25.STEP_MEMBERS);
    obj = { flow_type: closure_1_19.GUILD_ROLE_CREATION_MODAL, from_step: closure_1_26[closure_1_25.STEP_PERMISSIONS], to_step: closure_1_26[closure_1_25.STEP_MEMBERS], skip: false };
    const obj2 = stateFromStores(callback[14]);
    const merged = Object.assign(guild(callback[15]).collectGuildAnalyticsMetadata(guild.id));
    obj2.track(closure_1_18.USER_FLOW_TRANSITION, obj);
  }, items3);
  const items4 = [callback];
  obj = { hasSkipButton: false, title: null, subtitle: null, children: null };
  const callback1 = importAllResult.useCallback(() => {
    callback(closure_1_13[closure_1_14].permissions);
  }, items4);
  const intl = guild(callback[17]).intl;
  obj[1] = intl.string(guild(callback[17]).t.p0IwNA);
  const intl2 = guild(callback[17]).intl;
  obj[2] = intl2.string(guild(callback[17]).t.G529Hk);
  obj = { onSelect: callback, location: constants.GUILD_ROLE_CREATION_MODAL, guildId: guild.id };
  const items5 = [callback3(stateFromStores(callback[38]), obj), ];
  obj1 = { style: callback5().sceneFooter, children: null };
  obj2 = { text: null, onPress: null };
  const intl3 = guild(callback[17]).intl;
  obj2[0] = intl3.string(guild(callback[17]).t.CJm5V5);
  obj2[1] = callback1;
  obj1[1] = callback3(guild(callback[37]).Button, obj2);
  items5[1] = callback3(closure_7, obj1);
  obj[3] = items5;
  return callback4(ModalScene, obj);
}
function RoleMembers() {
  const tmp = callback5();
  let obj = guild(first[22]);
  const navigation = obj.useNavigation();
  guild = undefined;
  let stateFromStores;
  obj1 = guild(first[19]);
  const items = [closure_12];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => props.getProps());
  guild = stateFromStoresObject.guild;
  stateFromStores = stateFromStoresObject.selectedRoleId;
  stateFromStores(first[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  let obj2 = guild(first[19]);
  const items1 = [closure_10];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let role;
    if (null != stateFromStores) {
      role = closure_1_10.getRole(guild.id, tmp);
    }
    return role;
  });
  stateFromStores(first[20])(null != stateFromStores, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  stateFromStores(first[20])(null != stateFromStores, "Role cannot be null");
  const items2 = [navigation, guild.id];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let obj = {
      headerLeft: guild(first[24]).getHeaderCloseButton(() => {
        let obj = closure_1_1(closure_1_3[14]);
        obj = { flow_type: closure_1_19.GUILD_ROLE_CREATION_MODAL, from_step: closure_1_26[closure_1_25.STEP_MEMBERS], to_step: closure_1_26.FLOW_DISMISSED, skip: false };
        const merged = Object.assign(closure_1_0(closure_1_3[15]).collectGuildAnalyticsMetadata(id.id));
        obj.track(closure_1_18.USER_FLOW_TRANSITION, obj);
        const obj3 = closure_1_0(closure_1_3[15]);
        closure_1_1(closure_1_3[18]).close();
      }),
      headerTitle() {
        return callback(closure_27, { step: constants.STEP_MEMBERS });
      }
    };
    return guild.setOptions(obj);
  }, items2);
  let nextButtonFloating = stateFromStores(first[23])();
  const items3 = [stateFromStores.id];
  const callback = importAllResult.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(stateFromStores.id);
  }, items3);
  let obj3 = guild(first[39]);
  const guildMembers = obj3.useGuildMembers(guild.id, callback);
  const tmp13 = callback2(importAllResult.useState({}), 2);
  first = tmp13[0];
  const tmp15 = callback2(importAllResult.useState(false), 2);
  closure_4 = tmp16;
  const items4 = [tmp15[1], guild.id, stateFromStores.id, first];
  const items5 = [first];
  const callback1 = importAllResult.useCallback(() => {
    const keys = Object.keys(first);
    if (keys.length > 0) {
      callback(true);
      let obj = stateFromStores(first[40]);
      obj.bulkAddMemberRoles(guild.id, stateFromStores.id, keys);
      callback(false);
    }
    obj = { flow_type: closure_1_19.GUILD_ROLE_CREATION_MODAL, from_step: closure_1_26[closure_1_25.STEP_MEMBERS], to_step: closure_1_26.FLOW_COMPLETED, skip: false };
    const obj2 = stateFromStores(first[14]);
    const merged = Object.assign(guild(first[15]).collectGuildAnalyticsMetadata(guild.id));
    obj2.track(closure_1_18.USER_FLOW_TRANSITION, obj);
    obj4 = guild(first[15]);
    stateFromStores(first[18]).close();
  }, items4);
  const memo = importAllResult.useMemo(() => Object.keys(first).length, items5);
  obj = { hasSkipButton: !nextButtonFloating, title: null, subtitle: null, children: null };
  const intl = guild(first[17]).intl;
  obj[1] = intl.string(guild(first[17]).t["+gWHtA"]);
  const intl2 = guild(first[17]).intl;
  obj = { numMembers: closure_15 };
  obj[2] = intl2.formatToPlainString(guild(first[17]).t.yZW3oh, obj);
  obj1 = { autoFocusSearch: false, guild, members: guildMembers, pendingAdditions: first, role: stateFromStores, setPendingAdditions: tmp13[1], maxCount: closure_15 };
  const items6 = [callback3(guild(first[41]).AddMembersBody, obj1), ];
  const items7 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  obj2 = { style: items7, children: null };
  items7[1] = nextButtonFloating;
  obj3 = { loading: tmp15[0], text: null, onPress: null, disabled: null };
  const intl3 = tmp2(tmp3[17]).intl;
  obj3[1] = intl3.string(guild(first[17]).t.XcPHfw);
  obj3[2] = callback1;
  obj3[3] = 0 === memo || memo > closure_15;
  obj2[1] = callback3(guild(first[37]).Button, obj3);
  items6[1] = callback3(closure_7, obj2);
  obj[3] = items6;
  return closure_22(ModalScene, obj);
}
function ModalScene(hasSkipButton) {
  hasSkipButton = hasSkipButton.hasSkipButton;
  let navigation;
  let stateFromStores;
  let isScreenReaderEnabled;
  let ref;
  ({ children, title, subtitle } = hasSkipButton);
  let tmp = callback5();
  const insets = stateFromStores(ref[42])().insets;
  let obj = navigation(ref[22]);
  navigation = obj.useNavigation();
  obj1 = navigation(ref[19]);
  const items = [closure_12];
  stateFromStores = obj1.useStateFromStores(items, () => props.getProps().guild);
  stateFromStores(ref[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  let obj2 = navigation(ref[43]);
  isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  ref = importAllResult.useRef(null);
  const items1 = [isScreenReaderEnabled];
  const effect = importAllResult.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = navigation(ref[44]);
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items1);
  const items2 = [navigation, stateFromStores.id];
  if (null == navigator) {
    let tmp13Result = callback3(tmp3(tmp2[45]).SceneLoadingIndicator, {});
  } else {
    obj = { style: null, children: null };
    obj = {};
    let merged = Object.assign(tmp.container);
    obj.paddingTop = insets.top;
    obj.paddingBottom = tmp.container.paddingBottom + insets.bottom;
    obj[0] = obj;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.sceneHeader;
    obj2 = { ref: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = ref;
    obj2[3] = title;
    const items3 = [callback3(tmp3(tmp2[16]).Heading, obj2), ];
    let obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.sceneSubtitle;
    obj3[3] = subtitle;
    items3[1] = callback3(tmp3(tmp2[16]).Text, obj3);
    obj1[1] = items3;
    const items4 = [callback4(closure_7, obj1), , ];
    obj4 = { style: null, children: null };
    obj4[0] = tmp.sceneContent;
    obj4[1] = children;
    items4[1] = callback3(closure_7, obj4);
    if (hasSkipButton) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.sceneFooter;
      let obj6 = { text: null, onPress: null };
      const intl = tmp3(tmp2[17]).intl;
      obj6[0] = intl.string(tmp3(tmp2[17]).t.CJm5V5);
      obj6[1] = tmp10;
      obj5[1] = tmp17(tmp3(tmp2[37]).Button, obj6);
      hasSkipButton = tmp17(tmp14, obj5);
    }
    items4[2] = hasSkipButton;
    obj[1] = items4;
    tmp13Result = callback4(tmp14, obj);
    const tmp13 = callback4;
  }
  return tmp13Result;
}
({ View: error, Keyboard: closure_8 } = get_ActivityIndicator);
({ PermissionTemplates: map1, DEFAULT_TEMPLATE_TYPE: closure_14, MAX_BULK_ROLE_MEMBERS_ADD: closure_15 } = title);
({ MAX_ROLE_LENGTH: closure_16, DEFAULT_ROLE_COLOR: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = ME);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = { titleContainer: { flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%" }, title: { textAlign: "center", flex: 1 } };
let obj = { container: null, sceneHeader: null, sceneSubtitle: null, sceneContent: null, sceneInner: null, colorTrailing: null, colorBlock: null, sceneFooter: null, nextButton: null, nextButtonFloating: null };
obj = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { alignItems: "center", marginBottom: 8, marginHorizontal: 16 };
obj[2] = { textAlign: "center", paddingTop: 8, maxWidth: 400 };
obj[3] = { flex: 1 };
createCacheKey = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[4] = createCacheKey;
obj[5] = { flexDirection: "row", alignItems: "center" };
obj[6] = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
obj[7] = { paddingBottom: 8, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[8] = { width: "100%", paddingHorizontal: 16, paddingVertical: 16 };
let obj2 = { paddingBottom: 8, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[9] = { paddingVertical: 0, paddingTop: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let closure_24 = createCacheKey.createStyles(obj);
let obj4 = { STEP_DISPLAY: "STEP_DISPLAY", STEP_PERMISSIONS: "STEP_PERMISSIONS", STEP_MEMBERS: "STEP_MEMBERS" };
let closure_26 = { [obj4.STEP_DISPLAY]: "Role Display", [obj4.STEP_PERMISSIONS]: "Role Permissions", [obj4.STEP_MEMBERS]: "Role Members", FLOW_INITIALIZED: "Flow Initialized", FLOW_DISMISSED: "Flow Dismissed", FLOW_COMPLETED: "Flow Completed" };
let closure_27 = importAllResult.memo((step) => {
  const keys = Object.keys(obj4);
  let obj = { style: closure_23.titleContainer, children: null };
  const sum = keys.indexOf(step.step) + 1;
  obj = { style: closure_23.title, accessibilityRole: "header", variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.format(getSystemLocale.t["8v/u0i"], { number: sum, total: keys.length });
  obj[1] = callback3(Text.Text, obj);
  return callback3(closure_7, obj);
});
let closure_32 = {
  [obj4.STEP_DISPLAY]: {
    fullscreen: true,
    render() {
      return callback3(RoleCreateScene, {});
    }
  },
  [obj4.STEP_PERMISSIONS]: {
    fullscreen: true,
    render() {
      return callback3(RolePermissionTemplate, {});
    }
  },
  [obj4.STEP_MEMBERS]: {
    fullscreen: true,
    render() {
      return callback3(RoleMembers, {});
    }
  }
};
let obj3 = { paddingVertical: 0, paddingTop: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let obj5 = {
  fullscreen: true,
  render() {
    return callback3(RoleCreateScene, {});
  }
};
let obj6 = {
  fullscreen: true,
  render() {
    return callback3(RolePermissionTemplate, {});
  }
};
let obj7 = {
  fullscreen: true,
  render() {
    return callback3(RoleMembers, {});
  }
};
let result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx");

export default function GuildSettingsRoleCreateModal() {
  let obj = stateFromStores(589);
  const items = [closure_12];
  stateFromStores = obj.useStateFromStores(items, () => props.getProps().guild);
  _modDef38(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  useMountLayoutEffectDefault(() => {
    let obj = closure_1_1(closure_1_3[14]);
    obj = { flow_type: closure_1_19.GUILD_ROLE_CREATION_MODAL, from_step: closure_1_26.FLOW_INITIALIZED, to_step: closure_1_26[closure_1_25.STEP_DISPLAY], skip: false };
    const merged = Object.assign(stateFromStores(closure_1_3[15]).collectGuildAnalyticsMetadata(stateFromStores.id));
    obj.track(closure_1_18.USER_FLOW_TRANSITION, obj);
  });
  obj = { screens: closure_32, initialRouteName: obj4.STEP_DISPLAY };
  return callback3(stateFromStores(5976).Navigator, obj);
};