// discord_app/modules/conjure/app_build_request/ConjureAppBuildRequest.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3865 from "../intl/ConjureUntranslated.messages.js";
import createNonce from "../../messages/createNonce.tsx";
import conjureAttachmentDrafts from "../chat/conjureAttachmentDrafts.tsx";
import useConjureProjectPickerOptionsDefault from "../clarification/useConjureProjectPickerOptions.tsx";
import conjureSendToProject from "../connection/conjureSendToProject.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_build_request/ConjureAppBuildRequest.tsx");

export const CONJURE_APP_BUILD_PROMPT_MAX_LENGTH = 4000;
export const CONJURE_APP_BUILD_MAX_TARGETS = 10;
export function appBuildRequestSentToast(arr) {
  const intl = util.intl;
  const obj = { names: null };
  const mapped = arr.map((name) => name.name);
  obj.names = mapped.join(", ");
  return intl.formatToPlainString(_modDef3865.RZO35O, obj);
}
export function useConjureAppBuildRequestForm(projectId, request, canSend, onDismiss, onSent) {
  importDefault = request;
  let tmp = canSend;
  dependencyMap = onDismiss;
  _slicedToArray = onSent;
  let tmp2 = useConjureProjectPickerOptionsDefault(projectId);
  noop = tmp2;
  [first, closure_6] = noop.useState(null);
  [first1, closure_8] = noop.useState([]);
  const tmp6 = _slicedToArray(noop.useState(request.prompt), 2);
  [first2, closure_10] = noop.useState(false);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  closure_11 = tmp9[1];
  closure_12 = noop.useRef(new Map());
  closure_13 = noop.useRef(false);
  noop.useRef(false);
  let items = [tmp2, first1];
  const memo = noop.useMemo(
    () => closure_4.filter((item) => !first1.some((target) => target.target.projectId === item.projectId)),
    items,
  );
  let items1 = [request];
  const memo1 = noop.useMemo(() => {
    if (null != closure_1.project_ids) {
      let project_ids = closure_1.project_ids;
    } else if (null != closure_1.project_id) {
      const items = [closure_1.project_id];
      project_ids = items;
    } else {
      project_ids = [];
    }
    return project_ids;
  }, items1);
  const items2 = [first, memo1, memo];
  const memo2 = noop.useMemo(() => {
    const found = memo.filter((projectId) => {
      let obj = first;
      if (first == null) {
        obj = memo1;
      }
      return obj.includes(projectId.projectId);
    });
    return found.map((projectId) => projectId.projectId);
  }, items2);
  const items3 = [memo, memo2];
  const memo3 = noop.useMemo(() => memo.filter((projectId) => memo2.includes(projectId.projectId)), items3);
  const callback = noop.useCallback((arr) => {
    closure_6(arr.slice(0, 10));
  }, []);
  const trimmed = str.trim();
  if (canSend) {
    tmp = !first2;
  }
  if (!tmp) {
    closure_20 = tmp;
    const items4 = [onSent, projectId];
    const callback1 = obj.useCallback((arr) => {
      if (!ref.current) {
        tmp.current = true;
        closure_10(true);
        if (null != closure_3) {
          tmp5(arr.map((target) => target.target));
        } else {
          conjureAttachmentDrafts.sendConjureCardReply(
            closure_0,
            (function sentMessage(arr) {
              const map = new Map();
              const iter = arr[Symbol.iterator]();
              while (iter !== undefined) {
                ({ target, prompt: _prompt } = nextResult);
                let items1 = map.get(_prompt);
                if (items1 == null) {
                  items1 = [];
                }
                let items = [];
                items[HermesBuiltin.arraySpread(items1, 0)] = target;
                let result = map.set(_prompt, items);
                continue;
              }
              arr = Array.from(map, (arg0) => {
                [tmp, arr] = arg0;
                const mapped = arr.map((name) => {
                  const intl = closure_1_0(1114).intl;
                  return intl.formatToPlainString(closure_1_1(3865).tcDZw9, {
                    name: name.name,
                    projectId: name.projectId,
                  });
                });
                const targets = mapped.join(", ");
                let intl = closure_1_0(1114).intl;
                return "" + intl.formatToPlainString(closure_1_1(3865).jZlNst, { targets }) + "\n\n" + tmp;
              });
              return arr.join("\n\n");
            })(arr),
          );
        }
      }
    }, items4);
    const items5 = [tmp, callback1, first1, projectId, memo3, trimmed];
    const items6 = [callback1, first1, onDismiss, first2];
    const callback2 = obj.useCallback(() => {
      if (closure_20) {
        if (0 !== memo3.length) {
          closure_10(true);
          closure_11(false);
          const project = first.getProject(projectId);
          let name;
          if (project != null) {
            name = project.name;
          }
          if (name == null) {
            name = tmp8;
          }
          const intl = projectId(onDismiss[3]).intl;
          let obj = { name, projectId };
          const _HermesInternal = HermesInternal;
          projectId = "" + trimmed + "\n\n" + intl.formatToPlainString(closure_1(onDismiss[4]).ScoZLp, obj);
          Promise.allSettled(
            memo3.map((projectId) => {
              const current = ref.current;
              value = current.get(projectId.projectId);
              content = undefined;
              if (value != null) {
                content = value.content;
              }
              if (content !== content) {
                const obj = { content, nonce: createNonce.createNonce() };
                const current2 = ref.current;
                const result = current2.set(projectId.projectId, obj);
                value = obj;
              }
              return conjureSendToProject.sendConjureMessageToProject(projectId.projectId, content, value.nonce);
            }),
          ).then((result) => {
            closure_0 = result;
            const found = closure_18.filter((item, index) => "fulfilled" === closure_0[index].status);
            const items = [...closure_7, ...found.map((target) => ({ target, prompt: _prompt }))];
            if (found.length !== closure_18.length) {
              if (!ref2.current) {
                closure_8(items);
                const found1 = closure_18.filter((item) => !found.includes(item));
                closure_6(found1.map((projectId) => projectId.projectId));
                closure_10(false);
                closure_11(true);
              }
            }
            if (items.length > 0) {
              closure_21(items);
            }
          });
          const allSettledResult = Promise.allSettled(
            memo3.map((projectId) => {
              const current = ref.current;
              value = current.get(projectId.projectId);
              content = undefined;
              if (value != null) {
                content = value.content;
              }
              if (content !== content) {
                const obj = { content, nonce: createNonce.createNonce() };
                const current2 = ref.current;
                const result = current2.set(projectId.projectId, obj);
                value = obj;
              }
              return conjureSendToProject.sendConjureMessageToProject(projectId.projectId, content, value.nonce);
            }),
          );
        } else {
          callback1(first1);
        }
      }
    }, items5);
    let obj2 = {
      projects: memo,
      targetIds: memo2,
      setTargetIds: callback,
      prompt: str,
      setPrompt: tmp6[1],
      sending: first2,
      failed: tmp9[0],
      canSubmit: tmp,
      submit: callback2,
      dismiss: obj.useCallback(() => {
        closure_13.current = true;
        let tmp2 = first1.length > 0;
        if (tmp2) {
          tmp2 = !first2;
        }
        if (tmp2) {
          callback1(first1);
        }
        onDismiss();
      }, items6),
    };
    return obj2;
  } else if (memo3.length > 0) {
    let tmp16 = "" !== trimmed;
  } else {
    tmp16 = first1.length > 0;
  }
}
