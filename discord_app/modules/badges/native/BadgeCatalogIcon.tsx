// discord_app/modules/badges/native/BadgeCatalogIcon.tsx
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default function BadgeCatalogIcon(style) {
  ({ badge, size } = style);
  const items = [, ,];
  ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
  const found = items.filter((item) => null != item);
  const joined = found.join("|");
  [tmp3, tmp4] = _slicedToArray(noop.useState({ urlsKey: joined, candidateIndex: 0 }), 2);
  c0 = tmp4;
  if (tmp3.urlsKey !== joined) {
    let obj = { urlsKey: joined, candidateIndex: 0 };
    tmp4(obj);
  }
  [][0] = tmp4;
  const items1 = [{ width: size, height: size }, style.style];
  if (null == found[tmp3.candidateIndex]) {
    obj = { style: items1, "aria-hidden": true };
    let obj1 = obj;
  } else {
    obj1 = { style: items1, "aria-hidden": true, children: null };
    const obj2 = { source: null, style: null, onError: null };
    const obj3 = { uri: tmp6 };
    obj2.source = obj3;
    size = { width: null, height: null };
    size.width = size;
    size.height = size;
    obj2.style = size;
    obj2.onError = tmp7;
    obj1.children = jsx(FastImageDefault, { source: null, style: null, onError: null });
  }
  return <View {...obj1} />;
}
