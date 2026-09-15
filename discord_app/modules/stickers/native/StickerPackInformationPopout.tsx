// === Module 10532: StickerPackInformationPopout ===

// Module 10532 (StickerPackInformationPopout)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4635 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, FlatList: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4639);
let obj2 = { informationContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 }, headerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }, informationHeader: { lineHeight: 20 }, informationContentContainer: { flexDirection: "row" }, informationContent: { lineHeight: 20 }, informationContentDescription: { flex: 1, marginLeft: 5 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = closure_6();
  _require = tmp;
  let items = [];
  if (obj.isStickerPackAnimated(stickerPack)) {
    const obj2 = { key: "animated", description: null };
    const intl = tmp2(1115).intl;
    obj2.description = intl.string(tmp2(1115).t.W11rMa);
    items.push(obj2);
  }
  let obj3 = { style: null, children: null };
  let items1 = [tmp.informationContainer, style];
  obj3.style = items1;
  const obj4 = { style: tmp.headerContainer, children: null };
  const obj5 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1115).intl;
  obj5.children = intl2.format(require("util").t.XDm6yN, { stickerPackName: stickerPack.name });
  const items2 = [closure_4(require("Text/Text").Text, obj5), ];
  const obj7 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl3 = tmp2(1115).intl;
  obj7.accessibilityLabel = intl3.string(require("util").t.cpT0Cq);
  const obj8 = { variant: "text-md/bold", color: "text-brand", children: null };
  const intl4 = tmp2(1115).intl;
  obj8.children = intl4.string(require("util").t.cpT0Cq);
  obj7.children = closure_4(require("Text/Text").Text, obj8);
  items2[1] = closure_4(require("Pressables").PressableOpacity, obj7);
  obj4.children = items2;
  const items3 = [
    closure_5(closure_2, obj4),
    closure_4(closure_3, {
      data: items,
      renderItem(children) {
        const obj = { style: closure_0.informationContentContainer, children: null };
        const items = [React4(Text_Text.Text, { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" }), ];
        const obj3 = { style: null, variant: "text-md/medium", color: "text-default", children: children.item.description };
        const items1 = [, ];
        ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
        obj3.style = items1;
        items[1] = React4(Text_Text.Text, obj3);
        obj.children = items;
        return hasOwnProperty(React2, obj);
      }
    })
  ];
  obj3.children = items3;
  return closure_5(closure_2, obj3);
};
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  const items = [];
  if (obj.isStickerPackAnimated(stickerPack)) {
    const obj2 = { key: "animated", description: null };
    const intl = util.intl;
    obj2.description = intl.string(util.t.W11rMa);
    items.push(obj2);
  }
  return items.length > 0;
};