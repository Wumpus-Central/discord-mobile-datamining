// discord_app/modules/nuf/native/components/RedesignDiscoverabilityModal.tsx
import getSystemLocale from "getSystemLocale";
import { View } from "SkipHeaderButton";
import { useContactSyncModalStore } from "ContactSyncModes";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function DiscoverabilityLandingScene(onComplete) {
  onComplete = onComplete.onComplete;
  let navigation;
  let stateFromStores;
  let allowPhone;
  let name;
  let allowEmail;
  let c6;
  navigation = onComplete(stateFromStores[9]).useNavigation();
  let obj = onComplete(stateFromStores[9]);
  const tmp = stateFromStores;
  const items = [c6];
  stateFromStores = onComplete(stateFromStores[10]).useStateFromStores(items, () => {
    const currentUser = _undefined.getCurrentUser();
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
  c6 = tmp5;
  const items1 = [allowPhone, allowEmail, tmp5, stateFromStores, name, navigation, onComplete];
  const onNext = allowPhone.useCallback(() => {
    let obj = navigation(stateFromStores[11]);
    obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (c6) {
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
  let allowPhone;
  let name;
  onComplete = onComplete.onComplete;
  allowPhone = undefined;
  const tmp = createCacheKey();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone, onComplete];
  const effect = React.useEffect(() => {
    if (!allowPhone) {
      onComplete();
    }
  }, items);
  const items1 = [onComplete];
  let obj = { style: tmp.container, children: null };
  const callback = React.useCallback((arg0) => {
    const result = onComplete(outer1_2[14]).startContactSyncForDiscoverability(arg0);
    onComplete();
  }, items1);
  obj = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  const tmp6 = View;
  if (name == null) {
    name = "";
  }
  obj[2] = name;
  obj[1] = jsx(allowPhone(12055), { onNext: callback, loading: false, initialName: null });
  return <tmp6 onNext={callback} loading={false} initialName={null} />;
}
class RedesignDiscoverabilityModal {
  constructor(arg0) {
    onComplete = global.route.params.onComplete;
    tmp = jsx();
    obj = { headerStyle: tmp.header, screens: null, initialRouteName: null, headerBackTitle: null };
    items = [];
    items[0] = onComplete;
    obj[1] = getSystemLocale.useMemo(() => {
      if (null == fn) {
        fn = () => {

        };
      }
      let obj = {};
      obj = { ignoreKeyboard: true, impressionName: null, fullscreen: true, headerLeft: null, headerTitle: null, headerRight: null, render: null };
      obj[1] = onComplete(outer1_2[16]).ImpressionNames.DISCOVERABILITY;
      obj[3] = function headerLeft() {
        return null;
      };
      obj[4] = function headerTitle() {
        return null;
      };
      obj[5] = function headerRight(arg0) {
        const obj = { insideNavigator: true };
        const merged = Object.assign(arg0);
        obj.onPress = function onPress() {
          return callback(true);
        };
        return outer1_7(outer1_1(outer1_2[17]), obj);
      };
      obj[6] = function render() {
        return outer1_7(outer1_9, { onComplete: fn });
      };
      obj[onComplete(outer1_2[12]).DiscoverabilityScenes.LANDING] = obj;
      obj = { ignoreKeyboard: true, impressionName: null, fullscreen: true, headerTitle: null, render: null };
      obj[1] = onComplete(outer1_2[16]).ImpressionNames.DISCOVERABILITY;
      obj[3] = function headerTitle() {
        return null;
      };
      obj[4] = function render() {
        return outer1_7(outer1_10, { onComplete: fn });
      };
      obj[onComplete(outer1_2[12]).DiscoverabilityScenes.NAME] = obj;
      return obj;
    }, items);
    obj[2] = require("keys").DiscoverabilityScenes.LANDING;
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t["13/7kX"]);
    return jsx(require("NavigationStack").Navigator, obj);
  }
}
createCacheKey = { header: null, container: null };
createCacheKey = { borderBottomWidth: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
RedesignDiscoverabilityModal.modalConfig = { animation: require("ME").ModalAnimation.SLIDE_IN_OUT };
const obj1 = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
let result = require("ContactSyncModes").fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityModal.tsx");

export default RedesignDiscoverabilityModal;