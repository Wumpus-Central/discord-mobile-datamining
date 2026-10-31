// === Module 12738: conjurePlanExperienceSections ===

// Module 12738 (conjurePlanExperienceSections)
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import conjurePlanFormat from "conjurePlanFormat" /* 12729 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanExperienceSections.tsx");

export const CONJURE_PLAN_EXPERIENCE_KIND_LABELS = { frame: _modDef3868.Z2bt4u, overlay_widget: _modDef3868["0mGHfU"], user_widget: _modDef3868.Jipr29, bot: _modDef3868.EbvC13, commands: _modDef3868.EbvC13, automod: _modDef3868.tiMvei };
export function conjurePlanExperienceIsApp(experience) {
  let tmp = "frame" === experience.kind;
  if (tmp) {
    tmp = true !== experience.game;
  }
  return tmp;
}
export function conjurePlanDisplayedSections(experiences, commandNames) {
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
}
export function conjurePlanRequirementsSectionId(arr) {
  let found = arr.find((experience) => {
    experience = experience.experience;
    let tmp = "bot" === experience.kind;
    if (!tmp) {
      tmp = "commands" === experience.kind;
    }
    return tmp;
  });
  if (found == null) {
    found = arr[0];
  }
  let id;
  if (found != null) {
    id = found.experience.id;
  }
  return id;
}
export function conjurePlanFrameFeatures(usableInVoice) {
  if (usableInVoice.usableInVoice) {
    const intl = util.intl;
    const items = [intl.string(_modDef3868["4oGg2h"])];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (usableInVoice.launchableAnywhere) {
    const intl2 = util.intl;
    const items3 = [intl2.string(_modDef3868.BTGCfR)];
    let items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items4, tmp4);
  return items2;
}
export function conjurePlanRequirementGroups(proposal) {
  let items = [{ key: "permissions", caption: _modDef3868["2UbW6r"], names: proposal.bot_permissions }, ];
  let obj = { key: "permissions", caption: _modDef3868["2UbW6r"], names: proposal.bot_permissions };
  items[1] = { key: "intents", caption: _modDef3868["7TKfpj"], names: proposal.privileged_intents };
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
}