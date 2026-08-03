import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
({ View: obj1, FlatList: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { informationContainer: null, headerContainer: null, informationHeader: null, informationContentContainer: null, informationContent: null, informationContentDescription: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: require("Themes").radii.xs, shadowColor: require("Themes").colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 };
createCacheKey[2] = { lineHeight: 20 };
createCacheKey[3] = { flexDirection: "row" };
createCacheKey[4] = { lineHeight: 20 };
createCacheKey[5] = { flex: 1, marginLeft: 5 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
  let onClose;
  let style;
  stickerPack = stickerPack.stickerPack;
  let _require;
  ({ onClose, style } = stickerPack);
  const tmp = createCacheKey();
  _require = tmp;
  let items = [];
  let obj = _require(4528);
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated", description: null };
    const intl = tmp2(1236).intl;
    obj[1] = intl.string(tmp2(1236).t.W11rMa);
    items.push(obj);
  }
  obj = { style: items1, children: null };
  items1 = [tmp.informationContainer, style];
  const obj1 = { style: tmp.headerContainer, children: null };
  const obj2 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1236).intl;
  obj2[3] = intl2.format(_require(1236).t.XDm6yN, { stickerPackName: stickerPack.name });
  const items2 = [callback(_require(4189).Text, obj2), ];
  const obj4 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl3 = tmp2(1236).intl;
  obj4[2] = intl3.string(_require(1236).t.cpT0Cq);
  const obj5 = { variant: "text-md/bold", color: "text-brand", children: null };
  const intl4 = tmp2(1236).intl;
  obj5[2] = intl4.string(_require(1236).t.cpT0Cq);
  obj4[3] = callback(_require(4189).Text, obj5);
  items2[1] = callback(_require(4721).PressableOpacity, obj4);
  obj1[1] = items2;
  const items3 = [
    callback2(closure_2, obj1),
    callback(closure_3, {
      data: items,
      renderItem(children) {
        let obj = { style: _undefined.informationContentContainer, children: null };
        obj = { style: _undefined.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
        const items = [outer1_4(_undefined(outer1_1[7]).Text, obj), ];
        obj = { style: items1, variant: "text-md/medium", color: "text-default", children: children.item.description };
        items1 = [, ];
        ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = _undefined);
        items[1] = outer1_4(_undefined(outer1_1[7]).Text, obj);
        obj[1] = items;
        return outer1_5(outer1_2, obj);
      }
    })
  ];
  obj[1] = items3;
  return callback2(closure_2, obj);
};
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  const items = [];
  let obj = require(4528) /* getStickerExtensionFromFormatType */;
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated", description: null };
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.W11rMa);
    items.push(obj);
  }
  return items.length > 0;
};