// === Module 18979: WaterwheelsInterestPickerModal ===

// Module 18979 (WaterwheelsInterestPickerModal)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10150 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 18892 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 18978 */;
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18981 */;
import InterestPickerCompletion from "InterestPickerCompletion" /* 18982 */;
import noop from "module_19" /* 19 */;

require = fn;
class WaterwheelsInterestPickerModal {
  constructor() {
    completePicker = function completePicker(arg0, arg1) {
      if (!ref.current) {
        const interestPickerCompletion = InterestPickerCompletion.getInterestPickerCompletion(arg0, arg1);
        ({ pick_count, pick_ids } = interestPickerCompletion);
        let trackResult = constants;
        obj3 = {};
        const merged = Object.assign(obj3);
        obj3.max_row_seen = ref3.current;
        obj3.pick_count = pick_count;
        obj3.pick_ids = pick_ids;
        const _Math = Math;
        pick_count = Math.max;
        const _Date = Date;
        pick_ids = pick_count(0, Date.now() - ref2.current);
        obj3.duration_ms = pick_ids;
        trackResult = AnalyticsUtilsDefault.track(arg1 ? trackResult.WATERWHEELS_INTEREST_PICKER_SKIP : trackResult.WATERWHEELS_INTEREST_PICKER_CONTINUE, obj3);
        callback(interestPickerCompletion.picks);
        const tmp8 = arg1 ? trackResult.WATERWHEELS_INTEREST_PICKER_SKIP : trackResult.WATERWHEELS_INTEREST_PICKER_CONTINUE;
      }
    };
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp = closure_9();
    obj = closure_0(closure_2[5]);
    interestPickerGameList = obj.useInterestPickerGameList(completePicker);
    closure_0 = interestPickerGameList;
    items = [];
    items[0] = interestPickerGameList;
    memo = closure_3.useMemo(() => {
      let interestPickerCatalog = null;
      if (null != interestPickerGameList) {
        interestPickerCatalog = InterestPickerCatalogs.getInterestPickerCatalog(tmp);
      }
      return interestPickerCatalog;
    }, items);
    closure_1 = memo;
    obj2 = closure_0(closure_2[7]);
    waterwheelsDiscoverEnabled = obj2.useWaterwheelsDiscoverEnabled(completePicker);
    closure_2 = waterwheelsDiscoverEnabled;
    closure_3 = closure_3.useRef(false);
    closure_4 = closure_3.useRef(0);
    closure_5 = closure_3.useRef(0);
    callback = closure_3.useCallback((gameIds) => {
      if (!ref.current) {
        tmp.current = true;
        const result = InterestPickerActionCreators.setInterestPickerPicks(gameIds);
        const result1 = InterestPickerActionCreators.markInterestPickerSeen();
        const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated({ isDiscoverPickerCommit: true });
        ModalActionCreatorsDefault.popWithKey(c7);
        const waterwheelsDiscover = WaterwheelsDiscoverNavigation.selectWaterwheelsDiscover();
      }
    }, []);
    closure_6 = callback;
    items1 = [, ];
    items1[0] = interestPickerGameList;
    items1[1] = waterwheelsDiscoverEnabled;
    effect = closure_3.useEffect(() => {
      let tmp2 = null != interestPickerGameList;
      if (tmp2) {
        tmp2 = waterwheelsDiscoverEnabled;
      }
      if (tmp2) {
        const _Date = Date;
        closure_4.current = Date.now();
        const obj2 = { arm: interestPickerGameList, catalog_version: InterestPickerCatalogs.INTEREST_PICKER_CATALOG_VERSION };
        AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_PICKER_EXPOSURE, obj2);
      }
    }, items1);
    effect1 = closure_3.useEffect(() => {
      const result = interestPickerGameList(waterwheelsDiscoverEnabled[8]).setInterestPickerOpen(true);
      return () => interestPickerGameList(waterwheelsDiscoverEnabled[8]).setInterestPickerOpen(false);
    }, []);
    items2 = [];
    items2[0] = waterwheelsDiscoverEnabled;
    effect2 = closure_3.useEffect(() => {
      let current = waterwheelsDiscoverEnabled;
      if (!waterwheelsDiscoverEnabled) {
        current = ref.current;
      }
      if (!current) {
        ModalActionCreatorsDefault.popWithKey(c7);
      }
    }, items2);
    items3 = [, , ];
    items3[0] = memo;
    items3[1] = callback;
    items3[2] = waterwheelsDiscoverEnabled;
    effect3 = closure_3.useEffect(() => {
      if (tmp) {
        callback([]);
      }
      tmp = null == memo && waterwheelsDiscoverEnabled;
    }, items3);
    if (null != memo) {
      if (waterwheelsDiscoverEnabled) {
        obj1 = { arm: null, catalog_version: null };
        obj1.arm = interestPickerGameList;
        obj1.catalog_version = tmp2(tmp3[6]).INTEREST_PICKER_CATALOG_VERSION;
        closure_7 = obj1;
        tmp12 = closure_6;
        tmp13 = closure_4;
        obj6 = { style: null, children: null };
        obj6.style = tmp.screen;
        tmp14 = closure_1;
        obj7 = { catalog: null, title: null, subtitle: null, minSelection: 1, onRowSeen: null, onGameToggle: null, onSearch: null, onContinue: null, onSkip: null };
        obj7.catalog = memo;
        tmp15 = closure_1(tmp3[14]);
        intl = tmp2(tmp3[15]).intl;
        obj7.title = intl.string(closure_1(tmp3[16])["5MUKTF"]);
        intl2 = tmp2(tmp3[15]).intl;
        obj7.subtitle = intl2.string(closure_1(tmp3[16])["z/57xV"]);
        obj7.onRowSeen = function onRowSeen(arg0) {
          ref3.current = Math.max(ref3.current, arg0);
        };
        obj7.onGameToggle = function onGameToggle(game_id, grid_position, selected) {
          const obj2 = {};
          const merged = Object.assign(obj3);
          obj2.game_id = game_id;
          obj2.grid_position = grid_position;
          obj2.selected = selected;
          return AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE, obj2);
        };
        obj7.onSearch = function onSearch(query_length, result_count) {
          const obj2 = {};
          const merged = Object.assign(obj3);
          obj2.query_length = query_length;
          obj2.result_count = result_count;
          obj2.no_results = 0 === result_count;
          return AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_PICKER_SEARCH, obj2);
        };
        obj7.onContinue = function onContinue(arg0) {
          completePicker(arg0, false);
        };
        obj7.onSkip = function onSkip(arg0) {
          completePicker(arg0, true);
        };
        obj6.children = closure_6(tmp15, obj7);
        return closure_6(closure_4, obj6);
      }
    }
    return null;
  }
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, ModalAnimation } = Constants);
const jsx = fn(21).jsx;
let c7 = "waterwheels-interest-picker-modal";
const WaterwheelsInterestPickerModal = "WaterwheelsInterestPickerModal";
const createStyles = fn(5243);
const React6 = createStyles.createStyles({ screen: { flex: 1 } });
WaterwheelsInterestPickerModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx");

export default WaterwheelsInterestPickerModal;
export const WATERWHEELS_INTEREST_PICKER_MODAL_KEY = "waterwheels-interest-picker-modal";