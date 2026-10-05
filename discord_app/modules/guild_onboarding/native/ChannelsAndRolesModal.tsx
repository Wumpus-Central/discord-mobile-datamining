// discord_app/modules/guild_onboarding/native/ChannelsAndRolesModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import GuildOnboardingPromptsConstants from "../GuildOnboardingPromptsConstants.tsx";
import useGuildOnboardingAvailableDefault from "../useGuildOnboardingAvailable.tsx";
import ModalStackNavigatorDefault from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const GuildOnboardingTab = GuildOnboardingPromptsConstants.GuildOnboardingTab;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: obj2, tabBar: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_1;
      let closure_3;
      let first;
      let first1;
      let segmentedControlState;
      let tmp15;
      let tmp = guildId;
      const obj = guildId(first1[9]);
      const cResult = obj.c(22);
      guildId = guildId.guildId;
      let defaultTab = guildId.defaultTab;
      closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class I {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        cResult[1] = guildId;
        cResult[2] = I;
      } else {
        class I {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmpResult = tmp(first1[10]);
      const stateFromStores = tmpResult.useStateFromStores(first, I);
      const tmp9 = require("useGuildOnboardingAvailable")(stateFromStores);
      importDefault = tmp9;
      const useState = segmentedControlState.useState;
      if (defaultTab == null) {
        class I {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        defaultTab = tmp9 ? tmp11.CUSTOMIZE : tmp11.BROWSE;
      }
      const tmp12 = _slicedToArray(useState(defaultTab), 2);
      first1 = tmp12[0];
      _slicedToArray = tmp14;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        const items1 = [obj3.string(tmp(first1[12]).t.F1VixV)];
        const intl = tmp(tmp2[12]).intl;
        items1[1] = intl.string(tmp(first1[12]).t.MWmtj8);
        const mapped = items1.map((id) => ({ id, label: id, page: null }));
        cResult[3] = mapped;
        tmp15 = mapped;
      } else {
        class I {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      if (cResult[4] !== first1) {
        class I {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        tmp18[1] = first1;
        tmp18[2] = tmp12[1];
        tmp18[3] = tmp15;
        cResult[4] = first1;
        cResult[5] = tmp18;
      } else {
        class I {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmpResult2 = tmp(first1[13]);
      segmentedControlState = tmpResult2.useSegmentedControlState(tmp18);
      if (cResult[6] === tmp9) {
        class I {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const fn = function y() {
        const tmp = closure_1 || first1 !== GuildOnboardingTab.CUSTOMIZE;
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
    }
  : (guildId) => {
      let closure_1;
      let closure_3;
      let items1;
      let items3;
      let obj6;
      let tmp19;
      guildId = guildId.guildId;
      let defaultTab = guildId.defaultTab;
      importDefault = undefined;
      let defaultIndex;
      _slicedToArray = undefined;
      let segmentedControlState;
      let tmp = closure_10();
      const items = [GuildStore];
      const obj = guildId(defaultIndex[10]);
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      const tmp6 = require("useGuildOnboardingAvailable")(stateFromStores);
      importDefault = tmp6;
      const useState = segmentedControlState.useState;
      const obj2 = segmentedControlState;
      if (defaultTab == null) {
        defaultTab = tmp6 ? GuildOnboardingTab.CUSTOMIZE : GuildOnboardingTab.BROWSE;
      }
      const tmp8 = _slicedToArray(useState(defaultTab), 2);
      defaultIndex = tmp8[0];
      _slicedToArray = tmp10;
      const obj3 = {
        pageWidth: 0,
        defaultIndex,
        onSetActiveIndex: tmp8[1],
        items: items1.map((id) => ({ id, label: id, page: null })),
      };
      const useSegmentedControlState = guildId(defaultIndex[13]).useSegmentedControlState;
      guildId(defaultIndex[13]);
      const intl = tmp2(tmp3[12]).intl;
      items1 = [intl.string(guildId(defaultIndex[12]).t.F1VixV)];
      const intl2 = tmp2(tmp3[12]).intl;
      items1[1] = intl2.string(guildId(defaultIndex[12]).t.MWmtj8);
      segmentedControlState = useSegmentedControlState(obj3);
      const items2 = [tmp6, defaultIndex, segmentedControlState];
      const effect = obj2.useEffect(() => {
        const tmp = closure_1 || first !== GuildOnboardingTab.CUSTOMIZE;
        if (!tmp) {
          closure_3(GuildOnboardingTab.BROWSE);
          segmentedControlState.setActiveIndex(GuildOnboardingTab.BROWSE, false);
        }
      }, items2);
      let tmp16 = null;
      const obj4 = { style: tmp.screen, children: items3 };
      if (tmp6) {
        const obj5 = { style: tmp.tabBar, children: closure_8(guildId(defaultIndex[14]).SegmentedControl, obj6) };
        obj6 = { state: segmentedControlState };
        tmp16 = closure_8(View, obj5);
      }
      items3 = [tmp16];
      if (defaultIndex === GuildOnboardingTab.CUSTOMIZE) {
        const obj7 = { setTab: tmp8[1], guildId };
        tmp19 = closure_8(tmp5(tmp3[15]), obj7);
      } else {
        const obj8 = { guildId };
        tmp19 = closure_8(tmp5(tmp3[16]), obj8);
      }
      items3[1] = tmp19;
      return closure_9(View, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let tmp10;
      let tmp6;
      let obj = guildId(576);
      const cResult = obj.c(11);
      guildId = guildId.guildId;
      const defaultTab = guildId.defaultTab;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function l() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = guildId(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmp9 = defaultTab(6838)(stateFromStores);
      const tmp8 = defaultTab;
      if (cResult[3] !== tmp9) {
        let stringResult;
        const intl = tmp(1126).intl;
        const string = intl.string;
        const t = tmp(1126).t;
        if (tmp9) {
          stringResult = string(t.h9mGOP);
        } else {
          stringResult = string(t.et6wav);
        }
        cResult[3] = tmp9;
        cResult[4] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === defaultTab) {
        let tmp12;
        if (cResult[6] === guildId) {
          tmp12 = cResult[7];
        }
        if (cResult[8] === tmp10) {
          let tmp13;
          if (cResult[9] === tmp12) {
            tmp13 = cResult[10];
          }
          return tmp13;
        }
        const obj2 = { screenKey: "channelAndRolesModal", title: tmp10, render: tmp12 };
        const tmp15 = closure_8(tmp8(10661), obj2);
        cResult[8] = tmp10;
        cResult[9] = tmp12;
        cResult[10] = tmp15;
        tmp13 = tmp15;
      }
      class I {
        constructor() {
          const obj = { guildId, defaultTab };
          return metroImportAll(closure_11, obj);
        }
      }
      cResult[5] = defaultTab;
      cResult[6] = guildId;
      cResult[7] = I;
      tmp12 = I;
    }
  : (arg0) => {
      let defaultTab;
      let guildId;
      let stringResult;
      ({ guildId: require, defaultTab: importDefault } = arg0);
      let obj = useStateFromStores;
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
      const tmp2 = useGuildOnboardingAvailableDefault(stateFromStores);
      const tmp4 = ModalStackNavigatorDefault;
      const intl = intl3.intl;
      const string = intl.string;
      const t = intl3.t;
      if (tmp2) {
        stringResult = string(t.h9mGOP);
      } else {
        stringResult = string(t.et6wav);
      }
      const obj2 = {
        screenKey: "channelAndRolesModal",
        title: stringResult,
        render() {
          const obj = { guildId: require, defaultTab: importDefault };
          return metroImportAll(closure_11, obj);
        },
      };
      return closure_8(tmp4, obj2);
    };
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default tmp4;
