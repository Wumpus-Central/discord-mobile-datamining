// === Module 6887: GuildBoostingMarketingOverview ===

// Module 6887 (GuildBoostingMarketingOverview)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GuildBoostingMarketingPersistentCta from "GuildBoostingMarketingPersistentCta" /* 6906 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore_mod from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let constants, guildId, navigation;

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const ScrollView = react_native.ScrollView;
let GuildStore = GuildStore_mod;
({ AnalyticEvents: metroImportAll, AnalyticsPages: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ wrapper: { paddingBottom: 24 } });
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_6;
  let first1;
  let stateFromStores;
  let tmp21;
  let tmp22;
  let tmp = guildId;
  let obj = guildId(stateFromStores[9]);
  const cResult = obj.c(53);
  closure_13();
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  let obj2 = guildId(stateFromStores[10]);
  const giftCardMobileConsumptionHalfsheet = obj2.useGiftCardMobileConsumptionHalfsheet();
  if (guildBoostSlots != null) {
    const first = guildBoostSlots[0];
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = R;
  } else {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult = tmp(stateFromStores[11]);
  stateFromStores = tmpResult.useStateFromStores(first1, R);
  const tmpResult3 = tmp(stateFromStores[12]);
  navigation = tmpResult3.useNavigation();
  const analyticsLocations = guildBoostSlots(tmp2[13])().analyticsLocations;
  [r10055, ScrollView] = navigation(analyticsLocations.useState(false), 2);
  navigation(analyticsLocations.useState(false), 2);
  const tmp14 = navigation(analyticsLocations.useState(0), 2);
  GuildStore = tmp14[0];
  const currentUser = tmp14[1];
  const ref = analyticsLocations.useRef(false);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[3] = tmp16;
  } else {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  constants = guildBoostSlots(stateFromStores[14])(tmp16);
  guildBoostSlots(stateFromStores[14])(tmp16);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[4] = tmp19;
  } else {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  guildBoostSlots(stateFromStores[15])(tmp19);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items1 = [currentUser];
    const fn = function j() {
      return currentUser.getCurrentUser();
    };
    cResult[5] = items1;
    cResult[6] = fn;
    tmp22 = fn;
    tmp21 = items1;
  } else {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    tmp22 = cResult[6];
  }
  const tmpResult4 = tmp(stateFromStores[11]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp21, tmp22);
  if (null != stateFromStores1) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  } else {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmp24 = cResult[7];
  if (stateFromStores != null) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (tmp24 === undefined) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (stateFromStores != null) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const fn2 = function z() {
    let str = "";
    const setOptions = navigation.setOptions;
    const tmp = null != guildBoostSlots && guildBoostSlots.length > 0;
    if (!tmp) {
      let str2;
      if (stateFromStores != null) {
        str2 = stateFromStores.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      str = str2;
    }
    setOptions({ title: str });
  };
  cResult[7] = undefined;
  cResult[8] = guildBoostSlots;
  cResult[9] = navigation;
  cResult[10] = fn2;
}) : ((guildId) => {
  let UNSPECIFIED;
  let currentUser;
  let first;
  let items4;
  let items5;
  let stateFromStores;
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  let tmp3 = stateFromStores;
  let tmp = closure_13();
  let obj = guildId(stateFromStores[10]);
  const giftCardMobileConsumptionHalfsheet = obj.useGiftCardMobileConsumptionHalfsheet();
  if (guildBoostSlots != null) {
    first = guildBoostSlots[0];
  }
  const items = [GuildStore];
  const tmp2Result = guildId(tmp3[11]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp2Result3 = guildId(tmp3[12]);
  navigation = tmp2Result3.useNavigation();
  const analyticsLocations = guildBoostSlots(tmp3[13])().analyticsLocations;
  const tmp9 = navigation(analyticsLocations.useState(false), 2);
  let closure_5 = tmp9[1];
  const first1 = tmp9[0];
  [GuildStore, UserStore] = navigation(analyticsLocations.useState(0), 2);
  navigation(analyticsLocations.useState(0), 2);
  const ref = analyticsLocations.useRef(false);
  const tmp12 = guildBoostSlots(tmp3[14])(() => Date.now());
  constants = tmp12;
  const tmp13 = guildBoostSlots(tmp3[15])({ forceFetch: true });
  const items1 = [UserStore];
  const tmp2Result4 = guildId(tmp3[11]);
  const stateFromStores1 = tmp2Result4.useStateFromStores(items1, () => UserStore.getCurrentUser());
  if (null != stateFromStores1) {
    UNSPECIFIED = stateFromStores1.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp2(tmp3[16]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items2 = [navigation, guildBoostSlots, ];
  let name;
  const useLayoutEffect = obj4.useLayoutEffect;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items2[2] = name;
  const layoutEffect = useLayoutEffect(() => {
    let str = "";
    const setOptions = navigation.setOptions;
    const tmp = null != guildBoostSlots && guildBoostSlots.length > 0;
    if (!tmp) {
      let str2;
      if (stateFromStores != null) {
        str2 = stateFromStores.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      str = str2;
    }
    setOptions({ title: str });
  }, items2);
  const items3 = [guildId, analyticsLocations, tmp12];
  const effect = obj4.useEffect(() => {
    let guild_id;
    let location_stack;
    return () => {
      const obj = guildBoostSlots(stateFromStores[17]);
      const obj2 = { type: constants2.PREMIUM_GUILD_USER_MODAL, location_stack, guild_id, duration_open_ms: Date.now() - closure_1_9 };
      obj.track(constants.MODAL_DISMISSED, obj2);
    };
  }, items3);
  const effect1 = obj4.useEffect(() => {
    let obj = guildBoostSlots(stateFromStores[18]);
    obj.wait(() => {
      const obj = guildId(stateFromStores[19]);
      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans();
      const obj2 = guildId(stateFromStores[20]);
      const paymentSources = obj2.fetchPaymentSources();
    });
  }, []);
  let tmp19 = null;
  if (null != stateFromStores) {
    let obj2 = { children: items5 };
    const obj3 = {
      contentContainerStyle: tmp.wrapper,
      onScroll(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const contentOffset = nativeEvent.contentOffset;
          const current = ref.current;
          let tmp3 = !current;
          if (tmp3) {
            const sum = nativeEvent.layoutMeasurement.height + contentOffset.y;
            tmp3 = sum >= tmp.height - GuildBoostingMarketingPersistentCta.VISIBILITY_OFFSET;
          }
          if (tmp3) {
            const obj2 = { type: constants.PREMIUM_GUILD_USER_MODAL, location_stack: analyticsLocations, guild_id: stateFromStores.id };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
            ref.current = true;
          }
          closure_5(contentOffset.y >= GuildStore);
        },
      scrollEventThrottle: 16,
      children: items4
    };
    const obj5 = {
      guild: stateFromStores,
      previousGuildSubscriptionSlot: first,
      onLayout(nativeEvent) {
          return UserStore(nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height);
        },
      fractionalPremiumInfo: tmp13,
      premiumGroupRole: UNSPECIFIED
    };
    items4 = [closure_10(guildBoostSlots(tmp3[22]), obj5), , , , , ];
    const obj6 = { guild: stateFromStores };
    items4[1] = closure_10(guildBoostSlots(tmp3[23]), obj6);
    const obj7 = { guild: stateFromStores };
    items4[2] = closure_10(guildBoostSlots(tmp3[24]), obj7);
    items4[3] = closure_10(guildBoostSlots(tmp3[25]), {});
    items4[4] = closure_10(guildBoostSlots(tmp3[26]), {});
    items4[5] = closure_10(guildBoostSlots(tmp3[27]), {});
    items5 = [closure_11(closure_5, obj3), ];
    const obj8 = { guild: stateFromStores, previousGuildSubscriptionSlot: first, isVisible: first1, fractionalPremiumState: tmp13.fractionalState, premiumGroupRole: UNSPECIFIED };
    items5[1] = closure_10(guildBoostSlots(tmp3[21]), obj8);
    tmp19 = closure_11(closure_12, obj2);
  }
  return tmp19;
});
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx");

export default tmp4;