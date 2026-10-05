// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../../intl/index.native.tsx";
import GuildSettingsStickerCreateDefault from "GuildSettingsStickerCreate.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let onGoBack;
      let tmp6;
      const obj = guildId(onGoBack[3]);
      const cResult = obj.c(10);
      guildId = guildId.guildId;
      const stickerId = guildId.stickerId;
      const tmp5 = stickerId(onGoBack[4])();
      onGoBack = tmp5.onGoBack;
      const ref = tmp5.ref;
      const tmp4 = stickerId;
      if (cResult[0] !== stickerId) {
        let tdhW5b;
        const intl = tmp(tmp2[5]).intl;
        const string = intl.string;
        if (null != stickerId) {
          tdhW5b = tmp(tmp2[5]).t.tdhW5b;
        } else {
          tdhW5b = tmp(tmp2[5]).t["3DzNjU"];
        }
        const stringResult = string(tdhW5b);
        cResult[0] = stickerId;
        cResult[1] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === guildId) {
        if (cResult[3] === onGoBack) {
          if (cResult[4] === ref) {
            let tmp10;
            if (cResult[5] === stickerId) {
              tmp10 = cResult[6];
            }
            if (cResult[7] === tmp6) {
              let tmp11;
              if (cResult[8] === tmp10) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
            const obj2 = { screenKey: "guild-settings-sticker-create", title: tmp6, render: tmp10 };
            const tmp13 = ref(tmp4(onGoBack[7]), obj2);
            cResult[7] = tmp6;
            cResult[8] = tmp10;
            cResult[9] = tmp13;
            tmp11 = tmp13;
          }
        }
      }
      const fn = function l() {
        return jsx(GuildSettingsStickerCreateDefault, { ref, guildId, stickerId, onFinish: onGoBack });
      };
      cResult[2] = guildId;
      cResult[3] = onGoBack;
      cResult[4] = ref;
      cResult[5] = stickerId;
      cResult[6] = fn;
      tmp10 = fn;
    }
  : (arg0) => {
      let c2;
      let c3;
      let guildId;
      let onFinish;
      let ref;
      let stickerId;
      let tdhW5b;
      ({ guildId: require, stickerId } = arg0);
      dependencyMap = undefined;
      c3 = undefined;
      ({ onGoBack: c2, ref: c3 } = stickerId(10658)());
      stickerId(10658)();
      const tmp4 = stickerId(10661);
      const intl = intl2.intl;
      const string = intl.string;
      const tmp3 = c3;
      if (null != stickerId) {
        tdhW5b = intl2.t.tdhW5b;
      } else {
        tdhW5b = intl2.t["3DzNjU"];
      }
      const obj = {
        screenKey: "guild-settings-sticker-create",
        title: string(tdhW5b),
        render() {
          return jsx(GuildSettingsStickerCreateDefault, { ref, guildId: require, stickerId, onFinish });
        },
      };
      return tmp3(tmp4, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx",
);

export default tmp3;
