// discord_app/modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj2 = {
  graphic: {
    width: "100%",
    aspectRatio: 1.7777777777777777,
    borderRadius: nativeDefault.radii.xs,
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  },
  graphicImage: { width: "100%", height: "100%" },
};
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  width: "100%",
  aspectRatio: 1.7777777777777777,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeGameGraphic(asset) {
      const cResult = c.c(8);
      asset = asset.asset;
      const tmp3 = closure_5();
      if (cResult[0] !== asset) {
        const obj2 = { uri: asset };
        cResult[0] = asset;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp3.graphicImage) {
        if (cResult[3] === tmp4) {
          let tmp5 = cResult[4];
        }
        if (cResult[5] === tmp3.graphic) {
          if (cResult[6] === tmp5) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
        const obj3 = { style: tmp3.graphic, children: tmp5 };
        const tmp10 = <View style={tmp3.graphic}>{tmp5}</View>;
        cResult[5] = tmp3.graphic;
        cResult[6] = tmp5;
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = jsx(FastImageDefault, {
        source: tmp4,
        style: tmp3.graphicImage,
        resizeMode: "cover",
        accessible: false,
      });
      cResult[2] = tmp3.graphicImage;
      cResult[3] = tmp4;
      cResult[4] = tmp6;
      tmp5 = tmp6;
      const obj4 = { source: tmp4, style: tmp3.graphicImage, resizeMode: "cover", accessible: false };
    }
  : function OrbsArcadeGameGraphic(uri) {
      const tmp = closure_5();
      const obj = {
        style: tmp.graphic,
        children: jsx(FastImageDefault, {
          source: { uri: uri.asset },
          style: tmp.graphicImage,
          resizeMode: "cover",
          accessible: false,
        }),
      };
      return (
        <View style={tmp.graphic}>
          {jsx(FastImageDefault, {
            source: { uri: uri.asset },
            style: tmp.graphicImage,
            resizeMode: "cover",
            accessible: false,
          })}
        </View>
      );
    };
