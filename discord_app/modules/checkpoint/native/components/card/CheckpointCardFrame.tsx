// === Module 13577: CheckpointCardFrame ===

// Module 13577 (CheckpointCardFrame)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 2021 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6207 */;
import inlineStylesDefault from "inlineStyles" /* 8155 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

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
const createStyles = fn(5141);
let closure_18 = createStyles.createStyles({ canvas: { overflow: "hidden", transformOrigin: "top left" }, layer: { position: "absolute", top: 0, left: 0 }, shareCardTexture: { isolation: "isolate" }, textureOverlay: { mixBlendMode: "overlay" }, logo: { position: "absolute", top: 4, left: 4, width: 40, height: 40, alignItems: "center", justifyContent: "center" } });
let closure_19 = { code: "(function CheckpointCardFrameTsx1(){let[isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS]=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};})" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(character) {
  character = character.character;
  _require = character;
  const canvasWidth = character.canvasWidth;
  importDefault = canvasWidth;
  let num = character.canvasHeight;
  if (num === undefined) {
    num = 284;
  }
  dependencyMap = num;
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
  const tmp = closure_18();
  const id = clydeSize.useId();
  const cardColors = require("CheckpointCardColors").getCardColors(character.cardColorPalette);
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
  items = [character, size1];
  memo = obj.useMemo(() => {
    if (null != c0) {
      if (null != size1) {
        const _Math = Math;
        const characterLayerUrls = checkpoint_CheckpointMessageComponentUtils.getCharacterLayerUrls(tmp, Math.round(tmp2 * getDevicePixelRatioDefault()));
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
    items = [str7, ...memo];
    return items;
  }, items1);
  joined = memo1.join("\n");
  const obj3 = { artKey: joined, urls: null };
  const obj2 = require("CheckpointCardColors");
  obj3.urls = new Set();
  ref = obj.useRef(obj3);
  let set = new Set();
  [tmp15, c13] = num2(clydeSize.useState(null), 2);
  const tmp14 = num2(clydeSize.useState(null), 2);
  const items2 = [closure_19, tmp15 === joined, require("timing/timing").withTiming, 150];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items2;
  class CheckpointCardFrameTsx1 {
    constructor() {
      opacity = 0;
      if (closure_0) {
        tmp = closure_1;
        obj = { duration: null };
        tmp2 = closure_2;
        obj.duration = closure_2;
        num2 = 1;
        opacity = closure_1(1, obj);
      }
      return { opacity };
    }
  }
  const items3 = [tmp17, tmp18, tmp19];
  CheckpointCardFrameTsx1.__closure = items3;
  CheckpointCardFrameTsx1.__workletHash = 15695130331253;
  CheckpointCardFrameTsx1.__initData = tmp16;
  const animatedStyle = require("module_1652").useAnimatedStyle(CheckpointCardFrameTsx1);
  const items4 = [canvasWidth, num, num2];
  const items5 = [canvasWidth, num, num2];
  const memo2 = obj.useMemo(() => {
    const size = { width: c1 * num2, height: c2 * num2 };
    return size;
  }, items4);
  const items6 = [clydeSize];
  const memo3 = obj.useMemo(() => {
    const size = { width, height: _undefined, transform: null };
    items = [{ scale: num2 }];
    size.transform = items;
    return size;
  }, items5);
  const items7 = [characterLayout];
  const memo4 = obj.useMemo(() => {
    const size = { width: clydeSize, height: clydeSize };
    return size;
  }, items6);
  const memo5 = obj.useMemo(() => {
    let tmp2;
    if (null != characterLayout) {
      const size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = characterLayout);
      tmp2 = size;
    }
    return tmp2;
  }, items7);
  const obj4 = { style: memo2, children: null };
  const obj5 = { style: null, children: null };
  const items8 = [tmp.canvas, memo3];
  obj5.style = items8;
  const size2 = { style: tmp.layer, width: canvasWidth, height: memo1, children: null };
  const tmp3Result = require("module_1652");
  size2.children = size1(require("inlineStyles").Path, { d: combined, fill: secondaryBackgroundColor });
  const items9 = [size1(inlineStylesDefault, size2), , , , ];
  const items10 = [tmp.layer, , ];
  let shareCardTexture = flag;
  if (flag) {
    shareCardTexture = tmp.shareCardTexture;
  }
  const obj6 = { style: items10, children: null };
  items10[1] = shareCardTexture;
  items10[2] = animatedStyle;
  if (flag) {
    const obj7 = { children: null };
    const size3 = { width: canvasWidth, height: num, children: null };
    const obj8 = { d: combined, fill: secondaryBackgroundColor };
    size3.children = tmp25(tmp3(8155).Path, obj8);
    const items11 = [tmp25(tmp28(8155), size3), , ];
    const size4 = { style: null, width: null, height: null, children: null };
    const items12 = [, ];
    ({ layer: arr15[0], textureOverlay: arr15[1] } = tmp);
    size4.style = items12;
    size4.width = canvasWidth;
    size4.height = num;
    const tmp28Result = tmp28(8155);
    const obj9 = { children: null };
    const obj10 = { id: null, children: null };
    const _HermesInternal2 = HermesInternal;
    obj10.id = "" + id + "-top";
    const obj11 = { d: combined };
    obj10.children = tmp25(tmp3(8155).Path, obj11);
    obj9.children = tmp25(tmp3(8155).ClipPath, obj10);
    const items13 = [tmp25(tmp3(8155).Defs, obj9), ];
    const obj12 = { clipPath: null, children: null };
    const _HermesInternal3 = HermesInternal;
    obj12.clipPath = "url(#" + id + "-top)";
    const obj13 = { rotation: 180, origin: null, children: null };
    const _HermesInternal4 = HermesInternal;
    obj13.origin = "" + x + width / 2 + ", " + c14 + c16 / 2;
    const size5 = {
      href: tmp28(13578),
      x,
      y: c14 - 0.4348 * c16,
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
            _undefined2(joined);
          }
        }
    };
    obj13.children = tmp25(tmp3(8155).Image, size5);
    obj12.children = tmp25(tmp3(8155).G, obj13);
    items13[1] = tmp25(tmp3(8155).G, obj12);
    size4.children = items13;
    items11[1] = tmp27(tmp28(8155), size4);
    const size6 = { style: null, width: null, height: null, children: null };
    const items14 = [, ];
    ({ layer: arr17[0], textureOverlay: arr17[1] } = tmp);
    size6.style = items14;
    size6.width = canvasWidth;
    size6.height = num;
    const tmp28Result5 = tmp28(8155);
    const obj14 = { children: null };
    const obj15 = { id: null, children: null };
    const _HermesInternal5 = HermesInternal;
    obj15.id = "" + id + "-bottom";
    const obj16 = { d: combined };
    obj15.children = tmp25(tmp3(8155).Path, obj16);
    obj14.children = tmp25(tmp3(8155).ClipPath, obj15);
    const items15 = [tmp25(tmp3(8155).Defs, obj14), ];
    const obj17 = { clipPath: null, children: null };
    const _HermesInternal6 = HermesInternal;
    const G = tmp3(8155).G;
    obj17.clipPath = "url(#" + id + "-bottom)";
    const obj18 = { rotation: 180, origin: null, children: null };
    const _HermesInternal7 = HermesInternal;
    obj18.origin = "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2;
    const obj19 = { href: tmp28(13578) };
    const merged = Object.assign(styles);
    obj19.opacity = 0.5;
    obj19.preserveAspectRatio = "xMidYMid slice";
    obj18.children = tmp25(tmp3(8155).Image, obj19);
    obj17.children = tmp25(tmp3(8155).G, obj18);
    class CheckpointCardFrameTsx1 {
      constructor() {
        opacity = 0;
        if (closure_0) {
          tmp = closure_1;
          obj = { duration: null };
          tmp2 = closure_2;
          obj.duration = closure_2;
          num2 = 1;
          opacity = closure_1(1, obj);
        }
        return { opacity };
      }
    }
    size6.children = items15;
    items11[2] = tmp27(tmp28(8155), size6);
    obj7.children = items11;
    let tmp27Result = tmp27(str7, obj7);
    const tmp28Result6 = tmp28(8155);
  } else {
    const size7 = { width: canvasWidth, height: num, children: null };
    const obj20 = { children: null };
    const obj21 = { id, children: null };
    const obj22 = { d: combined };
    obj21.children = tmp25(tmp3(8155).Path, obj22);
    obj20.children = tmp25(tmp3(8155).ClipPath, obj21);
    const items16 = [tmp25(tmp3(8155).Defs, obj20), ];
    const obj23 = { href: null };
    const obj24 = { uri: recapCardBackgroundImage };
    obj23.href = obj24;
    const merged1 = Object.assign(size);
    obj23.preserveAspectRatio = "xMidYMid slice";
    const _HermesInternal = HermesInternal;
    obj23.clipPath = "url(#" + id + ")";
    obj23.onLoad = function onLoad() {
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
        _undefined2(joined);
      }
    };
    items16[1] = tmp25(tmp3(8155).Image, obj23);
    size7.children = items16;
    tmp27Result = tmp27(tmp28(8155), size7);
    const tmp28Result7 = tmp28(8155);
  }
  obj6.children = tmp27Result;
  items9[1] = size1(_modDef1652.View, obj6, "texture-" + joined);
  const obj25 = { style: tmp.logo, children: null };
  const size8 = { style: characterLayout.absoluteFill, width: 40, height: 40, children: null };
  size8.children = size1(require("inlineStyles").Path, { d: "M0 40H30L40 30V0H10L0 10V40Z", fill: cardColors.primaryBackgroundColor });
  const items17 = [size1(inlineStylesDefault, size8), ];
  const tmp28Result8 = inlineStylesDefault;
  items17[1] = size1(require("ClydeIcon").ClydeIcon, { size: "custom", color: nativeDefault.colors.BLACK, style: memo4 });
  obj25.children = items17;
  items9[2] = memo(recapCardBackgroundImage, obj25);
  items9[3] = character.children;
  let tmp25Result = null != memo5;
  if (tmp25Result) {
    tmp25Result = memo.length > 0;
  }
  if (tmp25Result) {
    const obj27 = { style: null, children: null };
    const items18 = [memo5, animatedStyle];
    obj27.style = items18;
    obj27.children = memo.map((uri) => {
      closure_0 = uri;
      return size1(width(_undefined[14]), {
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
            c13(joined);
          }
        }
      }, uri);
    });
    const _HermesInternal8 = HermesInternal;
    tmp25Result = tmp25(tmp28(1652).View, obj27, "character-" + joined);
  }
  items9[4] = tmp25Result;
  obj5.children = items9;
  obj4.children = memo(recapCardBackgroundImage, obj5);
  return size1(recapCardBackgroundImage, obj4);
};
export const CHECKPOINT_CARD_HEIGHT = 284;