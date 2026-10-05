// === Module 17696: DefaultKeywordListTriggerFields ===

// Module 17696 (DefaultKeywordListTriggerFields)
import Constants from "Constants" /* 11474 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let rule;

let closure_4;
let hasOwnProperty;
let metroRequire;
let maxWordCount = Constants.MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((rule) => {
  let closure_3;
  let items;
  let presets;
  let obj = rule(presets[4]);
  const cResult = obj.c(21);
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  presets = rule.triggerMetadata.presets;
  if (cResult[0] === onChangeRule) {
    if (cResult[1] === rule) {
      let tmp4;
      let tmp6;
      if (cResult[2] === presets) {
        tmp4 = cResult[3];
      }
      maxWordCount = tmp4;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[5]).intl;
        const stringResult = intl.string(rule(presets[5]).t.CX5Yfc);
        cResult[4] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[4];
      }
      if (cResult[5] === tmp4) {
        let tmp8;
        let tmp10;
        let tmp14;
        let tmp13;
        if (cResult[6] === presets) {
          tmp8 = cResult[7];
        }
        if (cResult[8] !== tmp8) {
          let obj2 = { title: tmp6, hasIcons: false, children: tmp8 };
          const tmp12 = closure_4(rule(presets[8]).TableRowGroup, obj2);
          cResult[8] = tmp8;
          cResult[9] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[5]).intl;
          const stringResult1 = intl2.string(rule(presets[5]).t.lbE2Nm);
          const intl3 = tmp(tmp2[5]).intl;
          const stringResult2 = intl3.string(rule(presets[5]).t.qm7UZ8);
          cResult[10] = stringResult1;
          cResult[11] = stringResult2;
          tmp14 = stringResult2;
          tmp13 = stringResult1;
        } else {
          tmp13 = cResult[10];
          tmp14 = cResult[11];
        }
        if (cResult[12] === onChangeRule) {
          let tmp17;
          if (cResult[13] === rule) {
            tmp17 = cResult[14];
          }
          if (cResult[15] === rule.triggerMetadata.allowList) {
            let tmp18;
            if (cResult[16] === tmp17) {
              tmp18 = cResult[17];
            }
            if (cResult[18] === tmp10) {
              let tmp23;
              if (cResult[19] === tmp18) {
                tmp23 = cResult[20];
              }
              return tmp23;
            }
            const obj3 = { children: items };
            items = [tmp10, tmp18];
            const tmp26 = closure_6(closure_5, obj3);
            cResult[18] = tmp10;
            cResult[19] = tmp18;
            cResult[20] = tmp26;
            tmp23 = tmp26;
          }
          const obj4 = { label: tmp13, description: tmp14, type: "keywords", keywords: rule.triggerMetadata.allowList, maxWordCount, onChangeKeywords: tmp17, start: true, end: true };
          const tmp22 = closure_4(onChangeRule(presets[9]), obj4);
          cResult[15] = rule.triggerMetadata.allowList;
          cResult[16] = tmp17;
          cResult[17] = tmp22;
          tmp18 = tmp22;
        }
        const fn2 = function y(allowList) {
          let obj2;
          const obj = { triggerMetadata: obj2 };
          const merged = Object.assign(rule);
          obj2 = { allowList };
          const merged1 = Object.assign(rule.triggerMetadata);
          return onChangeRule(obj);
        };
        cResult[12] = onChangeRule;
        cResult[13] = rule;
        cResult[14] = fn2;
        tmp17 = fn2;
      }
      const KEYWORD_PRESETS = tmp(tmp2[6]).KEYWORD_PRESETS;
      const mapped = KEYWORD_PRESETS.map((item) => {
        let headerText;
        let subtitleText;
        let closure_0 = item;
        const obj = rule(presets[6]);
        const keywordPresetInfo = obj.getKeywordPresetInfo(item);
        ({ headerText, subtitleText } = keywordPresetInfo);
        const obj2 = {
          label: headerText,
          subLabel: subtitleText,
          checked: presets.includes(item),
          onPress(arg0) {
            return closure_3(item, arg0);
          }
        };
        const TableCheckboxRow = rule(presets[7]).TableCheckboxRow;
        return closure_1_4(TableCheckboxRow, obj2, item);
      });
      cResult[5] = tmp4;
      cResult[6] = presets;
      cResult[7] = mapped;
      tmp8 = mapped;
    }
  }
  const fn = function c(arg0, arg1) {
    let found;
    let obj2;
    let closure_0 = arg0;
    const filter = presets.filter;
    const tmp3 = arg1;
    if (tmp3) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, filter((arg0) => arg0 !== iter), 0)] = arg0;
      found = items;
    } else {
      found = filter((arg0) => arg0 !== closure_0);
    }
    const obj = { triggerMetadata: obj2 };
    const merged = Object.assign(rule);
    obj2 = { presets: found };
    const merged1 = Object.assign(rule.triggerMetadata);
    onChangeRule(obj);
  };
  cResult[0] = onChangeRule;
  cResult[1] = rule;
  cResult[2] = presets;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((rule) => {
  let KEYWORD_PRESETS;
  let intl;
  let intl2;
  let intl3;
  let items;
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  const presets = rule.triggerMetadata.presets;
  let obj = { children: items };
  let obj2 = {
    title: intl.string(rule(presets[5]).t.CX5Yfc),
    hasIcons: false,
    children: KEYWORD_PRESETS.map((item) => {
      let headerText;
      let subtitleText;
      let closure_0 = item;
      let obj = rule(presets[6]);
      const keywordPresetInfo = obj.getKeywordPresetInfo(item);
      ({ headerText, subtitleText } = keywordPresetInfo);
      let obj2 = {
        label: headerText,
        subLabel: subtitleText,
        checked: presets.includes(item),
        onPress(arg0) {
          let found;
          let obj2;
          const filter = presets.filter;
          const tmp4 = arg0;
          if (tmp4) {
            const items = [];
            items[HermesBuiltin.arraySpread(items, filter((arg0) => arg0 !== encodeStreamKeyResult1), 0)] = tmp2;
            found = items;
          } else {
            found = filter((arg0) => arg0 !== closure_0);
          }
          const obj = { triggerMetadata: obj2 };
          const merged = Object.assign(rule);
          obj2 = { presets: found };
          const merged1 = Object.assign(rule.triggerMetadata);
          onChangeRule(obj);
        }
      };
      const TableCheckboxRow = rule(presets[7]).TableCheckboxRow;
      return closure_1_4(TableCheckboxRow, obj2, item);
    })
  };
  const TableRowGroup = rule(presets[8]).TableRowGroup;
  intl = rule(presets[5]).intl;
  KEYWORD_PRESETS = rule(presets[6]).KEYWORD_PRESETS;
  items = [closure_4(TableRowGroup, obj2), ];
  const obj3 = {
    label: intl2.string(rule(presets[5]).t.lbE2Nm),
    description: intl3.string(rule(presets[5]).t.qm7UZ8),
    type: "keywords",
    keywords: rule.triggerMetadata.allowList,
    maxWordCount,
    onChangeKeywords(allowList) {
      let obj2;
      const obj = { triggerMetadata: obj2 };
      const merged = Object.assign(rule);
      obj2 = { allowList };
      const merged1 = Object.assign(rule.triggerMetadata);
      return onChangeRule(obj);
    },
    start: true,
    end: true
  };
  const tmp = onChangeRule(presets[9]);
  intl2 = rule(presets[5]).intl;
  intl3 = rule(presets[5]).intl;
  items[1] = closure_4(tmp, obj3);
  return closure_6(closure_5, obj);
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/DefaultKeywordListTriggerFields.tsx");

export default tmp4;