// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile.tsx";
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import zustandStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";
import handleFormOpen from "../../../user_profile/UserProfileSettingsStore.tsx";
import { ProfileCustomizationSubsection } from "../../UserSettingsConstants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
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
  let obj = _require(nativeStackNavigation[14]);
  const token = obj.useToken(importDefault(nativeStackNavigation[15]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  obj1 = stateFromStores;
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
  const mapped = items.map((item, index) => {
    ({ id, renderPage } = item);
    return { label: item.renderLabel(), id, page: renderPage(closure_0) };
  });
  let tmp2Result = tmp2(tmp3[18]);
  obj = { items: mapped, pageWidth: tmp7, defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num = 0;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  obj[2] = num;
  obj[3] = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    callback.setState({ subsection: first.subSection });
  };
  obj[4] = function onPageChangeStart(arg0, arg1) {
    const obj = { hasEdits: stateFromStores, resetPending: callback(nativeStackNavigation[20]).resetAllPending, onHasEdits: callback(nativeStackNavigation[21]).dismissKeyboard, onConfirm: arg1 };
    return importDefault(nativeStackNavigation[19])(obj);
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
  items = [closure_11];
  stateFromStores = tmp2Result.useStateFromStores(items, () => closure_11.showNotice());
  const tmp20 = tmp16.isSubmitting || guild(tmp17, first).isSubmitting;
  closure_9 = tmp20;
  const items1 = [field, handleSubmit, handleSubmit2];
  callback = obj1.useCallback(() => {
    if (field === ProfileCustomizationSubsection.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first.subSection];
  const effect = obj1.useEffect(() => {
    importDefault(nativeStackNavigation[25]);
    const obj = { settings_type: "user", subsection: first.subSection, destination_pane: closure_1_14.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(closure_1_13.SETTINGS_PANE_VIEWED, obj);
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
    let obj = { backgroundColor: closure_0 };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj1.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp18 = guild(tmp17, first);
  if (stateFromStores) {
    stateFromStores = !tmp20;
  }
  const preventRemove = _require(nativeStackNavigation[30]).usePreventRemove(stateFromStores, (data) => {
    const action = data.data.action;
    const obj = {
      hasEdits: stateFromStores,
      resetPending: callback(nativeStackNavigation[20]).resetAllPending,
      onHasEdits: callback(nativeStackNavigation[21]).dismissKeyboard,
      onConfirm() {
        return nativeStackNavigation.dispatch(action);
      }
    };
    importDefault(nativeStackNavigation[19])(obj);
  });
  obj = { style: tmp.container, onLayout: callback1, children: null };
  obj1 = { style: tmp.controls, children: callback(tmp2(tmp3[31]).Tabs, { state: segmentedControlState }) };
  const items5 = [callback(closure_9, obj1), callback(_require(nativeStackNavigation[32]).SegmentedControlPages, { state: segmentedControlState })];
  obj[2] = items5;
  return callback2(closure_9, obj);
});
const result = require("obj132").fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;