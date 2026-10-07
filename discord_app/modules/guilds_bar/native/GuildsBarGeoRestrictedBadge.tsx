// discord_app/modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4816 from "../../../../_runtime/metro/04816__.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { badgeImageContainer: null, badgeImage: null };
let size = {
  position: "absolute",
  bottom: -3,
  right: -3,
  height: 22,
  width: 22,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND,
  borderWidth: 3,
  borderRadius: 11,
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
obj.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(5627).DARK_1_LIGHT_08, tintColor: nativeDefault.colors.BLACK };
obj.badgeImage = size1;
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (style) => {
        const cResult = c.c(8);
        style = style.style;
        const tmp3 = closure_5();
        if (cResult[0] === style) {
          if (cResult[1] === tmp3.badgeImageContainer) {
            let tmp4 = cResult[2];
          }
          if (cResult[3] !== tmp3.badgeImage) {
            const obj2 = { source: _modDef4816, style: tmp3.badgeImage };
            const tmp9 = jsx(FastImageDefault, { source: _modDef4816, style: tmp3.badgeImage });
            cResult[3] = tmp3.badgeImage;
            cResult[4] = tmp9;
            let tmp5 = tmp9;
          } else {
            tmp5 = cResult[4];
          }
          if (cResult[5] === tmp4) {
            if (cResult[6] === tmp5) {
              let tmp10 = cResult[7];
            }
            return tmp10;
          }
          const obj3 = { style: tmp4, pointerEvents: "none", children: tmp5 };
          const tmp13 = (
            <View style={tmp4} pointerEvents="none">
              {tmp5}
            </View>
          );
          cResult[5] = tmp4;
          cResult[6] = tmp5;
          cResult[7] = tmp13;
          tmp10 = tmp13;
        }
        const items = [tmp3.badgeImageContainer, style];
        cResult[0] = style;
        cResult[1] = tmp3.badgeImageContainer;
        cResult[2] = items;
        tmp4 = items;
      }
    : (style) => {
        const tmp = closure_5();
        const obj = { style: null, pointerEvents: "none", children: null };
        const items = [tmp.badgeImageContainer, style.style];
        obj.style = items;
        const obj2 = { source: _modDef4816, style: tmp.badgeImage };
        obj.children = jsx(FastImageDefault, { source: _modDef4816, style: tmp.badgeImage });
        return (
          <View style={null} pointerEvents="none">
            {null}
          </View>
        );
      },
);
