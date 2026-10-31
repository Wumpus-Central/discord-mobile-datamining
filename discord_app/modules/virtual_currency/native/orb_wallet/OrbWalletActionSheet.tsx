// === Module 16889: OrbWalletActionSheet ===

// Module 16889 (OrbWalletActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef2172 from "module_2172" /* 2172 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import OrbChallengeActionCreators from "OrbChallengeActionCreators" /* 15627 */;
import OrbWalletCards from "OrbWalletCards" /* 16901 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import OrbChallengesStore from "OrbChallengesStore" /* 15625 */;

require = fn;
function StatefulOrbChallengesCard(reopenWallet) {
  reopenWallet = reopenWallet.reopenWallet;
  let orbWalletAnalyticsPage;
  let tmp = closure_13();
  importDefault = tmp;
  orbWalletAnalyticsPage = reopenWallet(orbWalletAnalyticsPage[10]).useOrbWalletAnalyticsPage();
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let obj = reopenWallet(orbWalletAnalyticsPage[10]);
  const fetchOrbChallenges = reopenWallet(orbWalletAnalyticsPage[12]).useFetchOrbChallenges({ shouldFetch: true });
  const challengesForOrbWallet = fetchOrbChallenges.challengesForOrbWallet;
  const refetch = fetchOrbChallenges.refetch;
  let obj2 = reopenWallet(orbWalletAnalyticsPage[12]);
  const items = [refetch];
  const stateFromStores = reopenWallet(orbWalletAnalyticsPage[13]).useStateFromStores(items, () => {
    const currentUser = refetch.getCurrentUser();
    return null != currentUser && !currentUser.isClaimed();
  });
  let obj3 = reopenWallet(orbWalletAnalyticsPage[13]);
  const items1 = [stateFromStores];
  const orbChallengesDisplayError = reopenWallet(orbWalletAnalyticsPage[13]).useStateFromStoresObject(items1, () => ({ orbChallengesDisplayError: stateFromStores.orbChallengesDisplayError })).orbChallengesDisplayError;
  const obj4 = reopenWallet(orbWalletAnalyticsPage[13]);
  const openNitroCheckoutFromOrbWallet = reopenWallet(orbWalletAnalyticsPage[10]).useOpenNitroCheckoutFromOrbWallet(require("AnalyticsLocation").ORB_CHALLENGE_DISCOVERY_CLICK);
  const items2 = [orbChallengesDisplayError, refetch, stateFromStores, tmp.tryAgainLink];
  const items3 = [stateFromStores];
  const memo = analyticsLocations.useMemo(() => {
    if (null != orbChallengesDisplayError) {
      if (orbChallengesDisplayError.errorType === orbChallengesDisplayError.CLAIM_CHALLENGE) {
        const intl3 = util.intl;
        let stringResult = intl3.string(_modDef2172.FYb5rH);
      } else {
        const intl2 = util.intl;
        const obj2 = {
          underlineHook(children) {
                return closure_2_11(reopenWallet(orbWalletAnalyticsPage[17]).Text, {
                  variant: "text-sm/normal",
                  color: "text-default",
                  style: tryAgainLink.tryAgainLink,
                  onPress() {
                    return closure_1_5();
                  },
                  accessibilityRole: "button",
                  children
                });
              }
        };
        stringResult = intl2.format(_modDef2172.ggLzeg, obj2);
      }
      const obj3 = { type: "warning", message: stringResult, role: "status" };
    } else {
      let tmp2 = null;
      if (stateFromStores) {
        const obj = { type: "info", message: null, role: "status" };
        const intl = util.intl;
        obj.message = intl.string(util.t.qxk9zo);
        tmp2 = obj;
      }
      return tmp2;
    }
  }, items2);
  const items4 = [challengesForOrbWallet, analyticsLocations, orbWalletAnalyticsPage, openNitroCheckoutFromOrbWallet, reopenWallet];
  const callback = analyticsLocations.useCallback((arg0) => {
    if (stateFromStores) {
      let resolved = Promise.resolve();
    } else {
      resolved = OrbChallengeActionCreators.claimOrbChallenge(arg0);
    }
    return resolved;
  }, items3);
  const memo1 = analyticsLocations.useMemo(() => challengesForOrbWallet.map((achievementDefinitionId) => {
    let tmp = null;
    if (null != achievementDefinitionId.achievementDefinitionId) {
      tmp = reopenWallet(pageType[10]).ORB_CHALLENGE_DISCOVERY_CLICKS[achievementDefinitionId.achievementDefinitionId];
    }
    closure_0 = tmp;
    let tmp4 = achievementDefinitionId;
    if (null != tmp) {
      let obj = {};
      const merged = Object.assign(achievementDefinitionId);
      obj.onDiscoveryClick = function onDiscoveryClick() {
        const obj = reopenWallet(orbWalletAnalyticsPage[19]);
        obj.trackOrbsClick({ pageType, sectionType: closure_1(orbWalletAnalyticsPage[14]).ORB_WALLET, ctaObject: closure_1(orbWalletAnalyticsPage[14]).ORB_CHALLENGE_DISCOVERY_CLICK });
        closure_0({ analyticsLocations, openNitroCheckout, reopenWallet });
      };
      tmp4 = obj;
    }
    return tmp4;
  }), items4);
  const obj6 = { title: null, isLoading: null, inlineNoticeProps: null, challenges: null, onClaim: null };
  let intl = reopenWallet(orbWalletAnalyticsPage[15]).intl;
  obj6.title = intl.string(require("module_2172").H6Ny8N);
  obj6.isLoading = !fetchOrbChallenges.hasFetchedChallenges;
  obj6.inlineNoticeProps = memo;
  obj6.challenges = memo1;
  obj6.onClaim = callback;
  return closure_11(reopenWallet(orbWalletAnalyticsPage[20]).OrbChallengesCard, obj6);
}
function OrbWalletContent(reopenWallet) {
  const analyticsPage = reopenWallet.analyticsPage;
  let tmp = closure_13();
  balance = balance(isPremiumSubscriber[25]).useFetchVirtualCurrencyBalance().balance;
  isPremiumSubscriber = undefined;
  let ref;
  let obj = balance(isPremiumSubscriber[25]);
  isPremiumSubscriber = balance(isPremiumSubscriber[21]).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const analyticsLocations = analyticsPage(isPremiumSubscriber[11])().analyticsLocations;
  let obj2 = balance(isPremiumSubscriber[21]);
  const items = [ref];
  const stateFromStoresObject = balance(isPremiumSubscriber[13]).useStateFromStoresObject(items, () => ({ challengesForOrbWallet: ref.challengesForOrbWallet, hasFetchedChallenges: ref.hasFetchedChallenges }));
  const challengesForOrbWallet = stateFromStoresObject.challengesForOrbWallet;
  const hasFetchedChallenges = stateFromStoresObject.hasFetchedChallenges;
  ref = analyticsLocations.useRef(false);
  const items1 = [hasFetchedChallenges, challengesForOrbWallet, isPremiumSubscriber, balance, analyticsLocations, analyticsPage];
  const effect = analyticsLocations.useEffect(() => {
    let tmp = hasFetchedChallenges;
    if (hasFetchedChallenges) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      const obj2 = { location_stack: analyticsLocations, location_page: analyticsPage, location_section: AnalyticsLocationDefault.ORB_WALLET, location_object: AnalyticsLocationDefault.ORB_WALLET, wallet_primary_card_type: null, wallet_visible_achievements: null, wallet_visible_completed_achievements: null };
      const obj = AnalyticsUtilsDefault;
      obj2.wallet_primary_card_type = OrbWalletCards.getWalletPrimaryCardType(isPremiumSubscriber, balance);
      obj2.wallet_visible_achievements = challengesForOrbWallet.map((achievementIdentifier) => achievementIdentifier.achievementIdentifier);
      const found = challengesForOrbWallet.filter((achievementStatus) => achievementStatus.achievementStatus === balance(isPremiumSubscriber[24]).UserAchievementStatus.COMPLETED);
      obj2.wallet_visible_completed_achievements = found.map((achievementIdentifier) => achievementIdentifier.achievementIdentifier);
      obj.track(AnalyticEvents.ORB_WALLET_VIEWED, obj2);
    }
  }, items1);
  const effect1 = analyticsLocations.useEffect(() => {
    const result = balance(isPremiumSubscriber[18]).ackOrbChallengesUnread();
  }, []);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.section, children: null };
  const items2 = [closure_11(balance(isPremiumSubscriber[20]).OrbBalanceHeader, { orbBalance: balance }), closure_11(balance(isPremiumSubscriber[23]).OrbWalletPrimaryCard, { orbBalance: balance })];
  obj5.children = items2;
  const items3 = [closure_12(challengesForOrbWallet, obj5), , , ];
  let obj3 = balance(isPremiumSubscriber[13]);
  items3[1] = closure_11(challengesForOrbWallet, { style: tmp.section, children: closure_11(StatefulOrbChallengesCard, { reopenWallet: reopenWallet.reopenWallet }) });
  items3[2] = closure_11(challengesForOrbWallet, { style: tmp.divider });
  const obj6 = { style: tmp.section, children: closure_11(StatefulOrbChallengesCard, { reopenWallet: reopenWallet.reopenWallet }) };
  const obj7 = { style: tmp.divider };
  items3[3] = closure_11(challengesForOrbWallet, { style: tmp.section, children: closure_11(balance(isPremiumSubscriber[20]).OrbWalletFooter, {}) });
  obj4.children = items3;
  return closure_12(challengesForOrbWallet, obj4);
}
const View = fn(17).View;
let closure_7 = fn(15625).OrbChallengesDisplayErrorType;
let closure_8 = fn(16888).ORB_WALLET_ACTION_SHEET_KEY;
const AnalyticEvents = fn(1072).AnalyticEvents;
const PremiumTypes = fn(1385).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { width: "100%", paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, section: null, tryAgainLink: null, divider: null };
let obj3 = { width: "100%", paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.section = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.tryAgainLink = { textDecorationLine: "underline" };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles.createStyles(obj2);
class OrbWalletActionSheet {
  constructor(arg0) {
    closure_0 = global;
    source = global.source;
    analyticsPage = global.analyticsPage;
    items = [];
    items[0] = global;
    ref = closure_3.useRef(null);
    items1 = [];
    items1[0] = source;
    callback = closure_3.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_16), closure_8, closure_0);
    }, items);
    items2 = [];
    items2[0] = analyticsPage;
    memo = closure_3.useMemo(() => {
      if (typeof source === "string") {
        const items = [tmp, AnalyticsLocationDefault.ORB_WALLET];
        let items1 = items;
      } else {
        items1 = [AnalyticsLocationDefault.ORB_WALLET];
      }
      return items1;
    }, items1);
    memo1 = closure_3.useMemo(() => ({ analyticsPage }), items2);
    obj = { theme: global.themeOverride, children: null };
    obj1 = { newLocations: memo, children: null };
    obj5 = { value: memo1, children: null };
    obj6 = { ref, startExpanded: true, children: jsx(OrbWalletContent, { analyticsPage, reopenWallet: callback }) };
    obj5.children = jsx(closure_0(analyticsPage[29]).BottomSheet, obj6);
    obj1.children = jsx(closure_0(analyticsPage[10]).OrbWalletAnalyticsContext.Provider, obj5);
    obj.children = jsx(closure_0(analyticsPage[28]).AnalyticsLocationsProvider, obj1);
    return jsx(closure_0(analyticsPage[27]).ThemeContextProvider, obj);
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletActionSheet.tsx");

export default OrbWalletActionSheet;