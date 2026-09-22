// === Module 16403: MessagesEmptyState ===

// Module 16403 (MessagesEmptyState)
import util from "util" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import useNavigation from "useNavigation" /* 1484 */;
import Text_Text from "Text/Text" /* 4753 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5344 */;
import useTrackImpressionDefault from "useTrackImpression" /* 9053 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15375 */;
import _modDef16404 from "module_16404" /* 16404 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let closure_10 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default function MessagesEmptyState() {
  const tmp = closure_10();
  let width = useWindowDimensionsDefault().width;
  [tmp5, require] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => {
    require(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  const navigation = useNavigation.useNavigation();
  const items = [navigation];
  const callback1 = noop.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  const obj2 = { type: null, name: null };
  obj2.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
  obj2.name = discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX;
  useTrackImpressionDefault(obj2);
  if (tmp5 > 0) {
    width = tmp5;
  }
  const result = 0.9 * width;
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp18;
  if (isScreenLandscape) {
    const obj3 = { paddingBottom: tmp15 };
    tmp18 = obj3;
  }
  const obj4 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: null };
  items1[1] = tmp18;
  const obj5 = { style: tmp.container, onLayout: callback, children: null };
  const obj6 = { style: tmp.innerContainer, children: null };
  const obj7 = { style: tmp.imageContainer, children: null };
  const obj8 = { resizeMode: "contain", source: _modDef16404, style: null };
  let num = 350;
  if (result < 622) {
    num = result / 622 * 350;
  }
  const size = { height: num, width: Math.min(result, 622) };
  obj8.style = size;
  obj7.children = React6(timestampProducer, obj8);
  const items2 = [React6(hasOwnProperty, obj7), ];
  const obj9 = { style: tmp.textWrapper, children: null };
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: null };
  const intl = util.intl;
  obj10.children = intl.string(util.t["8JZof8"]);
  const items3 = [React6(Text_Text.Heading, obj10), ];
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = util.intl;
  obj11.children = intl2.string(util.t["qm+H7x"]);
  items3[1] = React6(Text_Text.Text, obj11);
  obj9.children = items3;
  items2[1] = React7(hasOwnProperty, obj9);
  obj6.children = items2;
  const items4 = [React7(hasOwnProperty, obj6), ];
  const obj12 = { style: tmp.buttonWrapper, children: null };
  const obj13 = { text: null, onPress: null, size: "lg" };
  const intl3 = util.intl;
  obj13.text = intl3.string(util.t.zIJnA6);
  obj13.onPress = callback1;
  obj12.children = React6(components_Button_Button.Button, obj13);
  items4[1] = React6(hasOwnProperty, obj12);
  obj5.children = items4;
  obj4.children = React7(hasOwnProperty, obj5);
  return React6(React5, obj4);
};