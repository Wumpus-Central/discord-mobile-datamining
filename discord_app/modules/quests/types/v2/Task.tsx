// discord_app/modules/quests/types/v2/Task.tsx
import FirstPartyQuestTaskTypes from "../../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import QuestTaskConfigTypes from "../../../../../discord_common/js/shared/shared-constants/QuestTaskConfigTypes.tsx";
import QuestTaskJoinOperator from "../../../../../discord_common/js/shared/shared-constants/QuestTaskJoinOperator.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function _firstPartyTasksFromServer(tasks) {
  let obj = {};
  const keys = Object.keys(tasks);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = tasks[nextResult];
    let tmp5 = tmp4;
    if (null != tmp4) {
      obj = { eventName: null, target: null, externalIds: null };
      ({ event_name: obj2.eventName, target: obj2.target, external_ids: obj2.externalIds } = tmp5);
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
      obj = { eventName: null, title: null, target: null, description: null };
      ({ event_name: obj2.eventName, title: obj2.title, target: obj2.target, description: obj2.description } = tmp5);
      obj[tmp3] = obj;
    }
    continue;
  }
  return obj;
}
const result = size.fileFinishedImporting("modules/quests/types/v2/Task.tsx");

export const questTaskConfigFromServer = function questTaskConfigFromServer(type) {
  type = type.type;
  if (QuestTaskConfigTypes.QuestTaskConfigTypes.FIRST_PARTY === type) {
    let obj = {
      type: tmp(7713).QuestTaskConfigTypes.FIRST_PARTY,
      tasks: _firstPartyTasksFromServer(type.tasks),
      joinOperator: type.join_operator,
    };
    return obj;
  } else if (tmp(7713).QuestTaskConfigTypes.THIRD_PARTY === type) {
    obj = {
      type: tmp(7713).QuestTaskConfigTypes.THIRD_PARTY,
      tasks: _thirdPartyTasksFromServer(type.tasks),
      enrollmentUrl: null,
      developerApplicationId: null,
      joinOperator: null,
    };
    ({
      enrollment_url: obj.enrollmentUrl,
      developer_application_id: obj.developerApplicationId,
      join_operator: obj.joinOperator,
    } = type);
    return obj;
  }
};
export const questTaskConfigV2FromServer = function questTaskConfigV2FromServer(task_config_v2) {
  try {
    const _Object = Object;
    const entries = Object.entries(task_config_v2.tasks);
    const mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      const items = [tmp];
      const type = tmp2.type;
      if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO === type) {
        let obj = {
          type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO,
          target: tmp2.target,
          assets: null,
          messages: null,
        };
        let tmp3Result = tmp3(tmp4[2]);
        obj.assets = tmp3Result.desktopVideoAssetsFromServer(tmp2.assets);
        tmp3Result = tmp3(tmp4[2]);
        obj.messages = tmp3Result.desktopVideoMessagesFromServer(tmp2.messages);
        let tmp5 = obj;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE === type) {
        obj = {
          type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE,
          target: tmp2.target,
          assets: tmp3(tmp4[2]).mobileVideoAssetsFromServer(tmp2.assets),
          messages: null,
        };
        const tmp3Result1 = tmp3(tmp4[2]);
        obj.messages = tmp3(tmp4[2]).mobileVideoMessagesFromServer(tmp2.messages);
        tmp5 = obj;
        const tmp3Result2 = tmp3(tmp4[2]);
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP === type) {
        const obj1 = { type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, target: null, applications: null };
        ({ target: obj7.target, applications: obj7.applications } = tmp2);
        tmp5 = obj1;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP === type) {
        const obj2 = {
          type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP,
          target: null,
          applications: null,
        };
        ({ target: obj6.target, applications: obj6.applications } = tmp2);
        tmp5 = obj2;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY === type) {
        const obj3 = { type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY, target: null, applications: null };
        ({ target: obj5.target, applications: obj5.applications } = tmp2);
        tmp5 = obj3;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX === type) {
        const obj4 = {
          type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX,
          target: null,
          externalIds: null,
          applications: null,
        };
        ({ target: obj4.target, external_ids: obj4.externalIds, applications: obj4.applications } = tmp2);
        tmp5 = obj4;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === type) {
        const obj5 = {
          type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION,
          target: null,
          externalIds: null,
          applications: null,
        };
        ({ target: obj3.target, external_ids: obj3.externalIds, applications: obj3.applications } = tmp2);
        tmp5 = obj5;
      } else if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME === type) {
        obj = {
          type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME,
          target: null,
          eventName: null,
          messages: null,
          applications: null,
          accountLinkInstructions: null,
        };
        ({ target: obj.target, event_name: obj.eventName } = tmp2);
        const obj6 = { taskTitle: tmp2.messages.task_title, taskDescription: tmp2.messages.task_description };
        obj.messages = obj6;
        ({ applications: obj.applications, account_link_instructions: obj.accountLinkInstructions } = tmp2);
        tmp5 = obj;
      } else {
        tmp5 = null;
        if (tmp3(tmp4[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY === type) {
          const obj7 = {
            type: tmp3(tmp4[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY,
            target: null,
            eventName: null,
            messages: null,
            applications: null,
          };
          ({ target: obj14.target, event_name: obj14.eventName } = tmp2);
          const obj8 = { taskTitle: tmp2.messages.task_title, taskDescription: tmp2.messages.task_description };
          obj7.messages = obj8;
          obj7.applications = tmp2.applications;
          tmp5 = obj7;
        }
      }
      items[1] = tmp5;
      return items;
    });
    let obj = { tasks: null, joinOperator: null };
    const _Object2 = Object;
    obj.tasks = Object.fromEntries(
      mapped.filter((item) => {
        [, tmp] = item;
        return null !== tmp;
      }),
    );
    obj.joinOperator = task_config_v2.join_operator;
    return obj;
  } catch (err) {
    obj = { tasks: {}, joinOperator: QuestTaskJoinOperator.QuestTaskJoinOperator.OR };
    return obj;
  }
};
