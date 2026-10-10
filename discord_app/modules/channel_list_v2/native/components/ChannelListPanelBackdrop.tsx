// === Module 16515: ChannelListPanelBackdrop ===

// Module 16515 (ChannelListPanelBackdrop)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import QuestHooks from "QuestHooks" /* 15343 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16434 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const DM_WIDTH = fn(1085).DM_WIDTH;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, position: "relative", overflow: "hidden" }, panelTint: null, listWrapper: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.PANEL_BG;
obj2.panelTint = obj3;
obj2.listWrapper = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelListPanelBackdrop(arg0) {
  let tmp = require;
  const cResult = c.c(22);
  ({ style, contentInset, children } = arg0);
  const tmp4 = closure_8();
  const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
  const top = useSafeAreaInsetsDefault().top;
  let num;
  const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
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
        if (cResult[3] === num4) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp4.container) {
            if (cResult[7] === tmp9) {
              let tmp10 = cResult[8];
            }
            if (cResult[9] === isHomeDrawerEnabled) {
              if (cResult[10] === top) {
                if (cResult[12] !== tmp4.panelTint) {
                  const obj4 = { pointerEvents: "none", style: tmp4.panelTint };
                  const tmp18 = timestampProducer(React4, obj4);
                  cResult[12] = tmp4.panelTint;
                  cResult[13] = tmp18;
                  let tmp15 = tmp18;
                } else {
                  tmp15 = cResult[13];
                }
                if (cResult[14] === children) {
                  if (cResult[15] === tmp4.listWrapper) {
                    let tmp19 = cResult[16];
                  }
                  if (cResult[17] === tmp10) {
                    if (cResult[18] === tmp11) {
                      if (cResult[19] === tmp15) {
                        if (cResult[20] === tmp19) {
                          let tmp23 = cResult[21];
                        }
                        return tmp23;
                      }
                    }
                  }
                  const obj5 = { style: tmp10, children: null };
                  const items = [tmp11, tmp15, tmp19];
                  obj5.children = items;
                  const tmp26 = React5(React4, obj5);
                  cResult[17] = tmp10;
                  cResult[18] = tmp11;
                  cResult[19] = tmp15;
                  cResult[20] = tmp19;
                  cResult[21] = tmp26;
                  tmp23 = tmp26;
                }
                const obj6 = { style: tmp4.listWrapper, children };
                const tmp22 = timestampProducer(React4, obj6);
                cResult[14] = children;
                cResult[15] = tmp4.listWrapper;
                cResult[16] = tmp22;
                tmp19 = tmp22;
              }
            }
            let tmp12Result = 16516;
            if (isHomeDrawerEnabled) {
              let ScreenAlignedThemedGradientSliding = tmp(tmp12Result).ScreenAlignedThemedGradientSliding;
            } else {
              ScreenAlignedThemedGradientSliding = importDefault(tmp12Result);
            }
            const obj7 = { offsetX: null, offsetY: null };
            tmp = DM_WIDTH;
            obj7.offsetX = DM_WIDTH;
            obj7.offsetY = top;
            tmp12Result = timestampProducer(ScreenAlignedThemedGradientSliding, obj7);
            cResult[9] = isHomeDrawerEnabled;
            cResult[10] = top;
            cResult[11] = tmp12Result;
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
}) : (function ChannelListPanelBackdrop(children) {
  const style = children.style;
  const contentInset = children.contentInset;
  const tmp = closure_8();
  const container = tmp;
  const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
  const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
  let items = [tmp, contentInset, mobileQuestDockHeight, style];
  const obj3 = {
    style: noop.useMemo(() => {
      const items = [container.container, , ];
      const rect = contentInset;
      let num;
      if (contentInset != null) {
        num = rect.top;
      }
      if (num == null) {
        num = 0;
      }
      const obj = { marginTop: num, paddingBottom: null, marginLeft: null, marginRight: null };
      let num2;
      if (rect != null) {
        num2 = rect.bottom;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.paddingBottom = num2 + mobileQuestDockHeight;
      let num3;
      if (rect != null) {
        num3 = rect.left;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj.marginLeft = num3;
      let num4;
      if (rect != null) {
        num4 = rect.right;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj.marginRight = num4;
      items[1] = obj;
      items[2] = style;
      return items;
    }, items),
    children: null
  };
  if (isHomeDrawerEnabled) {
    let ScreenAlignedThemedGradientSliding = require(tmp9).ScreenAlignedThemedGradientSliding;
  } else {
    ScreenAlignedThemedGradientSliding = importDefault(tmp9);
  }
  const items1 = [timestampProducer(ScreenAlignedThemedGradientSliding, { offsetX: DM_WIDTH, offsetY: useSafeAreaInsetsDefault().top }), timestampProducer(React4, { pointerEvents: "none", style: tmp.panelTint }), timestampProducer(React4, { style: tmp.listWrapper, children: children.children })];
  obj3.children = items1;
  return React5(React4, obj3);
});