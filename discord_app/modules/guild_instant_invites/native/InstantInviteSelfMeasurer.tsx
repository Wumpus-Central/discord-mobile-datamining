// === Module 16820: InstantInviteSelfMeasurer ===

// Module 16820 (InstantInviteSelfMeasurer)
import InstantInvite from "InstantInvite" /* 10932 */;
import noop from "module_19" /* 19 */;

const InstantInviteDefault = InstantInvite;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { position: "absolute", opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx");

export default noop.memo(function InstantInviteSelfMeasurer(type) {
  ({ item, onMeasured } = type);
  let str = type.type;
  if (str === undefined) {
    str = "height";
  }
  const items = [onMeasured, str];
  let obj = {
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
    obj = { invite: item.data };
    let tmp2Result = jsx(InstantInviteDefault, { invite: item.data });
  } else {
    obj = { channel: item.data };
    tmp2Result = jsx(InstantInvite.LinkedChannelInvite, { channel: item.data });
  }
  obj.children = tmp2Result;
  return <View style={null} onLayout={noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onMeasured("height" === str ? layout.height : layout.width);
  }, items)} pointerEvents="none" importantForAccessibility="no-hide-descendants" accessibilityElementsHidden accessible={false}>{null}</View>;
});