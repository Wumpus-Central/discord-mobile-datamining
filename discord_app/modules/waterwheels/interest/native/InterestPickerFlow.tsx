// === Module 19879: InterestPickerFlow ===

// Module 19879 (InterestPickerFlow)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18712 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerFlow.tsx");

export default function InterestPickerFlow(arm) {
  arm = arm.arm;
  const onComplete = arm.onComplete;
  let getPicks;
  let first;
  const interestPickerPicks = arm(getPicks[4]).useInterestPickerPicks();
  getPicks = interestPickerPicks.getPicks;
  const setPicks = interestPickerPicks.setPicks;
  const tmp4 = setPicks(first.useState("picker"), 2);
  first = tmp4[0];
  closure_5 = tmp4[1];
  const first1 = setPicks(first.useState(arm(getPicks[5]).createInterestGuildsResource), 1)[0];
  first.useRef(false);
  first.useRef(0);
  items = [arm];
  const memo = first.useMemo(() => ({ arm, catalog_version: InterestPickerCatalogs.INTEREST_PICKER_CATALOG_VERSION }), items);
  const items1 = [first, memo];
  const effect = first.useEffect(() => {
    if ("picker" === first) {
      const _Date = Date;
      closure_8.current = Date.now();
      AnalyticsUtilsDefault.track(AnalyticEvents.WATERWHEELS_INTEREST_PICKER_EXPOSURE, memo);
    }
  }, items1);
  const items2 = [first1];
  const effect1 = first.useEffect(() => () => first1.dispose(), items2);
  if ("guilds" === first) {
    let obj2 = {
      analyticsContext: memo,
      gameIds: getPicks(),
      resource: first1,
      onBack() {
          return closure_5("picker");
        },
      onComplete() {
          const tmp = getPicks();
          if (!ref.current) {
            tmp2.current = true;
            setPicks(tmp);
            first1.dispose();
            onComplete(tmp, false);
          }
        }
    };
    let tmp13 = first1(onComplete(tmp2[8]), obj2);
    const tmp12 = onComplete(tmp2[8]);
  } else {
    const obj3 = { catalog: arm.catalog, title: null, subtitle: null, minSelection: 1, initialSelection: null, onGameToggle: null, onSearch: null, onContinue: null, onSkip: null };
    const intl = tmp(tmp2[10]).intl;
    obj3.title = intl.string(onComplete(tmp2[11])["5MUKTF"]);
    const intl2 = tmp(tmp2[10]).intl;
    obj3.subtitle = intl2.string(onComplete(tmp2[11])["z/57xV"]);
    obj3.initialSelection = getPicks();
    obj3.onGameToggle = function onGameToggle(game_id, grid_position, selected) {
      const obj2 = {};
      const merged = Object.assign(memo);
      obj2.game_id = game_id;
      obj2.grid_position = grid_position;
      obj2.selected = selected;
      return AnalyticsUtilsDefault.track(AnalyticEvents.WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE, obj2);
    };
    obj3.onSearch = function onSearch(query_length, result_count) {
      const obj2 = {};
      const merged = Object.assign(memo);
      obj2.query_length = query_length;
      obj2.result_count = result_count;
      obj2.no_results = 0 === result_count;
      return AnalyticsUtilsDefault.track(AnalyticEvents.WATERWHEELS_INTEREST_PICKER_SEARCH, obj2);
    };
    obj3.onContinue = function onContinue(pick_ids) {
      const obj2 = {};
      const merged = Object.assign(memo);
      obj2.pick_count = pick_ids.length;
      obj2.pick_ids = pick_ids;
      obj2.duration_ms = Math.max(0, Date.now() - ref2.current);
      AnalyticsUtilsDefault.track(AnalyticEvents.WATERWHEELS_INTEREST_PICKER_CONTINUE, obj2);
      setPicks(pick_ids);
      first1.setPicks(pick_ids);
      closure_5("guilds");
    };
    obj3.onSkip = function onSkip(pick_ids) {
      const obj2 = {};
      const merged = Object.assign(memo);
      obj2.pick_count = pick_ids.length;
      obj2.pick_ids = pick_ids;
      obj2.duration_ms = Math.max(0, Date.now() - ref2.current);
      AnalyticsUtilsDefault.track(AnalyticEvents.WATERWHEELS_INTEREST_PICKER_SKIP, obj2);
      if (!ref.current) {
        tmp3.current = true;
        setPicks(pick_ids);
        first1.dispose();
        onComplete(pick_ids, true);
      }
    };
    tmp13 = first1(onComplete(tmp2[9]), obj3);
    const tmp16 = onComplete(tmp2[9]);
  }
  return tmp13;
};