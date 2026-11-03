// _runtime/metro/01795__.js
import _mod1665 from "01665__.js";
import _mod1796 from "01796__.js";

require = arg1;
const dependencyMap = arg6;

export function initSvgCssSupport() {
  const result = _mod1665.registerComponentPropsBuilder("RNSVGCircle", _mod1796.SVG_CIRCLE_PROPERTIES_CONFIG);
  const result1 = _mod1665.registerComponentPropsBuilder("RNSVGEllipse", _mod1796.SVG_ELLIPSE_PROPERTIES_CONFIG);
  const result2 = _mod1665.registerComponentPropsBuilder("RNSVGImage", _mod1796.SVG_IMAGE_PROPERTIES_CONFIG);
  const result3 = _mod1665.registerComponentPropsBuilder("RNSVGLine", _mod1796.SVG_LINE_PROPERTIES_CONFIG);
  const result4 = _mod1665.registerComponentPropsBuilder(
    "RNSVGLinearGradient",
    _mod1796.SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG,
  );
  const result5 = _mod1665.registerComponentPropsBuilder(
    "RNSVGRadialGradient",
    _mod1796.SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG,
  );
  const result6 = _mod1665.registerComponentPropsBuilder("RNSVGPath", _mod1796.SVG_PATH_PROPERTIES_CONFIG);
  const result7 = _mod1665.registerComponentPropsBuilder("RNSVGPattern", _mod1796.SVG_PATTERN_PROPERTIES_CONFIG);
  const obj9 = _mod1665;
  const compoundComponentName = _mod1665.getCompoundComponentName("RNSVGPath", "Polygon");
  const result8 = obj9.registerComponentPropsBuilder(compoundComponentName, _mod1796.SVG_POLYGON_PROPERTIES_CONFIG);
  const obj11 = _mod1665;
  const compoundComponentName1 = _mod1665.getCompoundComponentName("RNSVGPath", "Polyline");
  const result9 = obj11.registerComponentPropsBuilder(compoundComponentName1, _mod1796.SVG_POLYLINE_PROPERTIES_CONFIG);
  const result10 = _mod1665.registerComponentPropsBuilder("RNSVGRect", _mod1796.SVG_RECT_PROPERTIES_CONFIG);
  const result11 = _mod1665.registerComponentPropsBuilder("RNSVGText", _mod1796.SVG_TEXT_PROPERTIES_CONFIG);
  const result12 = _mod1665.registerComponentPropsBuilder(/^RNSVG/, _mod1796.SVG_COMMON_PROPERTIES_CONFIG);
}
