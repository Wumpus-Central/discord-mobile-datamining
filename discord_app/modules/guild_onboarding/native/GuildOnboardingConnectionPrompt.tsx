// === Module 7262: GuildOnboardingConnectionPrompt ===

// Module 7262 (GuildOnboardingConnectionPrompt)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4816 */;
import GuildOnboardingPromptsActionCreators from "GuildOnboardingPromptsActionCreators" /* 7202 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7209 */;
import ConnectionCardDefault from "ConnectionCard" /* 7263 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import noop from "module_19" /* 19 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5653 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7210 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5362 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7203 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const OnboardingConnectionType = fn(7204).OnboardingConnectionType;
let closure_12 = fn(7200).GuildOnboardingModalStates;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { flex: { flex: 1 }, container: { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5763).NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, scrollContainer: null, header: null, title: null, description: null, connectionsList: null, footer: null, footerContent: null };
let obj3 = { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5763).NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.scrollContainer = { display: "flex", flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj4 = { display: "flex", flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.header = { marginBottom: nativeDefault.space.PX_24 };
let obj5 = { marginBottom: nativeDefault.space.PX_24 };
obj2.title = { marginBottom: nativeDefault.space.PX_8 };
let obj6 = { marginBottom: nativeDefault.space.PX_8 };
obj2.description = { marginTop: nativeDefault.space.PX_8 };
const obj7 = { marginTop: nativeDefault.space.PX_8 };
obj2.connectionsList = { marginTop: nativeDefault.space.PX_8 };
let obj8 = { marginTop: nativeDefault.space.PX_8 };
obj2.footer = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: nativeDefault.space.PX_8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj9 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: nativeDefault.space.PX_8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.footerContent = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx");

export default function GuildOnboardingConnectionPrompt(guildId) {
  guildId = guildId.guildId;
  const onComplete = guildId.onComplete;
  const isLastStep = guildId.isLastStep;
  let stateFromStores3;
  let stateFromStores4;
  const tmp = closure_16();
  const navigation = guildId(isLastStep[14]).useNavigation();
  const bottom = onComplete(isLastStep[15])().bottom;
  const sum = 64 + bottom;
  const sum1 = sum + onComplete(isLastStep[13]).space.PX_8;
  const ref = navigation.useRef(false);
  let obj = guildId(isLastStep[14]);
  const items = [stateFromStores4];
  const stateFromStores = guildId(isLastStep[16]).useStateFromStores(items, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId));
  let obj2 = guildId(isLastStep[16]);
  const items1 = [stateFromStores4];
  const stateFromStoresArray = guildId(isLastStep[16]).useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId));
  let obj3 = guildId(isLastStep[16]);
  const items2 = [stateFromStores3];
  const stateFromStores1 = guildId(isLastStep[16]).useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  const obj4 = guildId(isLastStep[16]);
  const items3 = [stateFromStoresArray];
  const stateFromStores2 = guildId(isLastStep[16]).useStateFromStores(items3, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj5 = guildId(isLastStep[16]);
  const items4 = [stateFromStores4];
  stateFromStores3 = guildId(isLastStep[16]).useStateFromStores(items4, () => stateFromStores4.isLoading());
  let obj6 = guildId(isLastStep[16]);
  const items5 = [stateFromStores1, stateFromStores2];
  const items6 = [stateFromStores];
  stateFromStores4 = guildId(isLastStep[16]).useStateFromStores(items5, () => {
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
          const providerConnectionState = GuildOnboardingUtils.getProviderConnectionState(stateFromStores);
          const applicationConnectionState = GuildOnboardingUtils.getApplicationConnectionState(stateFromStores);
          const obj6 = {};
          const obj3 = AnalyticsUtilsDefault;
          const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
          obj6.step = GuildOnboardingPromptsActionCreators.CONNECTIONS_STEP;
          obj6.required = false;
          ({ connected: obj4.provider_connections_connected, notConnected: obj4.provider_connections_not_connected } = providerConnectionState);
          ({ connected: obj4.application_connections_connected, notConnected: obj4.application_connections_not_connected } = applicationConnectionState);
          obj3.track(AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, obj6);
          tmp12.current = true;
        }
      }
    }
  }, items7);
  const items8 = [stateFromStoresArray.length, stateFromStores1, stateFromStores2, navigation, onComplete, stateFromStores, stateFromStores4, isLastStep, guildId];
  const callback = navigation.useCallback(() => {
    const providerConnectionState = GuildOnboardingUtils.getProviderConnectionState(stateFromStores);
    const applicationConnectionState = GuildOnboardingUtils.getApplicationConnectionState(stateFromStores);
    const obj6 = {};
    const obj3 = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj6.step = GuildOnboardingPromptsActionCreators.CONNECTIONS_STEP;
    obj6.skipped = !stateFromStores4;
    obj6.back = false;
    obj6.options_selected = 0;
    obj6.in_onboarding = true;
    obj6.is_final_step = isLastStep;
    ({ connected: obj4.provider_connections_connected, notConnected: obj4.provider_connections_not_connected } = providerConnectionState);
    ({ connected: obj4.application_connections_connected, notConnected: obj4.application_connections_not_connected } = applicationConnectionState);
    obj3.track(AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, obj6);
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
  const obj8 = { top: true, style: null, children: null };
  const items9 = [, ];
  ({ flex: arr12[0], container: arr12[1] } = tmp);
  obj8.style = items9;
  if (stateFromStores3) {
    const obj9 = { style: null, children: null };
    const items10 = [tmp.flex, { justifyContent: "center", alignItems: "center" }];
    obj9.style = items10;
    const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[23]).intl;
    obj10.children = intl4.string(tmp2(tmp3[23]).t.ZTNur7);
    obj9.children = closure_14(tmp2(tmp3[22]).Text, obj10);
    obj8.children = closure_14(ref, obj9);
    let tmp19 = obj8;
  } else {
    const obj11 = { style: tmp.flex, children: null };
    const obj12 = { contentContainerStyle: null, children: null };
    const items11 = [tmp.scrollContainer, ];
    const obj13 = { paddingBottom: sum1 };
    items11[1] = obj13;
    obj12.contentContainerStyle = items11;
    const obj14 = { style: tmp.header, children: null };
    const obj15 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(tmp3[23]).intl;
    obj15.children = intl.string(tmp2(tmp3[23]).t.eDVMrA);
    const items12 = [closure_14(tmp2(tmp3[22]).Text, obj15), ];
    const obj16 = { style: tmp.description, variant: "text-md/normal", color: "text-muted", children: null };
    const intl2 = tmp2(tmp3[23]).intl;
    obj16.children = intl2.string(tmp2(tmp3[23]).t.BozOXu);
    items12[1] = closure_14(tmp2(tmp3[22]).Text, obj16);
    obj14.children = items12;
    const items13 = [closure_15(ref, obj14), ];
    const obj17 = {
      style: tmp.connectionsList,
      children: stateFromStores.map((connection, index) => {
          const obj = { connection, guildId, location: AnalyticsLocationDefault.GUILD_ONBOARDING };
          return closure_2_14(ConnectionCardDefault, obj, index);
        })
    };
    items13[1] = closure_14(ref, obj17);
    obj12.children = items13;
    const items14 = [closure_15(stateFromStores, obj12), ];
    const obj18 = { style: null, children: null };
    const items15 = [, , ];
    ({ footer: arr17[0], footerContent: arr17[1] } = tmp);
    const obj19 = { paddingBottom: bottom };
    items15[2] = obj19;
    obj18.style = items15;
    if (stateFromStores4) {
      let str = "primary";
    } else {
      str = "secondary";
    }
    const obj20 = { variant: str, size: "md", text: null, onPress: null, grow: true };
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
    obj20.text = combined;
    obj20.onPress = callback;
    obj18.children = closure_14(tmp2(tmp3[26]).Button, obj20);
    items14[1] = closure_14(ref, obj18);
    obj11.children = items14;
    obj8.children = closure_15(ref, obj11);
    tmp19 = obj8;
  }
  return closure_14(guildId(isLastStep[21]).SafeAreaPaddingView, tmp19);
};