// discord_app/modules/conjure/model_settings/native/ConjureEffortPicker.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
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
      const cResult = settings(onChange[5]).c(39);
      settings = settings.settings;
      ({ tiers, choices, disabled } = settings);
      onChange = settings.onChange;
      const hideTitle = settings.hideTitle;
      let obj = settings(onChange[5]);
      [tmp5, _slicedToArray] = noop.useState(false);
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
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[6]).intl;
        const stringResult1 = intl2.string(disabled(tmp2[7])["59TDiR"]);
        cResult[2] = stringResult1;
        let tmp10 = stringResult1;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(tmp2[6]).intl;
        const stringResult2 = intl3.string(disabled(tmp2[7]).fpdVCO);
        cResult[3] = stringResult2;
        let tmp13 = stringResult2;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== onChange) {
        function change(conjurePickTierModelResult) {
          onChange(ConjureEffortTiers.conjureNormalizeFast(conjurePickTierModelResult));
        }
        cResult[4] = onChange;
        cResult[5] = change;
        let tmp16 = change;
      } else {
        tmp16 = cResult[5];
      }
      noop = tmp16;
      if (cResult[6] === settings) {
        if (cResult[7] === tiers) {
          let tmp17 = cResult[8];
        }
        if (cResult[9] === tmp16) {
          if (cResult[10] === settings) {
            let tmp20 = cResult[11];
          }
          class O {
            constructor(arg0) {
              if (settings !== settings.tier) {
                tmp2 = closure_4;
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[8]);
                tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
              }
              return;
            }
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
            class O {
              constructor(arg0) {
                if (settings !== settings.tier) {
                  tmp2 = closure_4;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[8]);
                  tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                }
                return;
              }
            }
            cResult[12] = disabled;
            cResult[13] = mapped;
            let tmp22 = mapped;
          } else {
            tmp22 = cResult[13];
          }
          if (cResult[14] === settings.tier) {
            if (cResult[15] === tmp21) {
              if (cResult[16] === tmp22) {
                if (cResult[17] === tmp20) {
                  let tmp24 = cResult[18];
                }
                if (cResult[19] !== choices) {
                  const intl4 = tmp(tmp2[6]).intl;
                  class O {
                    constructor(arg0) {
                      if (settings !== settings.tier) {
                        tmp2 = closure_4;
                        tmp3 = closure_0;
                        tmp4 = closure_2;
                        obj = closure_0(closure_2[8]);
                        tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                      }
                      return;
                    }
                  }
                  const stringResult3 = intl4.string(obj4.conjureCustomizeMessage(choices));
                  cResult[19] = choices;
                  cResult[20] = stringResult3;
                  let tmp27 = stringResult3;
                } else {
                  tmp27 = cResult[20];
                }
                class O {
                  constructor(arg0) {
                    if (settings !== settings.tier) {
                      tmp2 = closure_4;
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj = closure_0(closure_2[8]);
                      tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                    }
                    return;
                  }
                }
                if (cResult[21] !== tmp5) {
                  let obj2 = { expanded: tmp5 };
                  class O {
                    constructor(arg0) {
                      if (settings !== settings.tier) {
                        tmp2 = closure_4;
                        tmp3 = closure_0;
                        tmp4 = closure_2;
                        obj = closure_0(closure_2[8]);
                        tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                      }
                      return;
                    }
                  }
                  cResult[21] = tmp5;
                  cResult[22] = obj2;
                  let tmp30 = obj2;
                } else {
                  tmp30 = cResult[22];
                }
                if (cResult[23] === tmp27) {
                  if (cResult[24] === tmp29) {
                    if (cResult[25] === tmp30) {
                      let tmp31 = cResult[26];
                    }
                    if (cResult[27] === tmp17) {
                      if (cResult[28] === tmp16) {
                        if (cResult[29] === choices) {
                          if (cResult[30] === tmp5) {
                            if (cResult[31] === disabled) {
                              if (cResult[32] === settings) {
                                if (cResult[33] === tiers) {
                                  let tmp34 = cResult[34];
                                }
                                if (cResult[35] === tmp24) {
                                  if (cResult[36] === tmp31) {
                                    if (cResult[37] === tmp34) {
                                      let tmp45 = cResult[38];
                                    }
                                    return tmp45;
                                  }
                                }
                                class O {
                                  constructor(arg0) {
                                    if (settings !== settings.tier) {
                                      tmp2 = closure_4;
                                      tmp3 = closure_0;
                                      tmp4 = closure_2;
                                      obj = closure_0(closure_2[8]);
                                      tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                                    }
                                    return;
                                  }
                                }
                                const obj3 = {
                                  direction: "vertical",
                                  spacing: disabled(tmp2[17]).space.PX_16,
                                  children: null,
                                };
                                const items = [tmp24, tmp31, tmp34];
                                obj3.children = items;
                                const tmp47 = closure_8(tmp(tmp2[16]).Stack, obj3);
                                cResult[35] = tmp24;
                                cResult[36] = tmp31;
                                cResult[37] = tmp34;
                                cResult[38] = tmp47;
                                tmp45 = tmp47;
                              }
                            }
                          }
                        }
                      }
                    }
                    class O {
                      constructor(arg0) {
                        if (settings !== settings.tier) {
                          tmp2 = closure_4;
                          tmp3 = closure_0;
                          tmp4 = closure_2;
                          obj = closure_0(closure_2[8]);
                          tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                        }
                        return;
                      }
                    }
                    let tmp36Result = null;
                    if (tmp5) {
                      class O {
                        constructor(arg0) {
                          if (settings !== settings.tier) {
                            tmp2 = closure_4;
                            tmp3 = closure_0;
                            tmp4 = closure_2;
                            obj = closure_0(closure_2[8]);
                            tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                          }
                          return;
                        }
                      }
                      let tmp38 = null;
                      if (obj8.conjureCanPickModel(choices)) {
                        tmp38 = null;
                        if (null != tmp17) {
                          const obj5 = {
                            hasIcons: false,
                            value: null,
                            onChange: null,
                            title: null,
                            accessibilityLabel: null,
                            children: null,
                          };
                          class O {
                            constructor(arg0) {
                              if (settings !== settings.tier) {
                                tmp2 = closure_4;
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj = closure_0(closure_2[8]);
                                tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                              }
                              return;
                            }
                          }
                          obj5.onChange = function onChange(arg0) {
                            return closure_4(ConjureEffortTiers.conjurePickTierModel(settings, settings.tier, arg0));
                          };
                          obj5.title = tmp10;
                          obj5.accessibilityLabel = tmp10;
                          const main = choices.main;
                          obj5.children = main.map((label) =>
                            timestampProducer(
                              TableRadioRow.TableRadioRow,
                              { label: label.label, subLabel: label.provider_label, value: label.id, disabled },
                              label.id,
                            ),
                          );
                          tmp38 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj5);
                        }
                      }
                      const items1 = [tmp38, ,];
                      let str = settings.thinking;
                      if (str == null) {
                        if (tiers != null) {
                          class O {
                            constructor(arg0) {
                              if (settings !== settings.tier) {
                                tmp2 = closure_4;
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj = closure_0(closure_2[8]);
                                tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                              }
                              return;
                            }
                          }
                        }
                        class O {
                          constructor(arg0) {
                            if (settings !== settings.tier) {
                              tmp2 = closure_4;
                              tmp3 = closure_0;
                              tmp4 = closure_2;
                              obj = closure_0(closure_2[8]);
                              tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                            }
                            return;
                          }
                        }
                      }
                      if (str == null) {
                        str = "";
                      }
                      const obj6 = {
                        hasIcons: false,
                        value: str,
                        onChange(thinking) {
                          const obj = {};
                          const merged = Object.assign(settings);
                          obj.thinking = thinking;
                          return closure_4(obj);
                        },
                        title: tmp13,
                        accessibilityLabel: tmp13,
                        children: null,
                      };
                      const thinking = choices.thinking;
                      obj6.children = thinking.map((value) => {
                        let tmp2 = ConjureModelLabels.THINKING_LABELS[value];
                        if (tmp2 == null) {
                          tmp2 = value;
                        }
                        return timestampProducer(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
                      });
                      items1[1] = closure_6(tmp(tmp2[11]).TableRadioGroup, obj6);
                      let tmp40Result = null;
                      if (tmpResult.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
                        const obj7 = { hasIcons: false, children: null };
                        class O {
                          constructor(arg0) {
                            if (settings !== settings.tier) {
                              tmp2 = closure_4;
                              tmp3 = closure_0;
                              tmp4 = closure_2;
                              obj = closure_0(closure_2[8]);
                              tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
                            }
                            return;
                          }
                        }
                        const intl5 = tmp(tmp2[6]).intl;
                        tmp43[0] = intl5.string(disabled(tmp2[7])["5AblQX"]);
                        const intl6 = tmp(tmp2[6]).intl;
                        tmp43[1] = intl6.string(disabled(tmp2[7]).QnUV8M);
                        tmp43[2] = true === settings.fast;
                        tmp43[3] = disabled;
                        tmp43[4] = function onValueChange(fast) {
                          const obj = {};
                          const merged = Object.assign(settings);
                          obj.fast = fast;
                          return closure_4(obj);
                        };
                        obj7.children = closure_6(tmp(tmp2[15]).TableSwitchRow, tmp43);
                        tmp40Result = closure_6(tmp(tmp2[12]).TableRowGroup, obj7);
                      }
                      const obj9 = { children: null };
                      items1[2] = tmp40Result;
                      obj9.children = items1;
                      tmp36Result = closure_8(closure_7, obj9);
                      tmpResult = tmp(tmp2[8]);
                    }
                    cResult[27] = tmp17;
                    cResult[28] = tmp16;
                    cResult[29] = choices;
                    cResult[30] = tmp5;
                    cResult[31] = disabled;
                    cResult[32] = settings;
                    cResult[33] = tiers;
                    cResult[34] = tmp36Result;
                    tmp34 = tmp36Result;
                  }
                }
                const obj10 = { hasIcons: false, children: null };
                const obj11 = { label: tmp27, arrow: tmp29, accessibilityState: tmp30, onPress: first };
                obj10.children = closure_6(tmp(tmp2[13]).TableRow, obj11);
                const tmp33 = closure_6(tmp(tmp2[12]).TableRowGroup, obj10);
                cResult[23] = tmp27;
                cResult[24] = tmp29;
                cResult[25] = tmp30;
                cResult[26] = tmp33;
                tmp31 = tmp33;
              }
            }
          }
          const obj12 = {
            hasIcons: false,
            value: tmp19,
            onChange: tmp20,
            title: undefined,
            accessibilityLabel: tmp7,
            children: tmp22,
          };
          const tmp26 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj12);
          cResult[14] = settings.tier;
          cResult[15] = undefined;
          cResult[16] = tmp22;
          cResult[17] = tmp20;
          cResult[18] = tmp26;
          tmp24 = tmp26;
        }
        class O {
          constructor(arg0) {
            if (settings !== settings.tier) {
              tmp2 = closure_4;
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[8]);
              tmp5 = closure_4(obj.conjureWithTier(tmp, settings));
            }
            return;
          }
        }
        cResult[9] = tmp16;
        cResult[10] = settings;
        cResult[11] = O;
        tmp20 = O;
      }
      const tmp4 = _slicedToArray(noop.useState(false), 2);
      const conjureTierModelResult = settings(onChange[8]).conjureTierModel(settings, tiers, settings.tier);
      cResult[6] = settings;
      cResult[7] = tiers;
      cResult[8] = conjureTierModelResult;
      tmp17 = conjureTierModelResult;
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
      const intl = settings(1128).intl;
      const stringResult = intl.string(disabled(3830).aBPQxX);
      const intl2 = settings(1128).intl;
      const stringResult1 = intl2.string(disabled(3830)["59TDiR"]);
      const intl3 = settings(1128).intl;
      const stringResult2 = intl3.string(disabled(3830).fpdVCO);
      const tmp = _slicedToArray(noop.useState(false), 2);
      const conjureTierModelResult = settings(12201).conjureTierModel(settings, tiers, settings.tier);
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
      const CONJURE_MODEL_TIERS = tmp4(12203).CONJURE_MODEL_TIERS;
      obj3.children = CONJURE_MODEL_TIERS.map((value) => {
        const obj = { label: ConjureEffortTiers.conjureTierLabel(value), subLabel: null, value: null, disabled: null };
        obj.subLabel = ConjureEffortTiers.conjureTierDescription(value);
        obj.value = value;
        obj.disabled = disabled;
        return timestampProducer(TableRadioRow.TableRadioRow, obj, value);
      });
      const items = [closure_6(settings(6985).TableRadioGroup, obj3), ,];
      const obj4 = { hasIcons: false, children: null };
      const obj5 = { label: null, arrow: null, accessibilityState: null, onPress: null };
      const intl4 = tmp4(1128).intl;
      let obj = settings(12201);
      obj5.label = intl4.string(settings(12201).conjureCustomizeMessage(choices));
      obj5.arrow = !tmp2;
      obj5.accessibilityState = { expanded: tmp2 };
      obj5.onPress = callback;
      obj4.children = closure_6(settings(6903).TableRow, obj5);
      items[1] = closure_6(settings(6987).TableRowGroup, obj4);
      let tmp11Result = null;
      if (tmp2) {
        let tmp12Result = null;
        if (tmp4Result3.conjureCanPickModel(choices)) {
          tmp12Result = null;
          if (null != conjureTierModelResult) {
            const obj6 = {
              hasIcons: false,
              value: conjureTierModelResult,
              onChange(arg0) {
                const conjurePickTierModelResult = ConjureEffortTiers.conjurePickTierModel(
                  settings,
                  settings.tier,
                  arg0,
                );
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
                { label: label.label, subLabel: label.provider_label, value: label.id, disabled },
                label.id,
              ),
            );
            tmp12Result = closure_6(tmp4(6985).TableRadioGroup, obj6);
          }
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
        items1[1] = closure_6(tmp4(6985).TableRadioGroup, obj7);
        tmp4Result3 = tmp4(12201);
        let tmp12Result2 = null;
        if (tmp4Result4.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
          const obj8 = { hasIcons: false, children: null };
          const obj9 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
          const intl5 = tmp4(1128).intl;
          obj9.label = intl5.string(disabled(3830)["5AblQX"]);
          const intl6 = tmp4(1128).intl;
          obj9.subLabel = intl6.string(disabled(3830).QnUV8M);
          obj9.value = true === settings.fast;
          obj9.disabled = disabled;
          obj9.onValueChange = function onValueChange(fast) {
            const obj = {};
            const merged = Object.assign(settings);
            obj.fast = fast;
            dependencyMap(ConjureEffortTiers.conjureNormalizeFast(obj));
          };
          obj8.children = closure_6(tmp4(7295).TableSwitchRow, obj9);
          tmp12Result2 = closure_6(tmp4(6987).TableRowGroup, obj8);
        }
        const obj10 = { children: null };
        items1[2] = tmp12Result2;
        obj10.children = items1;
        tmp11Result = closure_8(closure_7, obj10);
        tmp4Result4 = tmp4(12201);
      }
      items[2] = tmp11Result;
      obj2.children = items;
      return closure_8(settings(5977).Stack, obj2);
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
        const fn = function c(arg0) {
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
        obj2.title = intl.string(_modDef3830.aBPQxX);
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
      obj2.title = intl.string(_modDef3830.aBPQxX);
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
