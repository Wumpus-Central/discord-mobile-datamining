// discord_app/modules/guild_automod/native/components/KeywordsActionSheet.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import KeywordTextUtils from "../../KeywordTextUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_5 = fn(12121).KEYWORDS_REGEX_PLACEHOLDER;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordsActionSheet.tsx");

export default function KeywordsActionSheet(description) {
  ({ title, type } = description);
  ({ keywords: importDefault, maxWordCount } = description);
  const onSave = description.onSave;
  let getKeywordsFromString;
  value = undefined;
  closure_7 = undefined;
  c8 = undefined;
  closure_9 = undefined;
  noop = tmp;
  const tmp4 = type(maxWordCount[4]);
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
              const result = type(maxWordCount[6]).validateRegexPatternsOrThrow(arr);
              const obj2 = type(maxWordCount[6]);
            } else {
              const result1 = type(maxWordCount[6]).validateKeywordsOrThrow(arr, closure_1_2);
              const obj = type(maxWordCount[6]);
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
    header: value(tmp6(tmp5[8]).BottomSheetTitleHeader, { title }),
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
    const intl = tmp6(tmp5[10]).intl;
    stringResult = intl.string(tmp6(tmp5[10]).t.UyaxJy);
  }
  obj2.placeholder = stringResult;
  obj2.value = value;
  obj2.onChange = function onChange(arg0) {
    closure_7(arg0);
    closure_9(getKeywordsFromString(arg0));
  };
  obj2.errorMessage = tmp10;
  const items1 = [value(tmp6(tmp5[9]).TextArea, obj2)];
  const obj3 = { grow: true, text: null, onPress: null };
  const intl2 = tmp6(tmp5[10]).intl;
  obj3.text = intl2.string(tmp6(tmp5[10]).t["R3BPH+"]);
  obj3.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSave(getKeywordsFromString(first));
  };
  items1[1] = value(tmp6(tmp5[11]).Button, obj3);
  obj.children = items1;
  return closure_7(tmp6(tmp5[7]).ActionSheet, obj);
}
