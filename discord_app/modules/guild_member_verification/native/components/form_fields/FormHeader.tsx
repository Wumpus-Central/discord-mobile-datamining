// discord_app/modules/guild_member_verification/native/components/form_fields/FormHeader.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
let closure_2 = ["children"];
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { fieldHeader: null };
const obj3 = {};
let merged = Object.assign(
  TextStyles(fn(1096).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }),
);
obj3.paddingBottom = 8;
obj2.fieldHeader = obj3;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/FormHeader.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormHeader(children) {
      const cResult = c.c(10);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_2);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_5();
      if (cResult[3] === tmp5.style) {
        if (cResult[4] === tmp9.fieldHeader) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp5) {
            if (cResult[8] === tmp10) {
              let tmp11 = cResult[9];
            }
            return tmp11;
          }
        }
        const obj2 = {};
        const merged = Object.assign(tmp5);
        obj2.style = tmp10;
        obj2.children = tmp4;
        const tmp16 = jsx(native.LegacyText, {});
        cResult[6] = tmp4;
        cResult[7] = tmp5;
        cResult[8] = tmp10;
        cResult[9] = tmp16;
        tmp11 = tmp16;
      }
      const items = [tmp9.fieldHeader, tmp5.style];
      cResult[3] = tmp5.style;
      cResult[4] = tmp9.fieldHeader;
      cResult[5] = items;
      tmp10 = items;
    }
  : function FormHeader(children) {
      const merged = Object.assign(children, Object.assign({ children: 0 }));
      const obj = {};
      const merged1 = Object.assign(merged);
      const items = [closure_5().fieldHeader, merged.style];
      obj.style = items;
      obj.children = children.children;
      return jsx(native.LegacyText, {});
    };
