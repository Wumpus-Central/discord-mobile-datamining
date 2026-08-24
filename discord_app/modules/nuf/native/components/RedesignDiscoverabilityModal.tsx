// discord_app/modules/nuf/native/components/RedesignDiscoverabilityModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { useContactSyncModalStore } from "../../../contact_sync/native/ContactSyncModalStore.tsx";
import closure_6 from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function DiscoverabilityLandingScene(onComplete) {
  onComplete = onComplete.onComplete;
  let navigation;
  let stateFromStores;
  let allowPhone;
  let name;
  let allowEmail;
  allowEmail = undefined;
  navigation = onComplete(stateFromStores[9]).useNavigation();
  let obj = onComplete(stateFromStores[9]);
  const tmp = stateFromStores;
  const items = [allowEmail];
  stateFromStores = onComplete(stateFromStores[10]).useStateFromStores(items, () => {
    const currentUser = allowEmail.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const tmp4 = allowEmail();
  allowPhone = tmp4.allowPhone;
  name = tmp4.name;
  allowEmail = tmp4.allowEmail;
  let tmp5 = allowPhone;
  if (!allowPhone) {
    tmp5 = allowEmail;
  }
  allowEmail = tmp5;
  const items1 = [allowPhone, allowEmail, tmp5, stateFromStores, name, navigation, onComplete];
  const onNext = allowPhone.useCallback(() => {
    let obj = navigation(stateFromStores[11]);
    obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (allowEmail) {
      if (null != stateFromStores) {
        if (allowPhone) {
          if (null == name) {
            navigation.push(onComplete(stateFromStores[12]).DiscoverabilityScenes.NAME);
          }
        }
      }
    }
    onComplete();
  }, items1);
  return jsx(navigation(tmp[13]), { onNext });
}
function DiscoverabilityNameScene(onComplete) {
  onComplete = onComplete.onComplete;
  allowPhone = undefined;
  const tmp = callback();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone, onComplete];
  const effect = React.useEffect(() => {
    if (!allowPhone) {
      onComplete();
    }
  }, items);
  const items1 = [onComplete];
  let obj = { style: tmp.container, children: null };
  callback = React.useCallback((arg0) => {
    const result = onComplete(closure_1_2[14]).startContactSyncForDiscoverability(arg0);
    onComplete();
  }, items1);
  obj = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  const tmp6 = View;
  if (name == null) {
    name = "";
  }
  obj[2] = name;
  obj[1] = jsx(allowPhone(11870), { onNext: callback, loading: false, initialName: null });
  return <tmp6 onNext={callback} loading={false} initialName={null} />;
}
class RedesignDiscoverabilityModal {
  constructor(arg0) {
    onComplete = global.route.params.onComplete;
    tmp = closure_8();
    obj = {
      headerStyle: tmp.header,
      screens: closure_3.useMemo(() => {
            if (null == fn) {
              fn = () => {

              };
            }
            let obj = {};
            obj = {
              ignoreKeyboard: true,
              impressionName: onComplete(closure_1_2[16]).ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerLeft() {
                return null;
              },
              headerTitle() {
                return null;
              },
              headerRight(arg0) {
                const obj = { insideNavigator: true };
                const merged = Object.assign(arg0);
                obj.onPress = function onPress() {
                  return callback(true);
                };
                return closure_1_7(closure_1_1(closure_1_2[17]), obj);
              },
              render() {
                return closure_1_7(closure_1_9, { onComplete: fn });
              }
            };
            obj[onComplete(closure_1_2[12]).DiscoverabilityScenes.LANDING] = obj;
            obj = {
              ignoreKeyboard: true,
              impressionName: onComplete(closure_1_2[16]).ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerTitle() {
                return null;
              },
              render() {
                return closure_1_7(closure_1_10, { onComplete: fn });
              }
            };
            obj[onComplete(closure_1_2[12]).DiscoverabilityScenes.NAME] = obj;
            return obj;
          }, items),
      initialRouteName: require("keys").DiscoverabilityScenes.LANDING,
      headerBackTitle: null
    };
    items = [];
    items[0] = onComplete;
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t["13/7kX"]);
    return jsx(require("NavigationStack").Navigator, obj);
  }
}
createCacheKey = { header: null, container: null };
createCacheKey = { borderBottomWidth: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
RedesignDiscoverabilityModal.modalConfig = { animation: require("ME").ModalAnimation.SLIDE_IN_OUT };
const obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
let result = require("set").fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityModal.tsx");

export default RedesignDiscoverabilityModal;