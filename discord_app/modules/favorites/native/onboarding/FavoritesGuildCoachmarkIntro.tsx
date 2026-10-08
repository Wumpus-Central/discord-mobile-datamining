// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3439 from "../../intl/FavoritesGuild.messages.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import FavoritesGuildAnalytics from "../../analytics/FavoritesGuildAnalytics.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "../../../guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildsBarDnDStore from "../../../guilds_bar/native/GuildsBarDnDStore.tsx";

require = fn;
const FAVORITES = fn(1085).FAVORITES;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
const __initData = {
  code: "function FavoritesGuildCoachmarkIntroTsx1(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}",
};
const __initData2 = {
  code: "function FavoritesGuildCoachmarkIntroTsx2(atTop,wasAtTop){const{runOnJS,setScrolledToTop}=this.__closure;if(atTop===wasAtTop){return;}runOnJS(setScrolledToTop)(atTop);}",
};
const __initData3 = {
  code: "function FavoritesGuildCoachmarkIntroTsx3(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}",
};
const __initData4 = {
  code: "function FavoritesGuildCoachmarkIntroTsx4(atTop,wasAtTop){const{runOnJS,setScrolledToTop}=this.__closure;if(atTop===wasAtTop){return;}runOnJS(setScrolledToTop)(atTop);}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildCoachmarkIntro(markAsDismissed) {
      const cResult = markAsDismissed(576).c(14);
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        state = GuildsBarDnDStore.getState();
        cResult[0] = state;
        let first = state;
      } else {
        first = cResult[0];
      }
      const scrollPosition = first.scrollPosition;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function f() {
          return scrollPosition.get() <= 0;
        };
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      let obj = markAsDismissed(576);
      [tmp9, tmp10] = noop.useState(tmp7);
      dependencyMap = tmp10;
      const tmp8 = _slicedToArray(noop.useState(tmp7), 2);
      class C {
        constructor() {
          return scrollPosition.get() <= 0;
        }
      }
      C.__closure = { scrollPosition };
      C.__workletHash = 6053526688640;
      C.__initData = __initData;
      const fn2 = function k(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_2)(arg0);
        }
      };
      const tmpResult = markAsDismissed(4810);
      fn2.__closure = { runOnJS: markAsDismissed(4810).runOnJS, setScrolledToTop: tmp10 };
      fn2.__workletHash = 13648062364539;
      fn2.__initData = __initData2;
      const animatedReaction = tmpResult.useAnimatedReaction(C, fn2);
      if (cResult[2] !== markAsDismissed) {
        class I {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        cResult[2] = markAsDismissed;
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[4] !== markAsDismissed) {
        class D {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.setNextFavoritesGuildViewSource("intro_dc");
            tmp2 = closure_1(closure_2[10])(FAVORITES);
            tmp3 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            return;
          }
        }
        cResult[4] = markAsDismissed;
        cResult[5] = D;
      } else {
        class D {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.setNextFavoritesGuildViewSource("intro_dc");
            tmp2 = closure_1(closure_2[10])(FAVORITES);
            tmp3 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            return;
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.setNextFavoritesGuildViewSource("intro_dc");
            tmp2 = closure_1(closure_2[10])(FAVORITES);
            tmp3 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            return;
          }
        }
        const stringResult = obj4.string(scrollPosition(3439)["bu/mLv"]);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(scrollPosition(3439).kxQJ7q);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        let tmp15 = stringResult1;
        const tmp14 = stringResult;
      } else {
        class D {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.setNextFavoritesGuildViewSource("intro_dc");
            tmp2 = closure_1(closure_2[10])(FAVORITES);
            tmp3 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            return;
          }
        }
        tmp15 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            return closure_1_8(scrollPosition(closure_2[13]), {});
          }
        }
        const intl2 = tmp(1126).intl;
        const stringResult2 = intl2.string(scrollPosition(3439)["vN/KQ9"]);
        cResult[8] = G;
        cResult[9] = stringResult2;
        let tmp20 = stringResult2;
      } else {
        class G {
          constructor() {
            return closure_1_8(scrollPosition(closure_2[13]), {});
          }
        }
        tmp20 = cResult[9];
      }
      if (cResult[10] === D) {
        class G {
          constructor() {
            return closure_1_8(scrollPosition(closure_2[13]), {});
          }
        }
      }
      cResult[10] = D;
      cResult[11] = I;
      cResult[12] = tmp9;
      cResult[13] = {
        visible: tmp9,
        position: "bottom",
        title: tmp14,
        description: tmp15,
        onDismiss: I,
        renderImgComponent: G,
        buttonLabel: tmp20,
        onButtonPress: D,
      };
      const obj2 = { runOnJS: markAsDismissed(4810).runOnJS, setScrolledToTop: tmp10 };
      const obj3 = {
        visible: tmp9,
        position: "bottom",
        title: tmp14,
        description: tmp15,
        onDismiss: I,
        renderImgComponent: G,
        buttonLabel: tmp20,
        onButtonPress: D,
      };
    }
  : function FavoritesGuildCoachmarkIntro(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      _slicedToArray = undefined;
      let onDismiss;
      let callback1;
      const scrollPosition = callback1.getState().scrollPosition;
      const tmp = _slicedToArray(
        onDismiss.useState(() => scrollPosition.get() <= 0),
        2,
      );
      const visible = tmp[0];
      _slicedToArray = tmp3;
      const fn = function p() {
        return scrollPosition.get() <= 0;
      };
      fn.__closure = { scrollPosition };
      fn.__workletHash = 16210171023746;
      fn.__initData = __initData3;
      const fn2 = function v(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_3)(arg0);
        }
      };
      let obj = markAsDismissed(visible[8]);
      fn2.__closure = { runOnJS: markAsDismissed(visible[8]).runOnJS, setScrolledToTop: tmp[1] };
      fn2.__workletHash = 4195860117373;
      fn2.__initData = __initData4;
      const animatedReaction = obj.useAnimatedReaction(fn, fn2);
      const items = [markAsDismissed];
      onDismiss = onDismiss.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items);
      const items1 = [markAsDismissed];
      callback1 = onDismiss.useCallback(() => {
        const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("intro_dc");
        transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
      }, items1);
      const items2 = [visible, onDismiss, callback1];
      const memo = onDismiss.useMemo(() => {
        const obj = {
          visible,
          position: "bottom",
          title: null,
          description: null,
          onDismiss: null,
          renderImgComponent: null,
          buttonLabel: null,
          onButtonPress: null,
        };
        const intl = util.intl;
        obj.title = intl.string(_modDef3439["bu/mLv"]);
        const intl2 = util.intl;
        obj.description = intl2.string(_modDef3439.kxQJ7q);
        obj.onDismiss = onDismiss;
        obj.renderImgComponent = function renderImgComponent() {
          return closure_1_8(scrollPosition(visible[13]), {});
        };
        const intl3 = util.intl;
        obj.buttonLabel = intl3.string(_modDef3439["vN/KQ9"]);
        obj.onButtonPress = callback1;
        return obj;
      }, items2);
      const obj2 = { runOnJS: markAsDismissed(visible[8]).runOnJS, setScrolledToTop: tmp[1] };
      const coachmark = markAsDismissed(visible[14]).useCoachmark(markAsDismissed.targetRef, memo);
      return null;
    };
