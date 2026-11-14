// === Module 16977: quests ===

// Module 16977 (quests)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import RPCErrorDefault from "RPCError" /* 7303 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8831 */;
import RPCHelpers from "RPCHelpers" /* 12869 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 15252 */;
import QuestStore from "QuestStore" /* 8808 */;

require = fn;
const Constants = fn(1072);
({ RPCCommands, RPCErrors: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
let obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(16922);
obj[RPCCommands.GET_QUEST_ENROLLMENT_STATUS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_QUEST_ENROLLMENT_STATUS, {
  scope: fn(7307).OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const quest = QuestStore.getQuest(quest_id);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    const activityApplicationId = QuestTaskUtils.getActivityApplicationId(quest);
    if (null != quest) {
      if (null != activityApplicationId) {
        if (activityApplicationId === validateApplicationResult) {
          const obj4 = { quest_id, is_enrolled: null, enrolled_at: null };
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          obj4.is_enrolled = null != enrolledAt;
          const userStatus2 = quest.userStatus;
          let enrolledAt1;
          if (userStatus2 != null) {
            enrolledAt1 = userStatus2.enrolledAt;
          }
          if (enrolledAt1 == null) {
            enrolledAt1 = null;
          }
          obj4.enrolled_at = enrolledAt1;
          return obj4;
        }
      }
    }
    const obj5 = { errorCode: constants.INVALID_COMMAND };
    throw new RPCErrorDefault(obj5, "Quest not found: " + quest_id);
  }
});
CONTEXT_MENU_ICON_NAMES = fn(16922);
let obj3 = {
  scope: fn(7307).OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const quest = QuestStore.getQuest(quest_id);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    const activityApplicationId = QuestTaskUtils.getActivityApplicationId(quest);
    if (null != quest) {
      if (null != activityApplicationId) {
        if (activityApplicationId === validateApplicationResult) {
          const obj4 = { quest_id, is_enrolled: null, enrolled_at: null };
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          obj4.is_enrolled = null != enrolledAt;
          const userStatus2 = quest.userStatus;
          let enrolledAt1;
          if (userStatus2 != null) {
            enrolledAt1 = userStatus2.enrolledAt;
          }
          if (enrolledAt1 == null) {
            enrolledAt1 = null;
          }
          obj4.enrolled_at = enrolledAt1;
          return obj4;
        }
      }
    }
    const obj5 = { errorCode: constants.INVALID_COMMAND };
    throw new RPCErrorDefault(obj5, "Quest not found: " + quest_id);
  }
};
obj[RPCCommands.QUEST_START_TIMER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.QUEST_START_TIMER, {
  scope: fn(7307).OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    const quest = QuestStore.getQuest(quest_id);
    const playActivityApplicationId = QuestTaskUtils.getPlayActivityApplicationId(quest);
    if (null != quest) {
      if (null != playActivityApplicationId) {
        if (playActivityApplicationId === validateApplicationResult) {
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          if (null == enrolledAt) {
            const obj5 = { errorCode: constants.INVALID_COMMAND };
            const tmp16 = new RPCErrorDefault(obj5, "User is not enrolled in quest");
            throw tmp16;
          } else {
            const obj7 = { application_id: validateApplicationResult, quest_id };
            AnalyticsUtilsDefault.track(constants2.RPC_QUEST_START_TIMER_CALLED, obj7);
            const obj8 = { type: "QUEST_APPLICATION_START_TIMER", questId: quest_id, applicationId: validateApplicationResult };
            DispatcherDefault.dispatch(obj8);
            return { success: true };
          }
        }
      }
    }
    const obj9 = { errorCode: constants.INVALID_COMMAND };
    throw new RPCErrorDefault(obj9, "Quest not found: " + quest_id);
  }
});
CONTEXT_MENU_ICON_NAMES = fn(16922);
let obj5 = {
  scope: fn(7307).OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    const quest = QuestStore.getQuest(quest_id);
    const playActivityApplicationId = QuestTaskUtils.getPlayActivityApplicationId(quest);
    if (null != quest) {
      if (null != playActivityApplicationId) {
        if (playActivityApplicationId === validateApplicationResult) {
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          if (null == enrolledAt) {
            const obj5 = { errorCode: constants.INVALID_COMMAND };
            const tmp16 = new RPCErrorDefault(obj5, "User is not enrolled in quest");
            throw tmp16;
          } else {
            const obj7 = { application_id: validateApplicationResult, quest_id };
            AnalyticsUtilsDefault.track(constants2.RPC_QUEST_START_TIMER_CALLED, obj7);
            const obj8 = { type: "QUEST_APPLICATION_START_TIMER", questId: quest_id, applicationId: validateApplicationResult };
            DispatcherDefault.dispatch(obj8);
            return { success: true };
          }
        }
      }
    }
    const obj9 = { errorCode: constants.INVALID_COMMAND };
    throw new RPCErrorDefault(obj9, "Quest not found: " + quest_id);
  }
};
obj[RPCCommands.GET_QUEST] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_QUEST, {
  scope: fn(7307).OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    const activityQuestForApplicationId = QuestMatchingUtils.getActivityQuestForApplicationId(QuestStore.quests, validateApplicationResult);
    if (null == activityQuestForApplicationId) {
      const obj5 = { errorCode: constants.INVALID_COMMAND };
      const tmp12 = new RPCErrorDefault(obj5, "No eligible quests found");
      throw tmp12;
    } else {
      const obj7 = { quest_id: null, enrolled_at: null, completed_at: null, external_cta_url: null };
      ({ id: obj4.quest_id, userStatus } = activityQuestForApplicationId);
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      if (enrolledAt == null) {
        enrolledAt = null;
      }
      obj7.enrolled_at = enrolledAt;
      const userStatus2 = activityQuestForApplicationId.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      if (completedAt == null) {
        completedAt = null;
      }
      obj7.completed_at = completedAt;
      obj7.external_cta_url = activityQuestForApplicationId.config.ctaConfig.link;
      return obj7;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/quests.tsx");

export default obj;