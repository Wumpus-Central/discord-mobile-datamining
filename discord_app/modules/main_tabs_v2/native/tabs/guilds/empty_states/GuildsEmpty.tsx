// === Module 16269: GuildsEmpty ===

// Module 16269 (GuildsEmpty)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12708 */;
import _modDef16270 from "module_16270" /* 16270 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

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
    obj = { children: null };
    obj1 = { style: tmp.content, children: null };
    obj2 = { style: tmp.illustrationWrapper, children: null };
    obj3 = { source: closure_1(closure_2[12]), style: tmp.illustration };
    obj2.children = jsx(Image, obj3);
    items1 = [, ];
    items1[0] = jsx(View, obj2);
    obj4 = { style: tmp.textWrapper, children: null };
    obj5 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
    items2 = [, ];
    ({ text: arr3[0], headerText: arr3[1] } = tmp);
    obj5.style = items2;
    intl = closure_0(closure_2[13]).intl;
    obj5.children = intl.string(closure_0(closure_2[13]).t["Y7Ml/I"]);
    items3 = [, ];
    items3[0] = jsx(closure_0(closure_2[10]).Heading, obj5);
    obj6 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
    intl2 = closure_0(closure_2[13]).intl;
    obj6.children = intl2.string(closure_0(closure_2[13]).t.kuyE4r);
    items3[1] = jsx(closure_0(closure_2[10]).Text, obj6);
    obj4.children = items3;
    items1[1] = jsxs(View, obj4);
    obj1.children = items1;
    items4 = [, ];
    items4[0] = jsxs(View, obj1);
    obj7 = { style: tmp.buttonContainer, spacing: 12, children: null };
    obj8 = { size: "lg", text: null, onPress: null };
    intl3 = closure_0(closure_2[13]).intl;
    obj8.text = intl3.string(closure_0(closure_2[13]).t.riOUtB);
    obj8.onPress = handleJoinGuild;
    items5 = [, ];
    items5[0] = jsx(closure_0(closure_2[15]).Button, obj8);
    obj9 = { size: "lg", variant: "secondary", text: null, onPress: null };
    intl4 = closure_0(closure_2[13]).intl;
    obj9.text = intl4.string(closure_0(closure_2[13]).t["BetvT+"]);
    obj9.onPress = handleCreateGuild;
    items5[1] = jsx(closure_0(closure_2[15]).Button, obj9);
    obj7.children = items5;
    items4[1] = jsxs(closure_0(closure_2[14]).Stack, obj7);
    obj.children = items4;
    obj.children = jsxs(View, obj);
    return jsx(ScrollView, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ ME: closure_11, MOBILE_GUILD_UPSELL_LIST: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let obj = { scrollView: null, header: null, headerTitle: null, scrollViewContentContainer: null, headerInner: null, content: null, illustrationWrapper: null, illustration: null, buttonContainer: null, textWrapper: null, headerText: null, text: null };
obj = { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm };
obj.scrollView = obj;
const createStyles = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.header = createStyles;
obj.headerTitle = { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" };
obj.scrollViewContentContainer = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.headerInner = { flex: 1, flexDirection: "row", alignItems: "center" };
let obj2 = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.illustrationWrapper = { width: "100%", paddingHorizontal: 36 };
let obj3 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.illustration = { resizeMode: "contain", alignSelf: "center", marginBottom: nativeDefault.space.PX_24 };
let obj4 = { resizeMode: "contain", alignSelf: "center", marginBottom: nativeDefault.space.PX_24 };
obj.buttonContainer = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.textWrapper = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
let obj7 = {};
const merged = Object.assign(fn(4556).TextStyleSheet["heading-md/bold"]);
obj7.fontSize = 18;
obj7.marginBottom = 8;
obj.headerText = obj7;
obj.text = { textAlign: "center" };
const __initData = createStyles.createStyles(obj);
let obj6 = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default noop.memo(function GuildsEmpty(arg0) {
  let navigation;
  selectedGuildId = undefined;
  ({ selectedGuildId, style } = arg0);
  const tmp = closure_15();
  let obj = navigation(1484);
  navigation = obj.useNavigation();
  let obj1 = navigation(563);
  const items = [AuthenticationStore];
  const stateFromStores = obj1.useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = selectedGuildId;
  }
  selectedGuildId = tmp6;
  obj = { type: navigation(1250).ImpressionTypes.VIEW, name: navigation(1250).ImpressionNames.GUILDS_EMPTY_NUX };
  selectedGuildId(8768)(obj);
  const items1 = [tmp6, navigation];
  const effect = noop.useEffect(() => {
    if (null != selectedGuildId) {
      if (null != navigation) {
        if (tmp !== closure_2_11) {
          if (!obj3.isFavoritesGuildId(tmp)) {
            if (tmp !== closure_2_12) {
              let guild = GuildStore.getGuild(tmp);
              if (guild == null) {
                guild = obj4.getGuild(SelectedGuildStore.getGuildId());
              }
              if (guild == null) {
                guild = obj4.getGuild(SelectedGuildStore.getLastSelectedGuildId());
              }
              if (guild == null) {
                const guilds = obj4.getGuilds();
                guild = guilds[obj4.getGuildIds(obj4)[0]];
              }
              if (null != guild) {
                closure_0 = _slicedToArray(tmp10(4419).getInitialGuildState(guild.id, undefined, false), 2)[1];
                obj2.dispatch(() => {
                  const CommonActions = navigation(dependencyMap[16]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
                const tmp10Result = tmp10(4419);
              }
            }
          }
          obj3 = FavoritesUtils;
          tmp10 = require;
        }
      }
      obj2 = navigation;
    }
  }, items1);
  let tmp2Result = tmp2(5126);
  const isScreenLandscape = tmp2Result.useIsScreenLandscape();
  tmp2Result = tmp2(15100);
  let tmp14Result = null;
  if (stateFromStores) {
    obj = { style: null, children: null };
    const items2 = [tmp.header, style];
    obj.style = items2;
    obj1 = { style: tmp.headerTitle, children: null };
    let obj2 = { style: tmp.headerInner, children: null };
    let obj3 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl = tmp2(1114).intl;
    obj3.children = intl.string(tmp2(1114).t["7hB4kg"]);
    obj2.children = closure_13(tmp2(4556).Text, obj3);
    obj1.children = closure_13(closure_6, obj2);
    const items3 = [closure_13(closure_6, obj1), ];
    let tmp18;
    if (isScreenLandscape) {
      const obj4 = { paddingBottom: tmp12 };
      tmp18 = obj4;
    }
    const obj5 = { contentContainerStyle: tmp18 };
    items3[1] = closure_13(GuildsEmptyContent, obj5);
    obj.children = items3;
    tmp14Result = closure_14(closure_6, obj);
  }
  return tmp14Result;
});
export { GuildsEmptyContent };