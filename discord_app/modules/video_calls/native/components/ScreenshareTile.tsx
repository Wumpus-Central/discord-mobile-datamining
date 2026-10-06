// discord_app/modules/video_calls/native/components/ScreenshareTile.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09127_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
const NOOP = Constants.NOOP;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  container: obj2,
  image: { marginBottom: 8, width: 60, height: 40 },
  label: { lineHeight: 18, textAlign: "center" },
  liveContainer: { position: "absolute", top: 8, right: 8, zIndex: 2 },
};
obj2 = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BLACK,
  overflow: "hidden",
  flex: 1,
};
let closure_8 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let onDoubleTap;
      let onSingleTap;
      const obj = react2;
      const cResult = obj.c(19);
      ({ onSingleTap, onDoubleTap } = arg0);
      if (undefined === onSingleTap) {
        onSingleTap = NOOP;
      }
      if (undefined === onDoubleTap) {
        onDoubleTap = NOOP;
      }
      const tmp4 = closure_8();
      if (cResult[0] === onDoubleTap) {
        let tmp5;
        let tmp9;
        let tmp12;
        let tmp16;
        let tmp20;
        let tmp22;
        if (cResult[1] === onSingleTap) {
          tmp5 = cResult[2];
        }
        const tmp7 = useParticipantTileTapGestureDefault(tmp5);
        const _Symbol = Symbol;
        const container = tmp4.container;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = metroRequire(native.LiveTag, {});
          cResult[3] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] !== tmp4.liveContainer) {
          const obj2 = { style: tmp4.liveContainer, children: tmp9 };
          const tmp15 = metroRequire(_false, obj2);
          cResult[4] = tmp4.liveContainer;
          cResult[5] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== tmp4.image) {
          const obj3 = { source: AssetRegistryDefault, style: tmp4.image, resizeMode: "contain" };
          const tmp19 = metroRequire(React3, obj3);
          cResult[6] = tmp4.image;
          cResult[7] = tmp19;
          tmp16 = tmp19;
        } else {
          tmp16 = cResult[7];
        }
        const _Symbol2 = Symbol;
        const label = tmp4.label;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.G84gtR);
          cResult[8] = stringResult;
          tmp20 = stringResult;
        } else {
          tmp20 = cResult[8];
        }
        if (cResult[9] !== tmp4.label) {
          const obj4 = { style: label, variant: "text-xs/bold", color: "text-overlay-light", children: tmp20 };
          const tmp24 = metroRequire(Text_Text.Text, obj4);
          cResult[9] = tmp4.label;
          cResult[10] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[10];
        }
        if (cResult[11] === tmp4.container) {
          if (cResult[12] === tmp22) {
            if (cResult[13] === tmp12) {
              let tmp25;
              if (cResult[14] === tmp16) {
                tmp25 = cResult[15];
              }
              if (cResult[16] === tmp7) {
                let tmp29;
                if (cResult[17] === tmp25) {
                  tmp29 = cResult[18];
                }
                return tmp29;
              }
              const obj5 = { gesture: tmp7, children: tmp25 };
              const tmp31 = metroRequire(LegacyBaseButton.GestureDetector, obj5);
              cResult[16] = tmp7;
              cResult[17] = tmp25;
              cResult[18] = tmp31;
              tmp29 = tmp31;
            }
          }
        }
        const obj6 = { style: container, children: items };
        items = [tmp12, tmp16, tmp22];
        const tmp28 = metroImportDefault(_false, obj6);
        cResult[11] = tmp4.container;
        cResult[12] = tmp22;
        cResult[13] = tmp12;
        cResult[14] = tmp16;
        cResult[15] = tmp28;
        tmp25 = tmp28;
      }
      const obj7 = { onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap };
      cResult[0] = onDoubleTap;
      cResult[1] = onSingleTap;
      cResult[2] = obj7;
      tmp5 = obj7;
    }
  : (onSingleTap) => {
      let intl;
      let items;
      let obj2;
      onSingleTap = onSingleTap.onSingleTap;
      if (onSingleTap === undefined) {
        onSingleTap = NOOP;
      }
      let onDoubleTap = onSingleTap.onDoubleTap;
      if (onDoubleTap === undefined) {
        onDoubleTap = NOOP;
      }
      const tmp = closure_8();
      const obj = {
        gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }),
        children: metroImportDefault(_false, obj2),
      };
      obj2 = { style: tmp.container, children: items };
      const obj3 = { style: tmp.liveContainer, children: metroRequire(native.LiveTag, {}) };
      const GestureDetector = LegacyBaseButton.GestureDetector;
      items = [metroRequire(_false, obj3), ,];
      const obj4 = { source: AssetRegistryDefault, style: tmp.image, resizeMode: "contain" };
      items[1] = metroRequire(React3, obj4);
      const obj5 = {
        style: tmp.label,
        variant: "text-xs/bold",
        color: "text-overlay-light",
        children: intl.string(intl2.t.G84gtR),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[2] = metroRequire(Text, obj5);
      return metroRequire(GestureDetector, obj);
    };
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default tmp5;
