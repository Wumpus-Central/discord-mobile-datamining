// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../../app_analytics/AppAnalyticsUtils.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
function RoleCreateScene() {
  const tmp = closure_24();
  navigation = navigation(color[24]).useNavigation();
  const tmp5 = closure_28();
  importDefault = tmp5;
  const intl = navigation(color[18]).intl;
  const tmp6 = _slicedToArray(onSelect.useState(intl.string(navigation(color[18]).t.QBMHvB)), 2);
  [color, asyncGeneratorStep] = onSelect.useState(closure_17);
  let obj = navigation(color[24]);
  [tmp10, _slicedToArray] = onSelect.useState(false);
  let nextButtonFloating = require("useKeyboardIsOpen")();
  const items = [navigation, tmp5];
  const layoutEffect = onSelect.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
        const obj = closure_1(first[14]);
        const obj2 = {
          flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
          from_step: constants4[constants3.STEP_DISPLAY],
          to_step: constants4.FLOW_DISMISSED,
          skip: false,
        };
        const merged = Object.assign(navigation(first[15]).collectGuildAnalyticsMetadata(closure_1_1.id));
        obj.track(constants.USER_FLOW_TRANSITION, obj2);
        const obj3 = navigation(first[15]);
        closure_1(first[20]).close();
      }),
      headerTitle() {
        return closure_1_21(closure_1_27, { step: constants.STEP_DISPLAY });
      },
    };
    navigation.setOptions(obj);
  }, items);
  onSelect = onSelect.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const items1 = [color, tmp5.id, tmp6[0], navigation];
  const items2 = [color, onSelect];
  const callback1 = onSelect.useCallback(
    asyncGeneratorStep(async () => {
      _slicedToArray(true);
      let num5 = first;
      if (first === closure_1_17) {
        num5 = 0;
      }
      await tmp3(6097).createRole(tmp3.id, str, num5);
      if (1 === tmp7) {
        c2 = 0;
        closure_129_5(false);
        const result = tmp3(4808).roleCreateFailedToast();
        c4 = 3;
        tmp3(4808);
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
                closure_0(4808).roleCreatedToast();
                const obj5 = closure_0(4808);
                closure_0(18344).setRoleJustCreated(true);
                let STEP_MEMBERS = constants4.STEP_PERMISSIONS;
                const guild2 = closure_2_12.getProps().guild;
                closure_1(38)(null != guild2, "shouldSkipPermissions: Guild cannot be null");
                currentUser = currentUser.getCurrentUser();
                const tmp23 = closure_2_9(guild2, currentUser);
                const obj6 = closure_0(18344);
                const obj2 = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild2 };
                let tmp4 = !tmp23;
                if (!tmp23) {
                  tmp4 = !obj7.can(obj2);
                }
                if (tmp4) {
                  STEP_MEMBERS = constants4.STEP_MEMBERS;
                }
                closure_1_0.push(STEP_MEMBERS);
                obj7 = c2(4755);
                const obj3 = {
                  flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
                  from_step: dependencyMap2[constants4.STEP_DISPLAY],
                  to_step: dependencyMap2[STEP_MEMBERS],
                  skip: false,
                };
                const tmp18Result = closure_1(1265);
                const merged = Object.assign(closure_0(5107).collectGuildAnalyticsMetadata(guild.id));
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
    }),
    items1,
  );
  let obj2 = { title: null, subtitle: null, children: null };
  const callback2 = onSelect.useCallback(() => {
    closure_2_8.dismiss();
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16724, dependencyMap.paths), "RoleColorPicker", {
      color,
      onSelect,
    });
  }, items2);
  const intl2 = navigation(color[18]).intl;
  obj2.title = intl2.string(navigation(color[18]).t["8pxAPp"]);
  const intl3 = navigation(color[18]).intl;
  obj2.subtitle = intl3.string(navigation(color[18]).t["JubQz/"]);
  let obj3 = { spacing: require("native").space.PX_24, style: tmp.sceneInner, children: null };
  const obj4 = {
    label: null,
    description: null,
    required: true,
    value: null,
    onChange: null,
    maxLength: null,
    autoFocus: true,
    autoComplete: "off",
  };
  const intl4 = navigation(color[18]).intl;
  obj4.label = intl4.string(navigation(color[18]).t.dLbkBk);
  const intl5 = navigation(color[18]).intl;
  obj4.description = intl5.string(navigation(color[18]).t.m4j44b);
  obj4.value = tmp6[0];
  obj4.onChange = tmp6[1];
  obj4.maxLength = maxLength;
  const items3 = [closure_21(navigation(color[34]).TextInput, obj4)];
  let obj5 = { helperText: null, hasIcons: false, children: null };
  const intl6 = navigation(color[18]).intl;
  obj5.helperText = intl6.string(navigation(color[18]).t["9TMIgc"]);
  let obj6 = { label: null, onPress: null, arrow: true, trailing: null };
  const intl7 = navigation(color[18]).intl;
  obj6.label = intl7.string(navigation(color[18]).t["5NC5YW"]);
  obj6.onPress = callback2;
  obj7 = { style: tmp.colorTrailing, children: null };
  const items4 = [closure_21(require("ColorBlock"), { color, style: tmp.colorBlock })];
  const obj9 = { variant: "text-sm/medium", children: null };
  const obj8 = { color, style: tmp.colorBlock };
  const tmp9 = _slicedToArray(onSelect.useState(false), 2);
  obj9.children = navigation(color[38]).int2hex(color);
  items4[1] = closure_21(navigation(color[19]).Text, obj9);
  obj7.children = items4;
  obj6.trailing = closure_22(closure_7, obj7);
  obj5.children = closure_21(navigation(color[36]).TableRow, obj6);
  items3[1] = closure_21(navigation(color[35]).TableRowGroup, obj5);
  obj3.children = items3;
  const items5 = [closure_22(navigation(color[33]).Stack, obj3)];
  const items6 = [tmp.nextButton];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  const obj11 = { style: items6, children: null };
  items6[1] = nextButtonFloating;
  const obj12 = { loading: tmp10, disabled: null, text: null, onPress: null };
  if (!tmp10) {
    tmp10 = "" === str.trim();
  }
  obj12.disabled = tmp10;
  const intl8 = tmp2(tmp3[18]).intl;
  obj12.text = intl8.string(navigation(color[18]).t.CumH4u);
  obj12.onPress = callback1;
  obj11.children = closure_21(navigation(color[39]).Button, obj12);
  items5[1] = closure_21(closure_7, obj11);
  obj2.children = items5;
  return closure_22(closure_33, obj2);
}
get_ActivityIndicator = fn(17);
({ View: closure_7, Keyboard: closure_8 } = get_ActivityIndicator);
const isGuildOwner = fn(2083).isGuildOwner;
const GuildSettingsRoleConstants = fn(18347);
({
  PermissionTemplates: map1,
  DEFAULT_TEMPLATE_TYPE: closure_14,
  MAX_BULK_ROLE_MEMBERS_ADD: closure_15,
} = GuildSettingsRoleConstants);
const Constants = fn(1085);
({
  MAX_ROLE_LENGTH: closure_16,
  DEFAULT_ROLE_COLOR: closure_17,
  AnalyticEvents: closure_18,
  AnalyticsSections: closure_19,
  Permissions: closure_20,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = {
  titleContainer: { flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%" },
  title: { textAlign: "center", flex: 1 },
};
const createStyles = fn(5092);
let obj = {
  container: { marginTop: fn(6258).NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: nativeDefault.space.PX_16 },
  sceneHeader: { alignItems: "center", marginBottom: 8, marginHorizontal: 16 },
  sceneSubtitle: { textAlign: "center", paddingTop: 8, maxWidth: 400 },
  sceneContent: { flex: 1 },
  sceneInner: null,
  colorTrailing: null,
  colorBlock: null,
  sceneFooter: null,
  nextButton: null,
  nextButtonFloating: null,
};
let obj3 = { marginTop: fn(6258).NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: nativeDefault.space.PX_16 };
obj.sceneInner = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.colorTrailing = { flexDirection: "row", alignItems: "center" };
obj.colorBlock = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
let obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.sceneFooter = { paddingBottom: 8, paddingHorizontal: nativeDefault.space.PX_16 };
obj.nextButton = { width: "100%", paddingHorizontal: 16, paddingVertical: 16 };
let obj5 = { paddingBottom: 8, paddingHorizontal: nativeDefault.space.PX_16 };
obj.nextButtonFloating = {
  paddingVertical: 0,
  paddingTop: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
let closure_24 = createStyles.createStyles(obj);
let obj7 = { STEP_DISPLAY: "STEP_DISPLAY", STEP_PERMISSIONS: "STEP_PERMISSIONS", STEP_MEMBERS: "STEP_MEMBERS" };
let closure_26 = {
  [obj7.STEP_DISPLAY]: "Role Display",
  [obj7.STEP_PERMISSIONS]: "Role Permissions",
  [obj7.STEP_MEMBERS]: "Role Members",
  FLOW_INITIALIZED: "Flow Initialized",
  FLOW_DISMISSED: "Flow Dismissed",
  FLOW_COMPLETED: "Flow Completed",
};
let ReactCompilerGating = fn(558);
let closure_27 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SceneTitle(step) {
        const cResult = c.c(5);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const _Object = Object;
          const keys = Object.keys(obj7);
          cResult[0] = keys;
          let first = keys;
        } else {
          first = cResult[0];
        }
        const sum = first.indexOf(step.step) + 1;
        if (cResult[1] !== sum) {
          const intl = util.intl;
          const obj2 = { number: sum, total: first.length };
          const formatResult = intl.format(util.t["8v/u0i"], obj2);
          cResult[1] = sum;
          cResult[2] = formatResult;
          let tmp7 = formatResult;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] !== tmp7) {
          const obj3 = { style: closure_23.titleContainer, children: null };
          const obj4 = {
            style: closure_23.title,
            accessibilityRole: "header",
            variant: "heading-md/extrabold",
            color: "mobile-text-heading-primary",
            children: tmp7,
          };
          obj3.children = guild(Text_Text.Text, obj4);
          const tmp13 = guild(React5, obj3);
          cResult[3] = tmp7;
          cResult[4] = tmp13;
          let tmp9 = tmp13;
        } else {
          tmp9 = cResult[4];
        }
        return tmp9;
      }
    : function SceneTitle(step) {
        const keys = Object.keys(obj7);
        const obj = { style: closure_23.titleContainer, children: null };
        const sum = keys.indexOf(step.step) + 1;
        const obj2 = {
          style: closure_23.title,
          accessibilityRole: "header",
          variant: "heading-md/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = util.intl;
        obj2.children = intl.format(util.t["8v/u0i"], { number: sum, total: keys.length });
        obj.children = guild(Text_Text.Text, obj2);
        return guild(React5, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildSettingsStoreGuild() {
      const cResult = c.c(2);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      _modDef38(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
      return stateFromStores;
    }
  : function useGuildSettingsStoreGuild() {
      const items = [GuildSettingsStore];
      const stateFromStores = initialize.useStateFromStores(items, () => props.getProps().guild);
      _modDef38(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
      return stateFromStores;
    };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildSettingsStoreGuildWithRole() {
      const cResult = guild(576).c(9);
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
      const obj = guild(576);
      const stateFromStoresObject = guild(504).useStateFromStoresObject(tmp4, tmp5);
      guild = stateFromStoresObject.guild;
      const selectedRoleId = stateFromStoresObject.selectedRoleId;
      selectedRoleId(38)(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildRoleStore];
        cResult[2] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === guild) {
        if (cResult[4] === selectedRoleId) {
          let tmp12 = cResult[5];
        }
        const stateFromStores = tmp(504).useStateFromStores(tmp10, tmp12);
        tmp8(38)(null != stateFromStores, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
        if (cResult[6] === guild) {
          if (cResult[7] === stateFromStores) {
            let tmp15 = cResult[8];
          }
          return tmp15;
        }
        const obj2 = { guild, role: stateFromStores };
        cResult[6] = guild;
        cResult[7] = stateFromStores;
        cResult[8] = obj2;
        tmp15 = obj2;
        const tmpResult2 = tmp(504);
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
      tmp8 = selectedRoleId;
      const tmpResult = guild(504);
    }
  : function useGuildSettingsStoreGuildWithRole() {
      const items = [GuildSettingsStore];
      const stateFromStoresObject = guild(504).useStateFromStoresObject(items, () => props.getProps());
      guild = stateFromStoresObject.guild;
      const selectedRoleId = stateFromStoresObject.selectedRoleId;
      selectedRoleId(38)(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
      const obj = guild(504);
      const items1 = [GuildRoleStore];
      let role = guild(504).useStateFromStores(items1, () => {
        let role;
        if (null != selectedRoleId) {
          role = GuildRoleStore.getRole(guild.id, tmp);
        }
        return role;
      });
      selectedRoleId(38)(null != role, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
      return { guild, role };
    };
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RolePermissionTemplate() {
      const cResult = navigation(576).c(24);
      const tmp4 = closure_24();
      let obj = navigation(576);
      navigation = navigation(1503).useNavigation();
      const tmp6 = closure_29();
      const role = tmp6.role;
      guild = tmp6.guild;
      if (cResult[0] === guild.id) {
        if (cResult[1] === navigation) {
          let tmp7 = cResult[2];
          let tmp8 = cResult[3];
        }
        const layoutEffect = noop.useLayoutEffect(tmp7, tmp8);
        if (cResult[4] === guild.id) {
          if (cResult[5] === navigation) {
            if (cResult[6] === role.id) {
              let tmp11 = cResult[7];
            }
            dependencyMap = tmp11;
            if (cResult[8] !== tmp11) {
              class R {
                constructor() {
                  tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                  return;
                }
              }
              cResult[8] = tmp11;
              cResult[9] = R;
            } else {
              class R {
                constructor() {
                  tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                  return;
                }
              }
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor() {
                  tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                  return;
                }
              }
              const stringResult = obj3.string(tmp(1126).t.p0IwNA);
              const intl = tmp(1126).intl;
              const stringResult1 = intl.string(tmp(1126).t.G529Hk);
              cResult[10] = stringResult;
              cResult[11] = stringResult1;
              let tmp15 = stringResult1;
              const tmp14 = stringResult;
            } else {
              class R {
                constructor() {
                  tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                  return;
                }
              }
              tmp15 = cResult[11];
            }
            if (cResult[12] === guild.id) {
              class R {
                constructor() {
                  tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                  return;
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor() {
                    tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                    return;
                  }
                }
                const stringResult2 = obj5.string(tmp(1126).t.CJm5V5);
                cResult[15] = stringResult2;
                const tmp23 = stringResult2;
              } else {
                class R {
                  constructor() {
                    tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                    return;
                  }
                }
              }
              if (cResult[16] !== R) {
                class R {
                  constructor() {
                    tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                    return;
                  }
                }
                const obj4 = { text: tmp23, onPress: R };
                const tmp26 = closure_21(tmp(5379).Button, obj4);
                cResult[16] = R;
                cResult[17] = tmp26;
              } else {
                class R {
                  constructor() {
                    tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                    return;
                  }
                }
              }
              if (cResult[18] === tmp4.sceneFooter) {
                class R {
                  constructor() {
                    tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                    return;
                  }
                }
                if (cResult[21] === tmp27) {
                  class R {
                    constructor() {
                      tmp = closure_3(PermissionTemplates[DEFAULT_TEMPLATE_TYPE].permissions);
                      return;
                    }
                  }
                  return tmp31;
                }
                const obj6 = { hasSkipButton: false, title: tmp14, subtitle: tmp15, children: null };
                const items = [tmp18, tmp27];
                obj6.children = items;
                const tmp34 = closure_22(closure_33, obj6);
                cResult[21] = tmp27;
                cResult[22] = tmp18;
                cResult[23] = tmp34;
                tmp31 = tmp34;
              }
              obj7 = { style: tmp4.sceneFooter, children: tmp25 };
              const tmp30 = closure_21(closure_7, obj7);
              cResult[18] = tmp4.sceneFooter;
              cResult[19] = tmp25;
              cResult[20] = tmp30;
            }
            const obj8 = { onSelect: tmp11, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id };
            const tmp22 = closure_21(role(18351), obj8);
            cResult[12] = guild.id;
            cResult[13] = tmp11;
            cResult[14] = tmp22;
          }
        }
        const fn2 = function o(arg0) {
          const result = GuildActionCreatorsDefault.updateRolePermissions(guild.id, role.id, arg0);
          navigation.push(obj7.STEP_MEMBERS);
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = {
            flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
            from_step: constants4[obj7.STEP_PERMISSIONS],
            to_step: constants4[obj7.STEP_MEMBERS],
            skip: false,
          };
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild.id));
          obj2.track(constants.USER_FLOW_TRANSITION, obj3);
        };
        cResult[4] = guild.id;
        cResult[5] = navigation;
        cResult[6] = role.id;
        cResult[7] = fn2;
        tmp11 = fn2;
      }
      const fn = function t() {
        let obj = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
            const obj = role(1265);
            const obj2 = {
              flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
              from_step: constants4[constants3.STEP_PERMISSIONS],
              to_step: constants4.FLOW_DISMISSED,
              skip: false,
            };
            const merged = Object.assign(navigation(5107).collectGuildAnalyticsMetadata(id.id));
            obj.track(constants.USER_FLOW_TRANSITION, obj2);
            const obj3 = navigation(5107);
            role(18345).close();
          }),
          headerTitle() {
            return closure_1_21(closure_1_27, { step: constants.STEP_PERMISSIONS });
          },
        };
        navigation.setOptions(obj);
      };
      const items1 = [navigation, guild.id];
      cResult[0] = guild.id;
      cResult[1] = navigation;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp8 = items1;
      tmp7 = fn;
      let obj2 = navigation(1503);
    }
  : function RolePermissionTemplate() {
      const tmp = closure_24();
      navigation = navigation(onSelect[24]).useNavigation();
      const tmp3 = closure_29();
      const role = tmp3.role;
      guild = tmp3.guild;
      const items = [navigation, guild.id];
      const layoutEffect = noop.useLayoutEffect(() => {
        let obj = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
            const obj = role(callback[14]);
            const obj2 = {
              flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
              from_step: constants4[constants3.STEP_PERMISSIONS],
              to_step: constants4.FLOW_DISMISSED,
              skip: false,
            };
            const merged = Object.assign(navigation(callback[15]).collectGuildAnalyticsMetadata(id.id));
            obj.track(constants.USER_FLOW_TRANSITION, obj2);
            const obj3 = navigation(callback[15]);
            role(callback[20]).close();
          }),
          headerTitle() {
            return closure_1_21(closure_1_27, { step: constants.STEP_PERMISSIONS });
          },
        };
        navigation.setOptions(obj);
      }, items);
      const items1 = [guild.id, navigation, role.id];
      onSelect = noop.useCallback((arg0) => {
        const result = GuildActionCreatorsDefault.updateRolePermissions(guild.id, role.id, arg0);
        navigation.push(obj7.STEP_MEMBERS);
        const obj2 = AnalyticsUtilsDefault;
        const obj3 = {
          flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
          from_step: constants4[obj7.STEP_PERMISSIONS],
          to_step: constants4[obj7.STEP_MEMBERS],
          skip: false,
        };
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild.id));
        obj2.track(constants.USER_FLOW_TRANSITION, obj3);
      }, items1);
      const items2 = [onSelect];
      let obj2 = { hasSkipButton: false, title: null, subtitle: null, children: null };
      const callback1 = noop.useCallback(() => {
        callback(dependencyMap2[closure_2_14].permissions);
      }, items2);
      const intl = navigation(onSelect[18]).intl;
      obj2.title = intl.string(navigation(onSelect[18]).t.p0IwNA);
      const intl2 = navigation(onSelect[18]).intl;
      obj2.subtitle = intl2.string(navigation(onSelect[18]).t.G529Hk);
      const items3 = [
        closure_21(role(onSelect[40]), { onSelect, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id }),
      ];
      const obj4 = { style: tmp.sceneFooter, children: null };
      const obj5 = { text: null, onPress: null };
      const intl3 = navigation(onSelect[18]).intl;
      obj5.text = intl3.string(navigation(onSelect[18]).t.CJm5V5);
      obj5.onPress = callback1;
      obj4.children = closure_21(navigation(onSelect[39]).Button, obj5);
      items3[1] = closure_21(closure_7, obj4);
      obj2.children = items3;
      return closure_22(closure_33, obj2);
    };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RoleMembers() {
      const cResult = navigation(first[17]).c(35);
      closure_24();
      let obj = navigation(first[17]);
      const tmp = navigation;
      navigation = navigation(first[24]).useNavigation();
      const tmp6 = closure_29();
      const role = tmp6.role;
      guild = tmp6.guild;
      role(first[22])(null != role, "Role cannot be null");
      if (cResult[0] === guild.id) {
        if (cResult[1] === navigation) {
          let tmp9 = cResult[2];
          let tmp10 = cResult[3];
        }
        const layoutEffect = noop.useLayoutEffect(tmp9, tmp10);
        tmp7(tmp2[25])();
        if (cResult[4] !== role.id) {
          class T {
            constructor(arg0) {
              roles = arg0.roles;
              return !roles.includes(role.id);
            }
          }
          cResult[4] = role.id;
          cResult[5] = T;
        } else {
          class T {
            constructor(arg0) {
              roles = arg0.roles;
              return !roles.includes(role.id);
            }
          }
        }
        const guildMembers = tmp(tmp2[41]).useGuildMembers(guild.id, T);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(arg0) {
              roles = arg0.roles;
              return !roles.includes(role.id);
            }
          }
          cResult[6] = tmp17;
        } else {
          class T {
            constructor(arg0) {
              roles = arg0.roles;
              return !roles.includes(role.id);
            }
          }
        }
        [first] = noop.useState(tmp17);
        const tmpResult = tmp(tmp2[41]);
        [r10076, asyncGeneratorStep] = noop.useState(false);
        if (cResult[7] === guild.id) {
          class T {
            constructor(arg0) {
              roles = arg0.roles;
              return !roles.includes(role.id);
            }
          }
        }
        const fn2 = function b() {
          const keys = Object.keys(first);
          if (keys.length > 0) {
            asyncGeneratorStep(true);
            GuildSettingsActionCreatorsDefault.bulkAddMemberRoles(guild.id, role.id, keys);
            asyncGeneratorStep(false);
          }
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = {
            flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
            from_step: constants4[obj7.STEP_MEMBERS],
            to_step: constants4.FLOW_COMPLETED,
            skip: false,
          };
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild.id));
          obj2.track(constants.USER_FLOW_TRANSITION, obj3);
          GuildSettingsRoleCreateModalActionCreatorsDefault.close();
        };
        cResult[7] = guild.id;
        cResult[8] = first;
        cResult[9] = role.id;
        cResult[10] = fn2;
        const tmp22 = _slicedToArray(noop.useState(false), 2);
      }
      const fn = function t() {
        let obj = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
            const obj = role(first[14]);
            const obj2 = {
              flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
              from_step: constants4[constants3.STEP_MEMBERS],
              to_step: constants4.FLOW_DISMISSED,
              skip: false,
            };
            const merged = Object.assign(navigation(first[15]).collectGuildAnalyticsMetadata(id.id));
            obj.track(constants.USER_FLOW_TRANSITION, obj2);
            const obj3 = navigation(first[15]);
            role(first[20]).close();
          }),
          headerTitle() {
            return closure_1_21(closure_1_27, { step: constants.STEP_MEMBERS });
          },
        };
        return navigation.setOptions(obj);
      };
      const items = [navigation, guild.id];
      cResult[0] = guild.id;
      cResult[1] = navigation;
      cResult[2] = fn;
      cResult[3] = items;
      tmp10 = items;
      tmp9 = fn;
      let obj2 = navigation(first[24]);
      tmp7 = role;
    }
  : function RoleMembers() {
      const tmp = closure_24();
      navigation = navigation(pendingAdditions[24]).useNavigation();
      const tmp5 = closure_29();
      const role = tmp5.role;
      guild = tmp5.guild;
      role(pendingAdditions[22])(null != role, "Role cannot be null");
      const items = [navigation, guild.id];
      const layoutEffect = noop.useLayoutEffect(() => {
        let obj = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
            const obj = role(first[14]);
            const obj2 = {
              flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
              from_step: constants4[constants3.STEP_MEMBERS],
              to_step: constants4.FLOW_DISMISSED,
              skip: false,
            };
            const merged = Object.assign(navigation(first[15]).collectGuildAnalyticsMetadata(id.id));
            obj.track(constants.USER_FLOW_TRANSITION, obj2);
            const obj3 = navigation(first[15]);
            role(first[20]).close();
          }),
          headerTitle() {
            return closure_1_21(closure_1_27, { step: constants.STEP_MEMBERS });
          },
        };
        return navigation.setOptions(obj);
      }, items);
      let nextButtonFloating = role(pendingAdditions[25])();
      const items1 = [role.id];
      const callback = noop.useCallback((roles) => {
        roles = roles.roles;
        return !roles.includes(role.id);
      }, items1);
      let obj = navigation(pendingAdditions[24]);
      const guildMembers = navigation(pendingAdditions[41]).useGuildMembers(guild.id, callback);
      const tmp10 = _slicedToArray(noop.useState({}), 2);
      pendingAdditions = tmp10[0];
      const tmp12 = _slicedToArray(noop.useState(false), 2);
      closure_4 = tmp13;
      const items2 = [tmp12[1], guild.id, role.id, pendingAdditions];
      const items3 = [pendingAdditions];
      const callback1 = noop.useCallback(() => {
        const keys = Object.keys(first);
        if (keys.length > 0) {
          closure_4(true);
          GuildSettingsActionCreatorsDefault.bulkAddMemberRoles(guild.id, role.id, keys);
          closure_4(false);
        }
        const obj2 = AnalyticsUtilsDefault;
        const obj3 = {
          flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
          from_step: constants4[obj7.STEP_MEMBERS],
          to_step: constants4.FLOW_COMPLETED,
          skip: false,
        };
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild.id));
        obj2.track(constants.USER_FLOW_TRANSITION, obj3);
        GuildSettingsRoleCreateModalActionCreatorsDefault.close();
      }, items2);
      const memo = noop.useMemo(() => Object.keys(first).length, items3);
      let obj3 = { hasSkipButton: !nextButtonFloating, title: null, subtitle: null, children: null };
      const intl = navigation(pendingAdditions[18]).intl;
      obj3.title = intl.string(navigation(pendingAdditions[18]).t["+gWHtA"]);
      const intl2 = navigation(pendingAdditions[18]).intl;
      obj3.subtitle = intl2.formatToPlainString(navigation(pendingAdditions[18]).t.yZW3oh, { numMembers: maxCount });
      const items4 = [
        closure_21(navigation(pendingAdditions[43]).AddMembersBody, {
          autoFocusSearch: false,
          guild,
          members: guildMembers,
          pendingAdditions,
          role,
          setPendingAdditions: tmp10[1],
          maxCount,
        }),
      ];
      const items5 = [tmp.nextButton];
      if (nextButtonFloating) {
        nextButtonFloating = tmp.nextButtonFloating;
      }
      const obj6 = { style: items5, children: null };
      items5[1] = nextButtonFloating;
      obj7 = { loading: tmp12[0], text: null, onPress: null, disabled: null };
      const intl3 = tmp2(tmp3[18]).intl;
      obj7.text = intl3.string(navigation(pendingAdditions[18]).t.XcPHfw);
      obj7.onPress = callback1;
      obj7.disabled = 0 === memo || memo > maxCount;
      obj6.children = closure_21(navigation(pendingAdditions[39]).Button, obj7);
      items4[1] = closure_21(closure_7, obj6);
      obj3.children = items4;
      return closure_22(closure_33, obj3);
    };
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ModalScene(arg0) {
      const cResult = navigation(ref[17]).c(32);
      ({ children, hasSkipButton, title, subtitle } = arg0);
      const tmp4 = closure_24();
      const insets = require("useSafeAreaInsetsKeyboardAware")().insets;
      let obj = navigation(ref[17]);
      navigation = navigation(ref[24]).useNavigation();
      const tmp6 = closure_28();
      importDefault = tmp6;
      let obj2 = navigation(ref[24]);
      const isScreenReaderEnabled = navigation(ref[45]).useIsScreenReaderEnabled();
      ref = noop.useRef(null);
      if (cResult[0] !== isScreenReaderEnabled) {
        const fn = function n() {
          let tmp = isScreenReaderEnabled;
          if (isScreenReaderEnabled) {
            tmp = null != ref.current;
          }
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
          }
        };
        const items = [isScreenReaderEnabled];
        cResult[0] = isScreenReaderEnabled;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp10 = items;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[1];
        tmp10 = cResult[2];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      if (cResult[3] === tmp6.id) {
        if (cResult[4] === navigation) {
          let tmp12 = cResult[5];
        }
        const _navigator = navigator;
        if (null == navigator) {
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp41 = closure_21(tmp(tmp2[47]).SceneLoadingIndicator, {});
            cResult[6] = tmp41;
            let tmp39 = tmp41;
          } else {
            tmp39 = cResult[6];
          }
          return tmp39;
        } else {
          const sum = tmp4.container.paddingBottom + insets.bottom;
          if (cResult[7] === insets.top) {
            if (cResult[8] === tmp4.container) {
              if (cResult[9] === sum) {
                let tmp14 = cResult[10];
              }
              if (cResult[11] !== title) {
                let obj5 = {
                  ref,
                  variant: "heading-xl/extrabold",
                  color: "mobile-text-heading-primary",
                  children: title,
                };
                const tmp19 = closure_21(tmp(tmp2[19]).Heading, obj5);
                cResult[11] = title;
                cResult[12] = tmp19;
                let tmp17 = tmp19;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] === tmp4.sceneSubtitle) {
                if (cResult[14] === subtitle) {
                  let tmp20 = cResult[15];
                }
                if (cResult[16] === tmp4.sceneHeader) {
                  if (cResult[17] === tmp17) {
                    if (cResult[18] === tmp20) {
                      let tmp23 = cResult[19];
                    }
                    if (cResult[20] === children) {
                      if (cResult[21] === tmp4.sceneContent) {
                        let tmp27 = cResult[22];
                      }
                      if (cResult[23] === tmp12) {
                        if (cResult[24] === hasSkipButton) {
                          if (cResult[25] === tmp4.sceneFooter) {
                            let tmp31 = cResult[26];
                          }
                          if (cResult[27] === tmp31) {
                            if (cResult[28] === tmp14) {
                              if (cResult[29] === tmp23) {
                                if (cResult[30] === tmp27) {
                                  let tmp35 = cResult[31];
                                }
                                return tmp35;
                              }
                            }
                          }
                          let obj6 = { style: tmp14, children: null };
                          const items1 = [tmp23, tmp27, tmp31];
                          obj6.children = items1;
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
                      if (hasSkipButton) {
                        obj7 = { style: tmp4.sceneFooter, children: null };
                        let obj8 = { text: null, onPress: null };
                        const intl = tmp(tmp2[18]).intl;
                        obj8.text = intl.string(tmp(tmp2[18]).t.CJm5V5);
                        obj8.onPress = tmp12;
                        obj7.children = closure_21(tmp(tmp2[39]).Button, obj8);
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
                const obj10 = { style: tmp4.sceneHeader, children: null };
                const items2 = [tmp17, tmp20];
                obj10.children = items2;
                const tmp26 = closure_22(closure_7, obj10);
                cResult[16] = tmp4.sceneHeader;
                cResult[17] = tmp17;
                cResult[18] = tmp20;
                cResult[19] = tmp26;
                tmp23 = tmp26;
              }
              const obj11 = {
                style: tmp4.sceneSubtitle,
                variant: "text-sm/medium",
                color: "text-default",
                children: subtitle,
              };
              let tmp22 = closure_21(tmp(tmp2[19]).Text, obj11);
              cResult[13] = tmp4.sceneSubtitle;
              cResult[14] = subtitle;
              cResult[15] = tmp22;
              tmp20 = tmp22;
            }
          }
          const obj12 = {};
          let merged = Object.assign(tmp4.container);
          obj12.paddingTop = insets.top;
          obj12.paddingBottom = sum;
          cResult[7] = insets.top;
          cResult[8] = tmp4.container;
          cResult[9] = sum;
          cResult[10] = obj12;
          tmp14 = obj12;
        }
      }
      const fn2 = function u() {
        const routes = navigation.getState().routes;
        if (routes[routes.length - 1].key === obj7.STEP_DISPLAY) {
          guild = GuildSettingsStore.getProps().guild;
          _modDef38(null != guild, "shouldSkipPermissions: Guild cannot be null");
          const currentUser = UserStore.getCurrentUser();
          const tmp22 = isGuildOwner(guild, currentUser);
          const obj2 = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild };
          let tmp25 = !tmp22;
          if (!tmp22) {
            tmp25 = !obj4.can(obj2);
          }
          if (tmp25) {
            let FLOW_DISMISSED = constants[tmp.STEP_MEMBERS];
            navigation.push(tmp.STEP_MEMBERS);
            let tmp3 = tmp13;
          } else {
            FLOW_DISMISSED = constants[tmp.STEP_PERMISSIONS];
            navigation.push(tmp.STEP_PERMISSIONS);
            tmp3 = tmp13;
          }
          obj4 = PermissionUtilsAll;
        } else if (key === tmp.STEP_PERMISSIONS) {
          tmp3 = constants[tmp.STEP_PERMISSIONS];
          FLOW_DISMISSED = constants[tmp.STEP_MEMBERS];
          navigation.push(tmp.STEP_MEMBERS);
        } else {
          tmp3 = constants[tmp.STEP_MEMBERS];
          FLOW_DISMISSED = constants.FLOW_DISMISSED;
          const obj5 = { type: constants2.GUILD_ROLE_CREATION_MODAL };
          AnalyticsUtilsDefault.track(constants.MODAL_DISMISSED, obj5);
          GuildSettingsRoleCreateModalActionCreatorsDefault.close();
        }
        obj7 = {
          flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
          from_step: tmp3,
          to_step: FLOW_DISMISSED,
          skip: true,
        };
        const obj6 = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id.id));
        obj6.track(constants.USER_FLOW_TRANSITION, obj7);
      };
      cResult[3] = tmp6.id;
      cResult[4] = navigation;
      cResult[5] = fn2;
      tmp12 = fn2;
      let obj3 = navigation(ref[45]);
    }
  : function ModalScene(hasSkipButton) {
      hasSkipButton = hasSkipButton.hasSkipButton;
      let navigation;
      importDefault = undefined;
      let ref;
      ({ children, title, subtitle } = hasSkipButton);
      let tmp = closure_24();
      const insets = require("useSafeAreaInsetsKeyboardAware")().insets;
      navigation = navigation(ref[24]).useNavigation();
      const tmp5 = closure_28();
      importDefault = tmp5;
      let obj = navigation(ref[24]);
      const isScreenReaderEnabled = navigation(ref[45]).useIsScreenReaderEnabled();
      ref = noop.useRef(null);
      const items = [isScreenReaderEnabled];
      const effect = noop.useEffect(() => {
        let tmp = isScreenReaderEnabled;
        if (isScreenReaderEnabled) {
          tmp = null != ref.current;
        }
        if (tmp) {
          const obj2 = { ref, delay: 100 };
          const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
        }
      }, items);
      const items1 = [navigation, tmp5.id];
      if (null == navigator) {
        let tmp12Result = closure_21(tmp3(tmp2[47]).SceneLoadingIndicator, {});
      } else {
        let obj3 = { style: null, children: null };
        let obj4 = {};
        let merged = Object.assign(tmp.container);
        obj4.paddingTop = insets.top;
        obj4.paddingBottom = tmp.container.paddingBottom + insets.bottom;
        obj3.style = obj4;
        let obj5 = { style: tmp.sceneHeader, children: null };
        let obj6 = { ref, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
        const items2 = [closure_21(tmp3(tmp2[19]).Heading, obj6)];
        obj7 = { style: tmp.sceneSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
        items2[1] = closure_21(tmp3(tmp2[19]).Text, obj7);
        obj5.children = items2;
        const items3 = [closure_22(closure_7, obj5), ,];
        let obj8 = { style: tmp.sceneContent, children };
        items3[1] = closure_21(closure_7, obj8);
        if (hasSkipButton) {
          const obj9 = { style: tmp.sceneFooter, children: null };
          const obj10 = { text: null, onPress: null };
          const intl = tmp3(tmp2[18]).intl;
          obj10.text = intl.string(tmp3(tmp2[18]).t.CJm5V5);
          obj10.onPress = tmp9;
          obj9.children = closure_21(tmp3(tmp2[39]).Button, obj10);
          hasSkipButton = closure_21(closure_7, obj9);
        }
        items3[2] = hasSkipButton;
        obj3.children = items3;
        tmp12Result = closure_22(closure_7, obj3);
      }
      return tmp12Result;
    };
const screens = {
  [obj7.STEP_DISPLAY]: {
    fullscreen: true,
    render() {
      return guild(RoleCreateScene, {});
    },
  },
  [obj7.STEP_PERMISSIONS]: {
    fullscreen: true,
    render() {
      return guild(closure_31, {});
    },
  },
  [obj7.STEP_MEMBERS]: {
    fullscreen: true,
    render() {
      return guild(closure_32, {});
    },
  },
};
ReactCompilerGating = fn(558);
const obj15 = {
  fullscreen: true,
  render() {
    return guild(closure_31, {});
  },
};
const obj16 = {
  fullscreen: true,
  render() {
    return guild(closure_32, {});
  },
};
let obj6 = { paddingVertical: 0, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj8 = {
  fullscreen: true,
  render() {
    return guild(RoleCreateScene, {});
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsRoleCreateModal() {
      const cResult = require("c").c(3);
      const tmp4 = closure_28();
      _require = tmp4;
      if (cResult[0] !== tmp4.id) {
        const fn = function t() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = {
            flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
            from_step: constants.FLOW_INITIALIZED,
            to_step: constants[obj7.STEP_DISPLAY],
            skip: false,
          };
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id.id));
          obj.track(constants.USER_FLOW_TRANSITION, obj2);
        };
        cResult[0] = tmp4.id;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      useMountEffectDefault(tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { screens, initialRouteName: obj7.STEP_DISPLAY };
        const tmp11 = closure_21(require("Navigator").Navigator, obj2);
        cResult[2] = tmp11;
        let tmp7 = tmp11;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : function GuildSettingsRoleCreateModal() {
      _require = closure_28();
      useMountEffectDefault(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = {
          flow_type: constants2.GUILD_ROLE_CREATION_MODAL,
          from_step: constants.FLOW_INITIALIZED,
          to_step: constants[obj7.STEP_DISPLAY],
          skip: false,
        };
        const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id.id));
        obj.track(constants.USER_FLOW_TRANSITION, obj2);
      });
      return closure_21(require("Navigator").Navigator, { screens, initialRouteName: obj7.STEP_DISPLAY });
    };
