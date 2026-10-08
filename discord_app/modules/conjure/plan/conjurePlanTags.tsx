// discord_app/modules/conjure/plan/conjurePlanTags.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3827 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export const CONJURE_PLAN_TAG_LABELS = {
  automod: _modDef3827.DnWMLj,
  overlay: _modDef3827.liTNf3,
  widget: _modDef3827["EswAi+"],
  activity: util.t.IC5Ann,
  commands: _modDef3827.w7JaEP,
  chat_bot: _modDef3827["5QSvrP"],
  bot: _modDef3827.VFWfz1,
};
export const getConjurePlanTags = function getConjurePlanTags(proposal, botInteraction) {
  if (null != proposal.automod) {
    return ["automod"];
  } else {
    const items = [];
    if (obj.planSupportsOverlay(proposal)) {
      items.push("overlay");
    }
    if (null != proposal.widget_config) {
      items.push("widget");
    }
    if (true === proposal.is_activity) {
      const items1 = [];
      items1[HermesBuiltin.arraySpread(items, 0)] = "activity";
      let tmp7 = items1;
    } else if (null == botInteraction) {
      const items2 = [];
      items2[HermesBuiltin.arraySpread(items, 0)] = "bot";
      tmp7 = items2;
    } else {
      let tmp5 = tmp4;
      if ("commands" !== botInteraction) {
        tmp5 = "both" !== botInteraction;
      }
      if (!tmp5) {
        items.push("commands");
      }
      tmp7 = items;
      if ("commands" !== botInteraction) {
        items.push("chat_bot");
        tmp7 = items;
      }
    }
    return tmp7;
  }
};
