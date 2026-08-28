// === Module 5338: StageBoostingActionSheet ===

// Module 5338 (StageBoostingActionSheet)
import noopAll from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "getUncachedChannelPermissions" /* 4090 */;
import { STAGE_BOOSTING_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH" /* 5323 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ AnalyticEvents: error, BoostedGuildTiers: closure_8, GuildFeatures: c9, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: c10, MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED: unpackModuleId } = ME);
({ BoostingUpsellAction: closure_12, PremiumUpsellTypes: map1 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx");

export default function StageBoostingActionSheet(channel) {
  channel = channel.channel;
  let stateFromStores2;
  dependencyMap = undefined;
  closure_3 = undefined;
  let obj = channel(589);
  const items = [closure_4];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(channel.guild_id), items1);
  obj1 = channel(589);
  const items2 = [closure_3];
  let num;
  const stateFromStores1 = obj1.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  if (stateFromStores != null) {
    num = stateFromStores.maxStageVideoChannelUsers;
  }
  if (num == null) {
    num = 0;
  }
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.COMMUNITY);
  }
  if (hasItem) {
    let tmp9 = num < closure_11;
  } else {
    let premiumTier;
    if (stateFromStores != null) {
      premiumTier = stateFromStores.premiumTier;
    }
    tmp9 = premiumTier !== closure_8.TIER_3;
    if (tmp9) {
      tmp9 = num <= closure_10;
    }
  }
  let tmpResult = tmp(589);
  const items3 = [closure_5];
  const items4 = [channel];
  stateFromStores2 = tmpResult.useStateFromStores(items3, () => closure_1_5.can(channel(1399).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel), items4);
  if (hasItem) {
    let premiumTier1;
    if (stateFromStores != null) {
      premiumTier1 = stateFromStores.premiumTier;
    }
    if (premiumTier1 === closure_8.TIER_3) {
      const intl2 = tmp(1236).intl;
      const string2 = intl2.string;
      let tJmOuw = tmp(1236).t;
      if (tmp9) {
        tJmOuw = tJmOuw.tJmOuw;
        let string2Result = string2(tJmOuw);
      } else {
        string2Result = string2(tJmOuw["7FHbPG"]);
      }
    }
  }
  const intl = tmp(1236).intl;
  const string = intl.string;
  const t = tmp(1236).t;
  if (tmp9) {
    let stringResult = string(t["8/uDSF"]);
  } else {
    stringResult = string(t["7FHbPG"]);
  }
  const intl3 = tmp(1236).intl;
  const string3 = intl3.string;
  T_zF9M = tmp(1236).t;
  if (stateFromStores2) {
    if (tmp9) {
      T_zF9M = T_zF9M["T+zF9M"];
      let string3Result = string3(T_zF9M);
    } else {
      string3Result = string3(T_zF9M.XVL8LJ);
    }
  } else {
    function handleClose() {
      let obj = stateFromStores2(4413);
      obj.hideActionSheet(closure_1_6);
      obj = { guild_id: channel.guild_id, type: closure_1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: closure_1_12.DISMISS };
      stateFromStores2(698).track(closure_1_7.BOOSTING_UPSELL_CLICKED, obj);
    }
    tmpResult = tmp(5339);
    dependencyMap = tmpResult.useActualStageSpeakerCount(channel.id);
    const string3Result1 = string3(T_zF9M.pqPQL0);
    closure_3 = tmp(5339).useStageParticipantsCount(channel.id, tmp(5333).StageChannelParticipantNamedIndex.AUDIENCE);
    stateFromStores2(4910)(() => {
      let obj = stateFromStores2(698);
      obj = { guild_id: channel.guild_id, type: closure_1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, listener_count: dependencyMap + closure_3 };
      obj.track(closure_1_7.BOOSTING_UPSELL_VIEWED, obj);
    });
    if (tmp9) {
      obj = { size: "lg", children: null };
      obj = { variant: "experimental_premium-primary", size: "lg", shiny: null, text: null, onPress: null };
      obj[2] = !stateFromStores1;
      const intl6 = tmp(1236).intl;
      obj[3] = intl6.string(tmp(1236).t.Uj0md3);
      obj[4] = function onPress() {
        let obj = stateFromStores2(4413);
        obj.hideActionSheet(closure_1_6);
        obj = { guild_id: channel.guild_id, type: closure_1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: closure_1_12.DISMISS };
        stateFromStores2(698).track(closure_1_7.BOOSTING_UPSELL_CLICKED, obj);
        const obj2 = stateFromStores2(698);
        channel(5342).openApplyBoostModal(channel.guild_id);
        const obj4 = channel(5342);
        obj = { guild_id: channel.guild_id, type: closure_1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: closure_1_12.BOOST };
        stateFromStores2(698).track(closure_1_7.BOOSTING_UPSELL_CLICKED, obj);
      };
      const items5 = [callback(tmp(4893).Button, obj), ];
      obj1 = { variant: "secondary", size: "lg", text: null, onPress: null };
      const intl7 = tmp(1236).intl;
      obj1[2] = intl7.string(tmp(1236).t.f3Pet9);
      obj1[3] = handleClose;
      items5[1] = callback(tmp(4893).Button, obj1);
      obj[1] = items5;
      let tmp23Result = callback2(tmp(5341).ButtonGroup, obj);
      let tmp23 = callback;
    } else {
      tmp23 = callback;
      if (stateFromStores2) {
        let obj2 = { variant: "secondary", size: "lg", text: null, onPress: null };
        const intl5 = tmp(1236).intl;
        obj2[2] = intl5.string(tmp(1236).t.WAI6xu);
        obj2[3] = handleClose;
        let obj3 = obj2;
      } else {
        obj3 = { variant: "primary", size: "lg", text: null, onPress: null };
        const intl4 = tmp(1236).intl;
        obj3[2] = intl4.string(tmp(1236).t["NX+WJN"]);
        obj3[3] = handleClose;
      }
      tmp23Result = tmp23(tmp(4893).Button, obj3);
    }
    let obj4 = { title: null, description: null, illustration: null, actions: null };
    obj4[0] = string3Result1;
    obj4[1] = stringResult;
    if (tmp9) {
      tmp23Result = tmp23(tmp(6221).HoldingGemSpotIllustration, { accessible: false });
    } else {
      const obj5 = { source: null };
      obj5[0] = tmp21(8681);
      tmp23Result = tmp23(tmp21(5458), obj5);
      const tmp21Result = tmp21(5458);
    }
    obj4[2] = tmp23Result;
    obj4[3] = tmp23Result;
    return tmp23(tmp(10250).PromoSheet, obj4);
  }
};