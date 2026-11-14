// discord_app/modules/user_profile/hooks/useStableAddableWidgets.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useStableAddableWidgets.tsx");

export default function useStableAddableWidgets(arg0) {
  const arr = first(set[2])();
  let tmp = _slicedToArray(noop.useState(arr), 2);
  first = tmp[0];
  const found = arr.filter((getUniqueKey) => !set.has(getUniqueKey.getUniqueKey()));
  if (found.length > 0) {
    items = [];
    HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(first, 0));
    tmp[1](items);
  }
  const items1 = [first, arg0];
  return noop.useMemo(() => {
    if (null != length) {
      if (0 !== length.length) {
        items = [];
        HermesBuiltin.arraySpread(
          first.filter((applicationId) => {
            let tmp = null != length;
            if (tmp) {
              tmp =
                applicationId instanceof closure_0(set[3]).ApplicationWidget &&
                length.includes(applicationId.applicationId);
              const tmp5 =
                applicationId instanceof closure_0(set[3]).ApplicationWidget &&
                length.includes(applicationId.applicationId);
            }
            return !tmp;
          }),
          HermesBuiltin.arraySpread(
            first.filter(function isHighlighted(applicationId) {
              let tmp = null != length;
              if (tmp) {
                tmp =
                  applicationId instanceof closure_0(set[3]).ApplicationWidget &&
                  length.includes(applicationId.applicationId);
                const tmp5 =
                  applicationId instanceof closure_0(set[3]).ApplicationWidget &&
                  length.includes(applicationId.applicationId);
              }
              return tmp;
            }),
            0,
          ),
        );
        return items;
      }
    }
    return first;
  }, items1);
}
