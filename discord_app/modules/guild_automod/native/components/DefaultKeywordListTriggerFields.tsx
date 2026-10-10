// discord_app/modules/guild_automod/native/components/DefaultKeywordListTriggerFields.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let maxWordCount = fn(11448).MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_automod/native/components/DefaultKeywordListTriggerFields.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DefaultKeywordListTriggerFields(rule) {
      const cResult = rule(presets[4]).c(21);
      rule = rule.rule;
      const onChangeRule = rule.onChangeRule;
      presets = rule.triggerMetadata.presets;
      if (cResult[0] === onChangeRule) {
        if (cResult[1] === rule) {
          if (cResult[2] === presets) {
            let tmp4 = cResult[3];
          }
          maxWordCount = tmp4;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[5]).intl;
            const stringResult = intl.string(tmp(tmp2[5]).t.CX5Yfc);
            cResult[4] = stringResult;
            let tmp6 = stringResult;
          } else {
            tmp6 = cResult[4];
          }
          if (cResult[5] === tmp4) {
            if (cResult[6] === presets) {
              let tmp8 = cResult[7];
            }
            if (cResult[8] !== tmp8) {
              let obj2 = { title: tmp6, hasIcons: false, children: tmp8 };
              const tmp12 = closure_4(tmp(tmp2[8]).TableRowGroup, obj2);
              class L {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(rule);
                  obj1 = {};
                  merged1 = Object.assign(rule.triggerMetadata);
                  obj1.allowList = rule;
                  obj.triggerMetadata = obj1;
                  return onChangeRule(obj);
                }
              }
              cResult[9] = tmp12;
              let tmp10 = tmp12;
            } else {
              tmp10 = cResult[9];
            }
            const _Symbol2 = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[5]).intl;
              const stringResult1 = intl2.string(tmp(tmp2[5]).t.lbE2Nm);
              const intl3 = tmp(tmp2[5]).intl;
              const stringResult2 = intl3.string(tmp(tmp2[5]).t.qm7UZ8);
              class L {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(rule);
                  obj1 = {};
                  merged1 = Object.assign(rule.triggerMetadata);
                  obj1.allowList = rule;
                  obj.triggerMetadata = obj1;
                  return onChangeRule(obj);
                }
              }
              cResult[10] = stringResult1;
              cResult[11] = stringResult2;
              let tmp13 = stringResult1;
            } else {
              tmp13 = cResult[10];
            }
            if (cResult[12] === onChangeRule) {
              if (cResult[13] === rule) {
                let tmp17 = cResult[14];
              }
              if (cResult[15] === rule.triggerMetadata.allowList) {
                if (cResult[16] === tmp17) {
                  let tmp18 = cResult[17];
                }
                if (cResult[18] === tmp10) {
                  if (cResult[19] === tmp18) {
                    let tmp23 = cResult[20];
                  }
                  return tmp23;
                }
                const obj3 = { children: null };
                let items = [,];
                class L {
                  constructor(arg0) {
                    obj = {};
                    merged = Object.assign(rule);
                    obj1 = {};
                    merged1 = Object.assign(rule.triggerMetadata);
                    obj1.allowList = rule;
                    obj.triggerMetadata = obj1;
                    return onChangeRule(obj);
                  }
                }
                items[1] = tmp18;
                obj3.children = items;
                const tmp26 = closure_6(closure_5, obj3);
                cResult[18] = tmp10;
                cResult[19] = tmp18;
                cResult[20] = tmp26;
                tmp23 = tmp26;
              }
              const obj4 = {
                label: tmp13,
                description: null,
                type: "keywords",
                keywords: null,
                maxWordCount: null,
                onChangeKeywords: null,
                start: true,
                end: true,
              };
              class L {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(rule);
                  obj1 = {};
                  merged1 = Object.assign(rule.triggerMetadata);
                  obj1.allowList = rule;
                  obj.triggerMetadata = obj1;
                  return onChangeRule(obj);
                }
              }
              obj4.keywords = rule.triggerMetadata.allowList;
              obj4.maxWordCount = maxWordCount;
              obj4.onChangeKeywords = tmp17;
              const tmp22 = closure_4(onChangeRule(tmp2[9]), obj4);
              cResult[15] = rule.triggerMetadata.allowList;
              cResult[16] = tmp17;
              cResult[17] = tmp22;
              tmp18 = tmp22;
            }
            class L {
              constructor(arg0) {
                obj = {};
                merged = Object.assign(rule);
                obj1 = {};
                merged1 = Object.assign(rule.triggerMetadata);
                obj1.allowList = rule;
                obj.triggerMetadata = obj1;
                return onChangeRule(obj);
              }
            }
            cResult[12] = onChangeRule;
            cResult[13] = rule;
            cResult[14] = L;
            tmp17 = L;
          }
          const KEYWORD_PRESETS = tmp(tmp2[6]).KEYWORD_PRESETS;
          const mapped = KEYWORD_PRESETS.map((item) => {
            closure_0 = item;
            const keywordPresetInfo = rule(presets[6]).getKeywordPresetInfo(item);
            ({ headerText, subtitleText } = keywordPresetInfo);
            const obj = rule(presets[6]);
            return closure_1_4(
              rule(presets[7]).TableCheckboxRow,
              {
                label: headerText,
                subLabel: subtitleText,
                checked: presets.includes(item),
                onPress(arg0) {
                  return closure_3(closure_0, arg0);
                },
              },
              item,
            );
          });
          cResult[5] = tmp4;
          cResult[6] = presets;
          cResult[7] = mapped;
          tmp8 = mapped;
        }
      }
      function handleTogglePreset(arg0, arg1) {
        closure_0 = arg0;
        const filter = presets.filter;
        if (arg1) {
          const items = [];
          items[
            HermesBuiltin.arraySpread(
              filter((arg0) => arg0 !== closure_0),
              0,
            )
          ] = arg0;
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
      }
      cResult[0] = onChangeRule;
      cResult[1] = rule;
      cResult[2] = presets;
      cResult[3] = handleTogglePreset;
      tmp4 = handleTogglePreset;
      let obj = rule(presets[4]);
    }
  : function DefaultKeywordListTriggerFields(rule) {
      rule = rule.rule;
      const onChangeRule = rule.onChangeRule;
      const presets = rule.triggerMetadata.presets;
      let obj = { children: null };
      let obj2 = { title: null, hasIcons: false, children: null };
      const intl = rule(presets[5]).intl;
      obj2.title = intl.string(rule(presets[5]).t.CX5Yfc);
      const KEYWORD_PRESETS = rule(presets[6]).KEYWORD_PRESETS;
      obj2.children = KEYWORD_PRESETS.map((item) => {
        closure_0 = item;
        const keywordPresetInfo = rule(presets[6]).getKeywordPresetInfo(item);
        ({ headerText, subtitleText } = keywordPresetInfo);
        let obj = rule(presets[6]);
        return closure_1_4(
          rule(presets[7]).TableCheckboxRow,
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
      let items = [closure_4(rule(presets[8]).TableRowGroup, obj2)];
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
      const intl2 = rule(presets[5]).intl;
      obj3.label = intl2.string(rule(presets[5]).t.lbE2Nm);
      const intl3 = rule(presets[5]).intl;
      obj3.description = intl3.string(rule(presets[5]).t.qm7UZ8);
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
      items[1] = closure_4(onChangeRule(presets[9]), obj3);
      obj.children = items;
      return closure_6(closure_5, obj);
    };
