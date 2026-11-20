// === Module 1796: ? ===

// Module 1796
import _mod1666 from "module_1666" /* 1666 */;
import _mod1797 from "module_1797" /* 1797 */;

require = arg1;
const dependencyMap = arg6;

export function initSvgCssSupport() {
  const result = _mod1666.registerComponentPropsBuilder("RNSVGCircle", _mod1797.SVG_CIRCLE_PROPERTIES_CONFIG);
  const result1 = _mod1666.registerComponentPropsBuilder("RNSVGEllipse", _mod1797.SVG_ELLIPSE_PROPERTIES_CONFIG);
  const result2 = _mod1666.registerComponentPropsBuilder("RNSVGImage", _mod1797.SVG_IMAGE_PROPERTIES_CONFIG);
  const result3 = _mod1666.registerComponentPropsBuilder("RNSVGLine", _mod1797.SVG_LINE_PROPERTIES_CONFIG);
  const result4 = _mod1666.registerComponentPropsBuilder("RNSVGLinearGradient", _mod1797.SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG);
  const result5 = _mod1666.registerComponentPropsBuilder("RNSVGRadialGradient", _mod1797.SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG);
  const result6 = _mod1666.registerComponentPropsBuilder("RNSVGPath", _mod1797.SVG_PATH_PROPERTIES_CONFIG);
  const result7 = _mod1666.registerComponentPropsBuilder("RNSVGPattern", _mod1797.SVG_PATTERN_PROPERTIES_CONFIG);
  const obj9 = _mod1666;
  const compoundComponentName = _mod1666.getCompoundComponentName("RNSVGPath", "Polygon");
  const result8 = obj9.registerComponentPropsBuilder(compoundComponentName, _mod1797.SVG_POLYGON_PROPERTIES_CONFIG);
  const obj11 = _mod1666;
  const compoundComponentName1 = _mod1666.getCompoundComponentName("RNSVGPath", "Polyline");
  const result9 = obj11.registerComponentPropsBuilder(compoundComponentName1, _mod1797.SVG_POLYLINE_PROPERTIES_CONFIG);
  const result10 = _mod1666.registerComponentPropsBuilder("RNSVGRect", _mod1797.SVG_RECT_PROPERTIES_CONFIG);
  const result11 = _mod1666.registerComponentPropsBuilder("RNSVGText", _mod1797.SVG_TEXT_PROPERTIES_CONFIG);
  const result12 = _mod1666.registerComponentPropsBuilder(/^RNSVG/, _mod1797.SVG_COMMON_PROPERTIES_CONFIG);
}