// discord_app/modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import burst_reactions_BurstReactionEffectUtils from "BurstReactionEffectUtils.tsx";
import FadeOutLottieAnimationDefault from "FadeOutLottieAnimation.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_3 = ["localImageSource", "animationSource"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let animationSource;
      let localImageSource;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(10);
      if (cResult[0] !== arg0) {
        ({ localImageSource, animationSource } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = animationSource;
        cResult[2] = localImageSource;
        cResult[3] = tmp9;
        tmp6 = tmp9;
        tmp5 = localImageSource;
        tmp4 = animationSource;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        let tmp10;
        if (cResult[5] === tmp5) {
          tmp10 = cResult[6];
        }
        const tmpResult = burst_reactions_BurstReactionEffectUtils;
        const superReactionAnimationSourceFromLocalImage =
          tmpResult.useSuperReactionAnimationSourceFromLocalImage(tmp10);
        let tmp12 = null;
        if (null != superReactionAnimationSourceFromLocalImage) {
          if (cResult[7] === superReactionAnimationSourceFromLocalImage) {
            let tmp13;
            if (cResult[8] === tmp6) {
              tmp13 = cResult[9];
            }
            tmp12 = tmp13;
          }
          FadeOutLottieAnimationDefault;
          const merged = Object.assign(tmp6);
          const tmp20 = <tmp16 loop source={superReactionAnimationSourceFromLocalImage} />;
          cResult[7] = superReactionAnimationSourceFromLocalImage;
          cResult[8] = tmp6;
          cResult[9] = tmp20;
          tmp13 = tmp20;
        }
        return tmp12;
      }
      const obj3 = { animationSource: tmp4, localImageSource: tmp5 };
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = obj3;
      tmp10 = obj3;
    }
  : (arg0) => {
      let animationSource;
      let localImageSource;
      let tmp = null;
      ({ localImageSource, animationSource } = arg0);
      const merged = Object.assign(arg0, Object.assign({ localImageSource: 0, animationSource: 0 }));
      const obj = burst_reactions_BurstReactionEffectUtils;
      const superReactionAnimationSourceFromLocalImage = obj.useSuperReactionAnimationSourceFromLocalImage({
        animationSource,
        localImageSource,
      });
      if (null != superReactionAnimationSourceFromLocalImage) {
        FadeOutLottieAnimationDefault;
        const merged1 = Object.assign(merged);
        tmp = <tmp7 loop source={superReactionAnimationSourceFromLocalImage} />;
      }
      return tmp;
    };
const result = size.fileFinishedImporting(
  "modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx",
);

export default tmp3;
