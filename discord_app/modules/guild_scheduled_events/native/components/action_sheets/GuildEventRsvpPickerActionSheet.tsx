// discord_app/modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildEventRsvpUtils from "../../../utils/GuildEventRsvpUtils.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../GuildScheduledEventModalActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const constants = fn(2071).GuildScheduledEventUserResponses;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16 }, buttonWrapper: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonWrapper = { marginTop: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventRsvpPickerActionSheet(event) {
      const cResult = event(guildId[8]).c(27);
      event = event.event;
      const recurrenceId = event.recurrenceId;
      guildId = event.guildId;
      const onRsvp = event.onRsvp;
      const tmp4 = closure_9();
      const tmp5 = onRsvp(defaultValue.useState(event(guildId[9]).ResponseOptions.SERIES), 2);
      defaultValue = tmp5[0];
      const obj = event(guildId[8]);
      const existingRsvp = event(guildId[9]).getExistingRsvp(event.id, null);
      let response;
      if (existingRsvp != null) {
        response = existingRsvp.response;
      }
      const tmp10 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
      closure_5 = tmp10;
      if (cResult[0] !== tmp10) {
        if (tmp10 === constants.INTERESTED) {
          const intl2 = tmp(tmp2[10]).intl;
          let stringResult = intl2.string(tmp(tmp2[10]).t.WtORed);
        } else {
          const intl = tmp(tmp2[10]).intl;
          stringResult = intl.string(tmp(tmp2[10]).t["8MPCVr"]);
        }
        cResult[0] = tmp10;
        cResult[1] = stringResult;
      } else {
        if (cResult[2] === event.id) {
          if (cResult[3] === tmp10) {
            if (cResult[4] === guildId) {
              if (cResult[5] === onRsvp) {
                if (cResult[6] === recurrenceId) {
                  if (cResult[7] === defaultValue) {
                    let tmp14 = cResult[8];
                  }
                  if (cResult[9] !== tmp11) {
                    const obj3 = { title: tmp11 };
                    const tmp17 = closure_7(tmp(tmp2[13]).BottomSheetTitleHeader, obj3);
                    cResult[9] = tmp11;
                    cResult[10] = tmp17;
                    let tmp15 = tmp17;
                  } else {
                    tmp15 = cResult[10];
                  }
                  const _Symbol = Symbol;
                  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                    const responseOptions = tmp(tmp2[9]).getResponseOptions();
                    const mapped = responseOptions.map((value) =>
                      closure_1_7(
                        event(guildId[14]).TableRadioRow,
                        { value: value.value, label: value.name },
                        value.value,
                      ),
                    );
                    cResult[11] = mapped;
                    let tmp19 = mapped;
                    let tmpResult = tmp(tmp2[9]);
                  } else {
                    tmp19 = cResult[11];
                  }
                  if (cResult[12] !== defaultValue) {
                    const obj4 = { defaultValue, onChange: tmp5[1], hasIcons: false, children: tmp19 };
                    const tmp23 = closure_7(tmp(tmp2[15]).TableRadioGroup, obj4);
                    cResult[12] = defaultValue;
                    cResult[13] = tmp23;
                    let tmp21 = tmp23;
                  } else {
                    tmp21 = cResult[13];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(tmp2[10]).intl;
                    const stringResult1 = intl3.string(tmp(tmp2[10]).t.TyCVIq);
                    cResult[14] = stringResult1;
                    let tmp24 = stringResult1;
                  } else {
                    tmp24 = cResult[14];
                  }
                  if (cResult[15] !== tmp14) {
                    const obj5 = { onPress: tmp14, text: tmp24 };
                    const tmp28 = closure_7(tmp(tmp2[16]).Button, obj5);
                    cResult[15] = tmp14;
                    cResult[16] = tmp28;
                    let tmp26 = tmp28;
                  } else {
                    tmp26 = cResult[16];
                  }
                  if (cResult[17] === tmp4.buttonWrapper) {
                    if (cResult[18] === tmp26) {
                      let tmp29 = cResult[19];
                    }
                    if (cResult[20] === tmp4.container) {
                      if (cResult[21] === tmp29) {
                        if (cResult[22] === tmp21) {
                          let tmp33 = cResult[23];
                        }
                        if (cResult[24] === tmp33) {
                          if (cResult[25] === tmp15) {
                            let tmp36 = cResult[26];
                          }
                          return tmp36;
                        }
                        const obj6 = { header: tmp15, children: tmp33 };
                        const tmp38 = closure_7(tmp(tmp2[18]).BottomSheet, obj6);
                        cResult[24] = tmp33;
                        cResult[25] = tmp15;
                        cResult[26] = tmp38;
                        tmp36 = tmp38;
                      }
                    }
                    const obj7 = { bottom: true, style: tmp4.container, children: null };
                    const items = [tmp21, tmp29];
                    obj7.children = items;
                    const tmp35 = closure_8(tmp(tmp2[17]).SafeAreaPaddingView, obj7);
                    cResult[20] = tmp4.container;
                    cResult[21] = tmp29;
                    cResult[22] = tmp21;
                    cResult[23] = tmp35;
                    tmp33 = tmp35;
                  }
                  const obj8 = { style: tmp4.buttonWrapper, children: tmp26 };
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
        function handleConfirm() {
          let tmp3 = null;
          if (first !== GuildEventRsvpUtils.ResponseOptions.SERIES) {
            tmp3 = recurrenceId;
          }
          guild_scheduled_events_GuildScheduledEventModalActionCreators.updateRsvp(event.id, tmp3, guildId, closure_5);
          if (onRsvp != null) {
            onRsvp();
          }
          const tmpResult = guild_scheduled_events_GuildScheduledEventModalActionCreators;
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
        cResult[2] = event.id;
        cResult[3] = tmp10;
        cResult[4] = guildId;
        cResult[5] = onRsvp;
        cResult[6] = recurrenceId;
        cResult[7] = defaultValue;
        cResult[8] = handleConfirm;
        tmp14 = handleConfirm;
      }
      let obj2 = event(guildId[9]);
    }
  : function GuildEventRsvpPickerActionSheet(event) {
      event = event.event;
      ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: _slicedToArray } = event);
      let defaultValue;
      closure_5 = undefined;
      const tmp = closure_9();
      const tmp4 = _slicedToArray(defaultValue.useState(event(8524).ResponseOptions.SERIES), 2);
      defaultValue = tmp4[0];
      const existingRsvp = event(8524).getExistingRsvp(event.id, null);
      let response;
      if (existingRsvp != null) {
        response = existingRsvp.response;
      }
      const tmp9 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
      closure_5 = tmp9;
      if (tmp9 === constants.INTERESTED) {
        const intl2 = tmp2(1126).intl;
        let stringResult = intl2.string(tmp2(1126).t.WtORed);
      } else {
        const intl = tmp2(1126).intl;
        stringResult = intl.string(tmp2(1126).t["8MPCVr"]);
      }
      let obj2 = { header: closure_7(event(6838).BottomSheetTitleHeader, { title: stringResult }), children: null };
      const obj3 = { bottom: true, style: tmp.container, children: null };
      const obj4 = { defaultValue, onChange: tmp4[1], hasIcons: false, children: null };
      const obj = event(8524);
      const responseOptions = event(8524).getResponseOptions();
      obj4.children = responseOptions.map((value) =>
        closure_1_7(event(dependencyMap[14]).TableRadioRow, { value: value.value, label: value.name }, value.value),
      );
      const items = [closure_7(event(6262).TableRadioGroup, obj4)];
      const obj5 = { style: tmp.buttonWrapper, children: null };
      const obj6 = {
        onPress: function handleConfirm() {
          let tmp3 = null;
          if (first !== GuildEventRsvpUtils.ResponseOptions.SERIES) {
            tmp3 = closure_1_1;
          }
          guild_scheduled_events_GuildScheduledEventModalActionCreators.updateRsvp(
            event.id,
            tmp3,
            dependencyMap,
            closure_5,
          );
          if (_slicedToArray != null) {
            _slicedToArray();
          }
          const tmpResult = guild_scheduled_events_GuildScheduledEventModalActionCreators;
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
        text: null,
      };
      const intl3 = tmp2(1126).intl;
      obj6.text = intl3.string(event(1126).t.TyCVIq);
      obj5.children = closure_7(event(5379).Button, obj6);
      items[1] = closure_7(closure_5, obj5);
      obj3.children = items;
      obj2.children = closure_8(event(6813).SafeAreaPaddingView, obj3);
      return closure_7(event(6839).BottomSheet, obj2);
    };
