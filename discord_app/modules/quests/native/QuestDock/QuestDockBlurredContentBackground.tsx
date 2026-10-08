// discord_app/modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx
import c from "../../../../../_runtime/00576_c.js";
import VisualEffectViewAnimatedDefault from "../../../visual_effect_view/native/VisualEffectViewAnimated.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function QuestDockBlurredContentBackground(arg0) {
        const cResult = c.c(8);
        ({ layoutAnimatedStyle, opacityAnimatedStyle, layoutAnimation, blurTheme } = arg0);
        let str = "dark";
        if (undefined !== blurTheme) {
          str = blurTheme;
        }
        let str2 = "rgba(255, 255, 255, 0.1)";
        let str3 = "rgba(255, 255, 255, 0.1)";
        if ("dark" === str) {
          str3 = "rgba(38, 39, 50, 0.65)";
        }
        if ("dark" === str) {
          str2 = "rgba(38, 39, 50, 0.1)";
        }
        if (cResult[0] === layoutAnimatedStyle) {
          if (cResult[1] === opacityAnimatedStyle) {
            let tmp4 = cResult[2];
          }
          if (cResult[3] === str3) {
            if (cResult[4] === layoutAnimation) {
              if (cResult[5] === tmp4) {
                if (cResult[6] === str2) {
                  let tmp5 = cResult[7];
                }
                return tmp5;
              }
            }
          }
          const obj2 = {
            nativeID: "quest-dock-blurred-background",
            tintColor: str2,
            blurAmount: 0.5,
            blurTheme: "dark",
            android_fallbackColor: str3,
            style: tmp4,
            layout: layoutAnimation,
          };
          const tmp8 = jsx(VisualEffectViewAnimatedDefault, {
            nativeID: "quest-dock-blurred-background",
            tintColor: str2,
            blurAmount: 0.5,
            blurTheme: "dark",
            android_fallbackColor: str3,
            style: tmp4,
            layout: layoutAnimation,
          });
          cResult[3] = str3;
          cResult[4] = layoutAnimation;
          cResult[5] = tmp4;
          cResult[6] = str2;
          cResult[7] = tmp8;
          tmp5 = tmp8;
        }
        const items = [StyleSheet.absoluteFillObject, layoutAnimatedStyle, opacityAnimatedStyle];
        cResult[0] = layoutAnimatedStyle;
        cResult[1] = opacityAnimatedStyle;
        cResult[2] = items;
        tmp4 = items;
      }
    : function QuestDockBlurredContentBackground(blurTheme) {
        blurTheme = blurTheme.blurTheme;
        let str = "dark";
        ({ layoutAnimatedStyle, opacityAnimatedStyle, layoutAnimation } = blurTheme);
        if (undefined !== blurTheme) {
          str = blurTheme;
        }
        const items = [str];
        const items1 = [str];
        const memo = noop.useMemo(() => {
          str = "rgba(255, 255, 255, 0.1)";
          if ("dark" === str) {
            str = "rgba(38, 39, 50, 0.65)";
          }
          return str;
        }, items);
        const memo1 = noop.useMemo(() => {
          str = "rgba(255, 255, 255, 0.1)";
          if ("dark" === str) {
            str = "rgba(38, 39, 50, 0.1)";
          }
          return str;
        }, items1);
        const obj = {
          nativeID: "quest-dock-blurred-background",
          tintColor: memo1,
          blurAmount: 0.5,
          blurTheme: "dark",
          android_fallbackColor: memo,
          style: null,
          layout: layoutAnimation,
        };
        const items2 = [StyleSheet.absoluteFillObject, layoutAnimatedStyle, opacityAnimatedStyle];
        obj.style = items2;
        return jsx(VisualEffectViewAnimatedDefault, {
          nativeID: "quest-dock-blurred-background",
          tintColor: memo1,
          blurAmount: 0.5,
          blurTheme: "dark",
          android_fallbackColor: memo,
          style: null,
          layout: layoutAnimation,
        });
      },
);
