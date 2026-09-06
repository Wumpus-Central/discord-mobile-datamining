// discord_app/modules/lurker_mode/native/ServerPreviewBannerControls.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef5629 from "../../../../_runtime/metro/05629__.js";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import ServerPreviewPillDefault from "ServerPreviewPill.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const MOBILE_GUILD_UPSELL_LIST = fn(1074).MOBILE_GUILD_UPSELL_LIST;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
const createStyles = { row: null };
const rect = {
  position: "absolute",
  top: nativeDefault.space.PX_16,
  left: nativeDefault.space.PX_16,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
createStyles.row = rect;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default function ServerPreviewBannerControls() {
  let obj = { style: closure_8().row, children: null };
  const callback = noop.useCallback(() => {
    transitionToGuild.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
  }, []);
  obj = {
    size: "md",
    variant: "secondary-overlay",
    icon: _modDef5629,
    onPress: callback,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 1.5,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["13/7kX"]);
  const items = [timestampProducer(IconButton.IconButton, obj), timestampProducer(ServerPreviewPillDefault, {})];
  obj.children = items;
  return React5(View, obj);
}
