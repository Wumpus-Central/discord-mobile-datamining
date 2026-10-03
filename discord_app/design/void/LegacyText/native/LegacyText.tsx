// discord_app/design/void/LegacyText/native/LegacyText.tsx
import c from "../../../../../_runtime/00576_c.js";
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["style", "children"];
const Text = fn(17).Text;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({
  text: { fontFamily: fn(1085).Fonts.PRIMARY_MEDIUM, includeFontPadding: false },
});
const ReactCompilerGating = fn(558);
let obj = { text: { fontFamily: fn(1085).Fonts.PRIMARY_MEDIUM, includeFontPadding: false } };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(13);
        if (cResult[0] !== arg0) {
          ({ style, children } = arg0);
          const tmp9 = _objectWithoutProperties(arg0, closure_2);
          cResult[0] = arg0;
          cResult[1] = children;
          cResult[2] = tmp9;
          cResult[3] = style;
          let tmp6 = style;
          let tmp5 = tmp9;
          let tmp4 = children;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const tmp10 = closure_6();
        const legacyTextMigrationHighlight = useLegacyTextMigrationHighlight.useLegacyTextMigrationHighlight();
        if (cResult[4] === legacyTextMigrationHighlight) {
          if (cResult[5] === tmp6) {
            if (cResult[6] === tmp10.text) {
              let tmp12 = cResult[7];
            }
            if (cResult[8] === tmp4) {
              if (cResult[9] === tmp5) {
                if (cResult[10] === ref) {
                  if (cResult[11] === tmp12) {
                    let tmp14 = cResult[12];
                  }
                  return tmp14;
                }
              }
            }
            const obj2 = { ref };
            const merged = Object.assign(tmp5);
            obj2.style = tmp12;
            obj2.children = tmp4;
            const tmp20 = <Text ref={ref} />;
            cResult[8] = tmp4;
            cResult[9] = tmp5;
            cResult[10] = ref;
            cResult[11] = tmp12;
            cResult[12] = tmp20;
            tmp14 = tmp20;
          }
        }
        const items = [tmp10.text, tmp6, legacyTextMigrationHighlight];
        cResult[4] = legacyTextMigrationHighlight;
        cResult[5] = tmp6;
        cResult[6] = tmp10.text;
        cResult[7] = items;
        tmp12 = items;
        const tmpResult = useLegacyTextMigrationHighlight;
      }
    : (arg0, ref) => {
        ({ style, children } = arg0);
        const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0 }));
        const tmp2 = closure_6();
        const obj2 = { ref };
        const legacyTextMigrationHighlight = useLegacyTextMigrationHighlight.useLegacyTextMigrationHighlight();
        const merged1 = Object.assign(merged);
        const items = [tmp2.text, style, legacyTextMigrationHighlight];
        obj2.style = items;
        obj2.children = children;
        return <Text ref={ref} />;
      },
);
