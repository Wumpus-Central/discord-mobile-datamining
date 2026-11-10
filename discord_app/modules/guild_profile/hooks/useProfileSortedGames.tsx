// === Module 15239: useProfileSortedGames ===

// Module 15239 (useProfileSortedGames)
import applyDefault from "apply" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const GuildProfileConstants = fn(9384);
({ HOISTED_SEARCH_GAME_IDS: closure_4, HOISTED_SEARCH_GAME_IDS_BY_PRIORITY: hasOwnProperty } = GuildProfileConstants);
let closure_6 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/hooks/useProfileSortedGames.tsx");

export function useProfileSortedGames(surface) {
  ({ query, selectedGameIds } = surface);
  importDefault = undefined;
  let memo1;
  let baseSort;
  let results;
  let memo4;
  items = [selectedGameIds];
  const memo = baseSort.useMemo(() => {
    items = [...closure_2_4];
    let tmp2 = selectedGameIds;
    if (selectedGameIds == null) {
      tmp2 = closure_6;
    }
    HermesBuiltin.arraySpread(tmp2, tmp);
    const items1 = [...new Set(items)];
    return items1;
  }, items);
  let tmp3 = require("useGameRecords")(memo);
  importDefault = tmp3;
  let tmp4 = require("useAreGamesLoading")(memo);
  let items1 = [tmp3];
  memo1 = baseSort.useMemo(() => new Map(closure_1.map((id) => {
    items = [id.id, id];
    return items;
  })), items1);
  const items2 = [memo1];
  let memo2 = baseSort.useMemo(() => {
    const mapped = applyDefault(args).map((item) => memo1.get(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => selectedGameIds(memo1[6]).isGameAllowedInGameWidgets(item));
    const mapped1 = found1.map((id) => ({ id: id.id, value: id.id, label: id.name }));
    const arr = applyDefault(args);
    const sortByResult = mapped1.sortBy((value) => {
      let num = memo4.get(value.value);
      if (num == null) {
        num = 0;
      }
      return num;
    });
    return mapped1.sortBy((value) => {
      let num = memo4.get(value.value);
      if (num == null) {
        num = 0;
      }
      return num;
    }).reverse().value();
  }, items2);
  baseSort = baseSort.useCallback((item, item2) => {
    let num = memo4.get(item2.item.value);
    if (num == null) {
      num = 0;
    }
    let num2 = memo4.get(item.item.value);
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  }, []);
  const items3 = [baseSort];
  let num;
  const memo3 = baseSort.useMemo(() => ({ baseSort, keys: ["label"] }), items3);
  if (query != null) {
    num = query.trim().length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp11 = query;
  if (query == null) {
    tmp11 = null;
  }
  let obj2 = selectedGameIds(memo1[7]);
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(tmp11, { surface: surface.surface, filterGroup: selectedGameIds(memo1[8]).GameSearchFilterGroup.DEFAULT });
  results = debouncedGameAutocomplete.results;
  const items4 = [results];
  ({ isLoading, onSelect, endSession } = debouncedGameAutocomplete);
  memo4 = obj.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter((item) => selectedGameIds(memo1[9]).isGameAutocompleteResultAllowedInGameWidgets(item));
    return new Set(found.map((id) => id.id));
  }, items4);
  const items5 = [results, memo4, selectedGameIds, memo1];
  const items6 = [tmp3, results];
  const memo5 = obj.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter((id) => set.has(id.id));
    const items1 = [...found.map((id) => ({ id: id.id, value: id.id, label: id.name }))];
    let arr4 = selectedGameIds;
    if (selectedGameIds == null) {
      arr4 = closure_6;
    }
    const found1 = arr4.filter((item) => !set.has(item));
    HermesBuiltin.arraySpread(found1.map((id) => {
      const obj = { id, value: id, label: null };
      value = memo1.get(id);
      let str;
      if (value != null) {
        str = value.name;
      }
      if (str == null) {
        str = "";
      }
      obj.label = str;
      return obj;
    }), tmp);
    return items1;
  }, items5);
  const items7 = [memo4];
  const memo6 = obj.useMemo(() => {
    const map = new Map();
    const iter = closure_1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let media = nextResult.media;
      let icon1;
      let tmp3 = nextResult;
      if (media != null) {
        icon1 = media.icon;
      }
      let obj = { icon: icon1, platformAvailability: null };
      obj.platformAvailability = tmp3.platformAvailability;
      let result = map.set(nextResult.id, obj);
      continue;
    }
    items = results;
    if (results == null) {
      items = [];
    }
    for (const item10032 of items) {
      value = map.get(item10032.id);
      let icon = item10032.icon;
      if (icon == null) {
        let icon2;
        if (value != null) {
          icon2 = value.icon;
        }
        icon = icon2;
      }
      let obj2 = { icon, platformAvailability: null };
      let platformAvailability = item10032.platformAvailability;
      if (platformAvailability == null) {
        let platformAvailability1;
        if (value != null) {
          platformAvailability1 = value.platformAvailability;
        }
        platformAvailability = platformAvailability1;
      }
      obj2.platformAvailability = platformAvailability;
      let result1 = map.set(item10032.id, obj2);
      continue;
    }
    return map;
  }, items6);
  const callback1 = obj.useCallback((arr) => arr.filter((value) => set.has(value.value)), items7);
  if (num > 0) {
    memo2 = memo5;
  }
  const obj4 = { options: memo2, matchSorterOptions: memo3, customMatchSorter: null, metadataByGameId: null, isLoading: null, onSelect: null, endSession: null };
  let tmp17;
  if (num > 0) {
    tmp17 = callback1;
  }
  obj4.customMatchSorter = tmp17;
  obj4.metadataByGameId = memo6;
  if (num > 0) {
    tmp4 = isLoading;
  }
  obj4.isLoading = tmp4;
  obj4.onSelect = onSelect;
  obj4.endSession = endSession;
  return obj4;
}