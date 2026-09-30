// === Module 10855: BadgeCatalogIcon ===

// Module 10855 (BadgeCatalogIcon)
import FastImageDefault from "FastImage" /* 6095 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10856 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

function BadgeCatalogRasterIcon(style) {
  ({ badge, size } = style);
  const items = [, , ];
  ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
  const found = items.filter((item) => null != item);
  const joined = found.join("|");
  [tmp3, tmp4] = noop.useState({ urlsKey: joined, candidateIndex: 0 });
  c0 = tmp4;
  if (tmp3.urlsKey !== joined) {
    let obj = { urlsKey: joined, candidateIndex: 0 };
    tmp4(obj);
  }
  [][0] = tmp4;
  const items1 = [{ width: size, height: size }, style.style];
  if (null == found[tmp3.candidateIndex]) {
    const obj2 = { style: items1, "aria-hidden": true };
    let obj3 = obj2;
  } else {
    obj3 = { style: items1, "aria-hidden": true, children: null };
    const obj4 = { source: null, style: null, onError: null };
    const obj5 = { uri: tmp6 };
    obj4.source = obj5;
    const size1 = { width: size, height: size };
    obj4.style = size1;
    obj4.onError = tmp7;
    obj3.children = jsx(FastImageDefault, { source: null, style: null, onError: null });
  }
  return <View {...obj3} />;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default function BadgeCatalogIcon(arg0) {
  ({ badge, size, style } = arg0);
  if (size > 24) {
    if (null != badge.simple_icon_url) {
      const obj = { url: badge.simple_icon_url, height: size, fallbackUrl: badge.simple_icon_raster_url, style };
      let tmp2 = jsx(BadgeArtImageDefault, { url: badge.simple_icon_url, height: size, fallbackUrl: badge.simple_icon_raster_url, style });
    }
    return tmp2;
  }
  tmp2 = <BadgeCatalogRasterIcon badge={badge} size={size} style={style} />;
};