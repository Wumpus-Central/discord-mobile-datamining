// discord_app/modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx
import VoiceCategoryActionCreators from "../../../guild_sidebar/VoiceCategoryActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelListVoiceCategoryStore from "../../../guild_sidebar/ChannelListVoiceCategoryStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  const section = guildId.section;
  const listRef = guildId.listRef;
  let stateFromStores;
  let obj = guildId(section[3]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () =>
    ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(guildId),
  );
  const items1 = [stateFromStores, guildId, section, listRef];
  const callback = listRef.useCallback(() => {
    let obj = VoiceCategoryActionCreators;
    if (stateFromStores) {
      obj.voiceCategoryExpand(guildId);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          const obj = { animated: false, section, item: 0, paddingStart: null };
          const _Math = Math;
          obj.paddingStart = Math.round(0.3 * guildId(section[5]).getWindowDimensions().height);
          current.scrollToLocation(obj);
          const obj2 = guildId(section[5]);
        }
      }, 0);
    } else {
      const result = obj.voiceCategoryCollapse(guildId);
      let current = listRef.current;
      if (current != null) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const intl = guildId(section[7]).intl;
  const string = intl.string;
  const t = guildId(section[7]).t;
  if (stateFromStores) {
    let stringResult = string(t["/eB9Bg"]);
  } else {
    stringResult = string(t.Q2gPWl);
  }
  obj = {
    text: stringResult,
    icon: jsx(guildId(section[8]).VoiceNormalIcon, { size: "sm" }),
    onPress: callback,
    variant: "secondary",
    size: "sm",
  };
  return jsx(guildId(section[6]).Button, {
    text: stringResult,
    icon: jsx(guildId(section[8]).VoiceNormalIcon, { size: "sm" }),
    onPress: callback,
    variant: "secondary",
    size: "sm",
  });
});
