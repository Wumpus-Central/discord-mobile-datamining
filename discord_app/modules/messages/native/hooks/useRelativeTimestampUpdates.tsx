// discord_app/modules/messages/native/hooks/useRelativeTimestampUpdates.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import MarkupTypes from "../../../markup/MarkupTypes.tsx";
import TimestampUtils from "../../../markup/TimestampUtils.tsx";
import useFormattedTimestamp from "../../../markup/useFormattedTimestamp.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function findRelativeTimestamps(type) {
  if (items === undefined) {
    items = [];
  }
  if (typeof type === "object") {
    if (null != type) {
      if (type.type !== MarkupTypes.AST_KEY.TIMESTAMP) {
        const _Object = Object;
        const values = Object.values(type);
        const tmp5 = values[Symbol.iterator]();
        while (tmp5 !== undefined) {
          let tmp10 = findRelativeTimestamps(tmp7, items);
          continue;
        }
      } else if ("R" === type.format) {
        items.push(type);
      }
    }
  }
  return items;
}
function getRelativeTimestamps(type) {
  value = weakMap.get(type);
  if (null == value) {
    const tmp3 = findRelativeTimestamps(type);
    const result = weakMap.set(type, tmp3);
    value = tmp3;
  }
  return value;
}
function getRowId(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type === constants2.MESSAGE) {
    const message = type.message;
    let id;
    if (message != null) {
      id = message.id;
    }
    let context = id;
  } else {
    let revealed;
    if (type != null) {
      revealed = type.revealed;
    }
    if (revealed) {
      context = type.button.action.context;
    }
  }
  return context;
}
const RowGeneratorConstants = fn(8378);
({ Changeset: closure_4, RowType: hasOwnProperty } = RowGeneratorConstants);
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/hooks/useRelativeTimestampUpdates.tsx");

export default function useRelativeTimestampUpdates(isActive) {
  isActive = isActive.isActive;
  const chatManager = isActive.chatManager;
  noop = undefined;
  dependencyMap = noop.useRef({ first: -1, last: -1 });
  noop = noop.useRef(null);
  noop.useRef(undefined);
  const tmp = chatManager(7131)(isActive.onRefresh);
  closure_5 = tmp;
  function update() {
    clearTimeout(ref3.current);
    const previousRows = chatManager.getPreviousRows();
    closure_3.current = previousRows;
    if (false !== isActive) {
      ({ first, last } = ref.current);
      const _Date = Date;
      const timestamp = Date.now();
      let num = Infinity;
      const items = [];
      if (last >= 0) {
        let tmp39 = last;
        if (last <= first) {
          while (true) {
            let tmp3 = previousRows[tmp39];
            let tmp5 = getRowId(tmp3);
            if (null != tmp5) {
              let items1 = [];
              let tmp56 = getRelativeTimestamps(tmp3);
              for (const item10022 of tmp56) {
                value = weakMap1.get(item10022);
                if (value != null) {
                  let tmp17 = value;
                  if (value.dueAt <= timestamp) {
                    let TIMESTAMP_FORMATS = TimestampUtils.TIMESTAMP_FORMATS;
                    let RResult = TIMESTAMP_FORMATS.R(item10022.parsed);
                    if (RResult !== item10022.formatted) {
                      item10022.formatted = tmp62;
                      let _Set = Set;
                      let tmp21 = new.target;
                      let tmp22 = new.target;
                      let set = new Set();
                      tmp17.shownIn = set;
                    }
                    let tmp58Result = useFormattedTimestamp;
                    tmp17.dueAt = timestamp + tmp58Result.getTimestampUpdateInterval(item10022.parsed, timestamp);
                    let result = weakMap1.set(item10022, tmp17);
                  }
                  let _Math = Math;
                  num = Math.min(num, tmp17.dueAt);
                  let shownIn = tmp17.shownIn;
                  if (!shownIn.has(tmp5)) {
                    let arr = items1.push(tmp17.shownIn);
                  }
                  continue;
                } else {
                  let obj2 = { dueAt: timestamp, shownIn: null };
                  if (tmp3.changeType === constants.NOOP) {
                    let items2 = [];
                  } else {
                    items2 = [tmp5];
                  }
                  let tmp11 = new.target;
                  let tmp12 = new.target;
                  let set1 = new Set(items2);
                  obj2.shownIn = set1;
                }
              }
              if (items1.length > 0) {
                let obj3 = { id: tmp5, row: null, labelSetsMissingRow: null };
                let obj4 = {};
                let merged = Object.assign(tmp3);
                obj4.index = tmp39;
                obj4.changeType = constants.UPDATE;
                obj3.row = obj4;
                obj3.labelSetsMissingRow = items1;
                let arr2 = items.push(obj3);
              }
            }
            let sum = tmp39 + 1;
            if (last >= 0) {
              tmp39 = sum;
            }
          }
        }
      }
      if (items.length > 0) {
        if (closure_5(items.map((row) => row.row))) {
          for (const item10101 of items) {
            ({ id, labelSetsMissingRow } = item10101);
            for (const item10108 of labelSetsMissingRow) {
              let addResult = item10108.add(id);
              continue;
            }
            continue;
          }
        } else {
          const _Math2 = Math;
          num = Math.min(num, timestamp + DurationsDefault.Millis.SECOND);
        }
      }
      if (num < Infinity) {
        const _setTimeout = setTimeout;
        ref3.current = setTimeout(update, num - timestamp);
      }
    }
  }
  let items = [isActive, chatManager, tmp];
  const callback = noop.useCallback(update, items);
  let items1 = [callback];
  const effect = noop.useEffect(() => {
    callback();
    return () => clearTimeout(ref.current);
  }, items1);
  const effect1 = noop.useEffect(() => {
    if (ref2.current !== chatManager.getPreviousRows()) {
      callback();
    }
  });
  let items2 = [callback];
  return noop.useCallback((arg0, arg1) => {
    let num = arg0;
    if (arg0 == null) {
      num = -1;
    }
    let num2 = arg1;
    if (arg1 == null) {
      num2 = -1;
    }
    if (!tmp2) {
      const obj = { first: num, last: num2 };
      ref.current = obj;
      callback();
    }
    tmp2 = num === ref.current.first && num2 === ref.current.last;
  }, items2);
}
