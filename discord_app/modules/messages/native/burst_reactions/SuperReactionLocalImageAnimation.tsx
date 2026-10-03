// discord_app/modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx
import c from "../../../../../_runtime/00576_c.js";
import burst_reactions_BurstReactionEffectUtils from "BurstReactionEffectUtils.tsx";
import FadeOutLottieAnimationDefault from "FadeOutLottieAnimation.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["localImageSource", "animationSource"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2 = dependencyMap;
      const cResult = c.c(10);
      if (cResult[0] !== arg0) {
        ({ localImageSource, animationSource } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = animationSource;
        cResult[2] = localImageSource;
        cResult[3] = tmp9;
        let tmp6 = tmp9;
        let tmp5 = localImageSource;
        let tmp4 = animationSource;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp5) {
          let tmp10 = cResult[6];
        }
        const superReactionAnimationSourceFromLocalImage =
          burst_reactions_BurstReactionEffectUtils.useSuperReactionAnimationSourceFromLocalImage(tmp10);
        if (null == superReactionAnimationSourceFromLocalImage) {
          return null;
        } else {
          if (cResult[7] === superReactionAnimationSourceFromLocalImage) {
          }
          const obj2 = { loop: true, source: superReactionAnimationSourceFromLocalImage };
          const merged = Object.assign(tmp6);
          tmp2 = jsx(FadeOutLottieAnimationDefault, { loop: true, source: superReactionAnimationSourceFromLocalImage });
          cResult[7] = superReactionAnimationSourceFromLocalImage;
          cResult[8] = tmp6;
          cResult[9] = tmp2;
        }
        const tmpResult = burst_reactions_BurstReactionEffectUtils;
      }
      const obj3 = { animationSource: tmp4, localImageSource: tmp5 };
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = obj3;
      tmp10 = obj3;
    }
  : (arg0) => {
      let tmp = null;
      ({ localImageSource, animationSource } = arg0);
      const merged = Object.assign(arg0, Object.assign({ localImageSource: 0, animationSource: 0 }));
      const superReactionAnimationSourceFromLocalImage =
        burst_reactions_BurstReactionEffectUtils.useSuperReactionAnimationSourceFromLocalImage({
          animationSource,
          localImageSource,
        });
      if (null != superReactionAnimationSourceFromLocalImage) {
        const obj2 = { loop: true, source: superReactionAnimationSourceFromLocalImage };
        const merged1 = Object.assign(merged);
        tmp = jsx(FadeOutLottieAnimationDefault, { loop: true, source: superReactionAnimationSourceFromLocalImage });
      }
      return tmp;
    };
