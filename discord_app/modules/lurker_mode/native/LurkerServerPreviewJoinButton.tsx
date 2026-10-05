// === Module 16080: LurkerServerPreviewJoinButton ===

// Module 16080 (LurkerServerPreviewJoinButton)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import size from "module_2" /* 2 */;

let c4;

let _asyncToGenerator = _asyncToGenerator_mod;
const JoinGuildSources = Constants.JoinGuildSources;
const jsx = Fragment.jsx;
const memoResult = react.memo(function LurkerServerPreviewJoinButton(guildId) {
  let closure_3;
  let loading;
  guildId = guildId.guildId;
  const joinSource = guildId.joinSource;
  loading = undefined;
  _asyncToGenerator = undefined;
  [loading, _asyncToGenerator] = react.useState(false);
  const items = [guildId, joinSource, loading];
  const callback = react.useCallback(_asyncToGenerator(async () => {
    let channel;
    let closure_0;
    let closure_2;
    let lurkingSourceForGuild;
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (!first) {
            lurkingSourceForGuild = lurkingSourceForGuild.getLurkingSourceForGuild(guildId);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            if (type === constants.DIRECTORY_ENTRY) {
              channel = channel.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = tmp(loading[7]).setHubProgressActionComplete;
                const tmp31 = tmp(loading[7]);
                guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, tmp(loading[8]).HubProgressStep.JOIN_GUILD);
              }
            }
            v0(true);
            c3 = 1;
            const obj5 = { source: joinSource };
            const obj6 = v1(loading[9]);
            v1 = 2;
            c4 = 1;
            const obj7 = { value: obj6.joinGuild(guildId, obj5), done: false };
            return obj7;
          }
        } else if (1 === v1) {
          c3 = 0;
          closure_128_3(false);
          throw loading;
        } else if (2 === v1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj2 = v1(loading[9]);
            v1 = 3;
            c4 = 1;
            const obj9 = { value: obj2.waitForGuild(closure_128_0), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_3(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_3(false);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp41) {
        loading = tmp41;
        if (0 === c3) {
          c4 = 3;
          throw tmp41;
        } else {
          v1 = 1;
        }
      }
    }
  }), items);
  const Button = guildId(loading[10]).Button;
  const intl = guildId(loading[11]).intl;
  return <Button grow variant="primary" size="md" loading={loading} text={intl.string(guildId(loading[11]).t.RLch70)} onPress={callback} />;
});
let result = size.fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default memoResult;