// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx
import util from "../../../../../intl/index.native.tsx";
import GuildSettingsStickerCreateDefault from "GuildSettingsStickerCreate.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsStickerCreateModal(guildId) {
      const cResult = guildId(onGoBack[3]).c(10);
      guildId = guildId.guildId;
      const stickerId = guildId.stickerId;
      const tmp5 = stickerId(onGoBack[4])();
      onGoBack = tmp5.onGoBack;
      const ref = tmp5.ref;
      if (cResult[0] !== stickerId) {
        const intl = tmp(tmp2[5]).intl;
        if (null != stickerId) {
          let tdhW5b = tmp(tmp2[5]).t.tdhW5b;
        } else {
          tdhW5b = tmp(tmp2[5]).t["3DzNjU"];
        }
        const stringResult = intl.string(tdhW5b);
        cResult[0] = stickerId;
        cResult[1] = stringResult;
      } else {
        if (cResult[2] === guildId) {
          if (cResult[3] === onGoBack) {
            if (cResult[4] === ref) {
              if (cResult[5] === stickerId) {
                let tmp11 = cResult[6];
              }
              if (cResult[7] === tmp6) {
                if (cResult[8] === tmp11) {
                  let tmp12 = cResult[9];
                }
                return tmp12;
              }
              const obj2 = { screenKey: "guild-settings-sticker-create", title: tmp6, render: tmp11 };
              const tmp14 = ref(stickerId(tmp2[7]), obj2);
              cResult[7] = tmp6;
              cResult[8] = tmp11;
              cResult[9] = tmp14;
              tmp12 = tmp14;
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
        tmp11 = fn;
      }
    }
  : function GuildSettingsStickerCreateModal(arg0) {
      ({ guildId: require, stickerId } = arg0);
      dependencyMap = undefined;
      c3 = undefined;
      ({ onGoBack: c2, ref: c3 } = stickerId(9584)());
      const tmp2 = stickerId(9584)();
      const tmp3 = c3;
      const intl = util.intl;
      if (null != stickerId) {
        let tdhW5b = util.t.tdhW5b;
      } else {
        tdhW5b = util.t["3DzNjU"];
      }
      const tmp4 = stickerId(9587);
      return tmp3(tmp4, {
        screenKey: "guild-settings-sticker-create",
        title: intl.string(tdhW5b),
        render() {
          return jsx(GuildSettingsStickerCreateDefault, { ref, guildId, stickerId, onFinish });
        },
      });
    };
