// === Module 11691: ChannelsAndRolesModal ===

// Module 11691 (ChannelsAndRolesModal)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 7445 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11073 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;

require = fn;
function ChannelsAndRolesScreen(guildId) {
  guildId = guildId.guildId;
  const defaultTab = guildId.defaultTab;
  importDefault = undefined;
  let defaultIndex;
  _slicedToArray = undefined;
  let segmentedControlState;
  let tmp = closure_10();
  const items = [GuildStore];
  const stateFromStores = guildId(defaultIndex[8]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp6 = require("useGuildOnboardingAvailable")(stateFromStores);
  importDefault = tmp6;
  if (defaultTab != null) {
    const tmp10 = _slicedToArray(segmentedControlState.useState(defaultTab), 2);
    defaultIndex = tmp10[0];
    _slicedToArray = tmp12;
    const obj3 = { pageWidth: 0, defaultIndex, onSetActiveIndex: tmp10[1], items: null };
    const intl = tmp2(tmp3[11]).intl;
    const items1 = [intl.string(tmp2(tmp3[11]).t.F1VixV), ];
    const intl2 = tmp2(tmp3[11]).intl;
    items1[1] = intl2.string(tmp2(tmp3[11]).t.MWmtj8);
    obj3.items = items1.map((id) => ({ id, label: id, page: null }));
    segmentedControlState = tmp2(tmp3[10]).useSegmentedControlState(obj3);
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
      obj5.children = closure_8(tmp2(tmp3[12]).SegmentedControl, obj6);
      tmp17 = closure_8(View, obj5);
    }
    const items3 = [tmp17, ];
    if (defaultIndex === GuildOnboardingTab.CUSTOMIZE) {
      const obj7 = { setTab: tmp12, guildId };
      let tmp21 = closure_8(tmp5(tmp3[13]), obj7);
    } else {
      const obj8 = { guildId };
      tmp21 = closure_8(tmp5(tmp3[14]), obj8);
    }
    items3[1] = tmp21;
    obj4.children = items3;
    return closure_9(View, obj4);
  }
  const obj = guildId(defaultIndex[8]);
  obj2 = segmentedControlState;
}
const View = fn(17).View;
const GuildOnboardingTab = fn(7211).GuildOnboardingTab;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { screen: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, tabBar: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tabBar = { paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default function ChannelsAndRolesModal(arg0) {
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
      return React6(ChannelsAndRolesScreen, { guildId, defaultTab });
    }
  });
};