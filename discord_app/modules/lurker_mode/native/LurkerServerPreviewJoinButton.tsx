// discord_app/modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import LurkingStore from "../LurkingStore.tsx";

const require = fn;
const JoinGuildSources = fn(1085).JoinGuildSources;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default noop.memo(function LurkerServerPreviewJoinButton(guildId) {
  guildId = guildId.guildId;
  const joinSource = guildId.joinSource;
  loading = undefined;
  asyncGeneratorStep = undefined;
  [loading, asyncGeneratorStep] = noop.useState(false);
  const items = [guildId, joinSource, loading];
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              guildId = tmp8;
              if (first) {
                c5 = 3;
              } else {
                lurkingSourceForGuild = lurkingSourceForGuild.getLurkingSourceForGuild(guildId);
                let type;
                if (lurkingSourceForGuild != null) {
                  type = lurkingSourceForGuild.type;
                }
                if (type === constants.DIRECTORY_ENTRY) {
                  channel = channel.getChannel(lurkingSourceForGuild.directoryChannelId);
                  if (null != channel) {
                    guildId = channel.getGuildId();
                    const result = guildId(tmp53[7]).setHubProgressActionComplete(
                      guildId,
                      guildId(tmp53[8]).HubProgressStep.JOIN_GUILD,
                    );
                    const obj7 = guildId(tmp53[7]);
                  }
                }
                v0(true);
                c3 = 2;
                const obj6 = { source: joinSource };
                c4 = 3;
                c5 = 1;
                const obj9 = { value: tmp4(tmp53[9]).joinGuild(guildId, obj6), done: false };
                return obj9;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_0 = tmp53;
              const result1 = guildId(tmp53[10]).ignoreJoinGuildRefused(closure_128_0);
              const obj5 = guildId(tmp53[10]);
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_3(false);
                c5 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                c4 = 4;
                c5 = 1;
                const obj11 = { value: tmp4(tmp53[9]).waitForGuild(closure_129_0), done: false };
                return obj11;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
            closure_129_3(false);
          }
          c3 = 0;
          closure_129_3(false);
          throw tmp53;
        } catch (tmp53) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp53;
          } else if (tmp2 === tmp55) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items,
  );
  let obj = { grow: true, variant: "primary", size: "md", loading, text: null, onPress: null };
  const intl = guildId(loading[12]).intl;
  obj.text = intl.string(guildId(loading[12]).t.RLch70);
  obj.onPress = callback;
  return jsx(guildId(loading[11]).Button, {
    grow: true,
    variant: "primary",
    size: "md",
    loading,
    text: null,
    onPress: null,
  });
});
