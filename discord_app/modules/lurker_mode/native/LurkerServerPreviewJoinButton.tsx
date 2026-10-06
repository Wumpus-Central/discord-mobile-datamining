// discord_app/modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../Constants.tsx";
import _asyncToGenerator_mod from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import LurkingStore from "../LurkingStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c4, c5;

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
  const callback = react.useCallback(
    _asyncToGenerator(async () => {
      let channel;
      let closure_0;
      let closure_1;
      let closure_2;
      let lurkingSourceForGuild;
      let obj2;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
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
              guildId = tmp4;
              if (!first) {
                lurkingSourceForGuild = lurkingSourceForGuild.getLurkingSourceForGuild(guildId);
                let type;
                if (lurkingSourceForGuild != null) {
                  type = lurkingSourceForGuild.type;
                }
                if (type === constants.DIRECTORY_ENTRY) {
                  channel = channel.getChannel(lurkingSourceForGuild.directoryChannelId);
                  if (null != channel) {
                    const setHubProgressActionComplete = guildId(loading[7]).setHubProgressActionComplete;
                    const tmp39 = guildId(loading[7]);
                    guildId = channel.getGuildId();
                    const result = setHubProgressActionComplete(
                      guildId,
                      guildId(loading[8]).HubProgressStep.JOIN_GUILD,
                    );
                  }
                }
                v0(true);
                c3 = 2;
                const obj6 = { source: joinSource };
                c4 = 3;
                c5 = 1;
                const obj8 = { value: obj7.joinGuild(guildId, obj6), done: false };
                obj7 = tmp(loading[9]);
                return obj8;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_3(false);
            throw loading;
          } else {
            if (2 === c4) {
              c3 = 1;
              guildId = loading;
              const obj5 = guildId(loading[10]);
              const result1 = obj5.ignoreJoinGuildRefused(guildId);
            } else if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_3(false);
                c5 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                c4 = 4;
                c5 = 1;
                const obj10 = { value: obj2.waitForGuild(closure_129_0), done: false };
                obj2 = tmp(loading[9]);
                return obj10;
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
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp50) {
          loading = tmp50;
          if (0 === c3) {
            c5 = 3;
            throw tmp50;
          } else if (1 === tmp52) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    }),
    items,
  );
  const Button = guildId(loading[11]).Button;
  const intl = guildId(loading[12]).intl;
  return (
    <Button
      grow
      variant="primary"
      size="md"
      loading={loading}
      text={intl.string(guildId(loading[12]).t.RLch70)}
      onPress={callback}
    />
  );
});
let result = size.fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default memoResult;
