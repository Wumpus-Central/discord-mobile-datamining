// discord_app/modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import CheckpointApngPlayerDefault from "CheckpointApngPlayer.tsx";
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber.tsx";
import _modDef12903 from "../../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = {
  container: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 },
  croppedContainer: null,
  compactContainer: null,
  clip: null,
  value: null,
  globe: null,
};
let obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
obj.croppedContainer = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
let obj3 = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
obj.compactContainer = { marginTop: -nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_6 };
let obj4 = { marginTop: -nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_6 };
obj.clip = {
  height: 96 - 2 * nativeDefault.space.PX_24,
  marginVertical: nativeDefault.space.PX_24,
  paddingRight: nativeDefault.space.PX_8,
  marginRight: -nativeDefault.space.PX_8,
  overflow: "hidden",
};
let obj5 = {
  height: 96 - 2 * nativeDefault.space.PX_24,
  marginVertical: nativeDefault.space.PX_24,
  paddingRight: nativeDefault.space.PX_8,
  marginRight: -nativeDefault.space.PX_8,
  overflow: "hidden",
};
obj.value = { marginTop: -nativeDefault.space.PX_24 };
obj.globe = { width: 75, height: 56 };
let closure_6 = createStyles.createStyles(obj);
let obj6 = { marginTop: -nativeDefault.space.PX_24 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointGlobalStatNumber(arg0) {
      const cResult = c.c(17);
      ({ value, compact } = arg0);
      value2 = undefined !== compact && compact;
      const iter = closure_6();
      if (cResult[0] !== value) {
        const toLocaleStringResult = value.toLocaleString(util.intl.currentLocale);
        cResult[0] = value;
        cResult[1] = toLocaleStringResult;
        let tmp4 = toLocaleStringResult;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = value2 ? iter.compactContainer : iter.croppedContainer;
      if (cResult[2] === iter.container) {
        if (cResult[3] === tmp6) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] === value2) {
          if (cResult[6] === iter.clip) {
            if (cResult[7] === iter.value) {
              if (cResult[8] === value) {
                if (cResult[10] !== iter.globe) {
                  const obj2 = { uri: _modDef12903, style: iter.globe };
                  const tmp19 = React4(CheckpointApngPlayerDefault, obj2);
                  cResult[10] = iter.globe;
                  cResult[11] = tmp19;
                  let tmp15 = tmp19;
                } else {
                  tmp15 = cResult[11];
                }
                if (cResult[12] === tmp4) {
                  if (cResult[13] === tmp7) {
                    if (cResult[14] === tmp8) {
                      if (cResult[15] === tmp15) {
                        let tmp20 = cResult[16];
                      }
                      return tmp20;
                    }
                  }
                }
                const obj3 = { accessible: true, accessibilityLabel: tmp4, style: tmp7, children: null };
                const items = [cResult[9], tmp15];
                obj3.children = items;
                const tmp23 = hasOwnProperty(View, obj3);
                cResult[12] = tmp4;
                cResult[13] = tmp7;
                cResult[14] = cResult[9];
                cResult[15] = tmp15;
                cResult[16] = tmp23;
                tmp20 = tmp23;
              }
            }
          }
        }
        if (value2) {
          const obj4 = { end: value, size: 80 };
          let tmp9Result = React4(CheckpointCountUpStatNumberDefault, obj4);
        } else {
          const obj5 = { style: iter.clip, children: null };
          const obj6 = { style: iter.value, children: null };
          const obj7 = { end: value, size: 96 };
          obj6.children = React4(CheckpointCountUpStatNumberDefault, obj7);
          obj5.children = React4(View, obj6);
          tmp9Result = React4(View, obj5);
        }
        cResult[5] = value2;
        ({ clip: tmp3[6], value: value2 } = iter);
        cResult[7] = value2;
        cResult[8] = value;
        cResult[9] = tmp9Result;
      }
      const items1 = [iter.container, tmp6];
      cResult[2] = iter.container;
      cResult[3] = tmp6;
      cResult[4] = items1;
      tmp7 = items1;
    }
  : function CheckpointGlobalStatNumber(arg0) {
      ({ value, compact } = arg0);
      if (compact === undefined) {
        compact = false;
      }
      const iter = closure_6();
      const obj = {
        accessible: true,
        accessibilityLabel: value.toLocaleString(util.intl.currentLocale),
        style: null,
        children: null,
      };
      const items = [iter.container, compact ? iter.compactContainer : iter.croppedContainer];
      obj.style = items;
      if (compact) {
        const obj2 = { end: value, size: 80 };
        let tmp4Result = React4(CheckpointCountUpStatNumberDefault, obj2);
        let tmp7 = importDefault;
        let tmp8 = React4;
      } else {
        const obj3 = { style: iter.clip, children: null };
        const obj4 = { style: iter.value, children: null };
        const obj5 = { end: value, size: 96 };
        obj4.children = React4(CheckpointCountUpStatNumberDefault, obj5);
        obj3.children = React4(View, obj4);
        tmp4Result = React4(View, obj3);
        tmp7 = importDefault;
        tmp8 = React4;
      }
      const items1 = [tmp4Result];
      const obj6 = { uri: tmp7(12903), style: iter.globe };
      items1[1] = tmp8(tmp7(12898), obj6);
      obj.children = items1;
      return hasOwnProperty(View, obj);
    };
