// discord_app/modules/guild_automod/native/components/DefaultKeywordListTriggerFields.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const maxWordCount = fn(12106).MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_automod/native/components/DefaultKeywordListTriggerFields.tsx",
);

export default function DefaultKeywordListTriggerFields(rule) {
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  const presets = rule.triggerMetadata.presets;
  let obj = { children: null };
  let obj2 = { title: null, hasIcons: false, children: null };
  const intl = rule(presets[4]).intl;
  obj2.title = intl.string(rule(presets[4]).t.CX5Yfc);
  const KEYWORD_PRESETS = rule(presets[5]).KEYWORD_PRESETS;
  obj2.children = KEYWORD_PRESETS.map((item) => {
    closure_0 = item;
    const keywordPresetInfo = rule(presets[5]).getKeywordPresetInfo(item);
    ({ headerText, subtitleText } = keywordPresetInfo);
    let obj = rule(presets[5]);
    return closure_1_4(
      rule(presets[6]).TableCheckboxRow,
      {
        label: headerText,
        subLabel: subtitleText,
        checked: presets.includes(item),
        onPress(arg0) {
          const filter = presets.filter;
          if (arg0) {
            const items = [];
            items[
              HermesBuiltin.arraySpread(
                filter((arg0) => arg0 !== closure_0),
                0,
              )
            ] = tmp;
            let found = items;
          } else {
            found = filter((arg0) => arg0 !== closure_0);
          }
          const obj = {};
          const merged = Object.assign(rule);
          const obj2 = {};
          const merged1 = Object.assign(rule.triggerMetadata);
          obj2.presets = found;
          obj.triggerMetadata = obj2;
          onChangeRule(obj);
        },
      },
      item,
    );
  });
  let items = [closure_4(rule(presets[3]).TableRowGroup, obj2)];
  const obj3 = {
    label: null,
    description: null,
    type: "keywords",
    keywords: null,
    maxWordCount: null,
    onChangeKeywords: null,
    start: true,
    end: true,
  };
  const intl2 = rule(presets[4]).intl;
  obj3.label = intl2.string(rule(presets[4]).t.lbE2Nm);
  const intl3 = rule(presets[4]).intl;
  obj3.description = intl3.string(rule(presets[4]).t.qm7UZ8);
  obj3.keywords = rule.triggerMetadata.allowList;
  obj3.maxWordCount = maxWordCount;
  obj3.onChangeKeywords = function onChangeKeywords(allowList) {
    const obj = {};
    const merged = Object.assign(rule);
    const obj2 = {};
    const merged1 = Object.assign(rule.triggerMetadata);
    obj2.allowList = allowList;
    obj.triggerMetadata = obj2;
    return onChangeRule(obj);
  };
  items[1] = closure_4(onChangeRule(presets[7]), obj3);
  obj.children = items;
  return closure_6(closure_5, obj);
}
