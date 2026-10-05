// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import FavoritesSpotIllustration from "../../../../design/components/mana-assets/native/generated/FavoritesSpotIllustration.native.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, betaTag: { marginLeft: 0 } };
obj2 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let tmp8;
      const obj = react;
      const cResult = obj.c(6);
      const tmp4 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = _false(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 160, height: 90 });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.betaTag) {
        const obj2 = { style: tmp4.betaTag };
        const tmp10 = _false(native.BetaTag, obj2);
        cResult[1] = tmp4.betaTag;
        cResult[2] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        let tmp11;
        if (cResult[4] === tmp8) {
          tmp11 = cResult[5];
        }
        return tmp11;
      }
      const obj3 = { style: tmp4.container, children: items };
      items = [first, tmp8];
      const tmp12 = React3(View, obj3);
      cResult[3] = tmp4.container;
      cResult[4] = tmp8;
      cResult[5] = tmp12;
      tmp11 = tmp12;
    }
  : () => {
      let items;
      const tmp = closure_5();
      const obj = { style: tmp.container, children: items };
      items = [_false(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 160, height: 90 })];
      const obj2 = { style: tmp.betaTag };
      items[1] = _false(native.BetaTag, obj2);
      return React3(View, obj);
    };
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx");

export default tmp3;
