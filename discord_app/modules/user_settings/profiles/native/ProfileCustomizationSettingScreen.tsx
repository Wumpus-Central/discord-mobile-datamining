// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import util from "../../../../intl/index.native.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import UserSettingsAccountActionCreators from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert.tsx";
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
const ProfileCustomizationSubsection = fn(1084).ProfileCustomizationSubsection;
const Constants = fn(1074);
({ AnalyticEvents: map1, AnalyticsSections: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4722);
let closure_17 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
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

export default noop.memo(() => {
  const tmp = closure_17();
  const token = require("useToken").useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  const tmp6 = handleSubmit(guild.useState(0), 2);
  importDefault = tmp6[1];
  const tmp7 = handleSubmit(guild.useState(false), 2);
  first = tmp7[0];
  closure_3 = tmp7[1];
  let obj = require("useToken");
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  let obj3 = require("useNavigation");
  const params = require("useSettingNavigationRoute").useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = stateFromStores.useField("subsection");
  _require = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  let obj4 = require("useSettingNavigationRoute");
  const obj5 = { items: mapped, pageWidth: tmp6[0], defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num = 0;
  if (field === callback.GUILD) {
    num = 1;
  }
  obj5.defaultIndex = num;
  obj5.onPageChange = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    stateFromStores.setState({ subsection: first.subSection });
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
  let first1 = tmp12[activeIndex.get(activeIndex)];
  if (first1 == null) {
    first1 = tmp12[0];
  }
  const tmp16 = require("useUserProfileEditForm")();
  handleSubmit = tmp16.handleSubmit;
  const tmp2Result = require("SegmentedControlState");
  const tmp18 = require("useGuildProfileEditForm")();
  guild = tmp18.guild;
  const handleSubmit2 = tmp18.handleSubmit;
  const tmp17 = first1(tmp16, closure_3);
  const tmp19 = first1(tmp18, nativeStackNavigation);
  items = [closure_11];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => closure_11.showNotice());
  closure_11 = tmp21;
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
      stateFromStores.resetState();
    },
    [],
  );
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp17.isSubmitting || tmp19.isSubmitting, callback];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj = {
      contentStyle: { backgroundColor },
      headerShadowVisible: false,
      headerRight: closure_11
        ? () => closure_1_15(backgroundColor(first[27]).HeaderSubmittingIndicator, {})
        : (arg0) => {
            let obj = {};
            const merged = Object.assign(arg0);
            const intl = closure_0(first[11]).intl;
            obj.label = intl.string(closure_0(first[11]).t["R3BPH+"]);
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
                  return { value: "HermesInternal", done: null };
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
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp9) {
                  c2 = tmp;
                  throw tmp9;
                }
              }
            });
            return closure_2_15(closure_0(first[28]).HeaderTextButton, obj);
          },
    };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp2Result3 = require("useStateFromStores");
  if (stateFromStores) {
    stateFromStores = !tmp21;
  }
  if (stateFromStores) {
    stateFromStores = !first;
  }
  const preventRemove = require("Link").usePreventRemove(stateFromStores, (data) => {
    const action = data.data.action;
    const obj = {
      hasEdits: stateFromStores,
      resetPending: backgroundColor(first[20]).resetAllPending,
      onHasEdits: backgroundColor(first[21]).dismissKeyboard,
      onConfirm() {
        return nativeStackNavigation.dispatch(action);
      },
    };
    closure_1(first[19])(obj);
  });
  const items5 = [first, nativeStackNavigation];
  const effect3 = obj2.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  const obj6 = { style: tmp.container, onLayout: callback1, children: null };
  const tmp2Result4 = require("Link");
  const items6 = [
    closure_15(handleSubmit2, {
      style: tmp.controls,
      children: closure_15(require("Tabs/Tabs").Tabs, { state: segmentedControlState }),
    }),
    closure_15(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }),
  ];
  obj6.children = items6;
  return closure_16(handleSubmit2, obj6);
});
