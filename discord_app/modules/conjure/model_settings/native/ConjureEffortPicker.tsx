// discord_app/modules/conjure/model_settings/native/ConjureEffortPicker.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ConjureEffortTiers from "../ConjureEffortTiers.tsx";
import ConjureModelLabels from "../ConjureModelLabels.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureEffortPicker(settings) {
      const cResult = settings(onChange[5]).c(37);
      settings = settings.settings;
      ({ tiers, choices, disabled } = settings);
      onChange = settings.onChange;
      const hideTitle = settings.hideTitle;
      let obj = settings(onChange[5]);
      const tmp4 = undefined !== hideTitle && hideTitle;
      [tmp6, _slicedToArray] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          return _slicedToArray((arg0) => !arg0);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[6]).intl;
        const stringResult = intl.string(disabled(tmp2[7]).aBPQxX);
        cResult[1] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[6]).intl;
        const stringResult1 = intl2.string(disabled(tmp2[7])["59TDiR"]);
        cResult[2] = stringResult1;
        let tmp11 = stringResult1;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(tmp2[6]).intl;
        const stringResult2 = intl3.string(disabled(tmp2[7]).fpdVCO);
        cResult[3] = stringResult2;
        let tmp14 = stringResult2;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] !== onChange) {
        function change(conjurePickTierModelResult) {
          onChange(ConjureEffortTiers.conjureNormalizeFast(conjurePickTierModelResult));
        }
        cResult[4] = onChange;
        cResult[5] = change;
        let tmp17 = change;
      } else {
        tmp17 = cResult[5];
      }
      noop = tmp17;
      if (cResult[6] === settings) {
        if (cResult[7] === tiers) {
          let tmp18 = cResult[8];
        }
        if (cResult[9] === tmp17) {
          if (cResult[10] === settings) {
            let tmp21 = cResult[11];
          }
          let tmp22;
          if (!tmp4) {
            tmp22 = tmp8;
          }
          if (cResult[12] !== disabled) {
            const CONJURE_MODEL_TIERS = tmp(tmp2[9]).CONJURE_MODEL_TIERS;
            const mapped = CONJURE_MODEL_TIERS.map((value) => {
              const obj = {
                label: ConjureEffortTiers.conjureTierLabel(value),
                subLabel: null,
                value: null,
                disabled: null,
              };
              obj.subLabel = ConjureEffortTiers.conjureTierDescription(value);
              obj.value = value;
              obj.disabled = disabled;
              return timestampProducer(TableRadioRow.TableRadioRow, obj, value);
            });
            cResult[12] = disabled;
            cResult[13] = mapped;
            let tmp23 = mapped;
          } else {
            tmp23 = cResult[13];
          }
          if (cResult[14] === settings.tier) {
            if (cResult[15] === tmp22) {
              if (cResult[16] === tmp23) {
                if (cResult[17] === tmp21) {
                  let tmp25 = cResult[18];
                }
                const _Symbol = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = tmp(tmp2[6]).intl;
                  const stringResult3 = intl4.string(disabled(tmp2[7]).eGqPbV);
                  cResult[19] = stringResult3;
                  let tmp28 = stringResult3;
                } else {
                  tmp28 = cResult[19];
                }
                if (cResult[20] !== tmp6) {
                  let obj2 = { expanded: tmp6 };
                  cResult[20] = tmp6;
                  cResult[21] = obj2;
                  let tmp32 = obj2;
                } else {
                  tmp32 = cResult[21];
                }
                if (cResult[22] === !tmp6) {
                  if (cResult[23] === tmp32) {
                    let tmp33 = cResult[24];
                  }
                  if (cResult[25] === tmp18) {
                    if (cResult[26] === tmp17) {
                      if (cResult[27] === choices) {
                        if (cResult[28] === tmp6) {
                          if (cResult[29] === disabled) {
                            if (cResult[30] === settings) {
                              if (cResult[31] === tiers) {
                                let tmp36 = cResult[32];
                              }
                              if (cResult[33] === tmp25) {
                                if (cResult[34] === tmp33) {
                                  if (cResult[35] === tmp36) {
                                    let tmp48 = cResult[36];
                                  }
                                  return tmp48;
                                }
                              }
                              const obj3 = {
                                direction: "vertical",
                                spacing: disabled(tmp2[17]).space.PX_16,
                                children: null,
                              };
                              const items = [tmp25, tmp33, tmp36];
                              obj3.children = items;
                              const tmp51 = closure_8(tmp(tmp2[16]).Stack, obj3);
                              cResult[33] = tmp25;
                              cResult[34] = tmp33;
                              cResult[35] = tmp36;
                              cResult[36] = tmp51;
                              tmp48 = tmp51;
                            }
                          }
                        }
                      }
                    }
                  }
                  let tmp39Result = null;
                  if (tmp6) {
                    let tmp41 = null;
                    if (null != tmp18) {
                      const obj4 = {
                        hasIcons: false,
                        value: tmp18,
                        onChange(arg0) {
                          return closure_4(ConjureEffortTiers.conjurePickTierModel(settings, settings.tier, arg0));
                        },
                        title: tmp11,
                        accessibilityLabel: tmp11,
                        children: null,
                      };
                      const main = choices.main;
                      obj4.children = main.map((label) =>
                        timestampProducer(
                          TableRadioRow.TableRadioRow,
                          {
                            label: label.label,
                            subLabel: ConjureModelLabels.PROVIDER_LABELS[label.provider],
                            value: label.id,
                            disabled,
                          },
                          label.id,
                        ),
                      );
                      tmp41 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj4);
                    }
                    const items1 = [tmp41, ,];
                    let str = settings.thinking;
                    if (str == null) {
                      let thinking;
                      if (tiers != null) {
                        if (tiers[settings.tier] != null) {
                          thinking = tmp45.thinking;
                        }
                      }
                      str = thinking;
                    }
                    if (str == null) {
                      str = "";
                    }
                    const obj5 = {
                      hasIcons: false,
                      value: str,
                      onChange(thinking) {
                        const obj = {};
                        const merged = Object.assign(settings);
                        obj.thinking = thinking;
                        return closure_4(obj);
                      },
                      title: tmp14,
                      accessibilityLabel: tmp14,
                      children: null,
                    };
                    const thinking1 = choices.thinking;
                    obj5.children = thinking1.map((value) => {
                      let tmp2 = ConjureModelLabels.THINKING_LABELS[value];
                      if (tmp2 == null) {
                        tmp2 = value;
                      }
                      return timestampProducer(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
                    });
                    items1[1] = closure_6(tmp(tmp2[11]).TableRadioGroup, obj5);
                    let tmp43Result = null;
                    if (tmpResult.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
                      const obj6 = { hasIcons: false, children: null };
                      const obj7 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
                      const intl5 = tmp(tmp2[6]).intl;
                      obj7.label = intl5.string(disabled(tmp2[7])["5AblQX"]);
                      const intl6 = tmp(tmp2[6]).intl;
                      obj7.subLabel = intl6.string(disabled(tmp2[7]).QnUV8M);
                      obj7.value = true === settings.fast;
                      obj7.disabled = disabled;
                      obj7.onValueChange = function onValueChange(fast) {
                        const obj = {};
                        const merged = Object.assign(settings);
                        obj.fast = fast;
                        return closure_4(obj);
                      };
                      obj6.children = closure_6(tmp(tmp2[15]).TableSwitchRow, obj7);
                      tmp43Result = closure_6(tmp(tmp2[12]).TableRowGroup, obj6);
                    }
                    const obj8 = { children: null };
                    items1[2] = tmp43Result;
                    obj8.children = items1;
                    tmp39Result = closure_8(closure_7, obj8);
                    tmpResult = tmp(tmp2[8]);
                  }
                  cResult[25] = tmp18;
                  cResult[26] = tmp17;
                  cResult[27] = choices;
                  cResult[28] = tmp6;
                  cResult[29] = disabled;
                  cResult[30] = settings;
                  cResult[31] = tiers;
                  cResult[32] = tmp39Result;
                  tmp36 = tmp39Result;
                }
                const obj9 = { hasIcons: false, children: null };
                const obj10 = { label: tmp28, arrow: !tmp6, accessibilityState: tmp32, onPress: first };
                obj9.children = closure_6(tmp(tmp2[13]).TableRow, obj10);
                const tmp35 = closure_6(tmp(tmp2[12]).TableRowGroup, obj9);
                cResult[22] = !tmp6;
                cResult[23] = tmp32;
                cResult[24] = tmp35;
                tmp33 = tmp35;
              }
            }
          }
          const obj11 = {
            hasIcons: false,
            value: tmp20,
            onChange: tmp21,
            title: tmp22,
            accessibilityLabel: tmp8,
            children: tmp23,
          };
          const tmp27 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj11);
          cResult[14] = settings.tier;
          cResult[15] = tmp22;
          cResult[16] = tmp23;
          cResult[17] = tmp21;
          cResult[18] = tmp27;
          tmp25 = tmp27;
        }
        const fn2 = function x(tier2) {
          if (tier2 !== settings.tier) {
            closure_4(ConjureEffortTiers.conjureWithTier(tmp, tier2));
          }
        };
        cResult[9] = tmp17;
        cResult[10] = settings;
        cResult[11] = fn2;
        tmp21 = fn2;
      }
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      const conjureTierModelResult = settings(onChange[8]).conjureTierModel(settings, tiers, settings.tier);
      cResult[6] = settings;
      cResult[7] = tiers;
      cResult[8] = conjureTierModelResult;
      tmp18 = conjureTierModelResult;
      const tmpResult2 = settings(onChange[8]);
    }
  : function ConjureEffortPicker(settings) {
      settings = settings.settings;
      ({ tiers, choices, disabled } = settings);
      ({ onChange: dependencyMap, hideTitle } = settings);
      if (hideTitle === undefined) {
        hideTitle = false;
      }
      _slicedToArray = undefined;
      [tmp2, c3] = noop.useState(false);
      const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
      const intl = settings(1126).intl;
      const stringResult = intl.string(disabled(3827).aBPQxX);
      const intl2 = settings(1126).intl;
      const stringResult1 = intl2.string(disabled(3827)["59TDiR"]);
      const intl3 = settings(1126).intl;
      const stringResult2 = intl3.string(disabled(3827).fpdVCO);
      const tmp = _slicedToArray(noop.useState(false), 2);
      const conjureTierModelResult = settings(16852).conjureTierModel(settings, tiers, settings.tier);
      let obj2 = { direction: "vertical", spacing: disabled(587).space.PX_16, children: null };
      const obj3 = {
        hasIcons: false,
        value: settings.tier,
        onChange(tier2) {
          if (tier2 !== settings.tier) {
            const conjureWithTierResult = ConjureEffortTiers.conjureWithTier(tmp, tier2);
            dependencyMap(ConjureEffortTiers.conjureNormalizeFast(conjureWithTierResult));
          }
        },
        title: null,
        accessibilityLabel: null,
        children: null,
      };
      let tmp13;
      if (!hideTitle) {
        tmp13 = stringResult;
      }
      obj3.title = tmp13;
      obj3.accessibilityLabel = stringResult;
      const CONJURE_MODEL_TIERS = tmp4(6933).CONJURE_MODEL_TIERS;
      obj3.children = CONJURE_MODEL_TIERS.map((value) => {
        const obj = { label: ConjureEffortTiers.conjureTierLabel(value), subLabel: null, value: null, disabled: null };
        obj.subLabel = ConjureEffortTiers.conjureTierDescription(value);
        obj.value = value;
        obj.disabled = disabled;
        return timestampProducer(TableRadioRow.TableRadioRow, obj, value);
      });
      const items = [closure_6(settings(6265).TableRadioGroup, obj3), ,];
      const obj4 = { hasIcons: false, children: null };
      const obj5 = { label: null, arrow: null, accessibilityState: null, onPress: null };
      const intl4 = tmp4(1126).intl;
      obj5.label = intl4.string(disabled(3827).eGqPbV);
      obj5.arrow = !tmp2;
      obj5.accessibilityState = { expanded: tmp2 };
      obj5.onPress = callback;
      obj4.children = closure_6(settings(6184).TableRow, obj5);
      items[1] = closure_6(settings(6267).TableRowGroup, obj4);
      let tmp11Result = null;
      if (tmp2) {
        let tmp12Result = null;
        if (null != conjureTierModelResult) {
          const obj6 = {
            hasIcons: false,
            value: conjureTierModelResult,
            onChange(arg0) {
              const conjurePickTierModelResult = ConjureEffortTiers.conjurePickTierModel(settings, settings.tier, arg0);
              dependencyMap(ConjureEffortTiers.conjureNormalizeFast(conjurePickTierModelResult));
            },
            title: stringResult1,
            accessibilityLabel: stringResult1,
            children: null,
          };
          const main = choices.main;
          obj6.children = main.map((label) =>
            timestampProducer(
              TableRadioRow.TableRadioRow,
              {
                label: label.label,
                subLabel: ConjureModelLabels.PROVIDER_LABELS[label.provider],
                value: label.id,
                disabled,
              },
              label.id,
            ),
          );
          tmp12Result = closure_6(tmp4(6265).TableRadioGroup, obj6);
        }
        const items1 = [tmp12Result, ,];
        let str = settings.thinking;
        if (str == null) {
          let thinking;
          if (tiers != null) {
            if (tiers[settings.tier] != null) {
              thinking = tmp18.thinking;
            }
          }
          str = thinking;
        }
        if (str == null) {
          str = "";
        }
        const obj7 = {
          hasIcons: false,
          value: str,
          onChange(thinking) {
            const obj = {};
            const merged = Object.assign(settings);
            obj.thinking = thinking;
            dependencyMap(ConjureEffortTiers.conjureNormalizeFast(obj));
          },
          title: stringResult2,
          accessibilityLabel: stringResult2,
          children: null,
        };
        const thinking1 = choices.thinking;
        obj7.children = thinking1.map((value) => {
          let tmp2 = ConjureModelLabels.THINKING_LABELS[value];
          if (tmp2 == null) {
            tmp2 = value;
          }
          return timestampProducer(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
        });
        items1[1] = closure_6(tmp4(6265).TableRadioGroup, obj7);
        let tmp12Result2 = null;
        if (tmp4Result.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
          const obj8 = { hasIcons: false, children: null };
          const obj9 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
          const intl5 = tmp4(1126).intl;
          obj9.label = intl5.string(disabled(3827)["5AblQX"]);
          const intl6 = tmp4(1126).intl;
          obj9.subLabel = intl6.string(disabled(3827).QnUV8M);
          obj9.value = true === settings.fast;
          obj9.disabled = disabled;
          obj9.onValueChange = function onValueChange(fast) {
            const obj = {};
            const merged = Object.assign(settings);
            obj.fast = fast;
            dependencyMap(ConjureEffortTiers.conjureNormalizeFast(obj));
          };
          obj8.children = closure_6(tmp4(6882).TableSwitchRow, obj9);
          tmp12Result2 = closure_6(tmp4(6267).TableRowGroup, obj8);
        }
        const obj10 = { children: null };
        items1[2] = tmp12Result2;
        obj10.children = items1;
        tmp11Result = closure_8(closure_7, obj10);
        tmp4Result = tmp4(16852);
      }
      items[2] = tmp11Result;
      obj2.children = items;
      return closure_8(settings(5373).Stack, obj2);
    };
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureEffortPicker.tsx");

export default tmp3;
export const CONJURE_EFFORT_PICKER_SHEET_KEY = "ConjureEffortPickerSheet";
export const ConjureEffortPickerSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureEffortPickerSheet(initialSettings) {
      const cResult = c.c(8);
      ({ tiers, choices, onChange } = initialSettings);
      [tmp5, importDefault] = noop.useState(initialSettings.initialSettings);
      if (cResult[0] !== onChange) {
        const fn = function s(arg0) {
          importDefault(arg0);
          onChange(arg0);
        };
        cResult[0] = onChange;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null };
        const intl = util.intl;
        obj2.title = intl.string(_modDef3827.aBPQxX);
        const tmp10 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === choices) {
        if (cResult[4] === tmp6) {
          if (cResult[5] === tmp5) {
            if (cResult[6] === tiers) {
              let tmp11 = cResult[7];
            }
            return tmp11;
          }
        }
      }
      const obj3 = { header: tmp7, children: null };
      const tmp4 = _slicedToArray(noop.useState(initialSettings.initialSettings), 2);
      obj3.children = timestampProducer(View, {
        children: timestampProducer(closure_9, {
          settings: tmp5,
          tiers,
          choices,
          disabled: false,
          onChange: tmp6,
          hideTitle: true,
        }),
      });
      const tmp12 = timestampProducer(ActionSheet.ActionSheet, obj3);
      cResult[3] = choices;
      cResult[4] = tmp6;
      cResult[5] = tmp5;
      cResult[6] = tiers;
      cResult[7] = tmp12;
      tmp11 = tmp12;
      const obj4 = {
        children: timestampProducer(closure_9, {
          settings: tmp5,
          tiers,
          choices,
          disabled: false,
          onChange: tmp6,
          hideTitle: true,
        }),
      };
    }
  : function ConjureEffortPickerSheet(onChange) {
      onChange = onChange.onChange;
      ({ tiers, choices } = onChange);
      const tmp = _slicedToArray(noop.useState(onChange.initialSettings), 2);
      closure_1 = tmp[1];
      const items = [onChange];
      const callback = noop.useCallback((arg0) => {
        closure_1(arg0);
        onChange(arg0);
      }, items);
      const obj = { header: null, children: null };
      const obj2 = { title: null };
      const intl = util.intl;
      obj2.title = intl.string(_modDef3827.aBPQxX);
      obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
      obj.children = timestampProducer(View, {
        children: timestampProducer(closure_9, {
          settings: tmp[0],
          tiers,
          choices,
          disabled: false,
          onChange: callback,
          hideTitle: true,
        }),
      });
      return timestampProducer(ActionSheet.ActionSheet, obj);
    };
