// === Module 16053: MessagesEmptyState ===

// Module 16053 (MessagesEmptyState)
import util from "util" /* 1114 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import useNavigation from "useNavigation" /* 1483 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5126 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8768 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15100 */;
import _modDef16054 from "module_16054" /* 16054 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default function MessagesEmptyState() {
  const tmp = closure_10();
  let width = useWindowDimensionsDefault().width;
  [tmp5, require] = _slicedToArray(noop.useState(0), 2);
  const callback = noop.useCallback((nativeEvent) => {
    require(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const items = [navigation];
  const callback1 = noop.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  obj = { type: null, name: null };
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  obj.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
  obj.name = discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX;
  useTrackImpressionDefault(obj);
  if (tmp5 > 0) {
    width = tmp5;
  }
  const result = 0.9 * width;
  let tmp7Result = useIsScreenLandscape;
  const isScreenLandscape = tmp7Result.useIsScreenLandscape();
  tmp7Result = useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp18;
  if (isScreenLandscape) {
    obj = { paddingBottom: tmp15 };
    tmp18 = obj;
  }
  const obj1 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: null };
  items1[1] = tmp18;
  const obj2 = { style: tmp.container, onLayout: callback, children: null };
  const obj3 = { style: tmp.innerContainer, children: null };
  const obj4 = { style: tmp.imageContainer, children: null };
  const obj5 = { resizeMode: "contain", source: _modDef16054, style: null };
  let num = 350;
  if (result < 622) {
    num = result / 622 * 350;
  }
  const size = { height: num, width: Math.min(result, 622) };
  obj5.style = size;
  obj4.children = React6(timestampProducer, obj5);
  const items2 = [React6(hasOwnProperty, obj4), ];
  const obj6 = { style: tmp.textWrapper, children: null };
  const obj7 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: null };
  const intl = util.intl;
  obj7.children = intl.string(util.t["8JZof8"]);
  const items3 = [React6(Text_Text.Heading, obj7), ];
  const obj8 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t["qm+H7x"]);
  items3[1] = React6(Text_Text.Text, obj8);
  obj6.children = items3;
  items2[1] = React7(hasOwnProperty, obj6);
  obj3.children = items2;
  const items4 = [React7(hasOwnProperty, obj3), ];
  const obj9 = { style: tmp.buttonWrapper, children: null };
  const obj10 = { text: null, onPress: null, size: "lg" };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.zIJnA6);
  obj10.onPress = callback1;
  obj9.children = React6(components_Button_Button.Button, obj10);
  items4[1] = React6(hasOwnProperty, obj9);
  obj2.children = items4;
  obj1.children = React7(hasOwnProperty, obj2);
  return React6(React5, obj1);
};