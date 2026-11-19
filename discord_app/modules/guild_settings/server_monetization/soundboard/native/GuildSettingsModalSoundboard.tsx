// discord_app/modules/guild_settings/server_monetization/soundboard/native/GuildSettingsModalSoundboard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import EmojiDefault from "../../../../emojis/native/Emoji.tsx";
import GuildBoostingUtils from "../../../../../utils/GuildBoostingUtils.tsx";
import getSoundboardEmojiUrlDefault from "../../../../soundboard/native/utils/getSoundboardEmojiUrl.tsx";
import SoundboardCreationUtils from "../../../../soundboard/native/creation/SoundboardCreationUtils.tsx";
import showGuildSettingsModalSoundboardSoundInfoActionSheet from "showGuildSettingsModalSoundboardSoundInfoActionSheet.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SoundboardStore from "../../../../soundboard/SoundboardStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function SoundboardSoundRow(arg0) {
  ({ guildId, sound } = arg0);
  ({ canManage, onPress } = arg0);
  const tmp = closure_15();
  items = [UserStore];
  const items1 = [sound.userId];
  const stateFromStores = sound(504).useStateFromStores(items, () => UserStore.getUser(sound.userId), items1);
  const obj2 = { style: tmp.soundEmoji, children: null };
  if (null == sound.emojiId) {
    if (null == sound.emojiName) {
      let tmp5Result = closure_11(sound(7569).ImageIcon, { size: "md", color: "icon-subtle" });
    }
    const obj3 = { icon: null, label: null, trailing: null, onPress: null };
    obj2.children = tmp5Result;
    obj3.icon = closure_11(closure_6, obj2);
    const obj4 = { variant: "heading-xs/semibold", color: "text-strong", style: tmp.name, children: sound.name };
    const items2 = [closure_11(sound(5383).Text, obj4)];
    let tmp12Result = null;
    if (null != stateFromStores) {
      const obj5 = { style: tmp.userRow, children: null };
      const obj6 = { user: stateFromStores, size: sound(1187).AvatarSizes.XSMALL_20, guildId };
      const items3 = [closure_11(sound(1187).Avatar, obj6)];
      const obj7 = {
        variant: "body-sm/medium",
        color: "text-subtle",
        children: NicknameUtilsDefault.getName(guildId, undefined, stateFromStores),
      };
      items3[1] = closure_11(sound(5383).Text, obj7);
      obj5.children = items3;
      tmp12Result = closure_12(closure_6, obj5);
    }
    const obj8 = { children: null };
    items2[1] = tmp12Result;
    obj8.children = items2;
    obj3.label = closure_12(closure_6, obj8);
    let tmp5Result2;
    if (canManage) {
      tmp5Result2 = closure_11(sound(6939).TableRowArrow, {});
    }
    obj3.trailing = tmp5Result2;
    obj3.onPress = onPress;
    return closure_11(tmp6, obj3);
  }
  const obj10 = { fastImageStyle: { width: 28, height: 28 }, name: null, src: null };
  let str = sound.emojiName;
  const obj = sound(504);
  if (str == null) {
    str = "";
  }
  obj10.name = str;
  const tmp10 = EmojiDefault;
  obj10.src = getSoundboardEmojiUrlDefault(sound, nativeDefault.space.PX_48);
  tmp5Result = closure_11(tmp10, obj10);
  const tmp9Result = getSoundboardEmojiUrlDefault;
}
function AddSoundButton(guildId) {
  guildId = guildId.guildId;
  const obj = { style: closure_14().addSoundButton, children: null };
  const obj2 = { variant: "primary", text: null, onPress: null };
  const intl = guildId(1113).intl;
  obj2.text = intl.string(guildId(1113).t["8Fu/S7"]);
  obj2.onPress = function onPress() {
    return SoundboardCreationUtils.showAddSoundboardSoundOptions(guildId);
  };
  obj.children = closure_11(guildId(5390).Button, obj2);
  return closure_11(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const BoostedGuildTiers = fn(1072).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(4792);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 },
    label: null,
  };
  const obj2 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.label = { marginBottom: nativeDefault.space.PX_8 };
  return obj;
});
createStyles = fn(4792);
let obj = { addSoundButton: { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 } };
let closure_14 = createStyles.createStyles(obj);
createStyles = fn(4792);
let obj5 = { soundEmoji: null, name: null, userRow: null };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.round,
  width: nativeDefault.space.PX_48,
  height: nativeDefault.space.PX_48,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
};
obj5.soundEmoji = size;
let obj4 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
obj5.name = { marginBottom: nativeDefault.space.PX_8 };
let obj7 = { marginBottom: nativeDefault.space.PX_8 };
obj5.userRow = { gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let closure_15 = createStyles.createStyles(obj5);
let obj8 = { gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/soundboard/native/GuildSettingsModalSoundboard.tsx",
);

export default noop.memo(function GuildSettingsModalSoundboard(guildId) {
  guildId = guildId.guildId;
  guild = undefined;
  let stateFromStores;
  noop = undefined;
  let tmp3 = closure_13(guild(stateFromStores[26])().bottom);
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStoresObject = guildId(stateFromStores[15]).useStateFromStoresObject(
    items,
    () => {
      guild = GuildStore.getGuild(guildId);
      const obj = { guild, guildTier: null };
      if (null != guild) {
        let NONE = GuildBoostingUtils.getGuildSoundboardTier(guild);
      } else {
        NONE = BoostedGuildTiers.NONE;
      }
      obj.guildTier = NONE;
      return obj;
    },
    items1,
  );
  guild = stateFromStoresObject.guild;
  let obj = guildId(stateFromStores[15]);
  let tmp = guild;
  const items2 = [SoundboardStore];
  const items3 = [guildId];
  stateFromStores = guildId(stateFromStores[15]).useStateFromStores(
    items2,
    () => SoundboardStore.getSoundsForGuild(guildId),
    items3,
  );
  const effect = noop.useEffect(() => {
    const result = guildId(stateFromStores[27]).maybeFetchSoundboardSounds();
  }, []);
  let obj2 = guildId(stateFromStores[15]);
  noop.useRef(new Set());
  const items4 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    closure_0 = function _fetchUploader() {
      const self = this;
      const tmp = closure_3(function* (arg0) {
        yield closure_0(c2[28]).getUser(closure_0);
        if (1 === tmp6) {
          c3 = 0;
          c1 = 3;
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items = stateFromStores;
    function fetchUploader(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (stateFromStores == null) {
      items = [];
    }
    for (const item10009 of items) {
      let userId = item10009.userId;
      let tmp = userId;
      let current = ref.current;
      let hasItem = current.has(userId);
      if (!hasItem) {
        hasItem = null != UserStore.getUser(tmp);
      }
      if (!hasItem) {
        let current2 = ref.current;
        let addResult = current2.add(tmp);
        let uploader = fetchUploader(tmp);
      }
      continue;
    }
  }, items4);
  const set = new Set();
  const manageResourcePermissions = guildId(stateFromStores[29]).useManageResourcePermissions(guild);
  ({ canCreateExpressions, canManageGuildExpression: c4, canManageAllExpressions } = manageResourcePermissions);
  guildId(stateFromStores[30]);
  if (null == guild) {
    return null;
  } else if (null == stateFromStores) {
    return closure_11(tmp4(tmp2[31]).SceneLoadingIndicator, {});
  } else {
    if (!canCreateExpressions) {
      canCreateExpressions = canManageAllExpressions;
    }
    if (canCreateExpressions) {
      canCreateExpressions = stateFromStores.length < tmp4(tmp2[9]).getMaxSoundboardSlots(guild);
      const tmp4Result = tmp4(tmp2[9]);
    }
    if (canCreateExpressions) {
      canCreateExpressions = tmp11;
    }
    const obj4 = { contentContainerStyle: tmp3.container, children: null };
    const obj5 = { variant: "heading-sm/semibold", style: tmp3.label, children: null };
    let intl = tmp4(tmp2[8]).intl;
    obj5.children = intl.string(tmp4(tmp2[8]).t.OWQNYr);
    const items5 = [closure_11(tmp4(tmp2[20]).Text, obj5), , ,];
    const obj6 = { variant: "body-sm/medium", color: "text-muted", style: tmp3.label, children: null };
    const intl2 = tmp4(tmp2[8]).intl;
    const obj7 = { maxSounds: tmp4(tmp2[9]).getMaxSoundboardSlots(guild) };
    obj6.children = intl2.format(tmp4(tmp2[8]).t.IJXOt6, obj7);
    items5[1] = closure_11(tmp4(tmp2[20]).Text, obj6);
    let tmp14Result = null;
    if (canCreateExpressions) {
      const obj8 = { guildId };
      tmp14Result = closure_11(AddSoundButton, obj8);
    }
    items5[2] = tmp14Result;
    const obj9 = { tiers: null, guildTier: null, renderUnlockedSubLabel: null, renderSlot: null };
    const obj10 = { tier: BoostedGuildTiers.NONE, title: null, numSlots: null };
    const tmp4Result6 = tmp4(tmp2[9]);
    const intl3 = tmp4(tmp2[8]).intl;
    obj10.title = intl3.string(tmp4(tmp2[8]).t.tfVXhP);
    const tmpResult = tmp(tmp2[32]);
    obj10.numSlots = tmp4(tmp2[9]).getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.NONE, guild);
    const items6 = [obj10, , ,];
    const obj11 = { tier: BoostedGuildTiers.TIER_1, title: null, IconComponent: null, numSlots: null };
    const intl4 = tmp4(tmp2[8]).intl;
    obj11.title = intl4.string(tmp4(tmp2[8]).t.nzXtaS);
    obj11.IconComponent = tmp4(tmp2[10]).BoostGemOutlineIcon;
    const tmp4Result7 = tmp4(tmp2[9]);
    obj11.numSlots = tmp4(tmp2[9]).getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_1, guild);
    items6[1] = obj11;
    const obj12 = { tier: BoostedGuildTiers.TIER_2, title: null, IconComponent: null, numSlots: null };
    const intl5 = tmp4(tmp2[8]).intl;
    obj12.title = intl5.string(tmp4(tmp2[8]).t["h33/uW"]);
    obj12.IconComponent = tmp4(tmp2[11]).BoostGemIcon;
    const tmp4Result8 = tmp4(tmp2[9]);
    obj12.numSlots = tmp4(tmp2[9]).getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_2, guild);
    items6[2] = obj12;
    const obj13 = { tier: BoostedGuildTiers.TIER_3, title: null, IconComponent: null, numSlots: null };
    const intl6 = tmp4(tmp2[8]).intl;
    obj13.title = intl6.string(tmp4(tmp2[8]).t.BfF6ED);
    obj13.IconComponent = tmp4(tmp2[12]).BoostTier3Icon;
    const tmp4Result9 = tmp4(tmp2[9]);
    obj13.numSlots = tmp4(tmp2[9]).getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_3, guild);
    items6[3] = obj13;
    obj9.tiers = items6;
    obj9.guildTier = stateFromStoresObject.guildTier;
    obj9.renderUnlockedSubLabel = function renderUnlockedSubLabel(arg0) {
      ({ tier, numSlots } = arg0);
      const intl = util.intl;
      const obj = {
        numTotal: numSlots,
        numAvailable: GuildBoostingUtils.getAvailableSoundboardSoundSlotCount(stateFromStores, tier, guild),
      };
      return intl.format(util.t.ZLoNtm, obj);
    };
    obj9.renderSlot = function renderSlot(arg0, arg1) {
      guildId = tmp;
      if (null == stateFromStores[arg1]) {
        return null;
      } else {
        const tmp3 = _undefined(tmp);
        const obj = { guildId, sound: tmp, canManage: tmp3, onPress: null };
        let fn;
        if (tmp3) {
          fn = () => {
            const result =
              showGuildSettingsModalSoundboardSoundInfoActionSheet.showGuildSettingsModalSoundboardSoundInfoActionSheet(
                { guildId, soundId: soundId.soundId },
              );
          };
        }
        obj.onPress = fn;
        return closure_1_11(SoundboardSoundRow, obj, tmp.soundId);
      }
    };
    items5[3] = closure_11(tmpResult, obj9);
    obj4.children = items5;
    return closure_12(closure_5, obj4);
  }
  const obj3 = guildId(stateFromStores[29]);
});
