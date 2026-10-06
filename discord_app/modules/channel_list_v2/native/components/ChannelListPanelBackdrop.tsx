// === Module 16066: ChannelListPanelBackdrop ===

// Module 16066 (ChannelListPanelBackdrop)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import QuestHooks from "QuestHooks" /* 14908 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15988 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
const DM_WIDTH = Constants.DM_WIDTH;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, position: "relative", overflow: "hidden" }, panelTint: obj2, listWrapper: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let contentInset;
  let items;
  let style;
  const obj = react2;
  const cResult = obj.c(22);
  ({ style, contentInset, children } = arg0);
  const tmp4 = closure_8();
  const obj2 = useHomeDrawerGesture;
  const isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  const top = useSafeAreaInsetsDefault().top;
  let num;
  const obj3 = QuestHooks;
  const mobileQuestDockHeight = obj3.useMobileQuestDockHeight();
  if (contentInset != null) {
    num = contentInset.top;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (contentInset != null) {
    num2 = contentInset.bottom;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const sum = num2 + mobileQuestDockHeight;
  let num3;
  if (contentInset != null) {
    num3 = contentInset.left;
  }
  if (num3 == null) {
    num3 = 0;
  }
  let num4;
  if (contentInset != null) {
    num4 = contentInset.right;
  }
  if (num4 == null) {
    num4 = 0;
  }
  if (cResult[0] === num) {
    if (cResult[1] === sum) {
      if (cResult[2] === num3) {
        let tmp9;
        if (cResult[3] === num4) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp4.container) {
            let tmp10;
            let ScreenAlignedThemedGradientSliding;
            if (cResult[7] === tmp9) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === isHomeDrawerEnabled) {
              let tmp11;
              let tmp16;
              if (cResult[10] === top) {
                tmp11 = cResult[11];
              }
              if (cResult[12] !== tmp4.panelTint) {
                const obj4 = { pointerEvents: "none", style: tmp4.panelTint };
                const tmp19 = metroRequire(React3, obj4);
                cResult[12] = tmp4.panelTint;
                cResult[13] = tmp19;
                tmp16 = tmp19;
              } else {
                tmp16 = cResult[13];
              }
              if (cResult[14] === children) {
                let tmp20;
                if (cResult[15] === tmp4.listWrapper) {
                  tmp20 = cResult[16];
                }
                if (cResult[17] === tmp10) {
                  if (cResult[18] === tmp11) {
                    if (cResult[19] === tmp16) {
                      let tmp24;
                      if (cResult[20] === tmp20) {
                        tmp24 = cResult[21];
                      }
                      return tmp24;
                    }
                  }
                }
                const obj5 = { style: tmp10, children: items };
                items = [tmp11, tmp16, tmp20];
                const tmp27 = metroImportDefault(React3, obj5);
                cResult[17] = tmp10;
                cResult[18] = tmp11;
                cResult[19] = tmp16;
                cResult[20] = tmp20;
                cResult[21] = tmp27;
                tmp24 = tmp27;
              }
              const obj6 = { style: tmp4.listWrapper, children };
              const tmp23 = metroRequire(React3, obj6);
              cResult[14] = children;
              cResult[15] = tmp4.listWrapper;
              cResult[16] = tmp23;
              tmp20 = tmp23;
            }
            if (isHomeDrawerEnabled) {
              ScreenAlignedThemedGradientSliding = require(tmp13).ScreenAlignedThemedGradientSliding;
            } else {
              ScreenAlignedThemedGradientSliding = importDefault(tmp13);
            }
            const obj7 = { offsetX: DM_WIDTH, offsetY: top };
            const tmp12Result = metroRequire(ScreenAlignedThemedGradientSliding, obj7);
            cResult[9] = isHomeDrawerEnabled;
            cResult[10] = top;
            cResult[11] = tmp12Result;
            tmp11 = tmp12Result;
          }
        }
        const items1 = [tmp4.container, tmp9, style];
        cResult[5] = style;
        cResult[6] = tmp4.container;
        cResult[7] = tmp9;
        cResult[8] = items1;
        tmp10 = items1;
      }
    }
  }
  const obj8 = { marginTop: num, paddingBottom: sum, marginLeft: num3, marginRight: num4 };
  cResult[0] = num;
  cResult[1] = sum;
  cResult[2] = num3;
  cResult[3] = num4;
  cResult[4] = obj8;
  tmp9 = obj8;
}) : ((style) => {
  let ScreenAlignedThemedGradientSliding;
  let items1;
  style = style.style;
  const contentInset = style.contentInset;
  const children = style.children;
  const tmp = closure_8();
  let closure_2 = tmp;
  let obj = useHomeDrawerGesture;
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  const top = useSafeAreaInsetsDefault().top;
  const obj2 = QuestHooks;
  const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
  let items = [tmp, contentInset, mobileQuestDockHeight, style];
  const obj3 = {
    style: react.useMemo(() => {
      let num2;
      let num3;
      let num4;
      const items = [container.container, , ];
      const rect = contentInset;
      let num;
      if (contentInset != null) {
        num = rect.top;
      }
      if (num == null) {
        num = 0;
      }
      const obj = { marginTop: num, paddingBottom: num2 + mobileQuestDockHeight, marginLeft: num3, marginRight: num4 };
      num2 = undefined;
      if (rect != null) {
        num2 = rect.bottom;
      }
      if (num2 == null) {
        num2 = 0;
      }
      num3 = undefined;
      if (rect != null) {
        num3 = rect.left;
      }
      if (num3 == null) {
        num3 = 0;
      }
      num4 = undefined;
      if (rect != null) {
        num4 = rect.right;
      }
      if (num4 == null) {
        num4 = 0;
      }
      items[1] = obj;
      items[2] = style;
      return items;
    }, items),
    children: items1
  };
  if (isHomeDrawerEnabled) {
    ScreenAlignedThemedGradientSliding = require(tmp9).ScreenAlignedThemedGradientSliding;
  } else {
    ScreenAlignedThemedGradientSliding = importDefault(tmp9);
  }
  items1 = [, , ];
  const obj4 = { offsetX: DM_WIDTH, offsetY: top };
  items1[0] = metroRequire(ScreenAlignedThemedGradientSliding, obj4);
  const obj5 = { pointerEvents: "none", style: tmp.panelTint };
  items1[1] = metroRequire(React3, obj5);
  const obj6 = { style: tmp.listWrapper, children };
  items1[2] = metroRequire(React3, obj6);
  return metroImportDefault(React3, obj3);
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default tmp6;