// === Module 14428: ? ===

// Module 14428
import importAllResult from "noop" /* 19 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 6753 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const bounty_main = "bounty_main";
const memoResult = importAllResult.memo(function BountiesModal(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  let verticalScrollEnabled;
  let obj = bountyId(verticalScrollEnabled[3]);
  verticalScrollEnabled = obj.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE).verticalScrollEnabled;
  const items = [bountyId, sourceQuestContent, verticalScrollEnabled];
  const memo = importAllResult.useMemo(() => ({
    [closure_1_6]: {
      fullscreen: true,
      headerLeft() {
        return null;
      },
      render() {
        return closure_1_5(closure_1_1(closure_2 ? closure_1_2[4] : closure_1_2[5]), { bountyId: closure_0, sourceQuestContent: closure_1 });
      }
    }
  }), items);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    bountyId(verticalScrollEnabled[6]).applyOrientationLock("PORTRAIT");
    return bountyId(verticalScrollEnabled[6]).restoreDefaultOrientationLock;
  }, []);
  obj = { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } };
  return jsx(bountyId(verticalScrollEnabled[7]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } });
});
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default memoResult;