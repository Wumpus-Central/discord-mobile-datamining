// discord_app/modules/guild_automod/native/components/KeywordsActionSheet.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AutomodRuleUtils from "../../AutomodRuleUtils.tsx";
import KeywordTextUtils from "../../KeywordTextUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_5 = fn(11403).KEYWORDS_REGEX_PLACEHOLDER;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function KeywordsActionSheet(keywords) {
      const cResult = type(maxWordCount[5]).c(31);
      ({ title, description, type } = keywords);
      keywords = keywords.keywords;
      maxWordCount = keywords.maxWordCount;
      const onSave = keywords.onSave;
      noop = tmp4;
      const tmp5 = type(maxWordCount[6]);
      const tmp6 = "regex" === type ? tmp5.getRegexPatternsFromString : tmp5.getKeywordsFromString;
      closure_5 = tmp6;
      if ((cResult[0] === "regex") === type) {
        if (cResult[1] === keywords) {
          let tmp7 = cResult[2];
        }
        const tmp10 = onSave(noop.useState(tmp7), 2);
        value = tmp10[0];
        closure_7 = tmp10[1];
        [tmp14, closure_8] = onSave(noop.useState(null), 2);
        if (cResult[3] === maxWordCount) {
          if (cResult[4] === type) {
            let tmp15 = cResult[5];
          }
          closure_9 = tmp15;
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp15) {
              let tmp17 = cResult[8];
            }
            if (cResult[9] === value) {
              if (cResult[10] === onSave) {
                if (cResult[11] === tmp6) {
                  let tmp18 = cResult[12];
                }
                if (cResult[13] !== title) {
                  let obj2 = { title };
                  const tmp21 = value(tmp(tmp2[10]).BottomSheetTitleHeader, obj2);
                  cResult[13] = title;
                  cResult[14] = tmp21;
                  let tmp19 = tmp21;
                } else {
                  tmp19 = cResult[14];
                }
                if (cResult[15] !== tmp4) {
                  if (tmp4) {
                    let stringResult = closure_5;
                  } else {
                    const intl = tmp(tmp2[11]).intl;
                    stringResult = intl.string(tmp(tmp2[11]).t.UyaxJy);
                  }
                  cResult[15] = tmp4;
                  cResult[16] = stringResult;
                } else {
                  if (cResult[17] === description) {
                    if (cResult[18] === tmp17) {
                      if (cResult[19] === value) {
                        if (cResult[20] === tmp22) {
                          if (cResult[21] === tmp14) {
                            if (cResult[22] === title) {
                              let tmp25 = cResult[23];
                            }
                            const _Symbol = Symbol;
                            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl2 = tmp(tmp2[11]).intl;
                              const stringResult1 = intl2.string(tmp(tmp2[11]).t["R3BPH+"]);
                              cResult[24] = stringResult1;
                              let tmp29 = stringResult1;
                            } else {
                              tmp29 = cResult[24];
                            }
                            if (cResult[25] !== tmp18) {
                              const obj3 = { grow: true, text: tmp29, onPress: tmp18 };
                              const tmp33 = value(tmp(tmp2[13]).Button, obj3);
                              cResult[25] = tmp18;
                              cResult[26] = tmp33;
                              let tmp31 = tmp33;
                            } else {
                              tmp31 = cResult[26];
                            }
                            if (cResult[27] === tmp31) {
                              if (cResult[28] === tmp19) {
                                if (cResult[29] === tmp25) {
                                  let tmp34 = cResult[30];
                                }
                                return tmp34;
                              }
                            }
                            const obj4 = { keyboardShouldPersistTaps: "handled", header: tmp19, children: null };
                            const items = [tmp25, tmp31];
                            obj4.children = items;
                            const tmp36 = closure_7(tmp(tmp2[14]).ActionSheet, obj4);
                            cResult[27] = tmp31;
                            cResult[28] = tmp19;
                            cResult[29] = tmp25;
                            cResult[30] = tmp36;
                            tmp34 = tmp36;
                          }
                        }
                      }
                    }
                  }
                  const obj5 = {
                    accessibilityLabel: title,
                    description,
                    placeholder: cResult[16],
                    value,
                    onChange: tmp17,
                    errorMessage: tmp14,
                  };
                  const tmp27 = value(tmp(tmp2[12]).TextArea, obj5);
                  cResult[17] = description;
                  cResult[18] = tmp17;
                  cResult[19] = value;
                  cResult[20] = cResult[16];
                  cResult[21] = tmp14;
                  cResult[22] = title;
                  cResult[23] = tmp27;
                  tmp25 = tmp27;
                }
              }
            }
            function handleSave() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              onSave(closure_5(first));
            }
            cResult[9] = value;
            cResult[10] = onSave;
            cResult[11] = tmp6;
            cResult[12] = handleSave;
            tmp18 = handleSave;
          }
          function handleChange(arg0) {
            closure_7(arg0);
            closure_9(closure_5(arg0));
          }
          cResult[6] = tmp6;
          cResult[7] = tmp15;
          cResult[8] = handleChange;
          tmp17 = handleChange;
        }
        const tmp13 = onSave(noop.useState(null), 2);
        const debounceResult = tmp(tmp2[7]).debounce(
          (arr) => {
            try {
              if ("regex" === type) {
                const result = AutomodRuleUtils.validateRegexPatternsOrThrow(arr);
              } else {
                const result1 = AutomodRuleUtils.validateKeywordsOrThrow(arr, maxWordCount);
              }
              closure_1_8(null);
            } catch (tmp13) {
              closure_1_8(tmp13.message);
            }
          },
          300,
          { leading: true, trailing: true },
        );
        cResult[3] = maxWordCount;
        cResult[4] = type;
        cResult[5] = debounceResult;
        tmp15 = debounceResult;
        const tmpResult = tmp(tmp2[7]);
      }
      const fn = function c() {
        const obj = KeywordTextUtils;
        if (closure_4) {
          let stringFromRegexPatterns = obj.getStringFromRegexPatterns(keywords);
        } else {
          stringFromRegexPatterns = obj.getKeywordStringFromKeywordFilter(keywords);
        }
        return stringFromRegexPatterns;
      };
      cResult[0] = "regex" === type;
      cResult[1] = keywords;
      cResult[2] = fn;
      tmp7 = fn;
    }
  : function KeywordsActionSheet(description) {
      ({ title, type } = description);
      ({ keywords: importDefault, maxWordCount } = description);
      const onSave = description.onSave;
      let getKeywordsFromString;
      value = undefined;
      closure_7 = undefined;
      c8 = undefined;
      closure_9 = undefined;
      noop = tmp;
      const tmp4 = type(maxWordCount[6]);
      if ("regex" === type) {
        getKeywordsFromString = tmp4.getRegexPatternsFromString;
        let tmp5 = tmp3;
        let tmp6 = tmp2;
      } else {
        getKeywordsFromString = tmp4.getKeywordsFromString;
        tmp5 = tmp3;
        tmp6 = tmp2;
      }
      const tmp7 = onSave(
        noop.useState(() => {
          const obj = KeywordTextUtils;
          if (closure_4) {
            let stringFromRegexPatterns = obj.getStringFromRegexPatterns(importDefault);
          } else {
            stringFromRegexPatterns = obj.getKeywordStringFromKeywordFilter(importDefault);
          }
          return stringFromRegexPatterns;
        }),
        2,
      );
      value = tmp7[0];
      closure_7 = tmp7[1];
      [tmp10, c8] = onSave(noop.useState(null), 2);
      const items = [type, maxWordCount];
      closure_9 = noop.useMemo(
        () =>
          _mod12.debounce(
            (arr) => {
              try {
                if ("regex" === closure_1_0) {
                  const result = type(maxWordCount[8]).validateRegexPatternsOrThrow(arr);
                  const obj2 = type(maxWordCount[8]);
                } else {
                  const result1 = type(maxWordCount[8]).validateKeywordsOrThrow(arr, closure_1_2);
                  const obj = type(maxWordCount[8]);
                }
                closure_1_8(null);
              } catch (tmp13) {
                closure_1_8(tmp13.message);
              }
            },
            300,
            { leading: true, trailing: true },
          ),
        items,
      );
      let obj = {
        keyboardShouldPersistTaps: "handled",
        header: value(tmp6(tmp5[10]).BottomSheetTitleHeader, { title }),
        children: null,
      };
      let obj2 = {
        accessibilityLabel: title,
        description: description.description,
        placeholder: null,
        value: null,
        onChange: null,
        errorMessage: null,
      };
      if ("regex" === type) {
        let stringResult = getKeywordsFromString;
      } else {
        const intl = tmp6(tmp5[11]).intl;
        stringResult = intl.string(tmp6(tmp5[11]).t.UyaxJy);
      }
      obj2.placeholder = stringResult;
      obj2.value = value;
      obj2.onChange = function handleChange(arg0) {
        closure_7(arg0);
        closure_9(getKeywordsFromString(arg0));
      };
      obj2.errorMessage = tmp10;
      const items1 = [value(tmp6(tmp5[12]).TextArea, obj2)];
      const obj3 = { grow: true, text: null, onPress: null };
      const intl2 = tmp6(tmp5[11]).intl;
      obj3.text = intl2.string(tmp6(tmp5[11]).t["R3BPH+"]);
      obj3.onPress = function handleSave() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        onSave(getKeywordsFromString(first));
      };
      items1[1] = value(tmp6(tmp5[13]).Button, obj3);
      obj.children = items1;
      return closure_7(tmp6(tmp5[14]).ActionSheet, obj);
    };
