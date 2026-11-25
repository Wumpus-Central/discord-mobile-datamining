// discord_app/modules/checkpoint/native/components/card/CheckpointCardFrame.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointCardColors from "../../../CheckpointCardColors.tsx";
import inlineStyles from "../../../../../../_runtime/07912_inlineStyles.js";
import ClydeIcon from "../../../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import _modDef12599 from "../../../../../../discord_assets/assets/checkpoint/checkpoint_2026_share_card_texture.png.js";
import CheckpointCharacterCompositeDefault from "../CheckpointCharacterComposite.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
let c9 = -1;
let c10 = 0;
let c11 = 432;
let c12 = 326;
const styles = { x: -1, y: 0, width: 433, height: 469 };
const createStyles = fn(5012);
let closure_14 = createStyles.createStyles({
  canvas: { overflow: "hidden", transformOrigin: "top left" },
  layer: { position: "absolute", top: 0, left: 0 },
  cardTexture: { isolation: "isolate" },
  textureOverlay: { mixBlendMode: "overlay" },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(canvasHeight) {
  ({ images, canvasWidth } = canvasHeight);
  let num = canvasHeight.canvasHeight;
  if (num === undefined) {
    num = 284;
  }
  let num2 = canvasHeight.scale;
  if (num2 === undefined) {
    num2 = 1;
  }
  const clydeSize = canvasHeight.clydeSize;
  const characterLayout = canvasHeight.characterLayout;
  let flag = canvasHeight.isCharacterAndStats;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_14();
  const id = noop.useId();
  const cardColors = CheckpointCardColors.getCardColors(canvasHeight.cardColorPalette);
  items = [canvasWidth, num, num2];
  ({ primaryBackgroundColor, secondaryBackgroundColor } = cardColors);
  const items1 = [canvasWidth, num, num2];
  const memo = noop.useMemo(() => {
    const size = { width: canvasWidth * num2, height: num * num2 };
    return size;
  }, items);
  const items2 = [clydeSize];
  const memo1 = noop.useMemo(() => {
    const size = { width: canvasWidth, height: num, transform: null };
    items = [{ scale: num2 }];
    size.transform = items;
    return size;
  }, items1);
  const items3 = [characterLayout];
  const memo2 = noop.useMemo(() => {
    const size = { width: clydeSize, height: clydeSize };
    return size;
  }, items2);
  const memo3 = noop.useMemo(() => {
    let tmp2;
    if (null != characterLayout) {
      const size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = characterLayout);
      tmp2 = size;
    }
    return tmp2;
  }, items3);
  const obj2 = { style: memo, children: null };
  const obj3 = { style: null, children: null };
  const items4 = [tmp.canvas, memo1];
  obj3.style = items4;
  const obj4 = { style: null, children: null };
  const items5 = [,];
  ({ layer: arr6[0], cardTexture: arr6[1] } = tmp);
  obj4.style = items5;
  let size = { width: canvasWidth, height: num, children: null };
  size.children = timestampProducer(inlineStyles.Rect, {
    width: canvasWidth,
    height: num,
    fill: secondaryBackgroundColor,
  });
  const items6 = [timestampProducer(inlineStylesDefault, size)];
  if (flag) {
    const obj5 = { children: null };
    const size1 = { style: null, width: null, height: null, children: null };
    const items7 = [,];
    ({ layer: arr10[0], textureOverlay: arr10[1] } = tmp);
    size1.style = items7;
    size1.width = canvasWidth;
    size1.height = num;
    const obj6 = { children: null };
    const obj7 = { id: null, children: null };
    const _HermesInternal2 = HermesInternal;
    obj7.id = "" + id + "-top";
    const size2 = { width: canvasWidth, height: num };
    obj7.children = timestampProducer(inlineStyles.Rect, size2);
    obj6.children = timestampProducer(inlineStyles.ClipPath, obj7);
    const items8 = [timestampProducer(inlineStyles.Defs, obj6)];
    const obj8 = { clipPath: null, children: null };
    const _HermesInternal3 = HermesInternal;
    obj8.clipPath = "url(#" + id + "-top)";
    const obj9 = { rotation: 180, origin: null, children: null };
    const _HermesInternal4 = HermesInternal;
    obj9.origin = "" + x + width / 2 + ", " + c10 + c12 / 2;
    const size3 = {
      href: _modDef12599,
      x,
      y: c10 - 0.4348 * c12,
      width,
      height: 1.4348 * c12,
      preserveAspectRatio: "none",
    };
    obj9.children = timestampProducer(inlineStyles.Image, size3);
    obj8.children = timestampProducer(inlineStyles.G, obj9);
    items8[1] = timestampProducer(inlineStyles.G, obj8);
    size1.children = items8;
    const items9 = [metroImportDefault(inlineStylesDefault, size1)];
    const size4 = { style: null, width: null, height: null, children: null };
    const items10 = [,];
    ({ layer: arr13[0], textureOverlay: arr13[1] } = tmp);
    size4.style = items10;
    size4.width = canvasWidth;
    size4.height = num;
    const tmp13Result = inlineStylesDefault;
    const obj10 = { children: null };
    const obj11 = { id: null, children: null };
    const _HermesInternal5 = HermesInternal;
    obj11.id = "" + id + "-bottom";
    const size5 = { width: canvasWidth, height: num };
    obj11.children = timestampProducer(inlineStyles.Rect, size5);
    obj10.children = timestampProducer(inlineStyles.ClipPath, obj11);
    const items11 = [timestampProducer(inlineStyles.Defs, obj10)];
    const obj12 = { clipPath: null, children: null };
    const _HermesInternal6 = HermesInternal;
    obj12.clipPath = "url(#" + id + "-bottom)";
    const obj13 = { rotation: 180, origin: null, children: null };
    const _HermesInternal7 = HermesInternal;
    obj13.origin = "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2;
    const obj14 = { href: _modDef12599 };
    const merged = Object.assign(styles);
    obj14.opacity = 0.5;
    obj14.preserveAspectRatio = "xMidYMid slice";
    obj13.children = timestampProducer(inlineStyles.Image, obj14);
    obj12.children = timestampProducer(inlineStyles.G, obj13);
    items11[1] = timestampProducer(inlineStyles.G, obj12);
    size4.children = items11;
    items9[1] = metroImportDefault(inlineStylesDefault, size4);
    obj5.children = items9;
    let tmp12Result = metroImportDefault(React5, obj5);
    const tmp13Result4 = inlineStylesDefault;
  } else {
    const size6 = { style: null, width: null, height: null, children: null };
    const items12 = [,];
    ({ layer: arr8[0], textureOverlay: arr8[1] } = tmp);
    size6.style = items12;
    size6.width = canvasWidth;
    size6.height = num;
    const obj15 = { children: null };
    const obj16 = { id, children: null };
    const size7 = { width: canvasWidth, height: num };
    obj16.children = timestampProducer(inlineStyles.Rect, size7);
    obj15.children = timestampProducer(inlineStyles.ClipPath, obj16);
    const items13 = [timestampProducer(inlineStyles.Defs, obj15)];
    const size8 = {
      href: _modDef12599,
      width: canvasWidth,
      height: num,
      preserveAspectRatio: "xMidYMid slice",
      clipPath: null,
    };
    const _HermesInternal = HermesInternal;
    size8.clipPath = "url(#" + id + ")";
    items13[1] = timestampProducer(inlineStyles.Image, size8);
    size6.children = items13;
    tmp12Result = metroImportDefault(inlineStylesDefault, size6);
    const tmp13Result5 = inlineStylesDefault;
  }
  items6[1] = tmp12Result;
  obj4.children = items6;
  const items14 = [metroImportDefault(hasOwnProperty, obj4), , ,];
  const obj17 = { style: tmp.logo, children: null };
  const size9 = { style: absoluteFill.absoluteFill, width: 44, height: 44, children: null };
  size9.children = timestampProducer(inlineStyles.Path, { d: "M0 0H44V33L33 44H0Z", fill: primaryBackgroundColor });
  const items15 = [timestampProducer(inlineStylesDefault, size9)];
  const tmp13Result6 = inlineStylesDefault;
  items15[1] = timestampProducer(ClydeIcon.ClydeIcon, {
    size: "custom",
    color: nativeDefault.colors.BLACK,
    style: memo2,
  });
  obj17.children = items15;
  items14[1] = metroImportDefault(hasOwnProperty, obj17);
  items14[2] = canvasHeight.children;
  let tmp10Result = null != memo3;
  if (tmp10Result) {
    tmp10Result = images.urls.length > 0;
  }
  if (tmp10Result) {
    const obj19 = { style: memo3, children: null };
    const obj20 = { images };
    obj19.children = timestampProducer(CheckpointCharacterCompositeDefault, obj20);
    tmp10Result = timestampProducer(hasOwnProperty, obj19);
  }
  items14[3] = tmp10Result;
  obj3.children = items14;
  obj2.children = metroImportDefault(hasOwnProperty, obj3);
  return timestampProducer(hasOwnProperty, obj2);
}
export const CHECKPOINT_CARD_HEIGHT = 284;
