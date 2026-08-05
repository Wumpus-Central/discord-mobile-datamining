// discord_app/modules/guild_onboarding/native/ChannelsAndRolesModal.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildOnboardingTab } from "serverPromptToClientPrompt";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ModalStackNavigator } from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import { useGuildOnboardingAvailable } from "../useGuildOnboardingAvailable.tsx";

let c9;
let metroImportAll;
const require = arg1;
function ChannelsAndRolesScreen(guildId) {
  guildId = guildId.guildId;
  const defaultTab = guildId.defaultTab;
  let importDefault;
  let first;
  let callback;
  let segmentedControlState;
  let tmp = createCacheKey();
  let obj = guildId(first[8]);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId));
  const tmp6 = importDefault(first[9])(stateFromStores);
  importDefault = tmp6;
  let obj1 = segmentedControlState;
  if (defaultTab != null) {
    const tmp10 = callback(segmentedControlState.useState(defaultTab), 2);
    first = tmp10[0];
    callback = tmp12;
    obj = { pageWidth: 0, defaultIndex: null, onSetActiveIndex: null, items: null };
    obj[1] = first;
    obj[2] = tmp10[1];
    const intl = tmp2(tmp3[11]).intl;
    const items1 = [intl.string(tmp2(tmp3[11]).t.F1VixV), ];
    const intl2 = tmp2(tmp3[11]).intl;
    items1[1] = intl2.string(tmp2(tmp3[11]).t.MWmtj8);
    obj[3] = items1.map((id) => ({ id, label: id, page: null }));
    segmentedControlState = tmp2(tmp3[10]).useSegmentedControlState(obj);
    const items2 = [tmp6, first, segmentedControlState];
    const effect = obj1.useEffect(() => {
      let tmp = c1;
      if (!c1) {
        tmp = first !== outer1_7.CUSTOMIZE;
      }
      if (!tmp) {
        _undefined(outer1_7.BROWSE);
        segmentedControlState.setActiveIndex(outer1_7.BROWSE, false);
      }
    }, items2);
    obj = { style: null, children: null };
    obj[0] = tmp.screen;
    let tmp17 = null;
    if (tmp6) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.tabBar;
      const obj2 = { state: null };
      obj2[0] = segmentedControlState;
      obj1[1] = callback2(tmp2(tmp3[12]).SegmentedControl, obj2);
      tmp17 = callback2(tmp16, obj1);
    }
    const items3 = [tmp17, ];
    if (first === GuildOnboardingTab.CUSTOMIZE) {
      const obj3 = { setTab: null, guildId: null };
      obj3[0] = tmp12;
      obj3[1] = guildId;
      let tmp21 = callback2(tmp5(tmp3[13]), obj3);
    } else {
      const obj4 = { guildId: null };
      obj4[0] = guildId;
      tmp21 = callback2(tmp5(tmp3[14]), obj4);
    }
    items3[1] = tmp21;
    obj[1] = items3;
    return closure_9(View, obj);
  }
}
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { screen: null, tabBar: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_12, paddingTop: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: require("Themes").space.PX_12, paddingTop: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default function ChannelsAndRolesModal(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, defaultTab: importDefault } = arg0);
  let obj = defaultAreStatesEqual;
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(closure_0));
  const tmp2 = useGuildOnboardingAvailable(stateFromStores);
  const tmp3 = closure_8;
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (tmp2) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj = {
    screenKey: "channelAndRolesModal",
    title: stringResult,
    render() {
      return outer1_8(outer1_11, { guildId: closure_0, defaultTab: closure_1 });
    }
  };
  return tmp3(ModalStackNavigator, obj);
};