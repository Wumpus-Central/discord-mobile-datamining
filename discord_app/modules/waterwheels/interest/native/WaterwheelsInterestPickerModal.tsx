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
    completePicker = function completePicker(arg0, arg1) {
      if (!ref.current) {
        const interestPickerCompletion = InterestPickerCompletion.getInterestPickerCompletion(arg0, arg1);
        ({ pick_count, pick_ids } = interestPickerCompletion);
        if (flag) {
          callback(tmp6);
        } else {
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
    tmp = closure_11();
    obj = c0(closure_2[7]);
    interestPickerGameList = obj.useInterestPickerGameList(completePicker);
    closure_1 = interestPickerGameList;
    num = 1;
    first = closure_3(
      closure_4.useState(() => {
        if (flag) {
          let picks = InterestPickerSessionStore.getPicks();
        } else {
          picks = [];
        }
        return picks;
      }),
      1,
    )[0];
    closure_2 = first;
    items = [, ,];
    items[0] = interestPickerGameList;
    items[1] = flag;
    items[2] = first;
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
            HermesBuiltin.arraySpread(interestPickerCatalog, HermesBuiltin.arraySpread(first, 0));
            const set = new Set(items);
            arr = Array.from(set);
          }
          tmp15 = arr;
        }
        return tmp15;
      }
    }, items);
    closure_3 = memo;
    obj2 = c0(closure_2[9]);
    waterwheelsDiscoverEnabled = obj2.useWaterwheelsDiscoverEnabled(completePicker);
    closure_4 = waterwheelsDiscoverEnabled;
    closure_5 = closure_4.useRef(false);
    closure_6 = closure_4.useRef(0);
    closure_7 = closure_4.useRef(0);
    callback = closure_4.useCallback((gameIds) => {
      if (!ref.current) {
        tmp.current = true;
        const result = InterestPickerActionCreators.setInterestPickerPicks(gameIds);
        const result1 = InterestPickerActionCreators.markInterestPickerSeen();
        const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated({ isDiscoverPickerCommit: true });
        ModalActionCreatorsDefault.popWithKey(c9);
        const waterwheelsDiscover = WaterwheelsDiscoverNavigation.selectWaterwheelsDiscover();
      }
    }, []);
    closure_8 = callback;
    items1 = [, ,];
    items1[0] = interestPickerGameList;
    items1[1] = waterwheelsDiscoverEnabled;
    items1[2] = flag;
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
        closure_6.current = Date.now();
        const obj2 = {
          arm: interestPickerGameList,
          catalog_version: InterestPickerCatalogs.INTEREST_PICKER_CATALOG_VERSION,
        };
        AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_PICKER_EXPOSURE, obj2);
      }
    }, items1);
    effect1 = closure_4.useEffect(() => {
      const result = flag(first[10]).setInterestPickerOpen(true);
      return () => flag(initialSelection[10]).setInterestPickerOpen(false);
    }, []);
    items2 = [];
    items2[0] = waterwheelsDiscoverEnabled;
    effect2 = closure_4.useEffect(() => {
      let current = waterwheelsDiscoverEnabled;
      if (!waterwheelsDiscoverEnabled) {
        current = ref.current;
      }
      if (!current) {
        ModalActionCreatorsDefault.popWithKey(c9);
      }
    }, items2);
    items3 = [, , ,];
    items3[0] = memo;
    items3[1] = callback;
    items3[2] = waterwheelsDiscoverEnabled;
    items3[3] = flag;
    effect3 = closure_4.useEffect(() => {
      if (tmp) {
        if (flag) {
          ModalActionCreatorsDefault.popWithKey(c9);
        } else {
          callback([]);
        }
      }
      tmp = null == memo && waterwheelsDiscoverEnabled;
    }, items3);
    if (null != memo) {
      if (null != interestPickerGameList) {
        if (waterwheelsDiscoverEnabled) {
          obj1 = { arm: null, catalog_version: null };
          obj1.arm = interestPickerGameList;
          obj1.catalog_version = tmp2(tmp3[8]).INTEREST_PICKER_CATALOG_VERSION;
          closure_9 = obj1;
          tmp13 = closure_8;
          obj7 = { style: null, children: null };
          obj7.style = tmp.screen;
          tmp15 = closure_1;
          tmp14 = closure_5;
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
          tmp17 = obj9;
          tmp18 = obj1;
          tmp16 = closure_1(tmp3[16]);
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
          obj8.initialSelection = first;
          obj8.allowEmptySelection = flag;
          obj8.onRowSeen = function onRowSeen(arg0) {
            ref3.current = Math.max(ref3.current, arg0);
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
          obj7.children = tmp13(tmp16, obj8);
          return tmp13(tmp14, obj7);
        }
      }
    }
    return null;
  }
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: metroImportDefault, ModalAnimation } = Constants);
const jsx = fn(21).jsx;
let c9 = "waterwheels-interest-picker-modal";
const WaterwheelsInterestPickerModal = "WaterwheelsInterestPickerModal";
const createStyles = fn(5306);
let closure_11 = createStyles.createStyles({ screen: { flex: 1 } });
WaterwheelsInterestPickerModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx");

export default WaterwheelsInterestPickerModal;
export const WATERWHEELS_INTEREST_PICKER_MODAL_KEY = "waterwheels-interest-picker-modal";
