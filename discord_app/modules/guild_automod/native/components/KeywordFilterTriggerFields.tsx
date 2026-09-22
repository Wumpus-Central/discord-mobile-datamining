// === Module 17979: KeywordFilterTriggerFields ===

// Module 17979 (KeywordFilterTriggerFields)
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import TableRowGroup from "TableRowGroup" /* 5906 */;
import KeywordsRowDefault from "KeywordsRow" /* 17973 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(12121);
({ MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: c3, MAX_KEYWORDS_PER_KEYWORD_FILTER: closure_4 } = Constants);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordFilterTriggerFields.tsx");

export default function KeywordFilterTriggerFields(rule) {
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  ({ keywordFilter, regexPatterns, allowList } = rule.triggerMetadata);
  const obj = { hasIcons: false, children: null };
  let obj2 = { label: null, description: null, type: "keywords", keywords: null, maxWordCount: null, onChangeKeywords: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t["ue+tnb"]);
  const intl2 = util.intl;
  obj2.description = intl2.string(util.t.Gm6G5x);
  obj2.keywords = keywordFilter;
  obj2.maxWordCount = maxWordCount2;
  obj2.onChangeKeywords = function onChangeKeywords(keywordFilter) {
    const obj2 = {};
    const merged = Object.assign(rule);
    const merged1 = Object.assign(rule.triggerMetadata);
    const merged2 = Object.assign({ keywordFilter });
    obj2.triggerMetadata = {};
    onChangeRule(obj2);
  };
  const items = [timestampProducer(KeywordsRowDefault, obj2), , ];
  const obj3 = { label: null, description: null, type: "regex", keywords: null, onChangeKeywords: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t["dnunm+"]);
  const intl4 = util.intl;
  const obj4 = { helpArticle: null };
  const tmp2 = KeywordsRowDefault;
  obj4.helpArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.GUILD_AUTOMOD_REGEX);
  obj3.description = intl4.format(util.t["PGC/AJ"], obj4);
  obj3.keywords = regexPatterns;
  obj3.onChangeKeywords = function onChangeKeywords(regexPatterns) {
    const obj2 = {};
    const merged = Object.assign(rule);
    const merged1 = Object.assign(rule.triggerMetadata);
    const merged2 = Object.assign({ regexPatterns });
    obj2.triggerMetadata = {};
    onChangeRule(obj2);
  };
  items[1] = timestampProducer(tmp2, obj3);
  const obj6 = { label: null, description: null, type: "keywords", keywords: null, maxWordCount: null, onChangeKeywords: null };
  const intl5 = util.intl;
  obj6.label = intl5.string(util.t.lbE2Nm);
  const intl6 = util.intl;
  obj6.description = intl6.string(util.t.qm7UZ8);
  obj6.keywords = allowList;
  obj6.maxWordCount = maxWordCount;
  obj6.onChangeKeywords = function onChangeKeywords(allowList) {
    const obj2 = {};
    const merged = Object.assign(rule);
    const merged1 = Object.assign(rule.triggerMetadata);
    const merged2 = Object.assign({ allowList });
    obj2.triggerMetadata = {};
    onChangeRule(obj2);
  };
  items[2] = timestampProducer(KeywordsRowDefault, obj6);
  obj.children = items;
  return React5(TableRowGroup.TableRowGroup, obj);
};