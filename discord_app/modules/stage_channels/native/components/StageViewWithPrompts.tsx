// discord_app/modules/stage_channels/native/components/StageViewWithPrompts.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import StageChannelHeightHooks from "../../StageChannelHeightHooks.tsx";
import FocusedControls from "../../../video_calls/native/components/FocusedControls.tsx";
import MicrophoneSpotIllustration from "../../../../design/components/mana-assets/native/generated/MicrophoneSpotIllustration.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = StageChannelHeightHooks.CALL_ACTION_BAR_HEIGHT + 8;
let obj = {
  scrollView: { flex: 1 },
  container: { paddingHorizontal: 16, alignItems: "center" },
  illustration: obj2,
  title: { marginTop: 16, marginBottom: 8, textAlign: "center" },
  body: { fontSize: 14, textAlign: "center" },
  prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" },
};
obj2 = { marginTop: nativeDefault.space.PX_48, marginBottom: nativeDefault.space.PX_16 };
const styles = createStyles.createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let body;
      let bottom;
      let children;
      let items;
      let title;
      let top;
      const obj = react2;
      const cResult = obj.c(25);
      ({ title, body, children } = arg0);
      const tmp4 = styles();
      ({ top, bottom } = useSafeAreaInsetsDefault());
      useSafeAreaInsetsDefault();
      const sum = top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT;
      const sum1 = bottom + closure_7;
      if (cResult[0] === sum) {
        let tmp8;
        if (cResult[1] === sum1) {
          tmp8 = cResult[2];
        }
        if (cResult[3] === tmp4.container) {
          let tmp9;
          let tmp11;
          let tmp14;
          if (cResult[4] === tmp8) {
            tmp9 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp13 = hasOwnProperty(MicrophoneSpotIllustration.MicrophoneSpotIllustration, { accessible: false });
            cResult[6] = tmp13;
            tmp11 = tmp13;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] !== tmp4.illustration) {
            const obj2 = { style: tmp4.illustration, children: tmp11 };
            const tmp17 = hasOwnProperty(React3, obj2);
            cResult[7] = tmp4.illustration;
            cResult[8] = tmp17;
            tmp14 = tmp17;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] === tmp4.title) {
            let tmp18;
            if (cResult[10] === title) {
              tmp18 = cResult[11];
            }
            if (cResult[12] === body) {
              let tmp21;
              if (cResult[13] === tmp4.body) {
                tmp21 = cResult[14];
              }
              if (cResult[15] === children) {
                let tmp24;
                if (cResult[16] === tmp4.prompts) {
                  tmp24 = cResult[17];
                }
                if (cResult[18] === tmp4.scrollView) {
                  if (cResult[19] === tmp9) {
                    if (cResult[20] === tmp14) {
                      if (cResult[21] === tmp18) {
                        if (cResult[22] === tmp21) {
                          let tmp28;
                          if (cResult[23] === tmp24) {
                            tmp28 = cResult[24];
                          }
                          return tmp28;
                        }
                      }
                    }
                  }
                }
                const obj3 = {
                  style: tmp4.scrollView,
                  contentContainerStyle: tmp9,
                  alwaysBounceVertical: false,
                  children: items,
                };
                items = [tmp14, tmp18, tmp21, tmp24];
                const tmp31 = metroRequire(_false, obj3);
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
              const tmp27 = hasOwnProperty(React3, obj4);
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
          const obj6 = {
            style: tmp4.title,
            accessibilityRole: "header",
            variant: "heading-xl/extrabold",
            color: "text-overlay-light",
            children: title,
          };
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
    }
  : (arg0) => {
      let body;
      let bottom;
      let children;
      let items;
      let items1;
      let title;
      let top;
      ({ title, body, children } = arg0);
      const tmp = styles();
      const obj = {
        style: tmp.scrollView,
        contentContainerStyle: items,
        alwaysBounceVertical: false,
        children: items1,
      };
      items = [tmp.container];
      const tmp2 = useSafeAreaInsetsDefault();
      const obj2 = {
        paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT,
        paddingBottom: bottom + closure_7,
      };
      ({ top, bottom } = tmp2);
      items[1] = obj2;
      items1 = [, , ,];
      const obj3 = {
        style: tmp.illustration,
        children: hasOwnProperty(MicrophoneSpotIllustration.MicrophoneSpotIllustration, { accessible: false }),
      };
      items1[0] = hasOwnProperty(React3, obj3);
      const obj4 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "text-overlay-light",
        children: title,
      };
      items1[1] = hasOwnProperty(Text_Text.Text, obj4);
      const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body };
      items1[2] = hasOwnProperty(Text_Text.Text, obj5);
      const obj6 = { style: tmp.prompts, children };
      items1[3] = hasOwnProperty(React3, obj6);
      return metroRequire(_false, obj);
    };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default tmp6;
export const useStyles = styles;
