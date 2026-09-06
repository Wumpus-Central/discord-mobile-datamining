// === Module 16155: LurkerServerPreviewJoinButton ===

// Module 16155 (LurkerServerPreviewJoinButton)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import LurkingStore from "LurkingStore" /* 4200 */;

const require = fn;
const JoinGuildSources = fn(1074).JoinGuildSources;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default noop.memo(function LurkerServerPreviewJoinButton(guildId) {
  guildId = guildId.guildId;
  const joinSource = guildId.joinSource;
  const tmp = _slicedToArray(noop.useState(false), 2);
  const loading = tmp[0];
  asyncGeneratorStep = tmp[1];
  const items = [guildId, joinSource, loading];
  const callback = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else if (first) {
            c4 = 3;
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
                const result = tmp3(tmp43[7]).setHubProgressActionComplete(guildId, tmp3(tmp43[8]).HubProgressStep.JOIN_GUILD);
                const obj6 = tmp3(tmp43[7]);
              }
            }
            v0(true);
            c3 = 1;
            let obj1 = { source: joinSource };
            v3 = 2;
            c4 = 1;
            const obj2 = { value: v3(tmp43[9]).joinGuild(guildId, obj1), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_3(false);
          throw tmp43;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            obj1 = v3(tmp43[9]);
            v3 = 3;
            c4 = 1;
            const obj4 = { value: obj1.waitForGuild(closure_128_0), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
          closure_128_3(false);
        }
        c3 = 0;
        closure_128_3(false);
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp43) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp43;
        } else {
          v3 = tmp;
        }
      }
    }
  }), items);
  let obj = { grow: true, variant: "primary", size: "md", loading, text: null, onPress: null };
  const intl = guildId(loading[11]).intl;
  obj.text = intl.string(guildId(loading[11]).t.RLch70);
  obj.onPress = callback;
  return jsx(guildId(loading[10]).Button, { grow: true, variant: "primary", size: "md", loading, text: null, onPress: null });
});