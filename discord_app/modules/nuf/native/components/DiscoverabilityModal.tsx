// discord_app/modules/nuf/native/components/DiscoverabilityModal.tsx
import keys from "../../../../ConstantsIOS.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import ContactSyncNameInputDefault from "../../../contact_sync/native/components/ContactSyncNameInput.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { useContactSyncModalStore } from "../../../contact_sync/native/ContactSyncModalStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function DiscoverabilityLandingScene() {
  navigation = navigation(allowPhone[9]).useNavigation();
  let obj = navigation(allowPhone[9]);
  const tmp = allowPhone;
  const items = [closure_6];
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
  let allowEmail = tmp4.allowEmail;
  let tmp5 = allowPhone;
  if (!allowPhone) {
    tmp5 = allowEmail;
  }
  allowEmail = tmp5;
  const items1 = [navigation, stateFromStores, allowEmail, allowPhone, tmp5];
  const onNext = allowEmail.useCallback(() => {
    stateFromStores(allowPhone[11]);
    const obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (allowEmail) {
      if (null != stateFromStores) {
        if (allowPhone) {
          navigation.push(navigation(allowPhone[12]).DiscoverabilityScenes.NAME);
        }
      }
    }
    const result1 = navigation(allowPhone[13]).closeDiscoverabilityModal(false);
    const obj3 = navigation(allowPhone[13]);
  }, items1);
  return jsx(stateFromStores(tmp[14]), { onNext });
}
function DiscoverabilityNameScene() {
  const tmp = callback();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone];
  const effect = React.useEffect(() => {
    if (!allowPhone) {
      const result = allowPhone(dependencyMap[13]).closeDiscoverabilityModal(false);
      const obj = allowPhone(dependencyMap[13]);
    }
  }, items);
  callback = React.useCallback((arg0) => {
    const result = allowPhone(11877).startContactSyncForDiscoverability(arg0);
    const obj = allowPhone(11877);
    const result1 = allowPhone(11877).closeDiscoverabilityModal(false);
  }, []);
  let obj = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  if (name == null) {
    name = "";
  }
  obj[2] = name;
  obj[1] = jsx(ContactSyncNameInputDefault, { onNext: callback, loading: false, initialName: null });
  return <View onNext={callback} loading={false} initialName={null} />;
}
class DiscoverabilityModal {
  constructor() {
    obj = {
      screens: closure_3.useMemo(() => {
            let obj = {
              ignoreKeyboard: true,
              impressionName: callback(503).ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerLeft() {
                return null;
              },
              headerTitle() {
                return null;
              },
              render() {
                return callback(closure_9, {});
              }
            };
            obj[callback(691).DiscoverabilityScenes.LANDING] = obj;
            obj = {
              ignoreKeyboard: true,
              impressionName: callback(503).ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerTitle() {
                return null;
              },
              render() {
                return callback(closure_10, {});
              }
            };
            obj[callback(691).DiscoverabilityScenes.NAME] = obj;
            return obj;
          }, []),
      initialRouteName: require("keys").DiscoverabilityScenes.LANDING,
      headerBackTitle: null
    };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t["13/7kX"]);
    return jsx(require("NavigationStack").Navigator, obj);
  }
}
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
DiscoverabilityModal.modalConfig = { animation: require("ME").ModalAnimation.SLIDE_IN_OUT };
let result = require("obj132").fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default DiscoverabilityModal;