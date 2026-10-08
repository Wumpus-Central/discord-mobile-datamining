// === Module 9719: StickerPackInformationPopout ===

// Module 9719 (StickerPackInformationPopout)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, FlatList: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { informationContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 }, headerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }, informationHeader: { lineHeight: 20 }, informationContentContainer: { flexDirection: "row" }, informationContent: { lineHeight: 20 }, informationContentDescription: { flex: 1, marginLeft: 5 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StickerPackInformationPopout(arg0) {
  const cResult = require("c").c(29);
  ({ stickerPack, onClose, style } = arg0);
  const tmp4 = closure_6();
  _require = tmp4;
  if (cResult[0] !== stickerPack) {
    let items = [];
    if (tmpResult.isStickerPackAnimated(stickerPack)) {
      const obj2 = { key: "animated", description: null };
      const intl = tmp(1126).intl;
      obj2.description = intl.string(tmp(1126).t.W11rMa);
      items.push(obj2);
    }
    cResult[0] = stickerPack;
    cResult[1] = items;
    let tmp5 = items;
    tmpResult = tmp(5745);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.informationContent) {
    if (cResult[3] === tmp4.informationContentContainer) {
      if (cResult[4] === tmp4.informationContentDescription) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === style) {
        if (cResult[7] === tmp4.informationContainer) {
          let tmp8 = cResult[8];
        }
        ({ headerContainer, informationHeader } = tmp4);
        if (cResult[9] !== stickerPack.name) {
          const intl2 = tmp(1126).intl;
          let obj3 = { stickerPackName: stickerPack.name };
          const formatResult = intl2.format(tmp(1126).t.XDm6yN, obj3);
          cResult[9] = stickerPack.name;
          cResult[10] = formatResult;
          let tmp9 = formatResult;
        } else {
          tmp9 = cResult[10];
        }
        if (cResult[11] === tmp4.informationHeader) {
          if (cResult[12] === tmp9) {
            let tmp11 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult = intl3.string(tmp(1126).t.cpT0Cq);
            cResult[14] = stringResult;
            let tmp15 = stringResult;
          } else {
            tmp15 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-md/bold", color: "text-brand", children: null };
            const intl4 = tmp(1126).intl;
            obj4.children = intl4.string(tmp(1126).t.cpT0Cq);
            const tmp19 = closure_4(tmp(5086).Text, obj4);
            cResult[15] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[15];
          }
          if (cResult[16] !== onClose) {
            const obj5 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: tmp15, children: tmp17 };
            const tmp22 = closure_4(tmp(6189).PressableOpacity, obj5);
            cResult[16] = onClose;
            cResult[17] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[17];
          }
          if (cResult[18] === tmp4.headerContainer) {
            if (cResult[19] === tmp20) {
              if (cResult[20] === tmp11) {
                let tmp23 = cResult[21];
              }
              if (cResult[22] === tmp5) {
                if (cResult[23] === tmp7) {
                  let tmp27 = cResult[24];
                }
                if (cResult[25] === tmp23) {
                  if (cResult[26] === tmp27) {
                    if (cResult[27] === tmp8) {
                      let tmp31 = cResult[28];
                    }
                    return tmp31;
                  }
                }
                const obj6 = { style: tmp8, children: null };
                let items1 = [tmp23, tmp27];
                obj6.children = items1;
                const tmp34 = closure_5(closure_2, obj6);
                cResult[25] = tmp23;
                cResult[26] = tmp27;
                cResult[27] = tmp8;
                cResult[28] = tmp34;
                tmp31 = tmp34;
              }
              const obj7 = { data: tmp5, renderItem: tmp7 };
              const tmp30 = closure_4(closure_3, obj7);
              cResult[22] = tmp5;
              cResult[23] = tmp7;
              cResult[24] = tmp30;
              tmp27 = tmp30;
            }
          }
          const obj8 = { style: headerContainer, children: null };
          const items2 = [tmp11, tmp20];
          obj8.children = items2;
          const tmp26 = closure_5(closure_2, obj8);
          cResult[18] = tmp4.headerContainer;
          cResult[19] = tmp20;
          cResult[20] = tmp11;
          cResult[21] = tmp26;
          tmp23 = tmp26;
        }
        const obj9 = { style: informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp9 };
        const tmp13 = closure_4(tmp(5086).Text, obj9);
        cResult[11] = tmp4.informationHeader;
        cResult[12] = tmp9;
        cResult[13] = tmp13;
        tmp11 = tmp13;
      }
      const items3 = [tmp4.informationContainer, style];
      cResult[6] = style;
      cResult[7] = tmp4.informationContainer;
      cResult[8] = items3;
      tmp8 = items3;
    }
  }
  function renderItem(children) {
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
  cResult[2] = tmp4.informationContent;
  cResult[3] = tmp4.informationContentContainer;
  cResult[4] = tmp4.informationContentDescription;
  cResult[5] = renderItem;
  tmp7 = renderItem;
  let obj = require("c");
}) : (function StickerPackInformationPopout(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = closure_6();
  _require = tmp;
  let items = [];
  if (obj.isStickerPackAnimated(stickerPack)) {
    const obj2 = { key: "animated", description: null };
    const intl = tmp2(1126).intl;
    obj2.description = intl.string(tmp2(1126).t.W11rMa);
    items.push(obj2);
  }
  let obj3 = { style: null, children: null };
  let items1 = [tmp.informationContainer, style];
  obj3.style = items1;
  const obj4 = { style: tmp.headerContainer, children: null };
  const obj5 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1126).intl;
  obj5.children = intl2.format(require("util").t.XDm6yN, { stickerPackName: stickerPack.name });
  const items2 = [closure_4(require("Text/Text").Text, obj5), ];
  const obj7 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl3 = tmp2(1126).intl;
  obj7.accessibilityLabel = intl3.string(require("util").t.cpT0Cq);
  const obj8 = { variant: "text-md/bold", color: "text-brand", children: null };
  const intl4 = tmp2(1126).intl;
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
});
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