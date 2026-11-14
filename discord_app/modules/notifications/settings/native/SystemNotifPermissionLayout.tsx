// discord_app/modules/notifications/settings/native/SystemNotifPermissionLayout.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import _modDef3029 from "../../NotificationSettings.messages.js";
import openNotificationSettingsDefault from "../../../native_permissions/mobile/openNotificationSettings.native.tsx";
import NotificationPermissionUtil from "../../../nuf/native/NotificationPermissionUtil.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import PushNotificationPermissionStore from "../../../../stores/native/PushNotificationPermissionStore.tsx";
import DeclarativeSystemNotifPermissionStore from "../DeclarativeSystemNotifPermissionStore.tsx";

require = fn;
function SystemNotifPermissionHeader() {
  const tmp = closure_20();
  const context = noop.useContext(closure_19);
  let tmp19Result = NOTIFICATION_SETTINGS_PERMISSION_HEADER;
  obj2 = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[12]);
  const isTeenInStrictCountry = obj2.useIsTeenInStrictCountry();
  const inHoldout = require("ContextualOptInNudgeHoldoutExperiment").useConfig({
    location: "SettingsNotificationsScreen",
  }).inHoldout;
  let obj3 = require("ContextualOptInNudgeHoldoutExperiment");
  items = [PushNotificationPermissionStore];
  const stateFromStores = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[14]).useStateFromStores(items, () => {
    authorizationStatus = authorizationStatus.authorizationStatus;
    return authorizationStatus === constants.DENIED || authorizationStatus === constants.UNDETERMINED;
  });
  const obj4 = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[14]);
  const items1 = [DeclarativeSystemNotifPermissionStore];
  let tmp9 = !inHoldout;
  const stateFromStores1 = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[14]).useStateFromStores(items1, () => {
    let isCategoryDisabledResult = null != context;
    if (isCategoryDisabledResult) {
      isCategoryDisabledResult = DeclarativeSystemNotifPermissionStore.isCategoryDisabled(tmp);
    }
    return isCategoryDisabledResult;
  });
  if (!inHoldout) {
    tmp9 = !isTeenInStrictCountry;
  }
  if (tmp9) {
    let tmp11 = stateFromStores;
    if (null != context) {
      let isAndroidResult = tmp3(tmp19Result[15]).isAndroid();
      if (isAndroidResult) {
        let tmp13 = stateFromStores;
        if (!stateFromStores) {
          tmp13 = stateFromStores1;
        }
        isAndroidResult = tmp13;
      }
      tmp11 = isAndroidResult;
      const tmp3Result = tmp3(tmp19Result[15]);
    }
    tmp9 = tmp11;
  }
  importDefault = tmp9;
  if (null == context) {
    NOTIFICATION_SETTINGS_PERMISSION_HEADER = constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER;
  } else {
    const _HermesInternal = HermesInternal;
    NOTIFICATION_SETTINGS_PERMISSION_HEADER = "" + constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER + "_" + context;
  }
  const items2 = [tmp9, NOTIFICATION_SETTINGS_PERMISSION_HEADER];
  const effect = noop.useEffect(() => {
    if (isAndroidResult) {
      obj2 = { action: constants4.IMPRESSION, prompt_type: NOTIFICATION_SETTINGS_PERMISSION_HEADER };
      AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
    }
  }, items2);
  const items3 = [context, NOTIFICATION_SETTINGS_PERMISSION_HEADER];
  if (!tmp9) {
    return null;
  } else {
    const obj6 = { style: tmp.container, children: null };
    let obj7 = { border: "none", shadow: "none", radius: 16, style: tmp.card, children: null };
    let obj8 = { spacing: tmp6(tmp19Result[11]).space.PX_12, children: null };
    const obj9 = { style: tmp.iconCircle, justify: "center", align: "center", children: null };
    const obj10 = { size: "md", color: tmp6(tmp19Result[11]).colors.ICON_STRONG };
    obj9.children = closure_15(tmp3(tmp19Result[21]).BellSlashIcon, obj10);
    const items4 = [closure_15(tmp3(tmp19Result[19]).Stack, obj9), ,];
    const obj11 = { spacing: tmp6(tmp19Result[11]).space.PX_8, children: null };
    const obj12 = { variant: "heading-lg/semibold", color: "text-default", style: tmp.centeredText, children: null };
    if (null == context) {
      const intl2 = tmp3(tmp19Result[23]).intl;
      let stringResult = intl2.string(tmp6(tmp19Result[9])["4QQ7/n"]);
    } else {
      const intl = tmp3(tmp19Result[23]).intl;
      stringResult = intl.string(noop[context]);
    }
    obj12.children = stringResult;
    const items5 = [closure_15(tmp3(tmp19Result[22]).Heading, obj12)];
    const obj13 = { variant: "body-sm/normal", color: "text-muted", style: tmp.centeredText, children: null };
    const intl3 = tmp3(tmp19Result[23]).intl;
    if (null == context) {
      let QhXeCd = tmp6(tmp19Result[9]).QhXeCd;
    } else {
      QhXeCd = obj2[context];
    }
    obj13.children = intl3.string(QhXeCd);
    items5[1] = closure_15(tmp3(tmp19Result[22]).Text, obj13);
    obj11.children = items5;
    items4[1] = closure_16(tmp3(tmp19Result[19]).Stack, obj11);
    let obj14 = { style: tmp.button, children: null };
    if (null == context) {
      const intl5 = tmp3(tmp19Result[23]).intl;
      let stringResult1 = intl5.string(tmp3(tmp19Result[23]).t["5xWOXv"]);
    } else {
      const intl4 = tmp3(tmp19Result[23]).intl;
      stringResult1 = intl4.string(tmp6(tmp19Result[9]).FyqnR3);
    }
    const obj15 = { variant: "primary", size: "lg", grow: true, text: stringResult1, onPress: tmp18 };
    tmp19Result = closure_15(tmp3(tmp19Result[24]).Button, obj15);
    obj14.children = tmp19Result;
    obj14 = closure_15(tmp3(tmp19Result[19]).Stack, obj14);
    items4[2] = obj14;
    obj8.children = items4;
    obj8 = closure_16(tmp3(tmp19Result[19]).Stack, obj8);
    obj7.children = obj8;
    obj7 = closure_15(tmp3(tmp19Result[20]).Card, obj7);
    obj6.children = obj7;
    closure_15(tmp3(tmp19Result[19]).Stack, obj6);
  }
  const obj5 = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[14]);
}
const Constants = fn(1072);
({ AnalyticEvents: closure_8, NOOP: closure_9 } = Constants);
let closure_10 = fn(6902).NotificationAuthorizationStatus;
const NotificationPermissionConstants = fn(14826);
({
  EventActionLocation: closure_11,
  EventActionType: closure_12,
  NotificationNudgeAnalyticsAction: map1,
  NotificationNudgeSurface: closure_14,
} = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = {
  "111_realtime": _modDef3029.dF4FmA,
  "222_social": _modDef3029.tgF0IR,
  "333_server": _modDef3029.rwJXCw,
  "444_other": _modDef3029["8gfmjs"],
};
let obj2 = {
  "111_realtime": _modDef3029.HszTZQ,
  "222_social": _modDef3029.UbGSlJ,
  "333_server": _modDef3029.Jweb0a,
  "444_other": _modDef3029.NQH8GA,
};
const redux = noop.createContext(undefined);
const createStyles = fn(5306);
let obj3 = {
  container: { paddingTop: nativeDefault.space.PX_16 },
  card: null,
  iconCircle: null,
  centeredText: null,
  button: null,
};
let obj5 = { paddingTop: nativeDefault.space.PX_16 };
obj3.card = { padding: nativeDefault.space.PX_20 };
let size = {
  width: nativeDefault.space.PX_48,
  height: nativeDefault.space.PX_48,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
};
obj3.iconCircle = size;
obj3.centeredText = { textAlign: "center" };
let obj6 = { padding: nativeDefault.space.PX_20 };
obj3.button = { borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let closure_20 = createStyles.createStyles(obj3);
size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/SystemNotifPermissionLayout.tsx");

export default function SystemNotifPermissionLayout(node) {
  node = node.node;
  const unavailableNode = node.unavailableNode;
  const category = node.category;
  c3 = undefined;
  [tmp2, c3] = noop.useState(false);
  const effect = noop.useEffect(() => {
    closure_1 = async function _loadPermissionStatus() {
      closure_1 = tmp3;
      await closure_2_1(8199).getNotificationAuthorizationStatus();
      if (1 === tmp7) {
        c2 = 0;
        if (closure_129_0) {
          v2(true);
        }
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        if (closure_129_0) {
          if (null != closure_128_0) {
            const result = node(14828).updateNotificationAuthorizationStatus(closure_128_0);
            node(14828);
          }
          v2(true);
          c2 = 0;
        } else {
          c2 = 0;
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      }
      return value;
    };
    c0 = true;
    let result = node(category[25]).refreshSystemNotifPermissionsAsync("notification_settings_screen");
    (function loadPermissionStatus() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      c0 = false;
    };
  }, []);
  items = [node, category];
  const items1 = [node, unavailableNode];
  const memo = noop.useMemo(() => {
    obj = {};
    let merged = Object.assign(node);
    const sections = node.sections;
    obj.sections = sections.map((label, index) => {
      let tmp = label;
      if (null != closure_1_2) {
        tmp = label;
        if (0 === index) {
          tmp = label;
          if (null == label.label) {
            obj = {};
            const merged = Object.assign(label);
            const intl = node(category[23]).intl;
            obj.label = intl.string(unavailableNode(category[9])["/UdAvP"]);
            tmp = obj;
          }
        }
      }
      return tmp;
    });
    obj.ListHeaderComponent = SystemNotifPermissionHeader;
    return obj;
  }, items);
  if (tmp2) {
    obj2 = { value: category, children: null };
    const obj3 = { node: memo, unavailableNode: tmp5 };
    obj2.children = closure_15(unavailableNode(category[28]), obj3);
    let tmp6Result = closure_15(redux.Provider, obj2);
  } else {
    obj = { variant: "body-md/medium", children: null };
    let intl = node(category[23]).intl;
    obj.children = intl.string(unavailableNode(category[9]).Ns127F);
    tmp6Result = closure_15(node(category[22]).Text, obj);
  }
  return tmp6Result;
}
