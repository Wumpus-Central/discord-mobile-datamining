// === Module 10664: ChannelsAndRolesModal ===

// Module 10664 (ChannelsAndRolesModal)
import useStateFromStores from "useStateFromStores" /* 573 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 7038 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 9606 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;

require = fn;
const View = fn(17).View;
const GuildOnboardingTab = fn(6786).GuildOnboardingTab;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { screen: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, tabBar: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tabBar = { paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelsAndRolesScreen(guildId) {
  const cResult = guildId(first1[9]).c(22);
  guildId = guildId.guildId;
  const defaultTab = guildId.defaultTab;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  const obj = guildId(first1[9]);
  const stateFromStores = guildId(first1[10]).useStateFromStores(first, I);
  const tmp9 = require("useGuildOnboardingAvailable")(stateFromStores);
  importDefault = tmp9;
  if (defaultTab != null) {
    class I {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    [first1] = segmentedControlState.useState(defaultTab);
    _slicedToArray = tmp15;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          return closure_6.getGuild(guildId);
        }
      }
      const items1 = [obj3.string(tmp(tmp2[12]).t.F1VixV), ];
      const intl = tmp(tmp2[12]).intl;
      items1[1] = intl.string(tmp(tmp2[12]).t.MWmtj8);
      const mapped = items1.map((id) => ({ id, label: id, page: null }));
      cResult[3] = mapped;
      const tmp16 = mapped;
    } else {
      class I {
        constructor() {
          return closure_6.getGuild(guildId);
        }
      }
    }
    if (cResult[4] !== first1) {
      class I {
        constructor() {
          return closure_6.getGuild(guildId);
        }
      }
      tmp19[1] = first1;
      tmp19[2] = tmp15;
      tmp19[3] = tmp16;
      cResult[4] = first1;
      cResult[5] = tmp19;
    } else {
      class I {
        constructor() {
          return closure_6.getGuild(guildId);
        }
      }
    }
    segmentedControlState = tmp(tmp2[13]).useSegmentedControlState(tmp19);
    if (cResult[6] === tmp9) {
      class I {
        constructor() {
          return closure_6.getGuild(guildId);
        }
      }
    }
    const fn = function x() {
      let tmp = closure_1;
      if (!closure_1) {
        tmp = first1 !== GuildOnboardingTab.CUSTOMIZE;
      }
      if (!tmp) {
        closure_3(GuildOnboardingTab.BROWSE);
        segmentedControlState.setActiveIndex(GuildOnboardingTab.BROWSE, false);
      }
    };
    const items2 = [tmp9, first1, segmentedControlState];
    cResult[6] = tmp9;
    cResult[7] = segmentedControlState;
    cResult[8] = first1;
    cResult[9] = fn;
    cResult[10] = items2;
    const tmpResult2 = tmp(tmp2[13]);
  } else {
    class I {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  const tmpResult = guildId(first1[10]);
}) : (function ChannelsAndRolesScreen(guildId) {
  guildId = guildId.guildId;
  const defaultTab = guildId.defaultTab;
  importDefault = undefined;
  let defaultIndex;
  _slicedToArray = undefined;
  let segmentedControlState;
  let tmp = closure_10();
  const items = [GuildStore];
  const stateFromStores = guildId(defaultIndex[10]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp6 = require("useGuildOnboardingAvailable")(stateFromStores);
  importDefault = tmp6;
  if (defaultTab != null) {
    const tmp10 = _slicedToArray(segmentedControlState.useState(defaultTab), 2);
    defaultIndex = tmp10[0];
    _slicedToArray = tmp12;
    const obj3 = { pageWidth: 0, defaultIndex, onSetActiveIndex: tmp10[1], items: null };
    const intl = tmp2(tmp3[12]).intl;
    const items1 = [intl.string(tmp2(tmp3[12]).t.F1VixV), ];
    const intl2 = tmp2(tmp3[12]).intl;
    items1[1] = intl2.string(tmp2(tmp3[12]).t.MWmtj8);
    obj3.items = items1.map((id) => ({ id, label: id, page: null }));
    segmentedControlState = tmp2(tmp3[13]).useSegmentedControlState(obj3);
    const items2 = [tmp6, defaultIndex, segmentedControlState];
    const effect = obj2.useEffect(() => {
      let tmp = closure_1;
      if (!closure_1) {
        tmp = first !== GuildOnboardingTab.CUSTOMIZE;
      }
      if (!tmp) {
        closure_3(GuildOnboardingTab.BROWSE);
        segmentedControlState.setActiveIndex(GuildOnboardingTab.BROWSE, false);
      }
    }, items2);
    const obj4 = { style: tmp.screen, children: null };
    let tmp17 = null;
    if (tmp6) {
      const obj5 = { style: tmp.tabBar, children: null };
      const obj6 = { state: segmentedControlState };
      obj5.children = closure_8(tmp2(tmp3[14]).SegmentedControl, obj6);
      tmp17 = closure_8(View, obj5);
    }
    const items3 = [tmp17, ];
    if (defaultIndex === GuildOnboardingTab.CUSTOMIZE) {
      const obj7 = { setTab: tmp12, guildId };
      let tmp21 = closure_8(tmp5(tmp3[15]), obj7);
    } else {
      const obj8 = { guildId };
      tmp21 = closure_8(tmp5(tmp3[16]), obj8);
    }
    items3[1] = tmp21;
    obj4.children = items3;
    return closure_9(View, obj4);
  }
  const obj = guildId(defaultIndex[10]);
  obj2 = segmentedControlState;
});
ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelsAndRolesModal(guildId) {
  const cResult = guildId(576).c(11);
  guildId = guildId.guildId;
  const defaultTab = guildId.defaultTab;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(576);
  const stateFromStores = guildId(573).useStateFromStores(first, tmp6);
  const tmp9 = defaultTab(7038)(stateFromStores);
  if (cResult[3] !== tmp9) {
    const intl = tmp(1126).intl;
    const string = intl.string;
    let h9mGOP = tmp(1126).t;
    if (tmp9) {
      h9mGOP = h9mGOP.h9mGOP;
      let stringResult = string(h9mGOP);
    } else {
      stringResult = string(h9mGOP.et6wav);
    }
    cResult[3] = tmp9;
    cResult[4] = stringResult;
  } else {
    if (cResult[5] === defaultTab) {
      if (cResult[6] === guildId) {
        let tmp13 = cResult[7];
      }
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp13) {
          let tmp14 = cResult[10];
        }
        return tmp14;
      }
      class I {
        constructor() {
          obj = { guildId, defaultTab };
          return jsx(ChannelsAndRolesScreen, obj);
        }
      }
      const obj2 = { screenKey: "channelAndRolesModal", title: tmp10, render: tmp13 };
      const tmp15 = closure_8(tmp8(9606), obj2);
      cResult[8] = tmp10;
      cResult[9] = tmp13;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
    class I {
      constructor() {
        obj = { guildId, defaultTab };
        return jsx(ChannelsAndRolesScreen, obj);
      }
    }
    cResult[5] = defaultTab;
    cResult[6] = guildId;
    cResult[7] = I;
    tmp13 = I;
  }
  tmp8 = defaultTab;
  const tmpResult = guildId(573);
}) : (function ChannelsAndRolesModal(arg0) {
  ({ guildId: require, defaultTab: importDefault } = arg0);
  const items = [GuildStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp2 = useGuildOnboardingAvailableDefault(stateFromStores);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (tmp2) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  return closure_8(ModalStackNavigatorDefault, {
    screenKey: "channelAndRolesModal",
    title: stringResult,
    render() {
      return closure_2_8(closure_11, { guildId, defaultTab });
    }
  });
});