// === Module 17675: KeywordsActionSheet ===

// Module 17675 (KeywordsActionSheet)
import _mod12 from "module_12" /* 12 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17654 */;
import KeywordTextUtils from "KeywordTextUtils" /* 17659 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_5 = fn(11474).KEYWORDS_REGEX_PLACEHOLDER;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((keywords) => {
  const cResult = type(maxWordCount[5]).c(31);
  ({ title, description, type } = keywords);
  keywords = keywords.keywords;
  maxWordCount = keywords.maxWordCount;
  const onSave = keywords.onSave;
  noop = tmp4;
  const tmp5 = type(maxWordCount[6]);
  const tmp6 = "regex" === type ? tmp5.getRegexPatternsFromString : tmp5.getKeywordsFromString;
  closure_5 = tmp6;
  if (cResult[0] === "regex" === type) {
    if (cResult[1] === keywords) {
      let tmp7 = cResult[2];
    }
    const tmp10 = onSave(noop.useState(tmp7), 2);
    const first = tmp10[0];
    closure_7 = tmp10[1];
    [r10039, closure_8] = onSave(noop.useState(null), 2);
    if (cResult[3] === maxWordCount) {
      if (cResult[4] === type) {
        let tmp14 = cResult[5];
      }
      closure_9 = tmp14;
      if (cResult[6] === tmp6) {
        if (cResult[9] === first) {
          if (cResult[10] === onSave) {
            if (cResult[13] !== title) {
              class E {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = onSave(getKeywordsFromString(closure_6));
                  return;
                }
              }
              class B {
                constructor(arg0) {
                  tmp = closure_7(keywords);
                  tmp2 = closure_9(getKeywordsFromString(keywords));
                  return;
                }
              }
              cResult[13] = title;
              cResult[14] = tmp20;
            }
            class E {
              constructor() {
                obj = closure_1(closure_2[9]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp2 = onSave(getKeywordsFromString(closure_6));
                return;
              }
            }
          }
        }
        class E {
          constructor() {
            obj = closure_1(closure_2[9]);
            hideActionSheetResult = obj.hideActionSheet();
            tmp2 = onSave(getKeywordsFromString(closure_6));
            return;
          }
        }
        class B {
          constructor(arg0) {
            tmp = closure_7(keywords);
            tmp2 = closure_9(getKeywordsFromString(keywords));
            return;
          }
        }
        cResult[9] = first;
        cResult[10] = onSave;
        cResult[11] = tmp6;
        cResult[12] = E;
      }
      class B {
        constructor(arg0) {
          tmp = closure_7(keywords);
          tmp2 = closure_9(getKeywordsFromString(keywords));
          return;
        }
      }
      cResult[6] = tmp6;
      cResult[7] = tmp14;
      cResult[8] = B;
    }
    const tmp13 = onSave(noop.useState(null), 2);
    const debounceResult = type(maxWordCount[7]).debounce((arr) => {
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
    }, 300, { leading: true, trailing: true });
    cResult[3] = maxWordCount;
    cResult[4] = type;
    cResult[5] = debounceResult;
    tmp14 = debounceResult;
    const tmpResult = type(maxWordCount[7]);
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
}) : ((description) => {
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
  const tmp7 = onSave(noop.useState(() => {
    const obj = KeywordTextUtils;
    if (closure_4) {
      let stringFromRegexPatterns = obj.getStringFromRegexPatterns(importDefault);
    } else {
      stringFromRegexPatterns = obj.getKeywordStringFromKeywordFilter(importDefault);
    }
    return stringFromRegexPatterns;
  }), 2);
  value = tmp7[0];
  closure_7 = tmp7[1];
  [tmp10, c8] = onSave(noop.useState(null), 2);
  const items = [type, maxWordCount];
  closure_9 = noop.useMemo(() => _mod12.debounce((arr) => {
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
  }, 300, { leading: true, trailing: true }), items);
  let obj = { keyboardShouldPersistTaps: "handled", header: value(tmp6(tmp5[10]).BottomSheetTitleHeader, { title }), children: null };
  let obj2 = { accessibilityLabel: title, description: description.description, placeholder: null, value: null, onChange: null, errorMessage: null };
  if ("regex" === type) {
    let stringResult = getKeywordsFromString;
  } else {
    const intl = tmp6(tmp5[11]).intl;
    stringResult = intl.string(tmp6(tmp5[11]).t.UyaxJy);
  }
  obj2.placeholder = stringResult;
  obj2.value = value;
  obj2.onChange = function onChange(arg0) {
    closure_7(arg0);
    closure_9(getKeywordsFromString(arg0));
  };
  obj2.errorMessage = tmp10;
  const items1 = [value(tmp6(tmp5[12]).TextArea, obj2), ];
  const obj3 = { grow: true, text: null, onPress: null };
  const intl2 = tmp6(tmp5[11]).intl;
  obj3.text = intl2.string(tmp6(tmp5[11]).t["R3BPH+"]);
  obj3.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSave(getKeywordsFromString(first));
  };
  items1[1] = value(tmp6(tmp5[13]).Button, obj3);
  obj.children = items1;
  return closure_7(tmp6(tmp5[14]).ActionSheet, obj);
});