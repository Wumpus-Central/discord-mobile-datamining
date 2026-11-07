// discord_app/modules/checkpoint/native/components/card/CheckpointCardFrame.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getDevicePixelRatioDefault from "../../../../../utils/getDevicePixelRatio.native.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../../CheckpointMessageComponentUtils.tsx";
import inlineStylesDefault from "../../../../../../_runtime/08101_inlineStyles.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 284;
let c11 = 44;
let c12 = 43.5;
let c13 = -1;
let c14 = 0;
let c15 = 432;
let c16 = 326;
const styles = { x: -1, y: 0, width: 433, height: 469 };
const createStyles = fn(5140);
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
let closure_19 = {
  code: "(function CheckpointCardFrameTsx1(){let[isCharacterSettled,withTiming,CARD_ART_FADE_IN_DURATION_MS]=this.__closure;return{opacity:isCharacterSettled?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};})",
};
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
  let size1;
  let memo;
  let joined;
  closure_9 = undefined;
  height = undefined;
  const tmp = closure_18();
  const id = clydeSize.useId();
  const cardColors = require("CheckpointCardColors").getCardColors(character.cardColorPalette);
  const secondaryBackgroundColor = cardColors.secondaryBackgroundColor;
  ({ primaryBackgroundColor, recapCardBackgroundImage } = cardColors);
  if (flag) {
    let combined = concat(canvasWidth, " ", num, "H0V44H33L44 32.999V0H", canvasWidth, "Z");
  } else {
    combined = concat(canvasWidth, "V284H0V43.5H34L38 38L44 34Z");
  }
  const bound = Math.max(1, (canvasWidth - c11) / 156, (num - c12) / 224.5);
  let size = { x: c11 * (1 - bound), y: c12 * (1 - bound), width: 200 * bound, height: 268 * bound };
  size1 = undefined;
  if (characterLayout != null) {
    size1 = characterLayout.size;
  }
  items = [character, size1];
  memo = obj.useMemo(() => {
    if (null != c0) {
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
  joined = memo.join("\n");
  const obj3 = { characterKey: joined, urls: null };
  const obj2 = require("CheckpointCardColors");
  obj3.urls = new Set();
  closure_9 = obj.useRef(obj3);
  let set = new Set();
  [tmp15, c10] = num2(clydeSize.useState(null), 2);
  const tmp14 = num2(clydeSize.useState(null), 2);
  const items1 = [closure_19, tmp15 === joined, require("timing/timing").withTiming, 150];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items1;
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
  const items2 = [tmp17, tmp18, tmp19];
  CheckpointCardFrameTsx1.__closure = items2;
  CheckpointCardFrameTsx1.__workletHash = 2849175625109;
  CheckpointCardFrameTsx1.__initData = tmp16;
  const items3 = [canvasWidth, num, num2];
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    CheckpointCardFrameTsx1,
  );
  const items4 = [canvasWidth, num, num2];
  const memo1 = obj.useMemo(() => {
    const size = { width: c1 * num2, height: c2 * num2 };
    return size;
  }, items3);
  const items5 = [clydeSize];
  const memo2 = obj.useMemo(() => {
    const size = { width, height: _undefined, transform: null };
    items = [{ scale: num2 }];
    size.transform = items;
    return size;
  }, items4);
  const items6 = [characterLayout];
  const memo3 = obj.useMemo(() => {
    const size = { width: clydeSize, height: clydeSize };
    return size;
  }, items5);
  const memo4 = obj.useMemo(() => {
    let tmp2;
    if (null != characterLayout) {
      const size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = characterLayout);
      tmp2 = size;
    }
    return tmp2;
  }, items6);
  const obj4 = { style: memo1, children: null };
  const obj5 = { style: null, children: null };
  const items7 = [tmp.canvas, memo2];
  obj5.style = items7;
  const size2 = { style: tmp.layer, width: canvasWidth, height, children: null };
  const tmp3Result = require("../../../../../../_runtime/metro/01652__.js");
  size2.children = memo(require("inlineStyles").Path, { d: combined, fill: secondaryBackgroundColor });
  const items8 = [memo(inlineStylesDefault, size2), , , ,];
  const items9 = [tmp.layer];
  let shareCardTexture = flag;
  if (flag) {
    shareCardTexture = tmp.shareCardTexture;
  }
  const obj6 = { style: items9, children: null };
  items9[1] = shareCardTexture;
  if (flag) {
    const obj7 = { children: null };
    const size3 = { width: canvasWidth, height: num, children: null };
    const obj8 = { d: combined, fill: secondaryBackgroundColor };
    size3.children = tmp25(tmp3(8101).Path, obj8);
    const items10 = [tmp25(tmp28(8101), size3), ,];
    const size4 = { style: null, width: null, height: null, children: null };
    const items11 = [,];
    ({ layer: arr14[0], textureOverlay: arr14[1] } = tmp);
    size4.style = items11;
    size4.width = canvasWidth;
    size4.height = num;
    const tmp28Result = tmp28(8101);
    const obj9 = { children: null };
    const obj10 = { id: null, children: null };
    const _HermesInternal2 = HermesInternal;
    obj10.id = "" + id + "-top";
    const obj11 = { d: combined };
    obj10.children = tmp25(tmp3(8101).Path, obj11);
    obj9.children = tmp25(tmp3(8101).ClipPath, obj10);
    const items12 = [tmp25(tmp3(8101).Defs, obj9)];
    const obj12 = { clipPath: null, children: null };
    const _HermesInternal3 = HermesInternal;
    obj12.clipPath = "url(#" + id + "-top)";
    const obj13 = { rotation: 180, origin: null, children: null };
    const _HermesInternal4 = HermesInternal;
    obj13.origin = "" + x + width / 2 + ", " + c14 + c16 / 2;
    const size5 = {
      href: tmp28(13675),
      x,
      y: c14 - 0.4348 * c16,
      width,
      height: 1.4348 * c16,
      preserveAspectRatio: "none",
    };
    obj13.children = tmp25(tmp3(8101).Image, size5);
    obj12.children = tmp25(tmp3(8101).G, obj13);
    items12[1] = tmp25(tmp3(8101).G, obj12);
    size4.children = items12;
    items10[1] = tmp27(tmp28(8101), size4);
    const size6 = { style: null, width: null, height: null, children: null };
    const items13 = [,];
    ({ layer: arr16[0], textureOverlay: arr16[1] } = tmp);
    size6.style = items13;
    size6.width = canvasWidth;
    size6.height = num;
    const tmp28Result5 = tmp28(8101);
    const obj14 = { children: null };
    const obj15 = { id: null, children: null };
    const _HermesInternal5 = HermesInternal;
    obj15.id = "" + id + "-bottom";
    const obj16 = { d: combined };
    obj15.children = tmp25(tmp3(8101).Path, obj16);
    obj14.children = tmp25(tmp3(8101).ClipPath, obj15);
    const items14 = [tmp25(tmp3(8101).Defs, obj14)];
    const obj17 = { clipPath: null, children: null };
    const _HermesInternal6 = HermesInternal;
    obj17.clipPath = "url(#" + id + "-bottom)";
    const obj18 = { rotation: 180, origin: null, children: null };
    const _HermesInternal7 = HermesInternal;
    obj18.origin = "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2;
    const obj19 = { href: null };
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
    obj19.href = tmp28(13675);
    const merged = Object.assign(styles);
    obj19.opacity = 0.5;
    obj19.preserveAspectRatio = "xMidYMid slice";
    obj18.children = tmp25(tmp44, obj19);
    obj17.children = tmp25(tmp3(8101).G, obj18);
    items14[1] = tmp25(tmp3(8101).G, obj17);
    size6.children = items14;
    items10[2] = tmp27(tmp28(8101), size6);
    obj7.children = items10;
    let tmp27Result = tmp27(closure_9, obj7);
    const tmp28Result6 = tmp28(8101);
  } else {
    const size7 = { width: canvasWidth, height: num, children: null };
    const obj20 = { children: null };
    const obj21 = { id, children: null };
    const obj22 = { d: combined };
    obj21.children = tmp25(tmp3(8101).Path, obj22);
    obj20.children = tmp25(tmp3(8101).ClipPath, obj21);
    const items15 = [tmp25(tmp3(8101).Defs, obj20)];
    const obj23 = { href: null };
    const obj24 = { uri: recapCardBackgroundImage };
    obj23.href = obj24;
    const merged1 = Object.assign(size);
    obj23.preserveAspectRatio = "xMidYMid slice";
    const _HermesInternal = HermesInternal;
    obj23.clipPath = "url(#" + id + ")";
    items15[1] = tmp25(tmp3(8101).Image, obj23);
    size7.children = items15;
    tmp27Result = tmp27(tmp28(8101), size7);
    const tmp28Result7 = tmp28(8101);
  }
  obj6.children = tmp27Result;
  items8[1] = memo(size1, obj6);
  const obj25 = { style: tmp.logo, children: null };
  const size8 = { style: characterLayout.absoluteFill, width: 40, height: 40, children: null };
  size8.children = memo(require("inlineStyles").Path, {
    d: "M0 40H30L40 30V0H10L0 10V40Z",
    fill: primaryBackgroundColor,
  });
  const items16 = [memo(inlineStylesDefault, size8)];
  const tmp28Result8 = inlineStylesDefault;
  items16[1] = memo(require("ClydeIcon").ClydeIcon, {
    size: "custom",
    color: nativeDefault.colors.BLACK,
    style: memo3,
  });
  obj25.children = items16;
  items8[2] = joined(size1, obj25);
  items8[3] = character.children;
  let tmp25Result = null != memo4;
  if (tmp25Result) {
    tmp25Result = memo.length > 0;
  }
  if (tmp25Result) {
    const obj27 = { style: null, children: null };
    const items17 = [memo4, animatedStyle];
    obj27.style = items17;
    obj27.children = memo.map((uri) => {
      closure_0 = uri;
      return memo(
        width(_undefined[14]),
        {
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
          },
        },
        uri,
      );
    });
    const _HermesInternal8 = HermesInternal;
    tmp25Result = tmp25(tmp28(1652).View, obj27, "character-" + joined);
  }
  items8[4] = tmp25Result;
  obj5.children = items8;
  obj4.children = joined(size1, obj5);
  return memo(size1, obj4);
}
export const CHECKPOINT_CARD_HEIGHT = 284;
