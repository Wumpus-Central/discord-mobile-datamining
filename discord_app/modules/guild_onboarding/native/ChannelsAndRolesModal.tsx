// discord_app/modules/guild_onboarding/native/ChannelsAndRolesModal.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import useGuildOnboardingAvailableDefault from "../useGuildOnboardingAvailable.tsx";
import _modDef10661 from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/GuildStore.tsx";
import { GuildOnboardingTab } from "../GuildOnboardingPromptsConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ChannelsAndRolesScreen(guildId) {
  guildId = guildId.guildId;
  const defaultTab = guildId.defaultTab;
  importDefault = undefined;
  let first;
  let callback;
  let segmentedControlState;
  let tmp = callback3();
  let obj = guildId(first[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(guildId));
  const tmp6 = importDefault(first[9])(stateFromStores);
  importDefault = tmp6;
  obj1 = segmentedControlState;
  if (defaultTab != null) {
    const tmp10 = callback(segmentedControlState.useState(defaultTab), 2);
    first = tmp10[0];
    callback = tmp12;
    obj = { pageWidth: 0, defaultIndex: null, onSetActiveIndex: null, items: null };
    obj[1] = first;
    obj[2] = tmp10[1];
    const intl = tmp2(tmp3[11]).intl;
    const items1 = [intl.string(tmp2(tmp3[11]).t.F1VixV)];
    const intl2 = tmp2(tmp3[11]).intl;
    items1[1] = intl2.string(tmp2(tmp3[11]).t.MWmtj8);
    obj[3] = items1.map((id) => ({ id, label: id, page: null }));
    segmentedControlState = tmp2(tmp3[10]).useSegmentedControlState(obj);
    const items2 = [tmp6, first, segmentedControlState];
    const effect = obj1.useEffect(() => {
      let tmp = closure_1;
      if (!closure_1) {
        tmp = first !== closure_1_7.CUSTOMIZE;
      }
      if (!tmp) {
        callback(closure_1_7.BROWSE);
        segmentedControlState.setActiveIndex(closure_1_7.BROWSE, false);
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
    const items3 = [tmp17];
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
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { screen: null, tabBar: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_12, paddingTop: ThemesDefault.space.PX_16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_12, paddingTop: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default function ChannelsAndRolesModal(arg0) {
  ({ guildId: require, defaultTab: importDefault } = arg0);
  let obj = defaultAreStatesEqual;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(closure_0));
  const tmp2 = useGuildOnboardingAvailableDefault(stateFromStores);
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
      return closure_1_8(closure_1_11, { guildId: closure_0, defaultTab: closure_1 });
    },
  };
  return tmp3(_modDef10661, obj);
}
