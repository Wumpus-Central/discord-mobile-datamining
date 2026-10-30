// discord_app/modules/checkpoint/native/components/card/CheckpointCardFrame.tsx
import getDevicePixelRatioDefault from "../../../../../utils/getDevicePixelRatio.native.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../../CheckpointMessageComponentUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 284;
let c10 = 43.5;
const createStyles = fn(5009);
let closure_11 = createStyles.createStyles({
  canvas: { overflow: "hidden", transformOrigin: "top left" },
  layer: { position: "absolute", top: 0, left: 0 },
  logo: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
let __initData = {
  code: "function CheckpointCardFrameTsx1(){const{isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(character) {
  character = character.character;
  const canvasWidth = character.canvasWidth;
  let num = character.canvasHeight;
  if (num === undefined) {
    num = 284;
  }
  let num2 = character.scale;
  if (num2 === undefined) {
    num2 = 1;
  }
  const clydeSize = character.clydeSize;
  const characterLayout = character.characterLayout;
  let memo;
  let memo1;
  let joined;
  let ref;
  __initData = undefined;
  closure_13 = undefined;
  const tmp = ref();
  const id = clydeSize.useId();
  const cardColors = character(num[5]).getCardColors(character.cardColorPalette);
  const recapCardBackgroundImage = cardColors.recapCardBackgroundImage;
  ({ primaryBackgroundColor, secondaryBackgroundColor } = cardColors);
  const combined = "M44 34V0H" + canvasWidth + "V284H0V43.5H34L38 38L44 34Z";
  const bound = Math.max(1, (canvasWidth - 44) / 156, (num - joined) / 224.5);
  let size = { x: 44 * (1 - bound), y: joined * (1 - bound), width: 200 * bound, height: 268 * bound };
  let size1;
  if (characterLayout != null) {
    size1 = characterLayout.size;
  }
  let items = [character, size1];
  memo = obj.useMemo(() => {
    if (null != character) {
      if (null != size1) {
        const _Math = Math;
        const characterLayerUrls = checkpoint_CheckpointMessageComponentUtils.getCharacterLayerUrls(
          tmp,
          Math.round(tmp2 * getDevicePixelRatioDefault()),
        );
      }
      return [];
    }
  }, items);
  const items1 = [recapCardBackgroundImage, memo];
  memo1 = obj.useMemo(() => {
    const items = [recapCardBackgroundImage, ...memo];
    return items;
  }, items1);
  joined = memo1.join("\n");
  const obj3 = { artKey: joined, urls: null };
  const obj2 = character(num[5]);
  obj3.urls = new Set();
  ref = obj.useRef(obj3);
  const tmp11 = num2(clydeSize.useState(null), 2);
  __initData = tmp11[1];
  closure_13 = tmp12;
  let set = new Set();
  class T {
    constructor() {
      opacity = 0;
      if (closure_13) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[9]);
        num2 = 1;
        opacity = obj.withTiming(1, { duration: 150 });
      }
      return { opacity };
    }
  }
  const tmp3Result = character(num[8]);
  T.__closure = {
    isArtLoaded: tmp11[0] === joined,
    withTiming: character(num[9]).withTiming,
    CARD_ART_FADE_IN_DURATION_MS: 150,
  };
  T.__workletHash = 7810000693516;
  T.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(T);
  const items2 = [canvasWidth, num, num2];
  const items3 = [canvasWidth, num, num2];
  const memo2 = obj.useMemo(() => {
    const size = { width: canvasWidth * num2, height: num * num2 };
    return size;
  }, items2);
  const items4 = [clydeSize];
  const memo3 = obj.useMemo(() => {
    const size = { width: canvasWidth, height: num, transform: null };
    const items = [{ scale: num2 }];
    size.transform = items;
    return size;
  }, items3);
  const items5 = [characterLayout];
  const memo4 = obj.useMemo(() => {
    const size = { width: clydeSize, height: clydeSize };
    return size;
  }, items4);
  const memo5 = obj.useMemo(() => {
    let tmp2;
    if (null != characterLayout) {
      const size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = characterLayout);
      tmp2 = size;
    }
    return tmp2;
  }, items5);
  const obj5 = { style: memo2, children: null };
  const obj6 = { style: null, children: null };
  const items6 = [tmp.canvas, memo3];
  obj6.style = items6;
  const size2 = { style: tmp.layer, width: canvasWidth, height: memo1, children: null };
  const obj4 = {
    isArtLoaded: tmp11[0] === joined,
    withTiming: character(num[9]).withTiming,
    CARD_ART_FADE_IN_DURATION_MS: 150,
  };
  const tmp20 = memo;
  const tmp21 = canvasWidth;
  size2.children = size1(character(num[10]).Path, { d: combined, fill: secondaryBackgroundColor });
  const items7 = [size1(canvasWidth(num[10]), size2), , , ,];
  const obj7 = { style: null, children: null };
  const items8 = [tmp.layer, animatedStyle];
  obj7.style = items8;
  const size3 = { width: canvasWidth, height: memo1, children: null };
  const tmp22 = canvasWidth(num[10]);
  const obj8 = { children: null };
  const tmp23 = canvasWidth(num[10]);
  obj8.children = size1(character(num[10]).ClipPath, { id, children: size1(character(num[10]).Path, { d: combined }) });
  const items9 = [size1(character(num[10]).Defs, obj8)];
  const obj10 = { href: { uri: recapCardBackgroundImage } };
  const merged = Object.assign(size);
  obj10.preserveAspectRatio = "xMidYMid slice";
  obj10.clipPath = "url(#" + id + ")";
  obj10.onLoad = function onLoad() {
    if (ref.current.artKey !== joined) {
      const obj = { artKey: joined, urls: null };
      const _Set = Set;
      const set = new Set();
      obj.urls = set;
      ref.current = obj;
    }
    const urls = ref.current.urls;
    urls.add(recapCardBackgroundImage);
    if (memo1.every((item) => urls.has(item))) {
      closure_12(joined);
    }
  };
  items9[1] = size1(character(num[10]).Image, obj10);
  size3.children = items9;
  obj7.children = memo(tmp23, size3);
  items7[1] = size1(canvasWidth(num[8]).View, obj7, "texture-" + joined);
  const obj11 = { style: tmp.logo, children: null };
  const size4 = { style: characterLayout.absoluteFill, width: 40, height: 40, children: null };
  const obj9 = { id, children: size1(character(num[10]).Path, { d: combined }) };
  size4.children = size1(character(num[10]).Path, { d: "M0 40H30L40 30V0H10L0 10V40Z", fill: primaryBackgroundColor });
  const items10 = [size1(canvasWidth(num[10]), size4)];
  const tmp25 = canvasWidth(num[10]);
  items10[1] = size1(character(num[11]).ClydeIcon, {
    size: "custom",
    color: canvasWidth(num[12]).colors.BLACK,
    style: memo4,
  });
  obj11.children = items10;
  items7[2] = memo(recapCardBackgroundImage, obj11);
  items7[3] = character.children;
  let tmp18Result = null != memo5;
  if (tmp18Result) {
    tmp18Result = memo.length > 0;
  }
  if (tmp18Result) {
    const obj13 = { style: null, children: null };
    const items11 = [memo5, animatedStyle];
    obj13.style = items11;
    obj13.children = memo.map((uri) => {
      closure_0 = uri;
      return size1(
        canvasWidth(num[13]),
        {
          source: { uri },
          style: characterLayout.absoluteFill,
          onLoad() {
            if (ref.current.artKey !== joined) {
              const obj = { artKey: joined, urls: null };
              const _Set = Set;
              const set = new Set();
              obj.urls = set;
              ref.current = obj;
            }
            const urls = ref.current.urls;
            urls.add(closure_0);
            if (memo1.every((item) => urls.has(item))) {
              closure_12(joined);
            }
          },
        },
        uri,
      );
    });
    const _HermesInternal = HermesInternal;
    tmp18Result = tmp18(tmp21(tmp4[8]).View, obj13, "character-" + joined);
  }
  items7[4] = tmp18Result;
  obj6.children = items7;
  obj5.children = tmp20(recapCardBackgroundImage, obj6);
  return size1(recapCardBackgroundImage, obj5);
}
export const CHECKPOINT_CARD_HEIGHT = 284;
