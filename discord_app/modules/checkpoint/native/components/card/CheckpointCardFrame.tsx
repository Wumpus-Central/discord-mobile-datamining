// === Module 14279: CheckpointCardFrame ===

// Module 14279 (CheckpointCardFrame)
import nativeDefault from "native" /* 575 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 2024 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6398 */;
import inlineStylesDefault from "inlineStyles" /* 8263 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = -1;
let c11 = 0;
let c12 = 432;
let c13 = 326;
const styles = { x: -1, y: 0, width: 433, height: 469 };
const createStyles = fn(5306);
let closure_15 = createStyles.createStyles({ canvas: { overflow: "hidden", transformOrigin: "top left" }, layer: { position: "absolute", top: 0, left: 0 }, cardTexture: { isolation: "isolate" }, textureOverlay: { mixBlendMode: "overlay" }, logo: { position: "absolute", top: 0, left: 0, width: 44, height: 44, alignItems: "center", justifyContent: "center" } });
let closure_16 = { code: "(function CheckpointCardFrameTsx1(){let[isCharacterSettled,withTiming,CARD_ART_FADE_IN_DURATION_MS]=this.__closure;return{opacity:isCharacterSettled?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};})" };
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
  let memo;
  let joined;
  closure_9 = undefined;
  let x;
  const tmp = closure_15();
  const id = clydeSize.useId();
  const cardColors = require("CheckpointCardColors").getCardColors(character.cardColorPalette);
  let size;
  ({ primaryBackgroundColor, secondaryBackgroundColor } = cardColors);
  if (characterLayout != null) {
    size = characterLayout.size;
  }
  items = [character, size];
  memo = obj.useMemo(() => {
    if (null != c0) {
      if (null != size) {
        const _Math = Math;
        const characterLayerUrls = checkpoint_CheckpointMessageComponentUtils.getCharacterLayerUrls(tmp, Math.round(tmp2 * getDevicePixelRatioDefault()));
      }
      return [];
    }
  }, items);
  joined = memo.join("\n");
  const obj3 = { characterKey: joined, urls: null };
  const obj2 = require("CheckpointCardColors");
  obj3.urls = new Set();
  closure_9 = obj.useRef(obj3);
  let set = new Set();
  [tmp10, c10] = num2(clydeSize.useState(null), 2);
  const tmp9 = num2(clydeSize.useState(null), 2);
  const items1 = [closure_16, tmp10 === joined, require("timing/timing").withTiming, 150];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items1;
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
  const items2 = [tmp12, tmp13, tmp14];
  CheckpointCardFrameTsx1.__closure = items2;
  CheckpointCardFrameTsx1.__workletHash = 2849175625109;
  CheckpointCardFrameTsx1.__initData = tmp11;
  const items3 = [canvasWidth, num, num2];
  const animatedStyle = require("module_1655").useAnimatedStyle(CheckpointCardFrameTsx1);
  const items4 = [canvasWidth, num, num2];
  const memo1 = obj.useMemo(() => {
    size = { width: c1 * num2, height: c2 * num2 };
    return size;
  }, items3);
  const items5 = [clydeSize];
  const memo2 = obj.useMemo(() => {
    size = { width, height: _undefined, transform: null };
    items = [{ scale: num2 }];
    size.transform = items;
    return size;
  }, items4);
  const items6 = [characterLayout];
  const memo3 = obj.useMemo(() => {
    size = { width: clydeSize, height: clydeSize };
    return size;
  }, items5);
  const memo4 = obj.useMemo(() => {
    let tmp2;
    if (null != characterLayout) {
      size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = characterLayout);
      tmp2 = size;
    }
    return tmp2;
  }, items6);
  const obj4 = { style: memo1, children: null };
  const obj5 = { style: null, children: null };
  const items7 = [tmp.canvas, memo2];
  obj5.style = items7;
  const obj6 = { style: null, children: null };
  const items8 = [, ];
  ({ layer: arr10[0], cardTexture: arr10[1] } = tmp);
  obj6.style = items8;
  const size1 = { width: canvasWidth, height: num, children: null };
  const tmp3Result = require("module_1655");
  size1.children = memo(require("inlineStyles").Rect, { width: canvasWidth, height: num, fill: secondaryBackgroundColor });
  const items9 = [memo(inlineStylesDefault, size1), ];
  if (flag) {
    const obj7 = { children: null };
    const size2 = { style: null, width: null, height: null, children: null };
    const items10 = [, ];
    ({ layer: arr14[0], textureOverlay: arr14[1] } = tmp);
    size2.style = items10;
    size2.width = canvasWidth;
    size2.height = num;
    const obj8 = { children: null };
    const obj9 = { id: null, children: null };
    const _HermesInternal2 = HermesInternal;
    obj9.id = "" + id + "-top";
    const size3 = { width: canvasWidth, height: num };
    obj9.children = tmp20(tmp3(8263).Rect, size3);
    obj8.children = tmp20(tmp3(8263).ClipPath, obj9);
    const items11 = [tmp20(tmp3(8263).Defs, obj8), ];
    const obj10 = { clipPath: null, children: null };
    const _HermesInternal3 = HermesInternal;
    obj10.clipPath = "url(#" + id + "-top)";
    const obj11 = { rotation: 180, origin: null, children: null };
    const _HermesInternal4 = HermesInternal;
    obj11.origin = "" + x + width / 2 + ", " + c11 + c13 / 2;
    const size4 = { href: tmp23(14280), x, y: c11 - 0.4348 * c13, width, height: 1.4348 * c13, preserveAspectRatio: "none" };
    obj11.children = tmp20(tmp3(8263).Image, size4);
    obj10.children = tmp20(tmp3(8263).G, obj11);
    items11[1] = tmp20(tmp3(8263).G, obj10);
    size2.children = items11;
    const items12 = [tmp22(tmp23(8263), size2), ];
    const size5 = { style: null, width: null, height: null, children: null };
    const items13 = [, ];
    ({ layer: arr17[0], textureOverlay: arr17[1] } = tmp);
    size5.style = items13;
    size5.width = canvasWidth;
    size5.height = num;
    const tmp23Result = tmp23(8263);
    const obj12 = { children: null };
    const obj13 = { id: null, children: null };
    const _HermesInternal5 = HermesInternal;
    obj13.id = "" + id + "-bottom";
    const size6 = { width: canvasWidth, height: num };
    obj13.children = tmp20(tmp3(8263).Rect, size6);
    obj12.children = tmp20(tmp3(8263).ClipPath, obj13);
    const items14 = [tmp20(tmp3(8263).Defs, obj12), ];
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
    const _HermesInternal6 = HermesInternal;
    tmp34[0] = "url(#" + id + "-bottom)";
    const obj14 = { rotation: 180, origin: null, children: null };
    const _HermesInternal7 = HermesInternal;
    obj14.origin = "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2;
    const obj15 = { href: tmp23(14280) };
    const merged = Object.assign(styles);
    obj15.opacity = 0.5;
    obj15.preserveAspectRatio = "xMidYMid slice";
    obj14.children = tmp20(tmp3(8263).Image, obj15);
    tmp34[1] = tmp20(tmp3(8263).G, obj14);
    items14[1] = tmp20(tmp3(8263).G, tmp34);
    size5.children = items14;
    items12[1] = tmp22(tmp23(8263), size5);
    obj7.children = items12;
    let tmp22Result = tmp22(closure_9, obj7);
    const tmp23Result4 = tmp23(8263);
  } else {
    const size7 = { style: null, width: null, height: null, children: null };
    const items15 = [, ];
    ({ layer: arr12[0], textureOverlay: arr12[1] } = tmp);
    size7.style = items15;
    size7.width = canvasWidth;
    size7.height = num;
    const obj16 = { children: null };
    const obj17 = { id, children: null };
    const size8 = { width: canvasWidth, height: num };
    obj17.children = tmp20(tmp3(8263).Rect, size8);
    obj16.children = tmp20(tmp3(8263).ClipPath, obj17);
    const items16 = [tmp20(tmp3(8263).Defs, obj16), ];
    const size9 = { href: tmp23(14280), width: canvasWidth, height: num, preserveAspectRatio: "xMidYMid slice", clipPath: null };
    const _HermesInternal = HermesInternal;
    size9.clipPath = "url(#" + id + ")";
    items16[1] = tmp20(tmp3(8263).Image, size9);
    size7.children = items16;
    tmp22Result = tmp22(tmp23(8263), size7);
    const tmp23Result5 = tmp23(8263);
  }
  items9[1] = tmp22Result;
  obj6.children = items9;
  const items17 = [joined(size, obj6), , , ];
  const obj18 = { style: tmp.logo, children: null };
  const size10 = { style: characterLayout.absoluteFill, width: 44, height: 44, children: null };
  size10.children = memo(require("inlineStyles").Path, { d: "M0 0H44V33L33 44H0Z", fill: primaryBackgroundColor });
  const items18 = [memo(inlineStylesDefault, size10), ];
  const tmp23Result6 = inlineStylesDefault;
  items18[1] = memo(require("ClydeIcon").ClydeIcon, { size: "custom", color: nativeDefault.colors.BLACK, style: memo3 });
  obj18.children = items18;
  items17[1] = joined(size, obj18);
  items17[2] = character.children;
  let tmp20Result = null != memo4;
  if (tmp20Result) {
    tmp20Result = memo.length > 0;
  }
  if (tmp20Result) {
    const obj20 = { style: null, children: null };
    const items19 = [memo4, animatedStyle];
    obj20.style = items19;
    obj20.children = memo.map((uri) => {
      closure_0 = uri;
      return memo(width(_undefined[14]), {
        source: { uri },
        style: characterLayout.absoluteFill,
        onLoad() {
          if (ref.current.characterKey !== joined) {
            const obj = { characterKey: joined, urls: null };
            const _Set = Set;
            const set = new Set();
            obj.urls = set;
            ref.current = obj;
          }
          const urls = ref.current.urls;
          urls.add(closure_0);
          if (memo.every((item) => urls.has(item))) {
            c10(joined);
          }
        },
        onError() {
          if (ref.current.characterKey !== joined) {
            const obj = { characterKey: joined, urls: null };
            const _Set = Set;
            const set = new Set();
            obj.urls = set;
            ref.current = obj;
          }
          const urls = ref.current.urls;
          urls.add(closure_0);
          if (memo.every((item) => urls.has(item))) {
            c10(joined);
          }
        }
      }, uri);
    });
    const _HermesInternal8 = HermesInternal;
    tmp20Result = tmp20(tmp23(1655).View, obj20, "character-" + joined);
  }
  items17[3] = tmp20Result;
  obj5.children = items17;
  obj4.children = joined(size, obj5);
  return memo(size, obj4);
};
export const CHECKPOINT_CARD_HEIGHT = 284;