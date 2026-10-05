// === Module 17706: TimeoutDurationActionSheet ===

// Module 17706 (TimeoutDurationActionSheet)
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import getActionInfo from "getActionInfo" /* 17685 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const AutomodActionType = fn(11474).AutomodActionType;
let closure_4 = fn(2114).getDisableCommunicationDurationOptions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TimeoutDurationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onRemove) => {
  const cResult = onSelectDuration(576).c(40);
  ({ triggerType, action, onSelectDuration } = onRemove);
  onRemove = onRemove.onRemove;
  if (cResult[0] === action) {
    if (cResult[1] === triggerType) {
      let tmp4 = cResult[2];
    }
    let durationSeconds1;
    if (action != null) {
      durationSeconds1 = action.metadata.durationSeconds;
    }
    if (cResult[3] === durationSeconds1) {
      let headerText;
      if (tmp4 != null) {
        headerText = tmp4.headerText;
      }
      if (cResult[4] === headerText) {
        if (cResult[5] === onRemove) {
          if (cResult[6] === onSelectDuration) {
            let tmp9 = cResult[7];
            let tmp10 = cResult[8];
            let tmp11 = cResult[9];
            let flag = cResult[10];
            let tmp12 = cResult[11];
            let tmp13 = cResult[12];
            let tmp14 = cResult[13];
            let tmp15 = cResult[14];
            let tmp16 = cResult[15];
            let flag2 = cResult[16];
            let tmp17 = cResult[17];
          }
          if (cResult[26] === tmp9) {
            if (cResult[27] === flag) {
              if (cResult[28] === tmp12) {
                if (cResult[29] === tmp13) {
                  if (cResult[30] === tmp14) {
                    if (cResult[31] === tmp15) {
                      if (cResult[32] === tmp16) {
                        let tmp38 = cResult[33];
                      }
                      if (cResult[34] === tmp10) {
                        if (cResult[35] === tmp11) {
                          if (cResult[36] === tmp38) {
                            if (cResult[37] === flag2) {
                              if (cResult[38] === tmp17) {
                                let tmp41 = cResult[39];
                              }
                              return tmp41;
                            }
                          }
                        }
                      }
                      const obj2 = { startExpanded: flag2, header: tmp17, children: null };
                      const items = [tmp11, tmp38];
                      obj2.children = items;
                      const tmp43 = closure_6(tmp10, obj2);
                      class M {
                        constructor(arg0) {
                          obj = closure_1(closure_2[7]);
                          hideActionSheetResult = obj.hideActionSheet();
                          if (onRemove !== c7) {
                            tmp4 = onSelectDuration;
                            tmp5 = globalThis;
                            _Number = Number;
                            tmp6 = onSelectDuration(Number(onRemove));
                          } else {
                            tmp2 = onRemove;
                            tmp3 = onRemove();
                          }
                          return;
                        }
                      }
                      cResult[34] = tmp10;
                      cResult[35] = tmp11;
                      cResult[36] = tmp38;
                      cResult[37] = flag2;
                      cResult[38] = tmp17;
                      cResult[39] = tmp43;
                      tmp41 = tmp43;
                    }
                  }
                }
              }
            }
          }
          const obj3 = { hasIcons: flag, accessibilityLabel: tmp12, defaultValue: tmp13, onChange: tmp14, children: null };
          const items1 = [tmp15, tmp16];
          class M {
            constructor(arg0) {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              if (onRemove !== c7) {
                tmp4 = onSelectDuration;
                tmp5 = globalThis;
                _Number = Number;
                tmp6 = onSelectDuration(Number(onRemove));
              } else {
                tmp2 = onRemove;
                tmp3 = onRemove();
              }
              return;
            }
          }
          const tmp40 = closure_6(tmp9, obj3);
          cResult[26] = tmp9;
          cResult[27] = flag;
          cResult[28] = tmp12;
          cResult[29] = tmp13;
          cResult[30] = tmp14;
          cResult[31] = tmp15;
          cResult[32] = tmp16;
          cResult[33] = tmp40;
          tmp38 = tmp40;
        }
      }
    }
    if (action != null) {
      const durationSeconds = action.metadata.durationSeconds;
    }
    if (cResult[18] === onRemove) {
      if (cResult[19] === onSelectDuration) {
        let tmp19 = cResult[20];
      }
      const ActionSheet = onSelectDuration(6701).ActionSheet;
      let str;
      if (tmp4 != null) {
        str = tmp4.headerText;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[21] !== str) {
        const obj4 = { title: str };
        const tmp22 = closure_5(onSelectDuration(6644).BottomSheetTitleHeader, obj4);
        cResult[21] = str;
        cResult[22] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[22];
      }
      const _Symbol = Symbol;
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-md/normal", children: null };
        const intl = onSelectDuration(1126).intl;
        obj5.children = intl.string(onSelectDuration(1126).t.DWGBAh);
        const tmp26 = closure_5(onSelectDuration(4886).Text, obj5);
        cResult[23] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[23];
      }
      class M {
        constructor(arg0) {
          obj = closure_1(closure_2[7]);
          hideActionSheetResult = obj.hideActionSheet();
          if (onRemove !== c7) {
            tmp4 = onSelectDuration;
            tmp5 = globalThis;
            _Number = Number;
            tmp6 = onSelectDuration(Number(onRemove));
          } else {
            tmp2 = onRemove;
            tmp3 = onRemove();
          }
          return;
        }
      }
      let headerText1;
      if (tmp4 != null) {
        headerText1 = tmp4.headerText;
      }
      if (null != durationSeconds) {
        const _String = String;
        let StringResult = String(durationSeconds);
      } else {
        StringResult = value;
      }
      const _Symbol2 = Symbol;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { value, label: null };
        const intl2 = onSelectDuration(1126).intl;
        obj6.label = intl2.string(onSelectDuration(1126).t.PoWNfe);
        cResult[24] = closure_5(onSelectDuration(6071).TableRadioRow, obj6);
        class M {
          constructor(arg0) {
            obj = closure_1(closure_2[7]);
            hideActionSheetResult = obj.hideActionSheet();
            if (onRemove !== c7) {
              tmp4 = onSelectDuration;
              tmp5 = globalThis;
              _Number = Number;
              tmp6 = onSelectDuration(Number(onRemove));
            } else {
              tmp2 = onRemove;
              tmp3 = onRemove();
            }
            return;
          }
        }
        const tmp33 = closure_5(onSelectDuration(6071).TableRadioRow, obj6);
      }
      const _Symbol3 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            ({ id, value, label } = onRemove);
            obj = { value: String(value), label };
            return closure_1_5(onSelectDuration(closure_1_2[13]).TableRadioRow, obj, id);
          }
        }
        cResult[25] = U;
      } else {
        class U {
          constructor(arg0) {
            ({ id, value, label } = onRemove);
            obj = { value: String(value), label };
            return closure_1_5(onSelectDuration(closure_1_2[13]).TableRadioRow, obj, id);
          }
        }
      }
      const mapped = arr.map(U);
      if (action != null) {
        class U {
          constructor(arg0) {
            ({ id, value, label } = onRemove);
            obj = { value: String(value), label };
            return closure_1_5(onSelectDuration(closure_1_2[13]).TableRadioRow, obj, id);
          }
        }
      }
      cResult[3] = undefined;
      if (tmp4 != null) {
        class U {
          constructor(arg0) {
            ({ id, value, label } = onRemove);
            obj = { value: String(value), label };
            return closure_1_5(onSelectDuration(closure_1_2[13]).TableRadioRow, obj, id);
          }
        }
      }
      cResult[4] = undefined;
      cResult[5] = onRemove;
      cResult[6] = onSelectDuration;
      cResult[7] = tmp27;
      cResult[8] = ActionSheet;
      cResult[9] = tmp24;
      cResult[10] = false;
      cResult[11] = headerText1;
      cResult[12] = StringResult;
      cResult[13] = tmp19;
      cResult[14] = tmp30;
      cResult[15] = mapped;
      cResult[16] = true;
      cResult[17] = tmp20;
      tmp17 = tmp20;
      flag2 = true;
      tmp16 = mapped;
      tmp15 = tmp30;
      tmp14 = tmp19;
      tmp13 = StringResult;
      tmp12 = headerText1;
      flag = false;
      tmp11 = tmp24;
      tmp10 = ActionSheet;
      tmp9 = tmp27;
    }
    class M {
      constructor(arg0) {
        obj = closure_1(closure_2[7]);
        hideActionSheetResult = obj.hideActionSheet();
        if (onRemove !== c7) {
          tmp4 = onSelectDuration;
          tmp5 = globalThis;
          _Number = Number;
          tmp6 = onSelectDuration(Number(onRemove));
        } else {
          tmp2 = onRemove;
          tmp3 = onRemove();
        }
        return;
      }
    }
    cResult[18] = onRemove;
    cResult[19] = onSelectDuration;
    cResult[20] = M;
    tmp19 = M;
    arr = closure_4();
  }
  let obj = onSelectDuration(576);
  const actionInfo = onSelectDuration(17685).getActionInfo(AutomodActionType.USER_COMMUNICATION_DISABLED, action, triggerType);
  cResult[0] = action;
  cResult[1] = triggerType;
  cResult[2] = actionInfo;
  tmp4 = actionInfo;
  const tmpResult = onSelectDuration(17685);
}) : ((triggerType) => {
  ({ action, onSelectDuration: require, onRemove: importDefault } = triggerType);
  const actionInfo = getActionInfo.getActionInfo(AutomodActionType.USER_COMMUNICATION_DISABLED, action, triggerType.triggerType);
  let durationSeconds;
  if (action != null) {
    durationSeconds = action.metadata.durationSeconds;
  }
  let str;
  if (actionInfo != null) {
    str = actionInfo.headerText;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { startExpanded: true, header: closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: str }), children: null };
  const obj3 = { variant: "text-md/normal", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.DWGBAh);
  const items = [closure_5(Text_Text.Text, obj3), ];
  let headerText;
  if (actionInfo != null) {
    headerText = actionInfo.headerText;
  }
  const obj4 = { hasIcons: false, accessibilityLabel: headerText, defaultValue: null, onChange: null, children: null };
  if (null != durationSeconds) {
    const _String = String;
    let StringResult = String(durationSeconds);
  } else {
    StringResult = value;
  }
  obj4.defaultValue = StringResult;
  obj4.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (arg0 !== c7) {
      const _Number = Number;
      require(Number(arg0));
    } else {
      closure_1_1();
    }
  };
  const obj5 = { value, label: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.PoWNfe);
  const items1 = [
    closure_5(TableRadioRow.TableRadioRow, obj5),
    closure_4().map((item) => {
      ({ id, value, label } = item);
      return closure_1_5(TableRadioRow.TableRadioRow, { value: String(value), label }, id);
    })
  ];
  obj4.children = items1;
  items[1] = closure_6(TableRadioGroup.TableRadioGroup, obj4);
  obj2.children = items;
  return closure_6(ActionSheet2.ActionSheet, obj2);
});