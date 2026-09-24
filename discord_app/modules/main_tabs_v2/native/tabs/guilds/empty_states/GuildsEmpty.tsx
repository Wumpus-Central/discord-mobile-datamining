// === Module 16695: GuildsEmpty ===

// Module 16695 (GuildsEmpty)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import FavoritesUtils from "FavoritesUtils" /* 2069 */;
import getInitialNavigationState from "getInitialNavigationState" /* 4688 */;
import Text_Text from "Text/Text" /* 4825 */;
import Stack_Stack from "Stack/Stack" /* 5271 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 13056 */;
import _modDef16696 from "module_16696" /* 16696 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2066 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4650 */;

require = fn;
function handleJoinGuild() {
  const result = CreateGuildModalActionCreatorsDefault.openGuildJoinServerScreen();
}
function handleCreateGuild() {
  CreateGuildModalActionCreatorsDefault.openCreateGuildModal();
}
class GuildsEmptyContent {
  constructor(arg0) {
    tmp = closure_15();
    obj = { alwaysBounceVertical: false, bounces: false, style: tmp.scrollView, contentContainerStyle: null, children: null };
    items = [, ];
    items[0] = tmp.scrollViewContentContainer;
    items[1] = global.contentContainerStyle;
    obj.contentContainerStyle = items;
    obj1 = { children: null };
    obj12 = { style: tmp.content, children: null };
    obj13 = { style: tmp.illustrationWrapper, children: null };
    obj14 = { source: closure_1(closure_2[12]), style: tmp.illustration };
    obj13.children = jsx(Image, obj14);
    items1 = [, ];
    items1[0] = jsx(View, obj13);
    obj15 = { style: tmp.textWrapper, children: null };
    obj16 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
    items2 = [, ];
    ({ text: arr3[0], headerText: arr3[1] } = tmp);
    obj16.style = items2;
    intl = closure_0(closure_2[13]).intl;
    obj16.children = intl.string(closure_0(closure_2[13]).t["Y7Ml/I"]);
    items3 = [, ];
    items3[0] = jsx(closure_0(closure_2[10]).Heading, obj16);
    obj17 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
    intl2 = closure_0(closure_2[13]).intl;
    obj17.children = intl2.string(closure_0(closure_2[13]).t.kuyE4r);
    items3[1] = jsx(closure_0(closure_2[10]).Text, obj17);
    obj15.children = items3;
    items1[1] = jsxs(View, obj15);
    obj12.children = items1;
    items4 = [, ];
    items4[0] = jsxs(View, obj12);
    obj18 = { style: tmp.buttonContainer, spacing: 12, children: null };
    obj19 = { size: "lg", text: null, onPress: null };
    intl3 = closure_0(closure_2[13]).intl;
    obj19.text = intl3.string(closure_0(closure_2[13]).t.riOUtB);
    obj19.onPress = handleJoinGuild;
    items5 = [, ];
    items5[0] = jsx(closure_0(closure_2[15]).Button, obj19);
    obj20 = { size: "lg", variant: "secondary", text: null, onPress: null };
    intl4 = closure_0(closure_2[13]).intl;
    obj20.text = intl4.string(closure_0(closure_2[13]).t["BetvT+"]);
    obj20.onPress = handleCreateGuild;
    items5[1] = jsx(closure_0(closure_2[15]).Button, obj20);
    obj18.children = items5;
    items4[1] = jsxs(closure_0(closure_2[14]).Stack, obj18);
    obj1.children = items4;
    obj.children = jsxs(View, obj1);
    return jsx(ScrollView, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ ME: closure_11, MOBILE_GUILD_UPSELL_LIST: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4829);
let obj = { scrollView: { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm }, header: null, headerTitle: null, scrollViewContentContainer: null, headerInner: null, content: null, illustrationWrapper: null, illustration: null, buttonContainer: null, textWrapper: null, headerText: null, text: null };
let obj3 = { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm };
obj.header = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.headerTitle = { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" };
let obj4 = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.scrollViewContentContainer = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.headerInner = { flex: 1, flexDirection: "row", alignItems: "center" };
let obj5 = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.illustrationWrapper = { width: "100%", paddingHorizontal: 36 };
let obj6 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.illustration = { resizeMode: "contain", alignSelf: "center", marginBottom: nativeDefault.space.PX_24 };
let obj7 = { resizeMode: "contain", alignSelf: "center", marginBottom: nativeDefault.space.PX_24 };
obj.buttonContainer = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj8 = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.textWrapper = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
let obj10 = {};
const merged = Object.assign(fn(4825).TextStyleSheet["heading-md/bold"]);
obj10.fontSize = 18;
obj10.marginBottom = 8;
obj.headerText = obj10;
obj.text = { textAlign: "center" };
const __initData = createStyles.createStyles(obj);
let obj9 = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default noop.memo(function GuildsEmpty(arg0) {
  let navigation;
  selectedGuildId = undefined;
  ({ selectedGuildId, style } = arg0);
  const tmp = closure_15();
  navigation = navigation(1485).useNavigation();
  const obj = navigation(1485);
  const items = [AuthenticationStore];
  const stateFromStores = navigation(563).useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = selectedGuildId;
  }
  selectedGuildId = tmp6;
  let obj3 = { type: null, name: null };
  const obj2 = navigation(563);
  obj3.type = navigation(1249).ImpressionTypes.VIEW;
  obj3.name = navigation(1249).ImpressionNames.GUILDS_EMPTY_NUX;
  selectedGuildId(9128)(obj3);
  const items1 = [tmp6, navigation];
  const effect = noop.useEffect(() => {
    if (null != selectedGuildId) {
      if (null != navigation) {
        if (selectedGuildId !== closure_2_11) {
          if (!obj3.isFavoritesGuildId(selectedGuildId)) {
            if (selectedGuildId !== closure_2_12) {
              let guild = GuildStore.getGuild(selectedGuildId);
              if (guild == null) {
                guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
              }
              if (guild == null) {
                guild = GuildStore.getGuild(SelectedGuildStore.getLastSelectedGuildId());
              }
              if (guild == null) {
                const guilds = GuildStore.getGuilds();
                guild = guilds[GuildStore.getGuildIds(GuildStore)[0]];
              }
              if (null != guild) {
                closure_0 = _slicedToArray(getInitialNavigationState.getInitialGuildState(guild.id, undefined, false), 2)[1];
                navigation.dispatch(() => {
                  const CommonActions = navigation(dependencyMap[16]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
                const tmp10Result = getInitialNavigationState;
              }
            }
          }
          obj3 = FavoritesUtils;
        }
      }
    }
  }, items1);
  const tmp7 = selectedGuildId(9128);
  const isScreenLandscape = navigation(5430).useIsScreenLandscape();
  navigation(15436);
  let tmp14Result = null;
  if (stateFromStores) {
    const obj4 = { style: null, children: null };
    const items2 = [tmp.header, style];
    obj4.style = items2;
    const obj5 = { style: tmp.headerTitle, children: null };
    const obj6 = { style: tmp.headerInner, children: null };
    const obj7 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl = tmp2(1115).intl;
    obj7.children = intl.string(tmp2(1115).t["7hB4kg"]);
    obj6.children = closure_13(tmp2(4825).Text, obj7);
    obj5.children = closure_13(closure_6, obj6);
    const items3 = [closure_13(closure_6, obj5), ];
    let tmp18;
    if (isScreenLandscape) {
      const obj8 = { paddingBottom: tmp12 };
      tmp18 = obj8;
    }
    const obj9 = { contentContainerStyle: tmp18 };
    items3[1] = closure_13(GuildsEmptyContent, obj9);
    obj4.children = items3;
    tmp14Result = closure_14(closure_6, obj4);
  }
  return tmp14Result;
});
export { GuildsEmptyContent };