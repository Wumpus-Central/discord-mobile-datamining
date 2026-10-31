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
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 284;
let c11 = 44;
let c12 = 43.5;
let c13 = -1;
let c14 = 0;
let c15 = 432;
let c16 = 326;
const styles = { x: -1, y: 0, width: 433, height: 469 };
const createStyles = fn(5014);
let closure_18 = createStyles.createStyles({
  canvas: { overflow: "hidden", transformOrigin: "top left" },
  layer: { position: "absolute", top: 0, left: 0 },
  shareCardTexture: { isolation: "isolate" },
  textureOverlay: { mixBlendMode: "overlay" },
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
const __initData = {
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
  let flag = character.isCharacterAndStats;
  if (flag === undefined) {
    flag = false;
  }
  recapCardBackgroundImage = undefined;
  let size1;
  let memo;
  let str7;
  let memo1;
  let joined;
  let ref;
  let x;
  closure_14 = undefined;
  const tmp = closure_18();
  const id = clydeSize.useId();
  const cardColors = character(num[5]).getCardColors(character.cardColorPalette);
  ({ secondaryBackgroundColor, recapCardBackgroundImage } = cardColors);
  if (flag) {
    let combined = concat(canvasWidth, " ", num, "H0V44H33L44 32.999V0H", canvasWidth, "Z");
  } else {
    combined = concat(canvasWidth, "V284H0V43.5H34L38 38L44 34Z");
  }
  const bound = Math.max(1, (canvasWidth - joined) / 156, (num - ref) / 224.5);
  let size = { x: joined * (1 - bound), y: ref * (1 - bound), width: 200 * bound, height: 268 * bound };
  size1 = undefined;
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
  str7 = "share-card-texture";
  if (!flag) {
    str7 = recapCardBackgroundImage;
  }
  const items1 = [str7, memo];
  memo1 = obj.useMemo(() => {
    const items = [str7, ...memo];
    return items;
  }, items1);
  joined = memo1.join("\n");
  const obj3 = { artKey: joined, urls: null };
  const obj2 = character(num[5]);
  obj3.urls = new Set();
  ref = obj.useRef(obj3);
  const tmp14 = num2(clydeSize.useState(null), 2);
  x = tmp14[1];
  closure_14 = tmp15;
  let set = new Set();
  class S {
    constructor() {
      opacity = 0;
      if (closure_14) {
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
  S.__closure = {
    isArtLoaded: tmp14[0] === joined,
    withTiming: character(num[9]).withTiming,
    CARD_ART_FADE_IN_DURATION_MS: 150,
  };
  S.__workletHash = 7810000693516;
  S.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(S);
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
    isArtLoaded: tmp14[0] === joined,
    withTiming: character(num[9]).withTiming,
    CARD_ART_FADE_IN_DURATION_MS: 150,
  };
  size2.children = size1(character(num[10]).Path, { d: combined, fill: secondaryBackgroundColor });
  const items7 = [size1(canvasWidth(num[10]), size2), , , ,];
  const items8 = [tmp.layer, ,];
  let shareCardTexture = flag;
  if (flag) {
    shareCardTexture = tmp.shareCardTexture;
  }
  const obj7 = { style: items8, children: null };
  items8[1] = shareCardTexture;
  items8[2] = animatedStyle;
  if (flag) {
    const obj8 = { children: null };
    const size3 = { width: canvasWidth, height: num, children: null };
    const obj9 = { d: combined, fill: secondaryBackgroundColor };
    size3.children = tmp21(tmp3(tmp4[10]).Path, obj9);
    const items9 = [tmp21(tmp24(tmp4[10]), size3), ,];
    const size4 = { style: null, width: null, height: null, children: null };
    const items10 = [,];
    ({ layer: arr13[0], textureOverlay: arr13[1] } = tmp);
    size4.style = items10;
    size4.width = canvasWidth;
    size4.height = num;
    const tmp24Result = tmp24(tmp4[10]);
    const obj10 = { children: null };
    const obj11 = { id: null, children: null };
    const _HermesInternal2 = HermesInternal;
    obj11.id = "" + id + "-top";
    const obj12 = { d: combined };
    obj11.children = tmp21(tmp3(tmp4[10]).Path, obj12);
    obj10.children = tmp21(tmp3(tmp4[10]).ClipPath, obj11);
    const items11 = [tmp21(tmp3(tmp4[10]).Defs, obj10)];
    const obj13 = { clipPath: null, children: null };
    const _HermesInternal3 = HermesInternal;
    obj13.clipPath = "url(#" + id + "-top)";
    const obj14 = { rotation: 180, origin: null, children: null };
    const _HermesInternal4 = HermesInternal;
    obj14.origin = "" + x + width / 2 + ", " + closure_14 + c16 / 2;
    const size5 = {
      href: tmp24(tmp4[11]),
      x,
      y: closure_14 - 0.4348 * c16,
      width,
      height: 1.4348 * c16,
      preserveAspectRatio: "none",
      onLoad() {
        if (ref.current.artKey !== joined) {
          const obj = { artKey: joined, urls: null };
          const _Set = Set;
          const set = new Set();
          obj.urls = set;
          ref.current = obj;
        }
        const urls = ref.current.urls;
        urls.add(str7);
        if (memo1.every((item) => urls.has(item))) {
          closure_13(joined);
        }
      },
    };
    obj14.children = tmp21(tmp3(tmp4[10]).Image, size5);
    obj13.children = tmp21(tmp3(tmp4[10]).G, obj14);
    items11[1] = tmp21(tmp3(tmp4[10]).G, obj13);
    size4.children = items11;
    items9[1] = tmp23(tmp24(tmp4[10]), size4);
    const size6 = { style: null, width: null, height: null, children: null };
    const items12 = [,];
    ({ layer: arr15[0], textureOverlay: arr15[1] } = tmp);
    size6.style = items12;
    size6.width = canvasWidth;
    size6.height = num;
    const tmp24Result5 = tmp24(tmp4[10]);
    const obj15 = { children: null };
    const obj16 = { id: null, children: null };
    const _HermesInternal5 = HermesInternal;
    obj16.id = "" + id + "-bottom";
    const obj17 = { d: combined };
    obj16.children = tmp21(tmp3(tmp4[10]).Path, obj17);
    obj15.children = tmp21(tmp3(tmp4[10]).ClipPath, obj16);
    const items13 = [tmp21(tmp3(tmp4[10]).Defs, obj15)];
    const obj18 = { clipPath: null, children: null };
    const _HermesInternal6 = HermesInternal;
    obj18.clipPath = "url(#" + id + "-bottom)";
    const obj19 = { rotation: 180, origin: null, children: null };
    const _HermesInternal7 = HermesInternal;
    obj19.origin = "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2;
    const obj20 = { href: null };
    class S {
      constructor() {
        opacity = 0;
        if (closure_14) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[9]);
          num2 = 1;
          opacity = obj.withTiming(1, { duration: 150 });
        }
        return { opacity };
      }
    }
    obj20.href = tmp24(tmp4[11]);
    const merged = Object.assign(styles);
    obj20.opacity = 0.5;
    obj20.preserveAspectRatio = "xMidYMid slice";
    obj19.children = tmp21(tmp40, obj20);
    obj18.children = tmp21(tmp3(tmp4[10]).G, obj19);
    items13[1] = tmp21(tmp3(tmp4[10]).G, obj18);
    size6.children = items13;
    items9[2] = tmp23(tmp24(tmp4[10]), size6);
    obj8.children = items9;
    let tmp23Result = tmp23(str7, obj8);
    const tmp24Result6 = tmp24(tmp4[10]);
  } else {
    const size7 = { width: canvasWidth, height: num, children: null };
    const obj21 = { children: null };
    const obj22 = { id, children: null };
    const obj23 = { d: combined };
    obj22.children = tmp21(tmp3(tmp4[10]).Path, obj23);
    obj21.children = tmp21(tmp3(tmp4[10]).ClipPath, obj22);
    const items14 = [tmp21(tmp3(tmp4[10]).Defs, obj21)];
    const obj24 = { href: null };
    const obj25 = { uri: recapCardBackgroundImage };
    obj24.href = obj25;
    const merged1 = Object.assign(size);
    obj24.preserveAspectRatio = "xMidYMid slice";
    const _HermesInternal = HermesInternal;
    obj24.clipPath = "url(#" + id + ")";
    obj24.onLoad = function onLoad() {
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
        closure_13(joined);
      }
    };
    items14[1] = tmp21(tmp3(tmp4[10]).Image, obj24);
    size7.children = items14;
    tmp23Result = tmp23(tmp24(tmp4[10]), size7);
    const tmp24Result7 = tmp24(tmp4[10]);
  }
  obj7.children = tmp23Result;
  items7[1] = size1(canvasWidth(num[8]).View, obj7, "texture-" + joined);
  const obj26 = { style: tmp.logo, children: null };
  const size8 = { style: characterLayout.absoluteFill, width: 40, height: 40, children: null };
  const tmp25 = canvasWidth(num[10]);
  size8.children = size1(character(num[10]).Path, {
    d: "M0 40H30L40 30V0H10L0 10V40Z",
    fill: cardColors.primaryBackgroundColor,
  });
  const items15 = [size1(canvasWidth(num[10]), size8)];
  const tmp24Result8 = canvasWidth(num[10]);
  items15[1] = size1(character(num[12]).ClydeIcon, {
    size: "custom",
    color: canvasWidth(num[13]).colors.BLACK,
    style: memo4,
  });
  obj26.children = items15;
  items7[2] = memo(recapCardBackgroundImage, obj26);
  items7[3] = character.children;
  let tmp21Result = null != memo5;
  if (tmp21Result) {
    tmp21Result = memo.length > 0;
  }
  if (tmp21Result) {
    const obj28 = { style: null, children: null };
    const items16 = [memo5, animatedStyle];
    obj28.style = items16;
    obj28.children = memo.map((uri) => {
      closure_0 = uri;
      return size1(
        canvasWidth(num[14]),
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
              closure_13(joined);
            }
          },
        },
        uri,
      );
    });
    const _HermesInternal8 = HermesInternal;
    tmp21Result = tmp21(tmp24(tmp4[8]).View, obj28, "character-" + joined);
  }
  items7[4] = tmp21Result;
  obj6.children = items7;
  obj5.children = memo(recapCardBackgroundImage, obj6);
  return size1(recapCardBackgroundImage, obj5);
}
export const CHECKPOINT_CARD_HEIGHT = 284;
