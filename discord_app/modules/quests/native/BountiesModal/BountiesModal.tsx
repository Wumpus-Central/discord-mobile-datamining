// discord_app/modules/quests/native/BountiesModal/BountiesModal.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const bounty_main = "bounty_main";
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default noop.memo(function BountiesModal(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  const variant = bountyId.variant;
  const items = [bountyId, sourceQuestContent, variant];
  const memo = noop.useMemo(
    () => ({
      [closure_2_5]: {
        fullscreen: true,
        headerLeft() {
          return null;
        },
        render() {
          if (closure_1_2 === bountyId(variant[2]).BountiesModalVariant.VERTICAL_SCROLL) {
            let obj = { bountyId, sourceQuestContent };
            let tmp6 = jsx(sourceQuestContent(variant[3]), { bountyId, sourceQuestContent });
          } else {
            obj = { bountyId, sourceQuestContent };
            tmp6 = jsx(sourceQuestContent(variant[4]), { bountyId, sourceQuestContent });
          }
          return tmp6;
        },
      },
    }),
    items,
  );
  const layoutEffect = noop.useLayoutEffect(() => {
    bountyId(variant[5]).applyOrientationLock("PORTRAIT");
    return bountyId(variant[5]).restoreDefaultOrientationLock;
  }, []);
  return jsx(bountyId(variant[6]).Modal, {
    hideTitle: true,
    initialRouteName: bounty_main,
    screens: memo,
    viewStyle: { backgroundColor: "#000000" },
  });
});
