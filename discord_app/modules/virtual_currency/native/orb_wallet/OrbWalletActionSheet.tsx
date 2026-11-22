// === Module 16299: OrbWalletActionSheet ===

// Module 16299 (OrbWalletActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import _modDef2375 from "module_2375" /* 2375 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import OrbChallengeActionCreators from "OrbChallengeActionCreators" /* 15019 */;
import OrbWalletCards from "OrbWalletCards" /* 16305 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import OrbChallengesStore from "OrbChallengesStore" /* 15017 */;

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
  items = [refetch];
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
        let stringResult = intl3.string(_modDef2375.FYb5rH);
      } else {
        const intl2 = util.intl;
        const obj2 = {
          underlineHook(children) {
                return closure_2_11(reopenWallet(orbWalletAnalyticsPage[17]).Text, {
                  variant: "body-sm/normal",
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
        stringResult = intl2.format(_modDef2375.ggLzeg, obj2);
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
  obj6.title = intl.string(require("module_2375").H6Ny8N);
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
  const tmp2 = balance;
  const tmp3 = isPremiumSubscriber;
  isPremiumSubscriber = balance(isPremiumSubscriber[21]).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const analyticsLocations = analyticsPage(isPremiumSubscriber[11])().analyticsLocations;
  let obj2 = balance(isPremiumSubscriber[21]);
  items = [ref];
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
  let obj3 = balance(isPremiumSubscriber[13]);
  const orbWalletPrimaryCard = balance(isPremiumSubscriber[23]).useOrbWalletPrimaryCard(balance);
  const effect1 = analyticsLocations.useEffect(() => {
    const result = balance(isPremiumSubscriber[18]).ackOrbChallengesUnread();
  }, []);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.section, children: null };
  const obj4 = balance(isPremiumSubscriber[23]);
  const items2 = [closure_11(balance(isPremiumSubscriber[20]).OrbBalanceHeader, { orbBalance: balance, hideNitroUpsell: orbWalletPrimaryCard.visibleCardType === balance(isPremiumSubscriber[23]).OrbWalletPrimaryCardType.NITRO_UPSELL }), ];
  const merged = Object.assign(orbWalletPrimaryCard);
  items2[1] = closure_11(balance(isPremiumSubscriber[23]).OrbWalletPrimaryCard, {});
  obj6.children = items2;
  const items3 = [closure_12(challengesForOrbWallet, obj6), , , , ];
  let tmp11Result = null == orbWalletPrimaryCard.visibleCardType;
  if (tmp11Result) {
    const obj9 = { style: tmp.divider };
    tmp11Result = closure_11(tmp10, obj9);
  }
  items3[1] = tmp11Result;
  const obj7 = { orbBalance: balance, hideNitroUpsell: orbWalletPrimaryCard.visibleCardType === balance(isPremiumSubscriber[23]).OrbWalletPrimaryCardType.NITRO_UPSELL };
  const obj8 = {};
  items3[2] = closure_11(challengesForOrbWallet, { style: tmp.section, children: closure_11(StatefulOrbChallengesCard, { reopenWallet: reopenWallet.reopenWallet }) });
  items3[3] = closure_11(challengesForOrbWallet, { style: tmp.divider });
  const obj10 = { style: tmp.section, children: closure_11(StatefulOrbChallengesCard, { reopenWallet: reopenWallet.reopenWallet }) };
  const obj11 = { style: tmp.divider };
  items3[4] = closure_11(challengesForOrbWallet, { style: tmp.section, children: closure_11(tmp2(tmp3[20]).OrbWalletFooter, {}) });
  obj5.children = items3;
  return closure_12(challengesForOrbWallet, obj5);
}
const View = fn(17).View;
let closure_7 = fn(15017).OrbChallengesDisplayErrorType;
let closure_8 = fn(16297).ORB_WALLET_ACTION_SHEET_KEY;
const AnalyticEvents = fn(1071).AnalyticEvents;
const PremiumTypes = fn(1388).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4913);
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
        items = [tmp, AnalyticsLocationDefault.ORB_WALLET];
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