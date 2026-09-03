// discord_app/modules/quests/types/v2/Task.tsx
import set from "../../../../../_runtime/00002_set.js";
import QuestTaskConfigTypes from "../../../../../discord_common/js/shared/shared-constants/QuestTaskConfigTypes.tsx";
import QuestTaskJoinOperator from "../../../../../discord_common/js/shared/shared-constants/QuestTaskJoinOperator.tsx";

function _firstPartyTasksFromServer(tasks) {
  let obj = {};
  const keys = Object.keys(tasks);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = tasks[nextResult];
    let tmp5 = tmp4;
    if (null != tmp4) {
      let tmp6 = nextResult;
      obj = { eventName: null, target: null, externalIds: null };
      let tmp7 = tmp4;
      ({ event_name: obj2[0], target: obj2[1], external_ids: obj2[2] } = tmp5);
      obj[tmp3] = obj;
    }
    continue;
  }
  return obj;
}
function _thirdPartyTasksFromServer(tasks) {
  let obj = {};
  const keys = Object.keys(tasks);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = tasks[nextResult];
    let tmp5 = tmp4;
    if (null != tmp4) {
      let tmp6 = nextResult;
      obj = { eventName: null, title: null, target: null, description: null };
      let tmp7 = tmp4;
      ({ event_name: obj2[0], title: obj2[1], target: obj2[2], description: obj2[3] } = tmp5);
      obj[tmp3] = obj;
    }
    continue;
  }
  return obj;
}
const result = set.fileFinishedImporting("modules/quests/types/v2/Task.tsx");

export const questTaskConfigFromServer = function questTaskConfigFromServer(type) {
  type = type.type;
  if (QuestTaskConfigTypes.QuestTaskConfigTypes.FIRST_PARTY === type) {
    let obj = { type: null, tasks: null, joinOperator: null };
    obj[0] = tmp(7469).QuestTaskConfigTypes.FIRST_PARTY;
    obj[1] = _firstPartyTasksFromServer(type.tasks);
    obj[2] = type.join_operator;
    return obj;
  } else if (tmp(7469).QuestTaskConfigTypes.THIRD_PARTY === type) {
    obj = { type: null, tasks: null, enrollmentUrl: null, developerApplicationId: null, joinOperator: null };
    obj[0] = tmp(7469).QuestTaskConfigTypes.THIRD_PARTY;
    obj[1] = _thirdPartyTasksFromServer(type.tasks);
    ({ enrollment_url: obj[2], developer_application_id: obj[3], join_operator: obj[4] } = type);
    return obj;
  }
};
export const questTaskConfigV2FromServer = function questTaskConfigV2FromServer(task_config_v2) {
  try {
    const _Object = Object;
    const entries = Object.entries(task_config_v2.tasks);
    const mapped = entries.map((arg0) => {
      [tmp, tmp2] = arg0;
      const items = [tmp];
      const type = tmp2.type;
      if (callback(table[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO === type) {
        let obj = { type: null, target: null, assets: null, messages: null };
        obj[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO;
        obj[1] = tmp2.target;
        let tmp3Result = tmp3(tmp4[2]);
        obj[2] = tmp3Result.desktopVideoAssetsFromServer(tmp2.assets);
        tmp3Result = tmp3(tmp4[2]);
        obj[3] = tmp3Result.desktopVideoMessagesFromServer(tmp2.messages);
        let tmp5 = obj;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE === type) {
        obj = { type: null, target: null, assets: null, messages: null };
        obj[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE;
        obj[1] = tmp2.target;
        obj[2] = tmp3(tmp4[2]).mobileVideoAssetsFromServer(tmp2.assets);
        const tmp3Result1 = tmp3(tmp4[2]);
        obj[3] = tmp3(tmp4[2]).mobileVideoMessagesFromServer(tmp2.messages);
        tmp5 = obj;
        const tmp3Result2 = tmp3(tmp4[2]);
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP === type) {
        obj1 = { type: null, target: null, applications: null };
        obj1[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP;
        ({ target: obj7[1], applications: obj7[2] } = tmp2);
        tmp5 = obj1;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP === type) {
        const obj2 = { type: null, target: null, applications: null };
        obj2[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
        ({ target: obj6[1], applications: obj6[2] } = tmp2);
        tmp5 = obj2;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY === type) {
        const obj3 = { type: null, target: null, applications: null };
        obj3[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY;
        ({ target: obj5[1], applications: obj5[2] } = tmp2);
        tmp5 = obj3;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX === type) {
        const obj4 = { type: null, target: null, externalIds: null, applications: null };
        obj4[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX;
        ({ target: obj4[1], external_ids: obj4[2], applications: obj4[3] } = tmp2);
        tmp5 = obj4;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === type) {
        const obj5 = { type: null, target: null, externalIds: null, applications: null };
        obj5[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION;
        ({ target: obj3[1], external_ids: obj3[2], applications: obj3[3] } = tmp2);
        tmp5 = obj5;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME === type) {
        obj = {
          type: null,
          target: null,
          eventName: null,
          messages: null,
          applications: null,
          accountLinkInstructions: null,
        };
        obj[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME;
        ({ target: obj[1], event_name: obj[2] } = tmp2);
        const obj6 = { taskTitle: null, taskDescription: null };
        obj6[0] = tmp2.messages.task_title;
        obj6[1] = tmp2.messages.task_description;
        obj[3] = obj6;
        ({ applications: obj[4], account_link_instructions: obj[5] } = tmp2);
        tmp5 = obj;
      } else {
        tmp5 = null;
        if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY === type) {
          const obj7 = { type: null, target: null, eventName: null, messages: null, applications: null };
          obj7[0] = tmp3(tmp4[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY;
          ({ target: obj14[1], event_name: obj14[2] } = tmp2);
          const obj8 = { taskTitle: null, taskDescription: null };
          obj8[0] = tmp2.messages.task_title;
          obj8[1] = tmp2.messages.task_description;
          obj7[3] = obj8;
          obj7[4] = tmp2.applications;
          tmp5 = obj7;
        }
      }
      items[1] = tmp5;
      return items;
    });
    let obj = { tasks: null, joinOperator: null };
    const _Object2 = Object;
    obj[0] = Object.fromEntries(
      mapped.filter((arg0) => {
        [, tmp] = arg0;
        return null !== tmp;
      }),
    );
    obj[1] = task_config_v2.join_operator;
    return obj;
  } catch (err) {
    obj = { tasks: null, joinOperator: null };
    obj[0] = {};
    obj[1] = QuestTaskJoinOperator.QuestTaskJoinOperator.OR;
    return obj;
  }
};
