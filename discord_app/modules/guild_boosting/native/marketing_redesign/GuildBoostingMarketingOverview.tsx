// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import GuildBoostingMarketingPersistentCta from "GuildBoostingMarketingPersistentCta.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsPages: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4757);
let closure_13 = createStyles.createStyles({ wrapper: { paddingBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx",
);

export default function GuildBoostingMarketingOverview(guildId) {
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  let tmp = closure_13();
  const giftCardMobileConsumptionHalfsheet = guildId(stateFromStores[8]).useGiftCardMobileConsumptionHalfsheet();
  if (guildBoostSlots != null) {
    const first = guildBoostSlots[0];
  }
  let obj = guildId(stateFromStores[8]);
  const items = [GuildStore];
  stateFromStores = guildId(stateFromStores[9]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp2Result = guildId(stateFromStores[9]);
  const navigation = guildId(stateFromStores[10]).useNavigation();
  const analyticsLocations = guildBoostSlots(tmp3[11])().analyticsLocations;
  const tmp9 = navigation(analyticsLocations.useState(false), 2);
  closure_5 = tmp9[1];
  const tmp2Result3 = guildId(stateFromStores[10]);
  [GuildStore, UserStore] = navigation(analyticsLocations.useState(0), 2);
  analyticsLocations.useRef(false);
  const tmp11 = guildBoostSlots(stateFromStores[12])(() => Date.now());
  closure_9 = tmp11;
  const tmp12 = guildBoostSlots(stateFromStores[13])({ forceFetch: true });
  const tmp10 = navigation(analyticsLocations.useState(0), 2);
  const items1 = [UserStore];
  const stateFromStores1 = guildId(stateFromStores[9]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  if (null != stateFromStores1) {
    let UNSPECIFIED = stateFromStores1.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp2(tmp3[14]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items2 = [navigation, guildBoostSlots];
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items2[2] = name;
  const layoutEffect = obj4.useLayoutEffect(() => {
    let tmp = null != guildBoostSlots;
    if (tmp) {
      tmp = guildBoostSlots.length > 0;
    }
    let str = "";
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
    navigation.setOptions({ title: str });
  }, items2);
  const items3 = [guildId, analyticsLocations, tmp11];
  const effect = obj4.useEffect(
    () => () => {
      const obj = guildBoostSlots(stateFromStores[15]);
      obj.track(constants.MODAL_DISMISSED, {
        type: constants2.PREMIUM_GUILD_USER_MODAL,
        location_stack,
        guild_id,
        duration_open_ms: Date.now() - closure_1_9,
      });
    },
    items3,
  );
  const effect1 = obj4.useEffect(() => {
    guildBoostSlots(stateFromStores[16]).wait(() => {
      const premiumSubscriptionPlans = guildId(7501).fetchPremiumSubscriptionPlans();
      const obj = guildId(7501);
      const paymentSources = guildId(5080).fetchPaymentSources();
    });
  }, []);
  let tmp18 = null;
  if (null != stateFromStores) {
    let obj2 = { children: null };
    const obj3 = {
      contentContainerStyle: tmp.wrapper,
      onScroll(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        const current = ref.current;
        let tmp3 = !current;
        if (!current) {
          const sum = nativeEvent.layoutMeasurement.height + contentOffset.y;
          tmp3 = sum >= tmp.height - GuildBoostingMarketingPersistentCta.VISIBILITY_OFFSET;
        }
        if (tmp3) {
          const obj2 = {
            type: constants2.PREMIUM_GUILD_USER_MODAL,
            location_stack: analyticsLocations,
            guild_id: stateFromStores.id,
          };
          AnalyticsUtilsDefault.track(constants.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
          ref.current = true;
        }
        closure_5(contentOffset.y >= GuildStore);
      },
      scrollEventThrottle: 16,
      children: null,
    };
    const obj5 = {
      guild: stateFromStores,
      previousGuildSubscriptionSlot: first,
      onLayout(nativeEvent) {
        return currentUser(nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height);
      },
      fractionalPremiumInfo: tmp12,
      premiumGroupRole: UNSPECIFIED,
    };
    const items4 = [closure_10(tmp8(tmp3[20]), obj5), , , , ,];
    const obj6 = { guild: stateFromStores };
    items4[1] = closure_10(tmp8(tmp3[21]), obj6);
    const obj7 = { guild: stateFromStores };
    items4[2] = closure_10(tmp8(tmp3[22]), obj7);
    items4[3] = closure_10(tmp8(tmp3[23]), {});
    items4[4] = closure_10(tmp8(tmp3[24]), {});
    items4[5] = closure_10(tmp8(tmp3[25]), {});
    obj3.children = items4;
    const items5 = [closure_11(closure_5, obj3)];
    const obj8 = {
      guild: stateFromStores,
      previousGuildSubscriptionSlot: first,
      isVisible: tmp9[0],
      fractionalPremiumState: tmp12.fractionalState,
      premiumGroupRole: UNSPECIFIED,
    };
    items5[1] = closure_10(tmp8(tmp3[19]), obj8);
    obj2.children = items5;
    tmp18 = closure_11(closure_12, obj2);
  }
  return tmp18;
}
