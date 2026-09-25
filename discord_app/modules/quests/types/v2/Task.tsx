// === Module 7120: Task ===

// Module 7120 (Task)
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5759 */;
import QuestTaskConfigTypes from "QuestTaskConfigTypes" /* 7121 */;
import v2_Video from "v2/Video" /* 7122 */;
import QuestTaskJoinOperator from "QuestTaskJoinOperator" /* 7123 */;
import size from "module_2" /* 2 */;

function _firstPartyTasksFromServer(tasks) {
  const obj = {};
  const keys = Object.keys(tasks);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = tasks[nextResult];
    let tmp5 = tmp4;
    if (null != tmp4) {
      let obj3 = { eventName: null, target: null, externalIds: null };
      ({ event_name: obj2.eventName, target: obj2.target, external_ids: obj2.externalIds } = tmp5);
      obj[tmp3] = obj3;
    }
    continue;
  }
  return obj;
}
function _thirdPartyTasksFromServer(tasks) {
  const obj = {};
  const keys = Object.keys(tasks);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = tasks[nextResult];
    let tmp5 = tmp4;
    if (null != tmp4) {
      let obj3 = { eventName: null, title: null, target: null, description: null };
      ({ event_name: obj2.eventName, title: obj2.title, target: obj2.target, description: obj2.description } = tmp5);
      obj[tmp3] = obj3;
    }
    continue;
  }
  return obj;
}
const result = size.fileFinishedImporting("modules/quests/types/v2/Task.tsx");

export const questTaskConfigFromServer = function questTaskConfigFromServer(type) {
  type = type.type;
  if (QuestTaskConfigTypes.QuestTaskConfigTypes.FIRST_PARTY === type) {
    const obj2 = { type: QuestTaskConfigTypes.QuestTaskConfigTypes.FIRST_PARTY, tasks: _firstPartyTasksFromServer(type.tasks), joinOperator: type.join_operator };
    return obj2;
  } else if (QuestTaskConfigTypes.QuestTaskConfigTypes.THIRD_PARTY === type) {
    const obj = { type: QuestTaskConfigTypes.QuestTaskConfigTypes.THIRD_PARTY, tasks: _thirdPartyTasksFromServer(type.tasks), enrollmentUrl: null, developerApplicationId: null, joinOperator: null };
    ({ enrollment_url: obj.enrollmentUrl, developer_application_id: obj.developerApplicationId, join_operator: obj.joinOperator } = type);
    return obj;
  }
};
export const questTaskConfigV2FromServer = function questTaskConfigV2FromServer(task_config_v2) {
  try {
    const _Object = Object;
    const entries = Object.entries(task_config_v2.tasks);
    const mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      const items = [tmp, ];
      const type = tmp2.type;
      if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO === type) {
        const obj2 = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO, target: tmp2.target, assets: v2_Video.desktopVideoAssetsFromServer(tmp2.assets), messages: null };
        const tmp3Result = v2_Video;
        obj2.messages = v2_Video.desktopVideoMessagesFromServer(tmp2.messages);
        let tmp5 = obj2;
        const tmp3Result4 = v2_Video;
      } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE === type) {
        const obj8 = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE, target: tmp2.target, assets: v2_Video.mobileVideoAssetsFromServer(tmp2.assets), messages: null };
        const tmp3Result5 = v2_Video;
        obj8.messages = v2_Video.mobileVideoMessagesFromServer(tmp2.messages);
        tmp5 = obj8;
        const tmp3Result6 = v2_Video;
      } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP === type) {
        const obj9 = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, target: null, applications: null };
        ({ target: obj7.target, applications: obj7.applications } = tmp2);
        tmp5 = obj9;
      } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP === type) {
        const obj10 = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, target: null, applications: null };
        ({ target: obj6.target, applications: obj6.applications } = tmp2);
        tmp5 = obj10;
      } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY === type) {
        const obj11 = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY, target: null, applications: null };
        ({ target: obj5.target, applications: obj5.applications } = tmp2);
        tmp5 = obj11;
      } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === type) {
        const obj12 = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX, target: null, externalIds: null, applications: null };
        ({ target: obj4.target, external_ids: obj4.externalIds, applications: obj4.applications } = tmp2);
        tmp5 = obj12;
      } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === type) {
        const obj13 = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION, target: null, externalIds: null, applications: null };
        ({ target: obj3.target, external_ids: obj3.externalIds, applications: obj3.applications } = tmp2);
        tmp5 = obj13;
      } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME === type) {
        const obj = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME, target: null, eventName: null, messages: null, applications: null, accountLinkInstructions: null };
        ({ target: obj.target, event_name: obj.eventName } = tmp2);
        const obj15 = { taskTitle: tmp2.messages.task_title, taskDescription: tmp2.messages.task_description };
        obj.messages = obj15;
        ({ applications: obj.applications, account_link_instructions: obj.accountLinkInstructions } = tmp2);
        tmp5 = obj;
      } else {
        tmp5 = null;
        if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY === type) {
          const obj25 = { type: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY, target: null, eventName: null, messages: null, applications: null };
          ({ target: obj14.target, event_name: obj14.eventName } = tmp2);
          const obj26 = { taskTitle: tmp2.messages.task_title, taskDescription: tmp2.messages.task_description };
          obj25.messages = obj26;
          obj25.applications = tmp2.applications;
          tmp5 = obj25;
        }
      }
      items[1] = tmp5;
      return items;
    });
    let obj = { tasks: null, joinOperator: null };
    const _Object2 = Object;
    obj.tasks = Object.fromEntries(mapped.filter((item) => {
      [, tmp] = item;
      return null !== tmp;
    }));
    obj.joinOperator = task_config_v2.join_operator;
    return obj;
  } catch (err) {
    let obj2 = { tasks: {}, joinOperator: QuestTaskJoinOperator.QuestTaskJoinOperator.OR };
    return obj2;
  }
};