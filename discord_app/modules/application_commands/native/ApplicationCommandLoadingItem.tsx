// discord_app/modules/application_commands/native/ApplicationCommandLoadingItem.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AUTOCOMPLETE_ROW_HEIGHT = fn(9668).AUTOCOMPLETE_ROW_HEIGHT;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 16;
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = {
    applicationCommandLoadingItem: {
      flexDirection: "row",
      paddingVertical: 4,
      paddingHorizontal: 16,
      alignItems: "center",
      height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT),
    },
    applicationCommandLoadingLeftWrapper: {
      flexDirection: "column",
      width: "75%",
      height: "100%",
      justifyContent: "space-between",
    },
    applicationCommandLoadingName: null,
    applicationCommandLoadingDescription: null,
    applicationCommandLoadingSectionName: null,
  };
  const size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    height: v16,
    borderRadius: v16,
    width: "20%",
  };
  obj.applicationCommandLoadingName = size;
  const size1 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height: v16,
    borderRadius: v16,
    width: "80%",
  };
  obj.applicationCommandLoadingDescription = size1;
  const size2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingLeft: 16,
    width: "25%",
    marginLeft: "auto",
    height: v16,
    borderRadius: v16,
  };
  obj.applicationCommandLoadingSectionName = size2;
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandLoadingItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ApplicationCommandLoadingItem() {
      const cResult = c.c(14);
      const tmp2 = closure_8(useFontScale.useFontScale());
      if (cResult[0] !== tmp2.applicationCommandLoadingName) {
        const obj3 = { style: tmp2.applicationCommandLoadingName };
        const tmp6 = hasOwnProperty(View, obj3);
        cResult[0] = tmp2.applicationCommandLoadingName;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] !== tmp2.applicationCommandLoadingDescription) {
        const obj4 = { style: tmp2.applicationCommandLoadingDescription };
        const tmp10 = hasOwnProperty(View, obj4);
        cResult[2] = tmp2.applicationCommandLoadingDescription;
        cResult[3] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp2.applicationCommandLoadingLeftWrapper) {
        if (cResult[5] === tmp3) {
          if (cResult[6] === tmp7) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] !== tmp2.applicationCommandLoadingSectionName) {
            const obj5 = { style: tmp2.applicationCommandLoadingSectionName };
            const tmp16 = hasOwnProperty(View, obj5);
            cResult[8] = tmp2.applicationCommandLoadingSectionName;
            cResult[9] = tmp16;
            let tmp13 = tmp16;
          } else {
            tmp13 = cResult[9];
          }
          if (cResult[10] === tmp2.applicationCommandLoadingItem) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === tmp13) {
                let tmp17 = cResult[13];
              }
              return tmp17;
            }
          }
          const obj6 = { style: tmp2.applicationCommandLoadingItem, children: null };
          const items = [tmp11, tmp13];
          obj6.children = items;
          const tmp20 = timestampProducer(View, obj6);
          cResult[10] = tmp2.applicationCommandLoadingItem;
          cResult[11] = tmp11;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp17 = tmp20;
        }
      }
      const obj7 = { style: tmp2.applicationCommandLoadingLeftWrapper, children: null };
      const items1 = [tmp3, tmp7];
      obj7.children = items1;
      const tmp12 = timestampProducer(View, obj7);
      cResult[4] = tmp2.applicationCommandLoadingLeftWrapper;
      cResult[5] = tmp3;
      cResult[6] = tmp7;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  : function ApplicationCommandLoadingItem() {
      const tmp = closure_8(useFontScale.useFontScale());
      const obj2 = { style: tmp.applicationCommandLoadingItem, children: null };
      const obj3 = { style: tmp.applicationCommandLoadingLeftWrapper, children: null };
      const items = [
        hasOwnProperty(View, { style: tmp.applicationCommandLoadingName }),
        hasOwnProperty(View, { style: tmp.applicationCommandLoadingDescription }),
      ];
      obj3.children = items;
      const items1 = [
        timestampProducer(View, obj3),
        hasOwnProperty(View, { style: tmp.applicationCommandLoadingSectionName }),
      ];
      obj2.children = items1;
      return timestampProducer(View, obj2);
    };
