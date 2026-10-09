// discord_app/modules/icymi/native/ICYMIHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createICYMIStyles = fn(16820);
let closure_7 = createICYMIStyles.createICYMIStyles((margin) => {
  const obj = {
    text: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: margin.margin },
    separator: null,
  };
  const size = {
    height: 1,
    width: "100%",
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginBottom: nativeDefault.space.PX_16,
  };
  obj.separator = size;
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ICYMIHeader() {
      const cResult = c.c(8);
      const tmp4 = closure_7();
      if (cResult[0] !== tmp4.separator) {
        const obj2 = { style: tmp4.separator };
        const tmp8 = React4(View, obj2);
        cResult[0] = tmp4.separator;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["jnXV/V"]);
        cResult[2] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp4.text) {
        const obj3 = {
          style: tmp4.text,
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: tmp9,
        };
        const tmp13 = React4(Text_Text.Text, obj3);
        cResult[3] = tmp4.text;
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        if (cResult[6] === tmp11) {
          let tmp14 = cResult[7];
        }
        return tmp14;
      }
      const obj4 = { children: null };
      const items = [tmp5, tmp11];
      obj4.children = items;
      const tmp15 = timestampProducer(hasOwnProperty, obj4);
      cResult[5] = tmp5;
      cResult[6] = tmp11;
      cResult[7] = tmp15;
      tmp14 = tmp15;
    }
  : function ICYMIHeader() {
      const tmp = closure_7();
      const obj = { children: null };
      const items = [React4(View, { style: tmp.separator })];
      const obj3 = {
        style: tmp.text,
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj3.children = intl.string(util.t["jnXV/V"]);
      items[1] = React4(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(hasOwnProperty, obj);
    };
