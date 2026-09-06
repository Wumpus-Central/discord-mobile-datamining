// discord_app/modules/nuf_channels/native/components/NUFChannelIllustration.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: {
    width: "100%",
    maxWidth: 275,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  card: { padding: 0, width: "100%" },
  cardBackground: null,
  header: null,
  content: null,
  message: null,
  messageAvatar: null,
  messageContent: null,
  starMedium: null,
  starSmall: null,
  starGreen: null,
  starBlue: null,
  starPink: null,
  starPurple: null,
};
let size = {
  width: "90%",
  height: 12,
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.cardBackground = size;
createStyles = {
  paddingVertical: 12,
  paddingHorizontal: 16,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
};
createStyles.header = createStyles;
createStyles.content = {
  height: 150,
  paddingVertical: 8,
  paddingHorizontal: 16,
  display: "flex",
  justifyContent: "flex-end",
  overflow: "hidden",
};
createStyles.message = { display: "flex", paddingVertical: 8, flexDirection: "row" };
createStyles.messageAvatar = { width: 40, height: 40, marginRight: 12 };
createStyles.messageContent = { display: "flex", flex: 1 };
createStyles.starMedium = { height: 25, width: 15 };
createStyles.starSmall = { height: 15, width: 10 };
createStyles.starGreen = { position: "absolute", top: 5, left: -28 };
createStyles.starBlue = { position: "absolute", top: -15, left: -10 };
createStyles.starPink = { position: "absolute", bottom: -18, right: -22 };
createStyles.starPurple = { position: "absolute", bottom: -30, right: -2 };
let closure_9 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function NUFChannelIllustrationTsx1(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelIllustration.tsx");

export default function NUFChannelIllustration() {
  const tmp = closure_9();
  _require = tmp;
  const tmp2 = sharedValue(sharedValue1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(0);
  let obj1 = require("ReanimatedRexport");
  sharedValue1 = obj1.useSharedValue(0);
  const effect = sharedValue1.useEffect(() => {
    const timeout = setTimeout(
      () =>
        closure_1_2((arg0) => {
          const items = [...arg0];
          const intl = closure_1_0(1114).intl;
          const obj = { name: null, avatar: null, message: null };
          const intl2 = closure_1_0(1114).intl;
          obj.name = intl2.string(closure_1_0(1114).t["9m/HsX"]);
          obj.avatar = closure_1_1(13771);
          obj.message = intl.string(closure_1_0(1114).t["5alrl0"]);
          items[tmp] = obj;
          return items;
        }),
      500,
    );
    const timeout2 = setTimeout(
      () =>
        closure_1_2((arg0) => {
          const items = [...arg0];
          const intl = closure_1_0(1114).intl;
          const obj = { name: null, avatar: null, message: null };
          const intl2 = closure_1_0(1114).intl;
          obj.name = intl2.string(closure_1_0(1114).t["AW1kM+"]);
          obj.avatar = closure_1_1(13772);
          obj.message = intl.string(closure_1_0(1114).t["5Oo+vS"]);
          items[tmp] = obj;
          return items;
        }),
      2000,
    );
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  let items = [sharedValue1, first];
  const effect1 = sharedValue1.useEffect(() => {
    if (first.length >= 2) {
      const result = sharedValue1.set(timing.withTiming(1, { duration: 250 }));
    }
  }, items);
  let items1 = [sharedValue, first];
  const effect2 = sharedValue1.useEffect(() => {
    const result = sharedValue.set(0);
    const result1 = sharedValue.set(timing.withTiming(1, { duration: 200 }));
  }, items1);
  let obj2 = require("ReanimatedRexport");
  const fn = function b() {
    let obj = { transform: null };
    obj = { translateY: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [50, 0]) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { interpolate: require("ReanimatedRexport").interpolate, messageListAnimation: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 1240710065054;
  fn.__initData = __initData;
  obj = { style: tmp.container, children: null };
  obj1 = { source: null, style: null };
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj1.source = first(13773);
  const items2 = [,];
  ({ starSmall: arr4[0], starBlue: arr4[1] } = tmp);
  obj1.style = items2;
  const items3 = [closure_7(closure_6, obj1), , , , ,];
  obj2 = { source: first(13774), style: null };
  const items4 = [,];
  ({ starMedium: arr6[0], starPink: arr6[1] } = tmp);
  obj2.style = items4;
  items3[1] = closure_7(closure_6, obj2);
  const obj3 = { source: first(13775), style: null };
  const items5 = [,];
  ({ starMedium: arr7[0], starGreen: arr7[1] } = tmp);
  obj3.style = items5;
  items3[2] = closure_7(closure_6, obj3);
  const obj4 = { source: first(13776), style: null };
  const items6 = [,];
  ({ starSmall: arr8[0], starPurple: arr8[1] } = tmp);
  obj4.style = items6;
  items3[3] = closure_7(closure_6, obj4);
  items3[4] = closure_7(closure_5, { style: tmp.cardBackground });
  const obj6 = { style: tmp.card, shadow: "low", border: "subtle", children: null };
  const obj7 = { style: tmp.header, children: null };
  const items7 = [closure_7(require("TextIcon").TextIcon, { size: "sm" })];
  const obj8 = { variant: "text-md/bold", allowFontScaling: false, children: null };
  let intl = require("util").intl;
  const items8 = [" ", intl.string(require("util").t.aLOLry)];
  obj8.children = items8;
  items7[1] = closure_8(require("Text/Text").Text, obj8);
  obj7.children = items7;
  const items9 = [closure_8(closure_5, obj7)];
  const obj9 = {
    style: tmp.content,
    children: closure_7(first(4296).View, {
      style: animatedStyle,
      children: first.map((children) => {
        let obj = { style: closure_0.message, children: null };
        obj = { source: children.avatar, style: closure_0.messageAvatar };
        const items = [React5(timestampProducer, obj)];
        obj = { style: closure_0.messageContent, children: null };
        const items1 = [
          React5(Text_Text.Text, { variant: "text-md/semibold", allowFontScaling: false, children: children.name }),
          React5(Text_Text.Text, { variant: "text-md/medium", allowFontScaling: false, children: children.message }),
        ];
        obj.children = items1;
        items[1] = React6(hasOwnProperty, obj);
        obj.children = items;
        return React6(hasOwnProperty, obj, children.message);
      }),
    }),
  };
  items9[1] = closure_7(closure_5, obj9);
  obj6.children = items9;
  items3[5] = closure_8(require("Card").Card, obj6);
  obj.children = items3;
  return closure_8(closure_5, obj);
}
