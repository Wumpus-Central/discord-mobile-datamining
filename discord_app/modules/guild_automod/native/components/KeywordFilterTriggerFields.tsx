// discord_app/modules/guild_automod/native/components/KeywordFilterTriggerFields.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import KeywordsRowDefault from "KeywordsRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(11403);
({ MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: c3, MAX_KEYWORDS_PER_KEYWORD_FILTER: closure_4 } = Constants);
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordFilterTriggerFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function KeywordFilterTriggerFields(rule) {
      const cResult = c.c(28);
      rule = rule.rule;
      const onChangeRule = rule.onChangeRule;
      ({ keywordFilter, regexPatterns, allowList } = rule.triggerMetadata);
      if (cResult[0] === onChangeRule) {
        if (cResult[1] === rule) {
          let tmp4 = cResult[2];
        }
        dependencyMap = tmp4;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["ue+tnb"]);
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t.Gm6G5x);
          cResult[3] = stringResult;
          cResult[4] = stringResult1;
          let tmp7 = stringResult1;
          let tmp6 = stringResult;
        } else {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        if (cResult[5] !== tmp4) {
          const fn = function k(keywordFilter) {
            return closure_2({ keywordFilter });
          };
          cResult[5] = tmp4;
          cResult[6] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[6];
        }
        if (cResult[7] === keywordFilter) {
          if (cResult[8] === tmp10) {
            let tmp11 = cResult[9];
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = util.intl;
            const stringResult2 = intl3.string(util.t["dnunm+"]);
            const intl4 = util.intl;
            const obj2 = { helpArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.GUILD_AUTOMOD_REGEX) };
            const formatResult = intl4.format(util.t["PGC/AJ"], obj2);
            cResult[10] = stringResult2;
            cResult[11] = formatResult;
            let tmp17 = formatResult;
            let tmp16 = stringResult2;
          } else {
            tmp16 = cResult[10];
            tmp17 = cResult[11];
          }
          if (cResult[12] !== tmp4) {
            class L {
              constructor(arg0) {
                obj = { regexPatterns: rule };
                return closure_2(obj);
              }
            }
            cResult[12] = tmp4;
            cResult[13] = L;
          } else {
            class L {
              constructor(arg0) {
                obj = { regexPatterns: rule };
                return closure_2(obj);
              }
            }
          }
          if (cResult[14] === regexPatterns) {
            class L {
              constructor(arg0) {
                obj = { regexPatterns: rule };
                return closure_2(obj);
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              class L {
                constructor(arg0) {
                  obj = { regexPatterns: rule };
                  return closure_2(obj);
                }
              }
              const stringResult3 = obj6.string(util.t.lbE2Nm);
              const intl5 = util.intl;
              const stringResult4 = intl5.string(util.t.qm7UZ8);
              cResult[17] = stringResult3;
              cResult[18] = stringResult4;
              let tmp28 = stringResult4;
              const tmp27 = stringResult3;
            } else {
              class L {
                constructor(arg0) {
                  obj = { regexPatterns: rule };
                  return closure_2(obj);
                }
              }
              tmp28 = cResult[18];
            }
            if (cResult[19] !== tmp4) {
              class A {
                constructor(arg0) {
                  obj = { allowList: rule };
                  return closure_2(obj);
                }
              }
              cResult[19] = tmp4;
              cResult[20] = A;
            } else {
              class A {
                constructor(arg0) {
                  obj = { allowList: rule };
                  return closure_2(obj);
                }
              }
            }
            if (cResult[21] === allowList) {
              class A {
                constructor(arg0) {
                  obj = { allowList: rule };
                  return closure_2(obj);
                }
              }
              if (cResult[24] === tmp32) {
                class A {
                  constructor(arg0) {
                    obj = { allowList: rule };
                    return closure_2(obj);
                  }
                }
              }
              const obj3 = { hasIcons: false, children: null };
              const items = [tmp11, tmp23, tmp32];
              obj3.children = items;
              const tmp39 = React5(TableRowGroup.TableRowGroup, obj3);
              cResult[24] = tmp32;
              cResult[25] = tmp11;
              cResult[26] = tmp23;
              cResult[27] = tmp39;
            }
            const obj5 = {
              label: tmp27,
              description: tmp28,
              type: "keywords",
              keywords: allowList,
              maxWordCount,
              onChangeKeywords: A,
            };
            const tmp36 = timestampProducer(KeywordsRowDefault, obj5);
            cResult[21] = allowList;
            cResult[22] = A;
            cResult[23] = tmp36;
          }
          const obj7 = {
            label: tmp16,
            description: tmp17,
            type: "regex",
            keywords: regexPatterns,
            onChangeKeywords: L,
          };
          const tmp26 = timestampProducer(KeywordsRowDefault, obj7);
          cResult[14] = regexPatterns;
          cResult[15] = L;
          cResult[16] = tmp26;
        }
        const obj8 = {
          label: tmp6,
          description: tmp7,
          type: "keywords",
          keywords: keywordFilter,
          maxWordCount: maxWordCount2,
          onChangeKeywords: tmp10,
        };
        const tmp15 = timestampProducer(KeywordsRowDefault, obj8);
        cResult[7] = keywordFilter;
        cResult[8] = tmp10;
        cResult[9] = tmp15;
        tmp11 = tmp15;
      }
      function changeTriggerMetadata(arg0) {
        const obj = {};
        const merged = Object.assign(rule);
        const merged1 = Object.assign(rule.triggerMetadata);
        const merged2 = Object.assign(arg0);
        obj.triggerMetadata = {};
        onChangeRule(obj);
      }
      cResult[0] = onChangeRule;
      cResult[1] = rule;
      cResult[2] = changeTriggerMetadata;
      tmp4 = changeTriggerMetadata;
    }
  : function KeywordFilterTriggerFields(rule) {
      rule = rule.rule;
      const onChangeRule = rule.onChangeRule;
      ({ keywordFilter, regexPatterns, allowList } = rule.triggerMetadata);
      const obj = { hasIcons: false, children: null };
      let obj2 = {
        label: null,
        description: null,
        type: "keywords",
        keywords: null,
        maxWordCount: null,
        onChangeKeywords: null,
      };
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
      const items = [timestampProducer(KeywordsRowDefault, obj2), ,];
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
      const obj6 = {
        label: null,
        description: null,
        type: "keywords",
        keywords: null,
        maxWordCount: null,
        onChangeKeywords: null,
      };
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
