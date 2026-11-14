// _runtime/metro/01798__.js
import _mod1668 from "01668__.js";
import _mod1799 from "01799__.js";

require = arg1;
const dependencyMap = arg6;

export function initSvgCssSupport() {
  const result = _mod1668.registerComponentPropsBuilder("RNSVGCircle", _mod1799.SVG_CIRCLE_PROPERTIES_CONFIG);
  const result1 = _mod1668.registerComponentPropsBuilder("RNSVGEllipse", _mod1799.SVG_ELLIPSE_PROPERTIES_CONFIG);
  const result2 = _mod1668.registerComponentPropsBuilder("RNSVGImage", _mod1799.SVG_IMAGE_PROPERTIES_CONFIG);
  const result3 = _mod1668.registerComponentPropsBuilder("RNSVGLine", _mod1799.SVG_LINE_PROPERTIES_CONFIG);
  const result4 = _mod1668.registerComponentPropsBuilder(
    "RNSVGLinearGradient",
    _mod1799.SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG,
  );
  const result5 = _mod1668.registerComponentPropsBuilder(
    "RNSVGRadialGradient",
    _mod1799.SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG,
  );
  const result6 = _mod1668.registerComponentPropsBuilder("RNSVGPath", _mod1799.SVG_PATH_PROPERTIES_CONFIG);
  const result7 = _mod1668.registerComponentPropsBuilder("RNSVGPattern", _mod1799.SVG_PATTERN_PROPERTIES_CONFIG);
  const obj9 = _mod1668;
  const compoundComponentName = _mod1668.getCompoundComponentName("RNSVGPath", "Polygon");
  const result8 = obj9.registerComponentPropsBuilder(compoundComponentName, _mod1799.SVG_POLYGON_PROPERTIES_CONFIG);
  const obj11 = _mod1668;
  const compoundComponentName1 = _mod1668.getCompoundComponentName("RNSVGPath", "Polyline");
  const result9 = obj11.registerComponentPropsBuilder(compoundComponentName1, _mod1799.SVG_POLYLINE_PROPERTIES_CONFIG);
  const result10 = _mod1668.registerComponentPropsBuilder("RNSVGRect", _mod1799.SVG_RECT_PROPERTIES_CONFIG);
  const result11 = _mod1668.registerComponentPropsBuilder("RNSVGText", _mod1799.SVG_TEXT_PROPERTIES_CONFIG);
  const result12 = _mod1668.registerComponentPropsBuilder(/^RNSVG/, _mod1799.SVG_COMMON_PROPERTIES_CONFIG);
}
