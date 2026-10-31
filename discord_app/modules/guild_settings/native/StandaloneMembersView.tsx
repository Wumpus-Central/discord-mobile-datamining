// === Module 18636: StandaloneMembersView ===

// Module 18636 (StandaloneMembersView)
import nativeDefault from "native" /* 575 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import ThemedGradientDefault from "ThemedGradient" /* 10736 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 13248 */;
import KickConfirmDefault from "KickConfirm" /* 13262 */;
import BanConfirmDefault from "BanConfirm" /* 13266 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 18637 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function OpaqueSceneBackdrop() {
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
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const createStyles = fn(5014);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  let obj2;
  const tmp = closure_10();
  importDefault = guildId(obj2[7]).useNavigation();
  let items = [guildId];
  const effect = noop.useEffect(() => {
    GuildSettingsActionCreatorsDefault.init(guildId);
  }, items);
  obj2 = { contentContainerStyle: null };
  let obj = guildId(obj2[7]);
  obj2.contentContainerStyle = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
  const obj4 = {};
  const obj5 = { headerLeft: null, headerTitle: null, render: null };
  const obj3 = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
  obj5.headerLeft = guildId(obj2[10]).getHeaderCloseButton(() => navigation.goBack());
  obj5.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(obj2[11]).intl;
    obj.title = intl.string(guildId(obj2[11]).t["9Oq93m"]);
    return closure_1_6(guildId(obj2[10]).NavigatorHeader, obj);
  };
  obj5.render = function render() {
    const obj = { children: null };
    const items = [timestampProducer(OpaqueSceneBackdrop, {}), timestampProducer(GuildSettingsModalMembersWithTabsDefault, { guildId })];
    obj.children = items;
    return React5(React6, obj);
  };
  obj4[constants.MAIN] = obj5;
  obj4[constants.MEMBER_EDIT] = {
    render(arg0) {
      const obj = { children: null };
      const items = [timestampProducer(OpaqueSceneBackdrop, {}), ];
      obj2 = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = timestampProducer(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, obj2);
      obj.children = items;
      return React5(React6, obj);
    }
  };
  obj4[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const obj = { children: null };
      const items = [timestampProducer(OpaqueSceneBackdrop, {}), ];
      obj2 = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = timestampProducer(KickConfirmDefault, obj2);
      obj.children = items;
      return React5(React6, obj);
    }
  };
  obj4[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const obj = { children: null };
      const items = [timestampProducer(OpaqueSceneBackdrop, {}), ];
      obj2 = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = timestampProducer(BanConfirmDefault, obj2);
      obj.children = items;
      return React5(React6, obj);
    }
  };
  const obj7 = { screens: obj4, initialRouteName: constants.MAIN, headerBackTitle: null, containerStyle: null };
  let intl = guildId(obj2[11]).intl;
  obj7.headerBackTitle = intl.string(guildId(obj2[11]).t["13/7kX"]);
  obj7.containerStyle = tmp.navigatorContainer;
  return closure_6(guildId(obj2[16]).Navigator, obj7);
};