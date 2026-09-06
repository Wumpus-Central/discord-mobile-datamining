// discord_app/modules/guild_onboarding/native/ChannelsAndRolesModal.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useGuildOnboardingAvailableDefault from "../useGuildOnboardingAvailable.tsx";
import ModalStackNavigatorDefault from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function ChannelsAndRolesScreen(guildId) {
  guildId = guildId.guildId;
  const defaultTab = guildId.defaultTab;
  importDefault = undefined;
  let defaultIndex;
  _slicedToArray = undefined;
  let segmentedControlState;
  let tmp = closure_10();
  let obj = guildId(defaultIndex[8]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp6 = require("useGuildOnboardingAvailable")(stateFromStores);
  importDefault = tmp6;
  let obj1 = segmentedControlState;
  if (defaultTab != null) {
    const tmp10 = _slicedToArray(segmentedControlState.useState(defaultTab), 2);
    defaultIndex = tmp10[0];
    _slicedToArray = tmp12;
    obj = { pageWidth: 0, defaultIndex, onSetActiveIndex: tmp10[1], items: null };
    const intl = tmp2(tmp3[11]).intl;
    const items1 = [intl.string(tmp2(tmp3[11]).t.F1VixV)];
    const intl2 = tmp2(tmp3[11]).intl;
    items1[1] = intl2.string(tmp2(tmp3[11]).t.MWmtj8);
    obj.items = items1.map((id) => ({ id, label: id, page: null }));
    segmentedControlState = tmp2(tmp3[10]).useSegmentedControlState(obj);
    const items2 = [tmp6, defaultIndex, segmentedControlState];
    const effect = obj1.useEffect(() => {
      let tmp = closure_1;
      if (!closure_1) {
        tmp = first !== GuildOnboardingTab.CUSTOMIZE;
      }
      if (!tmp) {
        closure_3(GuildOnboardingTab.BROWSE);
        segmentedControlState.setActiveIndex(GuildOnboardingTab.BROWSE, false);
      }
    }, items2);
    obj = { style: tmp.screen, children: null };
    let tmp17 = null;
    if (tmp6) {
      obj1 = { style: tmp.tabBar, children: null };
      const obj2 = { state: segmentedControlState };
      obj1.children = closure_8(tmp2(tmp3[12]).SegmentedControl, obj2);
      tmp17 = closure_8(View, obj1);
    }
    const items3 = [tmp17];
    if (defaultIndex === GuildOnboardingTab.CUSTOMIZE) {
      const obj3 = { setTab: tmp12, guildId };
      let tmp21 = closure_8(tmp5(tmp3[13]), obj3);
    } else {
      const obj4 = { guildId };
      tmp21 = closure_8(tmp5(tmp3[14]), obj4);
    }
    items3[1] = tmp21;
    obj.children = items3;
    return closure_9(View, obj);
  }
}
const View = fn(17).View;
const GuildOnboardingTab = fn(7101).GuildOnboardingTab;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { screen: null, tabBar: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.screen = createStyles;
createStyles.tabBar = { paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default function ChannelsAndRolesModal(arg0) {
  ({ guildId: require, defaultTab: importDefault } = arg0);
  let obj = useStateFromStores;
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp2 = useGuildOnboardingAvailableDefault(stateFromStores);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (tmp2) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj = {
    screenKey: "channelAndRolesModal",
    title: stringResult,
    render() {
      return React6(ChannelsAndRolesScreen, { guildId, defaultTab });
    },
  };
  return closure_8(ModalStackNavigatorDefault, obj);
}
