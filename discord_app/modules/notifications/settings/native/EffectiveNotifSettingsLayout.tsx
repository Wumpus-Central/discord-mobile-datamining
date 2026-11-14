// discord_app/modules/notifications/settings/native/EffectiveNotifSettingsLayout.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3029 from "../../NotificationSettings.messages.js";
import EffectiveNotifSettingsActionCreators from "../EffectiveNotifSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import NotifSettingsProtoStore from "../NotifSettingsProtoStore.tsx";

require = fn;
function EffectiveSettingsHeader() {
  const context = noop.useContext(closure_11);
  ({ Header, loading } = context);
  items = [loading];
  let tmp6 = null;
  const callback = noop.useCallback(() => {
    if (!loading) {
      const result = EffectiveNotifSettingsActionCreators.retryEffectiveNotifSettings();
    }
  }, items);
  if (null != Header) {
    tmp6 = closure_7(Header, {});
  }
  const items1 = [tmp6];
  if (!context.unavailable) {
    const obj2 = { children: null };
    items1[1] = null;
    obj2.children = items1;
    return closure_9(closure_8, obj2);
  } else {
    let stringResult = dependencyMap;
    let obj = { style: tmp.notice, children: null };
    let str = "warning";
    if (loading) {
      str = "info";
    }
    let obj3 = { type: str, role: "status", message: null, action: null };
    let intl = loading(1113).intl;
    let string = intl.string;
    const tmp12 = _modDef3029;
    obj3.message = string(loading ? tmp12.Ns127F : tmp12.Nu2TMI);
    const obj4 = { text: null, onPress: null, loading: null };
    intl = loading(1113).intl;
    string = intl.string;
    stringResult = string(loading(1113).t["5911Lb"]);
    obj4.text = stringResult;
    obj4.onPress = callback;
    obj4.loading = loading;
    obj3.action = obj4;
    obj3 = closure_7(loading(8159).InlineNotice, obj3);
    obj.children = obj3;
    closure_7(loading(6337).Stack, obj);
  }
  tmp = closure_10();
}
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5306);
let obj = { notice: { paddingTop: nativeDefault.space.PX_16 } };
let closure_10 = createStyles.createStyles(obj);
const redux = noop.createContext({ unavailable: false, loading: false });
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/EffectiveNotifSettingsLayout.tsx");

export default function EffectiveNotifSettingsLayout(node) {
  node = node.node;
  const unavailableNode = node.unavailableNode;
  let isDeclarativeNotificationSettingsRedesignEnabled;
  let stateFromStores1;
  let memo;
  isDeclarativeNotificationSettingsRedesignEnabled = node(
    isDeclarativeNotificationSettingsRedesignEnabled[12],
  ).useIsDeclarativeNotificationSettingsRedesignEnabled("EffectiveNotifSettingsLayout");
  let obj = node(isDeclarativeNotificationSettingsRedesignEnabled[12]);
  items = [NotifSettingsProtoStore, memo, stateFromStores1];
  const stateFromStores = node(isDeclarativeNotificationSettingsRedesignEnabled[13]).useStateFromStores(
    items,
    () => NotifSettingsProtoStore.hasValidEffectiveSettings,
  );
  const obj2 = node(isDeclarativeNotificationSettingsRedesignEnabled[13]);
  const items1 = [NotifSettingsProtoStore];
  stateFromStores1 = node(isDeclarativeNotificationSettingsRedesignEnabled[13]).useStateFromStores(
    items1,
    () => NotifSettingsProtoStore.isEffectiveSettingsLoading,
  );
  const items2 = [isDeclarativeNotificationSettingsRedesignEnabled];
  const effect = stateFromStores.useEffect(() => {
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      DispatcherDefault.dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN" });
      return () => {
        unavailableNode(isDeclarativeNotificationSettingsRedesignEnabled[14]).dispatch({
          type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_CLOSE",
        });
      };
    }
  }, items2);
  const items3 = [stateFromStores, node, unavailableNode];
  memo = stateFromStores.useMemo(() => {
    if (stateFromStores) {
      let tmp = node;
    } else {
      tmp = unavailableNode;
      if (unavailableNode == null) {
        const obj = {};
        const merged = Object.assign(node);
        obj.sections = [];
        tmp = obj;
      }
    }
    return tmp;
  }, items3);
  const items4 = [memo];
  const items5 = [memo.ListHeaderComponent, stateFromStores, stateFromStores1];
  const memo1 = stateFromStores.useMemo(() => {
    const obj = {};
    const merged = Object.assign(memo);
    obj.ListHeaderComponent = EffectiveSettingsHeader;
    return obj;
  }, items4);
  if (isDeclarativeNotificationSettingsRedesignEnabled) {
    const obj4 = { value: tmp8, children: null };
    const obj5 = { node: memo1 };
    obj4.children = closure_7(unavailableNode(tmp[15]), obj5);
    let tmp9Result = closure_7(redux.Provider, obj4);
  } else {
    const obj6 = { node };
    tmp9Result = closure_7(unavailableNode(tmp[15]), obj6);
  }
  return tmp9Result;
}
