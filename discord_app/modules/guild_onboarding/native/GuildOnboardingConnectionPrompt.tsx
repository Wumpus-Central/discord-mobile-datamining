// === Module 7136: GuildOnboardingConnectionPrompt ===

// Module 7136 (GuildOnboardingConnectionPrompt)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import get from "get" /* 6801 */;
import recomputeFromAppTokens from "recomputeFromAppTokens" /* 5289 */;
import set from "set" /* 5221 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import handleUpdate from "handleUpdate" /* 6788 */;
import { OnboardingConnectionType } from "serverPromptToClientPrompt" /* 5286 */;
import { GuildOnboardingModalStates as closure_12 } from "GUILD_ONBOARDING_MODAL_KEY" /* 6785 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createCacheKey = { display: "flex", flex: 1, flexGrow: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, marginBottom: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexGrow: 1, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[5] = { marginTop: ThemesDefault.space.PX_8 };
createCacheKey[6] = { marginTop: ThemesDefault.space.PX_8 };
createCacheKey[7] = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: ThemesDefault.space.PX_8, position: "absolute", width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[8] = { width: "100%", paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx");

export default function GuildOnboardingConnectionPrompt(guildId) {
  guildId = guildId.guildId;
  const onComplete = guildId.onComplete;
  const isLastStep = guildId.isLastStep;
  let stateFromStores3;
  let stateFromStores4;
  const tmp = callback2();
  let obj = guildId(isLastStep[14]);
  const navigation = obj.useNavigation();
  const bottom = onComplete(isLastStep[15])().bottom;
  const sum = 64 + bottom;
  const sum1 = sum + onComplete(isLastStep[13]).space.PX_8;
  closure_4 = navigation.useRef(false);
  obj1 = guildId(isLastStep[16]);
  const items = [stateFromStores4];
  const stateFromStores = obj1.useStateFromStores(items, () => stateFromStores4.getOnboardingConnections(guildId));
  let obj2 = guildId(isLastStep[16]);
  const items1 = [stateFromStores4];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => stateFromStores4.getOnboardingPromptsForOnboarding(guildId));
  let obj3 = guildId(isLastStep[16]);
  const items2 = [stateFromStores3];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => stateFromStores3.getGuild(guildId));
  let obj4 = guildId(isLastStep[16]);
  const items3 = [stateFromStoresArray];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => stateFromStoresArray.getRulesPrompt(guildId));
  let obj5 = guildId(isLastStep[16]);
  const items4 = [stateFromStores4];
  stateFromStores3 = obj5.useStateFromStores(items4, () => stateFromStores4.isLoading());
  let obj6 = guildId(isLastStep[16]);
  const items5 = [stateFromStores1, stateFromStores2];
  const items6 = [stateFromStores];
  stateFromStores4 = obj6.useStateFromStores(items5, () => {
    const iter = stateFromStores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let connection_type = nextResult.connection_type;
      if (OnboardingConnectionType.APPLICATION === connection_type) {
        if (null != stateFromStores1.getNewestTokenForApplication(tmp3.application_id)) {
          iter.return();
          let flag2 = true;
          return true;
        }
      } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
        if (null != tmp3.provider_id) {
          let account = stateFromStores2.getAccount(null, tmp3.provider_id);
          if (null != account) {
            if (!tmp10.revoked) {
              iter.return();
              let flag = true;
              return true;
            }
          }
        }
      } else {
        let connection_type2 = tmp3.connection_type;
      }
      continue;
    }
    return false;
  }, items6);
  const items7 = [guildId, stateFromStores3, stateFromStores];
  const effect = navigation.useEffect(() => {
    if (!stateFromStores3) {
      if (0 !== stateFromStores.length) {
        if (!ref.current) {
          let obj = guildId(isLastStep[17]);
          const providerConnectionState = obj.getProviderConnectionState(stateFromStores);
          const applicationConnectionState = guildId(isLastStep[17]).getApplicationConnectionState(stateFromStores);
          const obj2 = guildId(isLastStep[17]);
          obj = {};
          const obj3 = onComplete(isLastStep[18]);
          const merged = Object.assign(guildId(isLastStep[19]).collectGuildAnalyticsMetadata(guildId));
          obj.step = guildId(isLastStep[20]).CONNECTIONS_STEP;
          obj.required = false;
          ({ connected: obj4.provider_connections_connected, notConnected: obj4.provider_connections_not_connected } = providerConnectionState);
          ({ connected: obj4.application_connections_connected, notConnected: obj4.application_connections_not_connected } = applicationConnectionState);
          obj3.track(AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, obj);
          tmp12.current = true;
          const obj5 = guildId(isLastStep[19]);
        }
      }
    }
  }, items7);
  const items8 = [stateFromStoresArray.length, stateFromStores1, stateFromStores2, navigation, onComplete, stateFromStores, stateFromStores4, isLastStep, guildId];
  const callback = navigation.useCallback(() => {
    let obj = guildId(isLastStep[17]);
    const providerConnectionState = obj.getProviderConnectionState(stateFromStores);
    const applicationConnectionState = guildId(isLastStep[17]).getApplicationConnectionState(stateFromStores);
    const obj2 = guildId(isLastStep[17]);
    obj = {};
    const obj3 = onComplete(isLastStep[18]);
    const merged = Object.assign(guildId(isLastStep[19]).collectGuildAnalyticsMetadata(guildId));
    obj.step = guildId(isLastStep[20]).CONNECTIONS_STEP;
    obj.skipped = !stateFromStores4;
    obj.back = false;
    obj.options_selected = 0;
    obj.in_onboarding = true;
    obj.is_final_step = isLastStep;
    ({ connected: obj4.provider_connections_connected, notConnected: obj4.provider_connections_not_connected } = providerConnectionState);
    ({ connected: obj4.application_connections_connected, notConnected: obj4.application_connections_not_connected } = applicationConnectionState);
    obj3.track(AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, obj);
    if (stateFromStoresArray.length > 0) {
      navigation.push(closure_1_12.PROMPT, { currentPrompt: 0 });
    } else {
      if (tmpResult.showRulesInOnboarding(stateFromStores1, stateFromStores2)) {
        navigation.push(closure_1_12.RULES);
      } else {
        onComplete();
      }
      tmpResult = guildId(isLastStep[17]);
    }
    const obj5 = guildId(isLastStep[19]);
  }, items8);
  obj = { top: true, style: items9, children: null };
  items9 = [, ];
  ({ flex: arr12[0], container: arr12[1] } = tmp);
  if (stateFromStores3) {
    obj = { style: null, children: null };
    const items10 = [tmp.flex, { justifyContent: "center", alignItems: "center" }];
    obj[0] = items10;
    obj1 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[23]).intl;
    obj1[2] = intl4.string(tmp2(tmp3[23]).t.ZTNur7);
    obj[1] = callback(tmp2(tmp3[22]).Text, obj1);
    obj[2] = callback(closure_4, obj);
    let tmp19 = obj;
  } else {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.flex;
    obj3 = { contentContainerStyle: null, children: null };
    const items11 = [tmp.scrollContainer, ];
    obj4 = { paddingBottom: null };
    obj4[0] = sum1;
    items11[1] = obj4;
    obj3[0] = items11;
    obj5 = { style: null, children: null };
    obj5[0] = tmp.header;
    obj6 = { style: null, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
    obj6[0] = tmp.title;
    const intl = tmp2(tmp3[23]).intl;
    obj6[4] = intl.string(tmp2(tmp3[23]).t.eDVMrA);
    const items12 = [callback(tmp2(tmp3[22]).Text, obj6), ];
    const obj7 = { style: null, variant: "text-md/normal", color: "text-muted", children: null };
    obj7[0] = tmp.description;
    const intl2 = tmp2(tmp3[23]).intl;
    obj7[3] = intl2.string(tmp2(tmp3[23]).t.BozOXu);
    items12[1] = callback(tmp2(tmp3[22]).Text, obj7);
    obj5[1] = items12;
    const items13 = [callback(closure_4, obj5), ];
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.connectionsList;
    obj8[1] = stateFromStores.map((item, index) => {
      const obj = { connection: item, guildId, location: onComplete(isLastStep[25]).GUILD_ONBOARDING };
      return closure_1_14(onComplete(isLastStep[24]), obj, index);
    });
    items13[1] = callback(closure_4, obj8);
    obj3[1] = items13;
    const items14 = [callback(stateFromStores, obj3), ];
    const obj9 = { style: null, children: null };
    const items15 = [, , ];
    ({ footer: arr17[0], footerContent: arr17[1] } = tmp);
    const obj10 = { paddingBottom: null };
    obj10[0] = bottom;
    items15[2] = obj10;
    obj9[0] = items15;
    if (stateFromStores4) {
      let str = "primary";
    } else {
      str = "secondary";
    }
    const obj11 = { variant: null, size: "md", text: null, onPress: null, grow: true };
    obj11[0] = str;
    const intl3 = tmp2(tmp3[23]).intl;
    const string = intl3.string;
    const t = tmp2(tmp3[23]).t;
    if (isLastStep) {
      const _HermesInternal = HermesInternal;
      let combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
    } else if (stateFromStores4) {
      combined = string(t.PDTjLN);
    } else {
      combined = string(t["5Wxrcd"]);
    }
    obj11[2] = combined;
    obj11[3] = callback;
    obj9[1] = callback(tmp2(tmp3[26]).Button, obj11);
    items14[1] = callback(closure_4, obj9);
    obj2[1] = items14;
    obj[2] = callback(closure_4, obj2);
    tmp19 = obj;
  }
  return callback(guildId(isLastStep[21]).SafeAreaPaddingView, tmp19);
};