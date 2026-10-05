// discord_app/modules/share/native/SharePreparingModal.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Backdrop from "../../../design/components/Backdrop/native/Backdrop.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import MediaViewerOverlayButtonDefault from "../../media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx";
import MediaModalOverlayHeaderWrapper2 from "../../media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let onCancel;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, topBar: obj3, topBarEnd: { justifyContent: "flex-end" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { bottom: undefined };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onCancel) => {
      let intl2;
      let items1;
      let tmp11;
      let tmp12;
      let tmp16;
      let tmp5;
      let tmp6;
      let tmp8;
      let topBar;
      let topBarEnd;
      const obj = react2;
      const cResult = obj.c(19);
      onCancel = onCancel.onCancel;
      const tmp4 = closure_7();
      if (cResult[0] !== onCancel) {
        const fn = function o() {
          return () => onCancel();
        };
        const items = [onCancel];
        cResult[0] = onCancel;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      const content = tmp4.content;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = hasOwnProperty(Backdrop.Backdrop, { blur: "none", "aria-hidden": true });
        cResult[3] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      ({ topBar, topBarEnd } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.cpT0Cq);
        const tmp15 = hasOwnProperty(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" });
        cResult[4] = stringResult;
        cResult[5] = tmp15;
        tmp12 = tmp15;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      if (cResult[6] !== onCancel) {
        const obj2 = { accessibilityLabel: tmp11, icon: tmp12, onPress: onCancel };
        const tmp19 = hasOwnProperty(MediaViewerOverlayButtonDefault, obj2);
        cResult[6] = onCancel;
        cResult[7] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === tmp4.topBarEnd) {
        let tmp20;
        if (cResult[9] === tmp16) {
          tmp20 = cResult[10];
        }
        if (cResult[11] === tmp4.topBar) {
          let tmp22;
          let tmp26;
          let tmp29;
          if (cResult[12] === tmp20) {
            tmp22 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp28 = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
            cResult[14] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = {
              variant: "text-sm/medium",
              color: "text-overlay-light",
              children: intl2.string(intl3.t.DwTQE5),
            };
            const Text = Text_Text.Text;
            intl2 = intl3.intl;
            const tmp31 = hasOwnProperty(Text, obj3);
            cResult[15] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[15];
          }
          if (cResult[16] === tmp4.content) {
            let tmp32;
            if (cResult[17] === tmp22) {
              tmp32 = cResult[18];
            }
            return tmp32;
          }
          const obj4 = { style: content, children: items1 };
          items1 = [tmp8, tmp22, tmp26, tmp29];
          const tmp35 = metroRequire(React3, obj4);
          cResult[16] = tmp4.content;
          cResult[17] = tmp22;
          cResult[18] = tmp35;
          tmp32 = tmp35;
        }
        const obj5 = { style: topBar, pointerEvents: "box-none", children: tmp20 };
        const tmp25 = hasOwnProperty(React3, obj5);
        cResult[11] = tmp4.topBar;
        cResult[12] = tmp20;
        cResult[13] = tmp25;
        tmp22 = tmp25;
      }
      const tmp21 = hasOwnProperty(MediaModalOverlayHeaderWrapper2.MediaModalOverlayHeaderWrapper, {
        style: topBarEnd,
        children: tmp16,
      });
      cResult[8] = tmp4.topBarEnd;
      cResult[9] = tmp16;
      cResult[10] = tmp21;
      tmp20 = tmp21;
    }
  : (onCancel) => {
      let MediaModalOverlayHeaderWrapper;
      let intl;
      let intl2;
      let items1;
      let obj3;
      let obj4;
      let tmp3;
      onCancel = onCancel.onCancel;
      const tmp = closure_7();
      const items = [onCancel];
      const effect = react.useEffect(() => () => onCancel(), items);
      const obj = { style: tmp.content, children: items1 };
      items1 = [hasOwnProperty(Backdrop.Backdrop, { blur: "none", "aria-hidden": true }), , ,];
      const obj2 = {
        style: tmp.topBar,
        pointerEvents: "box-none",
        children: hasOwnProperty(MediaModalOverlayHeaderWrapper, obj3),
      };
      obj3 = { style: tmp.topBarEnd, children: hasOwnProperty(tmp3, obj4) };
      obj4 = {
        accessibilityLabel: intl.string(intl3.t.cpT0Cq),
        icon: hasOwnProperty(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" }),
        onPress: onCancel,
      };
      MediaModalOverlayHeaderWrapper = MediaModalOverlayHeaderWrapper2.MediaModalOverlayHeaderWrapper;
      tmp3 = MediaViewerOverlayButtonDefault;
      intl = intl3.intl;
      items1[1] = hasOwnProperty(React3, obj2);
      items1[2] = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      const obj5 = { variant: "text-sm/medium", color: "text-overlay-light", children: intl2.string(intl3.t.DwTQE5) };
      const Text = Text_Text.Text;
      intl2 = intl3.intl;
      items1[3] = hasOwnProperty(Text, obj5);
      return metroRequire(React3, obj);
    };
const result = size.fileFinishedImporting("modules/share/native/SharePreparingModal.tsx");

export default tmp6;
