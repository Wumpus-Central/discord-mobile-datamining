// === Module 14993: QuestDockBlurredHeaderPlaceholder ===

// Module 14993 (QuestDockBlurredHeaderPlaceholder)
import thumbHashToRGBA from "thumbHashToRGBA" /* 14994 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(5623).QuestDockMode;
const QuestDockConstants = fn(14892);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj = { image: null, overlay: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj3.top = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
obj.image = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = "rgba(38, 39, 50, 0.3)";
obj4.height = QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
obj.overlay = obj4;
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const __initData2 = { code: "function QuestDockBlurredHeaderPlaceholderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = questDockWrapperSpecs(576).c(20);
  ({ layoutAnimation, layoutAnimatedStyle, opacityAnimatedStyle, placeholder } = arg0);
  const context = noop.useContext(questDockWrapperSpecs(14893).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  if (cResult[0] !== placeholder) {
    let thumbHashToDataURLResult = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c(str) {
        return str.charCodeAt(0);
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const _Uint8Array = thumbHashToDataURLResult.Uint8Array;
    thumbHashToDataURLResult = tmp(14994).thumbHashToDataURL(_Uint8Array.from(thumbHashToDataURLResult.atob(placeholder), tmp6));
    cResult[0] = placeholder;
    cResult[1] = thumbHashToDataURLResult;
    const tmpResult = tmp(14994);
  } else {
    if (cResult[3] !== cResult[1]) {
      const obj2 = { uri: tmp5 };
      cResult[3] = tmp5;
      class O {
        constructor() {
          num = 0;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            tmp = closure_5;
            num = -closure_5;
          }
          obj = { left: num, width: questDockWrapperSpecs.get().width + closure_5 };
          return obj;
        }
      }
      let tmp8 = obj2;
    } else {
      tmp8 = cResult[4];
    }
    const tmp10 = closure_9();
    class O {
      constructor() {
        num = 0;
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          tmp = closure_5;
          num = -closure_5;
        }
        obj = { left: num, width: questDockWrapperSpecs.get().width + closure_5 };
        return obj;
      }
    }
    const obj3 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
    O.__closure = obj3;
    O.__workletHash = 11176778421725;
    O.__initData = __initData;
    const animatedStyle = tmp(4612).useAnimatedStyle(O);
    if (cResult[5] === animatedStyle) {
      if (cResult[6] === layoutAnimatedStyle) {
        if (cResult[7] === opacityAnimatedStyle) {
          if (cResult[8] === tmp10.image) {
            let tmp15 = cResult[9];
          }
          if (cResult[10] === tmp8) {
            if (cResult[11] === layoutAnimation) {
              if (cResult[12] === tmp15) {
                let tmp16 = cResult[13];
              }
              if (cResult[14] === opacityAnimatedStyle) {
                if (cResult[15] === tmp10.overlay) {
                  let tmp20 = cResult[16];
                }
                if (cResult[17] === tmp16) {
                  if (cResult[18] === tmp20) {
                    let tmp25 = cResult[19];
                  }
                  return tmp25;
                }
                const obj4 = { children: null };
                class O {
                  constructor() {
                    num = 0;
                    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                      tmp = closure_5;
                      num = -closure_5;
                    }
                    obj = { left: num, width: questDockWrapperSpecs.get().width + closure_5 };
                    return obj;
                  }
                }
                tmp28[0] = tmp16;
                tmp28[1] = tmp20;
                obj4.children = tmp28;
                const tmp29 = closure_8(closure_7, obj4);
                cResult[17] = tmp16;
                cResult[18] = tmp20;
                cResult[19] = tmp29;
                tmp25 = tmp29;
              }
              const obj5 = { style: null };
              class O {
                constructor() {
                  num = 0;
                  if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                    tmp = closure_5;
                    num = -closure_5;
                  }
                  obj = { left: num, width: questDockWrapperSpecs.get().width + closure_5 };
                  return obj;
                }
              }
              tmp23[0] = tmp10.overlay;
              tmp23[1] = opacityAnimatedStyle;
              obj5.style = tmp23;
              const tmp24 = closure_6(activeQuestDockMode(6570), obj5);
              cResult[14] = opacityAnimatedStyle;
              cResult[15] = tmp10.overlay;
              cResult[16] = tmp24;
              tmp20 = tmp24;
            }
          }
          const obj6 = { source: null, style: null, layout: null };
          class O {
            constructor() {
              num = 0;
              if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                tmp = closure_5;
                num = -closure_5;
              }
              obj = { left: num, width: questDockWrapperSpecs.get().width + closure_5 };
              return obj;
            }
          }
          obj6.style = tmp15;
          obj6.layout = layoutAnimation;
          const tmp19 = closure_6(activeQuestDockMode(4612).Image, obj6);
          cResult[10] = tmp8;
          cResult[11] = layoutAnimation;
          cResult[12] = tmp15;
          cResult[13] = tmp19;
          tmp16 = tmp19;
        }
      }
    }
    const items = [tmp10.image, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
    cResult[5] = animatedStyle;
    cResult[6] = layoutAnimatedStyle;
    cResult[7] = opacityAnimatedStyle;
    cResult[8] = tmp10.image;
    cResult[9] = items;
    tmp15 = items;
    const tmpResult2 = tmp(4612);
  }
  const obj = questDockWrapperSpecs(576);
}) : ((arg0) => {
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
  const tmp3 = closure_9();
  class E {
    constructor() {
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        tmp = closure_5;
        num = -closure_5;
      }
      obj = { left: num, width: questDockWrapperSpecs.get().width + closure_5 };
      return obj;
    }
  }
  E.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED, questDockWrapperSpecs };
  E.__workletHash = 4145600612350;
  E.__initData = __initData2;
  const obj3 = { children: null };
  const animatedStyle = placeholder(activeQuestDockMode[10]).useAnimatedStyle(E);
  const obj4 = { source: memo, style: null, layout: layoutAnimation };
  const items1 = [tmp3.image, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
  obj4.style = items1;
  const items2 = [closure_6(questDockWrapperSpecs(activeQuestDockMode[10]).Image, obj4), ];
  const obj5 = { style: null };
  const items3 = [tmp3.overlay, opacityAnimatedStyle];
  obj5.style = items3;
  items2[1] = closure_6(questDockWrapperSpecs(activeQuestDockMode[11]), obj5);
  obj3.children = items2;
  return closure_8(closure_7, obj3);
}));