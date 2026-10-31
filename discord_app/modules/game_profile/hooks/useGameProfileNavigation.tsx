// === Module 9364: useGameProfileNavigation ===

// Module 9364 (useGameProfileNavigation)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let obj = {};
obj[fn(9365).GameProfileNavTab.OVERVIEW] = fn(9340).GameProfileTrackActionActions.Overview;
obj[fn(9365).GameProfileNavTab.COMMUNITIES] = fn(9340).GameProfileTrackActionActions.Communities;
obj[fn(9365).GameProfileNavTab.COMMERCE] = fn(9340).GameProfileTrackActionActions.GameShop;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileNavigation.tsx");

export default function useGameProfileNavigation(arg0) {
  _require = arg0;
  let OVERVIEW = arg1;
  if (arg1 === undefined) {
    OVERVIEW = require("GameProfileNavTypes").GameProfileNavTab.OVERVIEW;
  }
  selectedTab = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [selectedTab, _slicedToArray] = noop.useState(OVERVIEW);
  [tmp6, c3] = noop.useState(0);
  const callback = noop.useCallback((arg0) => {
    closure_2(arg0);
    _undefined((arg0) => arg0 + 1);
  }, []);
  const items = [selectedTab, callback, arg0];
  const callback1 = noop.useCallback((arg0) => {
    if (arg0 !== first) {
      if (null != obj[arg0]) {
        closure_0(tmp2);
      }
    }
    callback(arg0);
  }, items);
  obj = { navigation: null, selectionVersion: tmp6 };
  const items1 = [selectedTab, callback1];
  obj.navigation = noop.useMemo(() => ({ selectedTab, selectTab: callback1 }), items1);
  return obj;
};