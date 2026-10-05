// discord_app/modules/display_name_styles/native/DisplayNameStylesSheetHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import BottomSheetTitleHeader2 from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let obj2;
let closure_2 = ["leading", "trailing"];
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { trailingButtonClearance: obj2, centeredAccessory: { justifyContent: "center", alignItems: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let centeredAccessory;
      let leading;
      let tmp11;
      let tmp4;
      let tmp5;
      let tmp6;
      let trailing;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(19);
      if (cResult[0] !== arg0) {
        ({ leading, trailing } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = leading;
        cResult[2] = tmp9;
        cResult[3] = trailing;
        tmp6 = trailing;
        tmp5 = tmp9;
        tmp4 = leading;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const tmp10 = closure_6();
      _require = tmp10;
      if (cResult[4] !== tmp10.centeredAccessory) {
        const fn = function p(children) {
          let tmp = children;
          if (null != children) {
            tmp = <View style={centeredAccessory.centeredAccessory}>{children}</View>;
          }
          return tmp;
        };
        cResult[4] = tmp10.centeredAccessory;
        cResult[5] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp11) {
        let tmp13;
        if (cResult[7] === tmp4) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp11) {
          let tmp15;
          if (cResult[10] === tmp6) {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp13) {
              let tmp17;
              if (cResult[14] === tmp15) {
                tmp17 = cResult[15];
              }
              if (cResult[16] === tmp10.trailingButtonClearance) {
                let tmp23;
                if (cResult[17] === tmp17) {
                  tmp23 = cResult[18];
                }
                return tmp23;
              }
              const tmp26 = <View style={tmp12}>{tmp17}</View>;
              cResult[16] = tmp10.trailingButtonClearance;
              cResult[17] = tmp17;
              cResult[18] = tmp26;
              tmp23 = tmp26;
            }
          }
          const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
          const merged = Object.assign(tmp5);
          const tmp22 = <BottomSheetTitleHeader leading={tmp13} trailing={tmp15} />;
          cResult[12] = tmp5;
          cResult[13] = tmp13;
          cResult[14] = tmp15;
          cResult[15] = tmp22;
          tmp17 = tmp22;
        }
        const tmp11Result = tmp11(tmp6);
        cResult[9] = tmp11;
        cResult[10] = tmp6;
        cResult[11] = tmp11Result;
        tmp15 = tmp11Result;
      }
      const tmp11Result2 = tmp11(tmp4);
      cResult[6] = tmp11;
      cResult[7] = tmp4;
      cResult[8] = tmp11Result2;
      tmp13 = tmp11Result2;
    }
  : (arg0) => {
      let leading;
      let trailing;
      ({ leading, trailing } = arg0);
      const merged = Object.assign(arg0, Object.assign({ leading: 0, trailing: 0 }));
      const tmp2 = closure_6();
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      const merged1 = Object.assign(merged);
      let tmp3Result = leading;
      if (null != leading) {
        tmp3Result = <View style={tmp2.centeredAccessory}>{leading}</View>;
      }
      let tmp3Result2 = trailing;
      if (null != trailing) {
        tmp3Result2 = <View style={tmp2.centeredAccessory}>{trailing}</View>;
      }
      return <View style={tmp2.trailingButtonClearance}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesSheetHeader.tsx");

export default tmp3;
