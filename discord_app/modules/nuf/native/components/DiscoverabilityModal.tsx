// === Module 12747: DiscoverabilityModal ===

// Module 12747 (DiscoverabilityModal)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import Navigator from "Navigator" /* 7000 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12684 */;
import ContactSyncNameInputDefault from "ContactSyncNameInput" /* 12697 */;
import NUFActionCreators from "NUFActionCreators" /* 12704 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

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
    const obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (allowEmail) {
      if (null != stateFromStores) {
        if (allowPhone) {
          navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
        }
      }
    }
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
    const result = allowPhone(12704).startContactSyncForDiscoverability(arg0);
    const obj = allowPhone(12704);
    const result1 = allowPhone(12704).closeDiscoverabilityModal(false);
  }, []);
  obj = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  if (name == null) {
    name = "";
  }
  obj.initialName = name;
  obj.children = jsx(ContactSyncNameInputDefault, { onNext: callback, loading: false, initialName: null });
  return <View onNext={callback} loading={false} initialName={null} />;
}
class DiscoverabilityModal {
  constructor() {
    obj = {
      screens: closure_3.useMemo(() => {
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
              render() {
                return closure_1_7(closure_1_9, {});
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
                return closure_1_7(closure_1_10, {});
              }
            };
            obj[ConstantsIOS.DiscoverabilityScenes.NAME] = obj;
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
const useContactSyncModalStore = fn(12677).useContactSyncModalStore;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: fn(5682).NAV_BAR_HEIGHT + 32 };
createStyles.container = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
DiscoverabilityModal.modalConfig = { animation: fn(1074).ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default DiscoverabilityModal;