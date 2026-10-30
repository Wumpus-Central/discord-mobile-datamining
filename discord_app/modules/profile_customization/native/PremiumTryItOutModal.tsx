// === Module 16496: PremiumTryItOutModal ===

// Module 16496 (PremiumTryItOutModal)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8750 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire } = Constants);
const PremiumUpsellTypes = fn(1386).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/PremiumTryItOutModal.tsx");

export default function PremiumTryItOutModal(initialTarget) {
  initialTarget = initialTarget.initialTarget;
  const onClose = initialTarget.onClose;
  let stateFromStores;
  let shuffleButtonLocation;
  const items = [shuffleButtonLocation];
  stateFromStores = initialTarget(stateFromStores[5]).useStateFromStores(items, () => shuffleButtonLocation.getCurrentUser());
  let obj = initialTarget(stateFromStores[5]);
  const tmp2Result = onClose(stateFromStores[6])(onClose(stateFromStores[7]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const sourceAnalyticsLocations = tmp2Result.sourceAnalyticsLocations;
  let tmp2 = onClose(stateFromStores[6]);
  shuffleButtonLocation = initialTarget(stateFromStores[8]).useTryItOutMobileRefreshConfig("PremiumTryItOutModal").shuffleButtonLocation;
  const tmp4 = onClose(stateFromStores[9])();
  closure_5 = tmp4;
  const items1 = [sourceAnalyticsLocations];
  const effect = sourceAnalyticsLocations.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: { page: constants2.USER_SETTINGS }, location_stack: sourceAnalyticsLocations };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = sourceAnalyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items2);
  const items3 = [stateFromStores, initialTarget, onClose, tmp4, shuffleButtonLocation];
  const memo = sourceAnalyticsLocations.useMemo(() => {
    const root = { title: null, headerLeft: null, headerRight: null, render: null };
    let intl = util.intl;
    root.title = intl.string(util.t.PxUx8e);
    root.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
    let fn;
    if ("header" === shuffleButtonLocation) {
      fn = () => {
        const obj = { IconComponent: initialTarget(stateFromStores[15]).DiceIcon, IconComponentSize: "md", onPress, accessibilityLabel: null, accessibilityHint: null };
        const intl = initialTarget(stateFromStores[12]).intl;
        obj.accessibilityLabel = intl.string(initialTarget(stateFromStores[12]).t.VzqqFC);
        const intl2 = initialTarget(stateFromStores[12]).intl;
        obj.accessibilityHint = intl2.string(initialTarget(stateFromStores[12]).t.bBRdiB);
        return jsx(initialTarget(stateFromStores[14]).HeaderActionButton, { IconComponent: initialTarget(stateFromStores[15]).DiceIcon, IconComponentSize: "md", onPress, accessibilityLabel: null, accessibilityHint: null });
      };
    }
    root.headerRight = fn;
    root.render = function render() {
      let tmp2 = null;
      if (null != closure_1_2) {
        const obj = { currentUser: tmp, initialTarget };
        tmp2 = jsx(onClose(stateFromStores[16]), { currentUser: tmp, initialTarget });
      }
      return tmp2;
    };
    return { root };
  }, items3);
  let obj2 = initialTarget(stateFromStores[8]);
  return jsx(initialTarget(stateFromStores[6]).AnalyticsLocationProvider, { value: tmp2Result.analyticsLocations, children: jsx(initialTarget(stateFromStores[17]).Modal, { initialRouteName: "root", screens: memo }) });
};