// === Module 17464: EffectiveNotifSettingsLayout ===

// Module 17464 (EffectiveNotifSettingsLayout)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import _modDef3154 from "module_3154" /* 3154 */;
import EffectiveNotifSettingsActionCreators from "EffectiveNotifSettingsActionCreators" /* 17465 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 14977 */;

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
  const children = [tmp6, ];
  let tmp8 = null;
  if (context.unavailable) {
    let obj = { style: tmp.notice, children: null };
    const obj2 = { type: "warning", role: "status", message: null, action: null };
    const intl = loading(1112).intl;
    obj2.message = intl.string(_modDef3154.Nu2TMI);
    const obj3 = { text: null, onPress: null, loading: null };
    const intl2 = loading(1112).intl;
    obj3.text = intl2.string(loading(1112).t["5911Lb"]);
    obj3.onPress = callback;
    obj3.loading = loading;
    obj2.action = obj3;
    obj.children = closure_7(loading(7808).InlineNotice, obj2);
    tmp8 = closure_7(loading(5989).Stack, obj);
  }
  children[1] = tmp8;
  return closure_9(closure_8, { children });
}
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4917);
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
  let tmp2 = isDeclarativeNotificationSettingsRedesignEnabled;
  isDeclarativeNotificationSettingsRedesignEnabled = node(isDeclarativeNotificationSettingsRedesignEnabled[12]).useIsDeclarativeNotificationSettingsRedesignEnabled("EffectiveNotifSettingsLayout");
  let obj = node(isDeclarativeNotificationSettingsRedesignEnabled[12]);
  let tmp = node;
  items = [NotifSettingsProtoStore, memo, stateFromStores1];
  const stateFromStores = node(isDeclarativeNotificationSettingsRedesignEnabled[13]).useStateFromStores(items, () => NotifSettingsProtoStore.hasValidEffectiveSettings);
  const obj2 = node(isDeclarativeNotificationSettingsRedesignEnabled[13]);
  const items1 = [NotifSettingsProtoStore];
  stateFromStores1 = node(isDeclarativeNotificationSettingsRedesignEnabled[13]).useStateFromStores(items1, () => NotifSettingsProtoStore.isEffectiveSettingsLoading || !NotifSettingsProtoStore.hasCompletedEffectiveSettingsFetch);
  const items2 = [isDeclarativeNotificationSettingsRedesignEnabled];
  const effect = stateFromStores.useEffect(() => {
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      DispatcherDefault.dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN" });
      return () => {
        unavailableNode(isDeclarativeNotificationSettingsRedesignEnabled[14]).dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_CLOSE" });
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
    if (!stateFromStores) {
      if (stateFromStores1) {
        let tmp13 = closure_7(tmp(tmp2[16]).SceneLoadingIndicator, {});
      }
    }
    const obj4 = { value: tmp9, children: null };
    const obj5 = { node: memo1 };
    tmp2 = closure_7(unavailableNode(tmp2[15]), obj5);
    obj4.children = tmp2;
    tmp13 = closure_7(redux.Provider, obj4);
  } else {
    const obj6 = { node };
    return closure_7(unavailableNode(tmp2[15]), obj6);
  }
  const obj3 = node(isDeclarativeNotificationSettingsRedesignEnabled[13]);
};