// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import UserSettingsAccountActionCreators from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert.tsx";
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
const ProfileCustomizationSubsection = fn(1095).ProfileCustomizationSubsection;
const Constants = fn(1085);
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4890);
let closure_19 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
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
    ? () => {
        const cResult = obj5(576).c(55);
        useMaybeFetchCollectiblesRecommendationsDefault();
        closure_19();
        let obj = obj5(576);
        const token = obj5(4580).useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
        obj5 = token;
        const tmp8 = _slicedToArray(stateFromStores.useState(0), 2);
        importDefault = tmp8[1];
        [dependencyMap, closure_3] = stateFromStores.useState(false);
        let obj2 = obj5(4580);
        const nativeStackNavigation = obj5(1490).useNativeStackNavigation();
        let obj3 = obj5(1490);
        const params = obj5(6490).useSettingNavigationRoute().params;
        let autoFocusElement;
        if (params != null) {
          autoFocusElement = params.autoFocusElement;
        }
        const field = ProfileCustomizationNavigationStore.useField("subsection");
        if (cResult[0] !== autoFocusElement) {
          obj5 = { autoFocusElement };
          const mapped = items.map((renderLabel) => {
            ({ id, renderPage } = renderLabel);
            return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
          });
          cResult[0] = autoFocusElement;
          cResult[1] = mapped;
          let tmp13 = mapped;
        } else {
          tmp13 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
          cResult[2] = D;
        } else {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
        }
        let obj4 = obj5(6490);
        const obj6 = {
          items: tmp13,
          pageWidth: tmp8[0],
          defaultIndex: null,
          onPageChange: null,
          onPageChangeStart: null,
        };
        if (field === ProfileCustomizationSubsection.GUILD) {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
        }
        obj6.defaultIndex = 0;
        obj6.onPageChange = D;
        obj6.onPageChangeStart = function onPageChangeStart(arg0, onConfirm) {
          const obj = {
            hasEdits: stateFromStores,
            resetPending: UserSettingsAccountActionCreators.resetAllPending,
            onHasEdits: ChatInputUtils.dismissKeyboard,
            onConfirm,
          };
          return maybeShowDiscardChangesAlertDefault(obj);
        };
        const segmentedControlState = obj5(9282).useSegmentedControlState(obj6);
        const activeIndex = segmentedControlState.activeIndex;
        const tmp18 = items[activeIndex.get(activeIndex)];
        if (tmp18 == null) {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
        }
        const subSection = tmp18;
        const tmp19 = useUserProfileEditFormDefault();
        if (cResult[3] !== tmp19) {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
          closure_6 = tmp22;
          const tmp25 = _objectWithoutProperties(tmp19, closure_3);
          cResult[3] = tmp19;
          cResult[4] = tmp25;
          cResult[5] = tmp22;
          const tmp20 = tmp25;
        } else {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
          closure_6 = cResult[5];
        }
        const tmp26 = useGuildProfileEditFormDefault();
        if (cResult[6] !== tmp26) {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
          _objectWithoutProperties = tmp30;
          const handleSubmit = tmp26.handleSubmit;
          _slicedToArray = handleSubmit;
          const tmp33 = _objectWithoutProperties(tmp26, nativeStackNavigation);
          cResult[6] = tmp26;
          cResult[7] = tmp30;
          cResult[8] = tmp33;
          cResult[9] = handleSubmit;
          let tmp28 = tmp33;
        } else {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
          _objectWithoutProperties = tmp30;
          tmp28 = cResult[8];
          _slicedToArray = cResult[9];
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
          items = [UserProfileSettingsStore];
          class J {
            constructor() {
              return closure_1_13.showNotice();
            }
          }
          cResult[10] = items;
          cResult[11] = J;
          let tmp35 = J;
          const tmp34 = items;
        } else {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
          tmp35 = cResult[11];
        }
        const tmpResult = obj5(9282);
        stateFromStores = obj5(573).useStateFromStores(tmp34, tmp35);
        closure_11 = tmp20.isSubmitting || tmp28.isSubmitting;
        if (cResult[12] === tmp29) {
          class D {
            constructor(arg0) {
              first = closure_1_20[arg0];
              if (first == null) {
                first = closure_1_20[0];
              }
              obj = { subsection: first.subSection };
              setStateResult = closure_12.setState(obj);
              return;
            }
          }
        }
        class Y {
          constructor() {
            if (closure_5 === closure_14.GUILD) {
              tmp3 = closure_9;
              tmp2 = closure_9();
            } else {
              tmp = closure_6;
              tmp2 = closure_6();
            }
            return tmp2;
          }
        }
        cResult[12] = tmp29;
        cResult[13] = field;
        cResult[14] = tmp22;
        cResult[15] = Y;
        const tmpResult2 = obj5(573);
      }
    : () => {
        require("useMaybeFetchCollectiblesRecommendations")();
        const tmp4 = closure_19();
        const token = require("useToken").useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
        _require = token;
        const tmp7 = handleSubmit2(stateFromStores.useState(0), 2);
        importDefault = tmp7[1];
        const tmp8 = handleSubmit2(stateFromStores.useState(false), 2);
        first = tmp8[0];
        closure_3 = tmp8[1];
        let obj = require("useToken");
        const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
        let obj3 = require("useNavigation");
        const params = require("useSettingNavigationRoute").useSettingNavigationRoute().params;
        let autoFocusElement;
        if (params != null) {
          autoFocusElement = params.autoFocusElement;
        }
        const field = callback.useField("subsection");
        _require = { autoFocusElement };
        const mapped = items.map((renderLabel) => {
          ({ id, renderPage } = renderLabel);
          return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
        });
        let obj4 = require("useSettingNavigationRoute");
        const obj5 = {
          items: mapped,
          pageWidth: tmp7[0],
          defaultIndex: null,
          onPageChange: null,
          onPageChangeStart: null,
        };
        let num = 0;
        if (field === ProfileCustomizationSubsection.GUILD) {
          num = 1;
        }
        obj5.defaultIndex = num;
        obj5.onPageChange = function onPageChange(arg0) {
          first = dependencyMap[arg0];
          if (first == null) {
            first = 5;
          }
          callback.setState({ subsection: first.subSection });
        };
        obj5.onPageChangeStart = function onPageChangeStart(arg0, onConfirm) {
          const obj = {
            hasEdits: stateFromStores,
            resetPending: UserSettingsAccountActionCreators.resetAllPending,
            onHasEdits: ChatInputUtils.dismissKeyboard,
            onConfirm,
          };
          return maybeShowDiscardChangesAlertDefault(obj);
        };
        const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj5);
        const activeIndex = segmentedControlState.activeIndex;
        let first1 = tmp13[activeIndex.get(activeIndex)];
        if (first1 == null) {
          first1 = tmp13[0];
        }
        const tmp17 = require("useUserProfileEditForm")();
        const handleSubmit = tmp17.handleSubmit;
        const tmp5Result = require("SegmentedControlState");
        const tmp19 = require("useGuildProfileEditForm")();
        guild = tmp19.guild;
        handleSubmit2 = tmp19.handleSubmit;
        const tmp18 = guild(tmp17, field);
        const tmp20 = guild(tmp19, first1);
        items = [UserProfileSettingsStore];
        stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
          UserProfileSettingsStore.showNotice(),
        );
        closure_11 = tmp22;
        const items1 = [field, handleSubmit, handleSubmit2];
        callback = obj2.useCallback(() => {
          if (field === ProfileCustomizationSubsection.GUILD) {
            let tmp2 = handleSubmit2();
          } else {
            tmp2 = handleSubmit();
          }
          return tmp2;
        }, items1);
        const items2 = [first1.subSection];
        const effect = obj2.useEffect(() => {
          AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, {
            settings_type: "user",
            subsection: first1.subSection,
            destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE,
          });
        }, items2);
        const items3 = [guild];
        const effect1 = obj2.useEffect(() => {
          if (null != guild) {
            const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp.id);
          }
          return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
        }, items3);
        const effect2 = obj2.useEffect(
          () => () => {
            callback.resetState();
          },
          [],
        );
        const items4 = [
          token,
          nativeStackNavigation,
          stateFromStores,
          tmp18.isSubmitting || tmp20.isSubmitting,
          callback,
        ];
        const layoutEffect = obj2.useLayoutEffect(() => {
          let obj = {
            contentStyle: { backgroundColor },
            headerShadowVisible: false,
            headerRight: closure_11
              ? () => closure_1_17(backgroundColor(first[30]).HeaderSubmittingIndicator, {})
              : (arg0) => {
                  let obj = {};
                  const merged = Object.assign(arg0);
                  const intl = closure_0(first[11]).intl;
                  obj.label = intl.string(closure_0(first[11]).t["R3BPH+"]);
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
                        return { value: "IconComponent", done: null };
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
                            const obj4 = { value: callback(), done: false };
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
                          return { value: "IconComponent", done: null };
                        }
                      } catch (tmp9) {
                        c2 = tmp;
                        throw tmp9;
                      }
                    }
                  });
                  return closure_2_17(closure_0(first[31]).HeaderTextButton, obj);
                },
          };
          nativeStackNavigation.setOptions(obj);
        }, items4);
        const callback1 = obj2.useCallback((nativeEvent) => {
          closure_1(nativeEvent.nativeEvent.layout.width);
        }, []);
        const tmp5Result3 = require("useStateFromStores");
        if (stateFromStores) {
          stateFromStores = !tmp22;
        }
        if (stateFromStores) {
          stateFromStores = !first;
        }
        const preventRemove = require("Link").usePreventRemove(stateFromStores, (data) => {
          const action = data.data.action;
          const obj = {
            hasEdits: stateFromStores,
            resetPending: backgroundColor(first[23]).resetAllPending,
            onHasEdits: backgroundColor(first[24]).dismissKeyboard,
            onConfirm() {
              return nativeStackNavigation.dispatch(action);
            },
          };
          closure_1(first[22])(obj);
        });
        const items5 = [first, nativeStackNavigation];
        const effect3 = obj2.useEffect(() => {
          if (first) {
            nativeStackNavigation.goBack();
          }
        }, items5);
        const obj6 = { style: tmp4.container, onLayout: callback1, children: null };
        const tmp5Result4 = require("Link");
        const items6 = [
          closure_17(closure_11, {
            style: tmp4.controls,
            children: closure_17(require("Tabs/Tabs").Tabs, { state: segmentedControlState }),
          }),
          closure_17(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }),
        ];
        obj6.children = items6;
        return closure_18(closure_11, obj6);
      },
);
