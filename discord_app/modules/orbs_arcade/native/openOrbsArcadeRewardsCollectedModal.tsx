// discord_app/modules/orbs_arcade/native/openOrbsArcadeRewardsCollectedModal.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = globalThis.__r;

const require = fn;
const OrbsArcadeRewardsCollectedModal = "OrbsArcadeRewardsCollectedModal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/openOrbsArcadeRewardsCollectedModal.tsx");

export function openOrbsArcadeRewardsCollectedModal(rewards, entitlements) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(
    asyncGeneratorStep(async () => {
      await require("asyncRequireImpl")(paths[3], paths.paths);
      return value.default;
    }),
    { rewards, entitlements },
    OrbsArcadeRewardsCollectedModal,
  );
}
export function closeOrbsArcadeRewardsCollectedModal() {
  ModalActionCreatorsDefault.popWithKey(OrbsArcadeRewardsCollectedModal);
}
