// discord_app/modules/contact_sync/native/components/ContactSyncLandingImage.tsx
import c from "../../../../../_runtime/00576_c.js";
import _modDef12339 from "../../../../../_runtime/metro/12339__.js";
import _modDef12340 from "../../../../../_runtime/metro/12340__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({
  leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" },
  landingImageLeft: { left: 58, top: -92 },
  rightContainer: { position: "absolute", height: 113, width: 103 },
  landingImageRight: { left: 134, top: -99 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(13);
      const tmp3 = closure_8();
      if (cResult[0] !== tmp3.landingImageLeft) {
        const obj2 = { resizeMode: "contain", style: tmp3.landingImageLeft, source: _modDef12339 };
        const tmp8 = hasOwnProperty(React3, obj2);
        cResult[0] = tmp3.landingImageLeft;
        cResult[1] = tmp8;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp3.leftContainer) {
        if (cResult[3] === tmp4) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] !== tmp3.landingImageRight) {
          const obj3 = { resizeMode: "contain", style: tmp3.landingImageRight, source: _modDef12340 };
          const tmp15 = hasOwnProperty(React3, obj3);
          cResult[5] = tmp3.landingImageRight;
          cResult[6] = tmp15;
          let tmp11 = tmp15;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp3.rightContainer) {
          if (cResult[8] === tmp11) {
            let tmp16 = cResult[9];
          }
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp16) {
              let tmp20 = cResult[12];
            }
            return tmp20;
          }
          const obj4 = { children: null };
          const items = [tmp9, tmp16];
          obj4.children = items;
          const tmp23 = React5(timestampProducer, obj4);
          cResult[10] = tmp9;
          cResult[11] = tmp16;
          cResult[12] = tmp23;
          tmp20 = tmp23;
        }
        const obj5 = { style: tmp3.rightContainer, children: tmp11 };
        const tmp19 = hasOwnProperty(React4, obj5);
        cResult[7] = tmp3.rightContainer;
        cResult[8] = tmp11;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const tmp10 = hasOwnProperty(React4, { style: tmp3.leftContainer, children: tmp4 });
      cResult[2] = tmp3.leftContainer;
      cResult[3] = tmp4;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj6 = { style: tmp3.leftContainer, children: tmp4 };
    }
  : () => {
      const tmp = closure_8();
      const obj = { children: null };
      const obj2 = {
        style: tmp.leftContainer,
        children: hasOwnProperty(React3, { resizeMode: "contain", style: tmp.landingImageLeft, source: _modDef12339 }),
      };
      const items = [hasOwnProperty(React4, obj2)];
      const obj4 = { style: tmp.rightContainer, children: null };
      const obj3 = { resizeMode: "contain", style: tmp.landingImageLeft, source: _modDef12339 };
      obj4.children = hasOwnProperty(React3, {
        resizeMode: "contain",
        style: tmp.landingImageRight,
        source: _modDef12340,
      });
      items[1] = hasOwnProperty(React4, obj4);
      obj.children = items;
      return React5(timestampProducer, obj);
    };
