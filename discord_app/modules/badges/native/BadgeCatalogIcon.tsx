// === Module 11190: BadgeCatalogIcon ===

// Module 11190 (BadgeCatalogIcon)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const re7 = /\.svg(?:[?#]|$)/i;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default function BadgeCatalogIcon(style) {
  ({ badge, size } = style);
  let isMatch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let complex_icon_animated_url = badge.simple_icon_url;
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
  [tmp4, c2] = _slicedToArray(noop.useState(null), 2);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp5[1];
  const items = [complex_icon_animated_url, isMatch];
  const effect = noop.useEffect(() => {
    if (null != abortController) {
      if (isMatch) {
        if (null == obj.getCachedSvgXml(tmp)) {
          const _AbortController = AbortController;
          abortController = new AbortController();
          const svgXml = complex_icon_animated_url(_undefined[4]).loadSvgXml(tmp, abortController.signal);
          const tmp3Result = complex_icon_animated_url(_undefined[4]);
          svgXml.then((xml) => {
            if (!abortController.signal.aborted) {
              const obj = { url: complex_icon_animated_url, xml };
              c2(obj);
            }
          }).catch(() => {

          });
          return () => abortController.abort();
        }
        obj = complex_icon_animated_url(_undefined[4]);
      }
    }
  }, items);
  [][0] = complex_icon_animated_url;
  const items1 = [{ width: size, height: size }, style.style];
  if (null == complex_icon_animated_url) {
    let obj = { style: items1, "aria-hidden": true };
    return <View style={items1} aria-hidden />;
  } else if (isMatch) {
    let url;
    if (tmp4 != null) {
      url = tmp4.url;
    }
    if (url === complex_icon_animated_url) {
      let xml = tmp4.xml;
    } else {
      xml = complex_icon_animated_url(11191).getCachedSvgXml(complex_icon_animated_url);
      const obj6 = complex_icon_animated_url(11191);
    }
    obj = { style: items1, "aria-hidden": true, children: null };
    let tmp15Result = null;
    if (null != xml) {
      size = { xml, width: null, height: null };
      size.width = size;
      size.height = size;
      tmp15Result = jsx(complex_icon_animated_url(8453).SvgXml, { xml, width: null, height: null });
    }
    obj.children = tmp15Result;
    return <View style={items1} aria-hidden>{null}</View>;
  } else {
    if (tmp5[0] === complex_icon_animated_url) {
      const obj1 = { style: items1, "aria-hidden": true };
      obj = obj1;
    } else {
      obj = { style: items1, "aria-hidden": true, children: null };
      const obj2 = { source: null, style: null, onError: null };
      const obj3 = { uri: complex_icon_animated_url };
      obj2.source = obj3;
      const size1 = { width: size, height: size };
      obj2.style = size1;
      obj2.onError = tmp7;
      obj.children = jsx(isMatch(5587), { source: null, style: null, onError: null });
    }
    return <View {...obj} />;
  }
  const tmp3 = _slicedToArray(noop.useState(null), 2);
};