// === Module 11540: ? ===

// Module 11540
import importAllResult from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import { JoinGuildSources } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function LurkerServerPreviewJoinButton(guildId) {
  guildId = guildId.guildId;
  const joinSource = guildId.joinSource;
  const onBeforeJoin = guildId.onBeforeJoin;
  let stateFromStores;
  let obj = guildId(onBeforeJoin[6]);
  const items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [guildId, joinSource, onBeforeJoin];
  const callback = stateFromStores.useCallback(() => {
    const lurkingSourceForGuild = outer1_6.getLurkingSourceForGuild(guildId);
    let type;
    if (lurkingSourceForGuild != null) {
      type = lurkingSourceForGuild.type;
    }
    if (type === outer1_7.DIRECTORY_ENTRY) {
      const channel = outer1_4.getChannel(lurkingSourceForGuild.directoryChannelId);
      if (null != channel) {
        guildId = channel.getGuildId();
        const result = guildId(onBeforeJoin[7]).setHubProgressActionComplete(guildId, guildId(onBeforeJoin[8]).HubProgressStep.JOIN_GUILD);
        const obj2 = guildId(onBeforeJoin[7]);
      }
    }
    const obj3 = guildId(onBeforeJoin[9]);
    const tmp10 = joinSource;
    const tmp11 = joinSource;
    const tmp9 = onBeforeJoin;
    obj3.trackJoinClicked(guildId, joinSource, joinSource(onBeforeJoin[10]).hasNavigatedAway(guildId));
    if (onBeforeJoin != null) {
      onBeforeJoin();
    }
    const obj4 = joinSource(onBeforeJoin[10]);
    tmp11(tmp9[11]).joinGuild(guildId, { source: tmp10 });
  }, items1);
  if (null == stateFromStores) {
    obj = { grow: true, variant: "primary", size: "md", text: null, onPress: null };
    const intl = tmp(tmp2[13]).intl;
    obj[3] = intl.string(tmp(tmp2[13]).t.VJlc0S);
    obj[4] = callback;
    return jsx(tmp(tmp2[12]).Button, { grow: true, variant: "primary", size: "md", text: null, onPress: null });
  } else {
    let obj2 = joinSource(tmp2[14]);
    const userAvatarSource = obj2.getUserAvatarSource(stateFromStores, false);
    const intl2 = tmp(tmp2[13]).intl;
    obj = { usernameHook: null };
    obj[0] = function usernameHook() {
      return joinSource(onBeforeJoin[15]).getFormattedName(stateFromStores);
    };
    const obj1 = { grow: true, variant: "primary", size: "md", text: null, icon: null, onPress: null };
    obj1[3] = intl2.formatToPlainString(tmp(tmp2[13]).t["5qtVhX"], obj);
    obj2 = { source: null, variant: "entity" };
    obj2[0] = userAvatarSource;
    obj1[4] = jsx(tmp(tmp2[12]).Button.Icon, { source: null, variant: "entity" });
    obj1[5] = callback;
    return jsx(tmp(tmp2[12]).Button, { grow: true, variant: "primary", size: "md", text: null, icon: null, onPress: null });
  }
});
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default memoResult;