// === Module 18287: EffectiveNotifSettingsLayout ===

// Module 18287 (EffectiveNotifSettingsLayout)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef2992 from "module_2992" /* 2992 */;
import SettingLayoutDefault from "SettingLayout" /* 16894 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15850 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
let closure_9 = createStyles.createStyles({ root: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/EffectiveNotifSettingsLayout.tsx");

export default function EffectiveNotifSettingsLayout(node) {
  const unavailableNode = node.unavailableNode;
  let isDeclarativeNotificationSettingsRedesignEnabled;
  const tmp = closure_9();
  isDeclarativeNotificationSettingsRedesignEnabled = isDeclarativeNotificationSettingsRedesignEnabled(15864).useIsDeclarativeNotificationSettingsRedesignEnabled("EffectiveNotifSettingsLayout");
  const obj = isDeclarativeNotificationSettingsRedesignEnabled(15864);
  items = [NotifSettingsProtoStore, AuthenticationStore, UserSettingsProtoStore];
  const stateFromStores = isDeclarativeNotificationSettingsRedesignEnabled(504).useStateFromStores(items, () => NotifSettingsProtoStore.hasValidEffectiveSettings);
  const obj2 = isDeclarativeNotificationSettingsRedesignEnabled(504);
  const items1 = [NotifSettingsProtoStore];
  const stateFromStores1 = isDeclarativeNotificationSettingsRedesignEnabled(504).useStateFromStores(items1, () => NotifSettingsProtoStore.isEffectiveSettingsLoading);
  const items2 = [isDeclarativeNotificationSettingsRedesignEnabled];
  const effect = noop.useEffect(() => {
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      DispatcherDefault.dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN" });
      return () => {
        closure_1_1(closure_1_2[8]).dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_CLOSE" });
      };
    }
  }, items2);
  if (isDeclarativeNotificationSettingsRedesignEnabled) {
    if (!stateFromStores) {
      const obj4 = { style: tmp.root, children: null };
      const intl = tmp2(1113).intl;
      const tmp11 = _modDef2992;
      if (stateFromStores1) {
        let Nu2TMI = tmp11.Ns127F;
        let tmp12 = importDefault;
      } else {
        Nu2TMI = tmp11.Nu2TMI;
        tmp12 = importDefault;
      }
      const obj5 = { variant: "body-md/medium", accessibilityLiveRegion: "polite", children: intl.string(Nu2TMI) };
      const items3 = [closure_7(tmp2(5751).Text, obj5), , ];
      const obj6 = { text: null, variant: "secondary", disabled: null, onPress: null };
      const intl2 = tmp2(1113).intl;
      obj6.text = intl2.string(tmp2(1113).t["5911Lb"]);
      obj6.disabled = stateFromStores1;
      obj6.onPress = tmp2(18288).retryEffectiveNotifSettings;
      items3[1] = closure_7(tmp2(5758).Button, obj6);
      let tmp9Result = null;
      if (null != unavailableNode) {
        const obj7 = { node: unavailableNode };
        tmp9Result = closure_7(tmp12(16894), obj7);
      }
      items3[2] = tmp9Result;
      obj4.children = items3;
      let tmp8Result = closure_8(tmp2(6159).Stack, obj4);
    }
    return tmp8Result;
  }
  tmp8Result = closure_7(SettingLayoutDefault, { node: node.node });
  const obj3 = isDeclarativeNotificationSettingsRedesignEnabled(504);
};