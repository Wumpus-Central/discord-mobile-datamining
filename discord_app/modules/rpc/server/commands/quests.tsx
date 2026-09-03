// === Module 14403: ? ===

// Module 14403
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7480 */;
import prototypeDefault from "prototype" /* 9520 */;
import recurseReplaceContentTree from "recurseReplaceContentTree" /* 9525 */;
import questMatchesActivity from "questMatchesActivity" /* 11339 */;
import closure_3 from "initializeState" /* 7459 */;
import ME from "ME" /* 673 */;

require = arg1;
({ RPCCommands, RPCErrors: c4, AnalyticEvents: c5 } = ME);
let obj = {};
obj = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    let obj = recurseReplaceContentTree;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = recurseReplaceContentTree;
    const quest = store.getQuest(quest_id);
    const validateApplicationResult = recurseReplaceContentTree.validateApplication(socket.application);
    const activityApplicationId = getApplicationIdsByTaskTypes.getActivityApplicationId(quest);
    if (null != quest) {
      if (null != activityApplicationId) {
        if (activityApplicationId === validateApplicationResult) {
          obj = { quest_id: null, is_enrolled: null, enrolled_at: null };
          obj[0] = quest_id;
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          obj[1] = null != enrolledAt;
          const userStatus2 = quest.userStatus;
          let enrolledAt1;
          if (userStatus2 != null) {
            enrolledAt1 = userStatus2.enrolledAt;
          }
          if (enrolledAt1 == null) {
            enrolledAt1 = null;
          }
          obj[2] = enrolledAt1;
          return obj;
        }
      }
    }
    obj = { errorCode: constants.INVALID_COMMAND };
    let tmp8 = prototypeDefault;
    tmp8 = new tmp8(obj, "Quest not found: " + quest_id);
    throw tmp8;
  }
};
obj[RPCCommands.GET_QUEST_ENROLLMENT_STATUS] = obj;
obj = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    let obj = recurseReplaceContentTree;
    const result = obj.validatePostMessageTransport(socket.transport);
    obj1 = recurseReplaceContentTree;
    const validateApplicationResult = obj1.validateApplication(socket.application);
    const quest = store.getQuest(quest_id);
    let obj2 = getApplicationIdsByTaskTypes;
    const playActivityApplicationId = obj2.getPlayActivityApplicationId(quest);
    if (null != quest) {
      if (null != playActivityApplicationId) {
        if (playActivityApplicationId === validateApplicationResult) {
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          if (null == enrolledAt) {
            obj = { errorCode: null };
            obj[0] = constants.INVALID_COMMAND;
            const tmp16 = new prototypeDefault(obj, "User is not enrolled in quest");
            throw tmp16;
          } else {
            obj = { application_id: null, quest_id: null };
            obj[0] = validateApplicationResult;
            obj[1] = quest_id;
            expandEventPropertiesDefault.track(constants2.RPC_QUEST_START_TIMER_CALLED, obj);
            const obj4 = expandEventPropertiesDefault;
            obj1 = { type: "QUEST_APPLICATION_START_TIMER", questId: null, applicationId: null };
            obj1[1] = quest_id;
            obj1[2] = validateApplicationResult;
            dispatcherDefault.dispatch(obj1);
            return { success: true };
          }
        }
      }
    }
    obj2 = { errorCode: constants.INVALID_COMMAND };
    let tmp18 = prototypeDefault;
    tmp18 = new tmp18(obj2, "Quest not found: " + quest_id);
    throw tmp18;
  }
};
obj[RPCCommands.QUEST_START_TIMER] = obj;
obj[RPCCommands.GET_QUEST] = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    let obj = recurseReplaceContentTree;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = recurseReplaceContentTree;
    const validateApplicationResult = recurseReplaceContentTree.validateApplication(socket.application);
    const eligibleQuestsForApplicationId = questMatchesActivity.getEligibleQuestsForApplicationId(store.quests, validateApplicationResult, true);
    if (0 === eligibleQuestsForApplicationId.length) {
      obj = { errorCode: null };
      obj[0] = constants.INVALID_COMMAND;
      const tmp9 = new prototypeDefault(obj, "No eligible quests found");
      throw tmp9;
    } else {
      const mapped = eligibleQuestsForApplicationId.map((id) => {
        const obj = { quest_id: id.id, enrolled_at: null, completed_at: null, external_cta_url: null };
        const userStatus = id.userStatus;
        let enrolledAt;
        if (userStatus != null) {
          enrolledAt = userStatus.enrolledAt;
        }
        if (enrolledAt == null) {
          enrolledAt = null;
        }
        obj[1] = enrolledAt;
        const userStatus2 = id.userStatus;
        let completedAt;
        if (userStatus2 != null) {
          completedAt = userStatus2.completedAt;
        }
        if (completedAt == null) {
          completedAt = null;
        }
        obj[2] = completedAt;
        obj[3] = id.config.ctaConfig.link;
        return obj;
      });
      return mapped.sort((enrolled_at, enrolled_at2) => {
        if (null != enrolled_at.enrolled_at) {
          let num2 = 1;
          if (null != enrolled_at.enrolled_at) {
            let num3 = -1;
            if (null != enrolled_at2.enrolled_at) {
              const _Date = Date;
              const date = new Date(enrolled_at.enrolled_at);
              const _Date2 = Date;
              const time = date.getTime();
              const date1 = new Date(enrolled_at2.enrolled_at);
              num3 = time - date1.getTime();
            }
            num2 = num3;
          }
          let num = num2;
        } else {
          num = 0;
        }
        return num;
      })[0];
    }
    const obj3 = questMatchesActivity;
  }
};
let obj1 = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    let obj = recurseReplaceContentTree;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = recurseReplaceContentTree;
    const validateApplicationResult = recurseReplaceContentTree.validateApplication(socket.application);
    const eligibleQuestsForApplicationId = questMatchesActivity.getEligibleQuestsForApplicationId(store.quests, validateApplicationResult, true);
    if (0 === eligibleQuestsForApplicationId.length) {
      obj = { errorCode: null };
      obj[0] = constants.INVALID_COMMAND;
      const tmp9 = new prototypeDefault(obj, "No eligible quests found");
      throw tmp9;
    } else {
      const mapped = eligibleQuestsForApplicationId.map((id) => {
        const obj = { quest_id: id.id, enrolled_at: null, completed_at: null, external_cta_url: null };
        const userStatus = id.userStatus;
        let enrolledAt;
        if (userStatus != null) {
          enrolledAt = userStatus.enrolledAt;
        }
        if (enrolledAt == null) {
          enrolledAt = null;
        }
        obj[1] = enrolledAt;
        const userStatus2 = id.userStatus;
        let completedAt;
        if (userStatus2 != null) {
          completedAt = userStatus2.completedAt;
        }
        if (completedAt == null) {
          completedAt = null;
        }
        obj[2] = completedAt;
        obj[3] = id.config.ctaConfig.link;
        return obj;
      });
      return mapped.sort((enrolled_at, enrolled_at2) => {
        if (null != enrolled_at.enrolled_at) {
          let num2 = 1;
          if (null != enrolled_at.enrolled_at) {
            let num3 = -1;
            if (null != enrolled_at2.enrolled_at) {
              const _Date = Date;
              const date = new Date(enrolled_at.enrolled_at);
              const _Date2 = Date;
              const time = date.getTime();
              const date1 = new Date(enrolled_at2.enrolled_at);
              num3 = time - date1.getTime();
            }
            num2 = num3;
          }
          let num = num2;
        } else {
          num = 0;
        }
        return num;
      })[0];
    }
    const obj3 = questMatchesActivity;
  }
};
let result = require("set").fileFinishedImporting("modules/rpc/server/commands/quests.tsx");

export default obj;