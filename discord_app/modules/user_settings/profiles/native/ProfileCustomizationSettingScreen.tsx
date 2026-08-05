// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import zustandStore from "zustandStore";
import _objectWithoutProperties from "_objectWithoutProperties";
import SegmentedControlPage from "SegmentedControlPage";
import importAllResult from "maybeShowDiscardChangesAlert";
import { View } from "useSettingNavigationRoute";
import closure_10 from "zustandStore";
import handleFormOpen from "handleFormOpen";
import { ProfileCustomizationSubsection } from "MAX_FAVORITES";
import ME from "ME";
import jsxProd from "getBestActiveInput";
import createCacheKey from "createCacheKey";

let closure_14;
let closure_15;
let closure_16;
let map1;
const require = arg1;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const metroImportAll = importAllResult;
({ AnalyticEvents: map1, AnalyticsSections: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = createCacheKey.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let items = [
  {
    renderLabel() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["2p07FR"]);
    },
    id: "edit-user-profile",
    renderPage(autoFocusElement) {
      return callback(importDefault(13803), { autoFocusElement: autoFocusElement.autoFocusElement });
    },
    subSection: ProfileCustomizationSubsection.USER_PROFILE
  },
  {
    renderLabel() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.kPHroX);
    },
    id: "edit-user-profiles-guilds",
    renderPage() {
      return callback(importDefault(13859), {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const memoResult = importAllResult.memo(() => {
  let importDefault;
  let tmp7;
  const tmp = callback3();
  let obj = _require(nativeStackNavigation[14]);
  const token = obj.useToken(importDefault(nativeStackNavigation[15]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  let obj1 = stateFromStores;
  [tmp7, importDefault] = handleSubmit2(stateFromStores.useState(0), 2);
  const tmp6 = handleSubmit2(stateFromStores.useState(0), 2);
  nativeStackNavigation = _require(nativeStackNavigation[16]).useNativeStackNavigation();
  const obj3 = _require(nativeStackNavigation[16]);
  const params = _require(nativeStackNavigation[17]).useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = callback.useField("subsection");
  _require = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    let id;
    let renderPage;
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  let tmp2Result = tmp2(tmp3[18]);
  obj = { items: mapped, pageWidth: tmp7, defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num = 0;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  obj[2] = num;
  obj[3] = function onPageChange(arg0) {
    let first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    callback.setState({ subsection: first.subSection });
  };
  obj[4] = function onPageChangeStart(arg0, arg1) {
    const obj = { hasEdits: stateFromStores, resetPending: null, onHasEdits: null, onConfirm: null };
    obj[1] = callback(nativeStackNavigation[20]).resetAllPending;
    obj[2] = callback(nativeStackNavigation[21]).dismissKeyboard;
    obj[3] = arg1;
    return outer1_1(nativeStackNavigation[19])(obj);
  };
  const segmentedControlState = tmp2Result.useSegmentedControlState(obj);
  const activeIndex = segmentedControlState.activeIndex;
  let first = tmp11[activeIndex.get(activeIndex)];
  if (first == null) {
    first = tmp11[0];
  }
  const tmp15 = importDefault(nativeStackNavigation[22])();
  const handleSubmit = tmp15.handleSubmit;
  const obj4 = _require(nativeStackNavigation[17]);
  const tmp17 = importDefault(nativeStackNavigation[23])();
  const guild = tmp17.guild;
  handleSubmit2 = tmp17.handleSubmit;
  const tmp16 = guild(tmp15, field);
  tmp2Result = tmp2(tmp3[24]);
  items = [handleFormOpen];
  stateFromStores = tmp2Result.useStateFromStores(items, () => handleFormOpen.showNotice());
  const tmp20 = tmp16.isSubmitting || guild(tmp17, first).isSubmitting;
  const View = tmp20;
  const items1 = [field, handleSubmit, handleSubmit2];
  callback = obj1.useCallback(() => {
    if (field === outer1_12.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first.subSection];
  const effect = obj1.useEffect(() => {
    let obj = outer1_1(nativeStackNavigation[25]);
    obj = { settings_type: "user", subsection: first.subSection, destination_pane: outer1_14.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(outer1_13.SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [guild];
  const effect1 = obj1.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = callback(nativeStackNavigation[26]).initGuildIdentitySettings(tmp.id);
      const obj = callback(nativeStackNavigation[26]);
    }
    return callback(nativeStackNavigation[20]).resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = obj1.useEffect(() => () => {
    closure_10.resetState();
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp20, callback];
  const layoutEffect = obj1.useLayoutEffect(() => {
    obj = {
      contentStyle: obj,
      headerShadowVisible: false,
      headerRight: closure_9 ? (() => callback2(callback(table[27]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        let obj = {};
        const merged = Object.assign(arg0);
        const intl = outer1_0(outer1_2[11]).intl;
        obj.label = intl.string(outer1_0(outer1_2[11]).t["R3BPH+"]);
        obj.disabled = !closure_8;
        obj.onPress = outer1_5(function*() {
          if (navigation === 2) {
            navigation = 3;
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
              navigation = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  navigation = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  navigation = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_0 = tmp4;
                  c1 = 1;
                  navigation = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_10();
                  return obj1;
                }
              } else if (arg0 === 1) {
                navigation = 3;
                throw arg1;
              } else if (arg0 === 2) {
                navigation = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                if (false !== arg1) {
                  const delayedCall = new outer1_0(navigation[29]).DelayedCall(outer1_0(navigation[23]).RESET_DELAY_MS + 50, navigation.goBack);
                  delayedCall.delay();
                }
                navigation = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp14) {
              navigation = tmp;
              throw tmp14;
            }
          }
        });
        return outer1_15(outer1_0(outer1_2[28]).HeaderTextButton, obj);
      })
    };
    obj = { backgroundColor: closure_0 };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj1.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp18 = guild(tmp17, first);
  if (stateFromStores) {
    stateFromStores = !tmp20;
  }
  importDefault(nativeStackNavigation[30])(stateFromStores, (data) => {
    const action = data.data.action;
    const obj = { hasEdits: stateFromStores, resetPending: null, onHasEdits: null, onConfirm: null };
    obj[1] = callback(nativeStackNavigation[20]).resetAllPending;
    obj[2] = callback(nativeStackNavigation[21]).dismissKeyboard;
    obj[3] = function onConfirm() {
      return outer1_2.dispatch(action);
    };
    outer1_1(nativeStackNavigation[19])(obj);
  });
  obj = { style: tmp.container, onLayout: callback1, children: null };
  obj1 = { style: tmp.controls, children: callback(tmp2(tmp3[31]).Tabs, { state: segmentedControlState }) };
  const items5 = [callback(View, obj1), callback(_require(nativeStackNavigation[32]).SegmentedControlPages, { state: segmentedControlState })];
  obj[2] = items5;
  return callback2(View, obj);
});
let obj = {
  renderLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return callback(importDefault(13803), { autoFocusElement: autoFocusElement.autoFocusElement });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
const result = require("_slicedToArray").fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;