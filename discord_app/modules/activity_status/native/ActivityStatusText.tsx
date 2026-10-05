// discord_app/modules/activity_status/native/ActivityStatusText.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ["children", "style", "variant"];
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ text: { flexShrink: 1 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let style;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let variant;
      const obj = react2;
      const cResult = obj.c(13);
      if (cResult[0] !== arg0) {
        ({ children, style, variant } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = tmp10;
        cResult[3] = style;
        cResult[4] = variant;
        tmp7 = variant;
        tmp6 = style;
        tmp5 = tmp10;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      let str = "text-xs/medium";
      if (undefined !== tmp7) {
        str = tmp7;
      }
      const tmp11 = closure_5();
      if (cResult[5] === tmp6) {
        let tmp12;
        if (cResult[6] === tmp11.text) {
          tmp12 = cResult[7];
        }
        if (cResult[8] === tmp4) {
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp12) {
              let tmp13;
              if (cResult[11] === str) {
                tmp13 = cResult[12];
              }
              return tmp13;
            }
          }
        }
        const Text = Text_Text.Text;
        const merged = Object.assign(tmp5);
        const tmp18 = (
          <Text variant={str} color="text-muted" style={tmp12} lineClamp={1}>
            {tmp4}
          </Text>
        );
        cResult[8] = tmp4;
        cResult[9] = tmp5;
        cResult[10] = tmp12;
        cResult[11] = str;
        cResult[12] = tmp18;
        tmp13 = tmp18;
      }
      const items = [tmp11.text, tmp6];
      cResult[5] = tmp6;
      cResult[6] = tmp11.text;
      cResult[7] = items;
      tmp12 = items;
    }
  : (variant) => {
      let children;
      let style;
      let str = variant.variant;
      ({ children, style } = variant);
      if (str === undefined) {
        str = "text-xs/medium";
      }
      const merged = Object.assign(variant, Object.assign({ children: 0, style: 0, variant: 0 }));
      const items = [closure_5().text, style];
      closure_5();
      const Text = Text_Text.Text;
      const merged1 = Object.assign(merged);
      return (
        <Text variant={str} color="text-muted" style={items} lineClamp={1}>
          {children}
        </Text>
      );
    };
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default tmp3;
