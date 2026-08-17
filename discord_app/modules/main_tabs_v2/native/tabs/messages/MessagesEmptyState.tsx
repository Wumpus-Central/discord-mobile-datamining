// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx
import encodeProperties from "encodeProperties" /* 503 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useNavigation from "useNavigation" /* 1500 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
({ View: c5, Image: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default function MessagesEmptyState() {
  const tmp = callback2();
  let width = navigation(1494)().width;
  [tmp5, require] = callback(React.useState(0), 2);
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback1 = React.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  obj = { type: null, name: null };
  const tmp2 = navigation;
  const tmp4 = callback(React.useState(0), 2);
  obj[0] = encodeProperties.ImpressionTypes.VIEW;
  obj[1] = encodeProperties.ImpressionNames.MESSAGES_EMPTY_NUX;
  navigation(9177)(obj);
  if (tmp5 > 0) {
    width = tmp5;
  }
  const result = 0.9 * width;
  let tmp7Result = tmp7(8944);
  const isScreenLandscape = tmp7Result.useIsScreenLandscape();
  tmp7Result = tmp7(14452);
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp18;
  if (isScreenLandscape) {
    obj = { paddingBottom: null };
    obj[0] = tmp15;
    tmp18 = obj;
  }
  obj1 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: null };
  items1[1] = tmp18;
  const obj2 = { style: tmp.container, onLayout: callback, children: null };
  const obj3 = { style: tmp.innerContainer, children: null };
  const obj4 = { style: tmp.imageContainer, children: null };
  const obj5 = { resizeMode: "contain", source: tmp2(15317), style: null };
  let num = 350;
  if (result < 622) {
    num = result / 622 * 350;
  }
  const tmp10 = navigation(9177);
  const tmp17 = closure_7;
  const tmp21 = closure_6;
  obj5[2] = { height: num, width: Math.min(result, 622) };
  obj4[1] = closure_8(tmp21, obj5);
  const items2 = [closure_8(closure_5, obj4), ];
  const obj7 = { style: tmp.textWrapper, children: null };
  const obj8 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: null };
  const intl = tmp7(1236).intl;
  obj8[3] = intl.string(getSystemLocale.t["8JZof8"]);
  const items3 = [closure_8(Text.Heading, obj8), ];
  const obj9 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = tmp7(1236).intl;
  obj9[3] = intl2.string(getSystemLocale.t["qm+H7x"]);
  items3[1] = closure_8(Text.Text, obj9);
  obj7[1] = items3;
  items2[1] = closure_9(closure_5, obj7);
  obj3[1] = items2;
  const items4 = [closure_9(closure_5, obj3), ];
  const obj10 = { style: tmp.buttonWrapper, children: null };
  const obj11 = { text: null, onPress: null, size: "lg" };
  const intl3 = tmp7(1236).intl;
  obj11[0] = intl3.string(getSystemLocale.t.zIJnA6);
  obj11[1] = callback1;
  obj10[1] = closure_8(Button.Button, obj11);
  items4[1] = closure_8(closure_5, obj10);
  obj2[2] = items4;
  obj1[3] = closure_9(closure_5, obj2);
  return closure_8(tmp17, obj1);
};