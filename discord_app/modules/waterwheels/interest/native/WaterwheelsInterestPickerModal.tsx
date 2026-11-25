// discord_app/modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import ICYMIActionCreatorsDefault from "../../../icymi/ICYMIActionCreators.tsx";
import WaterwheelsDiscoverNavigation from "../../discover/native/WaterwheelsDiscoverNavigation.tsx";
import InterestPickerActionCreators from "../InterestPickerActionCreators.tsx";
import InterestPickerCatalogs from "InterestPickerCatalogs.tsx";
import InterestPickerCompletion from "../InterestPickerCompletion.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import InterestPickerSessionStore from "../InterestPickerSessionStore.tsx";

require = fn;
class WaterwheelsInterestPickerModal {
  constructor(arg0) {
    flag = global.edit;
    if (flag === undefined) {
      flag = false;
    }
    c0 = flag;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    completePicker = function completePicker(arg0, arg1) {
      if (!picks.current) {
        const interestPickerCompletion = InterestPickerCompletion.getInterestPickerCompletion(arg0, arg1);
        ({ pick_count, pick_ids } = interestPickerCompletion);
        if (flag) {
          callback(tmp6);
        } else {
          let trackResult = constants;
          obj3 = {};
          const merged = Object.assign(obj3);
          obj3.max_row_seen = ref2.current;
          obj3.pick_count = pick_count;
          obj3.pick_ids = pick_ids;
          const _Math = Math;
          pick_count = Math.max;
          const _Date = Date;
          pick_ids = pick_count(0, Date.now() - ref.current);
          obj3.duration_ms = pick_ids;
          trackResult = AnalyticsUtilsDefault.track(
            arg1 ? trackResult.WATERWHEELS_INTEREST_PICKER_SKIP : trackResult.WATERWHEELS_INTEREST_PICKER_CONTINUE,
            obj3,
          );
          const tmp10 = arg1
            ? trackResult.WATERWHEELS_INTEREST_PICKER_SKIP
            : trackResult.WATERWHEELS_INTEREST_PICKER_CONTINUE;
        }
      }
    };
    tmp2 = c0;
    tmp3 = closure_2;
    tmp = completePicker();
    obj = c0(closure_2[7]);
    interestPickerGameList = obj.useInterestPickerGameList(closure_10);
    closure_1 = interestPickerGameList;
    num = 1;
    first = closure_3(
      closure_4.useState(() => picks.getPicks()),
      1,
    )[0];
    closure_2 = first;
    first1 = closure_3(
      closure_4.useState(() => (flag ? first : [])),
      1,
    )[0];
    closure_3 = first1;
    items = [, ,];
    items[0] = interestPickerGameList;
    items[1] = flag;
    items[2] = first1;
    memo = closure_4.useMemo(() => {
      if (null == interestPickerGameList) {
        return null;
      } else {
        const interestPickerCatalog = InterestPickerCatalogs.getInterestPickerCatalog(tmp);
        let tmp15 = null;
        if (null != interestPickerCatalog) {
          let arr = interestPickerCatalog;
          if (flag) {
            const _Array = Array;
            const _Set = Set;
            items = [];
            HermesBuiltin.arraySpread(interestPickerCatalog, HermesBuiltin.arraySpread(first1, 0));
            set = new Set(items);
            arr = Array.from(set);
          }
          tmp15 = arr;
        }
        return tmp15;
      }
    }, items);
    closure_4 = memo;
    obj2 = c0(closure_2[9]);
    waterwheelsDiscoverEnabled = obj2.useWaterwheelsDiscoverEnabled(closure_10);
    closure_5 = waterwheelsDiscoverEnabled;
    closure_6 = closure_4.useRef(false);
    closure_7 = closure_4.useRef(0);
    closure_8 = closure_4.useRef(0);
    items1 = [];
    items1[0] = first;
    callback = closure_4.useCallback((items) => {
      if (!picks.current) {
        tmp.current = true;
        const _Set = Set;
        set = new Set(first);
        const _Set2 = Set;
        const set1 = new Set(items);
        let someResult = set.size !== set1.size;
        if (!someResult) {
          items = [];
          HermesBuiltin.arraySpread(tmp13, 0);
          someResult = items.some((item) => !set.has(item));
        }
        const result = InterestPickerActionCreators.setInterestPickerPicks(items);
        const result1 = InterestPickerActionCreators.markInterestPickerSeen();
        const obj4 = { isDiscoverPickerCommit: true, clearDiscoverSnapshot: someResult };
        const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated(obj4);
        ModalActionCreatorsDefault.popWithKey(c9);
        const waterwheelsDiscover = WaterwheelsDiscoverNavigation.selectWaterwheelsDiscover();
      }
    }, items1);
    closure_9 = callback;
    items2 = [, ,];
    items2[0] = interestPickerGameList;
    items2[1] = waterwheelsDiscoverEnabled;
    items2[2] = flag;
    effect = closure_4.useEffect(() => {
      let tmp = !flag;
      if (!flag) {
        tmp = null != interestPickerGameList;
      }
      if (tmp) {
        tmp = waterwheelsDiscoverEnabled;
      }
      if (tmp) {
        const _Date = Date;
        closure_7.current = Date.now();
        const obj2 = {
          arm: interestPickerGameList,
          catalog_version: InterestPickerCatalogs.INTEREST_PICKER_CATALOG_VERSION,
        };
        AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_PICKER_EXPOSURE, obj2);
      }
    }, items2);
    effect1 = closure_4.useEffect(() => {
      const result = flag(first[10]).setInterestPickerOpen(true);
      return () => flag(first[10]).setInterestPickerOpen(false);
    }, []);
    items3 = [];
    items3[0] = waterwheelsDiscoverEnabled;
    effect2 = closure_4.useEffect(() => {
      let current = waterwheelsDiscoverEnabled;
      if (!waterwheelsDiscoverEnabled) {
        current = picks.current;
      }
      if (!current) {
        ModalActionCreatorsDefault.popWithKey(c9);
      }
    }, items3);
    items4 = [, , ,];
    items4[0] = memo;
    items4[1] = callback;
    items4[2] = waterwheelsDiscoverEnabled;
    items4[3] = flag;
    effect3 = closure_4.useEffect(() => {
      if (tmp) {
        if (flag) {
          ModalActionCreatorsDefault.popWithKey(c9);
        } else {
          callback([]);
        }
      }
      tmp = null == memo && waterwheelsDiscoverEnabled;
    }, items4);
    if (null != memo) {
      if (null != interestPickerGameList) {
        if (waterwheelsDiscoverEnabled) {
          obj1 = { arm: null, catalog_version: null };
          obj1.arm = interestPickerGameList;
          obj1.catalog_version = tmp2(tmp3[8]).INTEREST_PICKER_CATALOG_VERSION;
          closure_10 = obj1;
          tmp14 = closure_8;
          obj7 = { style: null, children: null };
          obj7.style = tmp.screen;
          tmp16 = closure_1;
          tmp15 = closure_5;
          obj8 = {
            catalog: null,
            performanceContext: null,
            title: null,
            subtitle: null,
            minSelection: null,
            initialSelection: null,
            allowEmptySelection: null,
            onRowSeen: null,
            onGameToggle: null,
            onSearch: null,
            onContinue: null,
            onSkip: null,
          };
          obj8.catalog = memo;
          obj9 = {};
          tmp18 = obj9;
          tmp19 = obj1;
          tmp17 = closure_1(tmp3[16]);
          merged = Object.assign(obj1);
          str = "modal";
          obj9.surface = "modal";
          obj8.performanceContext = obj9;
          intl = tmp2(tmp3[17]).intl;
          obj8.title = intl.string(closure_1(tmp3[18])["5MUKTF"]);
          intl2 = tmp2(tmp3[17]).intl;
          obj8.subtitle = intl2.string(closure_1(tmp3[18])["z/57xV"]);
          if (flag) {
            num = 0;
          }
          obj8.minSelection = num;
          obj8.initialSelection = first1;
          obj8.allowEmptySelection = flag;
          obj8.onRowSeen = function onRowSeen(arg0) {
            ref2.current = Math.max(ref2.current, arg0);
          };
          obj8.onGameToggle = function onGameToggle(game_id, grid_position, selected) {
            if (!flag) {
              const obj2 = {};
              const merged = Object.assign(obj3);
              obj2.game_id = game_id;
              obj2.grid_position = grid_position;
              obj2.selected = selected;
              AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE, obj2);
            }
          };
          obj8.onSearch = function onSearch(query_length, result_count) {
            if (!flag) {
              const obj2 = {};
              const merged = Object.assign(obj3);
              obj2.query_length = query_length;
              obj2.result_count = result_count;
              obj2.no_results = 0 === result_count;
              AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_PICKER_SEARCH, obj2);
            }
          };
          obj8.onContinue = function onContinue(arg0) {
            completePicker(arg0, false);
          };
          obj8.onSkip = function onSkip(arg0) {
            if (flag) {
              ModalActionCreatorsDefault.popWithKey(c9);
            } else {
              completePicker(arg0, true);
            }
          };
          obj7.children = tmp14(tmp17, obj8);
          return tmp14(tmp15, obj7);
        }
      }
    }
    return null;
  }
}
const View = fn(17).View;
const Constants = fn(1071);
({ AnalyticEvents: metroImportDefault, ModalAnimation } = Constants);
const jsx = fn(21).jsx;
let c9 = "waterwheels-interest-picker-modal";
const WaterwheelsInterestPickerModal = "WaterwheelsInterestPickerModal";
const createStyles = fn(5012);
let closure_11 = createStyles.createStyles({ screen: { flex: 1 } });
WaterwheelsInterestPickerModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx");

export default WaterwheelsInterestPickerModal;
export const WATERWHEELS_INTEREST_PICKER_MODAL_KEY = "waterwheels-interest-picker-modal";
