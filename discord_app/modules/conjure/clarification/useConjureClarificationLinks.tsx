// === Module 13733: useConjureClarificationLinks ===

// Module 13733 (useConjureClarificationLinks)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureClarificationLinks.tsx");

export default function useConjureClarificationLinks(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  items = [arg1, arg2, arg0];
  const memo = first.useMemo(() => {
    const questions = closure_1.questions;
    return Object.fromEntries(questions.flatMap((id) => {
      items = closure_1_2[id.id];
      if (items == null) {
        items = [];
      }
      const linkedPairResult = closure_0(closure_1[4]).linkedPair(closure_1_0, id, items);
      if (null == linkedPairResult) {
        let items1 = [];
      } else {
        const items2 = [id.id, linkedPairResult];
        items1 = [items2];
      }
      return items1;
    }));
  }, items);
  let tmp2 = memo(first.useState({}), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
  const tmp4 = memo(first.useState({}), 2);
  const first1 = tmp4[0];
  closure_7 = tmp4[1];
  first.useRef(new Set());
  let items1 = [memo];
  const effect = first.useEffect(() => {
    closure_0 = async function _readStart(arg0) {
      closure_4 = tmp3;
      closure_131_0 = closure_2;
      let v0 = 1;
      await closure_2_0(closure_2_1[5]).fetchLinkedAppStart(closure_0, closure_1);
      if (1 === tmp7) {
        v0 = 0;
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_131_1 = value;
        v0((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_1_0] = closure_1_1;
          return obj;
        });
        v0 = 0;
      }
      v0 = 0;
      return value;
    };
    function readStart(target, caller, key) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    const values = Object.values(memo);
    for (const item10012 of values) {
      let current = ref.current;
      if (!current.has(item10012.key)) {
        let current2 = ref.current;
        let addResult = current2.add(item10012.key);
        let start = readStart(item10012.target, item10012.caller, item10012.key);
      }
      continue;
    }
  }, items1);
  const set = new Set();
  let items2 = [closure_5];
  const items3 = [memo];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
    const values = Object.values(memo);
    return Object.fromEntries(values.flatMap((item) => {
      items = [, ];
      ({ target: arr[0], caller: arr[1] } = item);
      return items.map((item) => {
        items = [item, project.getProject(item)];
        return items;
      });
    }));
  }, items3);
  let obj2 = { builds: null, linkFor: null };
  const items4 = [first1, memo];
  obj2.builds = first.useMemo(() => {
    const entries = Object.entries(memo);
    return Object.fromEntries(entries.flatMap((item) => {
      [tmp, tmp2] = item;
      if (null == first1[tmp2.key]) {
        items = [];
      } else {
        const items1 = [tmp, tmp3];
        items = [items1];
      }
      return items;
    }));
  }, items4);
  const items5 = [first1, arg1, arg2, memo, arg0, stateFromStoresObject, first];
  obj2.linkFor = first.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1 = tmp;
    let tmp2 = null;
    if (null != memo[arg0]) {
      tmp2 = first[tmp.key];
    }
    if (closure_2[arg0] != null) {
      first = tmp4[0];
      if (first != null) {
        const name = first.name;
      }
    }
    if (stateFromStoresObject[closure_0] != null) {
      let name2 = tmp8.name;
    }
    if (null != memo[arg0]) {
      if (null != tmp2) {
        if (null != name) {
          if (null != name2) {
            let tmp16 = stateFromStoresObject[tmp.caller];
            let tmp9 = name;
            if (tmp.caller === closure_0) {
              tmp9 = name2;
            }
            let obj = { caller: tmp9, target: null, targetLive: null, targetHasPreview: null, callerHasPreview: null, callerLiveOnVibeyard: false };
            if (tmp.caller === closure_0) {
              name2 = name;
            }
            obj.target = name2;
            ({ live: obj.targetLive, hasPreview: obj.targetHasPreview } = tmp2);
            let usesPreviewAppResult = null == tmp16;
            if (!usesPreviewAppResult) {
              usesPreviewAppResult = closure_0(closure_1[7]).usesPreviewApp(tmp16);
              const obj2 = closure_0(closure_1[7]);
            }
            obj.callerHasPreview = usesPreviewAppResult;
            let build = first1[tmp.key];
            if (build == null) {
              build = tmp2.build;
            }
            const questions = closure_1.questions;
            const found = questions.find((id) => id.id === closure_0);
            const obj3 = { sides: obj, callerProject: null, targetProject: null, flow: null, purpose: null, data: null, value: null, aria: null, onChange: null };
            if (tmp16 == null) {
              tmp16 = null;
            }
            obj3.callerProject = tmp16;
            let tmp17 = stateFromStoresObject[tmp.target];
            if (tmp17 == null) {
              tmp17 = null;
            }
            obj3.targetProject = tmp17;
            let link_flow;
            if (found != null) {
              link_flow = found.link_flow;
            }
            if (link_flow == null) {
              link_flow = tmp2.flow;
            }
            obj3.flow = link_flow;
            let link_purpose;
            if (found != null) {
              link_purpose = found.link_purpose;
            }
            if (link_purpose == null) {
              link_purpose = tmp2.purpose;
            }
            obj3.purpose = closure_0(closure_1[8]).linkedAppPurpose(link_purpose);
            const obj4 = closure_0(closure_1[8]);
            obj3.data = closure_0(closure_1[8]).linkedAppChatData(obj, build);
            obj3.value = build;
            const obj5 = closure_0(closure_1[8]);
            obj3.aria = closure_0(closure_1[8]).linkedAppChatAria(obj);
            obj3.onChange = function onChange(arg0) {
              closure_0 = arg0;
              return closure_1_7((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[key.key] = closure_0;
                return obj;
              });
            };
            return obj3;
          }
        }
      }
    }
    return null;
  }, items5);
  return obj2;
};