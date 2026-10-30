// === Module 12572: ConjureTipsHost ===

// Module 12572 (ConjureTipsHost)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { tips: { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_20, paddingBottom: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipsHost.tsx");

export default function ConjureTipsHost(onShow) {
  onShow = onShow.onShow;
  let joined;
  ({ projectId, messages, draftHasText, onAskForIdeas } = onShow);
  const tmp = closure_6();
  const tmp2Result = joined(12573)(onShow(12583).CONJURE_TIPS, projectId, messages, draftHasText, onAskForIdeas);
  const mapped = tmp2Result.map((tip) => "" + tip.tip.id + ":" + tip.presentation);
  joined = mapped.join(",");
  const items = [joined, onShow];
  const layoutEffect = noop.useLayoutEffect(() => {
    if ("" !== joined) {
      if (onShow != null) {
        tmp();
      }
    }
  }, items);
  let tmp5 = null;
  if (0 !== tmp2Result.length) {
    const obj = {
      style: tmp.tips,
      accessibilityLiveRegion: "polite",
      children: tmp2Result.map((presentation) => {
          const tip = presentation.tip;
          const options = presentation.options;
          return jsx(joined(dependencyMap[7]), {
            presentation: presentation.presentation,
            render(arg0) {
              return tip.render(arg0, options);
            }
          }, tip.id);
        })
    };
    tmp5 = <View style={tmp.tips} accessibilityLiveRegion="polite">{tmp2Result.map((presentation) => {
      const tip = presentation.tip;
      const options = presentation.options;
      return jsx(joined(dependencyMap[7]), {
        presentation: presentation.presentation,
        render(arg0) {
          return tip.render(arg0, options);
        }
      }, tip.id);
    })}</View>;
  }
  return tmp5;
};