// === Module 15003: BountiesModal ===

// Module 15003 (BountiesModal)
import noop from "module_19" /* 19 */;

const require = fn;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsx = fn(21).jsx;
const bounty_main = "bounty_main";
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default noop.memo(function BountiesModal(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  let verticalScrollEnabled;
  let obj = bountyId(verticalScrollEnabled[3]);
  verticalScrollEnabled = obj.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE).verticalScrollEnabled;
  const items = [bountyId, sourceQuestContent, verticalScrollEnabled];
  const memo = noop.useMemo(() => ({
    [closure_2_6]: {
      fullscreen: true,
      headerLeft() {
        return null;
      },
      render() {
        return jsx(sourceQuestContent(closure_1_2 ? verticalScrollEnabled[4] : verticalScrollEnabled[5]), { bountyId, sourceQuestContent });
      }
    }
  }), items);
  const layoutEffect = noop.useLayoutEffect(() => {
    bountyId(verticalScrollEnabled[6]).applyOrientationLock("PORTRAIT");
    return bountyId(verticalScrollEnabled[6]).restoreDefaultOrientationLock;
  }, []);
  obj = { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } };
  return jsx(bountyId(verticalScrollEnabled[7]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } });
});