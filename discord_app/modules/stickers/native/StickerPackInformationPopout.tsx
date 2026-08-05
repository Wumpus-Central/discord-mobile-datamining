// discord_app/modules/stickers/native/StickerPackInformationPopout.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getStickerExtensionFromFormatType } from "../StickersUtils.tsx";

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
  let obj = _getStickerExtensionFromFormatType;
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
  obj2[3] = intl2.format(_getSystemLocale.t.XDm6yN, { stickerPackName: stickerPack.name });
  const items2 = [callback(_Text.Text, obj2), ];
  const obj4 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl3 = tmp2(1236).intl;
  obj4[2] = intl3.string(_getSystemLocale.t.cpT0Cq);
  const obj5 = { variant: "text-md/bold", color: "text-brand", children: null };
  const intl4 = tmp2(1236).intl;
  obj5[2] = intl4.string(_getSystemLocale.t.cpT0Cq);
  obj4[3] = callback(_Text.Text, obj5);
  items2[1] = callback(_PressableBase.PressableOpacity, obj4);
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
  let obj = getStickerExtensionFromFormatType;
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated", description: null };
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.W11rMa);
    items.push(obj);
  }
  return items.length > 0;
};