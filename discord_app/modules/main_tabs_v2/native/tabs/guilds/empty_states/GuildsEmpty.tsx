// === Module 18287: GuildsEmpty ===

// Module 18287 (GuildsEmpty)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import getInitialNavigationState from "getInitialNavigationState" /* 5195 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 14227 */;
import CheersSpotIllustration from "CheersSpotIllustration" /* 18288 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4880 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;

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
    obj11 = { style: tmp.content, children: null };
    obj12 = { style: tmp.illustrationWrapper, children: jsx(closure_0(closure_2[13]).CheersSpotIllustration, { width: 245, accessible: false }) };
    items1 = [, ];
    items1[0] = jsx(View, obj12);
    obj13 = { style: tmp.textWrapper, children: null };
    obj14 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
    items2 = [, ];
    ({ text: arr3[0], headerText: arr3[1] } = tmp);
    obj14.style = items2;
    intl = closure_0(closure_2[14]).intl;
    obj14.children = intl.string(closure_0(closure_2[14]).t["Y7Ml/I"]);
    items3 = [, ];
    items3[0] = jsx(closure_0(closure_2[11]).Heading, obj14);
    obj15 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
    intl2 = closure_0(closure_2[14]).intl;
    obj15.children = intl2.string(closure_0(closure_2[14]).t.kuyE4r);
    items3[1] = jsx(closure_0(closure_2[11]).Text, obj15);
    obj13.children = items3;
    items1[1] = jsxs(View, obj13);
    obj11.children = items1;
    items4 = [, ];
    items4[0] = jsxs(View, obj11);
    obj16 = { style: tmp.buttonContainer, spacing: 12, children: null };
    obj17 = { size: "lg", text: null, onPress: null };
    intl3 = closure_0(closure_2[14]).intl;
    obj17.text = intl3.string(closure_0(closure_2[14]).t.riOUtB);
    obj17.onPress = handleJoinGuild;
    items5 = [, ];
    items5[0] = jsx(closure_0(closure_2[16]).Button, obj17);
    obj18 = { size: "lg", variant: "secondary", text: null, onPress: null };
    intl4 = closure_0(closure_2[14]).intl;
    obj18.text = intl4.string(closure_0(closure_2[14]).t["BetvT+"]);
    obj18.onPress = handleCreateGuild;
    items5[1] = jsx(closure_0(closure_2[16]).Button, obj18);
    obj16.children = items5;
    items4[1] = jsxs(closure_0(closure_2[15]).Stack, obj16);
    obj1.children = items4;
    obj.children = jsxs(View, obj1);
    return jsx(ScrollView, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const isGuildLurker = fn(4876).isGuildLurker;
const Constants = fn(1072);
({ ME: closure_11, MOBILE_GUILD_UPSELL_LIST: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5009);
let obj = { scrollView: { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm }, header: null, headerTitle: null, scrollViewContentContainer: null, headerInner: null, content: null, illustrationWrapper: null, buttonContainer: null, textWrapper: null, headerText: null, text: null };
let obj3 = { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm };
obj.header = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.headerTitle = { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" };
let obj4 = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.scrollViewContentContainer = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.headerInner = { flex: 1, flexDirection: "row", alignItems: "center" };
let obj5 = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
let obj6 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.illustrationWrapper = { width: "100%", alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
let obj7 = { width: "100%", alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
obj.buttonContainer = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj8 = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.textWrapper = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
let obj10 = {};
const merged = Object.assign(fn(5619).TextStyleSheet["heading-md/bold"]);
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
  navigation = navigation(1499).useNavigation();
  const obj = navigation(1499);
  const items = [AuthenticationStore];
  const stateFromStores = navigation(563).useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = selectedGuildId;
  }
  selectedGuildId = tmp6;
  let obj3 = { type: null, name: null };
  const obj2 = navigation(563);
  obj3.type = navigation(1261).ImpressionTypes.VIEW;
  obj3.name = navigation(1261).ImpressionNames.GUILDS_EMPTY_NUX;
  selectedGuildId(6023)(obj3);
  const items1 = [tmp6, navigation];
  const effect = noop.useEffect(() => {
    if (null != selectedGuildId) {
      if (null != navigation) {
        if (selectedGuildId !== closure_2_11) {
          if (!obj3.isFavoritesGuildId(selectedGuildId)) {
            if (selectedGuildId !== closure_2_12) {
              let found;
              if (null != selectedGuildId) {
                const guild = GuildStore.getGuild(selectedGuildId);
                if (null != guild) {
                  if (!isGuildLurker(guild)) {
                    found = guild;
                  }
                }
              }
              if (found == null) {
                const guildId = SelectedGuildStore.getGuildId();
                let tmp9;
                if (null != guildId) {
                  const guild1 = GuildStore.getGuild(guildId);
                  if (null != guild1) {
                    if (!isGuildLurker(guild1)) {
                      tmp9 = guild1;
                    }
                  }
                }
                found = tmp9;
              }
              if (found == null) {
                const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
                let tmp15;
                if (null != lastSelectedGuildId) {
                  const guild2 = GuildStore.getGuild(lastSelectedGuildId);
                  if (null != guild2) {
                    if (!isGuildLurker(guild2)) {
                      tmp15 = guild2;
                    }
                  }
                }
                found = tmp15;
              }
              if (found == null) {
                const guildsArray = GuildStore.getGuildsArray();
                found = guildsArray.find((item) => !closure_1_7(item));
              }
              if (null != found) {
                closure_0 = _slicedToArray(getInitialNavigationState.getInitialGuildState(found.id, undefined, false), 2)[1];
                navigation.dispatch(() => {
                  const CommonActions = navigation(dependencyMap[17]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
                const tmp23Result = getInitialNavigationState;
              }
            }
          }
          obj3 = FavoritesUtils;
        }
      }
    }
  }, items1);
  const tmp7 = selectedGuildId(6023);
  const isScreenLandscape = navigation(8765).useIsScreenLandscape();
  navigation(17006);
  let tmp14Result = null;
  if (stateFromStores) {
    const obj4 = { style: null, children: null };
    const items2 = [tmp.header, style];
    obj4.style = items2;
    const obj5 = { style: tmp.headerTitle, children: null };
    const obj6 = { style: tmp.headerInner, children: null };
    const obj7 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl = tmp2(1114).intl;
    obj7.children = intl.string(tmp2(1114).t["7hB4kg"]);
    obj6.children = closure_13(tmp2(5619).Text, obj7);
    obj5.children = closure_13(closure_5, obj6);
    const items3 = [closure_13(closure_5, obj5), ];
    let tmp18;
    if (isScreenLandscape) {
      const obj8 = { paddingBottom: tmp12 };
      tmp18 = obj8;
    }
    const obj9 = { contentContainerStyle: tmp18 };
    items3[1] = closure_13(GuildsEmptyContent, obj9);
    obj4.children = items3;
    tmp14Result = closure_14(closure_5, obj4);
  }
  return tmp14Result;
});
export { GuildsEmptyContent };