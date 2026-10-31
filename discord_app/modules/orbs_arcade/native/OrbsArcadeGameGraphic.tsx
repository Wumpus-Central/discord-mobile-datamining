// discord_app/modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
const obj2 = {
  graphic: {
    width: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH,
    maxWidth: "100%",
    alignSelf: "center",
    aspectRatio: 1.7777777777777777,
    borderRadius: nativeDefault.radii.xs,
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  },
  graphicImage: { width: "100%", height: "100%" },
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx");

export default function OrbsArcadeGameGraphic(uri) {
  const tmp = closure_4();
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
}
