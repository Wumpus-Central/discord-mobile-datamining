// === Module 12998: DiscoverabilityModal ===

// Module 12998 (DiscoverabilityModal)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import Navigator from "Navigator" /* 7240 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12935 */;
import ContactSyncNameInputDefault from "ContactSyncNameInput" /* 12948 */;
import NUFActionCreators from "NUFActionCreators" /* 12955 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function DiscoverabilityLandingScene() {
  navigation = navigation(allowPhone[9]).useNavigation();
  let obj = navigation(allowPhone[9]);
  const tmp = allowPhone;
  const items = [UserStore];
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
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone: allowPhone, email: allowEmail });
    if (allowEmail) {
      if (null != stateFromStores) {
        if (allowPhone) {
          navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
        }
      }
    }
    const obj2 = { phone: allowPhone, email: allowEmail };
    const result1 = NUFActionCreators.closeDiscoverabilityModal(false);
  }, items1);
  return jsx(stateFromStores(tmp[14]), { onNext });
}
function DiscoverabilityNameScene() {
  const tmp = closure_8();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone];
  const effect = noop.useEffect(() => {
    if (!allowPhone) {
      const result = NUFActionCreators.closeDiscoverabilityModal(false);
    }
  }, items);
  let obj = { style: tmp.container, children: null };
  const callback = noop.useCallback((arg0) => {
    const result = allowPhone(12955).startContactSyncForDiscoverability(arg0);
    const obj = allowPhone(12955);
    const result1 = allowPhone(12955).closeDiscoverabilityModal(false);
  }, []);
  const obj2 = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  if (name == null) {
    name = "";
  }
  obj2.initialName = name;
  obj.children = jsx(ContactSyncNameInputDefault, { onNext: callback, loading: false, initialName: null });
  return <View style={tmp.container}>{null}</View>;
}
class DiscoverabilityModal {
  constructor() {
    obj = {
      screens: closure_3.useMemo(() => {
            const obj = {};
            obj[ConstantsIOS.DiscoverabilityScenes.LANDING] = {
              ignoreKeyboard: true,
              impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerLeft() {
                return null;
              },
              headerTitle() {
                return null;
              },
              render() {
                return closure_1_7(closure_1_9, {});
              }
            };
            const obj2 = {
              ignoreKeyboard: true,
              impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerLeft() {
                return null;
              },
              headerTitle() {
                return null;
              },
              render() {
                return closure_1_7(closure_1_9, {});
              }
            };
            obj[ConstantsIOS.DiscoverabilityScenes.NAME] = {
              ignoreKeyboard: true,
              impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
              fullscreen: true,
              headerTitle() {
                return null;
              },
              render() {
                return closure_1_7(closure_1_10, {});
              }
            };
            return obj;
          }, []),
      initialRouteName: closure_0(closure_2[12]).DiscoverabilityScenes.LANDING,
      headerBackTitle: null
    };
    intl = closure_0(closure_2[18]).intl;
    obj.headerBackTitle = intl.string(closure_0(closure_2[18]).t["13/7kX"]);
    return jsx(closure_0(closure_2[17]).Navigator, obj);
  }
}
const View = fn(17).View;
const useContactSyncModalStore = fn(12928).useContactSyncModalStore;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: fn(5894).NAV_BAR_HEIGHT + 32 } };
let closure_8 = createStyles.createStyles(obj2);
DiscoverabilityModal.modalConfig = { animation: fn(1074).ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default DiscoverabilityModal;