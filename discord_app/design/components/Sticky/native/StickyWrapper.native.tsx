// discord_app/design/components/Sticky/native/StickyWrapper.native.tsx
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c2 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const wrapper = StyleSheet.create({
  wrapper: { height: "100%", width: "100%" },
  header: { zIndex: 1 },
  androidHeader: { position: "absolute", top: 0, left: 0, right: 0 },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sticky/native/StickyWrapper.native.tsx");

export const StickyWrapper = function StickyWrapper(header) {
  header = header.header;
  let obj = { style: null, pointerEvents: header.pointerEvents, children: null };
  const items = [header.style, wrapper.wrapper];
  obj.style = items;
  let tmp5Result = null;
  if (null != header) {
    const items1 = [tmp3.header];
    let androidHeader;
    if (obj2.isAndroid()) {
      androidHeader = tmp3.androidHeader;
    }
    obj = { style: null, children: null };
    items1[1] = androidHeader;
    obj.style = items1;
    obj.children = header;
    tmp5Result = React3(tmp2, obj);
    obj2 = utils_PlatformUtils;
  }
  const items2 = [tmp5Result, header.children];
  obj.children = items2;
  return React4(React2, obj);
};
