// discord_app/modules/checkpoint/native/components/CheckpointEmphasis.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useFontScale from "../../../screen/native/useFontScale.tsx";
import inlineStyles from "../../../../../_runtime/07576_inlineStyles.js";
import useScaledTextLineHeight from "../../../screen/native/useScaledTextLineHeight.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = fn(5437).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PlatformUtils = fn(1383);
const CheckpointCustomizationUtils = fn(15986);
const points = CheckpointCustomizationUtils.getChamferedRectPoints(75, 22, 5.5);
const createStyles = fn(5092);
let obj4 = {
  container: { paddingHorizontal: nativeDefault.space.PX_6 },
  emphasis: { flexDirection: "row", alignItems: "center" },
  text: null,
};
let obj5 = { paddingHorizontal: nativeDefault.space.PX_6 };
obj4.text = {
  color: "black",
  textTransform: "uppercase",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_6,
  fontSize: 14,
  lineHeight: 19,
};
let closure_10 = createStyles.createStyles(obj4);
const ReactCompilerGating = fn(558);
let obj6 = {
  color: "black",
  textTransform: "uppercase",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_6,
  fontSize: 14,
  lineHeight: 19,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointEmphasis.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointEmphasis(arg0) {
      const cResult = c.c(17);
      ({ children, fill } = arg0);
      if (undefined === fill) {
        fill = CHECKPOINT_PRIMARY;
      }
      const tmp4 = closure_10();
      const fontScale = useFontScale.useFontScale();
      const tmpResult = useFontScale;
      const result = (num * useScaledTextLineHeight.scaleLineHeight(14, fontScale)) / 14;
      if (cResult[0] !== result) {
        const obj2 = { transform: null };
        const obj3 = { translateY: result };
        const items = [obj3];
        obj2.transform = items;
        cResult[0] = result;
        cResult[1] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp4.container) {
        if (cResult[3] === tmp7) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] !== fill) {
          const size = {
            style: React3.absoluteFill,
            width: "100%",
            height: "100%",
            viewBox: "0 0 75 22",
            preserveAspectRatio: "none",
            children: null,
          };
          const obj4 = { points, fill };
          size.children = timestampProducer(inlineStyles.Polygon, obj4);
          const tmp15 = timestampProducer(inlineStylesDefault, size);
          cResult[5] = fill;
          cResult[6] = tmp15;
          let tmp9 = tmp15;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === children) {
          if (cResult[8] === tmp4.text) {
            let tmp16 = cResult[9];
          }
          if (cResult[10] === tmp4.emphasis) {
            if (cResult[11] === tmp9) {
              if (cResult[12] === tmp16) {
                let tmp19 = cResult[13];
              }
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp19) {
                  let tmp23 = cResult[16];
                }
                return tmp23;
              }
              const obj5 = { style: tmp8, children: tmp19 };
              const tmp26 = timestampProducer(React4, obj5);
              cResult[14] = tmp8;
              cResult[15] = tmp19;
              cResult[16] = tmp26;
              tmp23 = tmp26;
            }
          }
          const obj6 = { style: tmp4.emphasis, children: null };
          const items1 = [tmp9, tmp16];
          obj6.children = items1;
          const tmp22 = React5(React4, obj6);
          cResult[10] = tmp4.emphasis;
          cResult[11] = tmp9;
          cResult[12] = tmp16;
          cResult[13] = tmp22;
          tmp19 = tmp22;
        }
        const obj7 = { variant: "experimental/mono-md/bold", style: tmp4.text, lineClamp: 1, children };
        const tmp18 = timestampProducer(Text_Text.Text, obj7);
        cResult[7] = children;
        cResult[8] = tmp4.text;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      }
      const items2 = [tmp4.container, tmp7];
      cResult[2] = tmp4.container;
      cResult[3] = tmp7;
      cResult[4] = items2;
      tmp8 = items2;
      const tmpResult2 = useScaledTextLineHeight;
    }
  : function CheckpointEmphasis(children) {
      let fill = children.fill;
      if (fill === undefined) {
        fill = CHECKPOINT_PRIMARY;
      }
      const tmp = closure_10();
      const fontScale = useFontScale.useFontScale();
      const obj3 = { style: null, children: null };
      const items = [tmp.container];
      const obj4 = { transform: null };
      const items1 = [{ translateY: (num * useScaledTextLineHeight.scaleLineHeight(14, fontScale)) / 14 }];
      obj4.transform = items1;
      items[1] = obj4;
      obj3.style = items;
      const obj6 = { style: tmp.emphasis, children: null };
      const size = {
        style: React3.absoluteFill,
        width: "100%",
        height: "100%",
        viewBox: "0 0 75 22",
        preserveAspectRatio: "none",
        children: null,
      };
      const obj5 = { translateY: (num * useScaledTextLineHeight.scaleLineHeight(14, fontScale)) / 14 };
      size.children = timestampProducer(inlineStyles.Polygon, { points, fill });
      const items2 = [
        timestampProducer(inlineStylesDefault, size),
        timestampProducer(Text_Text.Text, {
          variant: "experimental/mono-md/bold",
          style: tmp.text,
          lineClamp: 1,
          children: children.children,
        }),
      ];
      obj6.children = items2;
      obj3.children = React5(React4, obj6);
      return timestampProducer(React4, obj3);
    };
