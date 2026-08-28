// === Module 14173: ProfileCustomizationSubsection ===

// Module 14173 (ProfileCustomizationSubsection)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 14174 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 14232 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "_objectWithoutProperties" /* 109 */;
import closure_7 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_10 from "zustandStore" /* 8972 */;
import closure_11 from "handleFormOpen" /* 8016 */;
import { ProfileCustomizationSubsection } from "MAX_FAVORITES" /* 685 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
({ AnalyticEvents: map1, AnalyticsSections: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = createCacheKey.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let items = [
  {
    renderLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["2p07FR"]);
    },
    id: "edit-user-profile",
    renderPage(autoFocusElement) {
      return callback(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
    },
    subSection: ProfileCustomizationSubsection.USER_PROFILE
  },
  {
    renderLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.kPHroX);
    },
    id: "edit-user-profiles-guilds",
    renderPage() {
      return callback(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  let obj = _require(first[14]);
  const token = obj.useToken(importDefault(first[15]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  obj1 = guild;
  const tmp6 = handleSubmit(guild.useState(0), 2);
  importDefault = tmp6[1];
  const tmp7 = handleSubmit(guild.useState(false), 2);
  first = tmp7[0];
  closure_3 = tmp7[1];
  const nativeStackNavigation = _require(first[16]).useNativeStackNavigation();
  const obj3 = _require(first[16]);
  const params = _require(first[17]).useSettingNavigationRoute().params;
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
  obj[2] = num;
  obj[3] = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    stateFromStores.setState({ subsection: first.subSection });
  };
  obj[4] = function onPageChangeStart(arg0, arg1) {
    const obj = { hasEdits: stateFromStores, resetPending: callback(first[20]).resetAllPending, onHasEdits: callback(first[21]).dismissKeyboard, onConfirm: arg1 };
    return callback2(first[19])(obj);
  };
  const segmentedControlState = tmp2Result.useSegmentedControlState(obj);
  const activeIndex = segmentedControlState.activeIndex;
  let first1 = tmp12[activeIndex.get(activeIndex)];
  if (first1 == null) {
    first1 = tmp12[0];
  }
  const tmp16 = importDefault(first[22])();
  handleSubmit = tmp16.handleSubmit;
  const obj4 = _require(first[17]);
  const tmp18 = importDefault(first[23])();
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
    if (field === callback.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first1.subSection];
  const effect = obj1.useEffect(() => {
    let obj = callback2(first[25]);
    obj = { settings_type: "user", subsection: first1.subSection, destination_pane: closure_1_14.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(closure_1_13.SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [guild];
  const effect1 = obj1.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = callback(first[26]).initGuildIdentitySettings(tmp.id);
      const obj = callback(first[26]);
    }
    return callback(first[20]).resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = obj1.useEffect(() => () => {
    closure_10.resetState();
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp21, callback];
  const layoutEffect = obj1.useLayoutEffect(() => {
    obj = {
      contentStyle: obj,
      headerShadowVisible: false,
      headerRight: closure_11 ? (() => callback2(callback(table[27]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        let obj = {};
        const merged = Object.assign(arg0);
        const intl = closure_1_0(closure_1_2[11]).intl;
        obj.label = intl.string(closure_1_0(closure_1_2[11]).t["R3BPH+"]);
        obj.disabled = !closure_10;
        obj.onPress = closure_1_5(function*() {
          if (c2 === 2) {
            c2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_0 = tmp4;
                  c1 = 1;
                  c2 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1_12();
                  return obj1;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                if (false !== arg1) {
                  callback(true);
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
        return closure_1_15(closure_1_0(closure_1_2[28]).HeaderTextButton, obj);
      })
    };
    obj = { backgroundColor: closure_0 };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj1.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp19 = first1(tmp18, nativeStackNavigation);
  if (stateFromStores) {
    stateFromStores = !tmp21;
  }
  if (stateFromStores) {
    stateFromStores = !first;
  }
  const preventRemove = _require(first[29]).usePreventRemove(stateFromStores, (data) => {
    const action = data.data.action;
    const obj = {
      hasEdits: stateFromStores,
      resetPending: callback(first[20]).resetAllPending,
      onHasEdits: callback(first[21]).dismissKeyboard,
      onConfirm() {
        return closure_1_4.dispatch(action);
      }
    };
    callback2(first[19])(obj);
  });
  const items5 = [first, nativeStackNavigation];
  const effect3 = obj1.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  obj = { style: tmp.container, onLayout: callback1, children: null };
  obj1 = { style: tmp.controls, children: callback(tmp2(tmp3[30]).Tabs, { state: segmentedControlState }) };
  const items6 = [callback(handleSubmit2, obj1), callback(_require(first[31]).SegmentedControlPages, { state: segmentedControlState })];
  obj[2] = items6;
  return callback2(handleSubmit2, obj);
});
let obj = {
  renderLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return callback(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
const result = require("set").fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;