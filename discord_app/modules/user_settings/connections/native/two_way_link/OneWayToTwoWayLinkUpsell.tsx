// === Module 14790: OneWayToTwoWayLinkUpsell ===

// Module 14790 (OneWayToTwoWayLinkUpsell)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10367 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let markAsDismissed;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const Fonts = Constants.Fonts;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { flexDirection: "row", marginBottom: 4, alignItems: "center" }, titleContainer: { flexGrow: 1, flexShrink: 1 }, title: obj3, body: obj4, newContainer: { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 }, reconnectButton: { marginTop: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, margin: 16, padding: 12, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 16));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = markAsDismissed(576);
  const cResult = obj.c(5);
  const tmp = markAsDismissed;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_8();
  if (cResult[0] !== markAsDismissed) {
    const fn = function o() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    };
    const items = [markAsDismissed];
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] !== tmp4.newContainer) {
    const obj2 = { containerStyle: tmp4.newContainer, variant: "text-xs/bold" };
    const tmp10 = closure_6(tmp(1188).NewTag, obj2);
    cResult[3] = tmp4.newContainer;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const tmp = closure_8();
  const effect = react.useEffect(() => markAsDismissed(ContentDismissActionType.UNKNOWN), items);
  const obj = { containerStyle: tmp.newContainer, variant: "text-xs/bold" };
  return closure_6(markAsDismissed(1188).NewTag, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let body;
  let img;
  let items;
  let items1;
  let items2;
  let items3;
  let newIndicatorDismissibleContent;
  let title;
  let tmp5;
  let obj = newIndicatorDismissibleContent(576);
  const cResult = obj.c(27);
  ({ title, body, img, newIndicatorDismissibleContent } = onPress);
  onPress = onPress.onPress;
  const tmp4 = closure_8();
  const container = tmp4.container;
  if (cResult[0] !== newIndicatorDismissibleContent) {
    const obj2 = {
      contentTypes: items,
      children(visibleContent) {
          let tmp2 = null;
          if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
            const obj = { markAsDismissed: tmp };
            tmp2 = metroRequire(closure_9, obj);
          }
          return tmp2;
        }
    };
    items = [newIndicatorDismissibleContent];
    const tmp8 = closure_6(SelectedDismissibleContentDefault, obj2);
    cResult[0] = newIndicatorDismissibleContent;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.title) {
    let tmp9;
    if (cResult[3] === title) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.titleContainer) {
      if (cResult[6] === tmp5) {
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === img) {
          if (cResult[10] === tmp4.header) {
            let tmp15;
            if (cResult[11] === tmp11) {
              tmp15 = cResult[12];
            }
            if (cResult[13] === body) {
              let tmp19;
              let tmp23;
              let tmp25;
              if (cResult[14] === tmp4.body) {
                tmp19 = cResult[15];
              }
              const _Symbol = Symbol;
              const reconnectButton = tmp4.reconnectButton;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = newIndicatorDismissibleContent(1126).intl;
                const stringResult = intl.string(newIndicatorDismissibleContent(1126).t.vD60Pv);
                cResult[16] = stringResult;
                tmp23 = stringResult;
              } else {
                tmp23 = cResult[16];
              }
              if (cResult[17] !== onPress) {
                const obj3 = { text: tmp23, onPress };
                const tmp27 = closure_6(newIndicatorDismissibleContent(5601).Button, obj3);
                cResult[17] = onPress;
                cResult[18] = tmp27;
                tmp25 = tmp27;
              } else {
                tmp25 = cResult[18];
              }
              if (cResult[19] === tmp4.reconnectButton) {
                let tmp28;
                if (cResult[20] === tmp25) {
                  tmp28 = cResult[21];
                }
                if (cResult[22] === tmp4.container) {
                  if (cResult[23] === tmp28) {
                    if (cResult[24] === tmp15) {
                      let tmp32;
                      if (cResult[25] === tmp19) {
                        tmp32 = cResult[26];
                      }
                      return tmp32;
                    }
                  }
                }
                const obj4 = { style: container, children: items1 };
                items1 = [tmp15, tmp19, tmp28];
                const tmp35 = closure_7(View, obj4);
                cResult[22] = tmp4.container;
                cResult[23] = tmp28;
                cResult[24] = tmp15;
                cResult[25] = tmp19;
                cResult[26] = tmp35;
                tmp32 = tmp35;
              }
              const obj5 = { style: reconnectButton, children: tmp25 };
              const tmp31 = closure_6(View, obj5);
              cResult[19] = tmp4.reconnectButton;
              cResult[20] = tmp25;
              cResult[21] = tmp31;
              tmp28 = tmp31;
            }
            const obj6 = { style: tmp4.body, variant: "text-sm/medium", children: body };
            const tmp21 = closure_6(newIndicatorDismissibleContent(4892).Text, obj6);
            cResult[13] = body;
            cResult[14] = tmp4.body;
            cResult[15] = tmp21;
            tmp19 = tmp21;
          }
        }
        const obj7 = { style: tmp4.header, children: items2 };
        items2 = [tmp11, img];
        const tmp18 = closure_7(View, obj7);
        cResult[9] = img;
        cResult[10] = tmp4.header;
        cResult[11] = tmp11;
        cResult[12] = tmp18;
        tmp15 = tmp18;
      }
    }
    const obj8 = { style: tmp4.titleContainer, children: items3 };
    items3 = [tmp5, tmp9];
    const tmp14 = closure_7(View, obj8);
    cResult[5] = tmp4.titleContainer;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const obj9 = { style: tmp4.title, variant: "text-md/semibold", children: title };
  const tmp10 = closure_6(newIndicatorDismissibleContent(4892).Text, obj9);
  cResult[2] = tmp4.title;
  cResult[3] = title;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((newIndicatorDismissibleContent) => {
  let Button;
  let body;
  let img;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let obj8;
  let onPress;
  let title;
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = closure_8();
  let obj = { style: tmp.container, children: items3 };
  const obj4 = {
    contentTypes: items,
    children(visibleContent) {
      let tmp2 = null;
      if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
        const obj = { markAsDismissed: tmp };
        tmp2 = metroRequire(closure_9, obj);
      }
      return tmp2;
    }
  };
  items = [newIndicatorDismissibleContent];
  const obj2 = { style: tmp.header, children: items2 };
  const obj3 = { style: tmp.titleContainer, children: items1 };
  items1 = [closure_6(SelectedDismissibleContentDefault, obj4), ];
  const obj5 = { style: tmp.title, variant: "text-md/semibold", children: title };
  items1[1] = closure_6(newIndicatorDismissibleContent(4892).Text, obj5);
  items2 = [closure_7(View, obj3), img];
  items3 = [closure_7(View, obj2), , ];
  const obj6 = { style: tmp.body, variant: "text-sm/medium", children: body };
  items3[1] = closure_6(newIndicatorDismissibleContent(4892).Text, obj6);
  const obj7 = { style: tmp.reconnectButton, children: closure_6(Button, obj8) };
  obj8 = { text: intl.string(newIndicatorDismissibleContent(1126).t.vD60Pv), onPress };
  Button = newIndicatorDismissibleContent(5601).Button;
  intl = newIndicatorDismissibleContent(1126).intl;
  items3[2] = closure_6(View, obj7);
  return closure_7(View, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx");

export const OneWayToTwoWayLinkUpsell = tmp8;