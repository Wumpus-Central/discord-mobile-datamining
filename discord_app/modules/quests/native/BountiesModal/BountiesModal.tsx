// === Module 14053: ? ===

// Module 14053
import importAllResult from "noop";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { jsx } from "jsxProd";

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
    [outer1_6]: {
      fullscreen: true,
      headerLeft() {
        return null;
      },
      render() {
        return outer1_5(outer1_1(closure_2 ? outer1_2[4] : outer1_2[5]), { bountyId: closure_0, sourceQuestContent: closure_1 });
      }
    }
  }), items);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    bountyId(verticalScrollEnabled[6]).lockOrientation("PORTRAIT", true);
    return bountyId(verticalScrollEnabled[6]).restoreDefaultOrientation;
  }, []);
  obj = { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } };
  return jsx(bountyId(verticalScrollEnabled[7]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } });
});
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default memoResult;