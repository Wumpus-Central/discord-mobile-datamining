// _runtime/metro/00026__.js
import processColorDefault from "../00050_processColor.js";
import _getFilterAmountDefault from "../00054__getFilterAmount.js";
import _modDef55 from "00055__.js";
import processColorStopsDefault from "../00056_processColorStops.js";
import _modDef57 from "00057__.js";
import _modDef58 from "00058__.js";
import _modDef59 from "00059__.js";
import _getKeyAndValueFromCSSTransformDefault from "../00060__getKeyAndValueFromCSSTransform.js";
import processTransformOriginDefault from "../00061_processTransformOrigin.js";
import processFontVariantDefault from "../00062_processFontVariant.js";
import processAspectRatioDefault from "../00063_processAspectRatio.js";
import sizesDifferDefault from "../00064_sizesDiffer.js";
import javaScriptFlagGetter from "00027__.js";

javaScriptFlagGetter = javaScriptFlagGetter.enableNativeCSSParsing();
if (!javaScriptFlagGetter) {
  let obj = { process: processColorDefault };
  javaScriptFlagGetter = obj;
}
if (!javaScriptFlagGetter) {
  obj = { process: _getFilterAmountDefault };
  javaScriptFlagGetter = obj;
}
if (!javaScriptFlagGetter) {
  const obj1 = { process: _modDef55 };
  javaScriptFlagGetter = obj1;
}
if (!javaScriptFlagGetter) {
  const obj2 = { process: processColorStopsDefault };
  javaScriptFlagGetter = obj2;
}
if (!javaScriptFlagGetter) {
  const obj3 = { process: _modDef57 };
  javaScriptFlagGetter = obj3;
}
if (!javaScriptFlagGetter) {
  const obj4 = { process: _modDef58 };
  javaScriptFlagGetter = obj4;
}
if (!javaScriptFlagGetter) {
  const obj5 = { process: _modDef59 };
  javaScriptFlagGetter = obj5;
}
if (!javaScriptFlagGetter) {
  const obj6 = { process: _getKeyAndValueFromCSSTransformDefault };
  javaScriptFlagGetter = obj6;
}
if (!javaScriptFlagGetter) {
  const obj7 = { process: processTransformOriginDefault };
  javaScriptFlagGetter = obj7;
}
if (!javaScriptFlagGetter) {
  const obj8 = { process: processFontVariantDefault };
  javaScriptFlagGetter = obj8;
}
if (!javaScriptFlagGetter) {
  const obj9 = { process: processAspectRatioDefault };
  javaScriptFlagGetter = obj9;
}
const size = {
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  aspectRatio: javaScriptFlagGetter,
  borderBottomWidth: true,
  borderEndWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderStartWidth: true,
  borderTopWidth: true,
  boxSizing: true,
  columnGap: true,
  borderWidth: true,
  bottom: true,
  direction: true,
  display: true,
  end: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  gap: true,
  height: true,
  inset: true,
  insetBlock: true,
  insetBlockEnd: true,
  insetBlockStart: true,
  insetInline: true,
  insetInlineEnd: true,
  insetInlineStart: true,
  justifyContent: true,
  left: true,
  margin: true,
  marginBlock: true,
  marginBlockEnd: true,
  marginBlockStart: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginInline: true,
  marginInlineEnd: true,
  marginInlineStart: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true,
  overflow: true,
  padding: true,
  paddingBlock: true,
  paddingBlockEnd: true,
  paddingBlockStart: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingInline: true,
  paddingInlineEnd: true,
  paddingInlineStart: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  position: true,
  right: true,
  rowGap: true,
  start: true,
  top: true,
  width: true,
  zIndex: true,
  elevation: true,
  shadowColor: javaScriptFlagGetter,
  shadowOffset: { diff: sizesDifferDefault },
  shadowOpacity: true,
  shadowRadius: true,
  transform: javaScriptFlagGetter,
  transformOrigin: javaScriptFlagGetter,
  filter: javaScriptFlagGetter,
  mixBlendMode: true,
  isolation: true,
  boxShadow: javaScriptFlagGetter,
  experimental_backgroundImage: javaScriptFlagGetter,
  experimental_backgroundSize: javaScriptFlagGetter,
  experimental_backgroundPosition: javaScriptFlagGetter,
  experimental_backgroundRepeat: javaScriptFlagGetter,
  backfaceVisibility: true,
  backgroundColor: javaScriptFlagGetter,
  borderBlockColor: javaScriptFlagGetter,
  borderBlockEndColor: javaScriptFlagGetter,
  borderBlockStartColor: javaScriptFlagGetter,
  borderBottomColor: javaScriptFlagGetter,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderColor: javaScriptFlagGetter,
  borderCurve: true,
  borderEndColor: javaScriptFlagGetter,
  borderEndEndRadius: true,
  borderEndStartRadius: true,
  borderLeftColor: javaScriptFlagGetter,
  borderRadius: true,
  borderRightColor: javaScriptFlagGetter,
  borderStartColor: javaScriptFlagGetter,
  borderStartEndRadius: true,
  borderStartStartRadius: true,
  borderStyle: true,
  borderTopColor: javaScriptFlagGetter,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  cursor: true,
  opacity: true,
  outlineColor: javaScriptFlagGetter,
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: true,
  pointerEvents: true,
  color: javaScriptFlagGetter,
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontVariant: javaScriptFlagGetter,
  fontWeight: true,
  includeFontPadding: true,
  letterSpacing: true,
  lineHeight: true,
  textAlign: true,
  textAlignVertical: true,
  textDecorationColor: javaScriptFlagGetter,
  textDecorationLine: true,
  textDecorationStyle: true,
  textShadowColor: javaScriptFlagGetter,
  textShadowOffset: true,
  textShadowRadius: true,
  textStrokeColor: javaScriptFlagGetter,
  textStrokeWidth: true,
  textTransform: true,
  userSelect: true,
  verticalAlign: true,
  writingDirection: true,
  overlayColor: javaScriptFlagGetter,
  resizeMode: true,
  tintColor: javaScriptFlagGetter,
  objectFit: true,
};

export default size;
export const colorAttribute = javaScriptFlagGetter;
export const filterAttribute = javaScriptFlagGetter;
export const boxShadowAttribute = javaScriptFlagGetter;
export const backgroundImageAttribute = javaScriptFlagGetter;
export const backgroundSizeAttribute = javaScriptFlagGetter;
export const backgroundPositionAttribute = javaScriptFlagGetter;
export const backgroundRepeatAttribute = javaScriptFlagGetter;
export const transformAttribute = javaScriptFlagGetter;
export const transformOriginAttribute = javaScriptFlagGetter;
export const fontVariantAttribute = javaScriptFlagGetter;
export const aspectRatioAttribute = javaScriptFlagGetter;
