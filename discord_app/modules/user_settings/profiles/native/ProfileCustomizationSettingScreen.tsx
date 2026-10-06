// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UserSettingsConstants from "../../UserSettingsConstants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
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
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _objectWithoutProperties_mod from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ProfileCustomizationNavigationStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c1, c2, importDefault;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
let closure_5 = ["handleSubmit"];
let closure_6 = ["guild", "handleSubmit"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let obj = {
  renderLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return closure_17(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE,
};
let items = [
  obj,
  {
    renderLabel() {
      const intl = intl2.intl;
      return intl.string(intl2.t.kPHroX);
    },
    id: "edit-user-profiles-guilds",
    renderPage() {
      return closure_17(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD,
  },
];
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let closure_1;
        let closure_2;
        let closure_8;
        let closure_9;
        let first;
        let state;
        let stateFromStores;
        let tmp14;
        let tmp22;
        let tmp30;
        let tmp36;
        let tmp37;
        let token;
        let tmp = token;
        let tmp2 = dependencyMap;
        let obj = token(576);
        const cResult = obj.c(55);
        useMaybeFetchCollectiblesRecommendationsDefault();
        closure_19();
        let obj2 = token(4586);
        token = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
        [first, importDefault] = stateFromStores.useState(0);
        [dependencyMap, closure_3] = stateFromStores.useState(false);
        let obj3 = token(1490);
        const nativeStackNavigation = obj3.useNativeStackNavigation();
        let obj4 = token(6497);
        const params = obj4.useSettingNavigationRoute().params;
        let autoFocusElement;
        if (params != null) {
          autoFocusElement = params.autoFocusElement;
        }
        const field = ProfileCustomizationNavigationStore.useField("subsection");
        if (cResult[0] !== autoFocusElement) {
          const mapped = items.map((renderLabel) => {
            let id;
            let renderPage;
            const obj = { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
            ({ id, renderPage } = renderLabel);
            return obj;
          });
          cResult[0] = autoFocusElement;
          cResult[1] = mapped;
          tmp14 = mapped;
        } else {
          tmp14 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
          cResult[2] = D;
        } else {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
        }
        const useSegmentedControlState = tmp(9317).useSegmentedControlState;
        const obj6 = {
          items: tmp14,
          pageWidth: first,
          defaultIndex: 0,
          onPageChange: D,
          onPageChangeStart(arg0, onConfirm) {
            const obj = {
              hasEdits: stateFromStores,
              resetPending: UserSettingsAccountActionCreators.resetAllPending,
              onHasEdits: ChatInputUtils.dismissKeyboard,
              onConfirm,
            };
            const tmp = maybeShowDiscardChangesAlertDefault;
            return tmp(obj);
          },
        };
        const tmpResult = tmp(9317);
        if (field === ProfileCustomizationSubsection.GUILD) {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
        }
        const segmentedControlState = useSegmentedControlState(obj6);
        const activeIndex = segmentedControlState.activeIndex;
        const tmp20 = items[activeIndex.get(activeIndex)];
        if (tmp20 == null) {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
        }
        const subSection = tmp20;
        const tmp21 = useUserProfileEditFormDefault();
        if (cResult[3] !== tmp21) {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
          closure_6 = tmp24;
          const tmp27 = _objectWithoutProperties(tmp21, closure_3);
          cResult[3] = tmp21;
          cResult[4] = tmp27;
          cResult[5] = tmp24;
          tmp22 = tmp27;
        } else {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
          closure_6 = cResult[5];
        }
        const tmp28 = useGuildProfileEditFormDefault();
        if (cResult[6] !== tmp28) {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
          _objectWithoutProperties = tmp32;
          const handleSubmit = tmp28.handleSubmit;
          _slicedToArray = handleSubmit;
          const tmp35 = _objectWithoutProperties(tmp28, nativeStackNavigation);
          cResult[6] = tmp28;
          cResult[7] = tmp32;
          cResult[8] = tmp35;
          cResult[9] = handleSubmit;
          tmp30 = tmp35;
        } else {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
          _objectWithoutProperties = tmp32;
          tmp30 = cResult[8];
          _slicedToArray = cResult[9];
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
          items = [UserProfileSettingsStore];
          class J {
            constructor() {
              return UserProfileSettingsStore.showNotice();
            }
          }
          cResult[10] = items;
          cResult[11] = J;
          tmp37 = J;
          tmp36 = items;
        } else {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
          tmp37 = cResult[11];
        }
        const tmpResult2 = tmp(573);
        stateFromStores = tmpResult2.useStateFromStores(tmp36, tmp37);
        let closure_11 = tmp22.isSubmitting || tmp30.isSubmitting;
        if (cResult[12] === tmp31) {
          class D {
            constructor(arg0) {
              let first = items[arg0];
              if (first == null) {
                first = items[0];
              }
              const obj = { subsection: first.subSection };
              state.setState(obj);
            }
          }
        }
        class Y {
          constructor() {
            let tmp2;
            if (field === ProfileCustomizationSubsection.GUILD) {
              tmp2 = closure_9();
            } else {
              tmp2 = closure_6();
            }
            return tmp2;
          }
        }
        cResult[12] = tmp31;
        cResult[13] = field;
        cResult[14] = tmp24;
        cResult[15] = Y;
      }
    : () => {
        let callback;
        let closure_1;
        let first1;
        let guild;
        let handleSubmit2;
        let items6;
        let num;
        let stateFromStores;
        let token;
        let tmp = importDefault;
        let tmp2 = first1;
        const tmp3 = require("useMaybeFetchCollectiblesRecommendations")();
        const tmp4 = closure_19();
        let obj = token(first1[17]);
        token = obj.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
        let obj2 = stateFromStores;
        const tmp7 = handleSubmit2(stateFromStores.useState(0), 2);
        importDefault = tmp7[1];
        let first = tmp7[0];
        const tmp9 = handleSubmit2(stateFromStores.useState(false), 2);
        first1 = tmp9[0];
        closure_3 = tmp9[1];
        let obj3 = token(first1[19]);
        const nativeStackNavigation = obj3.useNativeStackNavigation();
        let obj4 = token(first1[20]);
        const params = obj4.useSettingNavigationRoute().params;
        let autoFocusElement;
        if (params != null) {
          autoFocusElement = params.autoFocusElement;
        }
        const field = callback.useField("subsection");
        let closure_0 = { autoFocusElement };
        const mapped = items.map((renderLabel) => {
          let id;
          let renderPage;
          const obj = { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
          ({ id, renderPage } = renderLabel);
          return obj;
        });
        const obj5 = {
          items: mapped,
          pageWidth: first,
          defaultIndex: num,
          onPageChange(arg0) {
            let first = items[arg0];
            if (first == null) {
              first = items[0];
            }
            const obj = { subsection: first.subSection };
            callback.setState(obj);
          },
          onPageChangeStart(arg0, onConfirm) {
            const obj = {
              hasEdits: stateFromStores,
              resetPending: UserSettingsAccountActionCreators.resetAllPending,
              onHasEdits: ChatInputUtils.dismissKeyboard,
              onConfirm,
            };
            const tmp = maybeShowDiscardChangesAlertDefault;
            return tmp(obj);
          },
        };
        num = 0;
        const useSegmentedControlState = token(tmp2[21]).useSegmentedControlState;
        token(tmp2[21]);
        if (field === ProfileCustomizationSubsection.GUILD) {
          num = 1;
        }
        const segmentedControlState = useSegmentedControlState(obj5);
        const activeIndex = segmentedControlState.activeIndex;
        let first2 = tmp14[activeIndex.get(activeIndex)];
        if (first2 == null) {
          first2 = tmp14[0];
        }
        const tmp19 = tmp(tmp2[25])();
        const handleSubmit = tmp19.handleSubmit;
        const tmp20 = guild(tmp19, field);
        const tmp21 = tmp(tmp2[26])();
        guild = tmp21.guild;
        handleSubmit2 = tmp21.handleSubmit;
        items = [UserProfileSettingsStore];
        const tmp22 = guild(tmp21, first2);
        const tmp5Result3 = token(tmp2[27]);
        stateFromStores = tmp5Result3.useStateFromStores(items, () => UserProfileSettingsStore.showNotice());
        let closure_11 = tmp24;
        const items1 = [field, handleSubmit, handleSubmit2];
        callback = obj2.useCallback(() => {
          let tmp2;
          if (field === ProfileCustomizationSubsection.GUILD) {
            tmp2 = handleSubmit2();
          } else {
            tmp2 = handleSubmit();
          }
          return tmp2;
        }, items1);
        const items2 = [first2.subSection];
        const effect = obj2.useEffect(() => {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = {
            settings_type: "user",
            subsection: first2.subSection,
            destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE,
          };
          obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
        }, items2);
        const items3 = [guild];
        const effect1 = obj2.useEffect(() => {
          if (null != guild) {
            const obj = GuildIdentityActionCreators;
            const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
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
          tmp20.isSubmitting || tmp22.isSubmitting,
          callback,
        ];
        const layoutEffect = obj2.useLayoutEffect(() => {
          let obj2;
          let obj = {
            contentStyle: obj2,
            headerShadowVisible: false,
            headerRight: closure_11
              ? () => closure_1_17(token(first1[30]).HeaderSubmittingIndicator, {})
              : (arg0) => {
                  let intl;
                  let obj = {
                    label: intl.string(token(first1[11]).t["R3BPH+"]),
                    disabled: !stateFromStores,
                    onPress: handleSubmit(function* () {
                      if (c2 === 2) {
                        c2 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp2 === 3) {
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
                              let closure_0 = tmp3;
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
                        } catch (tmp8) {
                          c2 = 3;
                          throw tmp8;
                        }
                      }
                    }),
                  };
                  const HeaderTextButton = token(first1[31]).HeaderTextButton;
                  const merged = Object.assign(arg0);
                  intl = token(first1[11]).intl;
                  return closure_2_17(HeaderTextButton, obj);
                },
          };
          obj2 = { backgroundColor: token };
          nativeStackNavigation.setOptions(obj);
        }, items4);
        const callback1 = obj2.useCallback((nativeEvent) => {
          closure_1(nativeEvent.nativeEvent.layout.width);
        }, []);
        const usePreventRemove = token(tmp2[32]).usePreventRemove;
        token(tmp2[32]);
        if (stateFromStores) {
          stateFromStores = !tmp24;
        }
        if (stateFromStores) {
          stateFromStores = !first1;
        }
        const preventRemove = usePreventRemove(stateFromStores, (data) => {
          const action = data.data.action;
          const obj = {
            hasEdits: stateFromStores,
            resetPending: token(first1[23]).resetAllPending,
            onHasEdits: token(first1[24]).dismissKeyboard,
            onConfirm() {
              return nativeStackNavigation.dispatch(action);
            },
          };
          const tmp = closure_1(first1[22]);
          tmp(obj);
        });
        const items5 = [first1, nativeStackNavigation];
        const effect3 = obj2.useEffect(() => {
          if (first1) {
            nativeStackNavigation.goBack();
          }
        }, items5);
        const obj6 = { style: tmp4.container, onLayout: callback1, children: items6 };
        items6 = [,];
        const obj7 = {
          style: tmp4.controls,
          children: closure_17(token(tmp2[33]).Tabs, { state: segmentedControlState }),
        };
        items6[0] = closure_17(closure_11, obj7);
        items6[1] = closure_17(token(tmp2[34]).SegmentedControlPages, { state: segmentedControlState });
        return closure_18(closure_11, obj6);
      },
);
const result = size.fileFinishedImporting(
  "modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx",
);

export default memoResult;
