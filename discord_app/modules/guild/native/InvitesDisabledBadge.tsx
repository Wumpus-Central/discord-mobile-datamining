// === Module 16243: InvitesDisabledBadge ===

// Module 16243 (InvitesDisabledBadge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import _modDef12392 from "module_12392" /* 12392 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { pause: { alignContent: "center", justifyContent: "center", width: 10, height: 10 }, pauseBackground: null, pauseRing: null };
let size = { borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, padding: fn(1188).BADGE_PADDING, height: 16, width: 16, alignContent: "center", justifyContent: "center" };
obj.pauseBackground = size;
const size1 = { borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -fn(1188).BADGE_PADDING, right: -fn(1188).BADGE_PADDING, padding: fn(1188).BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
obj.pauseRing = size1;
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(11);
  style = style.style;
  const tmp4 = closure_5();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.pauseRing) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4.pause) {
      const obj2 = { style: tmp4.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: _modDef12392 };
      const tmp9 = jsx(native.ThemedIcon, { style: tmp4.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: _modDef12392 });
      cResult[3] = tmp4.pause;
      cResult[4] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.pauseBackground) {
      if (cResult[6] === tmp6) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp10) {
          let tmp14 = cResult[10];
        }
        return tmp14;
      }
      const obj3 = { style: tmp5, children: tmp10 };
      const tmp17 = <View style={tmp5}>{tmp10}</View>;
      cResult[8] = tmp5;
      cResult[9] = tmp10;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { style: tmp4.pauseBackground, children: tmp6 };
    const tmp13 = <View style={tmp4.pauseBackground}>{tmp6}</View>;
    cResult[5] = tmp4.pauseBackground;
    cResult[6] = tmp6;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const items = [tmp4.pauseRing, style];
  cResult[0] = style;
  cResult[1] = tmp4.pauseRing;
  cResult[2] = items;
  tmp5 = items;
}) : ((style) => {
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp.pauseRing, style.style];
  obj.style = items;
  const obj2 = { style: tmp.pauseBackground, children: jsx(native.ThemedIcon, { style: tmp.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: _modDef12392 }) };
  obj.children = <View style={tmp.pauseBackground}>{jsx(native.ThemedIcon, { style: tmp.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: _modDef12392 })}</View>;
  return <View style={null}>{null}</View>;
}));