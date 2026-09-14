// === Module 16551: ICYMISettingsActionSheet ===

// Module 16551 (ICYMISettingsActionSheet)
import nativeDefault from "native" /* 576 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8469 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4651 */;
import ICYMIFiltersStore from "ICYMIFiltersStore" /* 8465 */;
import ICYMIStore from "ICYMIStore" /* 8453 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { padding: { bottomPadding: nativeDefault.space.PX_16, width: "100%" } };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMISettingsActionSheet.tsx");

export default function ICYMISettingsActionSheet() {
  const items = [ICYMIFiltersStore];
  stateFromStoresObject = stateFromStoresObject(504).useStateFromStoresObject(items, () => state.getState());
  let obj = stateFromStoresObject(504);
  const ICYMIStaffDebuggingUtilityExperiment = stateFromStoresObject(8470).ICYMIStaffDebuggingUtilityExperiment;
  let obj2 = { title: null, hasIcons: false, children: null };
  const intl = stateFromStoresObject(1114).intl;
  obj2.title = intl.string(stateFromStoresObject(1114).t["7Si8Ul"]);
  let tmp5Result = null;
  if (ICYMIStaffDebuggingUtilityExperiment.useConfig({ location: "settings action sheet" }).enabled) {
    let obj3 = { label: null, value: null, onValueChange: null };
    const intl2 = tmp(1114).intl;
    obj3.label = intl2.string(tmp(1114).t["3wDyfQ"]);
    let flag = stateFromStoresObject.filterStaffContent;
    if (flag == null) {
      flag = false;
    }
    let obj4 = { children: null };
    obj3.value = flag;
    obj3.onValueChange = function onValueChange() {
      const obj2 = {};
      const merged = Object.assign(stateFromStoresObject);
      obj2.filterStaffContent = !stateFromStoresObject.filterStaffContent;
      ICYMIActionCreatorsDefault.setFilters(obj2);
      const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated();
    };
    const items1 = [closure_10(tmp(7303).TableSwitchRow, obj3), , ];
    let obj5 = {
      label: "Clear read states",
      onPress() {
          dehydratedItems = dehydratedItems.getDehydratedItems();
          const item = dehydratedItems.forEach((type) => {
            let tmp3 = type.type === stateFromStoresObject(paths[18]).ICYMIItemTypes.MESSAGE;
            if (tmp3) {
              tmp3 = type.data.channel_type === stateFromStoresObject(paths[19]).ChannelTypes.GUILD_ANNOUNCEMENT;
            }
            if (tmp3) {
              tmp3 = closure_1_1(paths[20]).compare(closure_1_5.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
              const obj = closure_1_1(paths[20]);
            }
            if (tmp3) {
              const tmpResult = stateFromStoresObject(paths[21]);
              const channel_id = type.data.channel_id;
              const obj2 = { object: constants2.ACK_GRAVITY_CLEAR_READ_STATES_BUTTON, objectType: constants.ACK_SEMI_AUTOMATIC };
              tmpResult.ack(channel_id, obj2, true, true, closure_1_1(paths[20]).atPreviousMillisecond(type.data.message_id));
              const obj4 = closure_1_1(paths[20]);
            }
          });
          require("ICYMIActionCreators").clearReadStates();
          let obj = require("ICYMIActionCreators");
          require("ActionSheetActionCreators").hideActionSheet();
        }
    };
    items1[1] = closure_10(tmp(5686).TableRow, obj5);
    let obj6 = {
      label: "Regenerate feed and clear read states",
      onPress: asyncGeneratorStep(async () => {
          if (dependencyMap === 2) {
            dependencyMap = 3;
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
              dependencyMap = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  v1 = 1;
                  dependencyMap = 1;
                  const obj5 = { value: tmp4(8468).regenerateFeedAndClearReadStates(constants.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                v1(4603).hideActionSheet();
                dependencyMap = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp12) {
              dependencyMap = tmp;
              throw tmp12;
            }
          }
        })
    };
    items1[2] = closure_10(tmp(5686).TableRow, obj6);
    obj4.children = items1;
    tmp5Result = closure_12(closure_11, obj4);
  }
  const obj7 = { showGradient: true, startExpanded: true, children: null };
  const items2 = [tmp5Result, ];
  const obj8 = { label: null, onPress: null };
  const intl3 = tmp(1114).intl;
  obj8.label = intl3.string(stateFromStoresObject(1114).t.Eorjmy);
  obj8.onPress = function onPress() {
    require("ICYMIActionCreators").itemInteracted("icymi_settings_action_sheet", "icymi_settings_action_sheet", "custom_scoring_button");
    const obj = require("ICYMIActionCreators");
    require("ICYMIActionCreators").feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "tune_settings_button", actionIntentType: "open", actionDestinationType: null } });
    const obj2 = require("ICYMIActionCreators");
    const obj3 = require("ModalActionCreators");
    obj3.pushLazy(stateFromStoresObject(paths[26])(paths[25], paths.paths), {}, stateFromStoresObject(paths[27]).ICYMI_CUSTOM_SCORES_MODAL_KEY, { presentation: "modal" });
    const tmp3 = stateFromStoresObject(paths[26])(paths[25], paths.paths);
    require("ActionSheetActionCreators").hideActionSheet();
  };
  items2[1] = closure_10(stateFromStoresObject(5686).TableRow, obj8);
  obj2.children = items2;
  const items3 = [closure_12(stateFromStoresObject(5768).TableRowGroup, obj2), ];
  const tmp4 = closure_13();
  items3[1] = closure_10(View, { style: closure_13().padding });
  obj7.children = items3;
  return closure_12(stateFromStoresObject(7300).ActionSheet, obj7);
};