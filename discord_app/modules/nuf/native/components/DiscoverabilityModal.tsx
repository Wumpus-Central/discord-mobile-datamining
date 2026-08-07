// discord_app/modules/nuf/native/components/DiscoverabilityModal.tsx
import set from "set";
import { View } from "NavigationStack";
import { useContactSyncModalStore } from "ContactSyncModes";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { ContactSyncNameInput } from "../../../contact_sync/native/components/ContactSyncNameInput.tsx";

const require = arg1;
function DiscoverabilityLandingScene() {
  navigation = navigation(allowPhone[9]).useNavigation();
  let obj = navigation(allowPhone[9]);
  const tmp = allowPhone;
  const items = [mergeGuildAvatar];
  const stateFromStores = navigation(allowPhone[10]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const tmp4 = useContactSyncModalStore();
  allowPhone = tmp4.allowPhone;
  const allowEmail = tmp4.allowEmail;
  let tmp5 = allowPhone;
  if (!allowPhone) {
    tmp5 = allowEmail;
  }
  const View = tmp5;
  const items1 = [navigation, stateFromStores, allowEmail, allowPhone, tmp5];
  const onNext = allowEmail.useCallback(() => {
    let obj = stateFromStores(allowPhone[11]);
    obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (closure_4) {
      if (null != stateFromStores) {
        if (allowPhone) {
          navigation.push(navigation(tmp[12]).DiscoverabilityScenes.NAME);
        }
      }
    }
    const result1 = navigation(allowPhone[13]).closeDiscoverabilityModal(false);
  }, items1);
  return jsx(stateFromStores(tmp[14]), { onNext });
}
function DiscoverabilityNameScene() {
  let allowPhone;
  let name;
  const tmp = createCacheKey();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone];
  const effect = React.useEffect(() => {
    if (!allowPhone) {
      const result = allowPhone(outer1_2[13]).closeDiscoverabilityModal(false);
      const obj = allowPhone(outer1_2[13]);
    }
  }, items);
  let obj = { style: tmp.container, children: null };
  const callback = React.useCallback((arg0) => {
    const result = allowPhone(11992).startContactSyncForDiscoverability(arg0);
    const obj = allowPhone(11992);
    const result1 = allowPhone(11992).closeDiscoverabilityModal(false);
  }, []);
  obj = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  const tmp6 = View;
  if (name == null) {
    name = "";
  }
  obj[2] = name;
  obj[1] = jsx(ContactSyncNameInput, { onNext: callback, loading: false, initialName: null });
  return <tmp6 onNext={callback} loading={false} initialName={null} />;
}
class DiscoverabilityModal {
  constructor() {
    obj = { screens: null, initialRouteName: null, headerBackTitle: null };
    obj[0] = set.useMemo(() => {
      let obj = {};
      obj = { ignoreKeyboard: true, impressionName: null, fullscreen: true, headerLeft: null, headerTitle: null, render: null };
      obj[1] = callback(503).ImpressionNames.DISCOVERABILITY;
      obj[3] = function headerLeft() {
        return null;
      };
      obj[4] = function headerTitle() {
        return null;
      };
      obj[5] = function render() {
        return callback(closure_9, {});
      };
      obj[callback(691).DiscoverabilityScenes.LANDING] = obj;
      obj = { ignoreKeyboard: true, impressionName: null, fullscreen: true, headerTitle: null, render: null };
      obj[1] = callback(503).ImpressionNames.DISCOVERABILITY;
      obj[3] = function headerTitle() {
        return null;
      };
      obj[4] = function render() {
        return callback(closure_10, {});
      };
      obj[callback(691).DiscoverabilityScenes.NAME] = obj;
      return obj;
    }, []);
    obj[1] = require("keys").DiscoverabilityScenes.LANDING;
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t["13/7kX"]);
    return jsx(require("NavigationStack").Navigator, obj);
  }
}
createCacheKey = { container: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
DiscoverabilityModal.modalConfig = { animation: require("ME").ModalAnimation.SLIDE_IN_OUT };
let result = require("ContactSyncModes").fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default DiscoverabilityModal;