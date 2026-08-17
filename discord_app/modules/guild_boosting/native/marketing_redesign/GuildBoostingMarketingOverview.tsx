// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/GuildStore.tsx";
import closure_7 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ AnalyticEvents: closure_8, AnalyticsPages: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ wrapper: { paddingBottom: 24 } });
const result = require("set").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx");

export default function GuildBoostingMarketingOverview(guildId) {
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  let obj = guildId(stateFromStores[8]);
  const giftCardMobileConsumptionHalfsheet = obj.useGiftCardMobileConsumptionHalfsheet();
  if (guildBoostSlots != null) {
    const first = guildBoostSlots[0];
  }
  let tmp2Result = tmp2(tmp3[9]);
  const items = [closure_6];
  stateFromStores = tmp2Result.useStateFromStores(items, () => closure_1_6.getGuild(guildId));
  tmp2Result = tmp2(tmp3[10]);
  const navigation = tmp2Result.useNavigation();
  const analyticsLocations = guildBoostSlots(tmp3[11])().analyticsLocations;
  let obj3 = analyticsLocations;
  const tmp9 = navigation(analyticsLocations.useState(false), 2);
  closure_5 = tmp9[1];
  let tmp = callback3();
  [closure_6, closure_7] = navigation(analyticsLocations.useState(0), 2);
  closure_8 = analyticsLocations.useRef(false);
  const tmp11 = guildBoostSlots(stateFromStores[12])(() => Date.now());
  closure_9 = tmp11;
  const tmp12 = guildBoostSlots(stateFromStores[13])({ forceFetch: true });
  const tmp10 = navigation(analyticsLocations.useState(0), 2);
  const items1 = [closure_7];
  const stateFromStores1 = guildId(stateFromStores[9]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  if (null != stateFromStores1) {
    let UNSPECIFIED = stateFromStores1.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp2(tmp3[14]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items2 = [navigation, guildBoostSlots, ];
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items2[2] = name;
  const layoutEffect = obj3.useLayoutEffect(() => {
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
  const effect = obj3.useEffect(() => () => {
    let obj = closure_1_1(closure_1_2[15]);
    obj = { type: closure_1_9.PREMIUM_GUILD_USER_MODAL, location_stack: closure_4, guild_id: closure_0, duration_open_ms: Date.now() - closure_9 };
    obj.track(closure_1_8.MODAL_DISMISSED, obj);
  }, items3);
  const effect1 = obj3.useEffect(() => {
    guildBoostSlots(stateFromStores[16]).wait(() => {
      const premiumSubscriptionPlans = callback(7223).fetchPremiumSubscriptionPlans();
      const obj = callback(7223);
      const paymentSources = callback(4466).fetchPaymentSources();
    });
  }, []);
  let tmp18 = null;
  if (null != stateFromStores) {
    obj = { children: null };
    obj = { contentContainerStyle: null, onScroll: null, scrollEventThrottle: 16, children: null };
    obj[0] = tmp.wrapper;
    obj[1] = function onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      const current = ref.current;
      let tmp3 = !current;
      if (!current) {
        const sum = nativeEvent.layoutMeasurement.height + contentOffset.y;
        tmp3 = sum >= tmp.height - guildId(stateFromStores[19]).VISIBILITY_OFFSET;
      }
      if (tmp3) {
        let obj = guildBoostSlots(stateFromStores[15]);
        obj = { type: null, location_stack: null, guild_id: null };
        obj[0] = constants.PREMIUM_GUILD_USER_MODAL;
        obj[1] = analyticsLocations;
        obj[2] = stateFromStores.id;
        obj.track(ref.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
        ref.current = true;
      }
      callback(contentOffset.y >= closure_6);
    };
    obj1 = { guild: null, previousGuildSubscriptionSlot: null, onLayout: null, fractionalPremiumInfo: null, premiumGroupRole: null };
    obj1[0] = stateFromStores;
    obj1[1] = first;
    obj1[2] = function onLayout(nativeEvent) {
      return currentUser(nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height);
    };
    obj1[3] = tmp12;
    obj1[4] = UNSPECIFIED;
    const items4 = [callback(tmp8(tmp3[20]), obj1), , , , , ];
    const obj2 = { guild: null };
    obj2[0] = stateFromStores;
    items4[1] = callback(tmp8(tmp3[21]), obj2);
    obj3 = { guild: null };
    obj3[0] = stateFromStores;
    items4[2] = callback(tmp8(tmp3[22]), obj3);
    items4[3] = callback(tmp8(tmp3[23]), {});
    items4[4] = callback(tmp8(tmp3[24]), {});
    items4[5] = callback(tmp8(tmp3[25]), {});
    obj[3] = items4;
    const items5 = [callback2(closure_5, obj), ];
    const obj4 = { guild: null, previousGuildSubscriptionSlot: null, isVisible: null, fractionalPremiumState: null, premiumGroupRole: null };
    obj4[0] = stateFromStores;
    obj4[1] = first;
    obj4[2] = tmp9[0];
    obj4[3] = tmp12.fractionalState;
    obj4[4] = UNSPECIFIED;
    items5[1] = callback(tmp8(tmp3[19]), obj4);
    obj[0] = items5;
    tmp18 = callback2(closure_12, obj);
  }
  return tmp18;
};