// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import UserSettingsAccountActionCreators from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile.tsx";
import useUserProfileEditFormDefault from "useUserProfileEditForm.tsx";
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile.tsx";
import useGuildProfileEditFormDefault from "useGuildProfileEditForm.tsx";
import useMaybeFetchCollectiblesRecommendationsDefault from "../../../collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx";
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
let closure_5 = ["handleSubmit"];
let closure_6 = ["guild", "handleSubmit"];
const View = fn(17).View;
const ProfileCustomizationSubsection = fn(1094).ProfileCustomizationSubsection;
const Constants = fn(1084);
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5005);
let closure_20 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let items = [
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t["2p07FR"]);
    },
    id: "edit-user-profile",
    renderPage(autoFocusElement) {
      return constants(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
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
      return constants(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD,
  },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ProfileCustomizationSettingScreen() {
        const cResult = obj6(576).c(53);
        useMaybeFetchCollectiblesRecommendationsDefault();
        closure_20();
        let obj = obj6(576);
        const isMobileWidgetEditingEnabled = obj6(16353).useIsMobileWidgetEditingEnabled(
          "ProfileCustomizationSettingScreen",
        );
        let obj2 = obj6(16353);
        const token = obj6(5289).useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
        obj6 = token;
        const tmp9 = _slicedToArray(noop.useState(0), 2);
        importDefault = tmp9[1];
        [dependencyMap, closure_3] = noop.useState(false);
        let obj3 = obj6(5289);
        const nativeStackNavigation = obj6(1503).useNativeStackNavigation();
        let obj4 = obj6(1503);
        const params = obj6(7150).useSettingNavigationRoute().params;
        let autoFocusElement;
        if (params != null) {
          autoFocusElement = params.autoFocusElement;
        }
        const field = ProfileCustomizationNavigationStore.useField("subsection");
        if (cResult[0] !== autoFocusElement) {
          obj6 = { autoFocusElement };
          const mapped = items.map((renderLabel) => {
            ({ id, renderPage } = renderLabel);
            return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
          });
          cResult[0] = autoFocusElement;
          cResult[1] = mapped;
          let tmp14 = mapped;
        } else {
          tmp14 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
          cResult[2] = D;
        } else {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
        }
        const obj5 = obj6(7150);
        const obj7 = {
          items: tmp14,
          pageWidth: tmp9[0],
          defaultIndex: null,
          onPageChange: null,
          onPageChangeStart: null,
        };
        if (field === ProfileCustomizationSubsection.GUILD) {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
        }
        obj7.defaultIndex = 0;
        obj7.onPageChange = D;
        obj7.onPageChangeStart = function onPageChangeStart(arg0, onContinue) {
          const obj = {
            location: "ProfileCustomizationSettingScreen",
            hasUnsavedChanges: stateFromStores,
            onReset: UserSettingsAccountActionCreators.resetAllPending,
            onContinue,
            onSave,
          };
          return maybeShowUnsavedChangesAlertDefault(obj);
        };
        const segmentedControlState = obj6(8938).useSegmentedControlState(obj7);
        const activeIndex = segmentedControlState.activeIndex;
        const tmp19 = items[activeIndex.get(activeIndex)];
        if (tmp19 == null) {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
        }
        _objectWithoutProperties = tmp19;
        const tmp20 = useUserProfileEditFormDefault();
        if (cResult[3] !== tmp20) {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
          closure_7 = tmp23;
          const tmp26 = _objectWithoutProperties(tmp20, closure_3);
          closure_6 = tmp26;
          cResult[3] = tmp20;
          cResult[4] = tmp26;
          cResult[5] = tmp23;
        } else {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
          closure_6 = tmp21;
          closure_7 = cResult[5];
        }
        const tmp27 = useGuildProfileEditFormDefault();
        if (cResult[6] !== tmp27) {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
          _slicedToArray = tmp31;
          const handleSubmit = tmp27.handleSubmit;
          noop = handleSubmit;
          const tmp34 = _objectWithoutProperties(tmp27, nativeStackNavigation);
          cResult[6] = tmp27;
          cResult[7] = tmp31;
          cResult[8] = tmp34;
          cResult[9] = handleSubmit;
          let tmp29 = tmp34;
        } else {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
          _slicedToArray = tmp31;
          tmp29 = cResult[8];
          noop = cResult[9];
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
          items = [UserProfileSettingsStore];
          class Y {
            constructor() {
              return closure_13.showNotice();
            }
          }
          cResult[10] = items;
          cResult[11] = Y;
          let tmp36 = Y;
          const tmp35 = items;
        } else {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
          tmp36 = cResult[11];
        }
        const tmpResult = obj6(8938);
        const stateFromStores = obj6(573).useStateFromStores(tmp35, tmp36);
        ProfileCustomizationNavigationStore = tmp21.isSubmitting || tmp29.isSubmitting;
        if (cResult[12] === tmp30) {
          class D {
            constructor(arg0) {
              first = closure_1_21[arg0];
              if (first == null) {
                first = closure_1_21[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = isSubmitting.setState(obj);
              return;
            }
          }
        }
        function ee() {
          if (field === ProfileCustomizationSubsection.GUILD) {
            let tmp2 = closure_10();
          } else {
            tmp2 = closure_7();
          }
          return tmp2;
        }
        cResult[12] = tmp30;
        cResult[13] = field;
        cResult[14] = tmp23;
        cResult[15] = ee;
        const tmpResult2 = obj6(573);
      }
    : function ProfileCustomizationSettingScreen() {
        require("useMaybeFetchCollectiblesRecommendations")();
        const tmp4 = closure_20();
        const isMobileWidgetEditingEnabled = require("MobileWidgetEditingExperiment").useIsMobileWidgetEditingEnabled(
          "ProfileCustomizationSettingScreen",
        );
        let obj = require("MobileWidgetEditingExperiment");
        const token = require("useToken").useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
        _require = token;
        const tmp8 = guild(handleSubmit2.useState(0), 2);
        importDefault = tmp8[1];
        const tmp9 = guild(handleSubmit2.useState(false), 2);
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
        const field = ProfileCustomizationNavigationStore.useField("subsection");
        _require = { autoFocusElement };
        const mapped = items.map((renderLabel) => {
          ({ id, renderPage } = renderLabel);
          return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
        });
        const obj5 = require("useSettingNavigationRoute");
        const obj6 = {
          items: mapped,
          pageWidth: tmp8[0],
          defaultIndex: null,
          onPageChange: null,
          onPageChangeStart: null,
        };
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
          state.setState({ subsection: first.subSection });
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
        const handleSubmit = tmp18.handleSubmit;
        const tmp19 = _objectWithoutProperties(tmp18, field);
        _objectWithoutProperties = tmp19;
        const tmp20 = require("useGuildProfileEditForm")();
        guild = tmp20.guild;
        handleSubmit2 = tmp20.handleSubmit;
        const tmp5Result = require("SegmentedControlState");
        const tmp21 = _objectWithoutProperties(tmp20, first1);
        items = [onSave];
        const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => callback.showNotice());
        ProfileCustomizationNavigationStore = tmp23;
        const items1 = [field, handleSubmit, handleSubmit2];
        onSave = obj3.useCallback(() => {
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
            state.resetState();
          },
          [],
        );
        const items4 = [
          token,
          nativeStackNavigation,
          stateFromStores,
          tmp19.isSubmitting || tmp21.isSubmitting,
          onSave,
        ];
        const layoutEffect = obj3.useLayoutEffect(() => {
          let obj = {
            contentStyle: { backgroundColor },
            headerShadowVisible: false,
            headerRight: closure_12
              ? () => closure_1_17(backgroundColor(first[30]).HeaderSubmittingIndicator, {})
              : () => {
                  let obj = { text: null, disabled: null, onPress: null };
                  const intl = closure_0(first[11]).intl;
                  obj.text = intl.string(closure_0(first[11]).t["R3BPH+"]);
                  obj.disabled = !stateFromStores;
                  obj.onPress = handleSubmit(function* () {
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
                        return { value: "IconComponent", done: "IconComponent" };
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
                          return { value: "IconComponent", done: "IconComponent" };
                        }
                      } catch (tmp9) {
                        c2 = tmp;
                        throw tmp9;
                      }
                    }
                  });
                  return closure_2_17(closure_0(first[31]).HeaderActionButton, obj);
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
              onReset: backgroundColor(first[24]).resetAllPending,
              onContinue() {
                return nativeStackNavigation.dispatch(action);
              },
              onSave,
            };
            closure_1(first[23])(obj);
            const tmp3 = closure_1(first[23]);
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
          let tmp33Result = closure_17(tmp(tmp2[33]), obj8);
        } else {
          const obj9 = { children: null };
          const obj10 = { style: tmp4.controls, children: null };
          const obj11 = { state: segmentedControlState };
          obj10.children = closure_17(tmp5(tmp2[34]).Tabs, obj11);
          const items6 = [closure_17(tmp34, obj10)];
          const obj12 = { state: segmentedControlState };
          items6[1] = closure_17(tmp5(tmp2[35]).SegmentedControlPages, obj12);
          obj9.children = items6;
          tmp33Result = closure_19(closure_18, obj9);
        }
        obj7.children = tmp33Result;
        return closure_17(stateFromStores, obj7);
      },
);
