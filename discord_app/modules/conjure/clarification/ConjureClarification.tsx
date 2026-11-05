// === Module 12812: ConjureClarification ===

// Module 12812 (ConjureClarification)
import util from "util" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import useChannelName from "useChannelName" /* 5788 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import RelationshipStore from "RelationshipStore" /* 5085 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
function multiSelectAnswer(options, answeredOptionIdsResult, str, conjureOwnImages) {
  const trimmed = str.trim();
  options = options.options;
  const found = options.filter((id) => answeredOptionIdsResult.includes(id.id));
  const mapped = found.map((label) => label.label);
  obj = { kind: "multi", optionIds: answeredOptionIdsResult };
  if ("" === trimmed) {
    let obj2 = {};
  } else {
    obj2 = { custom: trimmed };
  }
  const merged = Object.assign(obj2);
  if (null == conjureOwnImages) {
    let obj3 = {};
  } else {
    obj3 = { attachment: conjureOwnImages.attachment };
  }
  const merged1 = Object.assign(obj3);
  items = [...mapped];
  if (null == conjureOwnImages) {
    let items1 = [];
  } else {
    items1 = [conjureOwnImages.text];
  }
  if ("" === trimmed) {
    let items2 = [];
  } else {
    items2 = [trimmed];
  }
  HermesBuiltin.arraySpread(items2, HermesBuiltin.arraySpread(items1, tmp6));
  obj.text = items.join(", ");
  return obj;
}
const ChannelTypes = fn(1072).ChannelTypes;
let closure_7 = { [ChannelTypes.GUILD_TEXT]: "text", [ChannelTypes.GUILD_VOICE]: "voice", [ChannelTypes.GUILD_ANNOUNCEMENT]: "announcement", [ChannelTypes.GUILD_STAGE_VOICE]: "stage", [ChannelTypes.GUILD_FORUM]: "forum", [ChannelTypes.GUILD_MEDIA]: "media" };
let closure_8 = { channel: "#", role: "@", user: "@", project: "", server: "" };
let obj = { channel: null, role: null, user: null, project: null, server: null };
let items = [_modDef3995["9+dfPT"], _modDef3995.pGSJqE];
obj.channel = items;
let items1 = [_modDef3995["2VkCoD"], _modDef3995.c8YlX8];
obj.role = items1;
let items2 = [_modDef3995.GZIAxl, _modDef3995["4bptbQ"]];
obj.user = items2;
const items3 = [_modDef3995.twlOb6, _modDef3995.twlOb6];
obj.project = items3;
const items4 = [_modDef3995.ZWXDeI, _modDef3995.ZWXDeI];
obj.server = items4;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/ConjureClarification.tsx");

export function liveClarification(memo) {
  let tmp2;
  let diff = memo.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp2 = memo[diff];
      if (null != tmp2.clarification) {
        if (0 !== tmp2.clarification.questions.length) {
          break;
        }
      }
      diff = diff - 1;
    }
    let settled_at = tmp2.clarificationAt;
    if (settled_at == null) {
      settled_at = tmp2.settled_at;
    }
    let sum = diff + 1;
    if (sum < memo.length) {
      while (true) {
        if ("user" === memo[sum].role) {
          if (null == settled_at) {
            break;
          } else if (memo[sum].created_at > settled_at) {
            break;
          }
        }
        sum = sum + 1;
      }
      return null;
    }
    return tmp2.clarification;
  }
  return null;
}
export function isTypedClarificationQuestion(options) {
  let tmp = 0 === options.options.length;
  if (tmp) {
    tmp = null == options.input;
  }
  return tmp;
}
export function clarificationDraftPlaceholder(options) {
  const intl = util.intl;
  let tmp2 = 0 === options.options.length;
  if (tmp2) {
    tmp2 = null == options.input;
  }
  const tmp4 = _modDef3995;
  return intl.string(tmp2 ? tmp4.yLN1x6 : tmp4["tOC+tn"]);
}
export function isClarificationComplete(questions, arg1) {
  closure_0 = arg1;
  questions = questions.questions;
  return questions.every((optional) => {
    let tmp2 = true === optional.optional;
    if (!tmp2) {
      let tmp4 = null != tmp;
      if (tmp4) {
        tmp4 = "" !== tmp.text.trim();
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
}
export function nextClarificationStep(questions, arg1, arg2) {
  let result;
  questions = questions.questions;
  let num = 1;
  if (1 <= questions.length) {
    while (true) {
      result = (arg2 + num) % questions.length;
      let tmp2 = arg1[questions[result].id];
      let tmp3 = true === questions[result].optional;
      if (!tmp3) {
        let tmp5 = null != tmp2;
        if (tmp5) {
          let str = tmp2.text;
          tmp5 = "" !== str.trim();
        }
        tmp3 = tmp5;
      }
      if (!tmp3) {
        break;
      } else {
        num = num + 1;
      }
    }
    return result;
  }
  return null;
}
export function followingClarificationStep(clarification, arg1, bound) {
  if (bound < clarification.questions.length - 1) {
    let sum = bound + 1;
  } else {
    const questions = clarification.questions;
    let num = 1;
    sum = null;
    if (1 <= questions.length) {
      while (true) {
        let result = (bound + num) % questions.length;
        let tmp2 = arg1[questions[result].id];
        let tmp3 = true === questions[result].optional;
        if (!tmp3) {
          let tmp5 = null != tmp2;
          if (tmp5) {
            let str = tmp2.text;
            tmp5 = "" !== str.trim();
          }
          tmp3 = tmp5;
        }
        sum = result;
        if (!tmp3) {
          break;
        } else {
          let sum1 = num + 1;
          num = sum1;
          sum = null;
          if (sum1 > questions.length) {
            break;
          }
        }
      }
    }
  }
  return sum;
}
export function skippedClarificationAnswers(clarification, arg1, bound) {
  const id = tmp;
  let optional;
  if (clarification.questions[bound] != null) {
    optional = tmp.optional;
  }
  if (true !== optional) {
    return null;
  } else {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(arg1);
    const fromEntriesResult = Object.fromEntries(entries.filter((item) => {
      [tmp] = item;
      return tmp !== id.id;
    }));
    if (bound < clarification.questions.length - 1) {
      let sum = bound + 1;
    } else {
      const questions = clarification.questions;
      let num = 1;
      sum = null;
      if (1 <= questions.length) {
        while (true) {
          let result = (bound + num) % questions.length;
          let tmp4 = fromEntriesResult[questions[result].id];
          let tmp5 = true === questions[result].optional;
          if (!tmp5) {
            let tmp7 = null != tmp4;
            if (tmp7) {
              let str = tmp4.text;
              tmp7 = "" !== str.trim();
            }
            tmp5 = tmp7;
          }
          sum = result;
          if (!tmp5) {
            break;
          } else {
            let sum1 = num + 1;
            num = sum1;
            sum = null;
            if (sum1 > questions.length) {
              break;
            }
          }
        }
      }
    }
    if (null != sum) {
      let tmp10 = fromEntriesResult;
    } else {
      closure_129_0 = fromEntriesResult;
      const questions1 = clarification.questions;
      const mapped = questions1.map((question, index) => ({ question, index, answer: questions[question.id] }));
      const found = mapped.filter((answer) => {
        let tmp = null != answer.answer;
        if (tmp) {
          tmp = "" !== answer.answer.text.trim();
        }
        return tmp;
      });
      const mapped1 = found.map((answer) => {
        const sum = answer.index + 1;
        return "" + sum + ". " + answer.question.question + " \u2192 " + answer.answer.text.trim();
      });
      tmp10 = null;
    }
    return tmp10;
  }
}
export function formatClarificationAnswers(questions, arg1) {
  closure_0 = arg1;
  questions = questions.questions;
  const mapped = questions.map((question, index) => ({ question, index, answer: questions[question.id] }));
  const found = mapped.filter((answer) => {
    let tmp = null != answer.answer;
    if (tmp) {
      tmp = "" !== answer.answer.text.trim();
    }
    return tmp;
  });
  const mapped1 = found.map((answer) => {
    const sum = answer.index + 1;
    return "" + sum + ". " + answer.question.question + " \u2192 " + answer.answer.text.trim();
  });
  return mapped1.join("\n");
}
export function toggleClarificationOption(options, arr, id) {
  closure_0 = id;
  if (arr.includes(id)) {
    let found = arr.filter((item) => item !== closure_0);
  } else {
    items = [];
    items[HermesBuiltin.arraySpread(arr, 0)] = id;
    found = items;
  }
  options = options.options;
  const found1 = options.filter((id) => found.includes(id.id));
  return found1.map((id) => id.id);
}
export { multiSelectAnswer };
export function uploadNoteAnswer(upload, multi, str) {
  str = multi;
  let optionIds = multi;
  let tmp = null;
  let tmp2 = null;
  if (true === upload.upload) {
    tmp2 = null;
    if (true !== upload.multi_select) {
      tmp2 = null;
      if (tmp != str) {
        tmp2 = str;
        if ("option" !== str.kind) {
          tmp2 = str;
          if ("image" !== str.kind) {
            tmp2 = null;
            if ("multi" === str.kind) {
              if (tmp != str.attachment) {
                const obj2 = { kind: "image", attachment: str.attachment, text: null };
                const intl = util.intl;
                obj2.text = intl.string(_modDef3995.wTsP5l);
                tmp2 = obj2;
              } else {
                const options = upload.options;
                const found = options.find((id) => {
                  optionIds = optionIds.optionIds;
                  return optionIds.includes(id.id);
                });
                let tmp4 = null;
                if (tmp != found) {
                  obj = { kind: "option", optionId: null, text: null };
                  ({ id: obj.optionId, label: obj.text } = found);
                  tmp4 = obj;
                }
                tmp2 = tmp4;
              }
            }
          }
        }
      }
    }
  }
  if (tmp == tmp2) {
    return null;
  } else if ("" === str.trim()) {
    let kind;
    if (str != tmp) {
      kind = str.kind;
    }
    str = "multi";
    tmp = null;
    if ("multi" === kind) {
      tmp = tmp2;
    }
  } else if ("option" === tmp2.kind) {
    items = [tmp2.optionId];
    let tmp13 = multiSelectAnswer(upload, items, str);
  } else {
    tmp13 = multiSelectAnswer(upload, [], str, tmp2);
  }
}
export function clarificationChannelType(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = closure_7[arg0];
  }
  return tmp;
}
export const MAX_CLARIFICATION_ENTITY_PICKS = 10;
export function clarificationEntities(project, items, arg2, arg3) {
  closure_0 = project;
  closure_1 = arg2;
  closure_2 = arg3;
  const substr = items.slice(0, 10);
  return substr.map((id) => {
    closure_0 = id;
    obj = { id, name: null };
    let tmp = importDefault(id);
    if (tmp == null) {
      const found = dependencyMap.find((id) => id.id === closure_0);
      let name;
      if (found != null) {
        name = found.name;
      }
      tmp = name;
    }
    if (tmp == null) {
      tmp = id;
    }
    obj.name = tmp;
    if ("channel" === closure_0) {
      const channel = ChannelStore.getChannel(id);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp15;
      if (null != type) {
        tmp15 = closure_7[type];
      }
      const obj2 = { kind: tmp5 };
      if (null == tmp15) {
        let obj3 = {};
      } else {
        obj3 = { channel_type: tmp15 };
      }
      const merged = Object.assign(obj3);
    } else {
      if ("user" === tmp5) {
        const user = UserStore.getUser(id);
        let username;
        if (user != null) {
          username = user.username;
        }
        const obj4 = { kind: tmp5 };
        if (null == username) {
          let obj5 = {};
        } else {
          obj5 = { username };
        }
        const merged1 = Object.assign(obj5);
        let obj6 = obj4;
      } else {
        obj6 = { kind: tmp5 };
      }
      const merged2 = Object.assign(obj6);
      return obj;
    }
  });
}
export function clarificationChannelEntities(stateFromStores1, arg1) {
  closure_0 = stateFromStores1;
  items = [stateFromStores1.id];
  closure_129_0 = "channel";
  closure_129_1 = () => useChannelName.computeChannelName(closure_0, UserStore, RelationshipStore);
  closure_129_2 = arg1;
  const substr = items.slice(0, 10);
  return substr.map((id) => {
    closure_0 = id;
    obj = { id, name: null };
    let tmp = importDefault(id);
    if (tmp == null) {
      const found = dependencyMap.find((id) => id.id === closure_0);
      let name;
      if (found != null) {
        name = found.name;
      }
      tmp = name;
    }
    if (tmp == null) {
      tmp = id;
    }
    obj.name = tmp;
    if ("channel" === closure_0) {
      const channel = ChannelStore.getChannel(id);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp15;
      if (null != type) {
        tmp15 = closure_7[type];
      }
      const obj2 = { kind: tmp5 };
      if (null == tmp15) {
        let obj3 = {};
      } else {
        obj3 = { channel_type: tmp15 };
      }
      const merged = Object.assign(obj3);
    } else {
      if ("user" === tmp5) {
        const user = UserStore.getUser(id);
        let username;
        if (user != null) {
          username = user.username;
        }
        const obj4 = { kind: tmp5 };
        if (null == username) {
          let obj5 = {};
        } else {
          obj5 = { username };
        }
        const merged1 = Object.assign(obj5);
        let obj6 = obj4;
      } else {
        obj6 = { kind: tmp5 };
      }
      const merged2 = Object.assign(obj6);
      return obj;
    }
  });
}
export function entityAnswer(input, c10, str, guildId) {
  closure_0 = input;
  const trimmed = str.trim();
  obj = { kind: "entities", entities };
  if (null == guildId) {
    let obj2 = {};
  } else {
    obj2 = { guildId };
  }
  const merged = Object.assign(obj2);
  if ("" === trimmed) {
    let obj3 = {};
  } else {
    obj3 = { custom: trimmed };
  }
  const merged1 = Object.assign(obj3);
  items = [
    ...c10.map((name) => {
      name = name.name;
      if (name.startsWith(dependencyMap[closure_0])) {
        let name2 = name.name;
      } else {
        const _HermesInternal = HermesInternal;
        name2 = "" + dependencyMap[closure_0] + name.name;
      }
      return name2;
    })
  ];
  if ("" === trimmed) {
    let items1 = [];
  } else {
    items1 = [trimmed];
  }
  HermesBuiltin.arraySpread(items1, tmp5);
  obj.text = items.join(", ");
  return obj;
}
export function clarificationPickerPlaceholder(input, arg1) {
  const intl = util.intl;
  let num = 0;
  if (arg1) {
    num = 1;
  }
  return intl.string(obj[input][num]);
}
export function clarificationAnswerAttachments(questions, arg1) {
  closure_0 = arg1;
  questions = questions.questions;
  return questions.flatMap((item) => {
    if (null != dependencyMap[item.id]) {
      if ("" !== str.trim()) {
        if ("image" === tmp.kind) {
          items = [tmp.attachment];
          let items1 = items;
        } else {
          items1 = [];
        }
      }
      return [];
    }
  });
}
export function clarificationAnswersPayload(questions, arg1) {
  closure_0 = arg1;
  questions = questions.questions;
  const flatMapResult = questions.flatMap((id) => {
    if (null != dependencyMap[id.id]) {
      if ("" !== str9.trim()) {
        if ("option" === tmp.kind) {
          items = [tmp.optionId];
          let tmp2 = items;
        } else {
          tmp2 = "multi" === tmp.kind ? tmp.optionIds : [];
        }
        if ("custom" === tmp.kind) {
          let custom = tmp.text.trim();
        } else if ("multi" === tmp.kind) {
          custom = tmp.custom;
        }
        const arr2 = "entities" === tmp.kind ? tmp.entities : [];
        if ("entities" === tmp.kind) {
          if (arr2.length > 0) {
            const guildId = tmp.guildId;
          }
        }
        if ("image" === tmp.kind) {
          const attachment = tmp.attachment;
        }
        obj = { question_id: id.id, option_ids: tmp2 };
        if (null != custom) {
          if ("" !== custom) {
            const obj2 = { custom };
            let obj9 = obj2;
          }
          const merged = Object.assign(obj9);
          if (null != attachment) {
            const obj3 = { attachment_id: attachment.id };
            let obj4 = obj3;
          } else {
            obj4 = {};
          }
          const merged1 = Object.assign(obj4);
          if (arr2.length > 0) {
            const obj5 = { entities: arr2 };
            let obj6 = obj5;
          } else {
            obj6 = {};
          }
          const merged2 = Object.assign(obj6);
          if (null != guildId) {
            const obj7 = { guild_id: guildId };
            let obj8 = obj7;
          } else {
            obj8 = {};
          }
          const merged3 = Object.assign(obj8);
          const items1 = [obj];
          return items1;
        }
        obj9 = {};
      }
      str9 = tmp.text;
    }
    return [];
  });
  let tmp = null;
  if (flatMapResult.length > 0) {
    obj = { clarification_id: questions.id, answers: flatMapResult };
    tmp = obj;
  }
  return tmp;
}
export function submitClarificationAnswers(projectId, clarification, arg2, first1, onSubmit) {
  closure_1 = arg2;
  dependencyMap = onSubmit;
  _require = arg2;
  let questions = clarification.questions;
  const mapped = questions.map((question, index) => ({ question, index, answer: questions[question.id] }));
  const found = mapped.filter((answer) => {
    let tmp = null != answer.answer;
    if (tmp) {
      tmp = "" !== answer.answer.text.trim();
    }
    return tmp;
  });
  const mapped1 = found.map((answer) => {
    const sum = answer.index + 1;
    return "" + sum + ". " + answer.question.question + " \u2192 " + answer.answer.text.trim();
  });
  const joined = mapped1.join("\n");
  if ("" !== joined) {
    let obj2 = require("conjureClarificationLinks");
    obj2.sendAfterLinkingApps(projectId, clarification, arg2, first1, () => {
      questions = closure_1;
      questions = questions.questions;
      const flatMapResult = questions.flatMap((id) => {
        if (null != dependencyMap[id.id]) {
          if ("" !== str9.trim()) {
            if ("option" === tmp.kind) {
              items = [tmp.optionId];
              let tmp2 = items;
            } else {
              tmp2 = "multi" === tmp.kind ? tmp.optionIds : [];
            }
            if ("custom" === tmp.kind) {
              let custom = tmp.text.trim();
            } else if ("multi" === tmp.kind) {
              custom = tmp.custom;
            }
            const arr2 = "entities" === tmp.kind ? tmp.entities : [];
            if ("entities" === tmp.kind) {
              if (arr2.length > 0) {
                const guildId = tmp.guildId;
              }
            }
            if ("image" === tmp.kind) {
              const attachment = tmp.attachment;
            }
            obj = { question_id: id.id, option_ids: tmp2 };
            if (null != custom) {
              if ("" !== custom) {
                const obj2 = { custom };
                let obj9 = obj2;
              }
              const merged = Object.assign(obj9);
              if (null != attachment) {
                const obj3 = { attachment_id: attachment.id };
                let obj4 = obj3;
              } else {
                obj4 = {};
              }
              const merged1 = Object.assign(obj4);
              if (arr2.length > 0) {
                const obj5 = { entities: arr2 };
                let obj6 = obj5;
              } else {
                obj6 = {};
              }
              const merged2 = Object.assign(obj6);
              if (null != guildId) {
                const obj7 = { guild_id: guildId };
                let obj8 = obj7;
              } else {
                obj8 = {};
              }
              const merged3 = Object.assign(obj8);
              const items1 = [obj];
              return items1;
            }
            obj9 = {};
          }
          str9 = tmp.text;
        }
        return [];
      });
      let tmp5 = null;
      if (flatMapResult.length > 0) {
        obj = { clarification_id: tmp3.id, answers: flatMapResult };
        tmp5 = obj;
      }
      questions = closure_1;
      const questions2 = tmp3.questions;
      return onSubmit(joined, tmp5, questions2.flatMap((item) => {
        if (null != dependencyMap[item.id]) {
          if ("" !== str.trim()) {
            if ("image" === tmp.kind) {
              items = [tmp.attachment];
              let items1 = items;
            } else {
              items1 = [];
            }
          }
          return [];
        }
      }));
    });
  }
}
export function clarificationDraftAnswer(entityAnswerResult, uploadNoteAnswerResult, str) {
  if (null != entityAnswerResult) {
    let tmp6 = null;
    if ("" !== entityAnswerResult.text) {
      tmp6 = entityAnswerResult;
    }
    return tmp6;
  } else if (null != uploadNoteAnswerResult) {
    let tmp5 = null;
    if ("" !== uploadNoteAnswerResult.text) {
      tmp5 = uploadNoteAnswerResult;
    }
    return tmp5;
  } else {
    const trimmed = str.trim();
    let tmp4 = null;
    if ("" !== trimmed) {
      obj = { kind: "custom", text: trimmed };
      tmp4 = obj;
    }
    return tmp4;
  }
}