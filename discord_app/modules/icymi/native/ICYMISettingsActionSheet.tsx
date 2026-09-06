// discord_app/modules/icymi/native/ICYMISettingsActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import ICYMIFiltersStore from "../ICYMIFiltersStore.tsx";
import ICYMIStore from "../ICYMIStore.tsx";

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { padding: null };
createStyles = { bottomPadding: nativeDefault.space.PX_16, width: "100%" };
createStyles.padding = createStyles;
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMISettingsActionSheet.tsx");

export default function ICYMISettingsActionSheet() {
  let obj = stateFromStoresObject(504);
  const items = [ICYMIFiltersStore];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => state.getState());
  const ICYMIStaffDebuggingUtilityExperiment = stateFromStoresObject(8352).ICYMIStaffDebuggingUtilityExperiment;
  obj = { title: null, hasIcons: false, children: null };
  const intl = stateFromStoresObject(1114).intl;
  obj.title = intl.string(stateFromStoresObject(1114).t["7Si8Ul"]);
  let tmp5Result = null;
  if (ICYMIStaffDebuggingUtilityExperiment.useConfig({ location: "settings action sheet" }).enabled) {
    obj = { label: null, value: null, onValueChange: null };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t["3wDyfQ"]);
    let flag = stateFromStoresObject.filterStaffContent;
    if (flag == null) {
      flag = false;
    }
    let obj1 = { children: null };
    obj.value = flag;
    obj.onValueChange = function onValueChange() {
      const obj = {};
      const merged = Object.assign(stateFromStoresObject);
      obj.filterStaffContent = !stateFromStoresObject.filterStaffContent;
      obj.setFilters(obj);
      const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated();
    };
    const items1 = [closure_10(tmp(7201).TableSwitchRow, obj), ,];
    let obj2 = {
      label: "Clear read states",
      onPress() {
        dehydratedItems = dehydratedItems.getDehydratedItems();
        const item = dehydratedItems.forEach((type) => {
          let tmp3 = type.type === stateFromStoresObject(paths[18]).ICYMIItemTypes.MESSAGE;
          if (tmp3) {
            tmp3 = type.data.channel_type === tmp(tmp2[19]).ChannelTypes.GUILD_ANNOUNCEMENT;
          }
          if (tmp3) {
            let obj = closure_1_1(tmp2[20]);
            tmp3 = obj.compare(closure_1_5.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
          }
          if (tmp3) {
            const tmpResult = tmp(tmp2[21]);
            const channel_id = type.data.channel_id;
            obj = { object: constants2.ACK_GRAVITY_CLEAR_READ_STATES_BUTTON, objectType: constants.ACK_SEMI_AUTOMATIC };
            tmpResult.ack(
              channel_id,
              obj,
              true,
              true,
              closure_1_1(tmp2[20]).atPreviousMillisecond(type.data.message_id),
            );
            const obj4 = closure_1_1(tmp2[20]);
          }
        });
        require("ICYMIActionCreators").clearReadStates();
        let obj = require("ICYMIActionCreators");
        require("ActionSheetActionCreators").hideActionSheet();
      },
    };
    items1[1] = closure_10(tmp(5605).TableRow, obj2);
    let obj3 = {
      label: "Regenerate feed and clear read states",
      onPress: asyncGeneratorStep(async (arg0, value) => {
        if (dependencyMap === 2) {
          dependencyMap = 3;
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
            dependencyMap = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let obj2 = tmp4(8350);
                v1 = 1;
                dependencyMap = 1;
                const obj1 = {
                  value: obj2.regenerateFeedAndClearReadStates(
                    constants.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON,
                  ),
                  done: false,
                };
                return obj1;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj2 = { value, done: true };
              return obj2;
            } else {
              obj = v1(4527);
              obj.hideActionSheet();
              dependencyMap = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp12) {
            dependencyMap = tmp;
            throw tmp12;
          }
        }
      }),
    };
    items1[2] = closure_10(tmp(5605).TableRow, obj3);
    obj1.children = items1;
    tmp5Result = tmp5(closure_11, obj1);
  }
  let obj4 = { showGradient: true, startExpanded: true, children: null };
  const items2 = [tmp5Result];
  const obj5 = { label: null, onPress: null };
  const intl3 = tmp(1114).intl;
  obj5.label = intl3.string(stateFromStoresObject(1114).t.Eorjmy);
  obj5.onPress = function onPress() {
    require("ICYMIActionCreators").itemInteracted(
      "icymi_settings_action_sheet",
      "icymi_settings_action_sheet",
      "custom_scoring_button",
    );
    const obj = require("ICYMIActionCreators");
    require("ICYMIActionCreators").feedPageActioned({
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "tune_settings_button",
        actionIntentType: "open",
        actionDestinationType: null,
      },
    });
    const obj2 = require("ICYMIActionCreators");
    const obj3 = require("ModalActionCreators");
    obj3.pushLazy(
      stateFromStoresObject(paths[26])(paths[25], paths.paths),
      {},
      stateFromStoresObject(paths[27]).ICYMI_CUSTOM_SCORES_MODAL_KEY,
      { presentation: "modal" },
    );
    const tmp3 = stateFromStoresObject(paths[26])(paths[25], paths.paths);
    require("ActionSheetActionCreators").hideActionSheet();
  };
  items2[1] = closure_10(stateFromStoresObject(5605).TableRow, obj5);
  obj.children = items2;
  const items3 = [closure_12(stateFromStoresObject(5687).TableRowGroup, obj)];
  const tmp4 = closure_13();
  items3[1] = closure_10(View, { style: closure_13().padding });
  obj4.children = items3;
  return closure_12(stateFromStoresObject(7198).ActionSheet, obj4);
}
