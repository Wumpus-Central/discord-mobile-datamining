// === Module 12694: AnnouncementChannelLurkerBar ===

// Module 12694 (AnnouncementChannelLurkerBar)
import nativeDefault from "native" /* 587 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 12191 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, paddingTop: 8 }, text: { textAlign: "center", marginBottom: 8 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnnouncementChannelLurkerBar(channel) {
  const cResult = channel(576).c(12);
  channel = channel.channel;
  const tmp4 = closure_5();
  if (cResult[0] !== channel) {
    function handleFollowing() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        const result = showChannelFollowingActionSheet.showChannelFollowingActionSheet(channel.id, guildId);
      }
    }
    cResult[0] = channel;
    cResult[1] = handleFollowing;
    let tmp5 = handleFollowing;
  } else {
    tmp5 = cResult[1];
  }
  ({ wrapper, text } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.Hl0Mqh);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4.text) {
    const obj2 = { style: text, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: tmp6 };
    const tmp10 = closure_3(tmp(5086).Text, obj2);
    cResult[3] = tmp4.text;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["4z5PU1"]);
    cResult[5] = stringResult1;
    let tmp11 = stringResult1;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== tmp5) {
    const obj3 = { onPress: tmp5, text: tmp11, size: "sm", variant: "secondary", grow: true };
    const tmp15 = closure_3(tmp(5375).Button, obj3);
    cResult[6] = tmp5;
    cResult[7] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp4.wrapper) {
    if (cResult[9] === tmp8) {
      if (cResult[10] === tmp13) {
        let tmp16 = cResult[11];
      }
      return tmp16;
    }
  }
  const obj4 = { style: wrapper, children: null };
  const items = [tmp8, tmp13];
  obj4.children = items;
  const tmp17 = closure_4(View, obj4);
  cResult[8] = tmp4.wrapper;
  cResult[9] = tmp8;
  cResult[10] = tmp13;
  cResult[11] = tmp17;
  tmp16 = tmp17;
  let obj = channel(576);
}) : (function AnnouncementChannelLurkerBar(channel) {
  channel = channel.channel;
  const tmp = closure_5();
  let obj = { style: tmp.wrapper, children: null };
  const obj2 = { style: tmp.text, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
  const intl = channel(1126).intl;
  obj2.children = intl.string(channel(1126).t.Hl0Mqh);
  const items = [closure_3(channel(5086).Text, obj2), ];
  const obj3 = {
    onPress: function handleFollowing() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        const result = showChannelFollowingActionSheet.showChannelFollowingActionSheet(channel.id, guildId);
      }
    },
    text: null,
    size: "sm",
    variant: "secondary",
    grow: true
  };
  const intl2 = channel(1126).intl;
  obj3.text = intl2.string(channel(1126).t["4z5PU1"]);
  items[1] = closure_3(channel(5375).Button, obj3);
  obj.children = items;
  return closure_4(View, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx");

export default tmp4;
export const AnnouncementChannelLurkerBar = tmp4;