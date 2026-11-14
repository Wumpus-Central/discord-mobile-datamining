// === Module 10223: selectDiscoverSnapshot ===

// Module 10223 (selectDiscoverSnapshot)
import ICYMITypes from "ICYMITypes" /* 10210 */;
import parseWaterwheelsCard from "parseWaterwheelsCard" /* 10224 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/selectDiscoverSnapshot.tsx");

export function selectDiscoverSnapshot(items, fn) {
  items = [];
  const set = new Set();
  const entries = items.entries();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (tmp7.type === ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM) {
      let tmp9Result = parseWaterwheelsCard;
      let data = tmp7.data;
      let item;
      if (data != null) {
        item = data.item;
      }
      let parseWaterwheelsCardResult = tmp9Result.parseWaterwheelsCard(item);
      let tmp13 = parseWaterwheelsCardResult;
      if (parseWaterwheelsCardResult.ok) {
        if (!set.has(tmp13.card.id)) {
          let addResult = set.add(tmp13.card.id);
          let obj = {};
          let merged = Object.assign(tmp7);
          obj.brokerPosition = tmp6;
          obj.card = tmp13.card;
          let tmp21 = obj;
          let arr = items.push(obj);
          if (fn != null) {
            let tmp25 = fn(tmp7, tmp21);
          }
        }
      }
    }
    continue;
  }
  return items;
}