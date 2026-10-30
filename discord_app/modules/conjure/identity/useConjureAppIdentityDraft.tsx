// discord_app/modules/conjure/identity/useConjureAppIdentityDraft.tsx
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentityDraft.tsx");

export default function useConjureAppIdentityDraft(arg0) {
  closure_0 = arg0;
  const tmp = first(12417)(arg0);
  const items = [arg0];
  const effect = trimmed.useEffect(() => {
    const result = ConjureActionCreators.refreshPreviewApplication(closure_0);
    result.catch(() => {});
  }, items);
  const tmp3 = _slicedToArray(trimmed.useState(null), 2);
  first = tmp3[0];
  dependencyMap = tmp5;
  [str, tmp7] = trimmed.useState(null);
  _slicedToArray = tmp7;
  trimmed = str.trim();
  let tmp9 = null;
  if (trimmed !== str2.trim()) {
    tmp9 = trimmed;
  }
  trimmed = tmp9;
  const items1 = [first, tmp9];
  const memo = obj.useMemo(() => {
    if (null != first) {
      const obj2 = { icon: tmp };
      let obj = obj2;
    } else {
      obj = {};
    }
    const merged = Object.assign(obj);
    if (null != trimmed) {
      const obj4 = { description: tmp3 };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged1 = Object.assign(obj5);
    return {};
  }, items1);
  let iconURL = first;
  const callback = obj.useCallback(() => {
    closure_2(null);
    tmp7(null);
  }, []);
  if (first == null) {
    iconURL = tmp.iconURL;
  }
  return {
    iconURL,
    setIcon: tmp3[1],
    description: str,
    setDescription: tmp7,
    changes: memo,
    changed: null != first || null != tmp9,
    commit: callback,
  };
}
