// === Module 10121: StickerPackInformationPopout ===

// Module 10121 (StickerPackInformationPopout)
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import StickersUtils from "StickersUtils" /* 5428 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, FlatList: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { informationContainer: obj2, headerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }, informationHeader: { lineHeight: 20 }, informationContentContainer: { flexDirection: "row" }, informationContent: { lineHeight: 20 }, informationContentDescription: { flex: 1, marginLeft: 5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
let closure_6 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let headerContainer;
  let informationHeader;
  let intl;
  let intl4;
  let items1;
  let items2;
  let onClose;
  let stickerPack;
  let style;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(29);
  ({ stickerPack, onClose, style } = arg0);
  const tmp4 = closure_6();
  _require = tmp4;
  if (cResult[0] !== stickerPack) {
    let items = [];
    const tmpResult = require("StickersUtils");
    if (tmpResult.isStickerPackAnimated(stickerPack)) {
      let obj2 = { key: "animated", description: intl.string(require("intl").t.W11rMa) };
      const push = items.push;
      intl = tmp(1126).intl;
      push(obj2);
    }
    cResult[0] = stickerPack;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.informationContent) {
    if (cResult[3] === tmp4.informationContentContainer) {
      let tmp7;
      if (cResult[4] === tmp4.informationContentDescription) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === style) {
        let tmp8;
        let tmp9;
        if (cResult[7] === tmp4.informationContainer) {
          tmp8 = cResult[8];
        }
        ({ headerContainer, informationHeader } = tmp4);
        if (cResult[9] !== stickerPack.name) {
          const intl2 = tmp(1126).intl;
          let obj3 = { stickerPackName: stickerPack.name };
          const formatResult = intl2.format(require("intl").t.XDm6yN, obj3);
          cResult[9] = stickerPack.name;
          cResult[10] = formatResult;
          tmp9 = formatResult;
        } else {
          tmp9 = cResult[10];
        }
        if (cResult[11] === tmp4.informationHeader) {
          let tmp11;
          let tmp15;
          let tmp17;
          let tmp20;
          if (cResult[12] === tmp9) {
            tmp11 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult = intl3.string(require("intl").t.cpT0Cq);
            cResult[14] = stringResult;
            tmp15 = stringResult;
          } else {
            tmp15 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-md/bold", color: "text-brand", children: intl4.string(require("intl").t.cpT0Cq) };
            const Text = tmp(4886).Text;
            intl4 = tmp(1126).intl;
            const tmp19 = closure_4(Text, obj4);
            cResult[15] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[15];
          }
          if (cResult[16] !== onClose) {
            const obj5 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: tmp15, children: tmp17 };
            const tmp22 = closure_4(require("Pressables").PressableOpacity, obj5);
            cResult[16] = onClose;
            cResult[17] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[17];
          }
          if (cResult[18] === tmp4.headerContainer) {
            if (cResult[19] === tmp20) {
              let tmp23;
              if (cResult[20] === tmp11) {
                tmp23 = cResult[21];
              }
              if (cResult[22] === tmp5) {
                let tmp27;
                if (cResult[23] === tmp7) {
                  tmp27 = cResult[24];
                }
                if (cResult[25] === tmp23) {
                  if (cResult[26] === tmp27) {
                    let tmp31;
                    if (cResult[27] === tmp8) {
                      tmp31 = cResult[28];
                    }
                    return tmp31;
                  }
                }
                const obj6 = { style: tmp8, children: items1 };
                items1 = [tmp23, tmp27];
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
          const obj8 = { style: headerContainer, children: items2 };
          items2 = [tmp11, tmp20];
          const tmp26 = closure_5(closure_2, obj8);
          cResult[18] = tmp4.headerContainer;
          cResult[19] = tmp20;
          cResult[20] = tmp11;
          cResult[21] = tmp26;
          tmp23 = tmp26;
        }
        const obj9 = { style: informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp9 };
        const tmp13 = closure_4(require("Text/Text").Text, obj9);
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
  const fn = function p(item) {
    let items;
    let items1;
    item = item.item;
    const obj = { style: closure_0.informationContentContainer, children: items };
    items = [, ];
    const obj2 = { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
    items[0] = React3(Text_Text.Text, obj2);
    const obj3 = { style: items1, variant: "text-md/medium", color: "text-default", children: item.description };
    items1 = [, ];
    ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
    items[1] = React3(Text_Text.Text, obj3);
    return hasOwnProperty(React2, obj);
  };
  cResult[2] = tmp4.informationContent;
  cResult[3] = tmp4.informationContentContainer;
  cResult[4] = tmp4.informationContentDescription;
  cResult[5] = fn;
  tmp7 = fn;
}) : ((stickerPack) => {
  let Text2;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj6;
  let obj8;
  let onClose;
  let style;
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = closure_6();
  _require = tmp;
  let items = [];
  let obj = require("StickersUtils");
  if (obj.isStickerPackAnimated(stickerPack)) {
    let obj2 = { key: "animated", description: intl.string(require("intl").t.W11rMa) };
    const push = items.push;
    intl = tmp2(1126).intl;
    push(obj2);
  }
  let obj3 = { style: items1, children: items3 };
  items1 = [tmp.informationContainer, style];
  const obj4 = { style: tmp.headerContainer, children: items2 };
  const obj5 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.format(require("intl").t.XDm6yN, obj6) };
  const Text = tmp2(4886).Text;
  intl2 = tmp2(1126).intl;
  obj6 = { stickerPackName: stickerPack.name };
  items2 = [closure_4(Text, obj5), ];
  const obj7 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: intl3.string(require("intl").t.cpT0Cq), children: closure_4(Text2, obj8) };
  const PressableOpacity = tmp2(5909).PressableOpacity;
  intl3 = tmp2(1126).intl;
  obj8 = { variant: "text-md/bold", color: "text-brand", children: intl4.string(require("intl").t.cpT0Cq) };
  Text2 = tmp2(4886).Text;
  intl4 = tmp2(1126).intl;
  items2[1] = closure_4(PressableOpacity, obj7);
  items3 = [closure_5(closure_2, obj4), ];
  const obj9 = {
    data: items,
    renderItem(item) {
      let items;
      let items1;
      item = item.item;
      const obj = { style: closure_0.informationContentContainer, children: items };
      items = [, ];
      const obj2 = { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
      items[0] = React3(Text_Text.Text, obj2);
      const obj3 = { style: items1, variant: "text-md/medium", color: "text-default", children: item.description };
      items1 = [, ];
      ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
      items[1] = React3(Text_Text.Text, obj3);
      return hasOwnProperty(React2, obj);
    }
  };
  items3[1] = closure_4(closure_3, obj9);
  return closure_5(closure_2, obj3);
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default tmp5;
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  let intl;
  const items = [];
  const obj = StickersUtils;
  if (obj.isStickerPackAnimated(stickerPack)) {
    const push = items.push;
    const obj2 = { key: "animated", description: intl.string(intl5.t.W11rMa) };
    intl = intl5.intl;
    push(obj2);
  }
  return items.length > 0;
};