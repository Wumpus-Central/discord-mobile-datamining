// === Module 13706: ProfileCustomizationSubsection ===

// Module 13706 (ProfileCustomizationSubsection)
import zustandStore from "zustandStore";
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import importAllResult from "getBestActiveInput";
import { View } from "maybeShowDiscardChangesAlert";
import closure_10 from "zustandStore";
import handleFormOpen from "handleFormOpen";
import { ProfileCustomizationSubsection } from "MAX_FAVORITES";
import ME from "ME";
import jsxProd from "useGuildProfileEditForm";
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
      return callback(importDefault(13707), { autoFocusElement: autoFocusElement.autoFocusElement });
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
      return callback(importDefault(13759), {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  let obj = importAllResult;
  let tmp2 = stateFromStores(importAllResult.useState(0), 2);
  let _require = tmp2[1];
  let obj1 = _require(field[14]);
  const nativeStackNavigation = obj1.useNativeStackNavigation();
  const params = _require(field[15]).useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  field = closure_10.useField("subsection");
  _require = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    let id;
    let renderPage;
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  let tmp3Result = tmp3(tmp4[16]);
  obj = { items: mapped, pageWidth: tmp2[0], defaultIndex: null, onPageChange: null, onPageChangeStart: null };
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
    state.setState({ subsection: first.subSection });
  };
  obj[4] = function onPageChangeStart(arg0, arg1) {
    const obj = { hasEdits: stateFromStores, resetPending: null, onHasEdits: null, onConfirm: null };
    obj[1] = callback(field[18]).resetAllPending;
    obj[2] = callback(field[19]).dismissKeyboard;
    obj[3] = arg1;
    return nativeStackNavigation(field[17])(obj);
  };
  const segmentedControlState = tmp3Result.useSegmentedControlState(obj);
  const activeIndex = segmentedControlState.activeIndex;
  let first = tmp8[activeIndex.get(activeIndex)];
  if (first == null) {
    first = tmp8[0];
  }
  const tmp13 = nativeStackNavigation(field[20])();
  const handleSubmit = tmp13.handleSubmit;
  const obj3 = _require(field[15]);
  const tmp12 = nativeStackNavigation;
  const tmp15 = nativeStackNavigation(field[21])();
  const guild = tmp15.guild;
  const handleSubmit2 = tmp15.handleSubmit;
  const tmp14 = handleSubmit2(tmp13, first);
  tmp3Result = tmp3(tmp4[22]);
  items = [handleFormOpen];
  stateFromStores = tmp3Result.useStateFromStores(items, () => handleFormOpen.showNotice());
  const tmp18 = tmp14.isSubmitting || handleSubmit2(tmp15, handleSubmit).isSubmitting;
  const items1 = [field, handleSubmit, handleSubmit2];
  const callback = obj.useCallback(() => {
    if (field === outer1_12.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first.subSection];
  const effect = obj.useEffect(() => {
    let obj = nativeStackNavigation(field[23]);
    obj = { settings_type: "user", subsection: first.subSection, destination_pane: outer1_14.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(outer1_13.SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [guild];
  const effect1 = obj.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = callback(field[24]).initGuildIdentitySettings(tmp.id);
      const obj = callback(field[24]);
    }
    return callback(field[18]).resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = obj.useEffect(() => () => {
    closure_10.resetState();
  }, []);
  const items4 = [nativeStackNavigation, stateFromStores, tmp18, callback];
  const layoutEffect = obj.useLayoutEffect(() => {
    nativeStackNavigation.setOptions({
      headerShadowVisible: false,
      headerRight: closure_8 ? (() => callback2(callback(table[25]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        let obj = {};
        const merged = Object.assign(arg0);
        const intl = outer1_0(outer1_2[11]).intl;
        obj.label = intl.string(outer1_0(outer1_2[11]).t["R3BPH+"]);
        obj.disabled = !_slicedToArray;
        obj.onPress = outer1_5(function*() {
          if (dependencyMap === 2) {
            dependencyMap = 3;
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
              dependencyMap = 2;
              if (0 === navigation) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_0 = tmp4;
                  navigation = 1;
                  dependencyMap = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_9();
                  return obj1;
                }
              } else if (arg0 === 1) {
                dependencyMap = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                if (false !== arg1) {
                  const delayedCall = new outer1_0(4078).DelayedCall(outer1_0(13760).RESET_DELAY_MS + 50, navigation.goBack);
                  delayedCall.delay();
                }
                dependencyMap = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp14) {
              dependencyMap = tmp;
              throw tmp14;
            }
          }
        });
        return outer1_15(outer1_0(outer1_2[26]).HeaderTextButton, obj);
      })
    });
  }, items4);
  const callback1 = obj.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp16 = handleSubmit2(tmp15, handleSubmit);
  if (stateFromStores) {
    stateFromStores = !tmp18;
  }
  tmp12(field[28])(stateFromStores, (data) => {
    const action = data.data.action;
    const obj = { hasEdits: stateFromStores, resetPending: null, onHasEdits: null, onConfirm: null };
    obj[1] = callback(field[18]).resetAllPending;
    obj[2] = callback(field[19]).dismissKeyboard;
    obj[3] = function onConfirm() {
      return outer1_1.dispatch(action);
    };
    nativeStackNavigation(field[17])(obj);
  });
  obj = { style: tmp.container, onLayout: callback1, children: null };
  obj1 = { style: tmp.controls, children: callback(tmp3(tmp4[29]).Tabs, { state: segmentedControlState }) };
  const items5 = [callback(callback, obj1), callback(_require(field[30]).SegmentedControlPages, { state: segmentedControlState })];
  obj[2] = items5;
  return callback2(callback, obj);
});
let obj = {
  renderLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return callback(importDefault(13707), { autoFocusElement: autoFocusElement.autoFocusElement });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
const result = require("_slicedToArray").fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;