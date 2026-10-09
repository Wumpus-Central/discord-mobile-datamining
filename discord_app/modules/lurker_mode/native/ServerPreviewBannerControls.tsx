// === Module 16520: ServerPreviewBannerControls ===

// Module 16520 (ServerPreviewBannerControls)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef6210 from "module_6210" /* 6210 */;
import transitionToGuild from "transitionToGuild" /* 7046 */;
import IconButton from "IconButton" /* 8114 */;
import ServerPreviewPillDefault from "ServerPreviewPill" /* 16521 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MOBILE_GUILD_UPSELL_LIST = fn(1085).MOBILE_GUILD_UPSELL_LIST;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { row: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.row = rect;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ServerPreviewBannerControls() {
  const cResult = c.c(5);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      transitionToGuild.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "md", variant: "secondary-overlay", icon: _modDef6210, onPress: first, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
    const tmp10 = timestampProducer(IconButton.IconButton, obj2);
    const tmp11 = timestampProducer(ServerPreviewPillDefault, {});
    cResult[1] = tmp10;
    cResult[2] = tmp11;
    let tmp7 = tmp11;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.row) {
    const obj3 = { style: tmp4.row, children: null };
    const items = [tmp6, tmp7];
    obj3.children = items;
    const tmp15 = React5(View, obj3);
    cResult[3] = tmp4.row;
    cResult[4] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (function ServerPreviewBannerControls() {
  const obj = { style: closure_8().row, children: null };
  const callback = noop.useCallback(() => {
    transitionToGuild.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
  }, []);
  const obj2 = { size: "md", variant: "secondary-overlay", icon: _modDef6210, onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
  const items = [timestampProducer(IconButton.IconButton, obj2), timestampProducer(ServerPreviewPillDefault, {})];
  obj.children = items;
  return React5(View, obj);
});