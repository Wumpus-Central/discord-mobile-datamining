// discord_app/modules/stickers/native/StickerPackInformationPopout.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import getStickerExtensionFromFormatType from "../StickersUtils.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { getStickerExtensionFromFormatType } from "../StickersUtils.tsx";

require = fn;
noopAll;
({ View: obj1, FlatList: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: ThemesDefault.radii.xs, shadowColor: ThemesDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 };
createCacheKey[2] = { lineHeight: 20 };
createCacheKey[3] = { flexDirection: "row" };
createCacheKey[4] = { lineHeight: 20 };
createCacheKey[5] = { flex: 1, marginLeft: 5 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = callback3();
  const _require = tmp;
  let items = [];
  let obj = getStickerExtensionFromFormatType;
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated", description: null };
    const intl = tmp2(1236).intl;
    obj[1] = intl.string(tmp2(1236).t.W11rMa);
    items.push(obj);
  }
  obj = { style: items1, children: null };
  items1 = [tmp.informationContainer, style];
  obj1 = { style: tmp.headerContainer, children: null };
  const obj2 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1236).intl;
  obj2[3] = intl2.format(require("../../../intl/index.native.tsx").t.XDm6yN, { stickerPackName: stickerPack.name });
  const items2 = [callback(require("../../../design/components/Text/native/Text.tsx").Text, obj2), ];
  const obj4 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl3 = tmp2(1236).intl;
  obj4[2] = intl3.string(require("../../../intl/index.native.tsx").t.cpT0Cq);
  const obj5 = { variant: "text-md/bold", color: "text-brand", children: null };
  const intl4 = tmp2(1236).intl;
  obj5[2] = intl4.string(require("../../../intl/index.native.tsx").t.cpT0Cq);
  obj4[3] = callback(require("../../../design/components/Text/native/Text.tsx").Text, obj5);
  items2[1] = callback(require("../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, obj4);
  obj1[1] = items2;
  const items3 = [
    callback2(closure_2, obj1),
    callback(closure_3, {
      data: items,
      renderItem(children) {
        let obj = { style: lib.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
        const items = [closure_1_4(lib(dependencyMap[7]).Text, obj), ];
        obj = { style: items1, variant: "text-md/medium", color: "text-default", children: children.item.description };
        items1 = [, ];
        ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = lib);
        items[1] = closure_1_4(lib(dependencyMap[7]).Text, obj);
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
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.W11rMa);
    items.push(obj);
  }
  return items.length > 0;
};