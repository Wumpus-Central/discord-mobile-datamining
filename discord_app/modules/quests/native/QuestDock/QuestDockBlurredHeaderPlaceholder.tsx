// === Module 15387: QuestDockBlurredHeaderPlaceholder ===

// Module 15387 (QuestDockBlurredHeaderPlaceholder)
import thumbHashToRGBA from "thumbHashToRGBA" /* 15388 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(5979).QuestDockMode;
const QuestDockConstants = fn(15285);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj = { imageContainer: null, overlay: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj3.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj3.top = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj.imageContainer = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = "rgba(38, 39, 50, 0.3)";
obj4.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj.overlay = obj4;
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const __initData2 = { code: "function QuestDockBlurredHeaderPlaceholderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockBlurredHeaderPlaceholder(arg0) {
  const cResult = questDockWrapperSpecs(576).c(22);
  ({ layoutAnimation, layoutAnimatedStyle, opacityAnimatedStyle, placeholder } = arg0);
  const context = noop.useContext(questDockWrapperSpecs(15286).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  if (cResult[0] !== placeholder) {
    let thumbHashToDataURLResult = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(str) {
        return str.charCodeAt(0);
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const _Uint8Array = thumbHashToDataURLResult.Uint8Array;
    thumbHashToDataURLResult = tmp(15388).thumbHashToDataURL(_Uint8Array.from(thumbHashToDataURLResult.atob(placeholder), tmp6));
    cResult[0] = placeholder;
    cResult[1] = thumbHashToDataURLResult;
    const tmpResult = tmp(15388);
  } else {
    if (cResult[3] !== cResult[1]) {
      const obj2 = { uri: tmp5 };
      cResult[3] = tmp5;
      class O {
        constructor() {
          num = 0;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            tmp = closure_6;
            num = -closure_6;
          }
          obj = { left: num, width: questDockWrapperSpecs.get().width + closure_6 };
          return obj;
        }
      }
      let tmp8 = obj2;
    } else {
      tmp8 = cResult[4];
    }
    const tmp10 = closure_10();
    class O {
      constructor() {
        num = 0;
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          tmp = closure_6;
          num = -closure_6;
        }
        obj = { left: num, width: questDockWrapperSpecs.get().width + closure_6 };
        return obj;
      }
    }
    const obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
    O.__closure = obj3;
    O.__workletHash = 11176778421725;
    O.__initData = __initData;
    const animatedStyle = tmp(4811).useAnimatedStyle(O);
    if (cResult[5] === animatedStyle) {
      if (cResult[6] === layoutAnimatedStyle) {
        if (cResult[7] === opacityAnimatedStyle) {
          if (cResult[8] === tmp10.imageContainer) {
            let tmp15 = cResult[9];
          }
          if (cResult[10] !== tmp8) {
            const obj4 = { source: tmp8, style: null };
            class O {
              constructor() {
                num = 0;
                if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                  tmp = closure_6;
                  num = -closure_6;
                }
                obj = { left: num, width: questDockWrapperSpecs.get().width + closure_6 };
                return obj;
              }
            }
            const tmp20 = closure_7(activeQuestDockMode(6163), obj4);
            cResult[10] = tmp8;
            cResult[11] = tmp20;
            let tmp16 = tmp20;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] === layoutAnimation) {
            if (cResult[13] === tmp15) {
              if (cResult[14] === tmp16) {
                let tmp21 = cResult[15];
              }
              if (cResult[16] === opacityAnimatedStyle) {
                if (cResult[17] === tmp10.overlay) {
                  let tmp26 = cResult[18];
                }
                if (cResult[19] === tmp21) {
                  if (cResult[20] === tmp26) {
                    let tmp31 = cResult[21];
                  }
                  return tmp31;
                }
                const obj5 = { children: null };
                class O {
                  constructor() {
                    num = 0;
                    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                      tmp = closure_6;
                      num = -closure_6;
                    }
                    obj = { left: num, width: questDockWrapperSpecs.get().width + closure_6 };
                    return obj;
                  }
                }
                tmp34[0] = tmp21;
                tmp34[1] = tmp26;
                obj5.children = tmp34;
                const tmp35 = closure_9(closure_8, obj5);
                cResult[19] = tmp21;
                cResult[20] = tmp26;
                cResult[21] = tmp35;
                tmp31 = tmp35;
              }
              const obj6 = { style: null };
              class O {
                constructor() {
                  num = 0;
                  if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                    tmp = closure_6;
                    num = -closure_6;
                  }
                  obj = { left: num, width: questDockWrapperSpecs.get().width + closure_6 };
                  return obj;
                }
              }
              tmp29[0] = tmp10.overlay;
              tmp29[1] = opacityAnimatedStyle;
              obj6.style = tmp29;
              const tmp30 = closure_7(activeQuestDockMode(6760), obj6);
              cResult[16] = opacityAnimatedStyle;
              cResult[17] = tmp10.overlay;
              cResult[18] = tmp30;
              tmp26 = tmp30;
            }
          }
          class O {
            constructor() {
              num = 0;
              if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                tmp = closure_6;
                num = -closure_6;
              }
              obj = { left: num, width: questDockWrapperSpecs.get().width + closure_6 };
              return obj;
            }
          }
          tmp24[0] = tmp15;
          tmp24[1] = layoutAnimation;
          tmp24[2] = tmp16;
          const tmp25 = closure_7(activeQuestDockMode(6760), tmp24);
          cResult[12] = layoutAnimation;
          cResult[13] = tmp15;
          cResult[14] = tmp16;
          cResult[15] = tmp25;
          tmp21 = tmp25;
        }
      }
    }
    const items = [tmp10.imageContainer, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
    cResult[5] = animatedStyle;
    cResult[6] = layoutAnimatedStyle;
    cResult[7] = opacityAnimatedStyle;
    cResult[8] = tmp10.imageContainer;
    cResult[9] = items;
    tmp15 = items;
    const tmpResult2 = tmp(4811);
  }
  const obj = questDockWrapperSpecs(576);
}) : (function QuestDockBlurredHeaderPlaceholder(arg0) {
  ({ opacityAnimatedStyle, placeholder } = arg0);
  ({ layoutAnimation, layoutAnimatedStyle } = arg0);
  const context = noop.useContext(placeholder(activeQuestDockMode[8]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  const items = [placeholder];
  const memo = noop.useMemo(() => {
    const obj = { uri: thumbHashToRGBA.thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))) };
    return obj;
  }, items);
  const tmp3 = closure_10();
  class E {
    constructor() {
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        tmp = closure_6;
        num = -closure_6;
      }
      obj = { left: num, width: questDockWrapperSpecs.get().width + closure_6 };
      return obj;
    }
  }
  E.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  E.__workletHash = 4145600612350;
  E.__initData = __initData2;
  const obj3 = { children: null };
  const animatedStyle = placeholder(activeQuestDockMode[10]).useAnimatedStyle(E);
  const obj4 = { style: null, layout: layoutAnimation, children: null };
  const items1 = [tmp3.imageContainer, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  obj4.style = items1;
  let obj = placeholder(activeQuestDockMode[10]);
  const obj2 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  obj4.children = closure_7(questDockWrapperSpecs(activeQuestDockMode[11]), { source: memo, style: StyleSheet.absoluteFill });
  const items2 = [closure_7(questDockWrapperSpecs(activeQuestDockMode[12]), obj4), ];
  const obj6 = { style: null };
  const items3 = [tmp3.overlay, opacityAnimatedStyle];
  obj6.style = items3;
  items2[1] = closure_7(questDockWrapperSpecs(activeQuestDockMode[12]), obj6);
  obj3.children = items2;
  return closure_9(closure_8, obj3);
}));