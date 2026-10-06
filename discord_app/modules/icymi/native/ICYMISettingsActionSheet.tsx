// === Module 16436: ICYMISettingsActionSheet ===

// Module 16436 (ICYMISettingsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import ICYMIFiltersStore from "ICYMIFiltersStore" /* 8033 */;
import ICYMIStore from "ICYMIStore" /* 8021 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dehydratedItems, paths;

let c10;
let c9;
let closure_12;
let metroImportAll;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ AnalyticsObjectTypes: metroImportAll, AnalyticsObjects: c9 } = Constants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { padding: obj2 };
obj2 = { bottomPadding: nativeDefault.space.PX_16, width: "100%" };
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMISettingsActionSheet.tsx");

export default function ICYMISettingsActionSheet() {
  let flag;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let state;
  let stateFromStoresObject;
  const tmp = stateFromStoresObject;
  let obj = stateFromStoresObject(504);
  const items = [ICYMIFiltersStore];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => state.getState());
  let tmp4 = closure_13();
  const ICYMIStaffDebuggingUtilityExperiment = stateFromStoresObject(8040).ICYMIStaffDebuggingUtilityExperiment;
  const enabled = ICYMIStaffDebuggingUtilityExperiment.useConfig({ location: "settings action sheet" }).enabled;
  const ActionSheet = stateFromStoresObject(6708).ActionSheet;
  let obj2 = { title: intl.string(stateFromStoresObject(1126).t["7Si8Ul"]), hasIcons: false, children: items2 };
  const TableRowGroup = stateFromStoresObject(6081).TableRowGroup;
  intl = stateFromStoresObject(1126).intl;
  let tmp5Result = null;
  if (enabled) {
    let obj3 = {
      label: intl2.string(tmp(1126).t["3wDyfQ"]),
      value: flag,
      onValueChange() {
          const obj = { filterStaffContent: !stateFromStoresObject.filterStaffContent };
          const setFilters = ICYMIActionCreatorsDefault.setFilters;
          ICYMIActionCreatorsDefault;
          const merged = Object.assign(stateFromStoresObject);
          setFilters(obj);
          const obj2 = ICYMIActionCreatorsDefault;
          const dehydrated = obj2.fetchDehydrated();
        }
    };
    const TableSwitchRow = tmp(6705).TableSwitchRow;
    intl2 = tmp(1126).intl;
    flag = stateFromStoresObject.filterStaffContent;
    if (flag == null) {
      flag = false;
    }
    let obj4 = { children: items1 };
    items1 = [closure_10(TableSwitchRow, obj3), , ];
    let obj5 = {
      label: "Clear read states",
      onPress() {
          let constants2;
          dehydratedItems = dehydratedItems.getDehydratedItems();
          const item = dehydratedItems.forEach((type) => {
            let tmp3 = type.type === stateFromStoresObject(paths[18]).ICYMIItemTypes.MESSAGE && type.data.channel_type === stateFromStoresObject(paths[19]).ChannelTypes.GUILD_ANNOUNCEMENT;
            if (tmp3) {
              const obj = closure_1_1(paths[20]);
              tmp3 = obj.compare(closure_1_5.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
            }
            if (tmp3) {
              const channel_id = type.data.channel_id;
              const ack = stateFromStoresObject(paths[21]).ack;
              const obj2 = { object: constants2.ACK_GRAVITY_CLEAR_READ_STATES_BUTTON, objectType: constants.ACK_SEMI_AUTOMATIC };
              const tmpResult = stateFromStoresObject(paths[21]);
              const obj3 = closure_1_1(paths[20]);
              ack(channel_id, obj2, true, true, obj3.atPreviousMillisecond(type.data.message_id));
            }
          });
          let obj = require("ICYMIActionCreators");
          obj.clearReadStates();
          let obj2 = require("ActionSheetActionCreators");
          obj2.hideActionSheet();
        }
    };
    items1[1] = closure_10(tmp(6000).TableRow, obj5);
    let obj6 = {
      label: "Regenerate feed and clear read states",
      onPress: _asyncToGenerator(async () => {
          let c2;
          let closure_0;
          let v1;
          if (paths === 2) {
            paths = 3;
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
              paths = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  paths = 3;
                  throw value;
                } else if (arg0 === 2) {
                  paths = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  v1 = 1;
                  const obj3 = tmp3(paths[23]);
                  paths = 1;
                  const obj5 = { value: obj3.regenerateFeedAndClearReadStates(constants.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                paths = 3;
                throw value;
              } else if (arg0 === 2) {
                paths = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                const obj = v1(paths[22]);
                obj.hideActionSheet();
                paths = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              paths = 3;
              throw tmp11;
            }
          }
        })
    };
    const TableRow = tmp(6000).TableRow;
    items1[2] = closure_10(TableRow, obj6);
    tmp5Result = closure_12(closure_11, obj4);
  }
  items2 = [tmp5Result, ];
  const obj7 = { showGradient: true, startExpanded: true, children: items3 };
  const obj8 = {
    label: intl3.string(tmp(1126).t.Eorjmy),
    onPress() {
      const obj = require("ICYMIActionCreators");
      obj.itemInteracted("icymi_settings_action_sheet", "icymi_settings_action_sheet", "custom_scoring_button");
      const obj2 = require("ICYMIActionCreators");
      obj2.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "tune_settings_button", actionIntentType: "open", actionDestinationType: null } });
      const pushLazy = require("ModalActionCreators").pushLazy;
      require("ModalActionCreators");
      const tmp4 = stateFromStoresObject(paths[26])(paths[25], paths.paths);
      pushLazy(tmp4, {}, stateFromStoresObject(paths[27]).ICYMI_CUSTOM_SCORES_MODAL_KEY, { presentation: "modal" });
      const obj3 = require("ActionSheetActionCreators");
      obj3.hideActionSheet();
    }
  };
  const TableRow2 = tmp(6000).TableRow;
  intl3 = tmp(1126).intl;
  items2[1] = closure_10(TableRow2, obj8);
  items3 = [closure_12(TableRowGroup, obj2), ];
  const obj9 = { style: tmp4.padding };
  items3[1] = closure_10(View, obj9);
  return closure_12(ActionSheet, obj7);
};