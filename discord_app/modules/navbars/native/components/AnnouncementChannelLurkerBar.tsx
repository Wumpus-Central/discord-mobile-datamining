// discord_app/modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import showChannelFollowingActionSheet from "../../../channel_following/native/showChannelFollowingActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class AnnouncementChannelLurkerBar {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_5();
    obj = { style: tmp.wrapper, children: null };
    obj = { style: tmp.text, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
    intl = channel(closure_1[6]).intl;
    obj.children = intl.string(channel(closure_1[6]).t.Hl0Mqh);
    items = [,];
    items[0] = jsx(channel(closure_1[5]).Text, obj);
    obj1 = {
      onPress() {
        const guildId = channel.getGuildId();
        if (null != guildId) {
          const result = showChannelFollowingActionSheet.showChannelFollowingActionSheet(channel.id, guildId);
        }
      },
      text: null,
      size: "sm",
      variant: "secondary",
      grow: true,
    };
    intl2 = channel(closure_1[6]).intl;
    obj1.text = intl2.string(channel(closure_1[6]).t["4z5PU1"]);
    items[1] = jsx(channel(closure_1[7]).Button, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { wrapper: null, text: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, paddingTop: 8 };
createStyles.wrapper = createStyles;
createStyles.text = { textAlign: "center", marginBottom: 8 };
const hasOwnProperty = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx");

export default AnnouncementChannelLurkerBar;
export { AnnouncementChannelLurkerBar };
