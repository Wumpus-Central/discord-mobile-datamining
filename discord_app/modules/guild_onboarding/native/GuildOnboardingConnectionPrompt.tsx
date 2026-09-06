// === Module 7159: GuildOnboardingConnectionPrompt ===

// Module 7159 (GuildOnboardingConnectionPrompt)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import GuildOnboardingPromptsActionCreators from "GuildOnboardingPromptsActionCreators" /* 7099 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7106 */;
import ConnectionCardDefault from "ConnectionCard" /* 7160 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import noop from "module_19" /* 19 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5572 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7100 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const OnboardingConnectionType = fn(7101).OnboardingConnectionType;
let closure_12 = fn(7097).GuildOnboardingModalStates;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, container: null, scrollContainer: null, header: null, title: null, description: null, connectionsList: null, footer: null, footerContent: null };
createStyles = { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5682).NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.scrollContainer = { display: "flex", flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj1 = { display: "flex", flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.header = { marginBottom: nativeDefault.space.PX_24 };
let obj2 = { marginBottom: nativeDefault.space.PX_24 };
createStyles.title = { marginBottom: nativeDefault.space.PX_8 };
let obj3 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.description = { marginTop: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_8 };
createStyles.connectionsList = { marginTop: nativeDefault.space.PX_8 };
let obj5 = { marginTop: nativeDefault.space.PX_8 };
createStyles.footer = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: nativeDefault.space.PX_8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj6 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: nativeDefault.space.PX_8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.footerContent = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_16 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx");

export default function GuildOnboardingConnectionPrompt(guildId) {
  guildId = guildId.guildId;
  const onComplete = guildId.onComplete;
  const isLastStep = guildId.isLastStep;
  let stateFromStores3;
  let stateFromStores4;
  let tmp = closure_16();
  let obj = guildId(isLastStep[14]);
  const navigation = obj.useNavigation();
  const bottom = onComplete(isLastStep[15])().bottom;
  const sum = 64 + bottom;
  const sum1 = sum + onComplete(isLastStep[13]).space.PX_8;
  const ref = navigation.useRef(false);
  let obj1 = guildId(isLastStep[16]);
  const items = [stateFromStores4];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId));
  let obj2 = guildId(isLastStep[16]);
  const items1 = [stateFromStores4];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId));
  let obj3 = guildId(isLastStep[16]);
  const items2 = [stateFromStores3];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let obj4 = guildId(isLastStep[16]);
  const items3 = [stateFromStoresArray];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => MemberVerificationFormStore.getRulesPrompt(guildId));
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
        if (null != AuthorizedAppsStore.getNewestTokenForApplication(tmp3.application_id)) {
          iter.return();
          let flag2 = true;
          return true;
        }
      } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
        if (null != tmp3.provider_id) {
          let account = ConnectedAccountsStore.getAccount(null, tmp3.provider_id);
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
          let obj = GuildOnboardingUtils;
          const providerConnectionState = obj.getProviderConnectionState(tmp);
          const applicationConnectionState = GuildOnboardingUtils.getApplicationConnectionState(tmp);
          obj = {};
          const obj3 = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
          obj.step = GuildOnboardingPromptsActionCreators.CONNECTIONS_STEP;
          obj.required = false;
          ({ connected: obj4.provider_connections_connected, notConnected: obj4.provider_connections_not_connected } = providerConnectionState);
          ({ connected: obj4.application_connections_connected, notConnected: obj4.application_connections_not_connected } = applicationConnectionState);
          obj3.track(AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, obj);
          tmp12.current = true;
        }
      }
    }
  }, items7);
  const items8 = [stateFromStoresArray.length, stateFromStores1, stateFromStores2, navigation, onComplete, stateFromStores, stateFromStores4, isLastStep, guildId];
  const callback = navigation.useCallback(() => {
    let obj = GuildOnboardingUtils;
    const providerConnectionState = obj.getProviderConnectionState(stateFromStores);
    const applicationConnectionState = GuildOnboardingUtils.getApplicationConnectionState(stateFromStores);
    obj = {};
    const obj3 = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj.step = GuildOnboardingPromptsActionCreators.CONNECTIONS_STEP;
    obj.skipped = !stateFromStores4;
    obj.back = false;
    obj.options_selected = 0;
    obj.in_onboarding = true;
    obj.is_final_step = isLastStep;
    ({ connected: obj4.provider_connections_connected, notConnected: obj4.provider_connections_not_connected } = providerConnectionState);
    ({ connected: obj4.application_connections_connected, notConnected: obj4.application_connections_not_connected } = applicationConnectionState);
    obj3.track(AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, obj);
    if (stateFromStoresArray.length > 0) {
      navigation.push(constants.PROMPT, { currentPrompt: 0 });
    } else {
      if (tmpResult.showRulesInOnboarding(stateFromStores1, stateFromStores2)) {
        navigation.push(constants.RULES);
      } else {
        onComplete();
      }
      tmpResult = GuildOnboardingUtils;
    }
  }, items8);
  obj = { top: true, style: null, children: null };
  const items9 = [, ];
  ({ flex: arr12[0], container: arr12[1] } = tmp);
  obj.style = items9;
  if (stateFromStores3) {
    obj = { style: null, children: null };
    const items10 = [tmp.flex, { justifyContent: "center", alignItems: "center" }];
    obj.style = items10;
    obj1 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[23]).intl;
    obj1.children = intl4.string(tmp2(tmp3[23]).t.ZTNur7);
    obj.children = tmp13(tmp2(tmp3[22]).Text, obj1);
    obj.children = tmp13(ref, obj);
    let tmp19 = obj;
  } else {
    obj2 = { style: tmp.flex, children: null };
    obj3 = { contentContainerStyle: null, children: null };
    const items11 = [tmp.scrollContainer, ];
    obj4 = { paddingBottom: sum1 };
    items11[1] = obj4;
    obj3.contentContainerStyle = items11;
    obj5 = { style: tmp.header, children: null };
    obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(tmp3[23]).intl;
    obj6.children = intl.string(tmp2(tmp3[23]).t.eDVMrA);
    const items12 = [tmp13(tmp2(tmp3[22]).Text, obj6), ];
    const obj7 = { style: tmp.description, variant: "text-md/normal", color: "text-muted", children: null };
    const intl2 = tmp2(tmp3[23]).intl;
    obj7.children = intl2.string(tmp2(tmp3[23]).t.BozOXu);
    items12[1] = tmp13(tmp2(tmp3[22]).Text, obj7);
    obj5.children = items12;
    const items13 = [closure_15(ref, obj5), ];
    const obj8 = {
      style: tmp.connectionsList,
      children: stateFromStores.map((connection, index) => {
          const obj = { connection, guildId, location: AnalyticsLocationDefault.GUILD_ONBOARDING };
          return closure_2_14(ConnectionCardDefault, obj, index);
        })
    };
    items13[1] = tmp13(ref, obj8);
    obj3.children = items13;
    const items14 = [closure_15(stateFromStores, obj3), ];
    const obj9 = { style: null, children: null };
    const items15 = [, , ];
    ({ footer: arr17[0], footerContent: arr17[1] } = tmp);
    const obj10 = { paddingBottom: bottom };
    items15[2] = obj10;
    obj9.style = items15;
    if (stateFromStores4) {
      let str = "primary";
    } else {
      str = "secondary";
    }
    const obj11 = { variant: str, size: "md", text: null, onPress: null, grow: true };
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
    obj11.text = combined;
    obj11.onPress = callback;
    obj9.children = tmp13(tmp2(tmp3[26]).Button, obj11);
    items14[1] = tmp13(ref, obj9);
    obj2.children = items14;
    obj.children = closure_15(ref, obj2);
    tmp19 = obj;
  }
  return closure_14(guildId(isLastStep[21]).SafeAreaPaddingView, tmp19);
};