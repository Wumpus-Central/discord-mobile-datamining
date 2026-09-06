// === Module 16178: ServerPreviewBannerControls ===

// Module 16178 (ServerPreviewBannerControls)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef5629 from "module_5629" /* 5629 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import IconButton from "IconButton" /* 8097 */;
import ServerPreviewPillDefault from "ServerPreviewPill" /* 16179 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MOBILE_GUILD_UPSELL_LIST = fn(1074).MOBILE_GUILD_UPSELL_LIST;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
const createStyles = { row: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.row = rect;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default function ServerPreviewBannerControls() {
  let obj = { style: closure_8().row, children: null };
  const callback = noop.useCallback(() => {
    transitionToGuild.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
  }, []);
  obj = { size: "md", variant: "secondary-overlay", icon: _modDef5629, onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["13/7kX"]);
  const items = [timestampProducer(IconButton.IconButton, obj), timestampProducer(ServerPreviewPillDefault, {})];
  obj.children = items;
  return React5(View, obj);
};