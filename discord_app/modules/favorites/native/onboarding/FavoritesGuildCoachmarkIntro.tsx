// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import _modDef3395 from "../../intl/FavoritesGuild.messages.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import FavoritesGuildAnalytics from "../../analytics/FavoritesGuildAnalytics.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "../../../guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildsBarDnDStore from "../../../guilds_bar/native/GuildsBarDnDStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, markAsDismissed;

let _slicedToArray = _slicedToArray_mod;
const FAVORITES = Constants.FAVORITES;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let closure_2;
      let first;
      let tmp10;
      let tmp14;
      let tmp15;
      let tmp20;
      let tmp7;
      let tmp9;
      let obj = markAsDismissed(576);
      const cResult = obj.c(14);
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const state = GuildsBarDnDStore.getState();
        cResult[0] = state;
        first = state;
      } else {
        first = cResult[0];
      }
      const scrollPosition = first.scrollPosition;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function f() {
          return scrollPosition.get() <= 0;
        };
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      [tmp9, tmp10] = react.useState(tmp7);
      dependencyMap = tmp10;
      _slicedToArray(react.useState(tmp7), 2);
      const tmpResult = markAsDismissed(4618);
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
          const obj = ReanimatedRexport;
          obj.runOnJS(dependencyMap)(arg0);
        }
      };
      fn2.__closure = { runOnJS: markAsDismissed(4618).runOnJS, setScrolledToTop: tmp10 };
      fn2.__workletHash = 13648062364539;
      fn2.__initData = __initData2;
      ({ runOnJS: markAsDismissed(4618).runOnJS, setScrolledToTop: tmp10 });
      const animatedReaction = tmpResult.useAnimatedReaction(C, fn2);
      if (cResult[2] !== markAsDismissed) {
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[2] = markAsDismissed;
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[4] !== markAsDismissed) {
        class D {
          constructor() {
            const obj = FavoritesGuildAnalytics;
            const result = obj.setNextFavoritesGuildViewSource("intro_dc");
            transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
            markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
        cResult[4] = markAsDismissed;
        cResult[5] = D;
      } else {
        class D {
          constructor() {
            const obj = FavoritesGuildAnalytics;
            const result = obj.setNextFavoritesGuildViewSource("intro_dc");
            transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
            markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            const obj = FavoritesGuildAnalytics;
            const result = obj.setNextFavoritesGuildViewSource("intro_dc");
            transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
            markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
        const stringResult = obj4.string(scrollPosition(3395)["bu/mLv"]);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(scrollPosition(3395).kxQJ7q);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        tmp15 = stringResult1;
        tmp14 = stringResult;
      } else {
        class D {
          constructor() {
            const obj = FavoritesGuildAnalytics;
            const result = obj.setNextFavoritesGuildViewSource("intro_dc");
            transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
            markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
        tmp15 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return jsx(scrollPosition(dependencyMap[13]), {});
          }
        }
        const intl2 = tmp(1126).intl;
        const stringResult2 = intl2.string(scrollPosition(3395)["vN/KQ9"]);
        cResult[8] = R;
        cResult[9] = stringResult2;
        tmp20 = stringResult2;
      } else {
        class R {
          constructor() {
            return jsx(scrollPosition(dependencyMap[13]), {});
          }
        }
        tmp20 = cResult[9];
      }
      if (cResult[10] === D) {
        class R {
          constructor() {
            return jsx(scrollPosition(dependencyMap[13]), {});
          }
        }
      }
      const obj3 = {
        visible: tmp9,
        position: "bottom",
        title: tmp14,
        description: tmp15,
        onDismiss: I,
        renderImgComponent: R,
        buttonLabel: tmp20,
        onButtonPress: D,
      };
      cResult[10] = D;
      cResult[11] = I;
      cResult[12] = tmp9;
      cResult[13] = obj3;
    }
  : (markAsDismissed) => {
      let closure_3;
      let tmp3;
      let visible;
      markAsDismissed = markAsDismissed.markAsDismissed;
      visible = undefined;
      let onDismiss;
      let callback1;
      const targetRef = markAsDismissed.targetRef;
      const scrollPosition = callback1.getState().scrollPosition;
      [visible, tmp3] = onDismiss.useState(() => scrollPosition.get() <= 0);
      _slicedToArray = tmp3;
      let obj = markAsDismissed(visible[8]);
      const fn = function v() {
        return scrollPosition.get() <= 0;
      };
      fn.__closure = { scrollPosition };
      fn.__workletHash = 16210171023746;
      fn.__initData = __initData3;
      const fn2 = function p(arg0, arg1) {
        if (arg0 !== arg1) {
          const obj = ReanimatedRexport;
          obj.runOnJS(closure_3)(arg0);
        }
      };
      fn2.__closure = { runOnJS: markAsDismissed(visible[8]).runOnJS, setScrolledToTop: tmp3 };
      fn2.__workletHash = 4195860117373;
      fn2.__initData = __initData4;
      ({ runOnJS: markAsDismissed(visible[8]).runOnJS, setScrolledToTop: tmp3 });
      const animatedReaction = obj.useAnimatedReaction(fn, fn2);
      const items = [markAsDismissed];
      onDismiss = onDismiss.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items);
      const items1 = [markAsDismissed];
      callback1 = onDismiss.useCallback(() => {
        const obj = FavoritesGuildAnalytics;
        const result = obj.setNextFavoritesGuildViewSource("intro_dc");
        transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
      }, items1);
      const items2 = [visible, onDismiss, callback1];
      const memo = onDismiss.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        const obj = {
          visible,
          position: "bottom",
          title: intl.string(_modDef3395["bu/mLv"]),
          description: intl2.string(_modDef3395.kxQJ7q),
          onDismiss,
          renderImgComponent() {
            return closure_1_8(scrollPosition(visible[13]), {});
          },
          buttonLabel: intl3.string(_modDef3395["vN/KQ9"]),
          onButtonPress: callback1,
        };
        intl = intl4.intl;
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        return obj;
      }, items2);
      const obj3 = markAsDismissed(visible[14]);
      const coachmark = obj3.useCoachmark(targetRef, memo);
      return null;
    };
let result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx");

export default tmp2;
