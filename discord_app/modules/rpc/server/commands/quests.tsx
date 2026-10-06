// discord_app/modules/rpc/server/commands/quests.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import QuestTaskUtils from "../../../quests/utils/QuestTaskUtils.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import QuestMatchingUtils from "../../../quests/utils/QuestMatchingUtils.tsx";
import QuestStore from "../../../quests/QuestStore.tsx";
import Constants from "../../../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES_mod from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let RPCCommands;
let closure_4;
let hasOwnProperty;
({ RPCCommands, RPCErrors: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
let obj = {};
const GET_QUEST_ENROLLMENT_STATUS = RPCCommands.GET_QUEST_ENROLLMENT_STATUS;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  handler(socket) {
    let enrolledAt;
    let enrolledAt1;
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    const quest = QuestStore.getQuest(quest_id);
    const obj3 = QuestTaskUtils;
    const activityApplicationId = obj3.getActivityApplicationId(quest);
    if (null != quest) {
      if (null != activityApplicationId) {
        if (activityApplicationId === validateApplicationResult) {
          const userStatus = quest.userStatus;
          const obj4 = { quest_id, is_enrolled: null != enrolledAt, enrolled_at: enrolledAt1 };
          enrolledAt = undefined;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          const userStatus2 = quest.userStatus;
          enrolledAt1 = undefined;
          if (userStatus2 != null) {
            enrolledAt1 = userStatus2.enrolledAt;
          }
          if (enrolledAt1 == null) {
            enrolledAt1 = null;
          }
          return obj4;
        }
      }
    }
    const obj5 = { errorCode: constants.INVALID_COMMAND };
    const tmp8 = RPCErrorDefault;
    const tmp82 = new tmp8(obj5, "Quest not found: " + quest_id);
    throw tmp82;
  },
};
obj[GET_QUEST_ENROLLMENT_STATUS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_QUEST_ENROLLMENT_STATUS,
  obj2,
);
const QUEST_START_TIMER = RPCCommands.QUEST_START_TIMER;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj3 = {
  scope: OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    const quest = QuestStore.getQuest(quest_id);
    const obj3 = QuestTaskUtils;
    const playActivityApplicationId = obj3.getPlayActivityApplicationId(quest);
    if (null != quest) {
      if (null != playActivityApplicationId) {
        if (playActivityApplicationId === validateApplicationResult) {
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          if (null == enrolledAt) {
            const self = this;
            const self2 = this;
            const obj5 = { errorCode: constants.INVALID_COMMAND };
            const tmp14 = new RPCErrorDefault(obj5, "User is not enrolled in quest");
            throw tmp14;
          } else {
            const obj7 = { application_id: validateApplicationResult, quest_id };
            const obj4 = AnalyticsUtilsDefault;
            obj4.track(hasOwnProperty.RPC_QUEST_START_TIMER_CALLED, obj7);
            const obj8 = {
              type: "QUEST_APPLICATION_START_TIMER",
              questId: quest_id,
              applicationId: validateApplicationResult,
            };
            const obj6 = DispatcherDefault;
            obj6.dispatch(obj8);
            return { success: true };
          }
        }
      }
    }
    const obj9 = { errorCode: constants.INVALID_COMMAND };
    const tmp16 = RPCErrorDefault;
    const tmp162 = new tmp16(obj9, "Quest not found: " + quest_id);
    throw tmp162;
  },
};
obj[QUEST_START_TIMER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.QUEST_START_TIMER, obj3);
const GET_QUEST = RPCCommands.GET_QUEST;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = {
  scope: OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    let obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    const obj3 = QuestMatchingUtils;
    const eligibleQuestsForApplicationId = obj3.getEligibleQuestsForApplicationId(
      QuestStore.quests,
      validateApplicationResult,
      true,
    );
    if (0 === eligibleQuestsForApplicationId.length) {
      let self = this;
      let self2 = this;
      const obj4 = { errorCode: constants.INVALID_COMMAND };
      const tmp7 = new RPCErrorDefault(obj4, "No eligible quests found");
      throw tmp7;
    } else {
      const mapped = eligibleQuestsForApplicationId.map((id) => {
        let completedAt;
        let enrolledAt;
        const userStatus = id.userStatus;
        const obj = {
          quest_id: id.id,
          enrolled_at: enrolledAt,
          completed_at: completedAt,
          external_cta_url: id.config.ctaConfig.link,
        };
        enrolledAt = undefined;
        if (userStatus != null) {
          enrolledAt = userStatus.enrolledAt;
        }
        if (enrolledAt == null) {
          enrolledAt = null;
        }
        const userStatus2 = id.userStatus;
        completedAt = undefined;
        if (userStatus2 != null) {
          completedAt = userStatus2.completedAt;
        }
        if (completedAt == null) {
          completedAt = null;
        }
        return obj;
      });
      return mapped.sort(function (enrolled_at, enrolled_at2) {
        let num;
        if (null != enrolled_at.enrolled_at) {
          let num2 = 1;
          if (null != enrolled_at.enrolled_at) {
            let num3 = -1;
            if (null != enrolled_at2.enrolled_at) {
              const _Date = Date;
              const self = this;
              const self2 = this;
              const _Date2 = Date;
              const self3 = this;
              const self4 = this;
              const date = new Date(enrolled_at.enrolled_at);
              const time = date.getTime();
              const date1 = new Date(enrolled_at2.enrolled_at);
              num3 = time - date1.getTime();
            }
            num2 = num3;
          }
          num = num2;
        } else {
          num = 0;
        }
        return num;
      })[0];
    }
  },
};
obj[GET_QUEST] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_QUEST, obj4);
let result = size.fileFinishedImporting("modules/rpc/server/commands/quests.tsx");

export default obj;
