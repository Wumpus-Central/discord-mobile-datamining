// === Module 14586: ProfileCustomizationSettingScreen ===

// Module 14586 (ProfileCustomizationSettingScreen)
import util from "util" /* 1114 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6984 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9210 */;
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert" /* 10923 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 14587 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 14645 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9208 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8160 */;

require = fn;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const View = fn(17).View;
const ProfileCustomizationSubsection = fn(1084).ProfileCustomizationSubsection;
const Constants = fn(1074);
({ AnalyticEvents: map1, AnalyticsSections: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4560);
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
    subSection: ProfileCustomizationSubsection.USER_PROFILE
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
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default noop.memo(() => {
  const tmp = closure_17();
  let obj = require("useToken");
  const token = obj.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  let obj1 = guild;
  const tmp6 = handleSubmit(guild.useState(0), 2);
  importDefault = tmp6[1];
  const tmp7 = handleSubmit(guild.useState(false), 2);
  first = tmp7[0];
  closure_3 = tmp7[1];
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  const obj3 = require("useNavigation");
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
  let tmp2Result = tmp2(tmp3[18]);
  obj = { items: mapped, pageWidth: tmp6[0], defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num = 0;
  if (field === callback.GUILD) {
    num = 1;
  }
  obj.defaultIndex = num;
  obj.onPageChange = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    stateFromStores.setState({ subsection: first.subSection });
  };
  obj.onPageChangeStart = function onPageChangeStart(arg0, onConfirm) {
    const obj = { hasEdits: stateFromStores, resetPending: UserSettingsAccountActionCreators.resetAllPending, onHasEdits: ChatInputUtils.dismissKeyboard, onConfirm };
    return maybeShowDiscardChangesAlertDefault(obj);
  };
  const segmentedControlState = tmp2Result.useSegmentedControlState(obj);
  const activeIndex = segmentedControlState.activeIndex;
  let first1 = tmp12[activeIndex.get(activeIndex)];
  if (first1 == null) {
    first1 = tmp12[0];
  }
  const tmp16 = require("useUserProfileEditForm")();
  handleSubmit = tmp16.handleSubmit;
  const obj4 = require("useSettingNavigationRoute");
  const tmp18 = require("useGuildProfileEditForm")();
  guild = tmp18.guild;
  const handleSubmit2 = tmp18.handleSubmit;
  const tmp17 = first1(tmp16, closure_3);
  tmp2Result = tmp2(tmp3[24]);
  items = [closure_11];
  stateFromStores = tmp2Result.useStateFromStores(items, () => closure_11.showNotice());
  const tmp21 = tmp17.isSubmitting || first1(tmp18, nativeStackNavigation).isSubmitting;
  closure_11 = tmp21;
  const items1 = [field, handleSubmit, handleSubmit2];
  callback = obj1.useCallback(() => {
    if (field === ProfileCustomizationSubsection.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first1.subSection];
  const effect = obj1.useEffect(() => {
    const obj = { settings_type: "user", subsection: first1.subSection, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [guild];
  const effect1 = obj1.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp.id);
    }
    return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = obj1.useEffect(() => () => {
    stateFromStores.resetState();
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp21, callback];
  const layoutEffect = obj1.useLayoutEffect(() => {
    let obj = {
      contentStyle: null,
      headerShadowVisible: false,
      headerRight: closure_11 ? (() => closure_1_15(backgroundColor(first[27]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        let obj = {};
        const merged = Object.assign(arg0);
        const intl = closure_0(first[11]).intl;
        obj.label = intl.string(closure_0(first[11]).t["R3BPH+"]);
        obj.disabled = !stateFromStores;
        obj.onPress = field(function*() {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
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
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_0 = tmp4;
                  c1 = 1;
                  c2 = 1;
                  const obj1 = { value: callback(), done: false };
                  return obj1;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
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
      })
    };
    obj = { backgroundColor };
    obj.contentStyle = obj;
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj1.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp19 = first1(tmp18, nativeStackNavigation);
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
      }
    };
    closure_1(first[19])(obj);
  });
  const items5 = [first, nativeStackNavigation];
  const effect3 = obj1.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  obj = { style: tmp.container, onLayout: callback1, children: null };
  obj1 = { style: tmp.controls, children: closure_15(tmp2(tmp3[30]).Tabs, { state: segmentedControlState }) };
  const items6 = [closure_15(handleSubmit2, obj1), closure_15(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState })];
  obj.children = items6;
  return closure_16(handleSubmit2, obj);
});