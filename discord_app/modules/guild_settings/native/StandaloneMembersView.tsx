// === Module 18535: StandaloneMembersView ===

// Module 18535 (StandaloneMembersView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9042 */;
import useActiveTheme from "useActiveTheme" /* 9776 */;
import ThemedGradientDefault from "ThemedGradient" /* 10693 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 13062 */;
import KickConfirmDefault from "KickConfirm" /* 13076 */;
import BanConfirmDefault from "BanConfirm" /* 13080 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 18536 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const createStyles = fn(5005);
let obj2 = { navigatorContainer: { overflow: "hidden" }, navigatorBackground: null, sceneBackground: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
obj2.navigatorBackground = obj3;
let obj4 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWER;
obj2.sceneBackground = obj4;
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function OpaqueSceneBackdrop() {
  const cResult = c.c(8);
  const tmp3 = closure_10();
  if (!obj2.useIsClientThemeOrCustomThemeActive()) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = timestampProducer(ThemedGradientDefault, { absolute: true });
      cResult[0] = tmp8;
      let first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp3.navigatorBackground) {
      const obj3 = { style: tmp3.navigatorBackground };
      const tmp12 = timestampProducer(View, obj3);
      cResult[1] = tmp3.navigatorBackground;
      cResult[2] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== tmp3.sceneBackground) {
      const obj4 = { style: tmp3.sceneBackground };
      const tmp16 = timestampProducer(View, obj4);
      cResult[3] = tmp3.sceneBackground;
      cResult[4] = tmp16;
      let tmp13 = tmp16;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] === tmp9) {
    }
    const obj5 = { style: StyleSheet.absoluteFill, pointerEvents: "none", children: null };
    const items = [first, tmp9, tmp13];
    obj5.children = items;
    const tmp21 = React5(View, obj5);
    cResult[5] = tmp9;
    cResult[6] = tmp13;
    cResult[7] = tmp21;
  }
  obj2 = useActiveTheme;
}) : (function OpaqueSceneBackdrop() {
  const tmp = closure_10();
  let tmp3 = null;
  if (obj.useIsClientThemeOrCustomThemeActive()) {
    const obj2 = { style: StyleSheet.absoluteFill, pointerEvents: "none", children: null };
    const items = [timestampProducer(ThemedGradientDefault, { absolute: true }), , ];
    const obj3 = { style: tmp.navigatorBackground };
    items[1] = timestampProducer(View, obj3);
    const obj4 = { style: tmp.sceneBackground };
    items[2] = timestampProducer(View, obj4);
    obj2.children = items;
    tmp3 = React5(View, obj2);
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StandaloneMembersView(guildId) {
  const cResult = guildId(576).c(31);
  guildId = guildId.guildId;
  closure_10();
  let obj = guildId(576);
  const tmp = guildId;
  const navigation = guildId(1503).useNavigation();
  if (cResult[0] !== guildId) {
    const fn = function o() {
      GuildSettingsActionCreatorsDefault.init(guildId);
    };
    let items = [guildId];
    cResult[0] = guildId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  const sum = 16 + navigation(1631)().bottom;
  if (cResult[3] !== sum) {
    const obj3 = { contentContainerStyle: null };
    const obj4 = { paddingBottom: sum };
    obj3.contentContainerStyle = obj4;
    cResult[3] = sum;
    cResult[4] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[4];
  }
  dependencyMap = tmp10;
  if (cResult[5] !== navigation) {
    const headerCloseButton = tmp(6984).getHeaderCloseButton(() => navigation.goBack());
    cResult[5] = navigation;
    cResult[6] = headerCloseButton;
    let tmp11 = headerCloseButton;
    const tmpResult = tmp(6984);
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function k() {
      const obj = { title: null };
      const intl = guildId(1125).intl;
      obj.title = intl.string(guildId(1125).t["9Oq93m"]);
      return closure_1_6(guildId(6984).NavigatorHeader, obj);
    };
    cResult[7] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === guildId) {
    if (cResult[9] === tmp11) {
      let tmp14 = cResult[10];
    }
    if (cResult[11] === guildId) {
      if (cResult[12] === tmp10) {
        let tmp15 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function y() {
          return null;
        };
        cResult[14] = fn3;
        let tmp16 = fn3;
      } else {
        tmp16 = cResult[14];
      }
      if (cResult[15] === guildId) {
        if (cResult[16] === tmp10) {
          let tmp17 = cResult[17];
        }
        const _Symbol2 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              return null;
            }
          }
          cResult[18] = T;
        } else {
          class T {
            constructor() {
              return null;
            }
          }
        }
        if (cResult[19] === guildId) {
          class T {
            constructor() {
              return null;
            }
          }
          if (cResult[22] === tmp17) {
            class T {
              constructor() {
                return null;
              }
            }
          }
          const obj5 = {};
          obj5[constants.MAIN] = tmp14;
          obj5[constants.MEMBER_EDIT] = tmp15;
          obj5[constants.MEMBER_KICK] = tmp17;
          obj5[constants.MEMBER_BAN] = tmp19;
          cResult[22] = tmp17;
          cResult[23] = tmp19;
          cResult[24] = tmp14;
          cResult[25] = tmp15;
          cResult[26] = obj5;
        }
        const obj6 = {
          headerTitle: T,
          render(arg0) {
                  const obj = { children: null };
                  const items = [timestampProducer(closure_11, {}), ];
                  const merged = Object.assign(arg0);
                  const merged1 = Object.assign(closure_2);
                  items[1] = timestampProducer(BanConfirmDefault, { guildId });
                  obj.children = items;
                  return React5(closure_2_8, obj);
                }
        };
        cResult[19] = guildId;
        cResult[20] = tmp10;
        cResult[21] = obj6;
      }
      const obj7 = {
        headerTitle: tmp16,
        render(arg0) {
              const obj = { children: null };
              const items = [timestampProducer(closure_11, {}), ];
              const merged = Object.assign(arg0);
              const merged1 = Object.assign(closure_2);
              items[1] = timestampProducer(KickConfirmDefault, { guildId });
              obj.children = items;
              return React5(closure_2_8, obj);
            }
      };
      cResult[15] = guildId;
      cResult[16] = tmp10;
      cResult[17] = obj7;
      tmp17 = obj7;
    }
    const obj8 = {
      render(arg0) {
          const obj = { children: null };
          const items = [timestampProducer(closure_11, {}), ];
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(closure_2);
          items[1] = timestampProducer(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, { guildId });
          obj.children = items;
          return React5(closure_2_8, obj);
        }
    };
    cResult[11] = guildId;
    cResult[12] = tmp10;
    cResult[13] = obj8;
    tmp15 = obj8;
  }
  const obj9 = {
    headerLeft: tmp11,
    headerTitle: tmp13,
    render() {
      const obj = { children: null };
      const items = [timestampProducer(closure_11, {}), timestampProducer(GuildSettingsModalMembersWithTabsDefault, { guildId })];
      obj.children = items;
      return React5(closure_2_8, obj);
    }
  };
  cResult[8] = guildId;
  cResult[9] = tmp11;
  cResult[10] = obj9;
  tmp14 = obj9;
  const obj2 = guildId(1503);
}) : (function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  let obj2;
  const tmp = closure_10();
  importDefault = guildId(obj2[9]).useNavigation();
  let items = [guildId];
  const effect = noop.useEffect(() => {
    GuildSettingsActionCreatorsDefault.init(guildId);
  }, items);
  obj2 = { contentContainerStyle: null };
  let obj = guildId(obj2[9]);
  obj2.contentContainerStyle = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
  const obj4 = {};
  const obj5 = { headerLeft: null, headerTitle: null, render: null };
  const obj3 = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
  obj5.headerLeft = guildId(obj2[12]).getHeaderCloseButton(() => navigation.goBack());
  obj5.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(obj2[13]).intl;
    obj.title = intl.string(guildId(obj2[13]).t["9Oq93m"]);
    return closure_1_6(guildId(obj2[12]).NavigatorHeader, obj);
  };
  obj5.render = function render() {
    const obj = { children: null };
    const items = [timestampProducer(closure_11, {}), timestampProducer(GuildSettingsModalMembersWithTabsDefault, { guildId })];
    obj.children = items;
    return React5(closure_2_8, obj);
  };
  obj4[constants.MAIN] = obj5;
  obj4[constants.MEMBER_EDIT] = {
    render(arg0) {
      const obj = { children: null };
      const items = [timestampProducer(closure_11, {}), ];
      obj2 = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = timestampProducer(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, obj2);
      obj.children = items;
      return React5(closure_2_8, obj);
    }
  };
  obj4[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const obj = { children: null };
      const items = [timestampProducer(closure_11, {}), ];
      obj2 = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = timestampProducer(KickConfirmDefault, obj2);
      obj.children = items;
      return React5(closure_2_8, obj);
    }
  };
  obj4[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const obj = { children: null };
      const items = [timestampProducer(closure_11, {}), ];
      obj2 = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = timestampProducer(BanConfirmDefault, obj2);
      obj.children = items;
      return React5(closure_2_8, obj);
    }
  };
  const obj7 = { screens: obj4, initialRouteName: constants.MAIN, headerBackTitle: null, containerStyle: null };
  let intl = guildId(obj2[13]).intl;
  obj7.headerBackTitle = intl.string(guildId(obj2[13]).t["13/7kX"]);
  obj7.containerStyle = tmp.navigatorContainer;
  return closure_6(guildId(obj2[18]).Navigator, obj7);
});