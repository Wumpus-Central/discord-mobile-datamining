// === Module 16517: ServerPreviewBannerControls ===

// Module 16517 (ServerPreviewBannerControls)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef5846 from "module_5846" /* 5846 */;
import transitionToGuild from "transitionToGuild" /* 7584 */;
import IconButton from "IconButton" /* 8179 */;
import ServerPreviewPillDefault from "ServerPreviewPill" /* 16518 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MOBILE_GUILD_UPSELL_LIST = fn(1074).MOBILE_GUILD_UPSELL_LIST;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { row: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.row = rect;
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default function ServerPreviewBannerControls() {
  const obj = { style: closure_8().row, children: null };
  const callback = noop.useCallback(() => {
    transitionToGuild.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
  }, []);
  const obj2 = { size: "md", variant: "secondary-overlay", icon: _modDef5846, onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
  const items = [timestampProducer(IconButton.IconButton, obj2), timestampProducer(ServerPreviewPillDefault, {})];
  obj.children = items;
  return React5(View, obj);
};