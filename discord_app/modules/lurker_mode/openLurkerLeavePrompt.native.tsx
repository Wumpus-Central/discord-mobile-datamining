import closure_3 from "set";
import get_ActivityIndicator from "hasNavigatedAway";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import initialize from "initialize";
import { JoinGuildSources } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "ensureGuildLoaded";

let c10;
let c4;
let c5;
let closure_12;
let unpackModuleId;
const require = arg1;
function LurkerLeavePromptModal(guild) {
  guild = guild.guild;
  const tmp = callback3();
  const items = [guild.id];
  const callback = React.useCallback(() => {
    const result = guild(outer1_2[10]).trackLeavePromptLeaveClicked(guild.id);
  }, items);
  let obj = { title: guild.name, content: null, header: null, actions: null };
  const intl = guild(1236).intl;
  obj[1] = intl.string(guild(1236).t.I1yHxc);
  obj = { style: tmp.headerRoot, children: null };
  obj = { style: tmp.iconWrapper, children: null };
  const obj1 = { guild, size: null, value: null };
  obj1[1] = guild(5632).GuildIconSizes.XLARGE;
  obj1[2] = guild.name;
  const items1 = [callback(importDefault(5632), obj1), ];
  const obj2 = { guild, size: null, style: null };
  const tmp3 = importDefault(5632);
  obj2[1] = guild(1297).Icon.Sizes.LARGE;
  obj2[2] = closure_4.flatten(tmp.badgeOverlay);
  items1[1] = callback(importDefault(5820), obj2);
  obj[1] = items1;
  obj[1] = callback2(closure_5, obj);
  obj[2] = callback(closure_5, obj);
  const obj3 = { children: null };
  const obj4 = { variant: "primary", text: null, onPress: null };
  const intl2 = guild(1236).intl;
  obj4[1] = intl2.string(guild(1236).t.VJlc0S);
  obj4[2] = guild.onJoin;
  const items2 = [callback(guild(4599).AlertActionButton, obj4), ];
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl3 = guild(1236).intl;
  obj5[1] = intl3.string(guild(1236).t["2vl7qn"]);
  obj5[2] = callback;
  items2[1] = callback(guild(4599).AlertActionButton, obj5);
  obj3[0] = items2;
  obj[3] = callback2(closure_12, obj3);
  return callback(guild(4599).AlertModal, obj);
}
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let set = new Set();
const tmp5 = require("GuildIconSizes").ImageSizes[require("GuildIconSizes").GuildIconSizes.XLARGE];
let closure_14 = createCacheKey.createStyles({ headerRoot: { alignItems: "center" }, iconWrapper: { width: tmp5, height: tmp5, position: "relative" }, badgeOverlay: { position: "absolute", right: -4, bottom: -4, marginRight: 0 } });
let result = set.fileFinishedImporting("modules/lurker_mode/openLurkerLeavePrompt.native.tsx");

export const openLurkerLeavePrompt = function openLurkerLeavePrompt(closure_0, onLeave) {
  const _require = closure_0;
  onLeave = onLeave.onLeave;
  let dependencyMap;
  let obj = set;
  if (!set.has(closure_0)) {
    guild = guild.getGuild(closure_0);
    if (null != guild) {
      obj.add(closure_0);
      dependencyMap = false;
      const _HermesInternal = HermesInternal;
      obj = { guild: null, onJoin: null };
      obj[0] = guild;
      obj[1] = function onJoin() {
        const dependencyMap = true;
        const lurkingSourceForGuild = outer1_8.getLurkingSourceForGuild(callback);
        let type;
        if (lurkingSourceForGuild != null) {
          type = lurkingSourceForGuild.type;
        }
        if (type === outer1_9.DIRECTORY_ENTRY) {
          const channel = outer1_6.getChannel(lurkingSourceForGuild.directoryChannelId);
          if (null != channel) {
            const guildId = channel.getGuildId();
            const result = callback(5832).setHubProgressActionComplete(guildId, callback(1306).HubProgressStep.JOIN_GUILD);
            const obj2 = callback(5832);
          }
        }
        const obj3 = callback(5819);
        obj3.trackJoinClicked(callback, outer1_9.LEAVE_PROMPT_LURKER, onLeave(5834).hasNavigatedAway(callback));
        const obj4 = onLeave(5834);
        onLeave(5171).joinGuild(callback, { source: outer1_9.LEAVE_PROMPT_LURKER });
      };
      const combined = "lurker-leave-prompt:" + closure_0;
      _require(4596).openAlert(combined, callback(LurkerLeavePromptModal, obj), () => {
        outer1_13.delete(closure_0);
        if (!c2) {
          onLeave();
        }
      });
      let obj2 = _require(4596);
    } else {
      onLeave();
    }
  }
};