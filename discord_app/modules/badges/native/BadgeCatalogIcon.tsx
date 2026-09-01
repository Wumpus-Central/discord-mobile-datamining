// === Module 8996: BadgeCatalogIcon ===

// Module 8996 (BadgeCatalogIcon)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const re7 = /\.svg(?:[?#]|$)/i;
const result = require("set").fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default function BadgeCatalogIcon(style) {
  ({ badge, size } = style);
  let complex_icon_animated_url;
  let isMatch;
  dependencyMap = undefined;
  let callback;
  complex_icon_animated_url = badge.simple_icon_url;
  if (complex_icon_animated_url == null) {
    complex_icon_animated_url = badge.complex_icon_static_url;
  }
  if (complex_icon_animated_url == null) {
    complex_icon_animated_url = badge.complex_icon_animated_url;
  }
  isMatch = null != complex_icon_animated_url;
  if (isMatch) {
    isMatch = regex.test(complex_icon_animated_url);
  }
  [tmp4, c2] = callback(React.useState(null), 2);
  const tmp5 = callback(React.useState(null), 2);
  callback = tmp5[1];
  const items = [complex_icon_animated_url, isMatch];
  const effect = React.useEffect(() => {
    if (null != abortController) {
      if (isMatch) {
        if (null == obj.getCachedSvgXml(tmp)) {
          const _AbortController = AbortController;
          abortController = new AbortController();
          const svgXml = tmp3(tmp4[4]).loadSvgXml(tmp, abortController.signal);
          const tmp3Result = tmp3(tmp4[4]);
          svgXml.then((arg0) => {
            if (!abortController.signal.aborted) {
              const obj = { url: null, xml: null };
              obj[0] = abortController;
              obj[1] = arg0;
              closure_1_2(obj);
            }
          }).catch(() => {

          });
          return () => abortController.abort();
        }
        obj = complex_icon_animated_url(_undefined[4]);
        tmp3 = complex_icon_animated_url;
        tmp4 = _undefined;
      }
    }
  }, items);
  [][0] = complex_icon_animated_url;
  const items1 = [{ width: size, height: size }, style.style];
  if (null == complex_icon_animated_url) {
    let obj = { style: null, "aria-hidden": true };
    obj[0] = items1;
    return <View style={null} aria-hidden />;
  } else if (isMatch) {
    let url;
    if (tmp4 != null) {
      url = tmp4.url;
    }
    if (url === complex_icon_animated_url) {
      let xml = tmp4.xml;
    } else {
      let obj5 = complex_icon_animated_url(8997);
      xml = obj5.getCachedSvgXml(complex_icon_animated_url);
    }
    obj = { style: null, "aria-hidden": true, children: null };
    obj[0] = items1;
    let tmp15Result = null;
    if (null != xml) {
      obj1 = { xml: null, width: null, height: null };
      obj1[0] = xml;
      obj1[1] = size;
      obj1[2] = size;
      tmp15Result = tmp15(complex_icon_animated_url(8241).SvgXml, obj1);
    }
    obj[2] = tmp15Result;
    return <View style={null} aria-hidden>{null}</View>;
  } else {
    if (tmp5[0] === complex_icon_animated_url) {
      const obj2 = { style: null, "aria-hidden": true };
      obj2[0] = items1;
      obj = obj2;
    } else {
      obj = { style: null, "aria-hidden": true, children: null };
      obj[0] = items1;
      const obj3 = { source: null, style: null, onError: null };
      const obj4 = { uri: null };
      obj4[0] = complex_icon_animated_url;
      obj3[0] = obj4;
      obj5 = { width: null, height: null };
      obj5[0] = size;
      obj5[1] = size;
      obj3[1] = obj5;
      obj3[2] = tmp7;
      obj[2] = tmp8(isMatch(5493), obj3);
    }
    return <View {...obj} />;
  }
  let tmp3 = callback(React.useState(null), 2);
};