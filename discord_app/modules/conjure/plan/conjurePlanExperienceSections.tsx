// === Module 18727: conjurePlanExperienceSections ===

// Module 18727 (conjurePlanExperienceSections)
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import conjurePlanFormat from "conjurePlanFormat" /* 18719 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 18728 */;
import size from "module_2" /* 2 */;

let obj = { frame: _modDef4244.Z2bt4u, bot: _modDef4244.EbvC13, commands: _modDef4244.EbvC13, automod: _modDef4244.tiMvei };
let obj2 = { user_widget: { server: _modDef4244.VlI3et, personal: _modDef4244.njJ4YL }, overlay_widget: null };
let obj3 = { server: _modDef4244.VlI3et, personal: _modDef4244.njJ4YL };
obj2.overlay_widget = { server: _modDef4244.nUcjJ1, personal: _modDef4244.RDpKqP };
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanExperienceSections.tsx");

export function conjurePlanExperienceIsApp(experience) {
  let tmp = "frame" === experience.kind;
  if (tmp) {
    tmp = true !== experience.game;
  }
  return tmp;
}
export function conjurePlanExperienceKindLabel(experience, inServer) {
  let tmp = "frame" === experience.kind;
  if (tmp) {
    tmp = true !== experience.game;
  }
  if (tmp) {
    const intl3 = util.intl;
    return intl3.string(_modDef4244.BM4Ymz);
  } else {
    if ("user_widget" !== experience.kind) {
      if ("overlay_widget" !== experience.kind) {
        const intl = util.intl;
        return intl.string(obj[experience.kind]);
      }
    }
    const intl2 = util.intl;
    return intl2.string(inServer ? obj2[experience.kind].server : obj2[experience.kind].personal);
  }
}
export function conjurePlanExperienceKindNote(experience, inServer) {
  let stringResult = null;
  if (inServer) {
    stringResult = null;
    if (experience.kind in obj2) {
      const intl = util.intl;
      stringResult = intl.string(_modDef4244.UXJCSG);
    }
  }
  return stringResult;
}
export function conjurePlanDisplayedSections(experiences, commandNames) {
  closure_0 = commandNames;
  const found = experiences.filter((kind) => "commands" === kind.kind);
  const bullets = found.flatMap((changes) => {
    changes = changes.changes;
    return changes.filter((item) => !closure_0(closure_2[2]).conjurePlanTextMentionsCommand(item, commandNames));
  });
  closure_2 = experiences.find((kind) => "bot" === kind.kind);
  return experiences.flatMap((kind) => {
    if ("commands" === kind.kind) {
      if (null != closure_2) {
        items = [];
      } else {
        obj2 = { experience: kind, bullets };
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
        obj = { experience: kind, bullets: kind.changes };
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
    items = [intl.string(_modDef4244["4oGg2h"])];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (usableInVoice.launchableAnywhere) {
    const intl2 = util.intl;
    const items3 = [intl2.string(_modDef4244.BTGCfR)];
    let items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items4, tmp4);
  return items2;
}
export function conjurePlanRequirementGroups(proposal, guild) {
  let guildPermissionSpecMap = null;
  if (null != guild) {
    guildPermissionSpecMap = PermissionSpecUtilsDefault.getGuildPermissionSpecMap(guild);
  }
  items = [
    {
      key: "permissions",
      caption: _modDef4244["2UbW6r"],
      names: proposal.bot_permissions,
      label(arg0) {
        return conjurePlanFormat.conjurePlanPermissionLabel(arg0, guildPermissionSpecMap);
      }
    },

  ];
  obj2 = {
    key: "permissions",
    caption: _modDef4244["2UbW6r"],
    names: proposal.bot_permissions,
    label(arg0) {
      return conjurePlanFormat.conjurePlanPermissionLabel(arg0, guildPermissionSpecMap);
    }
  };
  items[1] = { key: "intents", caption: _modDef4244["7TKfpj"], names: proposal.privileged_intents, label: guildPermissionSpecMap(18719).formatConjurePlanRequirementLabel };
  return items.flatMap((names) => {
    names = names.names;
    if (null != names) {
      if (names.length > 0) {
        obj = { key: tmp, caption: null, labels: null };
        const intl = guildPermissionSpecMap(dependencyMap[1]).intl;
        obj.caption = intl.string(tmp2);
        const _Set = Set;
        set = new Set(names.map(tmp3));
        items = [];
        HermesBuiltin.arraySpread(set, 0);
        obj.labels = items;
        const items1 = [obj];
      }
      return [];
    }
  });
}