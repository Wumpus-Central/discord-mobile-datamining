// discord_app/modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import showChannelFollowingActionSheet from "../../../channel_following/native/showChannelFollowingActionSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { wrapper: obj2, text: { textAlign: "center", marginBottom: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, paddingTop: 8 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let items;
      let text;
      let tmp11;
      let tmp13;
      let tmp5;
      let tmp6;
      let tmp8;
      let wrapper;
      let obj = channel(576);
      const cResult = obj.c(12);
      channel = channel.channel;
      const tmp4 = closure_5();
      if (cResult[0] !== channel) {
        const fn = function c() {
          const id = channel.id;
          const guildId = channel.getGuildId();
          if (null != guildId) {
            const obj = showChannelFollowingActionSheet;
            const result = obj.showChannelFollowingActionSheet(id, guildId);
          }
        };
        cResult[0] = channel;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      ({ wrapper, text } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channel(1126).t.Hl0Mqh);
        cResult[2] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4.text) {
        const obj2 = { style: text, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: tmp6 };
        const tmp10 = closure_3(channel(4892).Text, obj2);
        cResult[3] = tmp4.text;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(channel(1126).t["4z5PU1"]);
        cResult[5] = stringResult1;
        tmp11 = stringResult1;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp5) {
        const obj3 = { onPress: tmp5, text: tmp11, size: "sm", variant: "secondary", grow: true };
        const tmp15 = closure_3(channel(5601).Button, obj3);
        cResult[6] = tmp5;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.wrapper) {
        if (cResult[9] === tmp8) {
          let tmp16;
          if (cResult[10] === tmp13) {
            tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
      const obj4 = { style: wrapper, children: items };
      items = [tmp8, tmp13];
      const tmp17 = closure_4(View, obj4);
      cResult[8] = tmp4.wrapper;
      cResult[9] = tmp8;
      cResult[10] = tmp13;
      cResult[11] = tmp17;
      tmp16 = tmp17;
    }
  : (channel) => {
      let intl;
      let intl2;
      let items;
      channel = channel.channel;
      const tmp = closure_5();
      let obj = { style: tmp.wrapper, children: items };
      const obj2 = {
        style: tmp.text,
        variant: "text-sm/medium",
        color: "mobile-text-heading-primary",
        children: intl.string(channel(1126).t.Hl0Mqh),
      };
      const Text = channel(4892).Text;
      intl = channel(1126).intl;
      items = [closure_3(Text, obj2)];
      const obj3 = {
        onPress() {
          const id = channel.id;
          const guildId = channel.getGuildId();
          if (null != guildId) {
            const obj = showChannelFollowingActionSheet;
            const result = obj.showChannelFollowingActionSheet(id, guildId);
          }
        },
        text: intl2.string(channel(1126).t["4z5PU1"]),
        size: "sm",
        variant: "secondary",
        grow: true,
      };
      const Button = channel(5601).Button;
      intl2 = channel(1126).intl;
      items[1] = closure_3(Button, obj3);
      return closure_4(View, obj);
    };
let result = size.fileFinishedImporting("modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx");

export default tmp4;
export const AnnouncementChannelLurkerBar = tmp4;
