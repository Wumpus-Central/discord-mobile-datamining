// discord_app/modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildScheduledEventModalActionCreators from "../../GuildScheduledEventModalActionCreators.tsx";
import GuildEventRsvpUtils from "../../../utils/GuildEventRsvpUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const constants = fn(2057).GuildScheduledEventUserResponses;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
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
  ? (event) => {
      const cResult = event(guildId[8]).c(27);
      event = event.event;
      const recurrenceId = event.recurrenceId;
      guildId = event.guildId;
      const onRsvp = event.onRsvp;
      const tmp4 = closure_9();
      const tmp5 = onRsvp(first.useState(event(guildId[9]).ResponseOptions.SERIES), 2);
      first = tmp5[0];
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
                  if (cResult[7] === first) {
                    let tmp14 = cResult[8];
                  }
                  if (cResult[9] !== tmp11) {
                    class O {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_0;
                        tmp3 = null;
                        if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
                          tmp3 = recurrenceId;
                        }
                        tmpResult = tmp(tmp2[11]);
                        updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
                        if (onRsvp != null) {
                          tmp5 = onRsvp();
                        }
                        obj2 = closure_1(tmp2[12]);
                        hideActionSheetResult = obj2.hideActionSheet();
                        return;
                      }
                    }
                    const tmp17 = closure_7(tmp(tmp2[13]).BottomSheetTitleHeader, { title: null });
                    cResult[9] = tmp11;
                    cResult[10] = tmp17;
                    let tmp15 = tmp17;
                    const obj3 = { title: null };
                  } else {
                    tmp15 = cResult[10];
                  }
                  class O {
                    constructor() {
                      tmp2 = closure_2;
                      tmp = closure_0;
                      tmp3 = null;
                      if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
                        tmp3 = recurrenceId;
                      }
                      tmpResult = tmp(tmp2[11]);
                      updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
                      if (onRsvp != null) {
                        tmp5 = onRsvp();
                      }
                      obj2 = closure_1(tmp2[12]);
                      hideActionSheetResult = obj2.hideActionSheet();
                      return;
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                    const responseOptions = tmp(tmp2[9]).getResponseOptions();
                    class O {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_0;
                        tmp3 = null;
                        if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
                          tmp3 = recurrenceId;
                        }
                        tmpResult = tmp(tmp2[11]);
                        updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
                        if (onRsvp != null) {
                          tmp5 = onRsvp();
                        }
                        obj2 = closure_1(tmp2[12]);
                        hideActionSheetResult = obj2.hideActionSheet();
                        return;
                      }
                    }
                    cResult[11] = tmp20;
                    let tmp18 = tmp20;
                    let tmpResult = tmp(tmp2[9]);
                  } else {
                    tmp18 = cResult[11];
                  }
                  if (cResult[12] !== first) {
                    const obj4 = { defaultValue: null, onChange: null, hasIcons: false, children: null };
                    class O {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_0;
                        tmp3 = null;
                        if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
                          tmp3 = recurrenceId;
                        }
                        tmpResult = tmp(tmp2[11]);
                        updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
                        if (onRsvp != null) {
                          tmp5 = onRsvp();
                        }
                        obj2 = closure_1(tmp2[12]);
                        hideActionSheetResult = obj2.hideActionSheet();
                        return;
                      }
                    }
                    obj4.onChange = tmp5[1];
                    obj4.children = tmp18;
                    const tmp23 = closure_7(tmp(tmp2[15]).TableRadioGroup, obj4);
                    cResult[12] = first;
                    cResult[13] = tmp23;
                    let tmp21 = tmp23;
                  } else {
                    tmp21 = cResult[13];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const string = tmp(tmp2[10]).intl.string;
                    class O {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_0;
                        tmp3 = null;
                        if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
                          tmp3 = recurrenceId;
                        }
                        tmpResult = tmp(tmp2[11]);
                        updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
                        if (onRsvp != null) {
                          tmp5 = onRsvp();
                        }
                        obj2 = closure_1(tmp2[12]);
                        hideActionSheetResult = obj2.hideActionSheet();
                        return;
                      }
                    }
                    cResult[14] = tmp25;
                    let tmp24 = tmp25;
                  } else {
                    tmp24 = cResult[14];
                  }
                  if (cResult[15] !== tmp14) {
                    const obj5 = { onPress: null, text: null };
                    class O {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_0;
                        tmp3 = null;
                        if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
                          tmp3 = recurrenceId;
                        }
                        tmpResult = tmp(tmp2[11]);
                        updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
                        if (onRsvp != null) {
                          tmp5 = onRsvp();
                        }
                        obj2 = closure_1(tmp2[12]);
                        hideActionSheetResult = obj2.hideActionSheet();
                        return;
                      }
                    }
                    obj5.text = tmp24;
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
                            let tmp35 = cResult[26];
                          }
                          return tmp35;
                        }
                        class O {
                          constructor() {
                            tmp2 = closure_2;
                            tmp = closure_0;
                            tmp3 = null;
                            if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
                              tmp3 = recurrenceId;
                            }
                            tmpResult = tmp(tmp2[11]);
                            updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
                            if (onRsvp != null) {
                              tmp5 = onRsvp();
                            }
                            obj2 = closure_1(tmp2[12]);
                            hideActionSheetResult = obj2.hideActionSheet();
                            return;
                          }
                        }
                        const obj6 = { header: tmp15, children: tmp33 };
                        const tmp36 = closure_7(tmp(tmp2[18]).BottomSheet, obj6);
                        cResult[24] = tmp33;
                        cResult[25] = tmp15;
                        cResult[26] = tmp36;
                        tmp35 = tmp36;
                      }
                    }
                    class O {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_0;
                        tmp3 = null;
                        if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
                          tmp3 = recurrenceId;
                        }
                        tmpResult = tmp(tmp2[11]);
                        updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
                        if (onRsvp != null) {
                          tmp5 = onRsvp();
                        }
                        obj2 = closure_1(tmp2[12]);
                        hideActionSheetResult = obj2.hideActionSheet();
                        return;
                      }
                    }
                    const obj7 = { bottom: true, style: tmp4.container, children: null };
                    const items = [tmp21, tmp29];
                    obj7.children = items;
                    const tmp34 = closure_8(tmp(tmp2[17]).SafeAreaPaddingView, obj7);
                    cResult[20] = tmp4.container;
                    cResult[21] = tmp29;
                    cResult[22] = tmp21;
                    cResult[23] = tmp34;
                    tmp33 = tmp34;
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
        class O {
          constructor() {
            tmp2 = closure_2;
            tmp = closure_0;
            tmp3 = null;
            if (closure_4 !== closure_0(closure_2[9]).ResponseOptions.SERIES) {
              tmp3 = recurrenceId;
            }
            tmpResult = tmp(tmp2[11]);
            updateRsvpResult = tmpResult.updateRsvp(event.id, tmp3, guildId, INTERESTED);
            if (onRsvp != null) {
              tmp5 = onRsvp();
            }
            obj2 = closure_1(tmp2[12]);
            hideActionSheetResult = obj2.hideActionSheet();
            return;
          }
        }
        cResult[2] = event.id;
        cResult[3] = tmp10;
        cResult[4] = guildId;
        cResult[5] = onRsvp;
        cResult[6] = recurrenceId;
        cResult[7] = first;
        cResult[8] = O;
        tmp14 = O;
      }
      let obj2 = event(guildId[9]);
    }
  : (event) => {
      event = event.event;
      ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: _slicedToArray } = event);
      let defaultValue;
      closure_5 = undefined;
      const tmp = closure_9();
      const tmp4 = _slicedToArray(defaultValue.useState(event(9181).ResponseOptions.SERIES), 2);
      defaultValue = tmp4[0];
      const existingRsvp = event(9181).getExistingRsvp(event.id, null);
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
      let obj2 = { header: closure_7(event(6644).BottomSheetTitleHeader, { title: stringResult }), children: null };
      const obj3 = { bottom: true, style: tmp.container, children: null };
      const obj4 = { defaultValue, onChange: tmp4[1], hasIcons: false, children: null };
      const obj = event(9181);
      const responseOptions = event(9181).getResponseOptions();
      obj4.children = responseOptions.map((value) =>
        closure_1_7(event(dependencyMap[14]).TableRadioRow, { value: value.value, label: value.name }, value.value),
      );
      const items = [closure_7(event(6072).TableRadioGroup, obj4)];
      const obj5 = { style: tmp.buttonWrapper, children: null };
      const obj6 = {
        onPress() {
          let tmp3 = null;
          if (first !== GuildEventRsvpUtils.ResponseOptions.SERIES) {
            tmp3 = closure_1_1;
          }
          GuildScheduledEventModalActionCreators.updateRsvp(event.id, tmp3, dependencyMap, closure_5);
          if (_slicedToArray != null) {
            _slicedToArray();
          }
          const tmpResult = GuildScheduledEventModalActionCreators;
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
        text: null,
      };
      const intl3 = tmp2(1126).intl;
      obj6.text = intl3.string(event(1126).t.TyCVIq);
      obj5.children = closure_7(event(5594).Button, obj6);
      items[1] = closure_7(closure_5, obj5);
      obj3.children = items;
      obj2.children = closure_8(event(6619).SafeAreaPaddingView, obj3);
      return closure_7(event(6645).BottomSheet, obj2);
    };
