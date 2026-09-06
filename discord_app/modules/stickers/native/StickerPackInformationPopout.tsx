// === Module 10400: StickerPackInformationPopout ===

// Module 10400 (StickerPackInformationPopout)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4899 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ View: obj1, FlatList: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { informationContainer: null, headerContainer: null, informationHeader: null, informationContentContainer: null, informationContent: null, informationContentDescription: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: ThemesDefault.radii.xs, shadowColor: ThemesDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 };
createCacheKey[2] = { lineHeight: 20 };
createCacheKey[3] = { flexDirection: "row" };
createCacheKey[4] = { lineHeight: 20 };
createCacheKey[5] = { flex: 1, marginLeft: 5 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  let _require;
  ({ onClose, style } = stickerPack);
  const tmp = callback3();
  _require = tmp;
  let items = [];
  let obj = _require(4899);
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated", description: null };
    const intl = tmp2(1114).intl;
    obj[1] = intl.string(tmp2(1114).t.W11rMa);
    items.push(obj);
  }
  obj = { style: items1, children: null };
  items1 = [tmp.informationContainer, style];
  obj1 = { style: tmp.headerContainer, children: null };
  const obj2 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1114).intl;
  obj2[3] = intl2.format(_require(1114).t.XDm6yN, { stickerPackName: stickerPack.name });
  const items2 = [callback(_require(4556).Text, obj2), ];
  const obj4 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl3 = tmp2(1114).intl;
  obj4[2] = intl3.string(_require(1114).t.cpT0Cq);
  const obj5 = { variant: "text-md/bold", color: "text-brand", children: null };
  const intl4 = tmp2(1114).intl;
  obj5[2] = intl4.string(_require(1114).t.cpT0Cq);
  obj4[3] = callback(_require(4556).Text, obj5);
  items2[1] = callback(_require(5123).PressableOpacity, obj4);
  obj1[1] = items2;
  const items3 = [
    callback2(closure_2, obj1),
    callback(closure_3, {
      data: items,
      renderItem(children) {
        let obj = { style: lib.informationContentContainer, children: null };
        obj = { style: lib.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
        const items = [closure_1_4(lib(closure_1_1[7]).Text, obj), ];
        obj = { style: items1, variant: "text-md/medium", color: "text-default", children: children.item.description };
        items1 = [, ];
        ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = lib);
        items[1] = closure_1_4(lib(closure_1_1[7]).Text, obj);
        obj[1] = items;
        return closure_1_5(closure_1_2, obj);
      }
    })
  ];
  obj[1] = items3;
  return callback2(closure_2, obj);
};
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  const items = [];
  let obj = getStickerExtensionFromFormatType;
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated", description: null };
    const intl = tmp(1114).intl;
    obj[1] = intl.string(tmp(1114).t.W11rMa);
    items.push(obj);
  }
  return items.length > 0;
};