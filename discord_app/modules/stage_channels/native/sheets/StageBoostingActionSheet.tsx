// discord_app/modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx
import "PromoSheet";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { STAGE_BOOSTING_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "preload";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AnalyticEvents: error, BoostedGuildTiers: metroImportAll, GuildFeatures: c9, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: c10, MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED: unpackModuleId } = ME);
({ BoostingUpsellAction: closure_12, PremiumUpsellTypes: map1 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx");

export default function StageBoostingActionSheet(channel) {
  channel = channel.channel;
  let stateFromStores2;
  let dependencyMap;
  let maybeApplyNoTextColorForLightCustomTheme;
  let obj = channel(589);
  const items = [createGuildRecordFromRust];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id), items1);
  let obj1 = channel(589);
  const items2 = [maybeApplyNoTextColorForLightCustomTheme];
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
  const items3 = [getUncachedChannelPermissions];
  const items4 = [channel];
  stateFromStores2 = tmpResult.useStateFromStores(items3, () => outer1_5.can(channel(1380).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel), items4);
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
      let obj = stateFromStores2(4253);
      obj.hideActionSheet(outer1_6);
      obj = { guild_id: channel.guild_id, type: outer1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: outer1_12.DISMISS };
      stateFromStores2(698).track(outer1_7.BOOSTING_UPSELL_CLICKED, obj);
    }
    tmpResult = tmp(5115);
    dependencyMap = tmpResult.useActualStageSpeakerCount(channel.id);
    const string3Result1 = string3(T_zF9M.pqPQL0);
    maybeApplyNoTextColorForLightCustomTheme = tmp(5115).useStageParticipantsCount(channel.id, tmp(5109).StageChannelParticipantNamedIndex.AUDIENCE);
    stateFromStores2(4711)(() => {
      let obj = stateFromStores2(698);
      obj = { guild_id: channel.guild_id, type: outer1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, listener_count: dependencyMap + maybeApplyNoTextColorForLightCustomTheme };
      obj.track(outer1_7.BOOSTING_UPSELL_VIEWED, obj);
    });
    if (tmp9) {
      obj = { size: "lg", children: null };
      obj = { variant: "experimental_premium-primary", size: "lg", shiny: null, text: null, onPress: null };
      obj[2] = !stateFromStores1;
      const intl6 = tmp(1236).intl;
      obj[3] = intl6.string(tmp(1236).t.Uj0md3);
      obj[4] = function onPress() {
        let obj = stateFromStores2(4253);
        obj.hideActionSheet(outer1_6);
        obj = { guild_id: channel.guild_id, type: outer1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: outer1_12.DISMISS };
        stateFromStores2(698).track(outer1_7.BOOSTING_UPSELL_CLICKED, obj);
        const obj2 = stateFromStores2(698);
        channel(5118).openApplyBoostModal(channel.guild_id);
        const obj4 = channel(5118);
        obj = { guild_id: channel.guild_id, type: outer1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: outer1_12.BOOST };
        stateFromStores2(698).track(outer1_7.BOOSTING_UPSELL_CLICKED, obj);
      };
      const items5 = [callback(tmp(4695).Button, obj), ];
      obj1 = { variant: "secondary", size: "lg", text: null, onPress: null };
      const intl7 = tmp(1236).intl;
      obj1[2] = intl7.string(tmp(1236).t.f3Pet9);
      obj1[3] = handleClose;
      items5[1] = callback(tmp(4695).Button, obj1);
      obj[1] = items5;
      let tmp23Result = callback2(tmp(5117).ButtonGroup, obj);
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
      tmp23Result = tmp23(tmp(4695).Button, obj3);
    }
    let obj4 = { title: null, description: null, illustration: null, actions: null };
    obj4[0] = string3Result1;
    obj4[1] = stringResult;
    if (tmp9) {
      tmp23Result = tmp23(tmp(5936).HoldingGemSpotIllustration, { accessible: false });
    } else {
      const obj5 = { source: null };
      obj5[0] = tmp21(7776);
      tmp23Result = tmp23(tmp21(5236), obj5);
      const tmp21Result = tmp21(5236);
    }
    obj4[2] = tmp23Result;
    obj4[3] = tmp23Result;
    return tmp23(tmp(7654).PromoSheet, obj4);
  }
};