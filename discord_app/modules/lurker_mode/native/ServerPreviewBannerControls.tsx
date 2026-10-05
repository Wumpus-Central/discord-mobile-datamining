// discord_app/modules/lurker_mode/native/ServerPreviewBannerControls.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import AssetRegistryDefault from "../../../../_runtime/06015_AssetRegistry.js";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import IconButton2 from "../../../design/components/Button/native/IconButton.native.tsx";
import ServerPreviewPillDefault from "ServerPreviewPill.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let rect;
const View = react_native.View;
const MOBILE_GUILD_UPSELL_LIST = Constants.MOBILE_GUILD_UPSELL_LIST;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { row: rect };
rect = {
  position: "absolute",
  top: nativeDefault.space.PX_16,
  left: nativeDefault.space.PX_16,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let items;
      let tmp12;
      let tmp6;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(5);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = transitionToGuild;
          obj.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          size: "md",
          variant: "secondary-overlay",
          icon: AssetRegistryDefault,
          onPress: first,
          accessibilityLabel: intl.string(intl2.t["13/7kX"]),
          maxFontSizeMultiplier: 1.5,
        };
        const IconButton = IconButton2.IconButton;
        intl = intl2.intl;
        const tmp10 = metroRequire(IconButton, obj2);
        const tmp11 = metroRequire(ServerPreviewPillDefault, {});
        cResult[1] = tmp10;
        cResult[2] = tmp11;
        tmp7 = tmp11;
        tmp6 = tmp10;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4.row) {
        const obj3 = { style: tmp4.row, children: items };
        items = [tmp6, tmp7];
        const tmp15 = metroImportDefault(View, obj3);
        cResult[3] = tmp4.row;
        cResult[4] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
      }
      return tmp12;
    }
  : () => {
      let intl;
      let items;
      let obj = { style: closure_8().row, children: items };
      closure_8();
      const callback = react.useCallback(() => {
        const obj = transitionToGuild;
        obj.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
      }, []);
      const obj2 = {
        size: "md",
        variant: "secondary-overlay",
        icon: AssetRegistryDefault,
        onPress: callback,
        accessibilityLabel: intl.string(intl2.t["13/7kX"]),
        maxFontSizeMultiplier: 1.5,
      };
      const IconButton = IconButton2.IconButton;
      intl = intl2.intl;
      items = [metroRequire(IconButton, obj2), metroRequire(ServerPreviewPillDefault, {})];
      return metroImportDefault(View, obj);
    };
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default tmp3;
