// === Module 10979: StageViewWithPrompts ===

// Module 10979 (StageViewWithPrompts)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5087 */;
import FocusedControls from "FocusedControls" /* 10981 */;
import MicrophoneSpotIllustration from "MicrophoneSpotIllustration" /* 11000 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = fn(10980).CALL_ACTION_BAR_HEIGHT + 8;
const createStyles = fn(5091);
let obj2 = { scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, illustration: { marginTop: nativeDefault.space.PX_48, marginBottom: nativeDefault.space.PX_16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } };
const styles = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_48, marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StageViewWithPrompts(arg0) {
  const cResult = c.c(25);
  ({ title, body, children } = arg0);
  const tmp4 = styles();
  ({ top, bottom } = useSafeAreaInsetsDefault());
  const sum = top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT;
  const sum1 = bottom + closure_7;
  if (cResult[0] === sum) {
    if (cResult[1] === sum1) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp8) {
        let tmp9 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = hasOwnProperty(MicrophoneSpotIllustration.MicrophoneSpotIllustration, { accessible: false });
        cResult[6] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp4.illustration) {
        const obj2 = { style: tmp4.illustration, children: tmp11 };
        const tmp17 = hasOwnProperty(React4, obj2);
        cResult[7] = tmp4.illustration;
        cResult[8] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === tmp4.title) {
        if (cResult[10] === title) {
          let tmp18 = cResult[11];
        }
        if (cResult[12] === body) {
          if (cResult[13] === tmp4.body) {
            let tmp21 = cResult[14];
          }
          if (cResult[15] === children) {
            if (cResult[16] === tmp4.prompts) {
              let tmp24 = cResult[17];
            }
            if (cResult[18] === tmp4.scrollView) {
              if (cResult[19] === tmp9) {
                if (cResult[20] === tmp14) {
                  if (cResult[21] === tmp18) {
                    if (cResult[22] === tmp21) {
                      if (cResult[23] === tmp24) {
                        let tmp28 = cResult[24];
                      }
                      return tmp28;
                    }
                  }
                }
              }
            }
            const obj3 = { style: tmp4.scrollView, contentContainerStyle: tmp9, alwaysBounceVertical: false, children: null };
            const items = [tmp14, tmp18, tmp21, tmp24];
            obj3.children = items;
            const tmp31 = timestampProducer(React3, obj3);
            cResult[18] = tmp4.scrollView;
            cResult[19] = tmp9;
            cResult[20] = tmp14;
            cResult[21] = tmp18;
            cResult[22] = tmp21;
            cResult[23] = tmp24;
            cResult[24] = tmp31;
            tmp28 = tmp31;
          }
          const obj4 = { style: tmp4.prompts, children };
          const tmp27 = hasOwnProperty(React4, obj4);
          cResult[15] = children;
          cResult[16] = tmp4.prompts;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
        const obj5 = { style: tmp4.body, variant: "text-sm/medium", color: "text-overlay-light", children: body };
        const tmp23 = hasOwnProperty(Text_Text.Text, obj5);
        cResult[12] = body;
        cResult[13] = tmp4.body;
        cResult[14] = tmp23;
        tmp21 = tmp23;
      }
      const obj6 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title };
      const tmp20 = hasOwnProperty(Text_Text.Text, obj6);
      cResult[9] = tmp4.title;
      cResult[10] = title;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    }
    const items1 = [tmp4.container, tmp8];
    cResult[3] = tmp4.container;
    cResult[4] = tmp8;
    cResult[5] = items1;
    tmp9 = items1;
  }
  const obj7 = { paddingTop: sum, paddingBottom: sum1 };
  cResult[0] = sum;
  cResult[1] = sum1;
  cResult[2] = obj7;
  tmp8 = obj7;
  const tmp5 = useSafeAreaInsetsDefault();
}) : (function StageViewWithPrompts(arg0) {
  ({ title, body, children } = arg0);
  const tmp = styles();
  const obj = { style: tmp.scrollView, contentContainerStyle: null, alwaysBounceVertical: false, children: null };
  const items = [tmp.container, ];
  const tmp2 = useSafeAreaInsetsDefault();
  ({ top, bottom } = tmp2);
  items[1] = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_7 };
  obj.contentContainerStyle = items;
  const obj2 = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_7 };
  const items1 = [hasOwnProperty(React4, { style: tmp.illustration, children: hasOwnProperty(MicrophoneSpotIllustration.MicrophoneSpotIllustration, { accessible: false }) }), hasOwnProperty(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title }), hasOwnProperty(Text_Text.Text, { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body }), hasOwnProperty(React4, { style: tmp.prompts, children })];
  obj.children = items1;
  return timestampProducer(React3, obj);
});
export const useStyles = styles;