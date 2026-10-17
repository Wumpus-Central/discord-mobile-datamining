// === Module 12267: conjurePlanExperienceSections ===

// Module 12267 (conjurePlanExperienceSections)
import util from "util" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import conjurePlanFormat from "conjurePlanFormat" /* 12247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanExperienceSections.tsx");

export const CONJURE_PLAN_EXPERIENCE_KIND_LABELS = { frame: _modDef3883.Z2bt4u, overlay_widget: _modDef3883["0mGHfU"], user_widget: _modDef3883.Jipr29, bot: _modDef3883.EbvC13, commands: _modDef3883.EbvC13, automod: _modDef3883.tiMvei };
export const conjurePlanExperienceIsApp = function conjurePlanExperienceIsApp(experience) {
  let tmp = "frame" === experience.kind;
  if (tmp) {
    tmp = true !== experience.game;
  }
  return tmp;
};
export const conjurePlanDisplayedSections = function conjurePlanDisplayedSections(experiences, commandNames) {
  closure_0 = commandNames;
  const found = experiences.filter((kind) => "commands" === kind.kind);
  const bullets = found.flatMap((changes) => {
    changes = changes.changes;
    return changes.filter((item) => !closure_0(closure_2[1]).conjurePlanTextMentionsCommand(item, commandNames));
  });
  closure_2 = experiences.find((kind) => "bot" === kind.kind);
  return experiences.flatMap((kind) => {
    if ("commands" === kind.kind) {
      if (null != closure_2) {
        let items = [];
      } else {
        const obj2 = { experience: kind, bullets };
        items = [obj2];
      }
    } else {
      if (kind === closure_2) {
        const obj3 = { experience: kind, bullets: null };
        const items1 = [];
        HermesBuiltin.arraySpread(bullets, HermesBuiltin.arraySpread(kind.changes, 0));
        obj3.bullets = items1;
        const items2 = [obj3];
        let items3 = items2;
      } else {
        const obj = { experience: kind, bullets: kind.changes };
        items3 = [obj];
      }
      return items3;
    }
  });
};
export const conjurePlanFrameFeatures = function conjurePlanFrameFeatures(usableInVoice) {
  if (usableInVoice.usableInVoice) {
    const intl = util.intl;
    const items = [intl.string(_modDef3883["4oGg2h"])];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (usableInVoice.launchableAnywhere) {
    const intl2 = util.intl;
    const items3 = [intl2.string(_modDef3883.BTGCfR)];
    let items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items4, tmp4);
  return items2;
};
export const conjurePlanRequirementGroups = function conjurePlanRequirementGroups(proposal) {
  let items = [{ key: "permissions", caption: _modDef3883["2UbW6r"], names: proposal.bot_permissions }, ];
  let obj = { key: "permissions", caption: _modDef3883["2UbW6r"], names: proposal.bot_permissions };
  items[1] = { key: "intents", caption: _modDef3883["7TKfpj"], names: proposal.privileged_intents };
  return items.flatMap((names) => {
    names = names.names;
    if (null != names) {
      if (names.length > 0) {
        const obj = { key: tmp, caption: null, labels: null };
        const intl = util.intl;
        obj.caption = intl.string(tmp2);
        obj.labels = names.map(conjurePlanFormat.formatConjurePlanRequirementLabel);
        const items = [obj];
      }
      return [];
    }
  });
};