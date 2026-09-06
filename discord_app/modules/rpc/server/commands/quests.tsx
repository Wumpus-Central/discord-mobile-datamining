// discord_app/modules/rpc/server/commands/quests.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import QuestTaskUtils from "../../../quests/utils/QuestTaskUtils.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import QuestMatchingUtils from "../../../quests/utils/QuestMatchingUtils.tsx";
import QuestStore from "../../../quests/QuestStore.tsx";

require = fn;
const Constants = fn(1074);
({ RPCCommands, RPCErrors: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
let obj = {};
obj = {
  scope: fn(8339).OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    let obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const quest = QuestStore.getQuest(quest_id);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    const activityApplicationId = QuestTaskUtils.getActivityApplicationId(quest);
    if (null != quest) {
      if (null != activityApplicationId) {
        if (activityApplicationId === validateApplicationResult) {
          obj = { quest_id, is_enrolled: null, enrolled_at: null };
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          obj.is_enrolled = null != enrolledAt;
          const userStatus2 = quest.userStatus;
          let enrolledAt1;
          if (userStatus2 != null) {
            enrolledAt1 = userStatus2.enrolledAt;
          }
          if (enrolledAt1 == null) {
            enrolledAt1 = null;
          }
          obj.enrolled_at = enrolledAt1;
          return obj;
        }
      }
    }
    obj = { errorCode: constants.INVALID_COMMAND };
    let tmp8 = RPCErrorDefault;
    tmp8 = new tmp8(obj, "Quest not found: " + quest_id);
    throw tmp8;
  },
};
obj[RPCCommands.GET_QUEST_ENROLLMENT_STATUS] = obj;
obj = {
  scope: fn(8339).OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    let obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = RPCHelpers;
    const validateApplicationResult = obj1.validateApplication(socket.application);
    const quest = QuestStore.getQuest(quest_id);
    let obj2 = QuestTaskUtils;
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
            obj = { errorCode: constants.INVALID_COMMAND };
            const tmp16 = new RPCErrorDefault(obj, "User is not enrolled in quest");
            throw tmp16;
          } else {
            obj = { application_id: validateApplicationResult, quest_id };
            AnalyticsUtilsDefault.track(constants2.RPC_QUEST_START_TIMER_CALLED, obj);
            obj1 = {
              type: "QUEST_APPLICATION_START_TIMER",
              questId: quest_id,
              applicationId: validateApplicationResult,
            };
            DispatcherDefault.dispatch(obj1);
            return { success: true };
          }
        }
      }
    }
    obj2 = { errorCode: constants.INVALID_COMMAND };
    let tmp18 = RPCErrorDefault;
    tmp18 = new tmp18(obj2, "Quest not found: " + quest_id);
    throw tmp18;
  },
};
obj[RPCCommands.QUEST_START_TIMER] = obj;
obj[RPCCommands.GET_QUEST] = {
  scope: fn(8339).OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    let obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    const eligibleQuestsForApplicationId = QuestMatchingUtils.getEligibleQuestsForApplicationId(
      QuestStore.quests,
      validateApplicationResult,
      true,
    );
    if (0 === eligibleQuestsForApplicationId.length) {
      obj = { errorCode: constants.INVALID_COMMAND };
      const tmp9 = new RPCErrorDefault(obj, "No eligible quests found");
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
        obj.enrolled_at = enrolledAt;
        const userStatus2 = id.userStatus;
        let completedAt;
        if (userStatus2 != null) {
          completedAt = userStatus2.completedAt;
        }
        if (completedAt == null) {
          completedAt = null;
        }
        obj.completed_at = completedAt;
        obj.external_cta_url = id.config.ctaConfig.link;
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
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/quests.tsx");

export default obj;
