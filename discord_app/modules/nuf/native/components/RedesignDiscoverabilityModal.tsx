// === Module 17452: RedesignDiscoverabilityModal ===

// Module 17452 (RedesignDiscoverabilityModal)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12684 */;
import SkipHeaderButtonDefault from "SkipHeaderButton" /* 12696 */;
import NUFActionCreators from "NUFActionCreators" /* 12704 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function DiscoverabilityLandingScene(onComplete) {
  onComplete = onComplete.onComplete;
  let stateFromStores;
  let allowEmail;
  const navigation = onComplete(stateFromStores[9]).useNavigation();
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
  const allowPhone = tmp4.allowPhone;
  const name = tmp4.name;
  allowEmail = tmp4.allowEmail;
  let tmp5 = allowPhone;
  if (!allowPhone) {
    tmp5 = allowEmail;
  }
  allowEmail = tmp5;
  const items1 = [allowPhone, allowEmail, tmp5, stateFromStores, name, navigation, onComplete];
  const onNext = allowPhone.useCallback(() => {
    const obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (allowEmail) {
      if (null != stateFromStores) {
        if (allowPhone) {
          if (null == name) {
            navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
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
  const tmp = closure_8();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone, onComplete];
  const effect = noop.useEffect(() => {
    if (!allowPhone) {
      onComplete();
    }
  }, items);
  const items1 = [onComplete];
  let obj = { style: tmp.container, children: null };
  const callback = noop.useCallback((arg0) => {
    const result = NUFActionCreators.startContactSyncForDiscoverability(arg0);
    onComplete();
  }, items1);
  obj = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  if (name == null) {
    name = "";
  }
  obj.initialName = name;
  obj.children = jsx(allowPhone(12697), { onNext: callback, loading: false, initialName: null });
  return <tmp6 onNext={callback} loading={false} initialName={null} />;
}
class RedesignDiscoverabilityModal {
  constructor(arg0) {
    onComplete = global.route.params.onComplete;
    tmp = closure_8();
    obj = { headerStyle: tmp.header, screens: null, initialRouteName: onComplete(closure_2[12]).DiscoverabilityScenes.LANDING, headerBackTitle: null };
    items = [];
    items[0] = onComplete;
    obj.screens = closure_3.useMemo(() => {
      if (null == onComplete) {
        onComplete = () => {

        };
      }
      let obj = {};
      obj = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
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
            return onComplete(true);
          };
          return jsx(SkipHeaderButtonDefault, { insideNavigator: true });
        },
        render() {
          return <DiscoverabilityLandingScene onComplete={onComplete} />;
        }
      };
      obj[ConstantsIOS.DiscoverabilityScenes.LANDING] = obj;
      obj = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render() {
          return <DiscoverabilityNameScene onComplete={onComplete} />;
        }
      };
      obj[ConstantsIOS.DiscoverabilityScenes.NAME] = obj;
      return obj;
    }, items);
    intl = onComplete(closure_2[19]).intl;
    obj.headerBackTitle = intl.string(onComplete(closure_2[19]).t["13/7kX"]);
    return jsx(onComplete(closure_2[18]).Navigator, obj);
  }
}
const View = fn(17).View;
const useContactSyncModalStore = fn(12677).useContactSyncModalStore;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { header: null, container: null };
createStyles = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createStyles.header = createStyles;
createStyles.container = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: fn(5682).NAV_BAR_HEIGHT + 32 };
const React6 = createStyles.createStyles(createStyles);
RedesignDiscoverabilityModal.modalConfig = { animation: fn(1074).ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityModal.tsx");

export default RedesignDiscoverabilityModal;