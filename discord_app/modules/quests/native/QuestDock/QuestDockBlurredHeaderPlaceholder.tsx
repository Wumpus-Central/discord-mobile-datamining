// discord_app/modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import QuestConstants from "../../QuestConstants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/14998__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import QuestDockConstants from "QuestDockConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
let QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED } = QuestDockConstants);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { image: obj2, overlay: obj3 };
obj2 = { height: QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT, top: -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { backgroundColor: "rgba(38, 39, 50, 0.3)", height: QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
const __initData = {
  code: "function QuestDockBlurredHeaderPlaceholderTsx1(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}",
};
const __initData2 = {
  code: "function QuestDockBlurredHeaderPlaceholderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,questDockWrapperSpecs}=this.__closure;return{left:activeQuestDockMode.get()===QuestDockMode.EXPANDED?-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,width:questDockWrapperSpecs.get().width+QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED};}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let items;
        let items1;
        let layoutAnimatedStyle;
        let layoutAnimation;
        let opacityAnimatedStyle;
        let placeholder;
        let questDockWrapperSpecs;
        let tmp5;
        let tmp9;
        let obj = questDockWrapperSpecs(576);
        const cResult = obj.c(20);
        ({ layoutAnimation, layoutAnimatedStyle, opacityAnimatedStyle, placeholder } = arg0);
        const context = react.useContext(questDockWrapperSpecs(14897).QuestDockGestureContext);
        questDockWrapperSpecs = context.questDockWrapperSpecs;
        const activeQuestDockMode = context.activeQuestDockMode;
        if (cResult[0] !== placeholder) {
          let tmp7;
          const _Symbol = Symbol;
          const str = "react.memo_cache_sentinel";
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function c(str) {
              return str.charCodeAt(0);
            };
            let num = 2;
            cResult[2] = fn;
            tmp7 = fn;
          } else {
            tmp7 = cResult[2];
          }
          const _Uint8Array = Uint8Array;
          const _atob = atob;
          const tmpResult = questDockWrapperSpecs(14998);
          const thumbHashToDataURLResult = tmpResult.thumbHashToDataURL(Uint8Array.from(atob(placeholder), tmp7));
          cResult[0] = placeholder;
          cResult[1] = thumbHashToDataURLResult;
          tmp5 = thumbHashToDataURLResult;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[3] !== tmp5) {
          const obj2 = { uri: tmp5 };
          cResult[3] = tmp5;
          cResult[4] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[4];
        }
        const tmp10 = closure_9();
        const tmpResult2 = questDockWrapperSpecs(4612);
        class O {
          constructor() {
            let num = 0;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
            }
            const obj = {
              left: num,
              width: questDockWrapperSpecs.get().width + QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,
            };
            return obj;
          }
        }
        const obj3 = {
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,
          questDockWrapperSpecs,
        };
        O.__closure = obj3;
        O.__workletHash = 11176778421725;
        O.__initData = __initData;
        const animatedStyle = tmpResult2.useAnimatedStyle(O);
        if (cResult[5] === animatedStyle) {
          if (cResult[6] === layoutAnimatedStyle) {
            if (cResult[7] === opacityAnimatedStyle) {
              let tmp12;
              if (cResult[8] === tmp10.image) {
                tmp12 = cResult[9];
              }
              if (cResult[10] === tmp9) {
                if (cResult[11] === layoutAnimation) {
                  let tmp13;
                  if (cResult[12] === tmp12) {
                    tmp13 = cResult[13];
                  }
                  if (cResult[14] === opacityAnimatedStyle) {
                    let tmp17;
                    if (cResult[15] === tmp10.overlay) {
                      tmp17 = cResult[16];
                    }
                    if (cResult[17] === tmp13) {
                      let tmp21;
                      if (cResult[18] === tmp17) {
                        tmp21 = cResult[19];
                      }
                      return tmp21;
                    }
                    const obj4 = { children: items };
                    items = [tmp13, tmp17];
                    const tmp24 = closure_8(closure_7, obj4);
                    cResult[17] = tmp13;
                    cResult[18] = tmp17;
                    cResult[19] = tmp24;
                    tmp21 = tmp24;
                  }
                  const obj5 = { style: items1 };
                  items1 = [tmp10.overlay, opacityAnimatedStyle];
                  const tmp20 = closure_6(activeQuestDockMode(6570), obj5);
                  cResult[14] = opacityAnimatedStyle;
                  cResult[15] = tmp10.overlay;
                  cResult[16] = tmp20;
                  tmp17 = tmp20;
                }
              }
              const obj6 = { source: tmp9, style: tmp12, layout: layoutAnimation };
              const tmp16 = closure_6(activeQuestDockMode(4612).Image, obj6);
              cResult[10] = tmp9;
              cResult[11] = layoutAnimation;
              cResult[12] = tmp12;
              cResult[13] = tmp16;
              tmp13 = tmp16;
            }
          }
        }
        const items2 = [tmp10.image, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
        cResult[5] = animatedStyle;
        cResult[6] = layoutAnimatedStyle;
        cResult[7] = opacityAnimatedStyle;
        cResult[8] = tmp10.image;
        cResult[9] = items2;
        tmp12 = items2;
      }
    : (arg0) => {
        let activeQuestDockMode;
        let items1;
        let items2;
        let items3;
        let layoutAnimatedStyle;
        let layoutAnimation;
        let opacityAnimatedStyle;
        let placeholder;
        ({ opacityAnimatedStyle, placeholder } = arg0);
        ({ layoutAnimation, layoutAnimatedStyle } = arg0);
        const context = react.useContext(placeholder(activeQuestDockMode[8]).QuestDockGestureContext);
        const questDockWrapperSpecs = context.questDockWrapperSpecs;
        activeQuestDockMode = context.activeQuestDockMode;
        const items = [placeholder];
        const memo = react.useMemo(() => {
          let obj2;
          const obj = { uri: obj2.thumbHashToDataURL(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0))) };
          obj2 = _slicedToArray;
          return obj;
        }, items);
        const tmp3 = closure_9();
        let obj = placeholder(activeQuestDockMode[10]);
        class E {
          constructor() {
            let num = 0;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num = -QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
            }
            const obj = {
              left: num,
              width: questDockWrapperSpecs.get().width + QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,
            };
            return obj;
          }
        }
        let obj2 = {
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,
          questDockWrapperSpecs,
        };
        E.__closure = obj2;
        E.__workletHash = 4145600612350;
        E.__initData = __initData2;
        const obj3 = { children: items2 };
        const animatedStyle = obj.useAnimatedStyle(E);
        const obj4 = { source: memo, style: items1, layout: layoutAnimation };
        items1 = [tmp3.image, layoutAnimatedStyle, animatedStyle, opacityAnimatedStyle];
        items2 = [closure_6(questDockWrapperSpecs(activeQuestDockMode[10]).Image, obj4)];
        const obj5 = { style: items3 };
        items3 = [tmp3.overlay, opacityAnimatedStyle];
        items2[1] = closure_6(questDockWrapperSpecs(activeQuestDockMode[11]), obj5);
        return closure_8(closure_7, obj3);
      },
);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredHeaderPlaceholder.tsx");

export default memoResult;
