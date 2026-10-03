// === Module 16975: InstantInviteSelfMeasurer ===

// Module 16975 (InstantInviteSelfMeasurer)
import c from "c" /* 576 */;
import InstantInvite from "InstantInvite" /* 10669 */;
import noop from "module_19" /* 19 */;

const InstantInviteDefault = InstantInvite;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ container: { position: "absolute", opacity: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  let data = dependencyMap;
  const cResult = c.c(13);
  ({ containerStyle, item, onMeasured } = type);
  type = type.type;
  let str = "height";
  if (undefined !== type) {
    str = type;
  }
  const tmp3 = closure_6();
  if (cResult[0] === onMeasured) {
    if (cResult[1] === str) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === containerStyle) {
      if (cResult[4] === tmp3.container) {
        let tmp5 = cResult[5];
      }
      if (cResult[6] === item.data) {
        if (cResult[7] === item.type) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp5) {
              if (cResult[11] === tmp6) {
                let tmp12 = cResult[12];
              }
              return tmp12;
            }
          }
          const obj2 = { style: tmp5, onLayout: tmp4, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, accessible: false, children: cResult[8] };
          const tmp15 = <View style={tmp5} onLayout={tmp4} pointerEvents="none" importantForAccessibility="no-hide-descendants" accessibilityElementsHidden accessible={false}>{cResult[8]}</View>;
          cResult[9] = tmp4;
          cResult[10] = tmp5;
          cResult[11] = cResult[8];
          cResult[12] = tmp15;
          tmp12 = tmp15;
        }
      }
      if ("invite" === item.type) {
        const obj3 = { invite: item.data };
        let tmp8 = jsx(InstantInviteDefault, { invite: item.data });
      } else {
        const obj4 = { channel: item.data };
        tmp8 = jsx(InstantInvite.LinkedChannelInvite, { channel: item.data });
      }
      data = item.data;
      cResult[6] = data;
      item = item.type;
      cResult[7] = item;
      cResult[8] = tmp8;
    }
    const items = [containerStyle, tmp3.container];
    cResult[3] = containerStyle;
    cResult[4] = tmp3.container;
    cResult[5] = items;
    tmp5 = items;
  }
  const fn = function c(nativeEvent) {
    const layout = nativeEvent.nativeEvent.layout;
    onMeasured("height" === str ? layout.height : layout.width);
  };
  cResult[0] = onMeasured;
  cResult[1] = str;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((type) => {
  ({ item, onMeasured } = type);
  let str = type.type;
  if (str === undefined) {
    str = "height";
  }
  const items = [onMeasured, str];
  const obj = {
    style: null,
    onLayout: noop.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      onMeasured("height" === str ? layout.height : layout.width);
    }, items),
    pointerEvents: "none",
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    accessible: false,
    children: null
  };
  const items1 = [type.containerStyle, closure_6().container];
  obj.style = items1;
  if ("invite" === item.type) {
    const obj2 = { invite: item.data };
    let tmp2Result = jsx(InstantInviteDefault, { invite: item.data });
  } else {
    const obj3 = { channel: item.data };
    tmp2Result = jsx(InstantInvite.LinkedChannelInvite, { channel: item.data });
  }
  obj.children = tmp2Result;
  return <View style={null} onLayout={noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onMeasured("height" === str ? layout.height : layout.width);
  }, items)} pointerEvents="none" importantForAccessibility="no-hide-descendants" accessibilityElementsHidden accessible={false}>{null}</View>;
}));