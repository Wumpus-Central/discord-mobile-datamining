// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import UserSettingsAccountActionCreators from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile.tsx";
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const View = fn(17).View;
let ProfileCustomizationSubsection = fn(1082).ProfileCustomizationSubsection;
const Constants = fn(1072);
({ AnalyticEvents: map1, AnalyticsSections: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5014);
let closure_18 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let items = [
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t["2p07FR"]);
    },
    id: "edit-user-profile",
    renderPage(autoFocusElement) {
      return __initData(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
    },
    subSection: ProfileCustomizationSubsection.USER_PROFILE,
  },
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t.kPHroX);
    },
    id: "edit-user-profiles-guilds",
    renderPage() {
      return __initData(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD,
  },
];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx",
);

export default noop.memo(function ProfileCustomizationSettingScreen() {
  require("useMaybeFetchCollectiblesRecommendations")();
  const tmp4 = closure_18();
  const isMobileWidgetEditingEnabled = require("MobileWidgetEditingExperiment").useIsMobileWidgetEditingEnabled(
    "ProfileCustomizationSettingScreen",
  );
  let obj = require("MobileWidgetEditingExperiment");
  const token = require("useToken").useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  const tmp8 = handleSubmit(noop.useState(0), 2);
  importDefault = tmp8[1];
  const tmp9 = handleSubmit(noop.useState(false), 2);
  first = tmp9[0];
  closure_3 = tmp9[1];
  let obj2 = require("useToken");
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  let obj4 = require("useNavigation");
  const params = require("useSettingNavigationRoute").useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = handleSubmit2.useField("subsection");
  _require = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  const obj5 = require("useSettingNavigationRoute");
  const obj6 = { items: mapped, pageWidth: tmp8[0], defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num = 0;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  obj6.defaultIndex = num;
  obj6.onPageChange = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    handleSubmit2.setState({ subsection: first.subSection });
  };
  obj6.onPageChangeStart = function onPageChangeStart(arg0, onContinue) {
    const obj = {
      location: "ProfileCustomizationSettingScreen",
      hasUnsavedChanges: stateFromStores,
      onReset: UserSettingsAccountActionCreators.resetAllPending,
      onContinue,
      onSave,
    };
    return maybeShowUnsavedChangesAlertDefault(obj);
  };
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj6);
  const activeIndex = segmentedControlState.activeIndex;
  let first1 = tmp14[activeIndex.get(activeIndex)];
  if (first1 == null) {
    first1 = tmp14[0];
  }
  const tmp18 = require("useUserProfileEditForm")();
  handleSubmit = tmp18.handleSubmit;
  const tmp19 = first1(tmp18, closure_3);
  noop = tmp19;
  const tmp20 = require("useGuildProfileEditForm")();
  const guild = tmp20.guild;
  handleSubmit2 = tmp20.handleSubmit;
  const tmp5Result = require("SegmentedControlState");
  const tmp21 = first1(tmp20, nativeStackNavigation);
  items = [stateFromStores];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => stateFromStores.showNotice());
  ProfileCustomizationSubsection = tmp23;
  const items1 = [field, handleSubmit, handleSubmit2];
  const onSave = obj3.useCallback(() => {
    if (field === ProfileCustomizationSubsection.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first1.subSection];
  const effect = obj3.useEffect(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, {
      settings_type: "user",
      subsection: first1.subSection,
      destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE,
    });
  }, items2);
  const items3 = [guild];
  const effect1 = obj3.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp.id);
    }
    return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = obj3.useEffect(
    () => () => {
      handleSubmit2.resetState();
    },
    [],
  );
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp19.isSubmitting || tmp21.isSubmitting, onSave];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let obj = {
      contentStyle: { backgroundColor },
      headerShadowVisible: false,
      headerRight: closure_12
        ? () => closure_1_15(backgroundColor(first[28]).HeaderSubmittingIndicator, {})
        : () => {
            let obj = { text: null, disabled: null, onPress: null };
            const intl = closure_0(first[11]).intl;
            obj.text = intl.string(closure_0(first[11]).t["R3BPH+"]);
            obj.disabled = !stateFromStores;
            obj.onPress = field(function* () {
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      closure_0 = tmp4;
                      c1 = 1;
                      c2 = 1;
                      const obj4 = { value: onSave(), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    if (false !== value) {
                      closure_128_3(true);
                    }
                    c2 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } catch (tmp9) {
                  c2 = tmp;
                  throw tmp9;
                }
              }
            });
            return closure_2_15(closure_0(first[29]).HeaderActionButton, obj);
          },
    };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj3.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp5Result3 = require("useStateFromStores");
  let tmp30 = stateFromStores;
  if (stateFromStores) {
    let isWaitingForHexagonCampaignEnrollment = !tmp23;
    if (tmp23) {
      isWaitingForHexagonCampaignEnrollment = tmp19.isWaitingForHexagonCampaignEnrollment;
    }
    tmp30 = isWaitingForHexagonCampaignEnrollment;
  }
  if (tmp30) {
    tmp30 = !first;
  }
  const preventRemove = require("Link").usePreventRemove(tmp30, (data) => {
    const action = data.data.action;
    if (!closure_8.isWaitingForHexagonCampaignEnrollment) {
      const obj = {
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges: stateFromStores,
        onReset: backgroundColor(first[22]).resetAllPending,
        onContinue() {
          return nativeStackNavigation.dispatch(action);
        },
        onSave,
      };
      closure_1(first[21])(obj);
      const tmp3 = closure_1(first[21]);
    }
  });
  const items5 = [first, nativeStackNavigation];
  const effect3 = obj3.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  const obj7 = { style: tmp4.container, onLayout: callback1, children: null };
  if (isMobileWidgetEditingEnabled) {
    const obj8 = { state: segmentedControlState };
    let tmp33Result = closure_15(tmp(tmp2[31]), obj8);
  } else {
    const obj9 = { children: null };
    const obj10 = { style: tmp4.controls, children: null };
    const obj11 = { state: segmentedControlState };
    obj10.children = closure_15(tmp5(tmp2[32]).Tabs, obj11);
    const items6 = [closure_15(tmp34, obj10)];
    const obj12 = { state: segmentedControlState };
    items6[1] = closure_15(tmp5(tmp2[33]).SegmentedControlPages, obj12);
    obj9.children = items6;
    tmp33Result = closure_17(closure_16, obj9);
  }
  obj7.children = tmp33Result;
  return closure_15(guild, obj7);
});
