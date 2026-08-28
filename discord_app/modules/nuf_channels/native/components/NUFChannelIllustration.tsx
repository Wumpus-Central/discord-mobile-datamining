// === Module 13357: NUFChannelIllustration ===

// Module 13357 (NUFChannelIllustration)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: { width: "100%", maxWidth: 275, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 24, marginBottom: 24 }, card: { padding: 0, width: "100%" }, cardBackground: null, header: null, content: null, message: null, messageAvatar: null, messageContent: null, starMedium: null, starSmall: null, starGreen: null, starBlue: null, starPink: null, starPurple: null };
createCacheKey = { width: "90%", height: 12, borderTopLeftRadius: ThemesDefault.radii.lg, borderTopRightRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
createCacheKey[4] = { height: 150, paddingVertical: 8, paddingHorizontal: 16, display: "flex", justifyContent: "flex-end", overflow: "hidden" };
createCacheKey[5] = { display: "flex", paddingVertical: 8, flexDirection: "row" };
createCacheKey[6] = { width: 40, height: 40, marginRight: 12 };
createCacheKey[7] = { display: "flex", flex: 1 };
createCacheKey[8] = { height: 25, width: 15 };
createCacheKey[9] = { height: 15, width: 10 };
createCacheKey[10] = { position: "absolute", top: 5, left: -28 };
createCacheKey[11] = { position: "absolute", top: -15, left: -10 };
createCacheKey[12] = { position: "absolute", bottom: -18, right: -22 };
createCacheKey[13] = { position: "absolute", bottom: -30, right: -2 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function NUFChannelIllustrationTsx1(){const{interpolate,messageListAnimation}=this.__closure;return{transform:[{translateY:interpolate(messageListAnimation.get(),[0,1],[50,0])}]};}" };
let obj1 = { paddingVertical: 12, paddingHorizontal: 16, display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let result = require("set").fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelIllustration.tsx");

export default function NUFChannelIllustration() {
  const tmp = callback3();
  const _require = tmp;
  const tmp2 = sharedValue(sharedValue1.useState([]), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = _require(4186);
  sharedValue = obj.useSharedValue(0);
  obj1 = _require(4186);
  sharedValue1 = obj1.useSharedValue(0);
  const effect = sharedValue1.useEffect(() => {
    const timeout = setTimeout(() => callback((arg0) => {
      const items = [...arg0];
      const intl = callback(1236).intl;
      const obj = { name: null, avatar: null, message: null };
      const intl2 = callback(1236).intl;
      obj[0] = intl2.string(callback(1236).t["9m/HsX"]);
      obj[1] = callback2(13358);
      obj[2] = intl.string(callback(1236).t["5alrl0"]);
      items[tmp] = obj;
      return items;
    }), 500);
    const timeout2 = setTimeout(() => callback((arg0) => {
      const items = [...arg0];
      const intl = callback(1236).intl;
      const obj = { name: null, avatar: null, message: null };
      const intl2 = callback(1236).intl;
      obj[0] = intl2.string(callback(1236).t["AW1kM+"]);
      obj[1] = callback2(13359);
      obj[2] = intl.string(callback(1236).t["5Oo+vS"]);
      items[tmp] = obj;
      return items;
    }), 2000);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  let items = [sharedValue1, first];
  const effect1 = sharedValue1.useEffect(() => {
    if (first.length >= 2) {
      const result = sharedValue1.set(lib(4447).withTiming(1, { duration: 250 }));
      const obj = lib(4447);
    }
  }, items);
  let items1 = [sharedValue, first];
  const effect2 = sharedValue1.useEffect(() => {
    const result = sharedValue.set(0);
    const result1 = sharedValue.set(lib(4447).withTiming(1, { duration: 200 }));
  }, items1);
  let obj2 = _require(4186);
  const fn = function b() {
    let obj = { transform: null };
    obj = { translateY: lib(4186).interpolate(sharedValue.get(), [0, 1], [50, 0]) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj = { interpolate: _require(4186).interpolate, messageListAnimation: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 1240710065054;
  fn.__initData = closure_10;
  obj = { style: tmp.container, children: null };
  obj1 = { source: null, style: null };
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj1[0] = first(13360);
  const items2 = [, ];
  ({ starSmall: arr4[0], starBlue: arr4[1] } = tmp);
  obj1[1] = items2;
  const items3 = [callback(closure_6, obj1), , , , , ];
  obj2 = { source: first(13361), style: items4 };
  items4 = [, ];
  ({ starMedium: arr6[0], starPink: arr6[1] } = tmp);
  items3[1] = callback(closure_6, obj2);
  const items5 = [, ];
  ({ starMedium: arr7[0], starGreen: arr7[1] } = tmp);
  items3[2] = callback(closure_6, { source: first(13362), style: items5 });
  const obj3 = { source: first(13362), style: items5 };
  const items6 = [, ];
  ({ starSmall: arr8[0], starPurple: arr8[1] } = tmp);
  items3[3] = callback(closure_6, { source: first(13363), style: items6 });
  items3[4] = callback(closure_5, { style: tmp.cardBackground });
  const obj6 = { style: tmp.card, shadow: "low", border: "subtle", children: null };
  const obj7 = { style: tmp.header, children: null };
  const items7 = [callback(_require(4994).TextIcon, { size: "sm" }), ];
  const obj8 = { variant: "text-md/bold", allowFontScaling: false, children: null };
  let intl = _require(1236).intl;
  const items8 = [" ", intl.string(_require(1236).t.aLOLry)];
  obj8[2] = items8;
  items7[1] = callback2(_require(4442).Text, obj8);
  obj7[1] = items7;
  const items9 = [callback2(closure_5, obj7), ];
  const obj9 = { style: tmp.content, children: null };
  const obj4 = { source: first(13363), style: items6 };
  const obj5 = { style: tmp.cardBackground };
  obj9[1] = callback(first(4186).View, {
    style: animatedStyle,
    children: first.map((children) => {
      let obj = { style: lib.message, children: null };
      obj = { source: children.avatar, style: lib.messageAvatar };
      const items = [closure_1_7(closure_1_6, obj), ];
      obj = { style: lib.messageContent, children: null };
      const items1 = [closure_1_7(lib(4442).Text, { variant: "text-md/semibold", allowFontScaling: false, children: children.name }), closure_1_7(lib(4442).Text, { variant: "text-md/medium", allowFontScaling: false, children: children.message })];
      obj[1] = items1;
      items[1] = closure_1_8(closure_1_5, obj);
      obj[1] = items;
      return closure_1_8(closure_1_5, obj, children.message);
    })
  });
  items9[1] = callback(closure_5, obj9);
  obj6[3] = items9;
  items3[5] = callback2(_require(5566).Card, obj6);
  obj[1] = items3;
  return callback2(closure_5, obj);
};