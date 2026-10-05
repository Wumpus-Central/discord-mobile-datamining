// discord_app/modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AssetRegistryDefault from "../../../../_runtime/04810_AssetRegistry.js";
import LegacyTokens from "../../../design/migrations/native/LegacyTokens.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let style;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { badgeImageContainer: size, badgeImage: size1 };
size = {
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
createStyles = createStyles.createStyles;
size1 = { height: 16, width: 16, opacity: LegacyTokens.DARK_1_LIGHT_08, tintColor: nativeDefault.colors.BLACK };
let closure_5 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (style) => {
        const obj = react2;
        const cResult = obj.c(8);
        style = style.style;
        const tmp3 = closure_5();
        if (cResult[0] === style) {
          let tmp4;
          let tmp5;
          if (cResult[1] === tmp3.badgeImageContainer) {
            tmp4 = cResult[2];
          }
          if (cResult[3] !== tmp3.badgeImage) {
            FastImageDefault;
            const tmp9 = <tmp8 source={AssetRegistryDefault} style={tmp3.badgeImage} />;
            cResult[3] = tmp3.badgeImage;
            cResult[4] = tmp9;
            tmp5 = tmp9;
          } else {
            tmp5 = cResult[4];
          }
          if (cResult[5] === tmp4) {
            let tmp10;
            if (cResult[6] === tmp5) {
              tmp10 = cResult[7];
            }
            return tmp10;
          }
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
        style = style.style;
        const tmp = closure_5();
        const items = [tmp.badgeImageContainer, style];
        ({ source: AssetRegistryDefault, style: tmp.badgeImage });
        FastImageDefault;
        return (
          <View style={items} pointerEvents="none">
            {null}
          </View>
        );
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default memoResult;
