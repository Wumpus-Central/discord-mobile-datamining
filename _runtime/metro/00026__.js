// _runtime/metro/00026__.js
import processColorDefault from "../00050_processColor.js";
import processFilterDefault from "../00054_processFilter.js";
import processBoxShadowDefault from "../00055_processBoxShadow.js";
import processBackgroundImageDefault from "../00056_processBackgroundImage.js";
import processBackgroundSizeDefault from "../00057_processBackgroundSize.js";
import processBackgroundPositionDefault from "../00058_processBackgroundPosition.js";
import processBackgroundRepeatDefault from "../00059_processBackgroundRepeat.js";
import processTransformDefault from "../00060_processTransform.js";
import processTransformOriginDefault from "../00061_processTransformOrigin.js";
import processFontVariantDefault from "../00062_processFontVariant.js";
import processAspectRatioDefault from "../00063_processAspectRatio.js";
import sizesDifferDefault from "../00064_sizesDiffer.js";
import javaScriptFlagGetter_mod from "../00027_javaScriptFlagGetter.js";

let javaScriptFlagGetter = javaScriptFlagGetter_mod;
javaScriptFlagGetter = javaScriptFlagGetter.enableNativeCSSParsing();
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processColorDefault };
  const obj = { process: processColorDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processFilterDefault };
  const obj2 = { process: processFilterDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processBoxShadowDefault };
  const obj3 = { process: processBoxShadowDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processBackgroundImageDefault };
  const obj4 = { process: processBackgroundImageDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processBackgroundSizeDefault };
  const obj5 = { process: processBackgroundSizeDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processBackgroundPositionDefault };
  const obj6 = { process: processBackgroundPositionDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processBackgroundRepeatDefault };
  const obj7 = { process: processBackgroundRepeatDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processTransformDefault };
  const obj8 = { process: processTransformDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processTransformOriginDefault };
  const obj9 = { process: processTransformOriginDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processFontVariantDefault };
  const obj10 = { process: processFontVariantDefault };
}
if (!javaScriptFlagGetter) {
  javaScriptFlagGetter = { process: processAspectRatioDefault };
  const obj11 = { process: processAspectRatioDefault };
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
({ diff: sizesDifferDefault });

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
