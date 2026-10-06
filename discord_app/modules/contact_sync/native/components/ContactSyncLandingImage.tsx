// discord_app/modules/contact_sync/native/components/ContactSyncLandingImage.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import AssetRegistryDefault from "../../../../../_runtime/12354_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/12355_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({
  leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" },
  landingImageLeft: { left: 58, top: -92 },
  rightContainer: { position: "absolute", height: 113, width: 103 },
  landingImageRight: { left: 134, top: -99 },
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(13);
      const tmp3 = closure_8();
      if (cResult[0] !== tmp3.landingImageLeft) {
        const obj2 = { resizeMode: "contain", style: tmp3.landingImageLeft, source: AssetRegistryDefault };
        const tmp8 = hasOwnProperty(_false, obj2);
        cResult[0] = tmp3.landingImageLeft;
        cResult[1] = tmp8;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp3.leftContainer) {
        let tmp9;
        let tmp11;
        if (cResult[3] === tmp4) {
          tmp9 = cResult[4];
        }
        if (cResult[5] !== tmp3.landingImageRight) {
          const obj3 = { resizeMode: "contain", style: tmp3.landingImageRight, source: AssetRegistryDefault2 };
          const tmp15 = hasOwnProperty(_false, obj3);
          cResult[5] = tmp3.landingImageRight;
          cResult[6] = tmp15;
          tmp11 = tmp15;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp3.rightContainer) {
          let tmp16;
          if (cResult[8] === tmp11) {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp9) {
            let tmp20;
            if (cResult[11] === tmp16) {
              tmp20 = cResult[12];
            }
            return tmp20;
          }
          const obj4 = { children: items };
          items = [tmp9, tmp16];
          const tmp23 = metroImportDefault(metroRequire, obj4);
          cResult[10] = tmp9;
          cResult[11] = tmp16;
          cResult[12] = tmp23;
          tmp20 = tmp23;
        }
        const obj5 = { style: tmp3.rightContainer, children: tmp11 };
        const tmp19 = hasOwnProperty(React3, obj5);
        cResult[7] = tmp3.rightContainer;
        cResult[8] = tmp11;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const obj6 = { style: tmp3.leftContainer, children: tmp4 };
      const tmp10 = hasOwnProperty(React3, obj6);
      cResult[2] = tmp3.leftContainer;
      cResult[3] = tmp4;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : () => {
      let items;
      let obj3;
      let obj5;
      const tmp = closure_8();
      const obj = { children: items };
      const obj2 = { style: tmp.leftContainer, children: hasOwnProperty(_false, obj3) };
      obj3 = { resizeMode: "contain", style: tmp.landingImageLeft, source: AssetRegistryDefault };
      items = [hasOwnProperty(React3, obj2)];
      const obj4 = { style: tmp.rightContainer, children: hasOwnProperty(_false, obj5) };
      obj5 = { resizeMode: "contain", style: tmp.landingImageRight, source: AssetRegistryDefault2 };
      items[1] = hasOwnProperty(React3, obj4);
      return metroImportDefault(metroRequire, obj);
    };
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default tmp5;
