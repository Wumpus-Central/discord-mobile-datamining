import filterStaffGuild from "filterStaffGuild";
import "set";
import { View } from "TableRowInner";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import initialize from "initialize";
import closure_7 from "filterStaffGuild";
import ME from "ME";
import jsxProd from "ack";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AnalyticsObjectTypes: metroImportAll, AnalyticsObjects: c9 } = ME);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { padding: null };
createCacheKey = { bottomPadding: require("Themes").space.PX_16, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/ICYMISettingsActionSheet.tsx");

export default function ICYMISettingsActionSheet() {
  let obj = stateFromStoresObject(589);
  const items = [initialize];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => state.getState());
  const ICYMIStaffDebuggingUtilityExperiment = stateFromStoresObject(8190).ICYMIStaffDebuggingUtilityExperiment;
  obj = { title: null, hasIcons: false, children: null };
  const intl = stateFromStoresObject(1236).intl;
  obj[0] = intl.string(stateFromStoresObject(1236).t["7Si8Ul"]);
  let tmp5Result = null;
  if (ICYMIStaffDebuggingUtilityExperiment.useConfig({ location: "settings action sheet" }).enabled) {
    obj = { label: null, value: null, onValueChange: null };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t["3wDyfQ"]);
    let flag = stateFromStoresObject.filterStaffContent;
    if (flag == null) {
      flag = false;
    }
    let obj1 = { children: null };
    obj[1] = flag;
    obj[2] = function onValueChange() {
      let obj = outer1_1(outer1_2[16]);
      obj = {};
      const merged = Object.assign(stateFromStoresObject);
      obj.filterStaffContent = !stateFromStoresObject.filterStaffContent;
      obj.setFilters(obj);
      const dehydrated = outer1_1(outer1_2[16]).fetchDehydrated();
    };
    const items1 = [callback2(tmp(5559).TableSwitchRow, obj), , ];
    let obj2 = { label: "Clear read states", onPress: null };
    obj2[1] = function onPress() {
      dehydratedItems = dehydratedItems.getDehydratedItems();
      const item = dehydratedItems.forEach((type) => {
        let tmp3 = type.type === callback(table[18]).ICYMIItemTypes.MESSAGE;
        if (tmp3) {
          tmp3 = type.data.channel_type === tmp(tmp2[19]).ChannelTypes.GUILD_ANNOUNCEMENT;
        }
        if (tmp3) {
          let obj = callback2(tmp2[20]);
          tmp3 = obj.compare(generateOldThreadCutoff.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
        }
        if (tmp3) {
          const tmpResult = tmp(tmp2[21]);
          const channel_id = type.data.channel_id;
          obj = { object: null, objectType: null };
          obj[0] = constants2.ACK_GRAVITY_CLEAR_READ_STATES_BUTTON;
          obj[1] = constants.ACK_SEMI_AUTOMATIC;
          tmpResult.ack(channel_id, obj, true, true, callback2(tmp2[20]).atPreviousMillisecond(type.data.message_id));
          const obj4 = callback2(tmp2[20]);
        }
      });
      callback(paths[16]).clearReadStates();
      let obj = callback(paths[16]);
      callback(paths[22]).hideActionSheet();
    };
    items1[1] = callback2(tmp(5224).TableRow, obj2);
    let obj3 = { label: "Regenerate feed and clear read states", onPress: null };
    obj3[1] = callback(function*() {
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
          if (0 === v0) {
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
              let obj2 = outer1_0(8188);
              v0 = 1;
              dependencyMap = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.regenerateFeedAndClearReadStates(outer1_9.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = v0(4161);
            obj.hideActionSheet();
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          dependencyMap = tmp;
          throw tmp12;
        }
      }
    });
    items1[2] = callback2(tmp(5224).TableRow, obj3);
    obj1[0] = items1;
    tmp5Result = tmp5(closure_11, obj1);
    const tmp7 = closure_11;
  }
  let obj4 = { showGradient: true, startExpanded: true, children: null };
  const items2 = [tmp5Result, ];
  const obj5 = { label: null, onPress: null };
  const intl3 = tmp(1236).intl;
  obj5[0] = intl3.string(stateFromStoresObject(1236).t.Eorjmy);
  obj5[1] = function onPress() {
    callback(paths[16]).itemInteracted("icymi_settings_action_sheet", "icymi_settings_action_sheet", "custom_scoring_button");
    const obj = callback(paths[16]);
    callback(paths[16]).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "tune_settings_button", actionIntentType: "open", actionDestinationType: null } });
    const obj2 = callback(paths[16]);
    const obj3 = callback(paths[24]);
    obj3.pushLazy(stateFromStoresObject(paths[26])(paths[25], paths.paths), {}, stateFromStoresObject(paths[27]).ICYMI_CUSTOM_SCORES_MODAL_KEY, { presentation: "modal" });
    const tmp3 = stateFromStoresObject(paths[26])(paths[25], paths.paths);
    callback(paths[22]).hideActionSheet();
  };
  items2[1] = callback2(stateFromStoresObject(5224).TableRow, obj5);
  obj[2] = items2;
  const items3 = [closure_12(stateFromStoresObject(5558).TableRowGroup, obj), ];
  const tmp4 = createCacheKey();
  items3[1] = callback2(View, { style: createCacheKey().padding });
  obj4[2] = items3;
  return closure_12(stateFromStoresObject(5555).ActionSheet, obj4);
};