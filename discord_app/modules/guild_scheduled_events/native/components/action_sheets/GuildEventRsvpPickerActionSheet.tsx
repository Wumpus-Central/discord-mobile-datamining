// === Module 9480: GuildEventRsvpPickerActionSheet ===

// Module 9480 (GuildEventRsvpPickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9174 */;
import GuildEventRsvpUtils from "GuildEventRsvpUtils" /* 9181 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, event;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const constants = GuildScheduledEventsConstants.GuildScheduledEventUserResponses;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonWrapper: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let defaultValue;
  let guildId;
  let items;
  let tmp12;
  let obj = event(guildId[8]);
  const cResult = obj.c(27);
  event = event.event;
  const recurrenceId = event.recurrenceId;
  guildId = event.guildId;
  const onRsvp = event.onRsvp;
  const tmp4 = closure_9();
  const tmp5 = onRsvp(defaultValue.useState(event(guildId[9]).ResponseOptions.SERIES), 2);
  defaultValue = tmp5[0];
  const tmp7 = tmp5[1];
  let obj2 = event(guildId[9]);
  const existingRsvp = obj2.getExistingRsvp(event.id, null);
  let response;
  if (existingRsvp != null) {
    response = existingRsvp.response;
  }
  const tmp11 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
  let closure_5 = tmp11;
  if (cResult[0] !== tmp11) {
    let stringResult;
    if (tmp11 === constants.INTERESTED) {
      const intl2 = tmp(tmp2[10]).intl;
      stringResult = intl2.string(tmp(tmp2[10]).t.WtORed);
    } else {
      const intl = tmp(tmp2[10]).intl;
      stringResult = intl.string(tmp(tmp2[10]).t["8MPCVr"]);
    }
    cResult[0] = tmp11;
    cResult[1] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] === event.id) {
    if (cResult[3] === tmp11) {
      if (cResult[4] === guildId) {
        if (cResult[5] === onRsvp) {
          if (cResult[6] === recurrenceId) {
            let tmp14;
            let tmp15;
            let tmp19;
            let tmp21;
            let tmp24;
            let tmp26;
            if (cResult[7] === defaultValue) {
              tmp14 = cResult[8];
            }
            if (cResult[9] !== tmp12) {
              const obj3 = { title: tmp12 };
              const tmp17 = closure_7(event(guildId[13]).BottomSheetTitleHeader, obj3);
              cResult[9] = tmp12;
              cResult[10] = tmp17;
              tmp15 = tmp17;
            } else {
              tmp15 = cResult[10];
            }
            const _Symbol = Symbol;
            const container = tmp4.container;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              let tmpResult = tmp(tmp2[9]);
              const responseOptions = tmpResult.getResponseOptions();
              const mapped = responseOptions.map((value) => {
                const obj = { value: value.value, label: value.name };
                return closure_1_7(event(guildId[14]).TableRadioRow, obj, value.value);
              });
              cResult[11] = mapped;
              tmp19 = mapped;
            } else {
              tmp19 = cResult[11];
            }
            if (cResult[12] !== defaultValue) {
              const obj4 = { defaultValue, onChange: tmp7, hasIcons: false, children: tmp19 };
              const tmp23 = closure_7(event(guildId[15]).TableRadioGroup, obj4);
              cResult[12] = defaultValue;
              cResult[13] = tmp23;
              tmp21 = tmp23;
            } else {
              tmp21 = cResult[13];
            }
            const _Symbol2 = Symbol;
            const buttonWrapper = tmp4.buttonWrapper;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(tmp2[10]).intl;
              const stringResult1 = intl3.string(event(guildId[10]).t.TyCVIq);
              cResult[14] = stringResult1;
              tmp24 = stringResult1;
            } else {
              tmp24 = cResult[14];
            }
            if (cResult[15] !== tmp14) {
              const obj5 = { onPress: tmp14, text: tmp24 };
              const tmp28 = closure_7(event(guildId[16]).Button, obj5);
              cResult[15] = tmp14;
              cResult[16] = tmp28;
              tmp26 = tmp28;
            } else {
              tmp26 = cResult[16];
            }
            if (cResult[17] === tmp4.buttonWrapper) {
              let tmp29;
              if (cResult[18] === tmp26) {
                tmp29 = cResult[19];
              }
              if (cResult[20] === tmp4.container) {
                if (cResult[21] === tmp29) {
                  let tmp33;
                  if (cResult[22] === tmp21) {
                    tmp33 = cResult[23];
                  }
                  if (cResult[24] === tmp33) {
                    let tmp36;
                    if (cResult[25] === tmp15) {
                      tmp36 = cResult[26];
                    }
                    return tmp36;
                  }
                  const obj6 = { header: tmp15, children: tmp33 };
                  const tmp38 = closure_7(event(guildId[18]).BottomSheet, obj6);
                  cResult[24] = tmp33;
                  cResult[25] = tmp15;
                  cResult[26] = tmp38;
                  tmp36 = tmp38;
                }
              }
              const obj7 = { bottom: true, style: container, children: items };
              items = [tmp21, tmp29];
              const tmp35 = closure_8(event(guildId[17]).SafeAreaPaddingView, obj7);
              cResult[20] = tmp4.container;
              cResult[21] = tmp29;
              cResult[22] = tmp21;
              cResult[23] = tmp35;
              tmp33 = tmp35;
            }
            const obj8 = { style: buttonWrapper, children: tmp26 };
            const tmp32 = closure_7(closure_5, obj8);
            cResult[17] = tmp4.buttonWrapper;
            cResult[18] = tmp26;
            cResult[19] = tmp32;
            tmp29 = tmp32;
          }
        }
      }
    }
  }
  class O {
    constructor() {
      let tmp3 = null;
      if (first !== GuildEventRsvpUtils.ResponseOptions.SERIES) {
        tmp3 = recurrenceId;
      }
      const tmpResult = GuildScheduledEventModalActionCreators;
      tmpResult.updateRsvp(event.id, tmp3, guildId, closure_5);
      if (onRsvp != null) {
        onRsvp();
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }
  cResult[2] = event.id;
  cResult[3] = tmp11;
  cResult[4] = guildId;
  cResult[5] = onRsvp;
  cResult[6] = recurrenceId;
  cResult[7] = defaultValue;
  cResult[8] = O;
  tmp14 = O;
}) : ((event) => {
  let Button;
  let SafeAreaPaddingView;
  let defaultValue;
  let intl3;
  let items;
  let obj3;
  let obj6;
  let responseOptions;
  let stringResult;
  let tmp6;
  event = event.event;
  ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: _slicedToArray } = event);
  defaultValue = undefined;
  let closure_5;
  const tmp = closure_9();
  [defaultValue, tmp6] = defaultValue.useState(event(9181).ResponseOptions.SERIES);
  let obj = event(9181);
  const existingRsvp = obj.getExistingRsvp(event.id, null);
  let response;
  if (existingRsvp != null) {
    response = existingRsvp.response;
  }
  const tmp10 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
  closure_5 = tmp10;
  if (tmp10 === constants.INTERESTED) {
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t.WtORed);
  } else {
    const intl = tmp2(1126).intl;
    stringResult = intl.string(tmp2(1126).t["8MPCVr"]);
  }
  let obj2 = { header: closure_7(event(6644).BottomSheetTitleHeader, { title: stringResult }), children: closure_8(SafeAreaPaddingView, obj3) };
  BottomSheet = tmp2(6645).BottomSheet;
  obj3 = { bottom: true, style: tmp.container, children: items };
  SafeAreaPaddingView = tmp2(6619).SafeAreaPaddingView;
  const obj4 = {
    defaultValue,
    onChange: tmp6,
    hasIcons: false,
    children: responseOptions.map((value) => {
      const obj = { value: value.value, label: value.name };
      return closure_1_7(event(dependencyMap[14]).TableRadioRow, obj, value.value);
    })
  };
  const TableRadioGroup = tmp2(6072).TableRadioGroup;
  const tmp2Result = event(9181);
  responseOptions = tmp2Result.getResponseOptions();
  items = [closure_7(TableRadioGroup, obj4), ];
  const obj5 = { style: tmp.buttonWrapper, children: closure_7(Button, obj6) };
  obj6 = {
    onPress() {
      let tmp3 = null;
      if (first !== GuildEventRsvpUtils.ResponseOptions.SERIES) {
        tmp3 = importDefault;
      }
      const tmpResult = GuildScheduledEventModalActionCreators;
      tmpResult.updateRsvp(event.id, tmp3, dependencyMap, closure_5);
      if (_slicedToArray != null) {
        _slicedToArray();
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    },
    text: intl3.string(event(1126).t.TyCVIq)
  };
  Button = tmp2(5594).Button;
  intl3 = tmp2(1126).intl;
  items[1] = closure_7(closure_5, obj5);
  return closure_7(BottomSheet, obj2);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx");

export default tmp4;