// === Module 10092: StickerPackInformationPopout ===

// Module 10092 (StickerPackInformationPopout)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import Text_Text from "Text/Text" /* 5195 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4945);
let obj2 = { informationContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 }, headerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }, informationHeader: { lineHeight: 20 }, informationContentContainer: { flexDirection: "row" }, informationContent: { lineHeight: 20 }, informationContentDescription: { flex: 1, marginLeft: 5 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StickerPackInformationPopout(arg0) {
  const cResult = informationHeader(576).c(30);
  ({ stickerPack, onClose, style: informationContentDescription } = arg0);
  informationHeader = closure_5();
  if (cResult[0] === onClose) {
    if (cResult[1] === stickerPack) {
      if (cResult[2] === informationContentDescription) {
        if (cResult[3] === informationHeader.headerContainer) {
          if (cResult[4] === informationHeader.informationContainer) {
            if (cResult[5] === informationHeader.informationContent) {
              if (cResult[6] === informationHeader.informationContentContainer) {
                if (cResult[7] === informationHeader.informationContentDescription) {
                  if (cResult[8] === informationHeader.informationHeader) {
                    return cResult[9];
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let items = [];
  let obj = informationHeader(576);
  if (tmpResult.isStickerPackAnimated(stickerPack)) {
    const obj2 = { key: "animated", description: null };
    const intl = tmp(1128).intl;
    obj2.description = intl.string(tmp(1128).t.W11rMa);
    items.push(obj2);
  }
  if (cResult[10] === informationHeader.informationContent) {
    if (cResult[11] === informationHeader.informationContentContainer) {
      if (cResult[12] === informationHeader.informationContentDescription) {
        let tmp5 = cResult[13];
      }
      if (cResult[14] === informationContentDescription) {
        if (cResult[15] === informationHeader.informationContainer) {
          let items1 = cResult[16];
        }
        ({ headerContainer, informationHeader: informationHeader2 } = informationHeader);
        if (cResult[17] !== stickerPack.name) {
          const intl2 = tmp(1128).intl;
          let obj3 = { stickerPackName: stickerPack.name };
          const formatResult = intl2.format(tmp(1128).t.XDm6yN, obj3);
          cResult[17] = stickerPack.name;
          cResult[18] = formatResult;
          let tmp6 = formatResult;
        } else {
          tmp6 = cResult[18];
        }
        if (cResult[19] === informationHeader.informationHeader) {
          if (cResult[20] === tmp6) {
            let tmp8 = cResult[21];
          }
          const _Symbol = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1128).intl;
            const stringResult = intl3.string(tmp(1128).t.cpT0Cq);
            cResult[22] = stringResult;
            let tmp12 = stringResult;
          } else {
            tmp12 = cResult[22];
          }
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-md/bold", color: "text-brand", children: null };
            const intl4 = tmp(1128).intl;
            obj4.children = intl4.string(tmp(1128).t.cpT0Cq);
            const tmp16 = closure_3(tmp(5195).Text, obj4);
            cResult[23] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[23];
          }
          if (cResult[24] !== onClose) {
            const obj5 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: tmp12, children: tmp14 };
            const tmp19 = closure_3(tmp(6859).PressableOpacity, obj5);
            cResult[24] = onClose;
            cResult[25] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[25];
          }
          if (cResult[26] === informationHeader.headerContainer) {
            if (cResult[27] === tmp17) {
              if (cResult[28] === tmp8) {
                let tmp20 = cResult[29];
              }
              tmp8 = closure_4;
              const obj6 = { style: items1, children: null };
              items1 = [tmp20, items.map(tmp5)];
              obj6.children = items1;
              const tmp25 = closure_4(View, obj6);
              cResult[0] = onClose;
              cResult[1] = stickerPack;
              cResult[2] = informationContentDescription;
              cResult[3] = informationHeader.headerContainer;
              cResult[4] = informationHeader.informationContainer;
              cResult[5] = informationHeader.informationContent;
              ({ informationContentContainer: tmp3[6], informationContentDescription } = informationHeader);
              cResult[7] = informationContentDescription;
              informationHeader = informationHeader.informationHeader;
              cResult[8] = informationHeader;
              cResult[9] = tmp25;
            }
          }
          const obj7 = { style: headerContainer, children: null };
          headerContainer = [tmp8, tmp17];
          obj7.children = headerContainer;
          const tmp23 = closure_4(View, obj7);
          cResult[26] = informationHeader.headerContainer;
          cResult[27] = tmp17;
          cResult[28] = tmp8;
          cResult[29] = tmp23;
          tmp20 = tmp23;
        }
        const obj8 = { style: informationHeader2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp6 };
        const tmp10 = closure_3(tmp(5195).Text, obj8);
        cResult[19] = informationHeader.informationHeader;
        cResult[20] = tmp6;
        cResult[21] = tmp10;
        tmp8 = tmp10;
      }
      const items2 = [informationHeader.informationContainer, informationContentDescription];
      cResult[14] = informationContentDescription;
      cResult[15] = informationHeader.informationContainer;
      cResult[16] = items2;
      items1 = items2;
    }
  }
  function renderItem(children) {
    const obj = { style: informationHeader.informationContentContainer, children: null };
    const items = [React3(Text_Text.Text, { style: informationHeader.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" }), ];
    const obj3 = { style: null, variant: "text-md/medium", color: "text-default", children: children.description };
    const items1 = [, ];
    ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = informationHeader);
    obj3.style = items1;
    items[1] = React3(Text_Text.Text, obj3);
    obj.children = items;
    return React4(View, obj, children.key);
  }
  cResult[10] = informationHeader.informationContent;
  cResult[11] = informationHeader.informationContentContainer;
  cResult[12] = informationHeader.informationContentDescription;
  cResult[13] = renderItem;
  tmp5 = renderItem;
  tmpResult = informationHeader(6445);
}) : (function StickerPackInformationPopout(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = closure_5();
  _require = tmp;
  let items = [];
  if (obj.isStickerPackAnimated(stickerPack)) {
    const obj2 = { key: "animated", description: null };
    const intl = tmp2(1128).intl;
    obj2.description = intl.string(tmp2(1128).t.W11rMa);
    items.push(obj2);
  }
  let obj3 = { style: null, children: null };
  let items1 = [tmp.informationContainer, style];
  obj3.style = items1;
  const obj4 = { style: tmp.headerContainer, children: null };
  const obj5 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1128).intl;
  obj5.children = intl2.format(require("util").t.XDm6yN, { stickerPackName: stickerPack.name });
  const items2 = [closure_3(require("Text/Text").Text, obj5), ];
  const obj7 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl3 = tmp2(1128).intl;
  obj7.accessibilityLabel = intl3.string(require("util").t.cpT0Cq);
  const obj8 = { variant: "text-md/bold", color: "text-brand", children: null };
  const intl4 = tmp2(1128).intl;
  obj8.children = intl4.string(require("util").t.cpT0Cq);
  obj7.children = closure_3(require("Text/Text").Text, obj8);
  items2[1] = closure_3(require("Pressables").PressableOpacity, obj7);
  obj4.children = items2;
  const items3 = [
    closure_4(View, obj4),
    items.map(function renderItem(children) {
      const obj = { style: closure_0.informationContentContainer, children: null };
      const items = [React3(Text_Text.Text, { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" }), ];
      const obj3 = { style: null, variant: "text-md/medium", color: "text-default", children: children.description };
      const items1 = [, ];
      ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
      obj3.style = items1;
      items[1] = React3(Text_Text.Text, obj3);
      obj.children = items;
      return React4(View, obj, children.key);
    })
  ];
  obj3.children = items3;
  return closure_4(View, obj3);
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