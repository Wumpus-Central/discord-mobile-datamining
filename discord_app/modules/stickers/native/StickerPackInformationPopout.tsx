// === Module 10400: StickerPackInformationPopout ===

// Module 10400 (StickerPackInformationPopout)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import StickersUtils from "StickersUtils" /* 4899 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, FlatList: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { informationContainer: null, headerContainer: null, informationHeader: null, informationContentContainer: null, informationContent: null, informationContentDescription: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
createStyles.informationContainer = createStyles;
createStyles.headerContainer = { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 };
createStyles.informationHeader = { lineHeight: 20 };
createStyles.informationContentContainer = { flexDirection: "row" };
createStyles.informationContent = { lineHeight: 20 };
createStyles.informationContentDescription = { flex: 1, marginLeft: 5 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = closure_6();
  _require = tmp;
  let items = [];
  let obj = require("StickersUtils");
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated", description: null };
    const intl = tmp2(1114).intl;
    obj.description = intl.string(tmp2(1114).t.W11rMa);
    items.push(obj);
  }
  obj = { style: null, children: null };
  let items1 = [tmp.informationContainer, style];
  obj.style = items1;
  const obj1 = { style: tmp.headerContainer, children: null };
  const obj2 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1114).intl;
  obj2.children = intl2.format(require("util").t.XDm6yN, { stickerPackName: stickerPack.name });
  const items2 = [closure_4(require("Text/Text").Text, obj2), ];
  const obj4 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl3 = tmp2(1114).intl;
  obj4.accessibilityLabel = intl3.string(require("util").t.cpT0Cq);
  const obj5 = { variant: "text-md/bold", color: "text-brand", children: null };
  const intl4 = tmp2(1114).intl;
  obj5.children = intl4.string(require("util").t.cpT0Cq);
  obj4.children = closure_4(require("Text/Text").Text, obj5);
  items2[1] = closure_4(require("Pressables").PressableOpacity, obj4);
  obj1.children = items2;
  const items3 = [
    closure_5(closure_2, obj1),
    closure_4(closure_3, {
      data: items,
      renderItem(children) {
        let obj = { style: closure_0.informationContentContainer, children: null };
        obj = { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
        const items = [React4(Text_Text.Text, obj), ];
        obj = { style: null, variant: "text-md/medium", color: "text-default", children: children.item.description };
        const items1 = [, ];
        ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
        obj.style = items1;
        items[1] = React4(Text_Text.Text, obj);
        obj.children = items;
        return hasOwnProperty(React2, obj);
      }
    })
  ];
  obj.children = items3;
  return closure_5(closure_2, obj);
};
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  const items = [];
  let obj = StickersUtils;
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated", description: null };
    const intl = util.intl;
    obj.description = intl.string(util.t.W11rMa);
    items.push(obj);
  }
  return items.length > 0;
};