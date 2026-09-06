// discord_app/modules/guild/native/InvitesDisabledBadge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef12725 from "../../../../_runtime/metro/12725__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = {
  pause: { alignContent: "center", justifyContent: "center", width: 10, height: 10 },
  pauseBackground: null,
  pauseRing: null,
};
let size = {
  borderRadius: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  padding: fn(1178).BADGE_PADDING,
  height: 16,
  width: 16,
  alignContent: "center",
  justifyContent: "center",
};
obj.pauseBackground = size;
const size1 = {
  borderRadius: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  position: "absolute",
  bottom: -fn(1178).BADGE_PADDING,
  right: -fn(1178).BADGE_PADDING,
  padding: fn(1178).BADGE_PADDING,
  height: 22,
  width: 22,
  alignContent: "center",
  justifyContent: "center",
};
obj.pauseRing = size1;
let closure_5 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default noop.memo(function InvitesDisabledBadge(style) {
  const tmp = closure_5();
  let obj = { style: null, children: null };
  const items = [tmp.pauseRing, style.style];
  obj.style = items;
  obj = { style: tmp.pauseBackground, children: null };
  obj = { style: tmp.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: _modDef12725 };
  obj.children = jsx(native.ThemedIcon, {
    style: tmp.pause,
    themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
    source: _modDef12725,
  });
  obj.children = (
    <View style={tmp.pause} themedColor={nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE} source={_modDef12725} />
  );
  return <View style={tmp.pause} themedColor={nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE} source={_modDef12725} />;
});
